import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "../../actions/posts";

import Posts from "../Posts/Posts";
import Form from "../Form/Form";

const Home = () => {
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(0);
  const queryString = String(window.location.href).split("/");
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <div>
        <div id="SubInfo" class="bg-white">
       <span id="subImg" class="w-100 d-block" style={{height: "100px"}}></span>
  <div class="d-flex flex-column mx-auto px-4" style={{maxWidth: "800px"}}>
    <div class="d-flex mb-2" style={{zIndex: "99", marginTop: "-15px"}}>
        <i class="fas fa-globe fa-4x"></i>
        <div class="d-inline-flex" style={{width: "calc(100% - 80px)", marginTop: "20px", paddingLeft: "10px"}}>
          <div style={{width: "calc(100% - 80px)"}}>
            <h1 class="m-0 d-inline-block" style={{flex: "1", fontSize: "28px"}}>Discuss {queryString[4]} education, news, events, use cases and resources.</h1>
            <p class="m-0">r/{queryString[4]}</p>
          </div>
          <a href="" class="btn m-0 border-0 btn-primary rounded-pill" style={{height: "40px", width: "80px"}}>Join</a>
        </div>
       </div>
       
     
    </div>
    </div>
  
  
       <div class="container" id="Mainbar">
      <div class="row">
        <div id="homePosts" class="col-12 col-md-7">
           <div class="d-flex flex-column h-100">
             <div class="slice bg-white mb-4 rounded shadow">
               <div class="container h-100">
                 <div class="row h-100 align-items-center">
                   <div class="col-2 d-flex justify-content-center">
                    <i class="far fa-user fa-2x"></i>
                   </div>
                   <div class="col-8">
                     <input type="text" placeholder="Create Post" class="w-100 p-1 rounded"/>
                   </div>
                 </div>
               </div>
             </div>
             <Posts setCurrentId={setCurrentId} isMain={false}/>
           </div>
          </div>
         
        

            <div class="card p-0 h-50" id="infoReddit" style={{width: "18rem"}}>
  <div class="bg-primary w-100" style={{height: "50px"}}></div>
  <div class="card-body">
    <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem debitis mollitia quidem vitae expedita consequuntur sequi minus hic deserunt dicta eius rem, incidunt recusandae odio, molestiae asperiores accusamus, aspernatur.</p>
    <div class="d-flex">
      <div class="d-flex flex-column flex-grow-1">
        <h5>70k</h5>
        <p>Members</p>
      </div>
      <div class="d-flex flex-column flex-grow-1">
        <h5>10</h5>
        <p>Online</p>
      </div>
      
    </div>
     <div class="d-flex align-items-center">
      <i class="fas fa-birthday-cake fa-2x me-2"></i>
      <div class="h-50">Created Jun 1, 2003</div>
    </div>
    </div>
   
  </div>
</div>
          
             

         </div>
    </div>
  );
};

export default Home;
