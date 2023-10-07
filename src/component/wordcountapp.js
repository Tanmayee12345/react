import React, { useState } from 'react';

function Wordcountapp() {
  const [text, setText] = useState('');
  const [wordCount, setWordCount] = useState();

  const handleTextChange = (e) => {
    const newText = e.target.value;
    setText(newText);

    // Split the text into words using whitespace as the delimiter
    const words = newText.split(/\s+/);

    // Filter out empty strings from the array (e.g., consecutive spaces)
    const filteredWords = words.filter(word => word !== '');

    // Update the word count
    setWordCount(filteredWords.length);
  };

  return (
    <div>
      <h1 style={{marginLeft:"520px", marginBottom:"0px"}}>Responsive Paragrph Word </h1>
      <h1 style={{marginLeft:"650px",marginTop:"0px"}}>Counter</h1>
      <textarea style={{marginLeft:"500px", borderRadius:"5px"}}
        
        value={text}
        onChange={handleTextChange}
        rows={6}
        cols={60}
      />
      <p style={{marginLeft:"500px"}} >Word Count: {wordCount}</p>
    </div>
  );
}

export default Wordcountapp;
