import {Level} from "./Level";
import {VehicleType} from "./Vehicle";

export class ParkingLot {
    private static instance: ParkingLot;
    levels: Level[];

    constructor() {

    }

    public static getInstance() {
        if(ParkingLot.instance == null) {
            ParkingLot.instance = new ParkingLot();
        }
        return ParkingLot.instance;
    }

    public parkVehicle(vehicle: VehicleType): void {

    }

    public unparkVehicle(vehicle: VehicleType): void {

    }
}