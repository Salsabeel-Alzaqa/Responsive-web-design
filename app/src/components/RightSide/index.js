import AboutMe from "../AboutMe";
import RecentPosts from "../RecentPosts";
import "./rightside.css";
const RightSide = () =>{
  return(
    <>
      <div className="sidebar-widget">
      <AboutMe/>
      </div>
      <div className="sidebar-widget">
      <RecentPosts/>
      </div>
    </>
  )}
export default RightSide;