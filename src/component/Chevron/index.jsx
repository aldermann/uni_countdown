import React, { Component } from "react";
import style from "./chevron.module.css";
import posed from "react-pose";
import handleViewport from "react-in-viewport";

const ChevronContainer = posed.div({
    initialPose: "hidden",
    visible: {
        opacity: 1,
        transition: {
            duration: 1000,
            ease: "easeInOut"
        }
    },
    hidden: {
        opacity: 0.2,
        transition: {
            duration: 1000,
            ease: "easeInOut"
        }
    }
});

const Container = posed.div({
    visible: {
        opacity: 1,
        transition: {
            duration: 1000,
            ease: "easeIn"
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            duration: 1000,
            ease: "easeIn"
        }
    }
});

const ViewportBlock = handleViewport(props => {
    const { innerRef } = props;
    return <div className="viewport-block" ref={innerRef} />;
});

function Chevron() {
    return (
        <div className={style.chevron}>
            <div
                className={style["chevron-piece"] + " " + style["chevron-left"]}
            />
            <div
                className={
                    style["chevron-piece"] + " " + style["chevron-right"]
                }
            />
        </div>
    );
}

class ChevronPack extends Component {
    state = {
        animation: "",
        visible: true
    };

    nextAnimation = () => {
        let a = this.state.animation;
        if (a === "") a = "23";
        else if (a === "12") a = "23";
        else if (a === "23") a = "31";
        else if (a === "31") a = "12";
        this.setState({ animation: a });
    };

    currentState = id => {
        return this.state.animation.indexOf(id) === -1 ? "visible" : "hidden";
    };

    componentDidMount() {
        setInterval(this.nextAnimation, 900);
    }

    onClick = () => {
        window.scrollTo(0, window.innerHeight);
    };

    onChangeVisibility = visibility => () => {
        this.setState({ visible: visibility });
    };

    render() {
        return (
            <Container pose={this.state.visible ? "visible" : "hidden"}>
                <div className={style["chevron-pack"]} onClick={this.onClick}>
                    <ViewportBlock
                        onEnterViewport={this.onChangeVisibility(true)}
                        onLeaveViewport={this.onChangeVisibility(false)}
                    />
                    <ChevronContainer pose={this.currentState("1")}>
                        <Chevron />
                    </ChevronContainer>
                    <ChevronContainer pose={this.currentState("2")}>
                        <Chevron />
                    </ChevronContainer>
                    <ChevronContainer pose={this.currentState("3")}>
                        <Chevron />
                    </ChevronContainer>
                </div>
            </Container>
        );
    }
}

export default ChevronPack;
