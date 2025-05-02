import {Vehicle, VehicleType} from "./Vehicle";

export class Car extends Vehicle {
    constructor(licensePlate: string) {
        super(VehicleType.CAR, licensePlate);
    }
}