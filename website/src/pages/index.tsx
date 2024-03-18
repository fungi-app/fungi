
// import LeftMenu from "../components/LeftMenu";
// import Layout from "../layouts/Layout.astro";
// import articles from "../articles.json";

import { ArticleCard } from "../components/ArticleCard";
import { MushroomCard } from "../components/MushroomCard";
import { Header } from "../components/Header";
import { useEffect, useState } from "react";

import IPublication from "../types/publication"
import PublicationDataService from "../services/publication"
import axios from "../http-common"


export function Index () {

  const [publications, setPublications] = useState<IPublication[]>()

  const fetchPublications = async () => {
    PublicationDataService.getAll()
      .then((response: any) => {
        setPublications(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });

  }

  useEffect(() => {
    fetchPublications();
  }, []);


  return (
    <main>
      <section className="hero">s
        <p className="hero__text">Грибник грибника видит на Fungi.ru</p>
      </section>
      <section className="recommended">
        <h2>Возможно, Вам будет интересно почитать!</h2>
        <div className="wrapper">
          {publications &&
              publications.map((a) => (
                <ArticleCard id={a.slug} name={a.title} image={a.preview.image_url}/>
              ))
          }
        </div>
      </section>
    </main>
  )
}
