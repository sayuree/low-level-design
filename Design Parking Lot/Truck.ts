import {Vehicle, VehicleType} from "./Vehicle";

class Truck extends Vehicle {
    constructor(licensePlate: string) {
        super(VehicleType.TRUCK, licensePlate);
    }
}