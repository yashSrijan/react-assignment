import React from 'react'
import {selectOptions} from './../_helpers/constantData';

export const Carousal = ({slideCount}) => {

    const renderSlides = () =>{
        let rand = Math.random(), slides = []
        if(slideCount) {
            for(let i = 0; i < slideCount; i++) {
                slides.push(
                    <div id = {rand+i} key = {rand+i} className={ `carousel-item ${i===0 ? 'active' : ''}` }>
                        <div className = "content">
                            <h3>Slide {selectOptions[i+1]}</h3>
                        </div>
                    </div>
                )
            }
        }
        return slides;
    }
    
    let slides = renderSlides()
    return (
        <div className = "carousal-wrapper">
            <div id="carouselExampleControls" className="carousel slide" data-interval="false">
                <div className="carousel-inner">
                    {slides}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div> 
        </div>
    )
    
}