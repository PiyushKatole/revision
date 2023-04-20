import React from "react";
import ReactDOM from "react-dom";

 import Card from "./Card";
import Button from './Button';
import classes from './ErrorModal.module.css'

const Backdrop = props=> {
    return <div className= {classes.backdrop} onClick = {props.onConfirm} />
};

const ModalOverlay = (props ) => {
return <Card className = {classes.modal}>
<header className={classes.header}>
    <h2>{props.title}</h2>
</header>
<div className={classes.content}>
    <p>
    {props.message}
    </p>
</div>
<foooter className= {classes.actions}>
<Button onClick= {props.onConfirm}>Okay </Button>
</foooter>
</Card>
};

const ErrorModal =props =>{
    return(
        <React.Fragment>
            {ReactDOM.createPortal(<Backdrop onClick ={props.onConfirm} />)}
       
        </React.Fragment>
    );
};

export default ErrorModal;