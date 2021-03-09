import React from 'react'
import { Table } from './Table';
// window.addEventListener("DOMContentLoaded", setupForm);

// function setupForm(){
// 	const form = document.getElementById("login-form");
// 	form.addEventListener("submit", handleSubmit);
// }//setupForm

function handleSubmit(event){
	event.preventDefault();

	const {
		username,
		password,
		login_type,
		result
	} = event.target;

	const processUser = login_type.value == "register" ? registerUser : loginUser;
	const response    = processUser(username.value, password.value);
	result.innerHTML  = response;
}//handleSubmit

function registerUser(username, password){
	window.localStorage.setItem("exampleLogin__username", username);
	window.localStorage.setItem("exampleLogin__password", password);

	return `New user ${username} now registered!`;
}//registerUser

function loginUser(username, password){
	const registeredUser     = window.localStorage.getItem("exampleLogin__username");
	const registeredPassword = window.localStorage.getItem("exampleLogin__password");

	const validUser     = username == registeredUser;
	const validPassword = password == registeredPassword;

	if(validUser && validPassword){
        document.location.href="/add"
		return `User ${username} successfully logged-in!`;
	}
        else if(!validUser)     return `Username ${username} has not been registered. `;
	else if(!validPassword) return `Incorrect password for username ${username}`;
}
 const Register = () => {
    return (
        <div>
            
         <form id="login-form" action="submit " onSubmit={handleSubmit}>
	
		<h3>
			User Details
		</h3>
		<div>
			<label for="username">Username</label>
			<input id="username" type="text" name="username" placeholder="Username" required/>
		</div>
		<div>
			<label for="password">Password</label>
			<input id="password" type="password" name="password" placeholder="Password" required />
		</div>
	
	
    <div>
			
			<input id="register" type="radio" name="login_type" value="register" checked="checked"/>
            <label for="register">Register</label>
		</div>
		<div>
			
			<input id="login" type="radio" name="login_type" value="login" />
            <label for="login">Login</label>
		</div>
		
	<input type="submit" value="Submit" />

	<output name="result"></output>
</form>
{/* <Table/> */}
        </div>
    )
}

export default Register;