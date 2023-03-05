import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactDOMClient from "react-dom/client";

import baani_poster from "../assets/images/Baani_Poster.png";

//let video_src = 'http://localhost:4000/video/0'
//let video_src = "http://65.0.173.79:4000/video/Start";
let video_src = "https://uniwav.com/video/Start";

export var customEvent = new CustomEvent("custom", { detail: "data" });

export default class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            videoId: 0,
        };
    }

    get_video() {
        //Added for test
        //return 'http://localhost:4000/video/0'
        return video_src;
    }

    render() {
        console.log("-- Player render is called");
        console.log("-- video_src is: ", video_src);

        //const root = ReactDOM.createRoot(document.getElementById('root'))

        const videoInstance = (
            <div
                className="card border-0"
                id="videoInstance"
                style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                }}
            >
                <video
                    controls=""
                    muted
                    autoPlay
                    crossOrigin="anonymous"
                    width="100%"
                    height="100%"
                    poster={baani_poster}
                >
                    <source src={video_src} type="video/mp4"></source>
                </video>
            </div>
        );

        return videoInstance;
    }

    handleNVFocus = (event, data) => {
        console.log("-- handleNVFocus CALLED");
        //video_src = 'http://localhost:4000/video/1'

        video_src = event.detail.video_src;
        const vid = document.getElementById("videoInstance");
        console.log("-- Event is: ", event);
        console.log("-- VIDEO CLASS IS", vid.className);
        console.log("-- Event detail is: ", event.detail);
        console.log("-- video_src is : ", video_src);

        const root = ReactDOMClient.createRoot(
            document.getElementById("videoInstance")
        );
        const videoInstance = (
            <div
                className="card border-0"
                id="videoInstance"
                style={{
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "flex-end",
                }}
            >
                <video
                    controls=""
                    autoPlay={true}
                    crossOrigin="anonymous"
                    width="100%"
                    height="100%"
                    muted={true}
                    playsInline={true}
                    poster={baani_poster}
                >
                    <source src={video_src} type="video/mp4"></source>
                </video>
            </div>
        );
        root.render(videoInstance);
    };

    componentDidMount() {
        document.addEventListener("custom", this.handleNVFocus);
    }
}
