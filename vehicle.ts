// export interface IVehicle{
//     noOFwheels:number;
//     noOfSeats:number;
//     //calculatePrice():number;
// }
export class Vehicle{
    noOFSeats:number;
    noOFWheels:number;
    constructor(seat:number,wheel:number){
        this.noOFSeats=seat;
        this.noOFWheels=wheel;
    }
}