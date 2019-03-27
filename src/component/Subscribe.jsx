import React from "react";
import firebase from "firebase"
import {Button} from "antd"
const config = {
    apiKey: "AIzaSyAgQVOx5R1_IY7GbR8PhTJObutslktOvkk",
    projectId: "uni-countdown",
    messagingSenderId: "883038290856"
};

const firebaseApp = firebase.initializeApp(config);
const messaging = firebaseApp.messaging();



class Subscribe extends React.Component {
    handleClick = async () => {
        try {
            await messaging.requestPermission();
        } catch (err) {
            console.log("Unable to get permission to notify.", err);
            return;
        }
        console.log("Notification permission granted.");
        try {
            const currentToken = await messaging.getToken();
            if (currentToken) {
                console.log("Token generated is ", currentToken);
            } else {
                console.log(
                    "No Instance ID token available. Request permission to generate one."
                );
            }
        } catch (err) {
            console.log("An error occurred while retrieving token.", err);
        }
    };
    render() {
        return (
            <Button type="primary" htmlType="button" onClick={this.handleClick}>
                Primary
            </Button>
        )
    }
}

export default Subscribe