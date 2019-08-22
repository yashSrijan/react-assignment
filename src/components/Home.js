import React from 'react';
import {Link} from 'react-router-dom';
import {Carousal} from './Carousal';
import {selectOptions} from './../_helpers/constantData';

//destructuring only those props which are required
export const Home = ({setSelections, selections}) => {

    //using Hooks coz the state is minimal
    const [slideCount, setSlideCount] = React.useState(0)

    const handleSelectChange = (e) => {
        let newSlideCount = e.target.value
        if(newSlideCount>0) {
            //call the dispatcher from parent container component
            setSelections(newSlideCount)
        }
        setSlideCount(newSlideCount)
    }

    return(
        <div id = "home">

            {/* The user gets logged out by clicking on this button */}
            <div className = "log-out">
                <Link className="btn btn-warning" to ="/login" role="button">Log Out</Link>
            </div>

            {/* This lets user to choose the slideCount, defaults to zero */}
            <div className = "select-wrapper">
                <div className = "form-group">
                    <label htmlFor="numSelect">Select Number of Slides</label>
                    <select className="form-control" defaultValue={ selectOptions[0] } id="numSelect" onChange = {handleSelectChange}>
                        {
                            selectOptions.map((numText, index) => 
                                index === 0 ? <option key = {index} value={index}>{numText}</option> : 
                                <option key = {index} value={index}>{index}</option>
                            )
                        }
                    </select>
                </div>
            </div>

            {/* If the count that user has chosen is greater than zero, then only display the Carousal component */}
            {
                slideCount > 0 && 
                <Carousal slideCount = {slideCount}/>
            }

            {/* This button fires the selectionsModal */}
            <button className = "btn btn-primary" data-toggle="modal" data-target="#selectionsModal">Finish</button>
            
            <div className="modal fade" id="selectionsModal" tabIndex="-1" role="dialog" aria-labelledby="selectionsModalTitle" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="selectionsModalLongTitle">Selections made</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {
                                //if there are values in selections array then render the list
                                selections.length ?
                                    selections.map( (selection, index) => 
                                        <span key = {index}>
                                            {selection}
                                            {index === selections.length-1 ? '' : ','}&nbsp;
                                        </span>                                     
                                    )
                                //else display this string
                                : 'No selections made'
                            }
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
    
}