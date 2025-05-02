export enum VehicleType {
    CAR,
    MOTORCYCLE,
    TRUCK
}

export abstract class Vehicle {
    private readonly type: VehicleType;
    private licensePlate: string;

    protected constructor(type: VehicleType, licensePlate: string) {
        this.type = type;
        this.licensePlate = licensePlate;
    }

    public getType() {
        return this.type;
    }
}