function init() {

	let counter = 0;
	let loading = false;
	let res = '';

	async function onClick() {	
		counter++;
		if(!loading) {
			loading = true;
		}
	   try {
	   	res = await fakeAjax(counter)
	   }
	   finally {
	   	counter--;

	   	if(!counter) {
	   		loading = false;
	   	}

	   }
	   return({counter, loading})
	}

	function fakeAjax(counter) {
		let random = Math.random() * 1000;
		return new Promise(function(resolve, reject) {
			setTimeout(() => {
	          resolve(counter)
			}, random)
		});
	}

	function getValues() {
		return ({counter, loading});
	}

	return {onClick, getValues};
}


module.exports = init;