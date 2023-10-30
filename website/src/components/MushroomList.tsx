import { MushroomCard } from "./MushroomCard";
import { trpc } from "../lib/trpc";

const mushrooms = trpc.mushrooms.getPaginated.useQuery({
    page: 0,
    perPage: 1000,
});

export function MushroomList() {
    return (
        <div>
            {
                mushrooms.data!.map((mushroom) => (
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