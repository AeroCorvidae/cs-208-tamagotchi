"use strict";

class UIGoobertCard extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="info-card">
                <img id="card-frame-back" src="assets/ui-frame.png" />
                <div id="ui-goobert-container">

                </div>
                <div id="ui-statbar-container">

                </div>
                <img id="card-frame-front" src="assets/ui-frame.png" />

            </div>
        );
    }
}

class UIGoobertDisplay extends React.Component {
    constructor(props) {
        super(props);
    }
}

class UIStatBars extends React.Component {
    constructor(props) {
        super(props);
    }
}