import React, {useState, useEffect} from "react";
import "./App.css";
import axios from "axios";
import POTD from "./components/PicOfTheDay/POTD"
import PhotoDetails from "./components/PhotoDetails/PhotoDetails"
import Header from "./components/header/Header"

function App() {
  const [photoOfTheDay, setPhotoOfTheDay] = useState([])
  const [photoDay, setPhotoDay] = useState(7);

  const showYesterdaysPhoto = function() {
    setPhotoDay(photoDay - 1);
    console.log("hi",photoDay);
  }



  useEffect(() => {
    axios.get(`https://api.nasa.gov/planetary/apod?api_key=4cXEcaQuRe0H2jVUHyBMwQOrScsgHBsrO33pMdvw&date=2019-11-0${photoDay}`)
    .then(response => {
      console.log(response.data)
      setPhotoOfTheDay(response.data)
    })
    .catch( error => {
      console.log("Photo data not coming through", error);
    })
  },[photoDay]);

  return (
    <div className="App">
      <Header />
      <POTD yesterdaysPhoto={showYesterdaysPhoto} img={photoOfTheDay.url} />
      <PhotoDetails title={photoOfTheDay.title} date={photoOfTheDay.date} explanation={photoOfTheDay.explanation} />
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun!
      </p>
    </div>
  );
}

export default App;
