import React from "react";
import { Link } from "react-router-dom";

export default function AttributePairsTable(props) {
    if (props.objectWithAttributes.attributePairStrings?.length < 3 || props.showAll) {
        return (
            <div className="flex flex-col">
                {props.objectWithAttributes.attributePairStrings?.map((pairString, i) => {
                    return (
                        <div key={i}>
                            {pairString.replace(" =>", ":")}
                        </div>
                    );
                })}
            </div>
        );
    }
    const firstTwo = [props.objectWithAttributes.attributePairStrings[0], props.objectWithAttributes.attributePairStrings[1]];
    const remaining = props.objectWithAttributes.attributePairStrings.length - 2;
    return (
        <>
            {firstTwo.map((pairString, i) => {
                return (
                    <div key={i}>
                        {pairString.replace(" =>", ":")}
                    </div>

                );
            })}
            <div className="tooltip font-medium" data-tip="Redirects to snapshot page"><Link to={`/snapshot?id=${props.snapshotID}`}>+{remaining} more</Link></div>
        </>
    );
}
