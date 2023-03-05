import React, { Component } from "react";
import PropTypes from "prop-types";

import { ThemeProvider } from "styled-components";
//import { Player, customEvent, video_src } from "./Player";
import { isMobile } from "react-device-detect";
//import { Link } from "react-router-dom";
import baani_img from "../assets/images/baani.png";
//import video from "./../assets/video.mp4";
//import player from "./Player.js";

import ChatBot from "./ChatBot.jsx";
import Loading from "./steps_components/common/Loading.jsx";
import Cookies from "js-cookie";

//import audioSource from './../assets/images/Greeting.mp3'

let apiResponse = "...";
let snd = "";
let recognitionFlag = true;
const video_server = "https://uniwav.com/video/";

/*
const theme = {
  background: '#FAEDE4',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#FE8C3C',
  headerFontColor: '#fff',
  headerFontSize: '20px',
  botBubbleColor: '#CD8451',
  botFontColor: '#fff',
  userBubbleColor: '#BDED28',
  userFontColor: '#4a4a4a',
   height: '100%',
  controlStyle: { position: 'relative' },
} */

const theme = {
    background: "#f5f8fb",
    fontFamily: "Helvetica Neue",
    headerBgColor: "#6e48aa",
    headerFontColor: "#fff",
    headerFontSize: "19px",
    botBubbleColor: "#6E48AA",
    botFontColor: "#fff",
    userBubbleColor: "orange",
    userFontColor: "#4a4a4a",
};

class DBPedia extends Component {
    constructor(props) {
        console.log("-- Inside constructor");
        super(props);

        this.state = {
            loading: true,
            result: "",
            trigger: false,
        };

        this.triggetNext = this.triggetNext.bind(this);
    }

    UNSAFE_componentWillMount() {
        console.log("-- Inside UNSAFE_componentWillMount");
        const self = this;
        const { steps } = this.props;
        const search = steps.search.value;
        const session_id = Cookies.get("session_id");

        const queryUrl =
            "https://4e3fqy74ze.execute-api.ap-southeast-1.amazonaws.com/Vaskk_From_UniWav_Test/dialog";
        //const queryUrl = `https://mugm7zgxac.execute-api.ap-southeast-1.amazonaws.com/Test/dialog`
        //const queryUrl = 'https://usnzq8c7v2.execute-api.ap-southeast-1.amazonaws.com/Test_09Apr/dialog'

        const xhr = new XMLHttpRequest();

        xhr.addEventListener("readystatechange", readyStateChange);

        function readyStateChange() {
            if (this.readyState === 4) {
                const response = JSON.parse(this.responseText);
                console.log("--Inside readyStateChange");

                const data = response["body"].response;
                const base64Audio = response["body"].testAudio;
                const video_path = response["body"].video_path;

                console.log("-- video_path is :", video_path);
                apiResponse = data;
                console.log("-- data :", data);
                console.log(
                    "-- response[body].response :",
                    response["body"].response
                );
                //console.log('-- data.length :', data.length)
                if (data && data.length > 0) {
                    console.log("-- Assigning  value of Data:", data);
                    self.setState({ loading: false, result: data });
                } else {
                    self.setState({ loading: false, result: "Not found." });
                }

                // Play Audio
                if (base64Audio && base64Audio.length > 0) {
                    //const video_source = 'http://65.0.173.79:4000/video/1'
                    //const video_source = "http://65.0.173.79:4000/video/" + video_path;
                    const video_source = video_server + video_path;
                    console.log("-- Video Server Path is :", video_source);

                    //snd.src = "data:audio/wav;base64," + base64Audio;
                    snd.src = video_source;
                    snd.play();

                    //const video_source = 'http://localhost:4000/video/' + video_path
                    document.dispatchEvent(
                        new CustomEvent("custom", {
                            detail: { video_src: video_source },
                        })
                    );
                }
            }
        }

        // Create API Request
        console.log("--Before Open");
        console.log("--Value of Search is:", search);
        xhr.open("GET", queryUrl);
        xhr.setRequestHeader("Content-Type", "application/json");
        xhr.setRequestHeader("validation-required", "allow");
        xhr.setRequestHeader("sessionId", session_id);
        xhr.setRequestHeader("userInput", search);
        xhr.send();
    }

    triggetNext() {
        this.setState({ trigger: true }, () => {
            this.props.triggerNextStep();
            console.log("--inside triggetNext");
        });
    }

    render() {
        console.log("--inside render");
        const { trigger, loading, result } = this.state;
        return (
            <div className="dbpedia">
                {loading ? <Loading /> : result}
                {!loading && (
                    <div
                        style={{
                            textAlign: "center",
                            marginTop: 20,
                        }}
                    ></div>
                )}
            </div>
        );
    }
}

DBPedia.propTypes = {
    steps: PropTypes.object,
    triggerNextStep: PropTypes.func,
};

DBPedia.defaultProps = {
    steps: undefined,
    triggerNextStep: undefined,
};

class Baani extends Component {
    constructor(props) {
        super(props);
        console.log("-- inside baani Constructor");

        if (isMobile) {
            recognitionFlag = false;
        }
    }
    render() {
        return (
            <ThemeProvider theme={theme}>
                <div>
                    <ChatBot
                        headerTitle="baani"
                        floatingIcon={baani_img}
                        customDelay={5}
                        botAvatar={baani_img}
                        //speechSynthesis={{ enable: true, lang: 'en-GB', rate: '.1' }}
                        floating={true}
                        opened={true}
                        enableSmoothScroll={true}
                        recognitionEnable={recognitionFlag}
                        // Below added on 17-May-22
                        enableMobileAutoFocus={false}
                        recognitionPlaceholder={"Listening"}
                        //userDelay={5000}
                        //headerComponent={baani_img}
                        steps={[
                            {
                                id: "start",
                                message:
                                    "Hi! I can guide you on Cloud certifications. We can have audio conversaion as well. Just press speech button below before speaking.",
                                trigger: "search",
                            },
                            {
                                id: "search",
                                user: true,
                                trigger: "getResult",
                                validator: (value) => {
                                    console.log("-- Inside Validator -----");
                                    if (snd == "") {
                                        snd = new Audio();
                                    }
                                    return true;
                                },
                            },
                            {
                                id: "getResult",
                                component: <DBPedia />,
                                asMessage: true,
                                trigger: "search",
                            },
                        ]}
                    />
                </div>
            </ThemeProvider>
        );
    }
}

export default Baani;
