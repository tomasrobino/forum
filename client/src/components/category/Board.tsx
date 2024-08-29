import {useLocation} from "react-router-dom";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {BoardHeader} from "./BoardHeader.tsx";
import {category} from "../../types.ts";

export function Board() {
  const location = useLocation();
  const [data, setData]: [category | undefined, Dispatch<SetStateAction<category | undefined>>] = useState();
  useEffect(() => {
    const url = import.meta.env.VITE_URL;
    //Fetching categories
    fetch(`${url}/forum${location.pathname}`)
      .then(data => data.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error))
  }, [])


  return (
    <>
      {data? <BoardHeader icon={""} title={data.title} description={data.desc} postAmount={data.posts} topicAmount={data.topics} /> : null}
    </>
  );
}