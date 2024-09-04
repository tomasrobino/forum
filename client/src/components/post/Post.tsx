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
      <MenuBar options={[{value: "newest", name: "Newest"}, {value: "oldest", name: "Oldest"}]} />
      <Reply
        quote={{
          author: "dasodi",
          text: "Sed ornare, massa in vestibulum commodo, magna est pellentesque eros, eu auctor leo magna eu justo. Proin ac tincidunt orci. Maecenas eu ex non tellus vulputate imperdiet. Ut ultricies lacus nec diam pellentesque, a hendrerit arcu ultrices."
        }}
        title="Pensando en la inmortalidad del cangrejo"
        date="2017-3-4"
        text="Praesent sagittis, eros at gravida ultrices, nulla mi lacinia est, ac feugiat dui nibh consequat odio. Vestibulum accumsan faucibus lectus eget laoreet. Praesent nec blandit sapien. Cras dignissim blandit massa, id vestibulum erat placerat eget. Quisque tincidunt erat tellus, et viverra neque efficitur in. Vestibulum gravida est ut enim placerat aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam diam lorem, euismod a dolor vel, consequat egestas dolor. Suspendisse scelerisque imperdiet aliquam. Aenean nec condimentum leo. Etiam aliquam ac eros eu suscipit. Etiam at eros nibh. Donec dignissim ac turpis ut sagittis. Integer sit amet venenatis dui. In a magna facilisis, malesuada velit in, elementum leo. Aenean placerat ante nisi, eu interdum nunc pellentesque vitae."
        user={{
          posts: 34,
          username: "admin",
          joinDate: "2014-10-17",
          avatar: "",
          profile: "",
          topics: 12
        }}
      />
      <hr style={{ margin: "80px 0" }} />
      <Reply
        quote={{
          author: "dasodi",
          text: "Sed ornare, massa in vestibulum commodo, magna est pellentesque eros, eu auctor leo magna eu justo. Proin ac tincidunt orci. Maecenas eu ex non tellus vulputate imperdiet. Ut ultricies lacus nec diam pellentesque, a hendrerit arcu ultrices."
        }}
        title="Pensando en la inmortalidad del cangrejo"
        date="2017-3-4"
        text="Praesent sagittis, eros at gravida ultrices, nulla mi lacinia est, ac feugiat dui nibh consequat odio. Vestibulum accumsan faucibus lectus eget laoreet. Praesent nec blandit sapien. Cras dignissim blandit massa, id vestibulum erat placerat eget. Quisque tincidunt erat tellus, et viverra neque efficitur in. Vestibulum gravida est ut enim placerat aliquam. Interdum et malesuada fames ac ante ipsum primis in faucibus. Etiam diam lorem, euismod a dolor vel, consequat egestas dolor. Suspendisse scelerisque imperdiet aliquam. Aenean nec condimentum leo. Etiam aliquam ac eros eu suscipit. Etiam at eros nibh. Donec dignissim ac turpis ut sagittis. Integer sit amet venenatis dui. In a magna facilisis, malesuada velit in, elementum leo. Aenean placerat ante nisi, eu interdum nunc pellentesque vitae."
        user={{
          posts: 34,
          username: "admin",
          joinDate: "2014-10-17",
          avatar: "",
          profile: "",
          topics: 12
        }}
      />
    </>
  );
}