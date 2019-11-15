interface Name {
  title: string;
  first: string;
  last: string;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface Timezone {
  offset: number;
  description: string;
}

interface Location {
  street: string;
  city: string;
  state: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
}

interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

interface Dob {
  date: Date;
  age: number;
}

interface Registered {
  date: Date;
  age: number;
}

interface Id {
  name: string;
  value: string;
}

interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface User {
  gender: 'male' | 'female';
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Registered;
  phone: number;
  cell: number;
  id: Id;
  picture: Picture;
  nat: string;
}
