import ListItem from "../ListItem";
import "./navigation.css";
const Navigation = () =>{
  const myArray=[
    {
      id:1,
      title:"HOME"
    },
    {
      id:2,
      title:"MENU"
    },
    {
      id:3,
      title:"ABOUT US"
    }
  ]
    return(
      <ul className="nav-ul">
      {
      myArray.map((item)=>{
        return(
          <li key={item.id} className="nav-li"><ListItem title={item.title} /></li>
        )})
      }
      </ul>
  )}
export default Navigation;