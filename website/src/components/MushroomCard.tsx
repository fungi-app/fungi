import { type Family } from "@fungi/db"
import { EATABLE_GRADE } from "@fungi/db"
import { EatableGradeIcon } from "./icons/Eatable"
import { IsRedBookedIcon } from "./icons/RedBooked"

interface MushroomCardProps {
    name: String;
    latinName: String;
    redBooked: boolean;
    eatable: EATABLE_GRADE;
    family: Family;
}

export function MushroomCard(props: MushroomCardProps) {
    // Карточка гриба
    return (
        <div className="mushroomCard"> {/* Карточка с Figma -> Приложение */}
            <img className="mushroomImage" src={"https://upload.wikimedia.org/wikipedia/commons/b/b0/Boletus_edulis_EtgHollande_041031_091.jpg"} alt="Mushroom!" />
            <div className="mushroomCardText">
                <div className="family">
                    {props.family.name} ({props.family.latinName})
                </div>
                <div className="title">
                    {props.name}
                </div>
                <div className="latinName">
                    {props.latinName}
                </div>
                <div className="eatableRedBooked">
                    <i className="mushroomIcons">{EatableGradeIcon(props.eatable)}</i>
                    <i className="mushroomIcons">{IsRedBookedIcon(props.redBooked)}</i>
                </div>
            </div>
        </div>
    )
}