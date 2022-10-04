class SnapshotDetails {

    constructor(id, timestamp, firstTime, lastTime, pvNamesString, attributesString) {
        this.id = id;
        this.timestamp = timestamp;
        this.firstTime = firstTime;
        this.lastTime = lastTime;
        this.pvNamesString = pvNamesString;
        this.attributesString = attributesString;
    }

    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }

    get timestamp() {
        return this._timestamp;
    }

    set timestamp(timestamp) {
        this._timestamp = timestamp;
    }

    get firstTime() {
        return this._firstTime;
    }

    set firstTime(firstTime) {
        this._firstTime = firstTime;
    }

    get lastTime() {
        return this._lastTime;
    }

    set lastTime(lastTime) {
        this._lastTime = lastTime;
    }

    get pvNamesString() {
        return this._pvNamesString;
    }

    set pvNamesString(pvNamesString) {
        this._pvNamesString = pvNamesString;
    }

    get attributesString() {
        return this._attributesString;
    }

    set attributesString(attributesString) {
        this._attributesString = attributesString;
    }

}

module.exports = SnapshotDetails