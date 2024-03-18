import { useEffect, useState } from "react";
import { FamilyCard } from "./FamilyCard";
import IFamily from "../types/family"
import FamilyDataService from "../services/family"

//import { IFamily } from ".."


interface familyListProps {
    search_text: string,
}

export function FamilyList(props: familyListProps) {
    // Вывод всех карточки семейств из бд

    const [families, setFamilies] = useState<IFamily[]>()
    
    
    const fetchFamilies = async () => {
       FamilyDataService.getAll()
      .then((response: any) => {
        setFamilies(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });

    }

    useEffect(() => {
      fetchFamilies();
    }, []);


    return (

        <div className="cardList">
            {!families && <span>Семейств нет</span>}
            {families &&
                families.map((family) => (
                        <FamilyCard
                            name={family.name}
                            latinName={family.latin_name}
                        />
                    ))
            }
        </div>
    )
}
