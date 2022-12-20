export const getSwapiServer = async(url) => {
	const result = await fetch(url)
	try {
		if(!result.ok) {
			console.log('ERROR: result status');
			return false;
		}		
	} catch (error) {
		console.log("ERROR: cath error");
		return false;
	}
	return await result.json();
} 











