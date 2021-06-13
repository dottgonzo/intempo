"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InTempo {
    constructor(startTime, endTime) {
        this.separator = ':';
        if (!startTime || !endTime)
            throw new Error('invalid time for intempo');
        this.startTimeInSeconds = Date.parse('01 Jan 1970 ' + startTime);
        this.endTimeInSeconds = Date.parse('01 Jan 1970 ' + endTime);
    }
    static msecondElapsed() {
        const currentDate = new Date();
        const hours = currentDate.getUTCHours();
        const minutes = currentDate.getUTCMinutes();
        const seconds = currentDate.getUTCMinutes();
        const milliseconds = currentDate.getUTCMilliseconds();
        return Date.parse(`01 Jan 1970 ${hours}:${minutes}:${seconds}:${milliseconds} UTC`);
    }
    weAreInside() {
        const elapsed = InTempo.msecondElapsed();
        return elapsed > this.startTimeInSeconds && elapsed < this.endTimeInSeconds;
    }
    weAreOutside() {
        return !this.weAreInside();
    }
    status() {
        if (this.weAreInside()) {
            return 'inside';
        }
        else {
            return 'outside';
        }
    }
    nextStart() { }
    nextStop() { }
}
exports.default = InTempo;
//# sourceMappingURL=index.js.map