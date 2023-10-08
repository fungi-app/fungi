import { type Family } from "@fungi/db"
import { EatableGrade } from "@fungi/db"

interface MushroomCardProps {
    id: number
    name: String;
    latinName: String;
    redBooked: Boolean;
    eatable: EatableGrade;
    family: Family;
}

export function MushroomCard(props: MushroomCardProps) {
    return (
        <div className="comparer">
            <div className="MushroomCardOld"> {/* Карточка с прошлого семестра */}
                <div className="familyOld">
                    {props.family.name} ({props.family.latinName})
                </div>
                <div className="titleOld">
                    {props.name}
                </div>
                <div className="latinNameOld">
                    {props.latinName}
                </div>
                <img className="mushroomImageOld" src={"https://upload.wikimedia.org/wikipedia/commons/b/b0/Boletus_edulis_EtgHollande_041031_091.jpg"} alt="Mushroom!" />
            </div>

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
                        <img className="mushroomIcons" src={props.eatable ? "https://i.imgur.com/3s672el.png" : "https://i.imgur.com/3s672el.png"} alt="Съедобность" /> 
                        <img className="mushroomIcons" src={props.redBooked ? "https://i.imgur.com/JWFxT5W.png" : "https://i.imgur.com/JWFxT5W.png"} alt="Красно-книжность" />
                    </div>
                </div>
                <img className="mushroomImage" src={"https://upload.wikimedia.org/wikipedia/commons/b/b0/Boletus_edulis_EtgHollande_041031_091.jpg"} alt="Mushroom!" />
            </div>
        </div>
    )
}