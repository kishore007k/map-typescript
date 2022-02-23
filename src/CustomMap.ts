export interface CustomMapProps {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string; // This is a method that returns a string
  color?: string; // This is an optional property
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
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: CustomMapProps.location.lat,
        lng: CustomMapProps.location.lng
      }
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: CustomMapProps.markerContent()
      });

      infoWindow.open(this.googleMap, marker);
    })
  }
}