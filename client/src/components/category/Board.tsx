import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

export function Board() {
  const location = useLocation();
  const [data, setData] = useState();
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
    </>
  );
}