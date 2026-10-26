"use strict";
import React from "react";
import GoobertElement from "../Goobert";
import type { Goobert } from "../App";

/* TODO: 
 - change the goobert to match the appearance of the clicked goobert
 - change the stats to match the stats of the clicked goobert
 - make the card be able to rotate and have the goobert, statbars, and icons line up correctly
 - render the card to the page via React 
 */

type UIProps = {
    goobert: Goobert
}
export default function UIGoobertCard(props: UIProps): React.JSX.Element {
    return (
        <div className="info-card">
            <img id="card-frame-back" src="images/goobert-parts/Transparent-BG.png" />
            <GoobertElement
                {...props.goobert}
                x={"0.6em"} 
                y={"0.6em"} 
                className="goobert-container icon"
            />
            <div className="ui-statbar-container">
                <img id="ui-statbar-fullness" src="images/goobert-parts/Transparent-BG.png"/>
                <img id="ui-statbar-awakeness" src="images/goobert-parts/Transparent-BG.png"/>
                <img id="ui-statbar-swagosity" src="images/goobert-parts/Transparent-BG.png"/>
                <img id="ui-statbar-cleanliness" src="images/goobert-parts/Transparent-BG.png"/>
            </div>
            <img id="card-frame-front" src="images/goobert-parts/Transparent-BG.png" />
            <div className="ui-icon-container">
                <img id="ui-icon-fullness" src="images/goobert-parts/Transparent-BG.png"/>
                <img id="ui-icon-awakeness" src="images/goobert-parts/Transparent-BG.png"/>
                <img id="ui-icon-swagosity" src="images/goobert-parts/Transparent-BG.png"/>
                <img id="ui-icon-cleanliness" src="images/goobert-parts/Transparent-BG.png"/>
            </div>
            <img id="ui-card-xbutton" src="images/goobert-parts/Transparent-BG.png" />

        </div>
    );
}