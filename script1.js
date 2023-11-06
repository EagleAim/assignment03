// 1. Write code to display a triangle in the console that looks similar to the following.
// You should use a loop to accomplish this.
// #
// ##
// ###
// ####
// ###
// ##
// #

let n=4;
let x=3;
for (let i = 1; i <= n; i++) { 
    let str = "#"; 
    console.log(str.repeat(i)); 
}

for (let i = x; i >= 1; i--) {
    let str ="#";
    console.log(str.repeat(i));
}
