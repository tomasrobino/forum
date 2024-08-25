import ForumItem from "./ForumItem.tsx";
import {useEffect} from "react";


export default function Dashboard() {
  let categoriesData: unknown[] = [];
  useEffect(() => {
    const url = import.meta.env.VITE_URL;
    //Fetching categories
    fetch(`${url}/forum/categories`)
      .then(data => data.json())
      .then(data => categoriesData = data)
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <div>
      <ForumItem isCategory={true} title={"Announcements"} description={"Announcements regarding our community dsuio das gdias gdoaydgsadgaso gyds adyugosadga sd gsoadgasdgysad"} />
    </div>
  )
}