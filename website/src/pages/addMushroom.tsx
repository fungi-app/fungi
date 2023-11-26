import { Header } from "../components/Header";
import ColorPicker from "../components/inputs/ColorPicker";
import {TextInput} from "../components/inputs/TextInput";



export function AddMushroom () {
    return (
        <>
        <Header />
        <main className="form__page">
            <h2>Добавить гриб</h2>
            <div>
            <form>
                <TextInput inputName={"name"} title={"Наименование гриба"} required={true}/>
                <label
                >Синонимичные имена:<input
                    required
                    placeholder="Наименование гриба"
                /></label>
                <label
                >Латинское наименование:<input
                    required
                    placeholder="Латинское наименование гриба"
                /></label>
                <label>
                Семейство:<input required placeholder="Семейство гриба" /></label>
                <label
                >Наличие в красной книге
                <select required>
                    <option value="1">Да</option>
                    <option value="2" selected>Нет</option>
                </select>
                </label>
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
                <ColorPicker />
                <label>
                Ножка:
                <input type="checkbox" id="have_foot" name="have_foot" checked/>
                </label>
                <label>
                Размер от:
                <input type="number" id="foot_size_from" name="foot_size_from" min="1" max="1000" />
                мм
                </label>
                <label>
                Размер до:
                <input type="number" id="foot_size_to" name="foot_size_to" min="1" max="1000" />
                мм
                </label>
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
                Цвет ножки:
                <select required>
                    <option value="1">Коричневая</option>
                    <option value="2">Красная</option>
                    <option value="3">Белая</option>
                </select>
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
                <label
                >Описание:
                <textarea placeholder="Описание"></textarea>
                </label>
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
