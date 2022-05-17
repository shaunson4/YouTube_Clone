import axios from "axios";
import { useState } from "react";



const SearchPage=(props)=>{
    const [videos, setVideos] = useState([]);
    //add searchTerm variable

    const fetchVideos = async () => {
        try {
            //use string interpolation to insert searchTerm to the axios url string
          let response = await axios.get("",);
          setVideos(response.data.items);
        } catch (error) {
          console.log(error.message);
        }
      };
//build form in the return, based off rReact Forms lecture
    return(
      <div>{console.log('"videos" in render', videos)}
      <button onClick={fetchVideos}>Click to search</button>
      </div>
  )



}
export default SearchPage