/* import { View, Text, StyleSheet } from "react-native";
import { Mushroom, Family, Image } from "@fungi/db";
import { Card } from "./Card";
import { useStateStore } from "../lib/store";
import { useTheme } from "../lib/theme";
import { EatableGradeIcon } from "./icons/Eatable";
import { IsRedBookedIcon } from "./icons/RedBooked";
import { loadImage } from "../lib/image"; */
import React from "react";

/* type Props = {
  mushroom: Mushroom & { family: Family; images: Image[] };
}; */
export interface MushroomInfo {
  name: String;
  area: String;
  image: string;
  description: String;
  family: string;
  RedBooked: boolean;
  eatable: boolean;
}


export function MushroomCard (props: MushroomInfo) {
  /* const setSelectedMushroom = useStateStore((s) => s.setSelectedMushroom);
  const theme = useTheme(); */
  // console.log(loadImage(props.mushroom.images[0]));
  return (
    <section className="container">
      <div className="MushroomHeading">
        <h1 className="MushroomName">{props.name}</h1>
        <p className="AreaInfo">{props.area}</p>
      </div>
      <div className="MushroomMainInfo flex-container">
        <div className="SideInfo">
          <img src={props.image} alt="Картинка гриба" />
          <p className="MushroomSmallInfo">Семейство:</p>
          <p>{props.family}</p>
          <hr />
          <div className="flex-container mushroomProperty">
            <p className="MushroomSmallInfo">Красная книга:</p>
            {props.RedBooked ? (
              <p className="MushroomSmallInfo">Да</p>
            ) : (
              <p className="MushroomSmallInfo">Нет</p>
            )}
          </div>
          <hr />
          <div className="flex-container mushroomProperty">
            <p className="MushroomSmallInfo">Съедобность:</p>
            {props.eatable ? (
              <p className="MushroomSmallInfo">Да</p>
            ) : (
              <p className="MushroomSmallInfo">Нет</p>
            )}
          </div>
        </div>
        <div className="MushroomDescription">
          <h2 className="DescriptionHeading">Описание</h2>
          <p>{props.description}</p>
        </div>
      </div>
    </section>
  );
};

MushroomCard.defaultProps ={
  name: "Подосиновик жёлто-бурый",
  area: "зона смешанных и широколиственных лесов",
  image: "",
  description:
    "Равным образом постоянное информационно-техническое обеспечение нашей деятельности обеспечивает актуальность системы масштабного изменения ряда параметров. Дорогие друзья, постоянное информационно-техническое обеспечение нашей деятельности играет важную роль в формировании соответствующих условий активизации? С другой стороны выбранный нами инновационный путь способствует подготовке и реализации модели развития.",
  family: "Больбитиевые (Bolbitiaceae)",
  RedBooked: true,
  eatable: false,
}
/* const styles = StyleSheet.create({
  family: {
    fontFamily: "Raleway_800ExtraBold",
    fontSize: 12,
    marginBottom: 5,
  },
  name: {
    fontSize: 18,
    margin: 0,
    fontFamily: "Raleway_700Bold",
    marginBottom: 5,
  },
  latineName: {
    fontFamily: "Raleway_700Bold",
    marginBottom: 5,

    fontSize: 14,
  },
  iconsWrapper: {
    display: "flex",
    flexDirection: "row",
    paddingTop: 5,
  },
}); */
/* import { View, Text, StyleSheet } from "react-native";
import { Mushroom, Family, Image } from "@fungi/db";
import { Card } from "./Card";
import { useStateStore } from "../lib/store";
import { useTheme } from "../lib/theme";
import { EatableGradeIcon } from "./icons/Eatable";
import { IsRedBookedIcon } from "./icons/RedBooked";
import { loadImage } from "../lib/image";
import React from "react"; */

/* type Props = {
  mushroom: Mushroom & { family: Family; images: Image[] };
}; */

