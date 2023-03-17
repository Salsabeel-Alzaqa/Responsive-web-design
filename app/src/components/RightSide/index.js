import AboutMe from "../AboutMe";
import RecentPosts from "../RecentPosts";
import "./rightside.css";
const RightSide = () =>{
  return(
    <>
      <div class="sidebar-widget">
      <AboutMe/>
      </div>
      <div class="sidebar-widget">
      <RecentPosts/>
      </div>
    </>
  )}
export default RightSide;