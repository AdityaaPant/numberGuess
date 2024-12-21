function solve(arr) {
	let arr2 = [];
	for (let i = 0; i < arr.length; i++)
		if (arr[i].gender === "Male" && arr[i].age > 18) {
			arr2.push(arr[i]);
		}

	return arr2;
}
const users = [
	{
		name: "Aditya ",
		age: 19,
		gender: "Male",
	},
	{
		name: "Ayush ",
		age: 21,
		gender: "Male",
	},
	{ name: "Kirti ", age: 19, gender: "Female" },
];
const answer = solve(users);
console.log(answer);
