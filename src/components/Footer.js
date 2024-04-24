import react from'react';
import { Link } from 'react-router-dom';

const Footer= () =>{
return(
    <>
    <footer className="footer">
          <section className="flex">
            <div className="box">
              <a href="tel:1234567890"><i className="fas fa-phone" /><span>123456789</span></a>
              <a href="mailto:shaikhanas@gmail.com"><i className="fas fa-envelope" /><span>meetg73@gmail.com</span></a>
              <a href="#"><i className="fas fa-map-marker-alt" /><span>India</span></a>
            </div>
            <div className="box">
              <Link to="/Body"><span>Medicine</span></Link>
              <Link to="/Contact"><span>contact</span></Link>
              <Link to="/Listing"><span>all listings</span></Link>
            </div>
            <div className="box">
              <a href="https://www.linkedin.com/in/saksham-gupta-ab6833201/"><span>linkedin</span><i className="fab fa-linkedin" /></a>
              <Link to="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJTJFZVVVwhxFRpTrGcZLPncPgZVMrzJVSgdNBvGWkrjsQJSFwnnbDCNhPqLPhlnvHbCZTg"><span>Gmail</span><i class="fa-solid fa-envelope"></i></Link>
            </div>
          </section>
        </footer>
    </>
)
};
export default Footer