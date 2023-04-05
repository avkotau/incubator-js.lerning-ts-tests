import { CityType, GovernmentBuildings, HousesType } from "./03_types";

export const addMoneyToBudget = (governmentBuildings: GovernmentBuildings, budgetChanged: number) => {
    governmentBuildings.budget += budgetChanged
}

export const demolishHousesOnTheStreet = (city: CityType, streetTitle: string) => {
    city.houses = city.houses.filter(el => el.address.street.title !== streetTitle)
}

export const repairHouse = (houses: HousesType) => {
    houses.repaired = true
}

export const toFireStaff = (governmentBuildings: GovernmentBuildings, countDecrease: number) => {
    governmentBuildings.staffCount -= countDecrease
}

export const toHireStaff = (governmentBuildings: GovernmentBuildings, countIncrease: number) => {
    governmentBuildings.staffCount += countIncrease
}

export const createMessage = (city: CityType) => {

    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} men`
}
