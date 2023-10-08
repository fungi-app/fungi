
// import LeftMenu from "../components/LeftMenu";
// import Layout from "../layouts/Layout.astro";
// import articles from "../articles.json";

import { ArticleCard } from "../components/ArticleCard";
import { MushroomCard } from "../components/MushroomCard";
import { Header } from "../components/Header";
import { trpc } from "../lib/trpc";
import { loadImage } from "../lib/image";
import { useEffect, useState } from "react";
import { Mushroom } from "@prisma/client";

export function Index () {

  // const [publications, setPublications] = useState<Mushroom>()

  // async function fetchArticles() {
  //     const publications = await trpc.publications.getPaginated.query({
  //         page: 0,
  //         perPage: 5,
  //       });    
  // }

  // useEffect (fetchArticles ())

  return (
    <main>
      <section className="hero">s
        <p className="hero__text">Грибник грибника видит на Fungi.ru</p>
      </section>
      <section className="recommended">
        <h2>Возможно, Вам будет интересно почитать!</h2>
        {/* Демонстрация гриба
        <div>
          <MushroomCard id={0} name={"Подосиновик жёлто-бурый"} latinName={"Boletus edulis"} redBooked={false} eatable={"EATABLE"} family={{
            id: 0,
            name: "Болетовые",
            latinName: "Boletaceae"
          }} />
        </div>
        */}
        <div className="wrapper">
          {/* {
              publications.map((a) => (
                <ArticleCard id={a.id} name={a.title} image={loadImage(a.image)} />
              ))
            } */}
        </div>
      </section>
    </main>
  )
}


