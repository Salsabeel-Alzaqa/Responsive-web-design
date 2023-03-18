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
      imageName:"image5",
      info:"Price : ₪30.00"
    },
    {
      number:2,
      title:"gyoza",
      body:"Gyoza (餃子, gyōza) are dumplings filled with ground meat and vegetables and wrapped in a thin dough. Also known as pot stickers, gyoza originated in China (where they are called jiaozi), but have become a very popular dish in Japan.",
      imageName:"image1",
      info:"Price : ₪19.00"
    },
    {
      number:3,
      title:"Spring roll (egg roll)",
      body:"An egg roll is a fried appetizer that's found on countless Chinese-American restaurant menus. It consists of a thick, crispy wheat flour skin filled with shredded cabbage, pork, and other ingredients. Egg rolls are fried in hot oil, served warm, and usually dipped in duck sauce or soy sauce.",
      imageName:"image2",
      info:"Price : ₪16.00"
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
            <RecentPost {...item}/>
            </article> )
            })
        }
    </>
  )}
export default LeftSide;