import React, {useEffect, useState} from "react";
import SnapshotMetadataTable from "./SnapshotMetadataTable";
import Snapshot from "../../domain/Snapshot";
import SnapshotMetadataPanel from "../ViewSnapshotPage/SnapshotMetadataPanel";
import FilterPanel from "../ViewSnapshotPage/FilterPanel";
import SnapshotDataPanel from "../ViewSnapshotPage/SnapshotDataPanel";
import FilterEditPanel from "./FilterEditPanel";
import FilterCriteriaPanel from "./FilterCriteriaPanel";
import QueryResultsPanel from "./QueryResultsPanel";
import SnapshotMetadataFilter from "../../domain/SnapshotMetadataFilter";

export default function ExploreSnapshotMetadataPage({client}) {

    let [filter, setFilter] = useState(new SnapshotMetadataFilter());
    let [filterCriteria, setFilterCriteria] = useState([]);
    let [snapshots, setSnapshots] = useState([]);
    let snapshotQuerySubmitted = false;

    // useEffect(() => {
    //     getSnapshots();
    // }, []);

    function updateCriteria () {
        console.log("updating criteria");
        setFilterCriteria(filter.criteriaList);
    }

    function handleSubmit() {
        getSnapshotMetadata();
    }

    function getSnapshotMetadata() {

        console.log("getSnapshots()");

        if (snapshotQuerySubmitted) return;
        snapshotQuerySubmitted = true;

        const {Timestamp} = require('../../grpc-proto/common_pb.js');
        const {
            SnapshotQuery,
            TimestampClause,
            SnapshotTimestampClauseSelector,
            SnapshotTimestampClausePredicate
        } = require('../../grpc-proto/query_pb.js');

        // execute grpc snapshot metadata query
        console.log("executing grpc snapshot metadata query");
        let nowSecondsSinceEpoch = Math.round(Date.now() / 1000);
        let nowTimestamp = new Timestamp();
        nowTimestamp.setEpochseconds(nowSecondsSinceEpoch);
        nowTimestamp.setNanoseconds(0);
        let endTimestamp = new Timestamp();
        endTimestamp.setEpochseconds(nowSecondsSinceEpoch);
        endTimestamp.setNanoseconds(0);
        let timestampClause = new TimestampClause();
        timestampClause.setSelector(SnapshotTimestampClauseSelector.SNAPSHOT_TIMESTAMP);
        timestampClause.setPredicate(SnapshotTimestampClausePredicate.BEFORE);
        timestampClause.setTimestamp(nowTimestamp);
        timestampClause.setEndtimestamp(endTimestamp);
        let snapshotQuery = new SnapshotQuery();
        snapshotQuery.addTimestampclauses(timestampClause);
        client.listSnapshots(snapshotQuery, {}, (err, response) => {
            if (err) {
                const errorMsg = response.getMsg();
                console.log("error executing snapshot metadata query: " + errorMsg);
                setSnapshots([]);
            } else {
                let resultList = response.getSnapshotsList();
                console.log("snapshot metadata query success, result length: " + resultList.length);
                resultList = resultList
                    .map((snapshot) => {
                        return new Snapshot(snapshot);
                    });
                setSnapshots(resultList);
            }
        });
    }

    return (
        <div>
            <FilterEditPanel filter={filter} updateCriteriaFunction={updateCriteria}/>
            <FilterCriteriaPanel filter={filter} handleSubmitFunction={handleSubmit}/>
            <QueryResultsPanel snapshots={snapshots}/>
        </div>
    );

}



// // ========================= test pv query
// let pvQuery = new Query();
// pvQuery.setQuery("mpexPv01");
// client.listPVs(pvQuery, {}, (err, response) => {});





// ========================== original code from QueryPage/index.js
// ========================== for calling grpc API for retrieving PVs

// export default function QueryPage({ client }) {
//
//     let[pvList, setPvList] = useState(null);
//     let[pvCount, setPvCount] = useState(0);
// //    let[pvQuerySubmitted, setPvQuerySubmitted] = useState(false);
//
//     let pvQuerySubmitted = false;
//
//     useEffect(() => {
//         if (pvCount === 0) getAllPvs();
//     });
//
//     function getAllPvs() {
//         if (pvQuerySubmitted) return;
//         pvQuerySubmitted = true;
//         console.log("executing PV query");
//         let pvQuery = "mpexPv09";
//         let pvRequest = new Query(pvQuery);
//         client.listPVs(pvRequest, {}, (err, response) => {
//             if (err) {
//                 const errorMsg = response.getMsg();
//                 console.log("error executing PV query: " + errorMsg);
//             } else {
//                 console.log("PV query success");
//                 let resultList = response.getPvsList();
//                 console.log(resultList);
//                 setPvList(resultList);
//                 setPvCount(resultList.length);
//                 console.log("query pv count: " + resultList.length);
//             }
//         });
//     }
//
//     return (
//         <div>
//             <p>pv count: {pvCount}</p>
//         </div>
//     )
//
// }




// ===================================== grpc annotation query

// let annotationQuery = ".*";
// let annotationRequest = new Query(annotationQuery);
// client.listAnnotations(annotationRequest, {}, (err, response) => {
//   if (err) {
//     console.error("error encountered in annotation query: " + err);
//     return;
//   }
//   console.log("annotation result: ");
//   console.log(response.getAnnotationsList());
// });