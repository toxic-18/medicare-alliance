import react from 'react';
const Contact =()=>{
    return(
        <>
          <form action method="post">
        <h3>welcome back!</h3>
        <input type="email" name="email" required maxLength={50} placeholder="enter your email" className="box" />
        <input type="password" name="pass" required maxLength={20} placeholder="enter your password" className="box" />
        <p>don't have an account? <a href="register.html">register new</a></p>
        <input type="submit" defaultValue="login now" name="submit" className="btn" />
      </form>
        </>
    )
}