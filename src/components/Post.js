import react from 'react';
const Post =()=>{
    return(
        <>
       

      <section className="filters" style={{paddingBottom: 0}}>
        <form action method="post">
          <div id="close-filter"><i className="fas fa-times" /></div>
          <h3>Post Your Medicine</h3>
          <div className="flex">
            <div className="box">
              <p>enter Medicine name</p>
              <input type="text" name="location" required maxLength={50} placeholder="enter medicine name" className="input" />
            </div>
            <div className="box">
              <p>Medicine type</p>
              <select name="offer" className="input" required>
                <option value="sale">tablet</option>
                <option value="rent">syrup</option>
              </select>
            </div>
           
            <div className="box">
              <p>enter quantity</p>
              <input type="number" name="location" required maxLength={50} placeholder="enter quantity " className="input" />
            </div>
           
            <div className="box">
              <p>enter your name</p>
              <input type="text" name="location" required maxLength={50} placeholder="enter your name" className="input" />
            </div>
            <div className="box">
              <p>pick up area</p>
              
              <input type="text" name="location" required maxLength={50000} placeholder="enter pickup area" className="input" /> 
            
            </div>
            <div className="box">
              <p>enter phone number</p>
              <input type="number" name="number" required maxLength={10} placeholder="enter phone number" className="input" />
            </div>
            <div style={{height: '8px'}} className="box">
              <p>Description</p>
              <input type="text" name="number" required maxLength={100000} placeholder="About your medicine" className="input" />
            </div>
          </div>
          <input style={{marginTop: '100px'}} type="submit" defaultValue="Post property" name="post" className="btn" />
        </form>
      </section>
   
        </>
    )
}

export default Post