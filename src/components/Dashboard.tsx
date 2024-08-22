import ForumItem from "./ForumItem.tsx";

export default function Dashboard() {
  return (
    <div>
      <ForumItem isCategory={true} title={"Announcements"} description={"Announcements regarding our community"} />
      <ForumItem isCategory={true} title={"General Discussion"} description={"A place to talk about whatever you want"} />
    </div>
  )
}