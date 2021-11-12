import React from 'react';

function RelatedVideo(props){
   


        return (
         
            <div>
               
              {props.relatedVideos.map((video) =>
<<<<<<< HEAD
                  <div onClick={() => props.selectVideo(video.snippet.thumbnails.default.url)}>
                    <img src={video.snippet.thumbnails.default.url}></img>
                 
=======
                  <div >
                    <span onClick={() => props.changeVideo(video.id.videoId)}>
                        <img src={video.snippet.thumbnails.default.url}></img>
                    </span>
>>>>>>> 9758e95438f9aaf4d709a63c4d253f06fbc36631
                    <div>{video.snippet.title}</div>
                   </div>
              )}
            </div>
        );
    
}

export default RelatedVideo;