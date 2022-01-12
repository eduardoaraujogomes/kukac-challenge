import { Vehicle } from "../interface/VehicleRepository";

class Car implements Vehicle {
  model: string;
  year: string;
  doors: number;
  brand: string;

  constructor(model: string, year: string, doors: number, brand: string) {
    this.model = model;
    this.year = year;
    this.doors = doors;
    this.brand = brand;
  }

}

export { Car };


