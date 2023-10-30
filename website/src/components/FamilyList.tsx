import { FamilyCard } from "./FamilyCard";
import { trpc } from "../lib/trpc";

export function FamilyList() {
    // Вывод всех карточки сейместв из бд
    const families = trpc.family.getPaginated.useQuery({
        page: 0,
        perPage: 1000
    });

    console.log(families.data)

    return (

        <div className="cardList">
            {
                families.data?.map((family) => (
                    <FamilyCard
                        name={family.name}
                        latinName={family.latinName}
                    />
                ))
            }
        </div>
    )
}