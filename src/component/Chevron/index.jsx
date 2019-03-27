import React, { Component } from "react";
import style from "./chevron.module.css";
import posed from "react-pose";
import handleViewport from "react-in-viewport";

const duration = 1000,
    delay = 200;

const ChevronContainer = posed.div({
    visible: {
        opacity: 1,
        transition: {
            duration: duration,
            ease: "easeInOut"
        }
    },
    hidden: {
        opacity: 0.1,
        transition: {
            duration: duration,
            ease: "easeInOut"
        }
    }
});

const Container = posed.div({
    visible: {
        opacity: 1,
        transition: {
            duration: 100,
            ease: "easeIn"
        }
    },
    hidden: {
        opacity: 0,
        transition: {
            duration: 100,
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
        visible1: true,
        visible2: true,
        visible3: true,
        visible: true
    };

    switchVisibility = st => () => {
        const v = this.state[st];
        this.setState({
            [st]: !v
        });
    };

    componentDidMount() {
        setInterval(this.switchVisibility("visible1"), duration + 100);
        setTimeout(
            () =>
                setInterval(this.switchVisibility("visible2"), duration + 100),
            delay
        );
        setTimeout(
            () =>
                setInterval(this.switchVisibility("visible3"), duration + 100),
            delay * 2
        );
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
                <ViewportBlock
                    onEnterViewport={this.onChangeVisibility(true)}
                    onLeaveViewport={this.onChangeVisibility(false)}
                />
                <div className={style["chevron-pack"]} onClick={this.onClick}>
                    <ChevronContainer
                        pose={this.state.visible1 ? "visible" : "hidden"}
                    >
                        <Chevron />
                    </ChevronContainer>
                    <ChevronContainer
                        pose={this.state.visible2 ? "visible" : "hidden"}
                    >
                        <Chevron />
                    </ChevronContainer>
                    <ChevronContainer
                        pose={this.state.visible3 ? "visible" : "hidden"}
                    >
                        <Chevron />
                    </ChevronContainer>
                </div>
            </Container>
        );
    }
}

export default ChevronPack;
