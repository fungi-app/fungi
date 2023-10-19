interface IInputForm {
    title: string 
    formName: string
    placeholder?: string
    required: boolean
}

function  TextInput (props: IInputForm){
  return (
      <label
        >{props.title}<input
        placeholder={props.placeholder || props.title}
        name = {props.formName}
        required = {props.required}
      /></label>
  )
}

TextInput.defaultProps = {
    title: "Введите текст",
    formName: "name",
}

function  BigTextInput (props: IInputForm){
  return (
      <label
        >{props.title}<textarea 
        name = {props.formName}
        placeholder={props.placeholder || props.title}>
        </textarea>
      </label>
  )
}

TextInput.defaultProps = {
    title: "Введите текст",
    formName: "name",
}

export {TextInput, BigTextInput};
