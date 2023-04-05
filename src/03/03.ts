import { CityType, GovernmentBuildings, HousesType } from "./03_types";

export const addMoneyToBudget = (governmentBuildings: GovernmentBuildings, budgetChanged: number) => {
    return governmentBuildings.budget += budgetChanged
}

export const repairHouse = (houses: HousesType) => {
    return houses.repaired = true
}

export const toFireStaff = (governmentBuildings: GovernmentBuildings, countDecrease: number) => {
    return governmentBuildings.staffCount -= countDecrease
}

export const toHireStaff = (governmentBuildings: GovernmentBuildings, countIncrease: number) => {
    return governmentBuildings.staffCount += countIncrease
}

export const createMessage = (city: CityType) => {
    return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} men`
}
