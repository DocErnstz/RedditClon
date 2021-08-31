import React, { useState, useEffect } from "react";
import { getSubs } from "../../actions/subs";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import SubCard from "./SubCard.js";
import { v4 as uuidv4 } from 'uuid';

const Searchbar = () => {
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
    <div class="container" id="Mainbar" style={{overflowX: "hidden"}}>
      
                    
      <div class="row">
        <div id="homePosts" class="col-12 col-md-7">
           <div class="d-flex flex-column h-100">
             <div class="slice bg-white mb-4 rounded shadow">
               <div class="container h-100">
                 <div class="d-flex h-100 align-items-center">
                   <div class="d-flex justify-content-center" style={{"flex-basis": "50px"}}>
                    <i class="far fa-user fa-2x"></i>
                   </div>
                   <div class="flex-grow-1">
                     <input type="text" placeholder="Create Post" class="w-100 p-1 rounded"/>
                   </div>
                 </div>
               </div>
             </div>
             <div class="slicePost bg-white  mb-4 rounded shadow">
              
                 <div class="row p-3 h-100">
                 <div class="col-1" id="votes">
                     <i class="fas fa-chevron-up"></i>
                   <div class="text-center">99</div>
                    <i class="fas fa-chevron-down"></i>
                 </div>
                 <div class="col-11">
                   <div class="d-flex flex-column h-100" id="ContentPost">
                     <div class="d-flex align-items-center">
                         <div class="sub mr-1"></div>
                        <div class="sub_title"> 
                          r/Planets</div>
                       </div>
                     <div class="h5 fw-bolder">Seekin out new planets geek friends</div>
                     <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Sequi similique officiis voluptatem, 
                       facere illum numquam exercitationem corporis delectus, 
                       temporibus alias odio molestias 
                       praesentium aspernatur est laboriosam? At consectetur quam reprehenderit.
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aliquid eos nulla. Exercitationem, veritatis modi voluptates quisquam accusantium quasi natus a odio officia? Perspiciatis natus quis eos amet reprehenderit laudantium.
                      </div>
                     <div class="flex-grow-1 d-flex align-items-center">
                       <i class="far fa-comment fa-2x"></i>
                       <div class="fw-bolder ml-1">99 Comments</div>
                     </div>
                   </div>
                 </div>
               </div>
               
               
             </div>
              <div class="slicePost bg-white  mb-4 rounded shadow">
              
                 <div class="row p-3 h-100">
                 <div class="col-1" id="votes">
                     <i class="fas fa-chevron-up"></i>
                     <div className="text-center">99</div>
                      <i class="fas fa-chevron-down"></i>
                 </div>
                 <div class="col-11">
                   <div class="d-flex flex-column h-100" id="ContentPost">
                     <div class="d-flex align-items-center">
                         <div class="sub mr-1"></div>
                        <div class="sub_title"> 
                          r/Planets</div>
                       </div>
                     <div class="h5 fw-bolder">Seekin out new planets geek friends</div>
                     <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                       Sequi similique officiis voluptatem, 
                       facere illum numquam exercitationem corporis delectus, 
                       temporibus alias odio molestias 
                       praesentium aspernatur est laboriosam? At consectetur quam reprehenderit.
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit aliquid eos nulla. Exercitationem, veritatis modi voluptates quisquam accusantium quasi natus a odio officia? Perspiciatis natus quis eos amet reprehenderit laudantium.
                      </div>
                     <div class="flex-grow-1 d-flex align-items-center">
                       <i class="far fa-comment fa-2x"></i>
                       <div class="fw-bolder ml-1">99 Comments</div>
                     </div>
                   </div>
                 </div>
               </div>
               
               
             </div>

            
           </div>
          </div>
         
        
         <div id="infoReddit" class="col-12 h-50 shadow col-md-4 mx-auto bg-white rounded">
        
            
           <div class="bg-white" style={{height: "250px"}}>
              
               <div class="h-100 p-3 container d-flex flex-column justify-content-between">
                 <p>
                   Your personal Reddit frontpage. Come here to check in with your favorite communities.
                 </p>
                 <div class="btn btn-outline bg-primary text-white block w-100 border-0">Create Post</div>
                 <div class="btn btn-outline border-primary bg-white text-primary mt-2 block w-100 ">Create Community</div>
                 </div>
            
             
             </div>
             
           </div>
         </div>
      </div>
  );
};

export default Searchbar;
