interface Label {
  color: string;
}

interface Position {
  lat: number;
  lng: number;
}

export interface Marker {
  label: Label;
  position: Position;
  title: string;
}
