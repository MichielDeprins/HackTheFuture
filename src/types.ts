export type AnimalElement = {
  id: number;
  name: string;
  type: AnimalType;
  gender: Gender;
  weight: number;
  length: number;
  age: number;
  longitude: number;
  latitude: number;
  image: string;
};

export type Gender = "MALE" | "FEMALE";

export type AnimalType = "ELEPHANT" | "RHINO" | "GIRAFFE";

export type Drone = {
  id: number;
  name: string;
  altitude: number;
  range: number;
  longitude: number;
  latitude: number;
  image: string;
};
