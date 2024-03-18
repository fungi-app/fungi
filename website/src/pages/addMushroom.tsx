import {useState, useEffect} from "react"

import {Header} from "../components/Header";
import {ColorPicker} from "../components/inputs/ColorPicker";
import {TextInput, ArrayTextInput, BigTextInput} from "../components/inputs/TextInputs";
import {NumberInput} from "../components/inputs/NumberInputs";
import {BooleanChoiseInput, BigChoiseInput }  from "../components/inputs/ChoiseInputs";
import type {choiseItem} from "../components/inputs/ChoiseInputs";
import type {colorItem} from "../components/inputs/ColorPicker";

//import { trpc } from "../lib/trpc";


export function AddMushroom () {
  const [familiesData, setFamiliesData] = useState<choiseItem[] | undefined>(undefined);
  const [colorsData, setColorsData] = useState<colorItem[] | undefined>(undefined);

  const [name, setName] = useState('');
  const [synonymousNames, setsynonymousNames] = useState([""]);
  const [latinName, setLatinName] = useState('');
  const [redBook, setRedBook] = useState(0);
  const [family, setFamily] = useState(0);


  const [description, setDescription] = useState('');
  const [headColor, setHeadColor] = useState(0);
  const [footColor, setFootColor] = useState(0);
  const [footSizeFrom, setFootSizeFrom] = useState(0);
  const [footSizeTo, setFootSizeTo] = useState(0);


  useEffect(() => {
    console.log('effect')
    //const colors = trpc.color.getAll.useQuery({});
    //setColorsData(colors.data ? colors.data.map (
    //  color => { return {
    //    title: color.name,
    //      hex: color.hex
    //  } as colorItem }): undefined); 

    //const families = trpc.family.getPaginated.useQuery({
    //  page: 0,
    //  perPage: 1000
    //});

    //setFamiliesData (families.data ? families.data.map(
    //  family => {
    //    return {
    //      title: family.name,
    //      value: family.id
    //    } as choiseItem
    //}) : undefined )
  });


  return (
    <>
      <Header />
      <main className="form__page">
        <h2>Добавить гриб</h2>
        <div>
          <form>
            <TextInput 
              inputName={"name"}
              title={"Наименование гриба"}
              setValue={setName}
              required={true}
            />
            <ArrayTextInput 
              inputName={"synonymicName"} 
              title={"Синонимичные имена:"} 
              setValue={setsynonymousNames}
              required={false}
            />
            <TextInput 
              inputName={"latinName"} 
              title={"Латинское наименование гриба"} 
              setValue={setLatinName} 
              required={true}
            />
            <TextInput 
              inputName={"name"} 
              title={"Наименование гриба"} 
              required={true}
            />
            <BigChoiseInput
              title='Семейство'
              inputName='family_selecotr'
              setValue={setFamily}
              data={familiesData}
            />
            <BooleanChoiseInput 
              title={"Наличие в красной книге"} 
              inputName={"redBook"} 
              setValue={setRedBook} 
            />
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
            <ColorPicker 
              title={"Цвет шляпки"} 
              setValue={setHeadColor} 
              colors={colorsData}
            />
            <label>
              Ножка:
              <input type="checkbox" id="have_foot" name="have_foot" checked/>
            </label>
            <NumberInput 
              title="Размер от" 
              unit="мм" 
              inputName="foot_size_from" 
              setValue={setFootSizeFrom} 
              required={false}
            />
            <NumberInput 
              title="Размер до" 
              unit="мм" 
              inputName="foot_size_to" 
              setValue={setFootSizeTo} 
              required={false}
            />
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
            <ColorPicker 
              title={"Цвет ножки"}
              setValue={setFootColor}
              colors={colorsData}
            />
            <label>
              Фотографии:
              <input
                type="file"
                id="profile_pic"
                name="profile_pic"
                accept=".jpg, .jpeg, .png"
                placeholder="Выбрать" />
            </label>
            <BigTextInput
              inputName="description"
              title="Описание"
              setValue={setDescription}
              required={true}
            />
            <label>
              Двойники:
              <select required>
                <option value="1">Двойник 1</option>
                <option value="2">Двойник 2</option>
                <option value="3">Двойник 3</option>
              </select>
            </label>
            <input 
              className="submit" 
              type="submit"
              value="Отправить"
            />
          </form>
        </div>
      </main>
    </>
  )
}
