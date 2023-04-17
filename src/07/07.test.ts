
test('', () => {
    let houses = {
        id: 1,
        buildedAt: 2012,
        repaired: false,
        city: 'Minsk',
        address: [{ul: 'Nezavisimosty'}, {ul: 'Pobeda'}, {ul: 'Zhukov'}]
    }

    const {id, buildedAt} = houses
    const [, obj2, obj3] = houses.address

    expect(buildedAt).toBe(2012)
    expect(id).toBe(1)
    expect(obj3.ul).toBe('Zhukov')
    expect(obj2).toStrictEqual({ul: 'Pobeda'})
})

export {}
