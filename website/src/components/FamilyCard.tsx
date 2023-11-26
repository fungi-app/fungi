interface FamilyProps {
    name: string;
    latinName: string;
}

export function FamilyCard(props: FamilyProps) {
    // Карточка семейства
    
    return (
        <div className="mushroomCard">
            <div className="family">({props.latinName})</div>
            <div className="title">{props.name}</div>
        </div>
    )
}