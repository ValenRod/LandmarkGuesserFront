import React from "react";
import './Home.css'
import {Btn} from "../common/Btn";

export const Home = () => {
    return (
        <div className="home">
            <p className="info">
                Guess where you are!
            </p>
            <Btn text={'Play'}/>
        </div>
    )
}