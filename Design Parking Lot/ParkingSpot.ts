import {Vehicle, VehicleType} from "./Vehicle";

export class ParkingSpot {
    private spotNumber: number;
    private vehicleType: VehicleType;
    private isAvailable: boolean;
    private parkedVehicle: Vehicle;

    constructor(spotNumber: number, vehicleType: VehicleType, isAvailable: boolean) {
        this.spotNumber = spotNumber;
        this.vehicleType = vehicleType;
        this.isAvailable = isAvailable;
    }

    public getVehicleType(): VehicleType {
        return this.vehicleType;
    }


    public parkVehicle(vehicle: Vehicle) {
        if(this.isAvailable && vehicle.getType() == this.vehicleType) {
            this.parkedVehicle = vehicle;
            return;
        }
        throw new Error("The spot is not available or incorrect vehicle type");
    }

    public unparkVehicle(vehicle: Vehicle) {
        this.parkedVehicle = null;
    }

    public isSpotAvailable(): boolean {
        return this.parkedVehicle == null;
    }

    public equalsParkedVehicle(vehicle: Vehicle): boolean {
        const keys1 = Object.keys(vehicle);
        const keys2 = Object.keys(this.parkedVehicle);

        if(keys1 !== keys2) return false;
        for(let key of keys1) {
            if(vehicle[key] !== this.parkedVehicle[key]) {
                return false;
            }
        }
        return true;
    }
}
