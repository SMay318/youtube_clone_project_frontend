import React from 'react';
import { useEffect } from 'react';

function RelatedVideo(props){
   
    useEffect(()=>{
        
    },[props.videoId])

        return (
         
            <div>
               
              {props.relatedVideos.map((video) =>
                  <div>
                    
                    <span onClick={() => props.changeVideo(video.id.videoId)}>
                        <img src={video.snippet.thumbnails.default.url}></img>
                    </span>
                    <div>{video.snippet.title}</div>
                   </div>
              )}
            </div>
        );
    
}

export default RelatedVideo;