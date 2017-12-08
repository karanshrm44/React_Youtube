import React from 'react';


const VideoDetail = ({video}) => {
   // const video=props.video;
    if(!video)
    {
        return <div>Loading ..</div>;
    }

    console.log(video);
     const videoId=video.id.videoId;
     const url=`http://www.youtube.com/embed/${videoId}?autoplay=0`;

    return(

        <div className="video-detail col-md-8">
          <div className="embed-responsive embed-responsive-16by9 detail">
             <iframe className="embed-responseve-item"  src={url}></iframe>
          </div>
          <div className="details">
            <div>{video.snippet.title}</div>
            
            <div>{video.snippet.description}</div>
          </div>
         </div>

    );
    

};
export default VideoDetail;