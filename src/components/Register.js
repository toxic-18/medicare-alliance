import React, { useState } from "react"
import axios from "axios"
import { Link, useNavigate } from "react-router-dom"

const Register = () => {

    return (
        <section  class="form-container">

        <form action="/Body" >
           <h3>create an account!</h3>
           <input type="tel" name="name" required maxlength="50" placeholder="enter your name" class="box"/>
           <input type="email" name="email" required maxlength="50" placeholder="enter your email" class="box"/>
           <input type="password" name="pass" required maxlength="20" placeholder="enter your password" class="box"/>
           <input type="password" name="c_pass" required maxlength="20" placeholder="confirm your password" class="box"/>
           <p>already have an account? <Link to="/Login">Login now</Link></p>
           <input type="submit" value="register now" name="submit" class="btn"/>
        </form>
     
     </section>
    )
}

export default Register