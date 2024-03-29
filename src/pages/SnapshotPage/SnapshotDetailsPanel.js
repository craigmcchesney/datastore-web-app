import React from "react";
import AttributePairsTable from "../common/AttributePairsTable";
import PvNamesWithLinksParagraph from "../common/PvNamesWithLinksParagraph";
import KeyValuePair from "../../components/KeyValuePair";
import { Disclosure } from "@headlessui/react";
import DisclosureHead from "../../components/DisclosureHead";
import ErrorMessage from "../../components/ErrorMessage";

export default function SnapshotDetailsPanel({ snapshotDetails, errorMsg }) {

    function renderDetailsPanel() {
        return (
            <Disclosure defaultOpen={true}>
                <div id="snapshot-details" className="page-filter-wrapper">
                    <DisclosureHead titleText="Details" />
                    <Disclosure.Panel>
                        <div className="my-4 border-b border-gray-300"></div>
                        <div id="snapshot-details-body" className="flex flex-col flex-wrap px-8">
                            <div className="flex flex-row flex-wrap space-x-10 mb-6">
                                <KeyValuePair index="ID" value={snapshotDetails.id} />
                                <KeyValuePair index="Size" value={snapshotDetails.size} />
                                <KeyValuePair index="Trigger Timestamp" value={snapshotDetails.snapshotTimestampDisplayString} />
                                <KeyValuePair index="First Sample Time" value={snapshotDetails.firstTimestampDisplayString} />
                                <KeyValuePair index="Last Sample Time" value={snapshotDetails.lastTimestampDisplayString} />
                            </div>
                            <div className="mb-6">
                                <KeyValuePair index="PV Names" value={<PvNamesWithLinksParagraph objectWithPvs={snapshotDetails} snapshotID={snapshotDetails.id} showAll={true} />} />
                            </div>
                            <KeyValuePair index="Attributes" value={<AttributePairsTable objectWithAttributes={snapshotDetails} snapshotID={snapshotDetails.id} showAll={true} />} />
                        </div>
                    </Disclosure.Panel>
                </div>
            </Disclosure>
        );
    }

    function renderNoSnapshotPanel() {
        return (
            <div />
        );
    }
    function renderQueryErrorPanel() {
        return (
            <ErrorMessage errorMsg={errorMsg} />
        );
    }

    return (
        (errorMsg !== null) ? renderQueryErrorPanel() :
            (snapshotDetails === null) ? renderNoSnapshotPanel() : renderDetailsPanel()
    );
}
