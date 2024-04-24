import React from "react";
import {BrowserRouter as Router, Switch, Route, Link}from "react-router-dom"
const View = () => {
    return (
        <>


            <section className="view-property">
                <div className="details">
                    <div className="thumb">
                        <div className="big-image">
                            <img src="images/newpenta.webp" alt="" />
                        </div>
                       
                    </div>
                    <h3 className="name">Newpenta</h3><br></br>
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
                            <p><i className="fas fa-check" /><span>dry cough</span></p>
                           </div>
                    </div>
                    <h3 className="title">description</h3>
                    <p className="description">Nupenta Tablet 10's belongs to the class of drugs known as Proton pump inhibitor, which reduces the amount of acid your stomach makes. It treats gastroesophageal reflux disease (GERD), stomach ulcer, Zollinger Ellison syndrome (overproduction of acid due to pancreatic tumour), duodenal ulcer, gastric ulcer and Crohn’s Disease-associated Ulcers.
                    <br></br>
Nupenta Tablet 10's helps in reducing stomach acid by blocking the actions of an enzyme (H+/K+ ATPase or gastric proton pump). This proton pump lies in the cells of the stomach wall and is responsible for the release of gastric acid secretion, damaging tissues in the food pipe, stomach and duodenum. Nupenta Tablet 10's prevents the release of stomach acid and relieves symptoms of food pipe lining inflammation (esophagitis), gastroesophageal reflux disease (GERD), or heartburn.
<br></br>
Nupenta Tablet 10's may have common side effects like headache, diarrhoea, nausea, abdominal pain, vomiting, flatulence, dizziness, and arthralgia (joint pain).  These side effects are temporary and may be resolved after some time. However, if these side effects persist, please contact the doctor.
<br></br>
Nupenta Tablet 10's is safe for pregnant and breastfeeding mothers but should be taken only after consulting a doctor. Tell your doctor if you have stomach or intestinal cancer, liver problems, are allergic to Nupenta Tablet 10's or will have an endoscopy in the future. Prolonged intake of Nupenta Tablet 10's may cause a deficiency of Vitamin B12 and low levels of calcium, magnesium and Vitamin D, leading to osteoporosis.
<br></br>
Uses of Nupenta Tablet 10's<br></br>
Hyperacidity, Heartburn, Peptic ulcer.
<br></br><br></br>
Medicinal Benefits<br></br>
Nupenta Tablet 10's is effective at healing erosive esophagitis (inflammation of food pipe), relieving symptoms of gastroesophageal reflux disease (heartburn), Zollinger-Ellison syndrome, duodenal ulcer, gastric ulcer and Crohn’s Disease-associated Ulcers. Nupenta Tablet 10's works by irreversibly blocking the proton pump gate (which secretes stomach acid). It can be prescribed to all age groups, including special populations like the elderly, pregnant, lactating mothers, and kidney and liver disease patients. 
<br></br><br></br>
Directions for Use<br></br>
Tablet/capsule: Swallow it as a whole with water; do not crush, break or chew it.Granules for Suspension: Firstly, shake the container and open the cap. Add the granules of the packet to a cup containing one teaspoonful of applesauce or apple juice. Mix well for 5 seconds and make your child drink immediately. Nupenta Tablet 10's should be given 30 min before meals.
Storage<br></br>
Store in a cool and dry place away from sunlight<br></br><br></br>
Side Effects of Nupenta Tablet 10's<br></br>
Headache<br></br>
Diarrhoea<br></br>
Nausea<br></br>
Abdominal pain<br></br>
Vomiting<br></br>
Flatulence<br></br>
Dizziness<br></br>
Arthralgia (joint pain)</p>
                    <form action method="post">
                        <input type="submit" defaultValue="save property" name="save" className="inline-btn" />
                    </form>
                    <form action method="post">
                    <Link to="/Listing" className="btn">back</Link>
                    </form>
                </div>
                <form action method="post">
                    <Link to="/Listing" className="btn">back</Link>
                    </form>
            </section>

        </>
    )
}

export default View