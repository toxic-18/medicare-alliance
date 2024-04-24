import react from 'react';
import {BrowserRouter as Router, Switch, Route, Link}from "react-router-dom"

const Contact = () => {
    return (
        <>


            <div className="row">
                <div className="image">
                    <img src="images/contact-img.svg" alt="" />
                </div>
                <form action method="post">
                    <h1>.get in touch</h1>
                    <input type="text" name="name" required maxLength={50} placeholder="enter your name" className="box" />
                    <input type="email" name="email" required maxLength={50} placeholder="enter your email" className="box" />
                    <input type="number" name="number" required maxLength={10} max={9999999999} min={0} placeholder="enter your number" className="box" />
                    <textarea name="message" placeholder="enter your message" required maxLength={1000} cols={100} rows={10} className="box" defaultValue={""} />
                    <input type="submit" defaultValue="send message" name="send" className="btn" />
                </form>
            </div>

        </>
    )
}

export default Contact