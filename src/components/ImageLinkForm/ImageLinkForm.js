import React, {useRef, useEffect} from 'react';
import {connect} from 'react-redux';
import {setImageLink, faceDetection} from '../../actions';
import classes from './ImageLinkForm.module.css';


const ImageLinkForm = ({updateImageLink, detectFaces, imgLink, loading}) => {

    const imgLinkInput = useRef(null);

    useEffect(() => {
      imgLinkInput.current.value = imgLink;
    });

    const inputChangeHandler = e => {
        updateImageLink(imgLinkInput.current.value);    
    }
    
    //Made async just to avoid the API request might pick the state before it got updated
    const buttonSubmitHandler = async () => {
        await updateImageLink(imgLinkInput.current.value); // update the image link state, then...
        detectFaces(imgLink); // detect faces
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
                            <input ref={imgLinkInput} className="input" type="text" placeholder="Enter an image link here..." onChange={inputChangeHandler} value={imgLink} disabled={loading}/>
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
        updateImageLink : imgLink => dispatch(setImageLink(imgLink)),
        detectFaces : imgLink => dispatch(faceDetection(imgLink))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ImageLinkForm);
