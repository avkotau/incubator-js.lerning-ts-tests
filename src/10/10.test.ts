import { LaptopPerson, makeHairdresser, moveUser, PersonType, updateLaptopName } from "./10";

test('change haircut', () => {

    const person: PersonType= {
        name: 'Alex',
        hear: 32,
        address: {
            city: 'Minsk'
        }
    }

    const copy = makeHairdresser(person, 2)

    expect(person.hear).toBe(32)
    expect(copy.hear).toBe(16)
});


test('change city', () => {

    const person: LaptopPerson= {
        name: 'Alex',
        hear: 32,
        address: {
            city: 'Minsk'
        },
        laptop: {
            title: 'Acer'
        }
    }

    const copy = moveUser(person, 'Legnica')


    expect(person).not.toBe(copy)
    expect(person.name).toBe(copy.name)
    expect(person.address).not.toBe(copy.address)
    expect(person.laptop).toBe(copy.laptop)

})


test('upgrade user laptop to Macbook', () => {

    const person: LaptopPerson= {
        name: 'Alex',
        hear: 32,
        address: {
            city: 'Minsk'
        },
        laptop: {
            title: 'Acer'
        }
    }

    const copy = updateLaptopName(person, 'MackBook')


    expect(person).not.toBe(copy)
    expect(person.name).toBe(copy.name)
    expect(person.address).toBe(copy.address)
    expect(person.laptop).not.toBe(copy.laptop)
    expect(person.laptop.title).toBe('Acer')
    expect(copy.laptop.title).toBe('MackBook')

})
