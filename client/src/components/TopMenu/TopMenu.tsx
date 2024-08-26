import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {category} from "../../types.ts";
import {useLocation} from "react-router-dom";

export function TopMenu(props: {isCategory: boolean}) {
  const location = useLocation();
  const [data, setData]: [category[], Dispatch<SetStateAction<category[]>>] = useState(Array<category>);
  useEffect(() => {
    const url = import.meta.env.VITE_URL;
    //Fetching categories
    fetch(`${url}/forum${location.pathname}`)
      .then(data => data.json())
      .then(data => setData(data))
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <div>

    </div>
  );
}