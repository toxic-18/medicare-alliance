import react from 'react';
import { ReactDOM } from 'react-dom/client';
import {BrowserRouter as Router, Link}from "react-router-dom"


const Body = () => {

  return (
        <>
        
          <div>
            <div className="home">
              <section className="center">
                
              </section>
            </div>
            {/* home section ends */}
            {/* services section starts  */}
            <section className="services">
              <h1 className="heading">our services</h1>
              <div className="box-container">
                <div className="box">
                  <img src="images/donate.jpg" alt="" />
                  <h3>Donate Medicine</h3>
                  <p>You can donate the medicine here</p>
                </div>
                <div className="box">
                  <img src="images/stock.png" alt="" />
                  <h3>Medicine in stock</h3>
                  <p>This feature tell how many medicine are available.</p>
                </div>
                <div className="box">
                  <img src="images/health camp.jpeg" alt="" />
                  <h3>Health camp</h3>
                  <p>our recent helth camp we organised.</p>
                </div>
                <div className="box">
                  <img src="images/aobut.jpg" alt="" />
                  <h3>About</h3>
                  <p> what we do and how we do.</p>
                </div>
                <div className="box">
                  <img src="images/icon-6.png" alt="" />
                  <h3>24/7 service</h3>
                  <p>te provide a 24/7 services here.</p>
                </div>
              </div>
            </section>
            {/* services section ends */}
            {/* listings section starts  */}
            <section className="listings">
              <h1 className="heading">latest listings</h1>
              <div className="box-container">
                <div className="box">
                  <div className="admin">
                    <h3>P</h3>
                    <div>
                      <p>Paracetmol</p>
                      <span>10-11-2024</span>
                    </div>
                  </div>
                  <div className="thumb">
                    <p className="total-images"><i className="far fa-image" /><span>4</span></p>
                    <p className="type"><span>Medicine</span></p>
                    <form action method="post" className="save">
                      <button type="submit" name="save" className="far fa-heart" />
                    </form>
                    <img src="images/paracetamol.jpeg" alt="" />
                  </div>
                  
                  <Link to="/view" className="btn">view  Medicine</Link>
                </div>
                <div className="box">
                  <div className="admin">
                    <h3>j</h3>
                    <div>
                      <p>Asthakind</p>
                      <span>10-11-2024</span>
                    </div>
                  </div>
                  <div className="thumb">
                    <p className="total-images"><i className="far fa-image" /><span>4</span></p>
                    <p className="type"><span>Medicine</span></p>
                    <form action method="post" className="save">
                      <button type="submit" name="save" className="far fa-heart" />
                    </form>
                    <img src="images/asthakind.jpg" alt="" />
                  </div>
                 
                  <Link to="/view" className="btn">view Medicine</Link>
               </div>
                <div className="box">
                  <div className="admin">
                    <h3>A</h3>
                    <div>
                      <p>nupenta</p>
                      <span>21-08-2022</span>
                    </div>
                  </div>
                  <div className="thumb">
                    <p className="total-images"><i className="far fa-image" /><span>4</span></p>
                    <p className="type"><span>Medicine</span></p>   
                    <form action method="post" className="save">
                      <button type="submit" name="save" className="far fa-heart" />
                    </form>
                    <img src="images/newpenta.webp" alt="" />
                  </div>
                 
                  <Link to="/view" className="btn">view Medicine</Link>
                </div>
              </div>
              <div style={{ marginTop: '2rem', textAlign: 'center' }}>
                <Link to="/listing" className="inline-btn">view all</Link>
              </div>
            </section>
          </div>
        

        </>
        );
        
    }


        export default Body