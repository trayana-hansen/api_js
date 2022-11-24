// async function getData() {
// 	try {
// 		const response = await fetch('http://songbook.local/api/song/7')
// 		const data = await response.json();
// 		const { artist_id, id, title, content } = data;
// 		console.log(data);
// 	} catch (err) {
// 		alert(err)
// 	}
// }
// getData();

let apiData = [];

fetch('http://phpopgave.local/api/song/')

.then(response => 
	response.json()
)
.then(data =>
	console.log(data)
)
.catch((error) => {
	console.error(error);
})
