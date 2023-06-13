//Принимает sum целое положительное число (неопределенное кол-во) и возвращпет их сумму

//..nums соберает все в массив (rest оператор)
export const sum = (...nums: Array<number>): number => {
    return nums.reduce((acc, el) => acc + el)
}

//Принимает три параметра длинны сторон трекугольника
//'10' равносторонний
//'01' равнобедренный
// '11' обычный
// '00' такого треугольника не существует

export const getTriangleType = (a: number, b: number, c: number): string => {
    if (a === b && a === c) {
        return '10'
    } else if ((a === b && a !== c && a + b > c && a + c > b && b + c > a)
        || (a === c && b !== a && a + b > c && a + c > b && b + c > a)
        || (b === c && b !== a && a + b > c && a + c > b && b + c > a)) {
        return '01'
    } else if (a !== b && a !== c && b !== c) {
        return '11'
    } else {
        return '00'
    }

}
//Принимает целое число и возвращает сумму цифр этого числа
export const getSum = (number: number): number => {
    let arr = Array.from(String(number), Number)
    return arr.reduce((acc, el) => acc + el)
}

//Принимает массив чисел. Если сумма чисел с четными индексами (0 как четный индекс)
// больше суммы чисел с нечетными индексами!! то ф-ция возвращает true иначе false
export const isEventIndexSumGreater = (arr: Array<number>): boolean => {
    let even = arr[0];
    let odd = arr[1];
    for (let i = 0; i < arr.length/2; i++) {
        even += arr[i+2];
        odd += arr[i++];
    }
    return even > odd
}

//Принимает два параметра площадь круга и плащать квадрата. Ф-ция возвращает true если груг не
//будт выступать за пределы квадрата в противном случае false. Центры совпадают
export const isSquareGreater = (areaCr: number, areaSq: number): boolean => {
    return areaSq > areaCr
}

//Принимает целое число натуральное (сумму)
//Возвращает массив с наименьшим колличеством купюр, которыми можно выдать эту сумму
//Доступны банкноты const banknotes = [1000,500,100,50,20,10,5,2,1]
//Колличество банкнот каждого номинала не ограничено

export const getBanknoteList = (amountOfMoney: number): Array<number> => {
    return [1]
}
