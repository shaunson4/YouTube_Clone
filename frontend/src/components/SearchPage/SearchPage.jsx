import axios from "axios";
import { useState,} from "react";
import { KEY } from "../../localKey";




const SearchPage=(props)=>{
    // let {searchQuery} = useParams();

    const [videos, setVideos] = useState([]);
    const [searchTerm, setSearchTerm] = useState("")

    function handleSubmit(formEvent){
      formEvent.preventDefault();
      alert('Searched Videos request is submitted!');
    }

    const fetchVideos = async () => {
        try {
            //using string interpolation to insert searchTerm to the axios url string
          let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${searchTerm}&key=${KEY}`, );
          setVideos(response.data);
        } catch (error) {
          console.log(error.message);
        }
      };

//build form in the return, based off React Forms lecture
//form needs to insert what gets typed in to the setSearchTerm function
    return(
      <div>{console.log('"videos" in render', videos)}
      {console.log('searchTerm in render', searchTerm)}
      <button onClick={fetchVideos}>Click to search</button>

     <form onSubmit={handleSubmit}>
        <label>searchVideo</label>
        <input type="text" onChange={(event) => setSearchTerm(event.target.value)} value={searchTerm}/> 
            </form>
      </div>
  )



}
export default SearchPage