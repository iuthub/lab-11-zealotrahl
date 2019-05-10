document.getElementById("bigger-btn").addEventListener("click", () => {
	document.getElementById("text-in").style.fontSize = "24pt";
});

let bling = document.getElementById("bling");
let text_in = document.getElementById("text-in");

function jsUcfirst(string){
	return string.charAt(0).toUpperCase() + string.slice(1);
}

bling.addEventListener("click", () => {
	
	if(bling.checked){
		text_in.style.fontWeight = "bold";
		text_in.style.textDecoration = "underline blink overline";
		text_in.style.color = "green";
		text_in.style.fontStyle = "italic";
	}else{
		text_in.style.fontWeight = "normal";
		text_in.style.textDecoration = "none";
		text_in.style.color = "black";
	}
});

document.getElementById("snoop").addEventListener("click", () => {
	if(text_in.value.length){
		text_in.value = jsUcfirst((text_in.value.split(" "))[0]) + (text_in.value.split(" ").slice(1));
		text_in.value = text_in.value + "!";
		let a = text_in.value.split(".");

		for(i = 0; i < a.length;i++){
			a[i] = a[i] + "-izzle";
		}

		text_in.value = a.join(".");
	}
});