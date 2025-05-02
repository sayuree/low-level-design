import {Vehicle, VehicleType} from "./Vehicle";

class MotorCycle extends Vehicle {
    constructor(licensePlate: string) {
        super(VehicleType.MOTORCYCLE, licensePlate);
    }
}