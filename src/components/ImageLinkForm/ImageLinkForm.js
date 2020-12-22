import React from 'react';
import {connect} from 'react-redux';
import {setImageLink, faceDetection} from '../../actions';
import classes from './ImageLinkForm.module.css';


const ImageLinkForm = ({onInputChange, onButtonSubmit, imgLink, loading}) => {
    
    const inputChangeHandler = e => {
        onInputChange(e.target.value);    
    }

    const buttonSubmitHandler = () => {
        onButtonSubmit(imgLink);
        document.querySelector('#image').scrollIntoView();
    }

    return (
        <div className="section">
            <div className="container">
               <p className="content has-text-white	is-size-4 has-text-centered	">
                This tool is used for face detection on images. Put a link of an image in the field below and hit the detect button to give it a try.
                </p>
               <div className={classes.form}>
                   <div className="field has-addons">
                        <div className="control" style={{width:"100%"}}>
                            <input className="input" type="text" placeholder="Enter an image link here..." onChange={inputChangeHandler} value={imgLink} disabled={loading}/>
                        </div>
                        <div className="control">
                            <button className="button is-info" onClick={buttonSubmitHandler}>
                            Detect
                            </button>
                        </div>
                    </div>
               </div> 
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        imgLink : state.imgLink,
        loading: state.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onInputChange : imgLink => dispatch(setImageLink(imgLink)),
        onButtonSubmit : imgLink => dispatch(faceDetection(imgLink))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ImageLinkForm);
