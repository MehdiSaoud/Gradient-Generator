import {useCallback, useEffect, useState} from "react";

export default function Result({coordinates, rotation}) {

    const [, updateState] = useState();
    const forceUpdate = useCallback(() => updateState({}), []);

    return (
        <>
            <div className="w-100 p-3 h-50" style={{background: `linear-gradient(${rotation}deg, ${coordinates[0].color} ${coordinates[0].breakpoint}%, ${coordinates[1].color} ${coordinates[1].breakpoint}%, ${coordinates[2].color} ${coordinates[2].breakpoint}%)`}}>
            </div>
            <button onClick={forceUpdate}>Force re-render</button>
        </>
    )
}