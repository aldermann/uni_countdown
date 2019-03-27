import React from "react";
import { Card } from "antd";
import posed from "react-pose";
import style from "./schedule.module.css";
import "./schedule.css";
import handleViewport from "react-in-viewport";
import TimeTable from "./TimeTable";

const Box = posed.div({
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            delay: 700,
            duration: 700,
            ease: "backOut"
        }
    },
    hidden: {
        y: 100,
        opacity: 0,
        transition: {
            duration: 300,
            ease: "linear"
        }
    }
});

const ViewportBlock = handleViewport(props => {
    const { innerRef } = props;
    return <div className="viewport-block" ref={innerRef} />;
});

// noinspection JSUnusedGlobalSymbols
export default class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }
    onChangeVisibility = visibility => () => {
        this.setState({ visible: visibility });
    };
    render() {
        return (
            <div className={style.card}>
                <Box pose={this.state.visible ? "visible" : "hidden"}>
                    <Card title="Lịch thi đại học">
                        <ViewportBlock
                            onEnterViewport={this.onChangeVisibility(true)}
                            onLeaveViewport={this.onChangeVisibility(false)}
                        />
                        <div className={style["card-div"]}>
                            <TimeTable />
                        </div>
                    </Card>
                </Box>
            </div>
        );
    }
}
