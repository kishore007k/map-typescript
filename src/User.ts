// To Create and Export a Class in TypeScript Create a File with Capitalized Name
import faker from "faker";

export class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor () {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()), // parseFloat converts string to number
      lng: parseFloat(faker.address.longitude())
    }
  }
};