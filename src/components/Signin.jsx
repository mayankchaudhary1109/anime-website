
import React from 'react';
import {useRef} from 'react';

function Signin() {
  const emailinp=useRef();
  const nameinp =useRef();
  const useinp=useRef();
  const passinp =useRef();
  const confinp=useRef();
  const emailpara=useRef();
  const namepara =useRef();
  const usepara=useRef();
  const passpara =useRef();
  const conpara=useRef();

  function openhl(){
    if(!emailinp.current.value.endsWith("@gmail.com")){
      emailpara.current.innerHTML="invalid email email";
      emailpara.current.style.color="red";
    }
    else{
      emailpara.current.innerHTML=""
    }
    if(nameinp.current.value===""){
      namepara.current.innerHTML="enter valid name";
      namepara.current.style.color="red";
    }
    else{
      namepara.current.innerHTML=""
    }
    if(useinp.current.value===""){
      usepara.current.innerHTML="enter username";
      usepara.current.style.color="red";
    }
    else{
      usepara.current.innerHTML=""
    }
    if(passinp.current.value===""){
      passpara.current.innerHTML="enter password";
      passpara.current.style.color="red";
    }
    else if(passinp.current.value.length<=7){
      passpara.current.innerHTML="password is weak";
      passpara.current.style.color="red";
    }
    else if(passinp.current.value.length>=8){
      passpara.current.innerHTML="strong password";
      passpara.current.style.color="green";
    }
    else{
      passpara.current.innerHTML=""
    }
   
      if(confinp.current.value===""){
        conpara.current.innerHTML="enter re-password";
        conpara.current.style.color="red";
        
      }
   else  if((confinp.current.value==="") && (passinp.current.value==="")){
      conpara.current.innerHTML="enter re-password";
      conpara.current.style.color="red";
      
    }
    else if((confinp.current.value===passinp.current.value)){
      conpara.current.innerHTML="password is match";
      conpara.current.style.color="green";
      
    }
    
    else{
      conpara.current.innerHTML="";
    }
    if((emailinp.current.value!=="") && (nameinp.current.value !=="") &&
    (useinp.current.value!=="") && (passinp.current.value!=="") &&
    (confinp.current.value === passinp.current.value) && (emailinp.current.value.endsWith("@gmail.com")) &&
    (confinp.current.value !=="") && (passinp.current.value.length>=8))
    {
      alert("sign in succesfully");

    }
  }

  return (
    <div className="col-sm-12"  >
      
   <div className="main col-sm-3 border mx-auto mt-4 " style={{backgroundColor:"#A9907E",borderRadius: '5px'}}>
    <h1  className="text-center mt-4"><b>Tatakae.tv</b></h1>
    <div className="col-sm-11 mx-auto mt-4">
      <input type="email" ref={emailinp} class="form-control" id="email" placeholder="Email"/> 
    <p className="ms-1" ref={emailpara} id="email1" style={{ height: '10px' }}></p>
    </div>
    <div className="col-sm-11 mx-auto">
      <input type="text" ref={nameinp} class="form-control" id="name" placeholder="Full Name"/>
    <p className="ms-1" ref={namepara} id="name1" style={{ height: '10px' }}></p>
    </div>
    <div className="col-sm-11 mx-auto">
      <input type="text"  ref={useinp} class="form-control" id="username" placeholder="Username"/>
    <p className="ms-1" ref={usepara} id="username1" style={{ height: '10px' }}></p>
    </div>
    <div className="col-sm-11 mx-auto">
      <input type="password"  ref={passinp} class="form-control" id="password" placeholder="Password"/>
    <p className="ms-1" ref={ passpara} id="password1" style={{ height: '10px' }}></p>
    </div>
    <div className="col-sm-11 mx-auto">
      <input type="password"  ref={confinp} class="form-control" id="confirmpassword" placeholder="ConfirmPassword"/>
    <p className="ms-1" ref={conpara} id="password1" style={{ height: '10px' }}></p>
    </div>
    <div className="col-sm-11 mx-auto mb-3">
      <button className="col-sm-12 pt-2 pb-2 btn-primary" onClick={openhl}>Sign-Up</button>
    </div>
    </div>
    
   </div>
  );

}


export default Signin;
