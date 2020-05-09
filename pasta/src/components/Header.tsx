import css from "./Header.module.css";
import logo from "../logo.svg";
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {getGamePlayingState, getGameScore, getPastasCount, stopGame} from "../redux/actions";
import {MAX_PASTA} from "../redux/constants";

let domRoot = document.getElementById('root');

const goFullScreen = () => {
    domRoot && domRoot.requestFullscreen();
};

export const Header = () => {
    const dispatch = useDispatch();
    const pastasCount = useSelector(getPastasCount);
    const currentScore = useSelector(getGameScore);
    const isPlaying = useSelector(getGamePlayingState);

    return <header className={css.header}>
        <span className={css.logoWrapper}><img src={logo} className={css.headerLogo} alt="logo"/></span>
        <div className={css.counter}>counter {currentScore}</div>
        <div className={css.counter}>pastas: {MAX_PASTA - pastasCount}</div>

        {domRoot && domRoot.requestFullscreen && <button onClick={goFullScreen}>🖥</button>}
        {isPlaying && <button onClick={() => dispatch(stopGame())}>pause</button>}
    </header>
};
