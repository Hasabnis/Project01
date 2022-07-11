import React, { useState } from 'react'

const UserManagement = () => {

    const[userRegistration, setUser] = useState({
        user:"",
        email:"",
        phone:""
    });

    const[records,setRecords] = useState([]);

    const handleInput = (e) =>{
        const name = e.target.name;
        const value = e.target.value;
        console.log(name,value);
        setUser({...userRegistration, [name]:value});
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        const newRecord = {...userRegistration, key:Date.now()}
        setRecords([...records,newRecord]);
        console.log(records);
        setUser({username:"",email:"",phone:""});
    }

  return (
    <>
    <div className = "ui main">
    <h3>User Details :</h3>
    <form onSubmit = {handleSubmit} className="ui form">
    <div className="field">
    <label htmlfor = "user">Full Name</label>
    <input type="text" autoComplete='off' value = {userRegistration.username} onChange = {handleInput} name="username" id = "username" placeholder="Please enter full name" />
    </div>

    <div className="field">
    <label htmlfor = "email">Email</label>
    <input type="text" autoComplete='off' value = {userRegistration.email} onChange = {handleInput} name="email" id = "email" placeholder="Please enter Email" />
    </div>

    <div className="field">
    <label htmlfor = "phone">Contact</label>
    <input type="number" autoComplete='off' value = {userRegistration.phone} onChange = {handleInput} name="phone" id = "phone" placeholder="Please enter Contact number" />
    </div>



    <div className="field">
    <button className="ui button blue" type="Submit">Add User</button>
    </div>
    </form>

    <div>
    {
        records.map((curEle)=>{
            return (
                <>
                <div class="ui list">
                <div class="item" style = {{paddingTop:"20px", paddingLeft:"40px", paddingRight:"20px"}}>
                <div class="content">
                <div class="header"><h4>{curEle.username}</h4></div>
                </div>
                </div>

                <div class="item" style = {{paddingTop:"20px", paddingLeft:"40px", paddingRight:"20px"}}>
                <div class="content">
                <div class="header"><h4>{curEle.email}</h4></div>  
                </div>
                </div>

                <div class="item" style = {{paddingTop:"20px", paddingLeft:"40px", paddingRight:"20px"}}> 
                <div class="content">
                <div class="header"><h4>{curEle.phone}</h4></div>
                </div>
                </div>
                <hr></hr>
                </div>
              </>
            )
        })  
    }
    </div>
    </div>

    </>
  )
}

export default UserManagement