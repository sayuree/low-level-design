import {Vehicle, VehicleType} from "./Vehicle";
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

        for(let i = carSpotsNum + 1; i < motorcycleSpotsNum; i++) {
            this.spots[i] = new ParkingSpot(i, VehicleType.MOTORCYCLE, true);
        }

        for(let i = carSpotsNum + motorcycleSpotsNum + 1; i < truckSpotsNum; i++) {
            this.spots[i] = new ParkingSpot(i, VehicleType.TRUCK, true);
        }
    }

    public parkVehicle(vehicle: Vehicle): boolean {
        for(let i = 0; i < this.spots.length; i++) {
            if(vehicle.getType() == this.spots[i].getVehicleType() && this.spots[i].isSpotAvailable()) {
                this.spots[i].parkVehicle(vehicle);
                return true;
            }
        }
        return false;
    }

    public unparkVehicle(vehicle: Vehicle): boolean {
        for(let i = 0; i < this.spots.length; i++) {
            if(!this.spots[i].isSpotAvailable() && this.spots[i].equalsParkedVehicle(vehicle)) {
                this.spots[i].unparkVehicle(vehicle);
                return true;
            }
        }
        return false;
    }
}