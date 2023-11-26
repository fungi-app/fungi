import {useState} from 'react';
import {ChangeEvent} from 'react';

interface IInputForm {
    title?: string 
    inputName: string
    unit?: string
    placeholder?: string
    required: boolean
    value?: Function
    onChange?: Function // Использовать только когда нужны допополнительные параметры
}

export function NumberInput (props: IInputForm){
  const [value, setValue] = useState(0);

  if (props.value) props.value(value)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(event);
    setValue(Number(event.target.value));
  }

  return (
        <label>{props.title}
        <input
            type="number"
            placeholder={props.placeholder || props.title}
            name = {props.inputName}
            required = {props.required}
            value={value}
            onChange={onChange}
        />
        {props.unit}
        </label>
      
  )
}

NumberInput.defaultProps = {
    title: "Введите текст",
    formName: "name",
}