import {useState} from 'react';
import React from 'react';

interface IInputForm {
    title: string 
    formName: string
    placeholder?: string
    required: boolean
    value: Function
}

function  TextInput (props: IInputForm){
  const [value, setValue] = useState('');

  props.value(value)

  return (
      <label
        >{props.title}<input
        placeholder={props.placeholder || props.title}
        name = {props.formName}
        required = {props.required}
        value={value}
        onChange={event => setValue(event.target.value)}
      /></label>
      
  )
}

TextInput.defaultProps = {
    title: "Введите текст",
    formName: "name",
}

function  BigTextInput (props: IInputForm){
  const [value, setValue] = useState('');

  props.value(value)


  return (
      <label
        >{props.title}<textarea
        name = {props.formName}
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

export {TextInput, BigTextInput};
