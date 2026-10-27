"use strict";
import React, { useState, type MouseEventHandler } from "react";
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
    onUiClose: MouseEventHandler<HTMLImageElement>
}
export default function UIGoobertCard(props: UIProps): React.JSX.Element {
    let [x, setX] = useState(props.goobert.x);
    let [y, setY] = useState(props.goobert.y);

    return (
        <div className="info-card" style={{left: x, top: y}}>
            <img id="card-frame-back" src="images/goobert-parts/Transparent-BG.png" />
            <GoobertElement
                {...props.goobert}
                x={"0.6em"} 
                y={"0.6em"} 
                className="goobert-container icon"
            />
            <div className="ui-statbar-container">
                <img id="ui-statbar-fullness" width={props.goobert.fullness} src="images/goobert-parts/Transparent-BG.png"/>
                <img id="ui-statbar-awakeness" width={props.goobert.awakeness} src="images/goobert-parts/Transparent-BG.png"/>
                <img id="ui-statbar-swagosity" width={props.goobert.swagosity} src="images/goobert-parts/Transparent-BG.png"/>
                <img id="ui-statbar-cleanliness" width={props.goobert.cleanliness} src="images/goobert-parts/Transparent-BG.png"/>
            </div>
            <img id="card-frame-front" src="images/goobert-parts/Transparent-BG.png" />
            <div className="ui-icon-container">
                <img id="ui-icon-fullness" src="images/goobert-parts/Transparent-BG.png"/>
                <img id="ui-icon-awakeness" src="images/goobert-parts/Transparent-BG.png"/>
                <img id="ui-icon-swagosity" src="images/goobert-parts/Transparent-BG.png"/>
                <img id="ui-icon-cleanliness" src="images/goobert-parts/Transparent-BG.png"/>
            </div>
            <img id="ui-card-xbutton" src="images/goobert-parts/Transparent-BG.png" onClick={props.onUiClose} />

        </div>
    );
}