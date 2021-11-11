import { googleAPIKey } from '../keys';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = (props) => {
    const [videos, setVideos] = useState([]);
    const [searchVideo, searchVideos] = useState('');

    async function fetchVideos(){
        let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchVideo}&type=video&key=${googleAPIKey}`);
        setVideos(response.data);
    }

    useEffect(() => {
        let mounted = true;
        if(mounted){
            fetchVideos();
        }
        return () => mounted = false;
    }, [])

        

    return(
        <div>
             
        </div>
    )

       
    
}
export default App;