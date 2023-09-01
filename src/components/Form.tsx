export type FormPropsType = {
  name: string
  onChange: (name: string) => void
}

export const Form = (props: FormPropsType) => (
  <div>
    <input
      type="text"
      value={props.name}
      onChange={(event) => props.onChange(event.target.value)}
    />
  </div>
)
