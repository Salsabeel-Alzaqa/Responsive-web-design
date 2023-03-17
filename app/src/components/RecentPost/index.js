import RecentDate from "../RecentDate";
import Title from "../Title";
import Para from "../Para";
import SubTitle from "../SubTitle";
import "./recentpost.css";
const RecentPost = (props) => {
    return (
      <>
      <div className="article-recent-secondary">
        <img src='' className="article-img" alt=''></img> 
        <div className="article-info"><RecentDate date={props.item.info}/></div>
      </div>
      <div className="article-recent-main">
        <div className="article-title"><Title title={props.item.title}/></div>
        <div className="article-body"><Para body={props.item.body}/></div>
        <a href="ll" className="article-read-more"><SubTitle title="Order Now"/></a>
      </div>
      </>
    )
  }
export default RecentPost;