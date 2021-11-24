import React from 'react'



function Banner(){

    return(
        <div>
            <div id="BannerUser1" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                
                <div className="carousel-item">
                <img src="../Banner/Banner_4.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item active">
                <img src="../Banner/Banner_1.png" className="d-block w-100" alt="..."/>
                </div>
                <div className="carousel-item">
                <img src="../Banner/Banner_2.png" className="d-block w-100" alt="..."/>
                </div>
                
                
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#BannerUser1" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#BannerUser1" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>

    );


}

export default Banner;
