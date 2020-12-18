import Clarifai from 'clarifai';
import * as actions from './actionNames';
import {API_KEY} from './apiKey';

const app = new Clarifai.App({
  apiKey: API_KEY // Use your own api key instead that you can find on your Clarifia account.
});

export const loadImage = imgLink => ({
  type: actions.LOAD_IMAGE,
  payload: {
    imgLink: imgLink
  }
});

export const faceDetectionSuccess = boxes => ({
  type: actions.FACE_DETECTION_SUCCESS,
  payload: {
    boxes: boxes
  }
});


export const faceDetection = imgLink => {
  return dispatch => {
    dispatch({ type: actions.FACE_DETECTION_PENDING });

    app.models.initModel({ id: Clarifai.FACE_DETECT_MODEL })
      .then(faceModel => {
        return faceModel.predict(imgLink);
      })
      .then(response => {
        // get the neccessary data
        const regions = response['outputs'][0].data.regions;

        //Format the data
        const boxes = regions.map(reg => { return { coord: reg.region_info.bounding_box, prob: reg.value } });

        // Draw the boxes on the image
        dispatch(faceDetectionSuccess(boxes));

      }).catch(err => {
        dispatch({ type: actions.FACE_DETECT_FAILED });
      });

  }
} 