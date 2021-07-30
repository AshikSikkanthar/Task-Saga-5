  
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { GET_USERS, SET_USERS } from "../reducer/action";
import axios from "axios";

export function Users(props) {
  useEffect(() => {
    props.getUsers();
  }, []);
  
  
  return <div>
  {/* <p
  class="text-warning">Length is {props.data.length} 
  </p>
   */}
  {/* <div class="new-card-design">

 
  
  
      <div class="new-container"  class="col-6">
      
      {
         props.data.map((user,i)=><p    key={i}>
            
            <h2>Name: {user.name}</h2> 
             <h2>Email-Id : {user.email}</h2> 
             
         </p>
         )
     }  
      
      
        <div class="new-card"  >
 
        
                  <div class="circle">
              
                 
                  
            <h2>01</h2>


            
          </div>
       
       
          

         
          <div class="new-content"  >
             
          
             
     </div>
        
  
              
          </div>
          
               
      </div>
    </div> */}

    <div class="new-card-design">
      <div class="new-container">
      {
                
                props.data.map((user, i) =>

      
        <div class="new-card">
          <div class="circle">
            <h2>{i}</h2>
          </div>
          <div class="new-content">
          <p>Name: {user.name}</p> 
             <p>Email-Id : {user.email}</p> 
          </div>
        </div>
                )}
      </div>
    </div>

  {/* <div class="demo">
  {
      props.data.map((user,i)=><div className="card text-center m-3 py-2" class="bg" key={i}>
          <span className="card-body py-0 mb-1"> <div className="badge bg-danger"> Name: {user.name}</div> </span>
            <span className="card-body py-0 mb-0 "><div className="badge bg-danger"> Email-Id : {user.email}</div></span>
      </div>
      )
  }
</div>; */}
</div>
}

    {/* <div class="demo">
      <p class="text-warning">Length is {props.data.length} </p>
  
    <div>
 
      {
                
        props.data.map((user, i) =>
          <div className="card text-center m-3 py-2" class="bg" key={i}>
            <span className="card-body py-0 mb-1"> <div className="badge bg-info"> Name: {user.name}</div> </span>
            <span className="card-body py-0 mb-0 "><div className="badge bg-success"> Email-Id : {user.email}</div></span>
                    
      </div>
       
          )}
        
        </div> 
       </div>
    } */}
const mapStateToProps = (state) => {
  return {
    data: state.users.data || [],
  };
};



const mapDispatchToProps = (dispatch) => {
  return {
    getUsers: () => {
        dispatch({ type: GET_USERS});
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);