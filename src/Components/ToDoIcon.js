import React from "react";
import { ReactComponent as OkSvg } from '../images/icons/ok.svg';
import { ReactComponent as CancelSvg } from '../images/icons/cancel.svg';
import '../Styles/ToDoIcon.css'


const ToDoIcon = ({type, color, onClick})=> {

    const iconsType = {
        "mark": (color)=> (<OkSvg className="IconSvg iconSvgCheck" fill={color}></OkSvg>),
        "cancel": (color) => (<CancelSvg className="IconSvg iconSvgCheck" fill={color}></CancelSvg>)
    }

return (<span className={`IconContainer IconContainer--${type}`} onClick={onClick}>
    
    {iconsType[type](color)}

</span>);

}

export {ToDoIcon}

