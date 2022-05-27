// Alur Logika

// Conditional Statement
console.log(" ");
const hpSekarang = 255;

if (hpSekarang > 100) {
    console.log("Battery enough");
    
} else {
    console.log("Low Battery");
}
console.log(" ");




/*
if() {

}
else if() {

}
else if() {

}
else
*/



const firstArray = new Array();

firstArray.push(1);
firstArray.push(2);
firstArray.push(3);

console.log(firstArray);
console.log(" ");

const i = 16;

if (i < 6) {
    console.log(firstArray[1]);
    } else {
        console.log(firstArray[0]);
    }
    console.log(" ");


const orderSource = 1;

if (orderSource === 1) {
    console.log("Send event to dp service");
}
else if (orderSource === 2) {
    console.log("Send event to last mile driver");
}
else if (orderSource === 3) {
    console.log("Send event back to shipper");
}
else {
    console.log("Order is invalid");
}
console.log(" ");


// Read list of event
// Search event `Assigned to DP`
/*
const arrayTwo = new Array();

arrayTwo.push("Fully Integrated Order");
arrayTwo.push("Semi Integrated Order");
arrayTwo.push("Operator");

console.log(" ");

console.log(arrayTwo);

const eventReader = true;
const parcelSource = 

if (eventReader = true) {
    console.log("Insert to table -> order source = " + parcelSource);

}
*/


// 1a - Switch

const trafficLight = 0;

switch (trafficLight) {
    case 0:
        console.log("Stop please");
        break;
    case 1:
        console.log("Slow down");
        break;
    case 2:
        console.log("Go!");
        break;
    default: 
        console.log("Call authority. Traffic light is broken");
        break;
}

console.log(" ");



const failedReason = 100;

switch (failedReason) {
    case 0:
        console.log("Failed order - Send event to core");
        break;
    case 1:
        console.log("Failed order - Send event to core - Send event to DP");
        break;
    default:
        console.log("Order response invalid");
        break;
}
console.log(" ");




// Truthy x Falsely
const sebuahObject = {
    kucing: "MAMALIA"
}

const stringTF = " ";

const arrayTF = new Array();

arrayTF.push(1);
arrayTF.push(2);
arrayTF.push(3);
arrayTF.push(4);

const a = 1;

const b = 0;

if (!sebuahObject) {
    console.log("TRUE");
}
else {
    console.log("FALSE");
}
console.log(" ");


// Iterasi

// for
for (let indexSekarang = 0; indexSekarang <= arrayTF.length; indexSekarang++) {

    console.log(arrayTF[indexSekarang]);

}
console.log(" ");

// while
let indexSekarangOy = arrayTF.length - 1;

while (indexSekarangOy >= 0) {
    console.log(arrayTF[indexSekarangOy]);
    indexSekarangOy--;
    
}
console.log(" ");

// break

let total = 0;
let angka = 1;
let angkaTerakhir = 100;

while (true) {
    total += angka;
    total += 1;

if (total > angkaTerakhir) {
    break;
    }
}

console.log("Hasil penjumlahan semua angka sampai 100 =" + total);
console.log(" ");