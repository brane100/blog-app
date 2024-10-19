// function go(){
//     alert('Hi!')
//     alert('Hey there!')
//     return 0
// }

// // go()

// function go2(width, height){
//     alert(width)
//     alert(height)
// }

// // go2(12, 43)
// // go2(430, 3)

// function multiply(n1, n2){
//     return n1*n2;
// }

// let pro = multiply(3, 213)

// alert(pro)

//// arrays

 let myList = [234,465,768]
/*
myList.forEach(function(value, index) {
    console.log(value, index)
    alert('I have '+index+' '+value)
});

*/

var times = 0

while (times < 10){
    console.log('Hi '+(times+1)+' friend!')
    times++
}

do {
    console.log('dobro '+times)
    times--
} while(times>0);

for (let index = 0; index < myList.length; index++) {
    console.log(myList[index])
}