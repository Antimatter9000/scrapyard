export default function addCommas(val) {
	const [ ints, decs ] = val.toString().split('.');
	const start = ints.length % 3;
	const chunks = ints.slice(start).match(/[0-9]{3}/g);
	const newInts = chunks.reduce((str, chunk) => {
		return `${str},${chunk}`;
	}, ints.slice(0, start));
	return decs ? `${newInts}.${decs}` : newInts;
}
