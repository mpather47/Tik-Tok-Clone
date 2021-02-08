import React, {useRef,useState} from 'react'
import VideoFooter from './VideoFooter';
import VideoSidebar from './VideoSidebar';
import './Video.css'
function Video({url,channel, description, song, likes, messages, shares}) {
    const [play,setPlaying] = useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () =>{
        if(play){
            videoRef.current.pause();
            setPlaying(false);
        } else{
            videoRef.current.play();
            setPlaying(true);
        }
       
    };
    return (
        <div className="video">
         <video 
         className="video__player" 
         loop
         ref={videoRef}
         onClick={onVideoPress}
         src={url}
         ></video>
        <VideoFooter 
        channel={channel} 
        description={description} 
        song={song} 
        />
        <VideoSidebar likes={likes} messages={messages} shares={shares}/>
        </div>
    );
}

export default Video
