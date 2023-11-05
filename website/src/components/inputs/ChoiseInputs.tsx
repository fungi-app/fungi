import { title } from "process";
import { useState, ChangeEvent } from "react"

interface choiseSearchProps {
    placeholder?: string
    value?: Function
    onChange?: Function // Использовать только когда нужны допополнительные параметры
}

function ChoiseSearch (props: choiseSearchProps){
  const [value, setValue] = useState('');

  if (props.value) props.value(value)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) props.onChange(event);
    setValue(event.target.value);
  }

  return (
    <input
        placeholder={props.placeholder}
        value={value}
        onChange={onChange}
      />
  )
}
interface smallChoiseInputProps {
    name: string,
    value: number,
    title: string,
}

function ChoiseInlineElement (props: smallChoiseInputProps){
    return (
        <label>
        {props.title}
        <input name={props.name} type="radio" value={props.value}/>
        </label>
    )
}

interface choiseProps {
    title: string,
    name: string,
    data?: smallChoiseInputProps[],
    value: Function
}

export function bigChoiseInput (porps: choiseProps){
    return (
        ChoiseSearch({placeholder: "Поиск"})
    )

}

        // {!!data && data.map (iprops => {
        //     return <ChoiseInlineElement value={iprops.value} title={iprops.title}/>
        // })}

export function SmallChoiseInput (props: choiseProps){
    const [value, setValue] = useState(0);

    return (
        <div>
            {props.title}
            {!props.data && <span>Нет данных</span>}
            {!!props.data && props.data.map (iprops => {
                return <ChoiseInlineElement name={props.name} value={iprops.value} title={iprops.title}/>
            })
            }
        </div>
    )

}

interface booleanChoiseInput {
    title: string,
    inputName: string,
    value: Function
}

export function BooleanChoiseInput (props: booleanChoiseInput){
    const inputsData: smallChoiseInputProps[] = [
        {value: 0, title: "Нет", name: props.inputName},
        {value: 1, title: "Да", name: props.inputName},
    ]

    return (<SmallChoiseInput title={props.title} name={props.inputName} data={inputsData} value={props.value}/>)
}