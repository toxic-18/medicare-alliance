 import React from 'react';
 import { ReactDOM } from 'react-dom/client';
 import {BrowserRouter as Router, Link}from "react-router-dom"

 const Listing = ()=>
 {
  return (
     <>
  <section className="listings">
        <h1 className="heading">all listings</h1>
        <div className="box-container">
          <div className="box">
            <div className="admin">
              <h3>P</h3>
              <div>
                <p>Paracetamol</p>
                <span>10-11-2022</span>
              </div>
            </div>
            <div className="thumb">
             
              <p className="type"><span>Medicine</span></p>
              <form action method="post" className="save">
                <button type="submit" name="save" className="far fa-heart" />
              </form>
              <img src="images/paracetamol.jpeg" alt="" />
            </div>
           
            <p className="location"><i class="fa-solid fa-circle-info"></i><span>know  more</span></p>
            <Link to="/Para" className="btn">view Medicine</Link>
          </div>
          <div className="box">
            <div className="admin">
              <h3>A</h3>
              <div>
                <p>Asthakind</p>
                <span>10-11-2023</span>
              </div>
            </div>
            <div className="thumb">
             
              <p className="type"><span>syrup</span></p>
              <form action method="post" className="save">
                <button type="submit" name="save" className="far fa-heart" />
              </form>
              <img src="images/asthakind.jpg" alt="" />
            </div>
           
            <p className="location"><i class="fa-solid fa-circle-info"></i><span>know  more</span></p>
           
            <Link to="/view" className="btn">view Medicine</Link>
          </div>
          <div className="box">
            <div className="admin">
              <h3>N</h3>
              <div>
                <p>nupenta</p>
                <span>21-08-2022</span>
              </div>
            </div>
            <div className="thumb">
             
               <p className="type"><span>Medicine</span></p>
              <form action method="post" className="save">
                <button type="submit" name="save" className="far fa-heart" />
              </form>
              <img src="images/newpenta.webp" alt="" />
            </div>
           
            <p className="location"><i class="fa-solid fa-circle-info"></i><span>know  more</span></p>
           
            <Link to="/newpenta" className="btn">view Medicine</Link>
          </div>
          <div className="box">
            <div className="admin">
              <h3>A</h3>
              <div>
                <p>Allegra</p>
                <span>10-08-2022</span>
              </div>
            </div>
            <div className="thumb">
             
              <p className="type"><span>Syrup</span></p>
              <form action method="post" className="save">
                <button type="submit" name="save" className="far fa-heart" />
              </form>
              <img src="images/allegra.webp" alt="" />
            </div>
           
            <p className="location"><i class="fa-solid fa-circle-info"></i><span>know  more</span></p>
          
            <Link to="/Alle" className="btn">view Medicine</Link>
          </div>
          <div className="box">
            <div className="admin">
              <h3>C</h3>
              <div>
                <p>Cobawell</p>
                <span>17-03-2022</span>
              </div>
            </div>
            <div className="thumb">
             
               <p className="type"><span>Injection</span></p>
              <form action method="post" className="save">
                <button type="submit" name="save" className="far fa-heart" />
              </form>
              <img src="images/cobawell.jpeg" alt="" />
            </div>
           
            <p className="location"><i class="fa-solid fa-circle-info"></i><span>know  more</span></p>
           
            <Link to="/Cobawell" className="btn">view Medicine</Link>
          </div>
          <div className="box">
            <div className="admin">
              <h3>A</h3>
              <div>
                <p>Diaprin</p>
                <span>10-08-2022</span>
              </div>
            </div>
            <div className="thumb">
             
              <p className="type"><span>tablets</span></p>
              <form action method="post" className="save">
                <button type="submit" name="save" className="far fa-heart" />
              </form>
              <img src="images/Disprin.jpg" alt="" />
            </div>
           
            <p className="location"><i class="fa-solid fa-circle-info"></i><span>know  more</span></p>
          
            <Link to="/Disprin" className="btn">view Medicine</Link>
          </div>
        </div>
      </section>

     </>
  )
 };

 export default Listing