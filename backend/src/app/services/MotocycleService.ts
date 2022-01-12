import { Vehicle } from "../interface/VehicleRepository";

class Motocycle implements Vehicle {
  model: string;
  year: string;
  brand: string;
  wheels: number;
  passenger: number;

  constructor(model: string, year: string, brand: string, passenger: number) {
    this.model = model;
    this.year = year;
    this.brand = brand;
    this.wheels = 2;
    this.passenger = passenger;
  }
}

export { Motocycle };
