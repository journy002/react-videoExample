import React, { useState } from 'react'
import ReactPlayer from 'react-player';

function Number() {
    const [playVideo, setPlayVideo] = useState(false);

    const onPlay = () => {
        setPlayVideo(true)
    }

    const pausePlay = () => {
        setPlayVideo(false)
    }


    return (
        <>
            <ReactPlayer
                url= 'https://vt.tumblr.com/tumblr_o600t8hzf51qcbnq0_480.mp4'
                playing={playVideo}
            />
            <button onClick={onPlay} >Play</button>
            <button onClick={pausePlay} >Pause</button>
        </>
    )
}

export default Number;
