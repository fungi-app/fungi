import { SearchInput } from "./inputs/TextInputs";
import {SearchElement} from "./icons/Search";

interface searchProps {
    title: string,
    value: Function | undefined,
    inputName: string,
    required: boolean,
}

export function Search(props:searchProps) {
  return (
    <div className="search-form">
      <button className="search-button">
        <svg className="search-svg">
          {SearchElement()}
        </svg>
      </button>
      <SearchInput
        title={props.title}
        setValue={props.value}
        inputName="inputName"
        required={props.required}
      />
    </div>
  )
}
