/**
 * Отправляет запрос feth на сервер 
 * @param {STRING} url - url для запроса 
 * @returns {PROMISE} - с результатом запроса
 */
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
	return await result.json()
}; 

export const queryPathUrlFilms = async(url) => {
	const result = await Promise.all(url.map(res => {
		return fetch(res).then(res => res.json())
	}))

	return result;
}








	





	













