// interface IVehicle{
//   noOFwheels:HTMLInputElement;
//   noOfSeats:HTMLInputElement;
//   //calculatePrice():number;
// }
// class Vehicle{
//   noOFSeats:number;
//   noOFWheels:number;
//   constructor(seat:number,wheel:number){
//       this.noOFSeats=seat;
//       this.noOFWheels=wheel;
//   }
import {Vehicle} from "./vehicle";
enum CARTYPE
      {
          SUV=500000,
          MPV=1000000,
          HATCHBACK=300000,
          SEDAN=400000
}
enum CARBRAND
{
          MARUTISUZUKI=1,
          HYUNDAI=2,
          BMW=3,
          AUDI=4,
          FERARI=5,
          MERCEDES=6
  
}

class car extends Vehicle
{
    type:CARTYPE;
    brandName:CARBRAND;
    engineType:string;
    model:string;
    dateOfPurchase;
    listOfCarDetail:Array<car>;
    
    
    
    constructor(model:string,type:CARTYPE,brandname:CARBRAND,engineType:string,date:string,seats:number,wheel:number,listOfCarDetail:Array<car>){
      super(seats,wheel);
      this.model=model;
      this.type=type;
      this.brandName=brandname;
      this.engineType=engineType;
      this.dateOfPurchase=date;
      this.listOfCarDetail = listOfCarDetail;
    }
    
     
        addinfo() {
          this.listOfCarDetail.push(this);
          this.listOfCarDetail.forEach(element => {
            let  table: HTMLTableElement = <HTMLTableElement> document.getElementById("myTable");
            let totalRow = table.rows.length;
            
            let row = table.insertRow(totalRow);
            let cell1 = row.insertCell(0);
            let cell2 = row.insertCell(1);
            let cell3 = row.insertCell(2);
            let cell4 = row.insertCell(3);
            let cell5 = row.insertCell(4);
            let cell6 = row.insertCell(5);
            let cell7 = row.insertCell(6);
            let cell8= row.insertCell(7);
            let cell9= row.insertCell(8);

            cell1.innerHTML = totalRow.toString();
            cell2.innerHTML = element.model;
            cell3.innerHTML = element.noOFWheels.toString();
            cell4.innerHTML = element.noOFSeats.toString();
            cell5.innerHTML = (CARTYPE[element.type]);
            cell6.innerHTML = (CARBRAND[element.brandName]);
            cell7.innerHTML = element.engineType;
            cell8.innerHTML = element.dateOfPurchase; 
            cell9.innerHTML = element.type.toString(); 
             
          });

                 
        //  document.write(this.model);
        //  document.write(this.noOFWheels.toString());
        //  document.write(this.noOFSeats.toString());
        //  document.write(CARTYPE[this.type]);
        //  document.write(CARBRAND[this.brandName]);
        //  document.write(this.engineType)
        //  document.write(this.dateOfPurchase)
        //  console.log(this.model);
        //  console.log(CARTYPE[this.type]);
        
  }  
}   
   




function getValue()
      {
        
        let seat=(document.getElementById("seat") as HTMLInputElement).value;
        let wheel=(document.getElementById("wheel") as HTMLInputElement).value;
        let type =(document.getElementById("type") as HTMLInputElement);
        let brandname=(document.getElementById("brand")as HTMLInputElement);
        let model=(document.getElementById("model")as HTMLInputElement).value;
        let engine=(document.getElementById("engine")as HTMLInputElement).value;
        let dateofpurchase=(document.getElementById("date")as HTMLInputElement).value;
        let vehicle = new Vehicle(parseInt(seat),parseInt(wheel));
        
        let carobj=new car(
          model,
          CARTYPE[type.value],
          CARBRAND[brandname.value],
          engine,
          dateofpurchase,
          vehicle.noOFSeats,
          vehicle.noOFWheels,
          Array<car>()
        );            
        carobj.addinfo();
      }