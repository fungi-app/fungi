import { FamilyCard } from "./FamilyCard";
import { trpc } from "../lib/trpc";

const families = trpc.family.getPaginated.useQuery ({
    page: 0,
    perPage: 1000,
});

export function FamilyList() {
    return (
        <div>
            {
                families.data!.map( (family) => (
                    <FamilyCard 
                    name={family.name}
                    latinName={family.latinName}
                    />
                ))
            }
        </div>
    )
}