import React from "react";
import { Card } from "antd";
import posed from "react-pose";
import style from "./schedule.module.css";

import handleViewport from "react-in-viewport";

const Box = posed.div({
    visible: {
        opacity: 1,
        transition: {
            duration: 300
        }
    },
    hidden: {
        opacity: 0
    }
});

const Block = props => {
    const { innerRef } = props;
    return (
        <div className="viewport-block" ref={innerRef}/>
    );
};

const ViewportBlock = handleViewport(Block);

// noinspection JSUnusedGlobalSymbols
export default class Schedule extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false
        };
    }
    onChangeVisibility = visibility => () => {
        console.log(visibility);
        this.setState({ visible: visibility });
    };
    render() {
        return (
            <div className={style.card}>
                <Box pose={this.state.visible ? "visible" : "hidden"}>
                    <Card title="Default size card">
                        <ViewportBlock
                            onEnterViewport={this.onChangeVisibility(true)}
                            onLeaveViewport={this.onChangeVisibility(false)}
                        />
                        <p>{this.state.visible ? "visible" : "hidden"}</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                        <p>Hello</p>
                    </Card>
                </Box>
            </div>
        );
    }
}
