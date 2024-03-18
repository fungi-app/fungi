import IMushroom from "../types/mushroom"

import { EatableGradeIcon } from "./icons/Eatable"
import { IsRedBookedIcon } from "./icons/RedBooked"


interface mushroomCardProps {
    mushroom: IMushroom,
}

export function MushroomCard(props: mushroomCardProps) {
    // Карточка гриба
    return (
        <div className="mushroomCard"> {/* Карточка с Figma -> Приложение */}
            <img className="mushroomImage" src={"mushroom.images[0].preview_url"} alt="Mushroom!" />
            <div className="mushroomCardText">
                <div className="family">
                    {props.mushroom.family.name} ({props.mushroom.family.latin_name})
                </div>
                <div className="title">
                    {props.mushroom.name}
                </div>
                <div className="latinName">
                    {props.mushroom.name}
                </div>
                <div className="eatableRedBooked">
                    <i className="mushroomIcons">{EatableGradeIcon(props.mushroom.eatable)}</i>
                    <i className="mushroomIcons">{IsRedBookedIcon(props.mushroom.red_booked)}</i>
                </div>
            </div>
        </div>
    )
}
