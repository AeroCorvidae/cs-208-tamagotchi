"use strict";

let rooms = {
	hub: <Hub />,
	gameRoom: <GameRoom />,
	shop: <Shop />,
	bedroom: <Bedroom />,

	snakeGame: <SnakeGame />,
	flappyGoobert: <FlappyGoobert />

}
class TopElement extends React.Component {
	constructor(props) {
		super(props);
		this.gooberts = [];
		this.room = rooms.hub;
	}
	render() {
		return(
			<>
				<SharedAudioManager />

				{this.room}

				{
					this.gooberts.filter((goobert, i) => {
						return goobert.props.location == this.room
					}).map((goobert, i) => (
						<div key={`Goobert${i}`} style={{position:"absolute", top: "0px"}}>
							{goobert}
						</div>
					))
				}
			</>
		);
	}
	load(component) {
		this.room = rooms[component];
		this.setState({room: rooms[component]});
	}
	createGoobert(goobert) {
		this.gooberts.push(goobert);
		this.setState({});
	}

}
let topElement;
const root = ReactDOM.createRoot(
    document.getElementById("content")
);
function init() {
    topElement = React.createRef();
    root.render(<TopElement ref={topElement} />);
}

init();

function load(component) {
    topElement.current.load(component);
}
function createGoobert(name, x, y, location = rooms.hub) {
	topElement.current.createGoobert(<Goobert name={name} x={x} y={y} location={location} />);
}