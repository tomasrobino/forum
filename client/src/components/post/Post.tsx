import {MenuBar} from "../MenuBar.tsx";
import {PostHeader} from "./PostHeader.tsx";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {category, post} from "../../types.ts";
import {useLocation} from "react-router-dom";


export function Post() {
  const location   = useLocation();
  const [parentCategory, setParentCategory]: [category, Dispatch<SetStateAction<category>>] = useState<category>({
    desc: "",
    lastPost: "",
    posts: 0,
    timestamp: "",
    title: "",
    topics: 0,
    urlName: "",
    user: ""
  });
  const [post, setPost]: [post, Dispatch<SetStateAction<post>>] = useState<post>({
    author: "",
    content: "",
    id: 0,
    replies: [],
    replyAmount: 0,
    timestamp: "",
    title: "",
    views: 0
  })

  useEffect(() => {
    const url = import.meta.env.VITE_URL;
    //Fetching categories
    fetch(`${url}/forum/categories`)
      .then(data => data.json())
      .then(data => {
        const aux = data.find((e: category) => location.pathname.includes(e.urlName));
        if (aux) return setParentCategory(aux);
      })
      .catch(error => console.error('Error:', error))

    fetch(`${url}/forum${location.pathname}`)
      .then(data => data.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error:', error))
  }, [])

  return (
    <>
      <PostHeader categoryURL={parentCategory.urlName} category={parentCategory.title} iconColor={""} icon={""} title={post.title} replies={344} posters={23} />
      <MenuBar />
    </>
  );
}