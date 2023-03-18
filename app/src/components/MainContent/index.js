import LeftSide from "../LeftSide";
import RightSide from "../RightSide";
import "./maincontent.css";
const MainContent = () =>{
    return( 
    <div className="container container-flex">
      <main role="main">
      <LeftSide />
      </main>
      <aside className="sidebar">
      <RightSide/>
      </aside>
    </div>
  )}
export default MainContent;