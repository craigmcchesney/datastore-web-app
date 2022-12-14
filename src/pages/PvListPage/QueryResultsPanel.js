import PvListTable from "./PvListTable";
import React from "react";

export default function QueryResultsPanel({pvs, errorMsg}) {

    function renderPvListDataTable() {
        return (
            <div>
                <PvListTable pvs={pvs}/>
            </div>
        );
    }

    function renderNoPvListDataTable() {
        return (
            <div/>
        );
    }

    function renderQueryResultsPanel() {
        return (
            <div>
                <div>
                    <div style={{paddingBottom: "4px", borderBottom: "1px solid darkgray"}}>
                        {(pvs.length === 0) ? renderNoPvListDataTable() : renderPvListDataTable()}
                    </div>
                </div>
            </div>
        );
    }

    function renderQueryErrorPanel() {
        return (
            <div>
                <h1>{errorMsg}</h1>;
            </div>
        );
    }

    return (
        <div style={{paddingBottom: "4px", borderBottom: "1px solid darkgray"}}>
            {(errorMsg !== null) ? renderQueryErrorPanel() : renderQueryResultsPanel()}
        </div>
    );
}
