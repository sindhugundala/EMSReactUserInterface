import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import '../NavMenu.css'
import { useHistory } from "react-router-dom";
import HomeTwoToneIcon from '@material-ui/icons/HomeTwoTone';


function NavigationInMenu() {
  
    let history = useHistory();
    const handleClick = (event) => {
        history.push('/home')
    };

   
    return (
        <div>
            <IconButton edge="start" onClick={handleClick}>
                <HomeTwoToneIcon style={{ color: 'white' }} onClick={handleClick} />
            </IconButton>

        </div>
    );
}

export default NavigationInMenu;