import styles from './Board.module.css'
import {useLocation} from "react-router-dom";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {BoardHeader} from "./BoardHeader.tsx";
import {category, post} from "../../types.ts";
import ForumItem from "../ForumItem.tsx";
import {MenuBar} from "../MenuBar.tsx";

export function Board() {
  const location = useLocation();
  const [categoryData, setCategoryData]: [category | undefined, Dispatch<SetStateAction<category | undefined>>] = useState();
  const [postsData, setPostsData]: [post[], Dispatch<SetStateAction<post[]>>] = useState(Array<post>);
  useEffect(() => {
    const url = import.meta.env.VITE_URL;
    //Fetching categories
    fetch(`${url}/forum${location.pathname}`)
      .then(data => data.json())
      .then(data => setCategoryData(data))
      .catch(error => console.error('Error:', error))

    fetch(`${url}/forum${location.pathname}/posts`)
      .then(data => data.json())
      .then(data => setPostsData(data))
      .catch(error => console.error('Error:', error))
  }, [])

  const posts = [];
  for (let i = 0; i < postsData.length; i++) {
    posts.push(<ForumItem
      url={postsData[i].id.toString()}
      title={postsData[i].title}
      user={postsData[i].author}
      timestamp={postsData[i].timestamp}
      lastPost={"fdsuilfmlndsbofoiushlifu  kudsy fdslñ fjls fdsgi fpds lgfsdy  fuif lhds f dsfh"} //TODO: Get last post
      firstAmount={postsData[i].views}
      secondAmount={postsData[i].replyAmount}
      key={i}
    />)
    posts.push(<hr className={styles.line}/>)
  }

  return (
    <>
      {categoryData? <BoardHeader iconColor="orange" icon={""} title={categoryData.title} description={categoryData.desc} postAmount={categoryData.posts} topicAmount={categoryData.topics} /> : null}
      <MenuBar options={[{name: "Last posted", value: "lastPosted"}, {name: "Most replies", value: "mostReplies"}, {name: "Fewest replies", value: "fewestReplies"}]} />
      {...posts}
    </>
  );
}