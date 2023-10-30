import { MushroomCard } from "./MushroomCard";
import { trpc } from "../lib/trpc";

export function MushroomList() {
    // Вывод всех карточек грибов из бд
    // Вот команда для добавления тестового гриба
    // Изображение выбрано в css
    // insert into "Mushroom" (name, "latinName", "redBooked", eatable, description, "synonymousNames", have_foot, head_type, hymenophore, "familyId")
    // values ('Гриб', 'Mushroom', true, 'PARTIALLY_EATABLE', 'Он большой, он крутой, он грибной!', '{"Гриб обыкновенный"}', false, 'CONCAVE', 'LAMELLAR', 2);

    const mushrooms = trpc.mushrooms.getPaginated.useQuery({
        page: 0,
        perPage: 1000,
    });

    return (
        <div className="cardList">
            {
                mushrooms.data?.map((mushroom) => (
                    <MushroomCard
                        name={mushroom.name}
                        latinName={mushroom.latinName}
                        redBooked={mushroom.redBooked}
                        eatable={mushroom.eatable}
                        family={mushroom.family}
                    />
                ))
            }
        </div>
    )
}