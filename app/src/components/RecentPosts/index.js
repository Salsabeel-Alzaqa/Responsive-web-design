import Title from "../Title";
import Post from "../Post";
import "./recentposts.css";
const RecentPosts = () => {
  const myArray=[
    {
      number:1,
      imageName:"jj",
      name:"Koji Roll ★★★★☆"
    },
    {
      number:1,
      imageName:"jj",
      name:"Mix Nigiri ★★★★☆"
    },
    {
      number:1,
      imageName:"jj",
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
            <div class="widget-recent-post" key={item.number}>
              <Post props={item} />
              </div> )
          })
        }
      </>
    )
  }
export default RecentPosts;