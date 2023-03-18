import RecentDate from "../RecentDate";
import Title from "../Title";
import Para from "../Para";
import SubTitle from "../SubTitle";
import "./recentpost.css";
const RecentPost = ({info,title,body,imageName}) => {
    return (
      <>
      <div className="article-recent-secondary">
        <img src={require('../../images/'+imageName+'.jpg')} className="article-img" alt=''></img> 
        <RecentDate date={info}/>
      </div>
      <div className="article-recent-main">
        <Title title={title}/>
        <Para body={body}/>
        <a href="ll" className="article-read-more">
          <SubTitle title="Order Now" />
        </a>
      </div>
      </>
    )
  }
export default RecentPost;