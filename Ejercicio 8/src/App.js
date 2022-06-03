import React, { useState } from "react";
import "./styles.css";

function App() {
  const [number, setNumber] = useState(0);
  const [images, setImages] = useState([]);

  const onChangeNumber = (e) => {
    const number = e.target.value;
    setNumber(number);
  };

  const onSubmit = () => {
    const arr = [];
    for (let i = 0; i < number; i++) {
      arr.push(
        <img
          key={i}
          src={`https://www.lavanguardia.com/files/content_image_mobile_filter/uploads/2021/12/13/61b7212c29dbb.png`}
          alt=""
        />
      );
    }
    setImages(arr);
  };

  return (
    <div className="App">
      <input type="number" onChange={onChangeNumber} value={number} />
      <button onClick={onSubmit}>Submit</button>
      <div className="img">{images}</div>
    </div>
  );
}

export default App;
