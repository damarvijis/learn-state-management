export type CounterPropsType = {
  counter: number
  onPlusButtonClick: () => void
  onMinusButtonClick: () => void
};

export const Counter = (props: CounterPropsType) => (
  <div>
    <button onClick={props.onMinusButtonClick}>-</button>
    <span>{props.counter}</span>
    <button onClick={props.onPlusButtonClick}>+</button>
  </div>
)
