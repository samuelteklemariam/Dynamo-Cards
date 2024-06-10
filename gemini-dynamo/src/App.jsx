import React, {useState} from 'react';
import axios from 'axios';
import Flashcard from './Flashcard';

function App() {
  const [youtubeLink, setYoutubeLink] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [keyConcepts, setKeyConcepts] = useState([]); // Added state for key concepts


  const handleLinkChange = (event) => {
    setYoutubeLink(event.target.value);
  };

  const sendLink = async () => {
    try {
      const response = await axios.post("http://localhost:8000/analyze_video", {
        youtube_link: youtubeLink,
      });
      
      const data = response.data;
      if(data.key_concepts && Array.isArray(data.key_concepts)){
        // Parse the key_concepts array to get term-definition pairs
        const parsedConcepts = data.key_concepts.flatMap(conceptObj =>
          Object.entries(conceptObj).map(([term, definition]) => ({ term, definition }))
        );
        setKeyConcepts(parsedConcepts);
      }
      else {
        console.error("Data does not contain key concepts: ", data);
        setKeyConcepts([]);
      }

    } catch (error) {
      console.log(error);
      setKeyConcepts([]);
    }
  };

  const discardFlashcard = (index) => {
    setKeyConcepts(currentConcepts => currentConcepts.filter((_,i) => i !== index));
  }
  return (
    <div className="App">
      <h1>Youtube Link to Flashcards Generator</h1>
      <input
      type="text"
      placeholder="Paste Youtube Link Here"
      value={youtubeLink}
      onChange={handleLinkChange}
      className='inputField'
      />
      <button onClick={sendLink}>
        Generate Flashcards
      </button>
      
      <div className="flashcardsContainer">
        {keyConcepts.map((concept,index) => (
          <Flashcard
            key={index}
            term={concept.term}
            definition={concept.definition}
            onDiscard={() => discardFlashcard(index)}/>
        ))}
      </div>


      {responseData && (
        <div>
          <h2>Response Data: </h2>
          <p>{JSON.stringify(responseData, null, 2)}</p>
        </div>
      )}

    </div>
  ) 
}

export default App;