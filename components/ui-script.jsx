"use strict";

/* TODO: 
 - change the goobert to match the appearance of the clicked goobert
 - change the stats to match the stats of the clicked goobert
 - make the card be able to rotate and have the goobert, statbars, and icons line up correctly
 - render the card to the page via React 
 */

class UIGoobertCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="info-card">
                <img id="card-frame-back" src="assets/goobert-parts/Transparent-BG.png" />
                <div className="ui-goobert-container">
                    <img id="ui-goobert-legs" src="assets/goobert-parts/Transparent-BG.png"/>
                    <img id="ui-goobert-body" src="assets/goobert-parts/Transparent-BG.png"/>
                    <img id="ui-goobert-mouth" src="assets/goobert-parts/Transparent-BG.png"/>
                    <img id="ui-goobert-eyes" src="assets/goobert-parts/Transparent-BG.png"/>
                </div>
                <div className="ui-statbar-container">
                    <img id="ui-statbar-fullness" src="assets/goobert-parts/Transparent-BG.png"/>
                    <img id="ui-statbar-awakeness" src="assets/goobert-parts/Transparent-BG.png"/>
                    <img id="ui-statbar-swagosity" src="assets/goobert-parts/Transparent-BG.png"/>
                    <img id="ui-statbar-cleanliness" src="assets/goobert-parts/Transparent-BG.png"/>
                </div>
                <img id="card-frame-front" src="assets/goobert-parts/Transparent-BG.png" />
                <div className="ui-icon-container">
                    <img id="ui-icon-fullness" src="assets/goobert-parts/Transparent-BG.png"/>
                    <img id="ui-icon-awakeness" src="assets/goobert-parts/Transparent-BG.png"/>
                    <img id="ui-icon-swagosity" src="assets/goobert-parts/Transparent-BG.png"/>
                    <img id="ui-icon-cleanliness" src="assets/goobert-parts/Transparent-BG.png"/>
                </div>
                <img id="ui-card-xbutton" src="assets/goobert-parts/Transparent-BG.png" />

            </div>
        );

        
    }


}

const uiRoot = ReactDOM.createRoot(document.getElementById("ui"));
const root = ReactDOM.createRoot(document.getElementById("tester-goobert"))


function start() {
    uiRoot.render(<UIGoobertCard/>);
}
