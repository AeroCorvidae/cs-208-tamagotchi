class Dungeon extends React.Component {
    render(){
        return(
            <main className="dungeon">
                <div className="dungeonWrapper d-flex flex-column justify-content-between vh-100">
                    <div className="dungeonWall">
                        <div className="col-12 text-danger">
                            DUNGEON WALL
                        </div>
                    </div>
                    <div className="dungeonFloor">
                        <div className="col-12 text-warning">
                            DUNGEON FLOOR
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}