export type PersonType = {
    name: string
    hear: number
    address: {
        city: string
    }
}

export type Laptop = {
    title: string
}

export type LaptopPerson = PersonType & {
    laptop : Laptop
}


export function makeHairdresser(person: PersonType, power: number) {
    return {
        ...person,
        hear: person.hear / power
    }
}

export function moveUser(person: LaptopPerson, city: string) {
    return {
        ...person,
        address: {
            ...person.address,
            title: city
        },
    }
}

export function updateLaptopName(person: LaptopPerson, laptopInfo: string) {
    return {
        ...person,
        laptop: {
            ...person.laptop,
            title: laptopInfo
        },
    }
}
