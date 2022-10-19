import {Link} from "react-router-dom";
import SnapshotDetails from "../../domain/models/SnapshotDetails";
import React from "react";

export default function SnapshotListTable({ snapshots = [] }) {

    function handleClickSnapshotLink(snapshot) {
        console.log("SnapshotListTableRow.handleClickSnapshotLink()");
        // save selected snapshot to window storage for access in SnapshotPage
        window.localStorage.setItem(
            "snapshot", JSON.stringify(
                new SnapshotDetails(
                    snapshot.id,
                    snapshot.snapshotTimestampLocaleString,
                    snapshot.firstTimestampLocaleString,
                    snapshot.lastTimestampLocaleString,
                    snapshot.pvNames,
                    snapshot.pvNamesString,
                    snapshot.descAttributes,
                    snapshot.descriptionStringWithBreaks)));
    }

    return (
        <table className="result-list-table">
            <tbody>
            <tr>
                <th>Snapshot ID</th>
                <th>Trigger Time</th>
                <th>First Sample Time</th>
                <th>Last Sample Time</th>
                <th>PV Names</th>
                <th>Attributes (name=>value)</th>
            </tr>
            {snapshots?.map((snapshot, i) => {
                return (
                    <tr>
                        <td>
                            <Link
                                onClick={() => handleClickSnapshotLink(snapshot)}
                                to={`/snapshot?id=${snapshot.id}`}>
                                {snapshot.id || "No id"}
                            </Link>
                        </td>
                        <td>
                            <Link
                                onClick={() => handleClickSnapshotLink(snapshot)}
                                to={`/snapshot?id=${snapshot.id}`}>
                                {snapshot.snapshotTimestampLocaleString || ""}
                            </Link>
                        </td>
                        <td>{snapshot?.firstTimestampLocaleString || ""}</td>
                        <td>{snapshot?.lastTimestampLocaleString || ""}</td>
                        <td>
                            <table style={{border: 'none'}}>
                                <tbody>
                                {snapshot.pvNames?.map((pvName, i) => {
                                    return (
                                        <tr>
                                            <td style={{border: 'none'}}>
                                                <Link
                                                    to={`/pv?name=${pvName}`}>
                                                    {pvName}
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                                </tbody>
                            </table>
                        </td>
                        <td style={{ whiteSpace: 'pre-line' }}>{snapshot?.descriptionString || ""}</td>
                    </tr>
                );
            })}
            </tbody>
        </table>
    );
}
