import { ActionType, div, mult, simpleSalaryReducer, StateType, sub, sum } from "./11";

test('sum', () => {
    expect(sum(800, 200)).toBe(1000)
});

test('sub', () => {
    expect(sub(1000, 200)).toBe(800)
});

test('div', () => {
    expect(div(1500, 2)).toBe(750)
});

test('mult', () => {
    expect(mult(1000, 2)).toBe(2000)
});

//  type: 'SUM' | 'SUB' | 'DIV' | 'MULT'
test('case sum of salaryReducer', () => {
    const salary: StateType = 800;
    const action: ActionType = {
        type: 'SUM',
        n: 200
    }

    expect(simpleSalaryReducer(salary, action)).toBe(1000)
});

test('case sub of salaryReducer', () => {
    const salary: StateType = 1000;
    const action: ActionType = {
        type: 'SUB',
        n: 200
    }
    expect(simpleSalaryReducer(salary, action)).toBe(800)
})

test('case div of salaryReducer', () => {
    const salary: StateType = 1500;
    const action: ActionType = {
        type: 'DIV',
        n: 2
    }
    expect(simpleSalaryReducer(salary, action)).toBe(750)
})

test('case mult of salaryReducer', () => {
    const salary: StateType = 1000;
    const action: ActionType = {
        type: 'MULT',
        n: 2
    }
    expect(simpleSalaryReducer(salary, action)).toBe(2000)
})

