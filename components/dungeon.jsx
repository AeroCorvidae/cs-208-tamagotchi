class Dungeon extends React.Component {
    render(){
        return(
            <main className="dungeon">
                <div className="dungeonWrapper d-flex flex-column justify-content-between vh-100">
                    <div className="dungeonWall">
                        <div className="col-12 text-center">
                            <img id="escape" className="img-fluid" src="assets/doors/Ladder.webp" alt="" onClick={() => load("hub")}/>
                        </div>
                    </div>
                    <div className="dungeonFloor">
                        <div className="col-12">
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}