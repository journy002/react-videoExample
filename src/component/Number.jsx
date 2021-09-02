import React, { useState } from 'react'
import ReactPlayer from 'react-player';

function Number() {
    const [playVideo, setPlayVideo] = useState([{
        url: 'https://vt.tumblr.com/tumblr_o600t8hzf51qcbnq0_480.mp4',
        videoState: false
    }]);

    const onPlay = () => {
        setPlayVideo({
            ...playVideo,
            videoState: true,
        })
    }

    const pausePlay = () => {
        setPlayVideo({
            ...playVideo,
            videoState: false
        })
    }


    return (
        <>
            <ReactPlayer
                url={playVideo[0].url}
                playing={playVideo.videoState}
            />
            <button onClick={onPlay} >Play</button>
            <button onClick={pausePlay} >Pause</button>
        </>
    )
}

export default Number;
