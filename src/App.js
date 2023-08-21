import Nav from "./nav"
  import Form from "./Form"
  import React, { useState } from 'react'



function App (){

  const [mode,setmode]=useState('light')

  const toggMode =()=>{

    
    if  (mode ==='dark'){

      
      setmode ('light')
       document.body.style.backgroundColor="white"
    }
    else {
      setmode ('dark')
       document.body.style.backgroundColor="gray"
    }
  }

    
    
    return(
      <>

   <Nav  titel="textutil" mode={mode}  toggMode={toggMode}/> 
       <div className="container my-3">
     <Form  heading='enter the text '  mode={mode}/> 

    
      </div>  


       </>
)
    
}

export default App