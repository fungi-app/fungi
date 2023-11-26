import { useState } from "react";
import { Header } from "../components/Header";
import {TextInput} from "../components/inputs/TextInputs";
import { trpc } from "../lib/trpc";
import { Family } from "@fungi/db";

interface IFamily {
    name: string,
    latinName: string,
}

const familyData: IFamily = {
    name: '',
    latinName: '',
}

export function AddCategory () {
    const familyMutation = trpc.family.create.useMutation();
    const [error, setError] = useState('')

    const [name, setName] = useState('');
    const [latinName, setLatinName] = useState('');

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();

        if (name.trim() === ''){
            setError('Пожалуйста введите наименование.')
            return
        }
        if (latinName.trim() === ''){
            setError('Пожалуйста введите наименование на латыни.')
            return
        }

        familyData.name = name;
        familyData.latinName = latinName;

        const responce = familyMutation.mutate(familyData);
    }

    return (
        <>
        <Header />
        <main className="form__page">
            <h2>Добавить семейство</h2>
            <div>
            <form onSubmit={submitHandler}>
                <TextInput inputName={"name"} title={"Наименование семейства"} value = {setName} required={true}/>
                <TextInput inputName={"latinName"} title={"Наименование на латыни"} value={setLatinName} required={true}/>
                <input className="submit" type="submit" value="Отправить" />
            </form>
            </div>
        </main>
        </>
    )
}
