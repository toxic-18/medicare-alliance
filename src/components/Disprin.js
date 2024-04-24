import React from "react";
import {BrowserRouter as Router, Switch, Route, Link}from "react-router-dom"
const View = () => {
    return (
        <>

<div>
            <section className="view-property">
                <div className="details">
                    <div className="thumb">
                        <div className="big-image">
                            <img src="images/disprin.jpg" alt="" />
                        </div>
                       
                    </div>
                    <h3 className="name">Disprin</h3><br></br>
                    <p className="location"><i class="fa-solid fa-tablets"></i><span>Tablet</span></p><br></br>
                 
                    <h3 className="title">details</h3>
                    <div className="flex">
                        <div className="box">
                            <p><i>Type </i><span>Syrup</span></p>
                           
                        </div>
                      
                    </div>
                    <h3 className="title">can be used</h3>
                    <div className="flex">
                        <div className="box">
                            <p><i className="fas fa-check" /><span><li>headaches</li><li> including migraine headaches</li><li> toothache</li><li> neuralgia</li><li> sciatica</li><li> period pains and sore throat</li></span></p>
                           </div>
                    </div>
                    <h3 className="title">description</h3>
                    <p className="description">Description
Disprin Regular 325mg Effervescent Tablet is used to treat many conditions such as headache, toothache, muscle pain, and fever. It helps to relieve from fever, pain, and inflammation (redness and swelling) and acts as a painkiller for aches and pains
<br></br>
Uses of Disprin Regular 325 mg, 10 Tablets<br></br><br></br>
Pain Relief<br></br>
<b>Key Benefits</b><br></br><br></br>
An anti-inflammatory and analgesic which help to relieve pain and swelling
Used to bring down high body temperatures and may prevent recurrence of heart attacks or strokes by thinning the blood
Relieving aches, pains and fever associated with colds and flu<br></br>
<b>Directions for Use</b><br></br><br></br>
<b>Safety Information</b><br></br><br></br>
<b>Key Ingredients</b><br></br><br></br>
Aspirin (Acetylsalicylic Acid), Calcium Carbonate, Maize Starch, Citric Acid Anhydrous, Talc (Sterilised), Sodium Laurilsulphate, Saccharin, Crospovidone And Lime Flavour 2.</p>
                    
                </div> <form action method="post">
                    <Link to="/Listing" className="btn">back</Link>
                    </form>
            </section>
            </div>
        </>
    )
}

export default View