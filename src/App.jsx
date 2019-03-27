import React, { Component } from "react";
import ScheduleBackground from "./component/ScheduleBackground/";
import CountdownBackground from "./component/CountdownBackground/";
import Clock from "./component/Clock/";
import style from "./app.module.css";
import FirstHeader from "./component/Header/FirstHeader";
import SecondHeader from "./component/Header/SecondHeader";
import Schedule from "./component/Schedule/";
import Chevron from "./component/Chevron";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "",
            status: ""
        };
        this.myRef = React.createRef(); // Create a ref object
    }

    onClick = () => {
        const container = document.getElementById("the_app");
        container.scrollTo(0, this.myRef.offsetTop);
    };

    render() {
        return (
            <div className={style.app} id="the_app">
                <div className={style.page}>
                    <div onClick={this.onClick}>
                        <Chevron />
                    </div>
                    <FirstHeader />
                    <SecondHeader />
                    <Clock target={new Date("June 24 2019 07:00:00")} />
                    <CountdownBackground />
                </div>
                <div
                    className={style.page}
                    ref={ref => {
                        this.myRef = ref;
                    }}
                >
                    <ScheduleBackground />
                    <Schedule />
                    <div className={style.credit}>
                        Made by{" "}
                        <a href="https://github.com/aldermann">aldermann</a>{" "}
                        with passion
                        <span
                            role="img"
                            aria-label="Heart"
                            className={style.heart}
                        >
                            ❤
                        </span>
                        <br />
                        Source code{" "}
                        <a href="https://github.com/aldermann/uni_countdown">
                            here
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
