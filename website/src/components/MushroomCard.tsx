import { type Family } from "@fungi/db"
import { EATABLE_GRADE } from "@fungi/db"
import { EatableGradeIcon } from "D:/Education/2 семестр/PD/rep/fungi/frontend/src/components/icons/Eatable"
import { IsRedBookedIcon } from "D:/Education/2 семестр/PD/rep/fungi/frontend/src/components/icons/RedBooked"

interface MushroomCardProps {
    id: number
    name: String;
    latinName: String;
    redBooked: { isRedBooked: boolean;};
    eatable: { grade: EATABLE_GRADE; };
    family: Family;
}

export function MushroomCard(props: MushroomCardProps) {
    return (
        <div className="MushroomCard"> {/* Карточка с Figma -> Приложение */}
            <div className="MushroomCardText">
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
                    <i>{EatableGradeIcon(props.eatable)}</i>
                    <i>{IsRedBookedIcon(props.redBooked)}</i>
                </div>
            </div>
            <img className="mushroomImage" src={"https://upload.wikimedia.org/wikipedia/commons/b/b0/Boletus_edulis_EtgHollande_041031_091.jpg"} alt="Mushroom!" />
        </div>
    )
}