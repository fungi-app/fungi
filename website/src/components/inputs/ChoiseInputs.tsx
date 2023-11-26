import { title } from "process";
import { useState, ChangeEvent } from "react"


interface choiseInputItemProps {
    name: string,
    value: number,
    title: string,
}

function ChoiseInlineElement (props: choiseInputItemProps){
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
    data?: choiseInputItemProps[],
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
    const inputsData: choiseInputItemProps[] = [
        {value: 0, title: "Нет", name: props.inputName},
        {value: 1, title: "Да", name: props.inputName},
    ]

    return (<SmallChoiseInput title={props.title} name={props.inputName} data={inputsData} value={props.value}/>)
}
