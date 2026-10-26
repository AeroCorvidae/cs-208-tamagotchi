
"use strict";
import React from "react";
import { arcadeClickSound, arcadeHoverSound, doorOpenSound } from "./audio";
import { gooberts, load, rooms, type Goobert } from "../App";

/*
 * Game Room
 * Displays five arcade machines.
 *
 * Snake and Flappy Goobert are playable.
 * The other three machines only play sound effects.
 */

// The first Goobie receives rewards from arcade games.
export let gameGoobert: Goobert | null = null;

export default class GameRoom extends React.Component {

    render() {

        return (
            <main id="main" className="game-room">

                {/* Return to the Hub */}
                <div className="game-room-controls">
                    <button
                        type="button"
                        className="btn game-room-exit"
                        onClick={() => {
                            doorOpenSound.play();
                            load(rooms.hub);
                        }}
                    >
                        <img
                            className="game-room-exit-icon"
                            src="assets/pixelarticons/arrow-left.svg"
                            alt=""
                            aria-hidden="true"
                        />
                        <span>Back to hub</span>
                    </button>
                </div>

                {/* Game Room Logo */}
                <div className="game-room-logo-wrap">
                    <img
                        src="game-room-images/game-room-logo.png"
                        alt="Game Room"
                        className="game-room-logo"
                    />
                </div>

                {/* Arcade Machines */}
                <div className="game-room-machines">

                    {/* Snake */}
                    <button
                        type="button"
                        className="machine-button"
                        onMouseEnter={() => arcadeHoverSound.play()}
                        onClick={() => {
                            arcadeClickSound.play();

                            // Select the first Goobie for rewards.
                            gameGoobert = gooberts[0] || null;

                            // Open Snake.
                            load(rooms.snakeGame);
                        }}
                    >
                        <img
                            src="game-room-images/snake-machine.png"
                            alt="Play Snake"
                        />
                    </button>

                    {/* Flappy Goobert */}
                    <button
                        type="button"
                        className="machine-button"
                        onMouseEnter={() => arcadeHoverSound.play()}
                        onClick={() => {
                            arcadeClickSound.play();

                            // Select the first Goobie for rewards.
                            gameGoobert = gooberts[0] || null;

                            // Open Flappy Goobert.
                            load(rooms.flappyGoobert);
                        }}
                    >
                        <img
                            src="game-room-images/flappy-goobert-machine.png"
                            alt="Play Flappy Goobert"
                        />
                    </button>

                    {/* Frogoobert - Coming Soon */}
                    <button
                        type="button"
                        className="machine-button"
                        onMouseEnter={() => arcadeHoverSound.play()}
                        onClick={() => arcadeClickSound.play()}
                    >
                        <img
                            src="game-room-images/frogoobert-machine.png"
                            alt="Frogoobert - Coming Soon"
                        />
                    </button>

                    {/* Pipelined - Coming Soon */}
                    <button
                        type="button"
                        className="machine-button"
                        onMouseEnter={() => arcadeHoverSound.play()}
                        onClick={() => arcadeClickSound.play()}
                    >
                        <img
                            src="game-room-images/pipelined-machine.png"
                            alt="Pipelined - Coming Soon"
                        />
                    </button>

                    {/* Feast Fest - Coming Soon */}
                    <button
                        type="button"
                        className="machine-button"
                        onMouseEnter={() => arcadeHoverSound.play()}
                        onClick={() => arcadeClickSound.play()}
                    >
                        <img
                            src="game-room-images/feast-fest-machine.png"
                            alt="Feast Fest - Coming Soon"
                        />
                    </button>

                </div>

            </main>
        );
    }
}
