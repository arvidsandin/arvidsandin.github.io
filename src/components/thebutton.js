import * as React from 'react'
import { theButton, buttonContainer } from './thebutton.module.css'



const TheButton = () => {
    var isPink = false;
    function doStuff() {
        var myButton = document.getElementById(theButton);
        var lightPink = '#fadadd';
        var veryLightGrey = '#f2f2f2';
        if (isPink) {
            document.body.style.background = veryLightGrey;
            myButton.style.background = lightPink;
            isPink = false;
        }
        else {
            document.body.style.background = lightPink;
            myButton.style.background = veryLightGrey;
            isPink = true;
        }
    }
    return (
        <div id={buttonContainer}>
            <button type="button" name="button" class="unselectable" id={theButton} onClick={doStuff}>Button</button>
        </div>
    );
};
export default TheButton