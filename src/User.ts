// To Create and Export a Class in TypeScript Create a File with Capitalized Name
import faker from 'faker';
import { CustomMapProps } from './CustomMap';

export class User implements CustomMapProps {
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

  markerContent(): string {
    return `
      <h2>User Name: ${this.name}</h2>
    `;
  }
};