import {useEffect, useState} from 'react'
import {Header} from "../components/Header";
import Markdown from 'react-markdown'
import { useParams} from 'react-router-dom';

import IPublication from "../types/publication"
import PublicationDataService from "../services/publication"


export function PublicationPage () { 
    const params = useParams()
    console.log(params.slug)
    const [publication, setPublication] = useState<IPublication>()

    const fetchPublication = async () => {
      PublicationDataService.get(params.slug)
      .then((response: any) => {
        setPublication(response.data);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
    }

    useEffect(() => {
      fetchPublication();
    }, []);


    return (
        <>
            <Header />        
            <Markdown>{publication && publication.content}</Markdown>
        </>
    )
}
