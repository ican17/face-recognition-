import React from 'react';
import {connect} from 'react-redux';
import classes from "./FaceRecog.module.css";
import styled from 'styled-components';

const Box = styled.div`
    position: absolute;
    box-shadow: 0 0 0 3px #6686ca inset;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    cursor: pointer;
    top:${props => props.coord.top};
    left:${props => props.coord.left};
    width:${props => props.coord.width};
    height:${props => props.coord.height};
    &:after{
        content:"${props => props.prob}%";
        color:white;
        top:-1.2vw;
        position: relative;
        font-size: 0.8vw;
        background-color:#6686ca;
        height:1.2vw;
    }
`;

const createBox = (coord) => {

    const top = coord.top_row * Number(document.querySelector('#image').clientHeight);
    const left = coord.left_col * Number(document.querySelector('#image').clientWidth);
    const width = (coord.right_col - coord.left_col) * Number(document.querySelector('#image').clientWidth);
    const height = (coord.bottom_row - coord.top_row) * Number(document.querySelector('#image').clientHeight);

    return {
        top: `${top}px`,
        left: `${left}px`,
        height: `${height}px`,
        width: `${width}px`
    }
}
const FaceRecog = ({ imgLink, boxes, loading }) => {

    let content = [];
    

        if (imgLink) {
            content.push(<img key="img" src={imgLink} alt="" className={classes.img} id="image" />);
        }
    
        if (boxes.length > 0) {
            
            const boxesOnDOM = boxes.map((box, i) => {
                return <Box key={i} coord={createBox(box.coord)} prob={box.prob.toFixed(2)*100} />;
            });
            content.push(boxesOnDOM);
        }
        if(loading){
            content.push(<div key="loading" className={classes.loader}>Loading...</div>);
        }

    return (
        <div className="section pt-0">
            <div className="container">
                <div className={`${classes.imgContainer} has-text-centered`}>
                    {content}

                </div>
            </div>
        </div>
    );
}
const mapStateToProps = state => {
    return {
        imgLink : state.imgLink,
        boxes : state.boxes,
        loading: state.loading
    }
}
export default connect(mapStateToProps, null)(FaceRecog);
