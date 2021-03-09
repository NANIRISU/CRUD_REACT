import React,{useState} from 'react';

 const SignIn = () => {
     const [defualtemail,setDeafultEmail]=useState('muppasaikrishna@gmail.com');
     const [defualtpassword,SetDeafultPassword]=useState('1234');
     const [email,setEmail]=useState('');
     const [password,SetPassword]=useState('');
  const savedData =()=>{
      if(defualtemail===email && defualtpassword===password){
          alert("allowed here")
          
      }else{
          alert("password wrng")
      }
  }

  
    return (
        <div>
            <form >
            <input type="text" name="email"  value={email}  placeholder="email" onChange={(e)=>setEmail(e.target.value)}/> <br></br>
            <input type="password" name="password" value={password} placeholder="password" onChange={(e)=>SetPassword(e.target.value)}/><br></br>
            <input type="button" value="submit" onClick={()=>savedData()}/>
            </form>
        </div>
    )
}
export default SignIn;