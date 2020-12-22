import * as actions from './actionNames';

const initialState = {
    imgLink : 'https://i.pinimg.com/originals/b0/86/f8/b086f888e75386a08fb8da04ab97acd3.jpg',
    boxes : [],
    loading: false,
}

export const faceDetection = (state = initialState, action={}) => {
    switch (action.type) {
        case actions.SET_IMAGE_LINK:
            return {...state, imgLink: action.payload.imgLink, boxes:[]} ; 
        case actions.FACE_DETECTION_PENDING:
            return {...state, loading: true} ; 
        case actions.FACE_DETECTION_SUCCESS:
            //changes
            return {...state, boxes : action.payload.boxes, loading:false} ; 
        case actions.FACE_DETECT_FAILED:
            return {...state, loading: false} ; 
        default:
            return state;
    }
}