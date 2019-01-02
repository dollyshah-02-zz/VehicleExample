var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Vehicle = /** @class */ (function () {
    function Vehicle(seat, wheel) {
        this.noOFSeats = seat;
        this.noOFWheels = wheel;
    }
    return Vehicle;
}());
var CARTYPE;
(function (CARTYPE) {
    CARTYPE[CARTYPE["SUV"] = 500000] = "SUV";
    CARTYPE[CARTYPE["MPV"] = 1000000] = "MPV";
    CARTYPE[CARTYPE["HATCHBACK"] = 300000] = "HATCHBACK";
    CARTYPE[CARTYPE["SEDAN"] = 400000] = "SEDAN";
})(CARTYPE || (CARTYPE = {}));
var CARBRAND;
(function (CARBRAND) {
    CARBRAND[CARBRAND["MARUTISUZUKI"] = 1] = "MARUTISUZUKI";
    CARBRAND[CARBRAND["HYUNDAI"] = 2] = "HYUNDAI";
    CARBRAND[CARBRAND["BMW"] = 3] = "BMW";
    CARBRAND[CARBRAND["AUDI"] = 4] = "AUDI";
    CARBRAND[CARBRAND["FERARI"] = 5] = "FERARI";
    CARBRAND[CARBRAND["MERCEDES"] = 6] = "MERCEDES";
})(CARBRAND || (CARBRAND = {}));
var car = /** @class */ (function (_super) {
    __extends(car, _super);
    function car(model, type, brandname, engineType, date, seats, wheel, listOfCarDetail) {
        var _this = _super.call(this, seats, wheel) || this;
        _this.model = model;
        _this.type = type;
        _this.brandName = brandname;
        _this.engineType = engineType;
        _this.dateOfPurchase = date;
        _this.listOfCarDetail = listOfCarDetail;
        return _this;
    }
    car.prototype.addinfo = function () {
        this.listOfCarDetail.push(this);
        this.listOfCarDetail.forEach(function (element) {
            var table = document.getElementById("myTable");
            var totalRow = table.rows.length;
            var row = table.insertRow(totalRow);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            var cell3 = row.insertCell(2);
            var cell4 = row.insertCell(3);
            var cell5 = row.insertCell(4);
            var cell6 = row.insertCell(5);
            var cell7 = row.insertCell(6);
            var cell8 = row.insertCell(7);
            var cell9 = row.insertCell(8);
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
    };
    return car;
}(Vehicle));
function getValue() {
    var seat = document.getElementById("seat").value;
    var wheel = document.getElementById("wheel").value;
    var type = document.getElementById("type");
    var brandname = document.getElementById("brand");
    var model = document.getElementById("model").value;
    var engine = document.getElementById("engine").value;
    var dateofpurchase = document.getElementById("date").value;
    var vehicle = new Vehicle(parseInt(seat), parseInt(wheel));
    var carobj = new car(model, CARTYPE[type.value], CARBRAND[brandname.value], engine, dateofpurchase, vehicle.noOFSeats, vehicle.noOFWheels, Array());
    carobj.addinfo();
}
