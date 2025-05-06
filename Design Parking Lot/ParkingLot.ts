import {Level} from "./Level";
import {Vehicle, VehicleType} from "./Vehicle";

export class ParkingLot {
    private static instance: ParkingLot;
    private levels: Level[];

    constructor() {
        this.levels = [];
    }

    public static getInstance() {
        if(ParkingLot.instance == null) {
            ParkingLot.instance = new ParkingLot();
        }
        return ParkingLot.instance;
    }

    public parkVehicle(vehicle: Vehicle): boolean {
        for(let level of this.levels) {
            if(level.parkVehicle(vehicle)) {
                return true;
            }
        }
        return false;
    }

    public unparkVehicle(vehicle: Vehicle): boolean {
        for(let level of this.levels) {
            if(level.unparkVehicle(vehicle)) {
                return true;
            }
        }
        return false;
    }
}