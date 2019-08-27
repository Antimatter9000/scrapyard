export default function retone(colour, amount) {
	const regex = new RegExp('#[a-fA-F0-9]{6}');
	if (!regex.test(colour)) throw new Error('Colour should have format of # + 6 characters');

	let [ r, g, b ] = colour.match(/[a-f0-9]{2}/gi);

	return '#'
		+ getNewColour(r)
		+ getNewColour(g)
		+ getNewColour(b);

	function getNewColour(c) {
		const multiplier = (100 + amount)/100;
		const newColour = Math.round(parseInt(c, 16) * multiplier);
		return newColour.toString(16);
	}
}
