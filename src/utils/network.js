export const getApiServer = async(url) => {
	try {
		const result = await fetch(url);
		if(!result.ok) {
			console.warn("ERRORS: result status")
			return false;
		}
		return await result.json();
	} catch (error) {
		console.warn("ERROR: catch error");
		return false;		
	}	
}































































// export const getApiServer = async(url) => {
// 	try {
// 	const result = await fetch (url);	
// 	if(!result.ok) {
// 		console.warn("ERROR: ", result.status)
// 		return false;
// 	}
// 		return await result.json(); 

// 	} catch (error) {
// 		console.log("ERROR: ", error.message);
// 		return false;		
// 	}	
// }



