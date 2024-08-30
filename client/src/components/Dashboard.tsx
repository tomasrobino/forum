import ForumItem from "./ForumItem.tsx";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {category} from "../types.ts";


export default function Dashboard() {
  const [categoriesData, setCategoriesData]: [category[], Dispatch<SetStateAction<category[]>>] = useState(Array<category>);
  useEffect(() => {
    const url = import.meta.env.VITE_URL;
    //Fetching categories
    fetch(`${url}/forum/categories`)
      .then(data => data.json())
      .then(data => setCategoriesData(data))
      .catch(error => console.error('Error:', error))
  }, [])

  const categories = [];
  for (let i = 0; i < categoriesData.length; i++) {
    categories.push(<ForumItem
      url={categoriesData[i].urlName}
      title={categoriesData[i].title}
      description={categoriesData[i].desc}
      user={categoriesData[i].user}
      timestamp={categoriesData[i].timestamp}
      lastPost={categoriesData[i].lastPost}
      secondAmount={categoriesData[i].posts}
      firstAmount={categoriesData[i].topics}
      isCategory={true}
      key={i}
    />)
  }

  return (
    <div>
      {...categories}
    </div>
  )
}