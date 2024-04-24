import react from 'react';
import { ReactDOM } from 'react-dom/client';
import { Link } from 'react-router-dom';
const View = () => {
    return (
        <>


            <section className="view-property">
                <div className="details">
                    <div className="thumb">
                        <div className="big-image">
                            <img src="images/asthakind.jpg" alt="" />
                        </div>
                       
                    </div>
                    <h3 className="name">Asthakind</h3><br></br>
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
                    <p className="description">sthakind DX Syrup 60 ml belongs to a class of medication called 'cough and cold preparations' primarily used to treat dry cough. Coughing (dry or productive) is the body's way of clearing irritants (like allergens, mucus, or smoke) from airways and preventing infection. There are two types of coughs, namely: dry cough and chesty cough. A dry cough is tickly and doesn't produce any vicious or thick mucus, while a chesty cough (wet cough) means mucous or sputum is produced to help clear the airways. 
Asthakind DX Syrup 60 ml is a combination of three drugs, namely: Chlorpheniramine maleate (antihistamine), Phenylephrine hydrochloride (decongestant), and Dextromethorphan hydrobromide (cough suppressant). Chlorpheniramine maleate works by blocking the action of histamine, a substance responsible for causing allergic reactions. Phenylephrine hydrochloride helps in shrinking the blood vessels located in the nasal passage, thereby reducing the stuffy nose. Dextromethorphan hydrobromide works by blocking the transmission of nerve signals from the cough center in the brain to the muscles that produce cough. Together, it helps to provide relief from dry cough.
Take Asthakind DX Syrup 60 ml as prescribed. Your doctor will recommend how often you need to take Asthakind DX Syrup 60 ml based on your medical condition. Some people may experience dry mouth, throat, or nose, drowsiness, blurred vision, constipation, dizziness, restlessness, or excitation. Most of these side effects of Asthakind DX Syrup 60 ml do not require medical attention and gradually resolve over time. However, if the side effects persist or worsen, please consult your doctor.
If you are pregnant or breastfeeding, it is advised to inform your doctor before using Asthakind DX Syrup 60 ml. If you are about to undergo any medical tests or surgery, please inform your doctor that you are taking Asthakind DX Syrup 60 ml. Avoid using Asthakind DX Syrup 60 ml if you have taken monoamine oxidase inhibitors in the past 14 days. If you have glaucoma, urinary problems, enlarged prostate, phenylketonuria (a congenital disability that causes accumulation of amino acid, phenylalanine in the body), cough with mucus or cough caused by asthma, smoking, chronic bronchitis or emphysema (a lung condition causing shortness of breath), inform your doctor before taking Asthakind DX Syrup 60 ml. 
<br></br><br></br><br></br>

<b>Uses of Asthakind DX Syrup 60 ml</b><br></br>
Dry cough
<br></br><br></br><br></br>
<b>Medicinal Benefits</b><br></br>
Asthakind DX Syrup 60 ml is a combination of three drugs, namely: Chlorpheniramine maleate, Phenylephrine hydrochloride, and Dextromethorphan hydrobromide. Asthakind DX Syrup 60 ml is a combination medicine belonging to a class of drugs called 'cough and cold preparations' primarily used to treat dry cough. Chlorpheniramine maleate works by blocking the action of histamine, a substance responsible for causing allergic reactions. It helps provide relief from allergy symptoms such as sneezing, running nose, watery eyes, itching, swelling, congestion or stiffness. Phenylephrine hydrochloride is a decongestant that helps in shrinking the blood vessels located in the nasal passage, thereby reducing the stuffy nose. Dextromethorphan hydrobromide works by blocking the transmission of nerve signals from the cough centre in the brain to the muscles that produce cough. Thus, Asthakind DX Syrup 60 ml helps to relieve cough, cold and allergic symptoms.
<br></br>
Directions for Use<br></br><br></br><br></br>
Syrup: Check the label for directions before using it. Shake the bottle well before use. Take Asthakind DX Syrup 60 ml as prescribed by your doctor with the help of a measuring cup provided with the pack.Capsule/Tablet: Swallow it with a glass of water. Do not break, crush or chew it.
Storage<br></br><br></br><br></br>
Store in a cool and dry place away from sunlight<br></br>
<b>Side Effects of Asthakind DX Syrup 60 ml</b><br></br><br></br><br></br>
Dry mouth, throat or nose<br></br>
Drowsiness<br></br>
Dizziness<br></br>
Blurred vision<br></br>
Headache<br></br>
Constipation<br></br>
Restlessness or excitation<br></br>
Loss of appetite.</p>
                    <form action method="post">
                        <input type="submit" defaultValue="save property" name="save" className="inline-btn" />
                    </form>
                    <form action method="post">
                    <Link to="/Listing" className="btn">back</Link>
                    </form>
                </div>
            </section>

        </>
    )
}

export default View