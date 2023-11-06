import { MushroomCard } from "./MushroomCard";
import { trpc } from "../lib/trpc";

interface mushroomListProps {
    search_text: string,
}

export function MushroomList(props: mushroomListProps) {
    // Вывод всех карточек грибов из бд
    // Вот команда для добавления тестового гриба
    // Изображение выбрано в css
    // insert into "Mushroom" (name, "latinName", "redBooked", eatable, description, "synonymousNames", have_foot, head_type, hymenophore, "familyId")
    // values ('Гриб', 'Mushroom', true, 'PARTIALLY_EATABLE', 'Он большой, он крутой, он грибной!', '{"Гриб обыкновенный"}', false, 'CONCAVE', 'LAMELLAR', 2);

    const mushrooms = trpc.mushrooms.getPaginated.useQuery({
        page: 0,
        perPage: 1000,
    });
    
    if (!mushrooms.data) {
        return (<span>Грибов нет</span>)
    }

    const mushrooms_data = mushrooms.data.map(mushroom => {
        if (props.search_text == mushroom.name) return mushroom
    })

    return (
        <div className="cardList">
            {!mushrooms_data && <span>Нет грибов</span>}
            {
                !!mushrooms_data.map((mushroom) => {
                    if (!mushroom) return (<span>Гриб сломан</span>)
                    return (
                    <MushroomCard
                        name={mushroom.name}
                        latinName={mushroom.latinName}
                        redBooked={mushroom.redBooked}
                        eatable={mushroom.eatable}
                        family={mushroom.family}
                    />
                    )}
                )
            }
        </div>
    )
}