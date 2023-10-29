import { MushroomCard } from "./MushroomCard";
import { trpc } from "../lib/trpc";
import { EATABLE_GRADE, Family } from ".prisma/client";
const mushrooms = trpc.mushrooms.getPaginated.useQuery({
  page: 0,
  perPage: 1000,
});
console.log(mushrooms);
/*
id: number
    name: String;
    latinName: String;
    redBooked: Boolean;
    eatable: EATABLE_GRADE;
    family: Family;
*/
export function MushroomList () {
    return (
        <div>
            { mushrooms.map( (mushroom: { id: number; name: String; latinName: String; redBooked: { isRedBooked: boolean; }; eatable: { grade: EATABLE_GRADE; }; family: Family; }) => (
                <MushroomCard
                id = {mushroom.id}
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