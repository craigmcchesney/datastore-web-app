import React, { useRef } from "react";

export default function FilterEditPanel({ filter,
                                          updateCriteriaFunction,
                                          handleResetFunction
                                        }) {

    const attributeNamePatternRef = useRef(null);

    function handleAddAnnotationFilter() {
        console.log("FilterEditPanel.handleAddAnnotationFilter()");
        filter.addAnnotationCriteria(attributeNamePatternRef.current.value);
        updateCriteriaFunction();
    }

    return (
        <div className="filter-group-wrapper">
            <div id="annotation-field-group" className="filter-field-group">
                <label className="filter-label">Annotation Name Pattern:</label>
                <input type="text" ref={attributeNamePatternRef}
                    placeholder="e.g. 'power failure'"
                    className="filter-input" />
            </div>
            
            <div className="flex flex-row pt-2 md:pt-6 space-x-2 justify-center">
                <button onClick={handleAddAnnotationFilter} className="apply-filters-button">
                    Apply Filter
                </button>
                <button className="clear-filters-button" onClick={handleResetFunction}>
                    Reset Filter
                </button>
            </div>
        </div>
    );

}
