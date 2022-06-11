
type providerType = {
    id?: String,
    name: String,
    dni: String,
    phone: String
  }

  type productType = {
    id?: String,
    name: String,
    description: String,
    unitsLeft: number,
    maxUnits: number,
    minUnits: number,
    price: number,
    providerName: String
  }
  

  export type {providerType, productType}