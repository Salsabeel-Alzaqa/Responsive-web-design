import Title from "../Title";
import Para from "../Para";
import "./aboutme.css"
const AboutMe = () =>{
    return (
      <>
        <div className="widget-title">
          <Title title="ABOUT US" />
        </div>
        <img src={require('../../images/image7.jpg')} alt='about' className="widget-image" />
        <Para body="One of the best places to try Asian food in Palestine ."/>
      </>
    )
  }
export default AboutMe;