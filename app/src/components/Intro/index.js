import RecentDate from "../RecentDate";
import Title from "../Title";
import SubTitle from "../SubTitle";
import Para from "../Para";
import "./intro.css"
const Intro = () => {
    return (
      <>
    <img src={require('../../images/image.jpg')} alt='' className="article-img"></img>
    <RecentDate date="July 23, 2019 | 3 comments"/>
    <Title title="WELCOME \^-^/"/>
    <Para body="George Bernard Shaw once said,There is no sincerer love than the love of food.” Many of us agree that eating is one of life’s greatest pleasures. People like to experiment with food and try new meals. But if you are not Gordon Ramsay and cannot cook something exquisite yourself, you can still sample various cuisines. All you need to do is visit us."/>
    <a href="ll" className="article-read-more">
        <SubTitle title="continue reading" />
    </a>
    </>
  )}
export default Intro;