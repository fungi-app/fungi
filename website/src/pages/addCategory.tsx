import { useState } from "react";
import { Header } from "../components/Header";
import {TextInput} from "../components/inputs/TextInput";
import { trpc } from "../lib/trpc";

export function AddCategory () {
    // const [family, postFamily] = useState ()

    // const submitHandler = async (event: React.FormEvent) => {
    //   event.preventDefault();
    //   const target = event.target as typeof event.target & {
    //     name: { value: string };
    //     latinName: { value: string };
    //   };

    //   const name = target.name.value; // typechecks!
    //   const latinName = target.latinName.value; // typechecks!

    //   console.log (
    //     {
    //       name: name,
    //       latinName: latinName,
    //     }
    //   )

    //   const family = trpc.family.create.useQuery({
    //     name: name,
    //     latinName: latinName,
    //   })
    // }

    const name = "Тест"
    const latinName = "Test"

    const family = trpc.family.create.useQuery({
      name: name,
      latinName: latinName,
    })

    console.log(family)

    return (
        <>
        <Header />
        <main className="form__page">
            <h2>Добавить семейство</h2>
            <div>
            {/* <form onSubmit={submitHandler}> */}
            <form>
                <TextInput formName={"name"} title={"Наименование семейства"} required={true}/>
                <TextInput formName={"latinName"} title={"Наименование на латыне"} required={true}/>
                <input className="submit" type="submit" value="Отправить" />
            </form>
            </div>
        </main>
        </>
    )
}

