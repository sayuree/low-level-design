import {VehicleType} from "./Vehicle";
import {ParkingSpot} from "./ParkingSpot";

export class Level {
    private spots: ParkingSpot[];
    private floor: number;
    // Distribute spots by 60-30-10 among cars, motorcycles and trucks
    constructor(floor: number, spotsNumber: number) {
        this.floor = floor;
        this.spots = new Array(spotsNumber);
        const carRatio = 0.6;
        const motorcycleRatio = 0.3;
        const truckRatio = 0.1;
        const carSpotsNum = carRatio * 100,
            motorcycleSpotsNum = motorcycleRatio * 100,
            truckSpotsNum = truckRatio * 100;
        for(let i = 0; i < carSpotsNum; i++) {
            this.spots[i] = new ParkingSpot(i, VehicleType.CAR, true);
        }

        for(let i = carSpotsNum; i < motorcycleSpotsNum; i++) {
            this.spots[i] = new ParkingSpot(i, VehicleType.MOTORCYCLE, true);
        }

        for(let i = carSpotsNum + motorcycleSpotsNum; i < truckSpotsNum; i++) {
            this.spots[i] = new ParkingSpot(i, VehicleType.TRUCK, true);
        }
    }

    public parkVehicle(vehicle) {

    }

    public unparkVehicle() {}
}