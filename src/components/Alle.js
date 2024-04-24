import React from "react";
import {BrowserRouter as Router, Switch, Route, Link}from "react-router-dom"
const View = () => {
    return (
        <>


            <section className="view-property">
                <div className="details">
                    <div className="thumb">
                        <div className="big-image">
                            <img src="images/allegra.webp" alt="" />
                        </div>
                       
                    </div>
                    <h3 className="name">Allegra</h3><br></br>
                    <p className="location"><i class="fa-solid fa-tablets"></i><span>Tablet</span></p><br></br>
                 
                    <h3 className="title">details</h3>
                    <div className="flex">
                        <div className="box">
                            <p><i>Type </i><span>Tablet</span></p>
                           
                        </div>
                      
                    </div>
                    <h3 className="title">can be used</h3>
                    <div className="flex">
                        <div className="box">
                            <p><i className="fas fa-check" /><span>treat the symptoms of seasonal allergies (hay fever) in adults and children</span></p>
                           </div>
                    </div>
                    <h3 className="title">description</h3>
                    <p className="description">About Allegra 120 mg Tablet 10's
Allegra 120 mg Tablet 10's belongs to a class of drugs called antihistamine or anti-allergic. It is primarily used to treat various kinds of allergies. An allergy is an immune system response to foreign elements typically not harmful to your body. These foreign elements are known as ‘allergens.’ Allergic condition varies from person to person. Some might be allergic to certain foods and seasonal allergies like hay fever. At the same time, others might be allergic to pollen or pet dander.<br></br>
Allegra 120 mg Tablet 10's contains fexofenadine, a non-drowsy antihistamine. It is less likely to make you feel sleepy than some other antihistamines. However, some people still find it makes them feel quite sleepy, which is used to treat allergies as it blocks the effects of a chemical messenger known as histamine, which is naturally involved in allergic reactions. Allegra 120 mg Tablet 10's is widely used to treat hay fever (an allergy caused by pollen or dust), conjunctivitis (red, itchy eye), eczema (dermatitis), hives (red, raised patches or dots), reactions to insect bites and stings and some food allergies.<br></br>
You can take Allegra 120 mg Tablet 10's with food or without food. It should be swallowed whole with a glass of water. Do not chew, bite, or break it. Your doctor will advise you on how often you take your tablets based on your medical condition. In some cases, you may experience headaches, nausea, or dizziness. Most of these side effects of Allegra 120 mg Tablet 10's do not require medical attention and gradually resolve over time. However, if the side effects are persistent, reach out to your doctor.<br></br>
You should not take the Allegra 120 mg Tablet 10's if you are allergic to fexofenadine, are currently breastfeeding, or have severe kidney failure (creatinine clearance less than 10 ml/min), urinary retention problem, and fructose intolerance. Do not give this medicine to children who are less than two years of age groups. Check with your doctor if you are taking midodrine to treat low blood pressure and ritonavir or lopinavir for HIV infection. Leave about 2 hours between the times you take Allegra 120 mg Tablet 10's and your indigestion remedies containing aluminium or magnesium.<br></br><br></br>
Uses of Allegra 120 mg Tablet 10's<br></br>
Allergic conditions such as hay fever (an allergy caused by pollen or dust), conjunctivitis (red, itchy eye), eczema (dermatitis), hives (red, raised patches or dots), reactions to insect bites and stings and some food allergies.<br></br>
<br></br>
Medicinal Benefits<br></br>
Allegra 120 mg Tablet 10's is known as a non-drowsy antihistamine. It's less likely to make you feel sleepy than some other antihistamines. Allegra 120 mg Tablet 10's provides instant relief from allergic reactions and symptoms by blocking histamine action, a substance which causes immune responses & inflammations in the body. Allegra 120 mg Tablet 10's is widely used to treat hay fever (an allergy caused by pollen or dust), conjunctivitis (red, itchy eye), eczema (dermatitis), hives (red, raised patches or dots), reactions to insect bites and stings and some food allergies.
<br></br><br></br>
Directions for Use<br></br>
Tablet: Swallow it as a whole with water; do not crush, break or chew it.Oral Suspension/Syrup/Oral drops: Shake the bottle well before use. Check the label for directions and take Allegra 120 mg Tablet 10's in doses as prescribed by your doctor with the help of a measuring cup/dropper provided by the pack.
Storage<br></br>
Store in a cool and dry place away from sunlight<br></br><br></br><br></br>
Side Effects of Allegra 120 mg Tablet 10's<br></br>
Feeling sick (nausea)<br></br>
Feeling sleepy<br></br>
Headaches<br></br>
Dry mouth<br></br>
Feeling dizzy.</p>
                    
                   
                </div>
                <form action method="post">
                    <Link to="/Listing" className="btn">back</Link>
                    </form>
            </section>

        </>
    )
}

export default View