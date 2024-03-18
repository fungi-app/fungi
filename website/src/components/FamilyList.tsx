import { FamilyCard } from "./FamilyCard";
//import { IFamily } from ".."


interface familyListProps {
    search_text: string,
}

export function FamilyList(props: familyListProps) {
    // Вывод всех карточки семейств из бд
    
    const families = {data: false};
    
    //const families = trpc.family.getPaginated.useQuery({
    //    page: 0,
    //    perPage: 1000
    //});

    if (!families.data) {
        return <span>Семейств нет</span>
    }

    const families_data = families.data.map(family => {
        if (props.search_text === family.name) return family
    })

    return (

        <div className="cardList">
            {!families_data && <span>Нет грибов</span>}
            {
                families.data.filter(
                    family => { 
                        return (family.name.toLowerCase().includes(props.search_text.toLowerCase().trim()) ||
                        family.latinName.toLowerCase().includes(props.search_text.toLowerCase().trim()))
                    })
                    .map((family) => (
                        <FamilyCard
                            name={family.name}
                            latinName={family.latinName}
                        />
                    ))
            }
        </div>
    )
}
