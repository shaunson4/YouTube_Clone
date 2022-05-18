import React from 'react';


// const [currentVideoId, setCurrentVideoId] = useState ('')
// const [currentVideoTitle, setCurrentVideoTitle] = useState ( <p claassName="VideoTitle"></p>)
// const [currentVideoDescription, setCurrentVideoDescription] = useState(<p className="VideoDescription"></p>)

const VideoPlayer = (props) => {



    return(
        <div className='VideoPlayer'>
            <p>{props.currentVideoTitle}</p>
        <iframe width='560' height='315'
        src={`https://www.youtube.com/embed/M7lc1UVf-VE754rNuNgYwg?autoplay=1&origin=http://example.com`}
        title="YouTube video player"
        frameBorder="0"></iframe>
        <p>{props.currentVideoDescription}</p>
        </div>


    )
}

export default VideoPlayer;