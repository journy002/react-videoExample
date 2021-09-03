import React, { useState } from 'react'
import ReactPlayer from 'react-player';

function Number() {
    const [playVideo, setPlayVideo] = useState([{
        id: 1,
        url: 'https://vt.tumblr.com/tumblr_o600t8hzf51qcbnq0_480.mp4',
        videoState: false
    }]);

    const [videoIndex, setVideoIndex] = useState(0);

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

    const autoPlay = () => {
        setVideoIndex(
            ...videoIndex,
            playVideo[videoIndex + 1]
        )
    }
    

    return (
        <>
            <ReactPlayer
                url={playVideo[videoIndex].url}
                playing={playVideo.videoState}
            />
            <button onClick={onPlay} >Play</button>
            <button onClick={pausePlay} >Pause</button>
            <button onClick={autoPlay} >Next</button>
        </>
    )
}

export default Number;
