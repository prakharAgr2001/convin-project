import React from 'react'
import Details from './Details';
import "../components/button.css"

    
function Number({identity,handleClick}) {
  return (
    <div>
     
    <div className="button">
                
              <button data-inline="true" onClick ={()=>{handleClick(identity)}}className="btn btn-primary button2 ">{identity}</button>
              
       
    </div>
    </div>
  )
}

export default Number
