import {VehicleType} from "./Vehicle";

export class ParkingSpot {
    private spotNumber: number;
    private vehicleType: VehicleType;
    private isAvailable: boolean;

    constructor(spotNumber: number, vehicleType: VehicleType, isAvailable: boolean) {
        this.spotNumber = spotNumber;
        this.vehicleType = vehicleType;
        this.isAvailable = isAvailable;
    }
}
