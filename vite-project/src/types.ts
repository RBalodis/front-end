export interface ApiResponse {
  results: {
    id: number;
    name: string;
    status: string;
    species: string;
    image: string;
    location: {
      name: string;
    };
  }[];
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  image: string;
  location: {
    name: string;
  };
}

