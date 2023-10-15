import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import {PageNotFound} from "./pages/PageNotFound"
import {Index} from "./pages/index"
import {Login} from "./pages/login"
import { MushroomCard, MushroomInfo } from "./pages/MushroomCard";

let props: MushroomInfo = {
  name: "Подосиновик жёлто-бурый",
  area: "зона смешанных и широколиственных лесов",
  image: "",
  description:
    "Равным образом постоянное информационно-техническое обеспечение нашей деятельности обеспечивает актуальность системы масштабного изменения ряда параметров. Дорогие друзья, постоянное информационно-техническое обеспечение нашей деятельности играет важную роль в формировании соответствующих условий активизации? С другой стороны выбранный нами инновационный путь способствует подготовке и реализации модели развития.",
  family: "Больбитиевые (Bolbitiaceae)",
  RedBooked: true,
  eatable: false,
};



const router = createBrowserRouter([
    {
      path: "/",
      element: <MushroomCard />,
      errorElement: <PageNotFound />,
      children: [
        {
          path: "login/",
          element: <Login />,
        },
      ],
    },
  ]);
  
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );

root.render(
    <RouterProvider router={router} />
);
