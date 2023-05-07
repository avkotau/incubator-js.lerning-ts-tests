


let increaseAge = (dataUser: UserType) => {
    return dataUser.age + 1
}

type UserType = {
    name: string
    age: number
    address: {
        title: string
    }
}


test('reference type', () => {

    let user: UserType = {
        name: 'Dima',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }


   expect(increaseAge(user)).toBe(33)

    const superMan = user

    superMan.age = 1000

    expect(increaseAge(superMan)).toBe(1001)


})

test('reference type', () => {

    let user: UserType = {
        name: 'Dima',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }



    const superMan = user

    superMan.address.title = 'Bobruisk'

    expect(user.address.title).toEqual('Bobruisk')
    expect(superMan.address.title).toEqual('Bobruisk')


})




export {}
