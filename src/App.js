import './App.css';
import {useState} from "react";
import {CoordinatesList} from "./Data/CoordinatesList";
import ColorForm from "./Components/ColorForm";
import 'bootstrap/dist/css/bootstrap.css';
import {generateUniqueID} from "web-vitals/dist/modules/lib/generateUniqueID";
import Result from "./Components/Result";

function App() {

  const [coordinates, setCoordinates] = useState(CoordinatesList);
  const [rotation, setRotation] = useState(90)


  return (
    <>
          <h1>CSS Gradient Creator</h1>
          {CoordinatesList.map(
              (coordinate, index) => (
                <ColorForm index={index} coordinates={coordinates} setCoordinates={setCoordinates} key={generateUniqueID()}/>
              )
          )}
        <label htmlFor="rotationInput">Rotation</label>
        <input type="number" id="rotationInput" onChange={e => setRotation(e.target.value)}/>
        <Result coordinates={coordinates} rotation={rotation}/>

    </>
  );
}

export default App;
