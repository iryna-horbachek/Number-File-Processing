const fs = require('fs');

const dataPath = '10m.txt';

async function readContent(dataPath) {
    try {
        const dataContent = await fs.promises.readFile(dataPath, 'utf-8');
        return dataContent.split('\n');
    } catch(error) {
        console.error('Виникла помилка', err);
    }
}

function findMaxMinNumbers(numbers) {
    let maxInteger = Number.MIN_SAFE_INTEGER;
    let minInteger = Number.MAX_SAFE_INTEGER;

    numbers.forEach((num) => {
        const lines = num.split(' ').map(Number);
        const maxLine = Math.max(...lines);
        const minLine = Math.min(...lines);

        if (maxLine > maxInteger) {
            maxInteger = maxLine;
        }
        if (minLine < minInteger) {
            minInteger = minLine;
        }
    })
    return {maxInteger, minInteger};
}

function findMedianOfNumbers(numbers) {
    let nums = [];

    numbers.forEach((num) => {
        const items = num.split(' ').map(Number);
        nums.push(...items);
    })

    const sortedItems = nums.sort((a, b) => a - b);
    const lengthOfItems = sortedItems.length;

    if(lengthOfItems % 2 === 0) {
        const firstNumber = sortedItems[lengthOfItems / 2 -1];
        const secondNumber = sortedItems[lengthOfItems / 2];
        return (firstNumber + secondNumber) / 2;
    } else {
        const middleNumber = sortedItems[Math.floor(lengthOfItems / 2)];
        return middleNumber;
    }
}

function findAvarageValue(numbers) {
    let sum = 0;
    let amount = 0;

    numbers.forEach((num) => {
        const eachLine = num.split(' ').map(Number);
        sum += eachLine.reduce((acc, value) => acc + value, 0);
        amount += eachLine.length;
    });

    return sum / amount;
}

async function findAllValues(dataPath) {
    const fileContent = await readContent(dataPath);

    const { maxInteger, minInteger } = findMaxMinNumbers(fileContent);
    const medianValue = findMedianOfNumbers(fileContent);
    const avarageValue = findAvarageValue(fileContent);

    console.log('Максимальне ціле число:', maxInteger);
    console.log('Мінімальне ціле число:', minInteger);
    console.log('Медіана чисел:', medianValue);
    console.log('Середнє арифметичне значення:', avarageValue);
}

findAllValues(dataPath);




      
