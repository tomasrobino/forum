import {useLocation} from "react-router-dom";
import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {BoardHeader} from "./BoardHeader.tsx";
import {category, post} from "../../types.ts";
import {CategoryMenuBar} from "./CategoryMenuBar.tsx";
import ForumItem from "../ForumItem.tsx";

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
    console.log(postsData[i]);
    posts.push(<ForumItem
      url={postsData[i].id.toString()}
      title={postsData[i].title}
      user={"sidfjñ"} //TODO: Get last author
      timestamp={postsData[i].timestamp}
      lastPost={"fdsuilfmlndsbofoiushlifu  kudsy fdslñ fjls fdsgi fpds lgfsdy  fuif lhds f dsfh"} //TODO: Get last post
      firstAmount={postsData[i].views}
      secondAmount={postsData[i].replyAmount}
      key={i}
    />)
  }

  return (
    <>
      {categoryData? <BoardHeader iconColor="orange" icon={""} title={categoryData.title} description={categoryData.desc} postAmount={categoryData.posts} topicAmount={categoryData.topics} /> : null}
      <CategoryMenuBar />
      {...posts}
    </>
  );
}