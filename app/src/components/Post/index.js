import SubTitle from "../SubTitle";
import "./post.css";
const Post = ({ imageName, name }) => {
    return (
      <>
      <SubTitle title={name} />
      <img src={require('../../images/'+imageName+'.jpg')} alt="img" className="widget-image"/>
      </>
    )
  }
export default Post;