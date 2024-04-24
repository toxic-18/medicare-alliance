import React, {useState} from "react"
import { Link } from "react-router-dom"
const Login = () => {


    return (
     
<section class="form-container">

<form action="/Body">
   <h3>welcome back!</h3>
   <input type="email" name="email" required maxlength="50" placeholder="enter your email" class="box"/>
   <input type="password" name="pass" required maxlength="20" placeholder="enter your password" class="box"/>
   <p>don't have an account? <Link to="/register">register new</Link></p>
   <input type="submit" value="login now" name="submit" class="btn"/>
</form>

</section>
    )
}

export default Login