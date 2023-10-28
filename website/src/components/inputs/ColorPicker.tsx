import { useEffect } from "react";
import { trpc } from "../../lib/trpc";
import { ColorItem } from "./Color"
import { Color } from "@fungi/db"


interface IColorPicker {
    title: string
    formName: string
}

function  ColorPicker (props: IColorPicker){
   
    
    useEffect(() => {
        // const colors = trpc.color.getAll()//.query()
        // console.log(colors)
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

export default ColorPicker;
