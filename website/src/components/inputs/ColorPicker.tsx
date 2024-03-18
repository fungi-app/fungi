import { useEffect, useState } from "react";

// export const COLOR_HAME_DICT = {
//     [COLOR.RED]: "Красный",
//     [COLOR.GREY]: "Серый",
//     [COLOR.BLACK]: "Черный",
//     [COLOR.WHITE]: "Белый",
//     [COLOR.BROWN]: "Коричневый",
//     [COLOR.YELLOW]: "Желтый",
//     [COLOR.ORANGE]: "Оранжевый",
// }

// export const COLOR_HEX_DICT = {
//     [COLOR.RED]: "#FFC5C5",
//     [COLOR.GREY]: "#A7A7A7",
//     [COLOR.BLACK]: "#000",
//     [COLOR.WHITE]: "#fff",
//     [COLOR.BROWN]: "#9D4A32",
//     [COLOR.YELLOW]: "#FFE8C5",
//     [COLOR.ORANGE]: "#FF7400",
// }

export interface colorItem {
  title: string
  hex: string
}

interface colorItemProps {
  title: string
  hex: string
}

export function ColorItem (props: colorItemProps) {
  return (
    <div className = "colorItem">
      <div 
        className="coloredDiv"
        style={{
          background: props.hex
        }}>
      </div>
      {props.title}
    </div>
  )
}

ColorItem.defaultProps = {
  title: "Неопределнный цвет",
  hex: "red"
}


interface IColorPicker {
  title: string
  formName: string
  colors: colorItem[] | undefined
  setValue: Function
}

export function ColorPicker (props: IColorPicker){ 
  const [value, setValue] = useState(0);
   
  useEffect(() => {
  })

  return (
    <label>
      {props.title}
      <select required name={props.formName}>
          {/* {!!colors.data &&
            colors.data.map((color: any) => (
            <ColorItem color={color}/>
          ))
        } */}
      </select>
    </label>
  )
}

ColorPicker.defaultProps = {
  title: "Выберите цвет",
  formName: "color",
}

