import Intro from "../Intro";
import Title from "../Title";
import RecentPost from "../RecentPost";
import "./leftside.css";
const LeftSide = () =>{ 
  const myArray=[
    {
      number:1,
      title:"Mix Nigiri",
      body:"Nigiri includes tuna, salmon and cooked shrimp. Fresh sushi made in Club. Made with healthy ingredients. Includes naturally brewed soy sauce, pickled ginger and wasabi. Easy to enjoy; no utensils needed.",
      imageName:"mix",
      info:"Price : ₪30.00"
    },
    {
      number:2,
      title:"Mix Nigiri",
      body:"Nigiri includes tuna, salmon and cooked shrimp. Fresh sushi made in Club. Made with healthy ingredients. Includes naturally brewed soy sauce, pickled ginger and wasabi. Easy to enjoy; no utensils needed.",
      imageName:"mix",
      info:"Price : ₪30.00"
    },
    {
      number:3,
      title:"Mix Nigiri",
      body:"Nigiri includes tuna, salmon and cooked shrimp. Fresh sushi made in Club. Made with healthy ingredients. Includes naturally brewed soy sauce, pickled ginger and wasabi. Easy to enjoy; no utensils needed.",
      imageName:"mix",
      info:"Price : ₪30.00"
    }
  ]
    return(
      <>
      <article className="article-featured">
        <Intro />
      </article>
      <Title title="New !!!" />
        {
         
          myArray.map((item) =>
          {
            return( 
            <article className="article-recent" key={item.number}>
            <RecentPost item={item}/>
            </article> )
            })
        }
    </>
  )}
export default LeftSide;