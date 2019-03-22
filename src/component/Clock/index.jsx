import React from "react";
import "./clock.css";
import style from "./clock.module.css"

const Separator = () => {
    return <div className="separator" />;
};

const UnitDisplay = () => {
    return (
        <React.Fragment>
            <div className="unitDisplay">ngày</div>
            <Separator />
            <div className="unitDisplay">giờ</div>
            <Separator />
            <div className="unitDisplay">phút</div>
            <Separator />
            <div className="unitDisplay">giây</div>
        </React.Fragment>
    );
};

// function component
const AnimatedCard = ({ animation, digit }) => {
    return (
        <div className={`flipCard ${animation}`}>
            <span>{digit}</span>
        </div>
    );
};

// function component
const StaticCard = ({ position, digit }) => {
    return (
        <div className={position}>
            <span>{digit}</span>
        </div>
    );
};

// function component
const FlipUnitContainer = ({ digit, shuffle, unit }) => {
    // assign digit values
    let currentDigit = digit;
    let previousDigit = digit + 1;

    // to prevent a negative value
    if (unit !== "hours") {
        previousDigit = previousDigit === 60 ? 0 : previousDigit;
    } else {
        previousDigit = previousDigit === 24 ? 0 : previousDigit;
    }

    // add zero
    if (currentDigit < 10) {
        currentDigit = `0${currentDigit}`;
    }
    if (previousDigit < 10) {
        previousDigit = `0${previousDigit}`;
    }

    // shuffle digits
    const digit1 = shuffle ? previousDigit : currentDigit;
    const digit2 = !shuffle ? previousDigit : currentDigit;

    // shuffle animations
    const animation1 = shuffle ? "fold" : "unfold";
    const animation2 = !shuffle ? "fold" : "unfold";

    return (
        <div className={"flipUnitContainer"}>
            <StaticCard position={"upperCard"} digit={currentDigit} />
            <StaticCard position={"lowerCard"} digit={previousDigit} />
            <AnimatedCard digit={digit1} animation={animation1} />
            <AnimatedCard digit={digit2} animation={animation2} />
        </div>
    );
};

const StaticUnitContainer = () => {
    return (
        <div className={"flipUnitContainer"}>
            <StaticCard position={"upperCard"} digit={"0"} />
            <StaticCard position={"lowerCard"} digit={"0"} />
        </div>
    );
};

// class component
export default class FlipCountdownClock extends React.Component {
    constructor(props) {
        super(props);
        this.target = props.target || new Date("March 30 2019 23:24:00");
        this.state = {
            days: 0,
            daysShuffle: true,
            hours: 0,
            hoursShuffle: true,
            minutes: 0,
            minutesShuffle: true,
            seconds: 0,
            secondsShuffle: true
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.updateTime(), 50);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    updateTime() {
        // get new date
        const distance = this.target - new Date();
        // set time units
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
            (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        if (days !== this.state.days) {
            const daysShuffle = !this.state.daysShuffle;
            this.setState({
                days,
                daysShuffle
            });
        }
        // on hour chanage, update hours and shuffle state
        if (hours !== this.state.hours) {
            const hoursShuffle = !this.state.hoursShuffle;
            this.setState({
                hours,
                hoursShuffle
            });
        }
        // on minute chanage, update minutes and shuffle state
        if (minutes !== this.state.minutes) {
            const minutesShuffle = !this.state.minutesShuffle;
            this.setState({
                minutes,
                minutesShuffle
            });
        }
        // on second chanage, update seconds and shuffle state
        if (seconds !== this.state.seconds) {
            const secondsShuffle = !this.state.secondsShuffle;
            this.setState({
                seconds,
                secondsShuffle
            });
        }
    }

    render() {
        // state object destructuring
        const {
            days,
            hours,
            minutes,
            seconds,
            daysShuffle,
            hoursShuffle,
            minutesShuffle,
            secondsShuffle
        } = this.state;
        if (this.target <= Number(new Date())) {
            clearInterval(this.timerID);
            return (
                <div className={`flipClock ${style.clock}`}>
                    <StaticUnitContainer />
                    <Separator />
                    <StaticUnitContainer />
                    <Separator />
                    <StaticUnitContainer />
                    <Separator />
                    <StaticUnitContainer />
                    <Separator />
                </div>
            );
        }
        return (
            <React.Fragment>
                <div className={style.clock}>
                    <div className={`flipClock`}>
                        <FlipUnitContainer
                            unit={"days"}
                            digit={days}
                            shuffle={daysShuffle}
                        />
                        <Separator />
                        <FlipUnitContainer
                            unit={"hours"}
                            digit={hours}
                            shuffle={hoursShuffle}
                        />
                        <Separator />
                        <FlipUnitContainer
                            unit={"minutes"}
                            digit={minutes}
                            shuffle={minutesShuffle}
                        />
                        <Separator />
                        <FlipUnitContainer
                            unit={"seconds"}
                            digit={seconds}
                            shuffle={secondsShuffle}
                        />
                    </div>
                    <div className={`flipClock`}>
                        <UnitDisplay />
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
