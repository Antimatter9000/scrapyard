export default function addCommas(val) {
    const valString = typeof val === 'string' ? val : val.toString();
    const valIsNegative = val[0] === '-';
    const [ ints, decs ] = splitString(valString, valIsNegative);
    const newStr = getStringWithCommas(ints);
    const floatString = decs ? `${newStr}.${decs}` : newStr;
    return valIsNegative ? `-${floatString}` : floatString;
}

function splitString(valString, valIsNegative) {
    return valIsNegative
        ? valString.slice(1).split('.')
        : valString.split('.');
}

function getStringWithCommas(ints) {
    const nonChunks = ints.length % 3;
    const start = nonChunks === 0 ? 3 : nonChunks;
    const chunks = ints.slice(start).match(/[0-9]{3}/g) || [];
    return ints.length > 3 && chunks.length
        ? chunks.reduce((newStr, chunk) => (
            `${newStr},${chunk}`
        ), ints.slice(0, start)) : ints;
}
