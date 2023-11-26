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

import {Color} from "@fungi/db"

export function ColorItem (props: Color) {
    return (
        <div className = "colorItem">
            <div className="coloredDiv" style={{
                background: props.hex
            }}></div>
            {props.name}
        </div>
    )
}

ColorItem.defaultProps = {
    name: "Неопределнный цвет",
    hex: "red"
}