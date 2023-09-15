import React from "react";
import Logo from "../images/passopen.png";

const Navbar = () => {
  return (
    <div >
    <div className="main-nav">
    <div className="nav-parts">
      <div className="logo"><img src={Logo} style={{    width: "135px",
    height: "40px"}}/></div>
      <div className="right-but">
        <div className="login">Login</div>
        <div className="get-app">Get <span> App</span></div>
      </div>
    </div>
    </div>
    </div>
  );
};

export default Navbar;





// import React from 'react';
// import logo from "../images/passopen.png"

// const Header = () => {
//     return (
//         <div class="container text-center" style={{marginTop:"20px",marginLeft:"100px"}}>
//             <div class="row">
//                 <div class="col-6" id='int-text1'><img src={logo} style={{marginTop: "10px",
//       width: "155px", marginLeft: "79px"}} /></div>
//                 <div class="col-sm-3" id='int-t-2'> <button  style={{marginTop:"10px", height: "45px" , padding:"2px 40px ", fontWeight:700}}type="button" class="btn btn-outline-secondary">Log in</button>
// </div>
//                 <div class="col-sm-3" id='int-t-3'><button  style={{  marginTop:"10px",  width: "80%", padding: "0px 20px", fontWeight:700}}type="button" class="btn btn-primary">Get App</button></div>
//             </div>

//         </div>






















        //     <div class="container text-center"  style={{marginTop:"10px" ,
        //     }} >
        //   <div class="row row-cols-1 row-cols-sm-3   row-cols-md-3">
        //     <div class="col"><img src={logo} style={{marginTop: "10px",
        //     width: "155px"}} /></div>

        //     {/* <div class="col" ></div> */}
        //     <div class="col"> 

        //   <button  style={{marginTop:"10px", height: "45px" , padding:"2px 40px "}}type="button" class="btn btn-outline-secondary">Secondary</button>
        // </div>

        //     <div class="col"><ul class="nav nav-pills nav-justified">
        //   <li class="nav-item">
        //     <a class="nav-link active" aria-current="page" href="#" style={{  marginTop:"10px",  width: "60%",
        //     borderRadius: "4px"}}>Active</a>
        //   </li>
        // </ul>
        // </div>
        //   </div>
        // </div>
//     )
// }

// export default Header