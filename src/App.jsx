import React ,{ useState } from "react"
import   './index.css'

function App() {

  const [weight ,setWeight]=useState(0);
  const [height ,setHeight]=useState(0);
  const [bmi, setBmi]=useState('');
  const [massage,setMassage] =useState('')

 let calcBmi = (e)=>{
e.preventDefault();

if(weight ===0 || height===0){
  alert("please enter the valid weight and hight")
}
else{
  let bmi = (weight/(height*height)*703)
  setBmi(bmi.toFixed(1))

  if(bmi<25){
    setMassage("you are under weight")
  }
  else if( bmi>=25 && bmi <30){
    setMassage("you are a healthy weight person")
  }
  else{
    setMassage('you are overweight')
  }
}
 }

let reload = ()=>{window.location.reload()}


  return (
    <div className="App">
<div className="container">
<h2>BMI calc</h2>
<form onSubmit={calcBmi}>
<div>
  <label>Weight(lbs)</label>
  <input type="text" placeholder="enter weight value" value={weight} 
  onChange={(e)=>setWeight(e.target.value)}  />
</div>

<div>
  <label>Height(in)</label>
  <input type="text" placeholder="enter height value" value={height} 
   onChange={(event)=>setHeight(event.target.value)}  />
</div>

<div>
  <button className="btn" type="submit"> submit</button>
  <button className="btn btn-outline" onClick={reload} type="submit"> reload</button>
</div>

<div className="center">
  <h3>your BMI is : {bmi} </h3>
  <p>{massage}</p>

</div>

</form>

</div>


    </div>
  )
}

export default App
