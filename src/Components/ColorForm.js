import {useEffect} from "react";


export default function ColorForm({index, coordinates, setCoordinates, setRotation}) {

    function changeColor(e)
    {
        let newCoordinates = coordinates;
        newCoordinates[index].color = e.target.value;
        return newCoordinates;
    }

    function changeBreakpoint(e)
    {
        let newCoordinates = coordinates;
        newCoordinates[index].breakpoint = e.target.value;
        return newCoordinates;
    }

    console.log(coordinates)

    return (
        <>
            <form>
                <label htmlFor="breakpointInput">Breakpoint {index+1}</label>
                <input type="number" id="breakpointInput" onChange={e => {setCoordinates(changeBreakpoint(e)); console.log(coordinates)}}/>
                <label htmlFor="colorInput">Color {index+1}</label>
                <input type="color" id="colorInput" onChange={e => setCoordinates(changeColor(e))}/>
            </form>
        </>

    );
}