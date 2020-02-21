list = ["cat", "dog", "monkey", "cat", "fish", "cattle"];

value = "cat"

flag = false;

for (i = 0; i < list.length; i = i + 1){

	if (value === list[i]) {
		console.log("YES");
		flag = true;
		break;
	}
	else {
		console.log("NO")
	}
}

if (flag === true) {
	console.log("YES")
}
else {
	console.log("NO")
}