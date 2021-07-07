import moment from "moment";
import rawData from "../data/raw_brushing_cycle.json";

const compare = (a, b) => {
    const momentA = moment(a.date).unix();
    const momentB = moment(b.date).unix();
    if (momentA > momentB) return 1;
    if (momentA < momentB) return -1;
    return 0;
}

const getTime = (date) => {
    return moment(date).utc().format("hh:mm A");
}

const generateHistory = () => {
    let res = new Array();
    const sortedData = rawData.sort(compare);

    let idx = 0;
    let idx2 = 0;
    while (idx < sortedData.length) {
        const curEle = sortedData[idx];
        if (idx === sortedData.length - 1) {
            // Scenario 5,7
            res.push("Micka brushed their " + curEle.arch + " teeth at " + getTime(curEle.date));
            res.push("Micka didn't finish brushing their teeth at " + getTime(curEle.date));
            break;   
        }
        const nextEle = sortedData[idx+1];
        const curUnix = moment(curEle.date).unix();
        const nextUnix = moment(nextEle.date).unix();
        const diff = nextUnix - curUnix;
        if (diff <= 3600) {
            // Scenario 1
            if (((curEle.arch === "lower" && nextEle.arch === "upper") || (curEle.arch === "upper" && nextEle.arch === "lower")) && (curEle.interrupted === false && nextEle.interrupted === false)) {
                res.push("Micka brushed their teeth at " + getTime(curEle.date));
                idx = idx + 2;
                continue;
            }
            // Scenario 2
            else if (curEle.interrupted === false && nextEle.interrupted === false && curEle.arch === nextEle.arch) {
                res.push("Micka brushed their " + curEle.arch + " teeth at " + getTime(curEle.date));
                idx = idx + 2;
                continue;
            }
            // Scenario 4
            else if (curEle.interrupted === false && nextEle.interrupted === true) {
                res.push("Micka brushed their " + curEle.arch + " teeth at " + getTime(curEle.date));
                idx = idx + 2;
                continue;
            } 
            else if (curEle.interrupted === true && nextEle.interrupted === false) {
                res.push("Micka brushed their " + nextEle.arch + " teeth at " + getTime(nextEle.date));
                idx = idx + 2;
                continue;
            }
            // Scenario 6
            else if (curEle.interrupted === true && nextEle.interrupted === true) {
                idx2 = idx + 2;
                while (true) {
                    if (idx2 >= sortedData.length) break;
                    if (sortedData[idx2].interrupted === false) break;
                    idx2++;
                }
                res.push("Micka didn't finish brushing their teeth at " + getTime(curEle.date));
                idx = idx2;
                continue;
            }
            else {
                idx++;
                continue;
            }
        }
        else {
            // Scenario 3
            if (curEle.interrupted === false && nextEle.interrupted === false) {
                res.push("Micka brushed their " + curEle.arch + " teeth at " + getTime(curEle.date));
                res.push("Micka brushed their " + nextEle.arch + " teeth at " + getTime(nextEle.date));
                idx = idx + 2;
                continue;
            }
            else {
                idx++;
                continue;
            }
        }
    }
    return res;
};

export { generateHistory };