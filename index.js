var expense = prompt('Enter quantity of your money');
var a = (250 + 500) * 11191.00;
var b = 120 * 11747.42;

var sum = a + b;

if (expense >= sum) {
    console.log('Oq yo’l, Alisher!');
}

else if (expense < sum) {
    console.log('Alisher, ozgina sabr qilish kerak bo’lar ekan.');
}

else {
    console.log('error')
}


console.log(`Umumiy ketadigan xarajatlar: ${sum}`)
