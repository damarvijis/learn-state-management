import React from "react"

type ListenerType<State> = (prevState: State, nextState: State) => void

type StoreType<State> = {
  getState: () => State
  setState: (fn: (state: State) => Partial<State>) => void
  subscribe: (listener: ListenerType<State>) => () => void
}

export const createStore = <State,>(initialState: State): StoreType<State> => {
  let state = initialState

  const listeners = new Set<ListenerType<State>>()

  const getState: StoreType<State>["getState"] = () => state

  const setState: StoreType<State>["setState"] = (fn) => {
    const prevState = { ...state }
    const nextState = { ...prevState, ...fn(state) }
    state = nextState
    listeners.forEach(listener => listener(prevState, nextState))
  }

  const subscribe: StoreType<State>["subscribe"] = (listener) => {
    listeners.add(listener)
    return () => listeners.delete(listener)
  }

  return { getState, setState, subscribe }
}

// using force update pattern
export const useStore = <State,>(store: StoreType<State>) => {
  const [_, forceUpdate] = React.useReducer((c) => c + 1, 0)

  React.useEffect(() => {
    const unsubscribe = store.subscribe((prevState, nextState) => {
      forceUpdate()
    })
    return unsubscribe
  }, [store])

  return [store.getState(), store.setState] as const
}

// using new React hooks
export const useStoreExternal = <State,>(store: StoreType<State>) => {
  const state = React.useSyncExternalStore(store.subscribe, store.getState)
  return [state, store.setState] as const
}

type UseSelectorParamsType<State, SelectorState> = {
  store: StoreType<State>
  selector: (state: State) => SelectorState
}

export const useSelector = <State, SelectorState>({ store, selector }: UseSelectorParamsType<State, SelectorState>) => {
  const state = store.getState()

  const [_, forceUpdate] = React.useReducer((c) => c + 1, 0)

  React.useEffect(() => {
    const unsubscribe = store.subscribe((prevState, nextState) => {
      const prevSelectorState = selector(prevState)
      const nextSelectorState = selector(nextState)

      if (prevSelectorState !== nextSelectorState) {
        forceUpdate()
      }
    })
    return unsubscribe
  }, [store])

  return selector(state)
}

// practice
type StoreContextType<State> = {
  store: StoreType<State>
}

const getContext = <State,>() => {
  return React.createContext<StoreContextType<State>>({
    store: {} as StoreType<State>
  })
}

const Context = getContext()

type ProviderPropsType<State> = {
  children: React.ReactNode
  store: StoreType<State>
}

export const Provider = <State,>(props: ProviderPropsType<State>) => {
  return <Context.Provider value={{ store: props.store }}>{props.children}</Context.Provider>
}

type UseSelectorProviderParamsType<State, SelectorState> = (state: State) => SelectorState

export const useSelectorProvider = <State, SelectorState>(selector: UseSelectorProviderParamsType<State, SelectorState>) => {
  const { store } = React.useContext(Context)
  const state = store.getState()

  const [_, forceUpdate] = React.useReducer((c) => c + 1, 0)

  React.useEffect(() => {
    const unsubscribe = store.subscribe((prevState, nextState) => {
      // @ts-ignore
      const prevSelectorState = selector(prevState)
      // @ts-ignore
      const nextSelectorState = selector(nextState)
      if (prevSelectorState !== nextSelectorState) {
        forceUpdate()
      }
    })
    return unsubscribe
  }, [store])

  // @ts-ignore
  return selector(state)
}

export const useSelectorProviderExternal = <State, SelectorState>(selector: UseSelectorProviderParamsType<State, SelectorState>) => {
  const { store } = React.useContext(Context)
  const getSnapshot = () => {
    const state = store.getState()
    // @ts-ignore
    return selector(state)
  }
  const selectorState = React.useSyncExternalStore(store.subscribe, getSnapshot, getSnapshot)
  return selectorState
}

