import Title from "../Title";
import Post from "../Post";
import "./recentposts.css";
const RecentPosts = () => {
  const myArray=[
    {
      number:1,
      imageName:"image4",
      name:"Koji Roll ★★★★☆"
    },
    {
      number:2,
      imageName:"image5",
      name:"Mix Nigiri ★★★★☆"
    },
    {
      number:3,
      imageName:"image6",
      name:"PaniPuri ★★★★☆"
    }
  ]
    return(
      <>
        <Title title="TOP DISHES"/>
        {
          myArray.map((item) =>
          {
            return( 
            <div className="widget-recent-post" key={item.number}>
              <Post {...item} />
              </div> )
          })
        }
      </>
    )
  }
export default RecentPosts;