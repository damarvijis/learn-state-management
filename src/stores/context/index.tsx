import { createContext, useContext, ReactNode, useState } from "react";

export type ContextLearnType = {
  counter: number;
  setCounter: (counter: number) => void;
  name: string;
  setName: (name: string) => void;
};

const ContextLearn = createContext<ContextLearnType>({
  counter: 0,
  setCounter: () => { },
  name: "",
  setName: () => { },
});

export const useContextLearn = () => useContext(ContextLearn);

type ContextLearnProviderPropsType = { children: ReactNode };

export const ContextLearnProvider = (props: ContextLearnProviderPropsType) => {
  const [counter, setCounter] = useState<number>(0);
  const [name, setName] = useState<string>("");
  return (
    <ContextLearn.Provider value={{ counter, setCounter, name, setName }}>
      {props.children}
    </ContextLearn.Provider>
  );
};