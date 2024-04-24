import React from "react";
import {BrowserRouter as Router, Switch, Route, Link}from "react-router-dom";
const View = () => {
    return (
        <>


            <section className="view-property">
                <div className="details">
                    <div className="thumb">
                        <div className="big-image">
                            <img src="images/paracetamol.jpeg" alt="" />
                        </div>
                       
                    </div>
                    <h3 className="name">Paracetamol</h3><br></br>
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
                            <p><i className="fas fa-check" /><span>dry cough</span></p>
                           </div>
                    </div>
                    <h3 className="title">description</h3>
                    <p className="description">PARACETAMOL belongs to the group of medicines called analgesics (pain killers), and antipyretics (fever-reducing agents) used to reduce fever and treat mild to moderate pain. Also, it is used to relieve headache, migraine, toothache, period pain, back pain, muscle pain and rheumatic pains. Pain and fever are caused by the activation of pain receptors due to the release of certain natural chemicals in the body like prostaglandin. <br></br>
PARACETAMOL works by inhibiting the production of certain chemical messengers in the brain known as prostaglandins. Thus, reduces pain. Also, PARACETAMOL affects an area of the brain that regulates body temperature known as the hypothalamic heat-regulating centre. Thereby, it reduces fever. <br></br>
Take PARACETAMOL as advised by your physician. Your doctor will recommend how often you need to take PARACETAMOL based on your medical condition. In some cases, PARACETAMOL may cause side effects such as nausea, stomach pain and dark coloured urine. Most of these side effects of PARACETAMOL do not require medical attention and gradually resolve over time. However, if the side effects persist or worsen, please consult your doctor.  <br></br>
Avoid taking PARACETAMOL if allergic to it. PARACETAMOL is not recommended for children below 6 years of age. If you are pregnant or breastfeeding, please consult a physician before using PARACETAMOL. Avoid alcohol consumption with PARACETAMOL as it may increase the risk of liver damage. If you have an impaired nutritional state caused by anorexia (eating disorder), malnutrition or alcohol abuse or if you are dehydrated, inform your doctor before taking PARACETAMOL. <br></br>
<br></br>
Uses of PARACETAMOL <br></br>
Fever, Pain relief <br></br> <br></br>

Medicinal Benefits <br></br>
PARACETAMOL contains Paracetamol, an analgesic (pain killer) and antipyretic (reduces fever). It inhibits the production of certain chemical messengers in the brain known as prostaglandins. Thus, reduces pain. Also, PARACETAMOL affects an area of the brain that regulates body temperature known as the hypothalamic heat-regulating centre. Thereby, it reduces fever. <br></br> <br></br>

Directions for Use <br></br>
Tablet/capsule: Swallow it as a whole with a glass of water. It can be taken with or without food anytime. Do not crush, break or chew it. Oral liquid: Shake the bottle well before use. Take the suggested dose by mouth using the measuring cup/dosing syringe/dropper provided by the pack.
<br></br> <br></br>Storage <br></br>
<br></br>Store in a cool and dry place away from sunlight
<br></br> <br></br>Side Effects of PARACETAMOL
Nausea <br></br>
Stomach pain <br></br>
Dark coloured urine</p> 
                </div> <form action method="post">
                    <Link to="/Listing" className="btn">back</Link>
                    </form>
            </section>

        </>
    )
}

export default View