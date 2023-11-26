import {useState} from "react"

import {Header} from "../components/Header";
import ColorPicker from "../components/inputs/ColorPicker";
import {TextInput, ArrayTextInput, BigTextInput} from "../components/inputs/TextInputs";
import {NumberInput} from "../components/inputs/NumberInputs";
import {BooleanChoiseInput} from "../components/inputs/ChoiseInputs";

import { Color } from "@fungi/db"

export function AddMushroom () {
    const [name, setName] = useState('');
    const [synonymousNames, setsynonymousNames] = useState([""]);
    const [latinName, setLatinName] = useState('');
    const [redBook, setRedBook] = useState(0);


    const [description, setDescription] = useState('');
    const [headColor, setHeadColor] = useState(0);
    const [footColor, setFootColor] = useState(0);
    const [footSizeFrom, setFootSizeFrom] = useState(0);
    const [footSizeTo, setFootSizeTo] = useState(0);

    return (
        <>
        <Header />
        <main className="form__page">
            <h2>Добавить гриб</h2>
            <div>
            <form>
                <TextInput inputName={"name"} title={"Наименование гриба"} value={setName} required={true}/>
                <ArrayTextInput inputName={"synonymicName"} title={"Синонимичные имена:"} value={setsynonymousNames} required={false}/>
                <TextInput inputName={"latinName"} title={"Латинское наименование гриба"} value={setLatinName} required={true}/>
                <TextInput inputName={"name"} title={"Наименование гриба"} required={true}/>
                <label>
                Семейство:<input required placeholder="Семейство гриба" /></label>
                <BooleanChoiseInput title={"Наличие в красной книге"} inputName={"redBook"} value={setRedBook} />
                <label>
                Категория съедобности:
                <select required>
                    <option value="1">Съедобные</option>
                    <option value="2">Условно-съедобные</option>
                    <option value="3">Несъедобные</option>
                </select>
                </label>
                <label>
                Тип шляпки:
                <select required>
                    <option value="1">Выпуклая</option>
                    <option value="2">Вогнутая</option>
                    <option value="3">Ровная</option>
                </select>
                </label>
                <ColorPicker title={"Цвет шляпки"} value={setHeadColor} />
                <label>
                Ножка:
                <input type="checkbox" id="have_foot" name="have_foot" checked/>
                </label>
                <NumberInput title="Размер от" unit="мм" inputName="foot_size_from" value={setFootSizeFrom} required={false}/>
                <NumberInput title="Размер до" unit="мм" inputName="foot_size_to" value={setFootSizeTo} required={false}/>
                <label>
                Тип ножки:
                <select required>
                    <option value="1">Утолщенная вверху</option>
                    <option value="2">Утолщенная внизу</option>
                    <option value="3">С юбкой</option>
                    <option value="4">Ровная</option>
                    <option value="5">Утолщенная в центре</option>
                </select>
                </label>
                <label>
                <ColorPicker title={"Цвет ножки"} value={setFootColor} />
                </label>
                <label>
                Фотографии:
                <input
                    type="file"
                    id="profile_pic"
                    name="profile_pic"
                    accept=".jpg, .jpeg, .png"
                    placeholder="Выбрать" />
                </label>
                <BigTextInput inputName="description" title="Описание" value={setDescription} required={true}/>
                <label
                >Двойники:
                <select required>
                    <option value="1">Двойник 1</option>
                    <option value="2">Двойник 2</option>
                    <option value="3">Двойник 3</option>
                </select>
                </label>
                <input className="submit" type="submit" value="Отправить" />
            </form>
            </div>
        </main>
        </>
    )
}
