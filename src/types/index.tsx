export interface State {
  name: string;
  bonus: string;
  insurance: string;
  buttonName: string;
  img: string;
}

export interface Distance {
  name: string;
  abbreviatioin: string;
  latitude: number;
  longitude: number;
}

export interface IPINFO {
  ip: string;
  city: string;
  region: string;
  country: string;
  loc: string;
  org: string;
  timezone: string;
  readme: string;
}

export interface PROPS {
  states: State[];
  nearState: number;
}
