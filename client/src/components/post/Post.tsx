import styles from './Post.module.css'
import {MenuBar} from "../MenuBar.tsx";
import {PostHeader} from "./PostHeader.tsx";
import {Dispatch, ReactElement, SetStateAction, useEffect, useState} from "react";
import {category, post} from "../../types.ts";
import {useLocation} from "react-router-dom";
import {Reply} from "./Reply.tsx";


export function Post() {
  const location   = useLocation();
  const [parentCategory, setParentCategory]: [category, Dispatch<SetStateAction<category>>] = useState<category>({
    _id: "",
    description: "",
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
    text: "",
    _id: "",
    replies: [],
    replyAmount: 0,
    updatedAt: "",
    createdAt: "",
    title: "",
    views: 0,
    category: ""
  })

  useEffect(() => {
    const url = import.meta.env.VITE_URL;
    //Fetching category
    fetch(`${url}/forum/categories`)
      .then(data => data.json())
      .then(data => {
        const aux = data.find((e: category) => location.pathname.includes(e.urlName));
        if (aux) return setParentCategory(aux);
      })
      .catch(error => console.error('Error:', error))

    //Fetching post
    fetch(`${url}/forum${location.pathname}`)
      .then(data => data.json())
      .then(data => setPost(data))
      .catch(error => console.error('Error:', error))
  }, [])

  const replyArray = Array<ReactElement>();
  for (const reply of post.replies) {
    replyArray.push( <Reply text={reply.text} date={reply.createdAt} author={reply.author} key={reply._id} />);
  }
  replyArray.splice(0, 0, <Reply text={post.text} date={post.createdAt} author={post.author} key={post._id} />);

  return (
    <>
      <PostHeader categoryURL={parentCategory.urlName} category={parentCategory.title} iconColor={""} icon={""} title={post.title} replies={344} posters={23} />
      <MenuBar options={[{value: "newest", name: "Newest"}, {value: "oldest", name: "Oldest"}]} />
      {post._id!==""? replyArray : null}
    </>
  );
}