import React from "react";
import Particles from "react-particles-js";
import style from "./background.module.css";
import config from "../particle-config"
class Background extends React.Component {
    render() {
        return (
            <Particles
                params={config}
                height="100vh"
                width="100vw"
                className={style.background}
            />
        );
    }
}
export default Background;
