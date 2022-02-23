interface CustomMapProps {
  location: {
    lat: number;
    lng: number;
  }
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor (divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker (CustomMapProps: CustomMapProps): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: CustomMapProps.location.lat,
        lng: CustomMapProps.location.lng
      }
    });
  }
}