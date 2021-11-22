import react from "react";
import "./homeLayout.css";
import Header from "./header";
import Footer from "./footer";
const Home=({children})=>{
  return(
    <div className="home-container">
        <Header></Header>
        <div style={{height:"50%"}}>
        {children}
        </div>
        
        {/* <div style={{height:"50%"}}></div> */}
        <Footer></Footer>
          </div>
         
       )
}
export default Home;