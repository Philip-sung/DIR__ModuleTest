const MaterialType = {
  Paper: "Paper",
  Wood: "Wood",
} as const;
type MaterialType = keyof typeof MaterialType;

type FabricationType<T extends MaterialType> = {
  material: T;
  price: number;
  time: number;
};

type WoodFabrication = FabricationType<"Wood"> & {
  species: string;
};

type PaperFabrication = FabricationType<"Paper"> & {
  size: [number, number];
};

type Fabrication = WoodFabrication | PaperFabrication;

const func = (fabrication: Fabrication) => {
  if (fabrication.material === "Wood") {
    fabrication.species; // 추론이 가능하다.
  }
};
