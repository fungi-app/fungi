import {useState} from 'react';
import {ChangeEvent} from 'react';

interface IInputForm {
    title?: string 
    inputName: string
    placeholder?: string
    required: boolean
    value?: Function
    onChange?: Function // Использовать только когда нужны допополнительные параметры
}

function TextInput (props: IInputForm){
  const [value, setValue] = useState('');

  if (props.value) props.value(value)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(event);
    setValue(event.target.value);
  }

  return (
      <label
        >{props.title}<input
        placeholder={props.placeholder || props.title}
        name = {props.inputName}
        required = {props.required}
        value={value}
        onChange={onChange}
      /></label>
      
  )
}

TextInput.defaultProps = {
    title: "Введите текст",
    formName: "name",
}

function ArrayTextInput (props: IInputForm){
  const initValues: {[id: string]: string} = {} as {[id: string]: string};

  const [numberOfFields, setNumberOfFields] = useState (0);
  const [values, setValues] = useState(initValues);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const appendField = () => {
    setValues({
      ...values,
      [numberOfFields+"-input"]: "",
    });
    setNumberOfFields(numberOfFields + 1)
  }

  const keys = Object.keys(values)

  // const getValues = () => {
  //   let out: string[] = [];
  //   for (let key in values) out.push (values[key]);
  //   return out;
  // }

  if (props.value) props.value(values);



  return (
    <label
      >{props.title}
      <ul>
        {!keys && <span>Нет данных</span>}
        {!!keys && keys.map (key => {
          return <TextInput inputName={key} onChange={handleInputChange} required={true} />
        })
        }
      </ul>
      <button type='button' onClick={appendField}>Добавить</button>
    </label>
)
}

function  BigTextInput (props: IInputForm){
  const [value, setValue] = useState('');

  if (props.value) props.value(value);


  return (
      <label
        >{props.title}<textarea
        name = {props.inputName}
        placeholder={props.placeholder || props.title}
        required = {props.required}
        value={value}
        onChange={event => setValue(event.target.value)}>
        </textarea>
      </label>
  )
}

TextInput.defaultProps = {
    title: "Введите текст",
    formName: "name",
}

export {TextInput, BigTextInput, ArrayTextInput};