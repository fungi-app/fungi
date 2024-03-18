import { useState, ChangeEvent } from "react"
import { SearchInput } from "./TextInputs"


interface choiseItemProps {
    inputName: string,
    value: number,
    title: string,
    isHidden: boolean
    setValue: Function
}


export interface choiseItem {
    value: number,
    title: string,
}


function ChoiseItem (props: choiseItemProps){
  const [value, setValue] = useState(props.value);

  if (props.setValue) props.setValue(value)

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(Number(event.target.value));
  }
  
  return (
    <label
      className={props.isHidden ? 'hidden' : ''}
    >
      {props.title}
      <input 
        name={props.inputName} 
        type="radio" 
        value={value}
        onChange={onChange}
      />
    </label>
  )
}

ChoiseItem.defaultProps = {
    isHidden: false,
}


interface choiseProps {
    title: string,
    inputName: string,
    data?: choiseItem[] | undefined,
    setValue: Function
}


export function BigChoiseInput (props: choiseProps){ 
  const [searchQuery, setSearchQuery] = useState('');
  const [value, setValue] = useState(0);

  if (props.setValue) props.setValue(value)

  return (
    <>
      {props.title}
      <SearchInput
        title={props.title}
        setValue={setSearchQuery}
        required={false}
      />
      <div className="big-choise-list">
        {!props.data && <span>Нет данных</span>}
        {!!props.data && props.data.map (iprops => {
          return <ChoiseItem
            inputName={props.inputName}
            value={iprops.value}
            title={iprops.title}
            setValue={setValue}
            isHidden={!iprops.title.includes(searchQuery)}
          />
          })
        }
      </div>
    </>
  )
}


export function SmallChoiseInput (props: choiseProps){
  const [value, setValue] = useState(0);

  return (
    <div>
      {props.title}
      {!props.data && <span>Нет данных</span>}
      {!!props.data && props.data.map (iprops => {
        return <ChoiseItem 
          inputName={props.inputName} 
          value={iprops.value} 
          title={iprops.title}
          setValue={setValue} 
        />
        })
      }
    </div>
  )
}

interface booleanChoiseInput {
  title: string,
  inputName: string,
  setValue: Function
}

export function BooleanChoiseInput (props: booleanChoiseInput){
  const inputsData: choiseItem[] = [
    {value: 0, title: "Нет"},
    {value: 1, title: "Да"},
  ]

  return (
    <SmallChoiseInput 
      title={props.title} 
      inputName={props.inputName} 
      data={inputsData} 
      setValue={props.setValue}
    />
  )
}

