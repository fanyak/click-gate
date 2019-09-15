const init = require('./counter');

test('when all the clicked requests have been resolved expect initial values for counter and loading', 
	async () => {

	const {onClick, getValues} = init();
	const first = onClick();
	const second = onClick();
	const third =  onClick();
	const fourth = onClick();

	const resolved = await Promise.all([first, second, third, fourth]);

	expect(getValues()).toStrictEqual({counter: 0, loading: false})


});