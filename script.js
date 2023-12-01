// Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] 

const arrayNumbers = [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47];
// const arrayNumbers = [-5,-37,-54,-4,-72,-56,-47,-4,-16,-25,-37,-46,-4,-51,-27,-63,-4,-54,-76,-4,-12,-35,-4,-47];
//Знайти суму та кількість позитивних елементів.
const positiveSum = arrayNumbers.reduce((acum, item, index) => {
    if(item > 0){
       acum.sum += item;
       acum.count++;
       return acum; 
    } else return acum;
}, {sum: 0,count: 0} );
console.log(`cумма позитвних елеменів : ${positiveSum.sum}, кількисть : ${positiveSum.count}`);

// Знайти мінімальний елемент масиву та його порядковий номер.
const minValue = arrayNumbers.reduce((min, item, index) => {
    if(item <= min.item){
       min.item = item;
       min.index = index;
       return min; 
    } else return min;
}, {item: arrayNumbers[0],index: 0});
console.log(`мінімальний елемент : ${minValue.item}, його номер : ${minValue.index}`);

// Знайти максимальний елемент масиву та його порядковий номер.
const maxValue = arrayNumbers.reduce((max, item, index) => {
    if(item >= max.item){
       max.item = item;
       max.index = index;
       return max; 
    } else return max;
}, {item: arrayNumbers[0],index: 0});
console.log(`максимальний елемент : ${maxValue.item}, його номер : ${maxValue.index}`);

// Визначити кількість негативних елементів.
// Решил использовать тут немного другой подход идея фильтруем массив с отрициательными значения получаем новый и вычисляем его длину что равно количеству элементов
const negValueCount= arrayNumbers.filter(number => { return number < 0; }).length;
console.log(`кількисть негативних елементів: ${negValueCount}`);

// Знайти кількість непарних позитивних елементів.
// Знайти кількість парних позитивних елементів.
// Знайти суму парних позитивних елементів.
// Знайти суму непарних позитивних елементів
// Знайти добуток позитивних елементів.

// Решил реализовать все в одном методе
const positveResult = arrayNumbers.reduce((accum, item) => {
    if (item > 0) {
        //Cчитаем количество позитвных елементов
        accum.posNumCount++;
        //Cрахуемся от выхода за пределы безопасного числа при умножении
        const multValue = BigInt(accum.multPosNum) * BigInt(item);
        //Делаем обратные преобразования если не выходим за пределы после умножения иначе записываем BigInt
        if ( Number(multValue) <= Number.MAX_SAFE_INTEGER){
            accum.multPosNum = Number(multValue);
        } else {
            accum.multPosNum = multValue;
        }
        //Проверяем на парность позитивного числа и проводим операции 
        if(item % 2 === 0){
            accum.pairedNumSum += item;
            accum.pairedNumCount++;
            return accum; 
        } else {
            accum.notPairedNumSum += item;
            accum.notPairedNumCount++;
            return accum;
        }
    } else return accum;
}, {pairedNumSum: 0, pairedNumCount: 0, notPairedNumSum: 0, notPairedNumCount: 0, multPosNum: 1, posNumCount: 0});

// кількість непарних позитивних елементів.
console.log("кількість непарних позитивних елементів : "+ positveResult.notPairedNumCount);
//кількість парних позитивних елементів.
console.log("кількість парних позитивних елементів : "+ positveResult.pairedNumCount);
// сума парних позитивних елементів
console.log("сума парних позитивних елементів : "+ positveResult.pairedNumSum);
// сума непарних позитивних елементів
console.log("сума непарних позитивних елементів : "+ positveResult.notPairedNumSum);

// Знайти добуток позитивних елементів.
// Перевіряем чубуло в мисиві хоча би одне позитивне число інкше добуток дорівнює 0
if(positveResult.posNumCount > 0){
    console.log(`добуток позитивних елементів дорівнює : ${positveResult.multPosNum}`);
} else console.log(`позитивних елемнтів не знайдено добуток дорівнює : 0`);



let maxElement = arrayNumbers[0]; // Предполагаем, что первый элемент максимальный
// Знайти найбільший серед елементів масиву, ост альні обнулити.
// Обнуляем все элементы, кроме максимального, и находим максимальный элемент
// Придумал только такой код как мутировать масив в одном цикле и сохранить максимальное значение
for (let i = 1; i < arrayNumbers.length; i++) {
    if (maxElement > arrayNumbers[i]){
        arrayNumbers.splice(i,1,0);
    } else {
       maxElement = arrayNumbers[i];
    }
    if (arrayNumbers.length === i+1){
        arrayNumbers.fill(0, 0, arrayNumbers.indexOf(maxElement));
    }
}
//Вывводим мутированный массив с максимальным значением
console.log(arrayNumbers);
