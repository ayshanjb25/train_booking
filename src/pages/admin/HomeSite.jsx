import React from 'react';

import { Link } from 'react-router-dom';
import Navbar from './HomeNavBar';
import { Button } from '@mantine/core';
  

function HomeSite () {

  return(
   
    <div style={{display:"flex",flexDirection:"column"}}><div ><Navbar /></div><div>
      <img src="https://www.shashanka.in/wp-content/uploads/2017/12/IMG_20170120_100724545_HDR.jpg" alt=""
      style={{width: "100%", maxwidth: "100vw", height: "100vh",}} />

    <div style={{position: "absolute",top:"50%",left:"5%",color: "white",textAlign: "right", }}> 
      <h1 style={{ fontSize: "3.0rem" }}>Welcome to Railway System</h1>
    </div>

    <div style={{ position: "absolute", top:"60%", left:"5%", color: "white", textAlign: "right"}}>
      <p1 style={{ fontSize: "1.5rem" , fontWeight: "bold" }}>Online Advance Train Seats Reservation</p1>
    </div>

    <div style= {{ position: "absolute", top: "70%", left:"5%", color: 'white'}}>
      <Button variant= "filled" color="red" style={{ color: 'black', fontWeight: "bold" }}>Book Your Seats</Button>
    </div>

    <div style= {{ position: "absolute", marginTop:"50px", left:"5%" , color: "black", textAlign: "right"}}> 
      <h1 style={{ fontSize: "3.0rem" }}>Gallery</h1>
    </div>

    <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap" ,justifyContent: "center",  gap:"30px", marginTop:"200px" , marginBottom:"50px",}}>
      <img src="https://3.bp.blogspot.com/-ZtGCPHmJl8Q/WBntyvOIfBI/AAAAAAAAG3Q/Ky30j4MLSxU2m0dxPO53ja_grL51WjOaQCEw/s1600/Prithvi%2BRaj.jpg" alt="" style={{ maxWidth: "25%", height: "auto", border: "1px solid lightgray", padding: "20px" }} />
      <img src="https://3.bp.blogspot.com/-uMMtVBeAcus/WBns2MqX7GI/AAAAAAAAG3I/FLYam3Hod8ApenadMLAq7ZLxOkF2TElXwCEw/s400/6969947559_683f801657_z.jpg" alt="" style={{ maxWidth: "25%", height: "auto", border: "1px solid lightgray", padding: "20px"  }} />
      <img src="https://4.bp.blogspot.com/-Rwmnb4iqSs8/WBns2DiLgXI/AAAAAAAAG3U/TYnxcREE3MIJBPI2g20_8NkG4cRU0PNiACEw/s400/6724371301_f60c255751_z.jpg" alt="" style={{ maxWidth: "25%", height: "auto", border: "1px solid lightgray", padding: "20px"  }} />
      <img src="https://cdn.climatechangenews.com/files/2017/05/6465446559_c11c6fbf55_b-e1494258881869.jpg" alt="" style={{ maxWidth: "25%", height: "auto", border: "1px solid lightgray", padding: "20px"  }} />
      <img src="https://rare-gallery.com/thumbs/1020467-sunlight-fall-sunset-sea-reflection-sky-clouds-railway-sunrise-evening-morning-rust-horizon-dusk-transport-cloud-dawn-track.png" alt="" style={{ maxWidth: "25%", height: "auto", border: "1px solid lightgray", padding: "20px"  }} />
      <img src="https://images.unsplash.com/16/unsplash_5263607dd1bfc_2.jpg?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&w=1000&q=80" alt="" style={{ maxWidth: "25%", height: "auto", border: "1px solid lightgray", padding: "20px"  }} />
    </div> 

    <div style= {{ position: "absolute", marginTop:"50px", left:"5%" , color: "black", textAlign: "right"}}> 
      <h1 style={{ fontSize: "3.0rem" }}>History</h1>
    </div>

    <div style= {{ position: "absolute", left:"5%" , color: "black", textAlign: "justify", marginTop:"200px", paddingRight:"60px"}}> 
      <p style={{ fontSize: "1.3rem", marginBottom:"20px"}}>Rail was introduced in Sri Lanka in 1864 to transport coffee from plantations in the hill country district of Kandy to the port city of Colombo on its way to Europe and the world market. The coffee blight of 1871 destroyed many a fine plantation and tea replaced coffee. With the development of tea plantations in the 1880s, the joint-stock companies swallowed up the former individual proprietorship of the coffee era. Under corporate ownership and management control by companies, the process of production of tea became more sophisticated and needed more and more railways built to the Kandyan highlands. To send tea to Colombo and to transport labour, machinery, manure, rice, and foodstuff, etc to Kandy, another 100 miles of railways were constructed in the tea planting districts to serve the expanding tea domain.</p>
      <p style={{ fontSize: "1.3rem",marginBottom:"20px" }}>To serve the coconut plantations flourishing in the west, southwest and northwest coastal areas of the country, and the wet inland rubber plantations below the tea belt, railway lines were built in the wake of these agricultural developments. Thereafter, the need for cheap and safe travel in order to open up the hinterland of the country led to the expansion of the railway.</p>
      <p style={{ fontSize: "1.3rem",marginBottom:"20px" }}>An extension of the Main Line to Kandy was made north to the ancient city of Anuradhapura, going further north to Kankesanturai and west to Talaimannar to connect the island with South India by ferry, to bring Indian labour for the tea and rubber plantations, and also import rice and other food stuffs not indigenously produced in sufficient quantities.</p>
      <p style={{ fontSize: "1.3rem",marginBottom:"20px" }}>Up country, a similar branch line was laid from Nanu Oya on the Main Line through very difficult terrain to serve the tea plantations around Nuwara Eliya. Track alignment was defined in this section about 140 years ago, when economic considerations were vastly different. The railways achieved modal superiority with speeds of 25 to 40 kmph in the hill country and 65 to 80 in the low country. Civil engineering criteria was influenced by the economic need to minimize cuts and fills, permitting gradients to 2 to 3 % and minimizing bridge lengths. As a result, the alignment here is winding with very sharp curves.</p>
    </div>   

    <div style= {{ position: "absolute", marginTop:"850px", left:"5%" , color: "black", textAlign: "right"}}> 
      <h1 style={{ fontSize: "3.0rem" }}>Our Services</h1>
    </div>

    <div style={{display:"flex", flexDirection:"row", flexWrap:"wrap" ,justifyContent: "center",  gap:"50px", marginTop:"1000px" , marginBottom:"50px"}}>
      <p style={{ maxWidth: "45%", height: "auto", border: "1px solid lightgray", padding: "20px",fontWeight:"bold" }}> Colombo Fort - Jaffna</p>
      <p style={{ maxWidth: "45%", height: "auto", border: "1px solid lightgray", padding: "20px",fontWeight:"bold" }}> Colombo Fort - Beliatta</p>
      <p style={{ maxWidth: "45%", height: "auto", border: "1px solid lightgray", padding: "20px",fontWeight:"bold" }}> Colombo Fort - Badulla</p>
      <p style={{ maxWidth: "45%", height: "auto", border: "1px solid lightgray", padding: "20px",fontWeight:"bold" }}> Kandy - Badulla</p>
      <p style={{ maxWidth: "45%", height: "auto", border: "1px solid lightgray", padding: "20px",fontWeight:"bold" }}> Colombo Fort - Trincomalee</p>
      <p style={{ maxWidth: "45%", height: "auto", border: "1px solid lightgray", padding: "20px" ,fontWeight:"bold"}}>Colombo Fort - Talaimannar</p>
      <p style={{ maxWidth: "45%", height: "auto", border: "1px solid lightgray", padding: "20px",fontWeight:"bold" }}> Colombo Fort - Kandy</p>
      <p style={{ maxWidth: "45%", height: "auto", border: "1px solid lightgray", padding: "20px",fontWeight:"bold" }}> Colombo Fort - Batticaloa</p>
    </div>


    
      </div>
    </div> 


  );
}

  export default HomeSite;