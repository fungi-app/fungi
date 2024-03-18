import { useEffect, useState } from "react";
import { MushroomCard } from "./MushroomCard";
import IMushroom from "../types/mushroom"
import MushroomDataService from "../services/mushroom"

interface mushroomListProps {
    search_text: string,
}

export function MushroomList(props: mushroomListProps) {
    // Вывод всех карточек грибов из бд
    // Вот команда для добавления тестового гриба
    // Изображение выбрано в css
    // insert into "Mushroom" (name, "latinName", "redBooked", eatable, description, "synonymousNames", have_foot, head_type, hymenophore, "familyId")
    // values ('Гриб', 'Mushroom', true, 'PARTIALLY_EATABLE', 'Он большой, он крутой, он грибной!', '{"Гриб обыкновенный"}', false, 'CONCAVE', 'LAMELLAR', 2);

    const [mushrooms, setMushrooms] = useState<IMushroom[]>()

    const fetchMushrooms = async () => {
       MushroomDataService.getAll()
      .then((response: any) => {
        setMushrooms(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });

    }

    useEffect(() => {
      fetchMushrooms();
    }, []);


    return (
        <div className="cardList">
            {!mushrooms && <span>Нет грибов</span>}
            {mushrooms &&
                mushrooms.map(mushroom => (
                        <MushroomCard mushroom={mushroom}/>
                    ))
            }
        </div>
    )
}
