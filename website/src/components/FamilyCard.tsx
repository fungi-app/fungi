interface FamilyProps {
    name: string;
    latinName: string;
}

export function FamilyCard(props: FamilyProps) {
    return (
        <div className="MushroomCard">
            <div className="family"> {props.latinName} </div>
            <div className="title"> {props.name} </div>
        </div>
    )
}