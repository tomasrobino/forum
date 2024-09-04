import styles from './Post.module.css'
import {MenuBar} from "../MenuBar.tsx";
import {PostHeader} from "./PostHeader.tsx";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {category, post} from "../../types.ts";
import {useLocation} from "react-router-dom";
import {Reply} from "./Reply.tsx";


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
    author: {
      posts: 34,
      username: "admin",
      joinDate: "2014-10-17",
      avatar: "",
      profile: "",
      topics: 12
    },
    text: "",
    id: 0,
    replies: [],
    replyAmount: 0,
    timestamp: "",
    title: "",
    views: 0
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

  const replyArray = [];
  for (const reply of post.replies) {
    console.log(reply.title)
    replyArray.push( <Reply title={reply.title} text={reply.text} date={reply.timestamp} user={{
      posts: reply.author.posts,
      username: reply.author.username,
      joinDate: reply.author.joinDate,
      avatar: reply.author.avatar,
      profile: reply.author.profile,
      topics: reply.author.topics
    }} />, <hr className={styles.hr}/>);
  }
  replyArray.splice(0, 0, <Reply title={post.title} text={post.text} date={post.timestamp} user={{
    posts: post.author.posts,
    username: post.author.username,
    joinDate: post.author.joinDate,
    avatar: post.author.avatar,
    profile: post.author.profile,
    topics: post.author.topics
  }} />, <hr className={styles.hr}/>);

  return (
    <>
      <PostHeader categoryURL={parentCategory.urlName} category={parentCategory.title} iconColor={""} icon={""} title={post.title} replies={344} posters={23} />
      <MenuBar options={[{value: "newest", name: "Newest"}, {value: "oldest", name: "Oldest"}]} />
      {...replyArray}
    </>
  );
}