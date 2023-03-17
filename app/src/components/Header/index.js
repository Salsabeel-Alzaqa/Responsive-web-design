import HeaderLeft from "../HeaderLeft";
import HeaderRight from "../HeaderRight";
import "./header.css"
const Header = () =>{
    return(
    <header>
      <div className="container container-flex">
      <HeaderLeft />
      <HeaderRight />
      </div>
    </header>
  )}
export default Header;