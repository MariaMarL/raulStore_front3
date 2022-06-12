
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
 
type billType = {
  id?: String,
  productId: String
  amount : number,
  date: String
  providerId : String
}

  export type {providerType, productType, billType}