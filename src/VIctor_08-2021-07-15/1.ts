//Принимает sum целое положительное число (неопределенное кол-во) и возвращпет их сумму

//..nums соберает все в массив (rest оператор)
export const sum = (...nums: Array<number>): number => {
    return nums.reduce((acc, cur) => acc + cur)
}

//Принимает три параметра длинны сторон трекугольника
//'10' равносторонний
//'01' равнобедренный
// '11' обычный
// '00' такого треугольника не существует

export const getTriangleType = (a: number, b: number, c: number): string => {
    let sidesTriangle = a === b && b === c && b === c
    let notExist = a + b < c || b + c < a || a + c < b
    if (a !== b && a !== c && b !== c) {
        return '11'
    } else if (notExist) {
        return '00'
    } else if (!sidesTriangle) {
        return '01'
    } else if (sidesTriangle) {
        return '10'
    }
    return ''
}

//Принимает целое число и возвращает сумму цифр этого числа
export const getSum = (number: number): number => {
    let arrNum = number.toString().split('');
    return arrNum.reduce((acc, cur) => +acc + +cur, 0)
}

//Принимает массив чисел. Если сумма чисел с четными индексами (0 как четный индекс)
// больше суммы чисел с нечетными индексами!! то ф-ция возвращает true иначе false
export const isEventIndexSumGreater = (arr: Array<number>): boolean => {
    let even = 0
    let odd = 0
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0 || i === 0) {
            even += arr[i]
        } else {
            odd += arr[i]
        }
    }
    return even > odd
}

//Принимает два параметра площадь круга и плащать квадрата. Ф-ция возвращает true если груг не
//будт выступать за пределы квадрата в противном случае false. Центры совпадают
export const isSquareGreater = (areaCr: number, areaSq: number): boolean => {

    let radius = Math.sqrt(areaCr / Math.PI);

    // Вычисляем длину стороны квадрата
    let sideLength = Math.sqrt(areaSq);

    // Проверяем, помещается ли круг внутри квадрата
    return radius * 2 <= sideLength
}

//Принимает целое число натуральное (сумму)
//Возвращает массив с наименьшим колличеством купюр, которыми можно выдать эту сумму
//Доступны банкноты const banknotes = [1000,500,100,50,20,10,5,2,1]
//Колличество банкнот каждого номинала не ограничено
const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
export const getBanknoteList = (amountOfMoney: number): Array<number> => {
    let result = [];
    let difference = amountOfMoney
    for (let i = 0; i < banknotes.length;) {
        if (difference === 0) return result
        if (difference % 1 === 0 && difference >= 0) {
            if ((difference - banknotes[i]) >= 0) {
                difference = difference - banknotes[i];
                result.push(banknotes[i])
            } else {
                i++
            }
        }
    }
    return result
}
