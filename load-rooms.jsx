"use strict";

let rooms = {
	hub: <Hub />,
	gameRoom: <GameRoom />,
	shop: <Shop />,
	bedroom: <Bedroom />,
	dungeon: <Dungeon />,

	snakeGame: <SnakeGame />,
	flappyGoobert: <FlappyGoobert />

}
class TopElement extends React.Component {
	constructor(props) {
		super(props);
		this.gooberts = [];
		gooberts = this.gooberts;
		this.room = rooms.hub;
	}
	render() {
		return(
			<>
				<SharedAudioManager />

				{this.room}

				{
					this.gooberts.filter((goobert, i) => {
						return goobert.location == this.room
					}).map((goobert, i) => (
						<Goobert key={goobert.id} {...goobert} />
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
		this.gooberts.push(
			{...goobert}
		);
		this.setState({});
	}

}
let topElement, gooberts;
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
function createGoobert(name, location = rooms.hub, x = Math.random() * (window.innerWidth - 64 /* goobert width */), y = (Math.random() * (window.innerHeight - 550 - 64 /* goobert height */)) + 550) {
	topElement.current.createGoobert(
		{
			name: name, 
			x:x, 
			y:y, 
			location:location, 
			id: name + topElement.current.gooberts.length,

			fullness: 0, // Eating, catch the food game
			swagosity: 50, // Boredom, Snake
			awakeness: 50, // Sleeping
			cleanliness: 50, // Bathing, Flappy Goobert
		
			bodyType: Math.floor(Math.random() * MAX_BODY_TYPES),
			bodyColor: Math.floor(Math.random() * MAX_COLORS),
			legType: Math.floor(Math.random() * MAX_LEG_TYPES),
			legColor: Math.floor(Math.random() * MAX_COLORS),
			eyeType: Math.floor(Math.random() * MAX_EYE_TYPES),
			mouthType: Math.floor(Math.random() * MAX_MOUTH_TYPES),
			eyeExpression: 0,
			mouthExpression: 0,

			eat: (amt = 10) => this.fullness += amt,
			sleep: () => this.awakeness = 100,
			entertain: (quality) => this.swagosity += quality,
			bathe: (amt) => this.cleanliness += amt
		}
	);
}