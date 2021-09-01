import React, { useState, useEffect } from "react";
import { getSubs } from "../../actions/subs";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SubCard from "./SubCard.js";
import { v4 as uuidv4 } from 'uuid';

const Homebar = () => {
  const [key, setKey] = useState("");

  const dispatch = useDispatch();
   useEffect(() => {
    dispatch(getSubs());
  });
  const subs = useSelector((state) => state.subs);
  const filter_subs = subs.filter((sub) => sub.title.includes(key));
  const prefix = "r/";
  const space = "/";
  return (
    <div className="container" id="Mainbar" style={{overflowX: "hidden"}}>
      
                    
      <div className="row">
        <div id="homePosts" className="col-12 col-md-7">
           <div className="d-flex flex-column h-100">
             <div className="slice bg-white mb-4 rounded shadow">
               <div className="container h-100">
                 <div className="d-flex h-100 align-items-center">
                   <div className="d-flex justify-content-center" style={{"flexBasis": "50px"}}>
                    <i className="far fa-user fa-2x"></i>
                   </div>
                   <div className="flex-grow-1">
                     <input type="text" placeholder="Create Post" className="w-100 p-1 rounded"/>
                   </div>
                 </div>
               </div>
             </div>
             <div className="slicePost bg-white  mb-4 rounded shadow">
              
                 <div className="row p-3 h-100">
                 <div className="col-1" id="votes">
                     <i className="fas fa-chevron-up"></i>
                   <div className="text-center">99</div>
                    <i className="fas fa-chevron-down"></i>
                 </div>
                 <div className="col-11">
                   <div className="d-flex flex-column h-100" id="ContentPost">
                     <div className="d-flex align-items-center">
                         <div className="sub mr-1"></div>
                        <div className="sub_title"> 
                          r/Planets</div>
                       </div>
                     <div className="h5 fw-bolder">Seekin out new planets geek friends</div>
                     <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Sequi similique officiis voluptatem, 
                       facere illum numquam exercitationem corporis delectus, 
                       temporibus alias odio molestias 
                       praesentium aspernatur est laboriosam? At consectetur quam reprehenderit.
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aliquid eos nulla. Exercitationem, veritatis modi voluptates quisquam accusantium quasi natus a odio officia? Perspiciatis natus quis eos amet reprehenderit laudantium.
                      </div>
                     <div className="flex-grow-1 d-flex align-items-center">
                       <i className="far fa-comment fa-2x"></i>
                       <div className="fw-bolder ml-1">99 Comments</div>
                     </div>
                   </div>
                 </div>
               </div>
               
               
             </div>
              <div className="slicePost bg-white  mb-4 rounded shadow">
              
                 <div className="row p-3 h-100">
                 <div className="col-1" id="votes">
                     <i className="fas fa-chevron-up"></i>
                     <div className="text-center">99</div>
                      <i className="fas fa-chevron-down"></i>
                 </div>
                 <div className="col-11">
                   <div className="d-flex flex-column h-100" id="ContentPost">
                     <div className="d-flex align-items-center">
                         <div className="sub mr-1"></div>
                        <div className="sub_title"> 
                          r/Planets</div>
                       </div>
                     <div className="h5 fw-bolder">Seekin out new planets geek friends</div>
                     <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Sequi similique officiis voluptatem, 
                       facere illum numquam exercitationem corporis delectus, 
                       temporibus alias odio molestias 
                       praesentium aspernatur est laboriosam? At consectetur quam reprehenderit.
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aliquid eos nulla. Exercitationem, veritatis modi voluptates quisquam accusantium quasi natus a odio officia? Perspiciatis natus quis eos amet reprehenderit laudantium.
                      </div>
                     <div className="flex-grow-1 d-flex align-items-center">
                       <i className="far fa-comment fa-2x"></i>
                       <div className="fw-bolder ml-1">99 Comments</div>
                     </div>
                   </div>
                 </div>
               </div>
               
               
             </div>

            
           </div>
          </div>
         
        
         <div id="infoReddit" className="col-12 h-50 shadow col-md-4 mx-auto bg-white rounded">
        
            
           <div className="bg-white" style={{height: "250px"}}>
              
               <div className="h-100 p-3 container d-flex flex-column justify-content-between">
                 <p>
                   Your personal Reddit frontpage. Come here to check in with your favorite communities.
                 </p>
                 <div className="btn btn-outline bg-primary text-white block w-100 border-0">Create Post</div>
                 <div className="btn btn-outline border-primary bg-white text-primary mt-2 block w-100 ">Create Community</div>
                 </div>
            
             
             </div>
             
           </div>
         </div>
      </div>
  );
};

export default Homebar;
