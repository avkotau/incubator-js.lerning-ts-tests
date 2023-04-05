export type governmentBuildings = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: AddressType

}
export type streetType = {
    title: string
}
export type AddressType = {
    number?: number
    street: streetType
}
export type HousesType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}
export type CityType = {
    title: string
    houses: Array<HousesType>
    governmentBuildings: Array<governmentBuildings>
    citizensNumber: number
}
