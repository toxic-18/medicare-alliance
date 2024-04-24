import react from 'react';
const Rent = () => {
    return (
        <>

            <section className="listings">
                <h1 className="heading">all listings</h1>
                <div className="box-container">
                    <div className="box">
                        <div className="admin">
                            <h3>S</h3>
                            <div>
                                <p>saksham gupta</p>
                                <span>10-11-2022</span>
                            </div>
                        </div>
                        <div className="thumb">
                            <p className="total-images"><i className="far fa-image" /><span>4</span></p>
                            <p className="type"><span>house</span><span>rent</span></p>
                            <form action method="post" className="save">
                                <button type="submit" name="save" className="far fa-heart" />
                            </form>
                            <img src="images/house-img-1.webp" alt="" />
                        </div>
                        <h3 className="name">21st cen house</h3>
                        <p className="location"><i className="fas fa-map-marker-alt" /><span>andheri, mumbai, india </span></p>
                        <div className="flex">
                            <p><i className="fas fa-bed" /><span>3</span></p>
                            <p><i className="fas fa-bath" /><span>2</span></p>
                            <p><i className="fas fa-maximize" /><span>750sqft</span></p>
                        </div>
                        <a href="view_property.html" className="btn">view property</a>
                    </div>
                    <div className="box">
                        <div className="admin">
                            <h3>A</h3>
                            <div>
                                <p>saksham gupta</p>
                                <span>21-08-2022</span>
                            </div>
                        </div>
                        <div className="thumb">
                            <p className="total-images"><i className="far fa-image" /><span>4</span></p>
                            <p className="type"><span>flat</span><span>rent</span></p>
                            <form action method="post" className="save">
                                <button type="submit" name="save" className="far fa-heart" />
                            </form>
                            <img src="images/house-img-3.jpg" alt="" />
                        </div>
                        <h3 className="name">modern flats and appartments</h3>
                        <p className="location"><i className="fas fa-map-marker-alt" /><span>andheri, mumbai, india - 401303</span></p>
                        <div className="flex">
                            <p><i className="fas fa-bed" /><span>3</span></p>
                            <p><i className="fas fa-bath" /><span>2</span></p>
                            <p><i className="fas fa-maximize" /><span>750sqft</span></p>
                        </div>
                        <a href="view_property.html" className="btn">view property</a>
                    </div>
                    <div className="box">
                        <div className="admin">
                            <h3>B</h3>
                            <div>
                                <p>saksham gupta </p>
                                <span>17-03-2022</span>
                            </div>
                        </div>
                        <div className="thumb">
                            <p className="total-images"><i className="far fa-image" /><span>4</span></p>
                            <p className="type"><span>flat</span><span>rent</span></p>
                            <form action method="post" className="save">
                                <button type="submit" name="save" className="far fa-heart" />
                            </form>
                            <img src="images/house-img-5.webp" alt="" />
                        </div>
                        <h3 className="name">modern flats and appartments</h3>
                        <p className="location"><i className="fas fa-map-marker-alt" /><span>andheri, mumbai, india - 401303</span></p>
                        <div className="flex">
                            <p><i className="fas fa-bed" /><span>3</span></p>
                            <p><i className="fas fa-bath" /><span>2</span></p>
                            <p><i className="fas fa-maximize" /><span>750sqft</span></p>
                        </div>
                        <a href="view_property.html" className="btn">view property</a>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Rent