import React from 'react'

 const Signup = () => {
    return (
        <div>
            <form>
            <input type="text" name="name"  placeholder="name"/> <br></br>
            <input type="text" name="email"  placeholder="email"/> <br></br>
            <input type="password" name="password" placeholder="password"/><br></br>
            <input type="button" value="submit"/>
            </form>
        </div>
    )
}
export default Signup;