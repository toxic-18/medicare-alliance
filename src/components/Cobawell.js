import React from "react";
import {BrowserRouter as Router, Switch, Route, Link}from "react-router-dom"

const View = () => {
    return (
        <>


            <section className="view-property">
                <div className="details">
                    <div className="thumb">
                        <div className="big-image">
                            <img src="images/cobawell.jpeg" alt="" />
                        </div>
                       
                    </div>
                    <h3 className="name">cobawel</h3><br></br>
                    <p className="location"><i class="fa-solid fa-tablets"></i><span>Tablet</span></p><br></br>
                 
                    <h3 className="title">details</h3>
                    <div className="flex">
                        <div className="box">
                            <p><i>Type </i><span>tablet</span></p>
                           
                        </div>
                      
                    </div>
                    <h3 className="title">can be used</h3>
                    <div className="flex">
                        <div className="box">
                            <p><i className="fas fa-check" /><span>as a supplement in patients with a condition called diabetic  neuropathy (nerve pain) and for general weakness, fatigue and as a nutritional supplement</span></p>
                           </div>
                    </div>
                    <h3 className="title">description</h3>
                    <p className="description">Cobawel OD Tablet is an antihistamine. It treats difficulty in falling asleep and occasional sleeplessness. It induces sleep by depressing the brain to produce feelings of drowsiness and tiredness.
<br></br>
Key Ingredients:
<br></br>
Alpha lipoic acid
<br></br>
Benfotiamine
<br></br>
Calcium
<br></br>
d-pantothenate
<br></br>
Chromium picolinate
<br></br>
Folic acid
<br></br>
Methylcobalamin
<br></br>
Selenium dioxide
<br></br>
Vitamin A
<br></br>
Vitamin B6
<br></br>
Vitamin E 25
<br></br>
<br></br>

Key Benefits:
<br></br>
It makes the mind calm and gives good sleep
<br></br>
Induces sleep by causing the brain to produce feelings of drowsiness and tiredness
<br></br>
Helps to attain good balance between body and mind
<br></br>
It gives relief from stress and increases the concentration power
<br></br>

Directions For Use:
<br></br>
As directed by doctor.
<br></br>

<br></br>
Safety Information:
<br></br>
Read the label carefully before use
<br></br>
Do not exceed the recommended dose
<br></br>
If you forget to take them as soon as possible and then continue to take them as normal. Do not take a double dose to make up for forgotten dose
<br></br>
Over dose of this tablet is dangerous for health
<br></br>
Use under medical supervision
<br></br>
Please take this after consulting with your doctor.</p>
<form action method="post">
                    <Link to="/Listing" className="btn">back</Link>
                    </form>
                </div>
            </section>

        </>
    )
}

export default View