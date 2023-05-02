const arrStudents = ['Paolo', 'Giulia', 'Marco', 'Pallino'];

// for (let i = 0; i < arrStudents.length; i++) {
// 	const student = arrStudents[i];
// 	console.log(student);
// }

// for (const student of arrStudents) {
// 	console.log(student);
// }

// arrStudents.forEach((student, i, arr) => console.log(student, i, arr));

// arrStudents.forEach(myCallback);

// console.log('Fatto con il for');
// for (let i = 0; i < arrStudents.length; i++) {
// 	myCallback(arrStudents[i], i, arrStudents);
// }

// function myCallback(valore, index, array) {
// 	console.log(index, valore);
// }

// javascript chiama la callback in questo modo:
// myCallback(elemento, indice, array)
// con i dati veri diventa:
// myCallback('Paolo', 0, ['Paolo', 'Giulia', 'Marco'])
// myCallback('Giulia', 1, ['Paolo', 'Giulia', 'Marco'])
// myCallback('Marco', 2, ['Paolo', 'Giulia', 'Marco'])



// const cats = [
// 	{
// 		name: 'Jerry',
// 		color: 'gray',
// 	},
// 	{
// 		name: 'Felix',
// 		color: 'black and white',
// 	},
// 	{
// 		name: 'Garfield',
// 		color: 'orange',
// 	},
// ];

// cats.forEach(printCatName);

// function printCatName(cat) {
// 	console.log(cat.name);
// }

// cats.forEach(function(cat) {
// 	console.log(cat.name);
// })

// let forEachVariable = cats.forEach(cat => console.log(`${cat.name}`));
// console.log(forEachVariable);



// let newArr = [];
// for (let i = 0; i < arrStudents.length; i++) {
// 	const student = arrStudents[i];
// 	newArr.push(student.toUpperCase());
// }
// console.log('array originale', arrStudents);
// console.log('nuovo array', newArr);

// let arrLenghts = [];
// for (let i = 0; i < arrStudents.length; i++) {
// 	const student = arrStudents[i];
// 	arrLenghts.push(student.length);
// }
// console.log('array lunghezze', arrLenghts);

// let arrLenghtsForEach = [];
// arrStudents.forEach(student => arrLenghtsForEach.push(student.length))
// console.log('array lunghezze', arrLenghtsForEach);



// const arrLenghtsMap = arrStudents.map(student => student.length);
// console.log(arrLenghtsMap);
// se la funzione callback non ha un return il risultato e': [undefined, undefined, undefined]




// ['Paolo', 'Giulia', 'Marco']  ----->  ['Giulia']   risultato con i nomi che hanno piu' di 5 lettere

let arrFilteredNames = [];
for (let i = 0; i < arrStudents.length; i++) {
	const student = arrStudents[i];
	if (student.length > 5) {
		arrFilteredNames.push(student);
	}
}
console.log('elementi con piu\' di 5 lettere', arrFilteredNames);


let arrFilteredNamesForEach = [];
arrStudents.forEach(student => {
	if (student.length > 5) {
		arrFilteredNamesForEach.push(student);
	}
});
console.log('elementi con piu\' di 5 lettere', arrFilteredNamesForEach);


const arrFilteredFilter = arrStudents.filter(student => student.length > 5);
console.log(arrFilteredFilter);


const numeri = [1, 2, 3, 4, 5];
const pari = numeri.filter(numero => numero % 2 === 0);
// const pari = numeri.filter(numero => !(numero % 2));  // 0, 1
console.log(pari);
