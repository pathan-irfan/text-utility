import  React , { useState } from "react"

//Closure JavaScript me ek bahut hi powerful concept hai. Closure ek function ke andar aur uske bahar define kiye gaye variables ko capture karta hai. Ek closure ke through, ek function ke bahar ke variables ko us function ke andar access kiya ja sakta hai.



export default function Form(props) {

 const[Text , setText] = useState("Enter the text ");
   
  // setText('irfan pathan ashraf')
  
 const haldeltoup=()=>{
  let alltext=Text.toUpperCase()

 setText(alltext)

 }
const haldeltolp=()=>{
  let alltext=Text.toLowerCase()

 setText(alltext)

 }

 const clear=()=>{

 setText('')

 }

 const change =(event)=>{
  
   setText(event.target.value)
   
 }
 const spaceRemove =()=>{

  let newtext= Text.split(/[ ]+/)
     setText(newtext.join(" "))
 }

//  const copy =()=>{
//   // let mytext = Text.select()
//   // setText(mytext.navigator.clipboard.writeText(Text.value))
// let Text = document.getElementById("box2")

//   Text.select()

//     navigator.clipboard.writeText(Text.value)


//  }
 
  
  return (
    <div>
 
      <h1 style={{color:props.mode==="light"?"black" :"white" }}> { props.heading } </h1> 
<div className=" container   my-3" >
  
  <textarea className="form-control" id="box2" rows="6"  value={Text} onChange={change}  style={{backgroundColor:props.mode==="light"?"white" :"gray",color:props.mode==="light"?"black" :"white"  }}></textarea>

</div>
   <button className=" btn btn-primary  mx-1"  onClick={haldeltoup}>convert to upper </button>

   <button className=" btn btn-primary  mx-1"  onClick={haldeltolp}>convert to Lower Case </button>
 
   <button className=" btn btn-primary mx-1"  onClick={clear} > clear Text  </button>
     
   <button className=" btn btn-primary mx-1"  onClick={spaceRemove} > Remove space  </button>
   {/* <button className=" btn btn-primary mx-1"  onClick={ copy} > copy text   </button>  */}

    <h1 style={{color:props.mode==="light"?"black" :"white" }}>your Text summury</h1>
    <p style={{color:props.mode==="light"?"black" :"white" }}>{Text.split(' ').length} words and {Text.length} charecters</p>
    <p style={{color:props.mode==="light"?"black" :"white" }}> {0.008*Text.split(' ').length} minutes read </p>
      <h2 style={{color:props.mode==="light"?"black" :"white" }}>priview </h2>
      <p style={{color:props.mode==="light"?"black" :"white" }}>{Text}</p>
    </div> 
  )
}


///IN JAVASCRIP HOISTING IS DEFAULT BEHAVIAR VARIABLE DECLARECTION TOP OF THE THEIR 
//SUPPOSE I DECLEREAD A = 2 AND CONSOLE.LOG (A ) AND BELOW I DIFIND VAR A IT WOLUD BE WORK BECAUSE IN JAVA SCRIP VARIABLE SCOP ATOMATICCLLY MOVING TOP OF THE THEIR 

//CLOSURE IN JAVA SCRIP POWERFULL FETURE A CLOSURE CAPTURE VARIABLE OF FUNCTION IN SIDE AND OUT OUT SIDE WE CAN ACCSES A OUTER VARIABLE IN SIDE A FUNCTION 