import React, {useRef} from "react";

export default function FilterEditPanel({filter, updateCriteriaFunction}) {

    const firstTimeRef = useRef(null);
    const lastTimeRef = useRef(null);
    const pvPatternRef = useRef(null);

    function handleAddTimeRangeFilter() {
        console.log("FilterEditPanel.handleAddTimeRangeFilter()");
        filter.addTimeRangeCriteria(
            firstTimeRef.current.value, lastTimeRef.current.value);
        updateCriteriaFunction();
    }

    function handleAddPVFilter() {
        console.log("FilterEditPanel.handleAddPVFilter()");
        filter.addPvCriteria(pvPatternRef.current.value);
        updateCriteriaFunction();
    }

    return (
        <div style={{paddingBottom: "4px", borderBottom: "1px solid darkgray"}}>
            <h1>Snapshot Data Filter</h1>
            <div>
                <label>
                    time range filter
                    <input type="text" ref={firstTimeRef}
                           placeholder="2022-09-21T03:03:19.000Z"
                           defaultValue={filter.minFirstTime}/>
                    <input type="text" ref={lastTimeRef}
                           placeholder="2022-09-21T03:03:19.999Z"
                           defaultValue={filter.maxLastTime}/>
                    <button onClick={handleAddTimeRangeFilter}>
                        {filter.timeRangeCriteriaButtonLabel}
                    </button>
                </label>
            </div>
            <div>
                <label>
                    PV filter
                    <input type="text" ref={pvPatternRef}
                           placeholder="PV name (e.g., mpexPv01 or *.*)"
                           defaultValue="mpexPv01"/>
                    <button onClick={handleAddPVFilter}>Add</button>
                </label>
            </div>
        </div>
    );

}
