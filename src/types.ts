
type providerType = {
    id?: string,
    name: string,
    dni: string,
    phone: string
  }

type productType = {
  id?: string,
  name: string,
  description: string,
  unitsLeft: number,
  maxUnits: number,
  minUnits: number,
  price: number,
  providerName: string
}
 
type billType = {
  id?: string,
  productId: string
  amount : number,
  date: string
  providerId : string
}

  export type {providerType, productType, billType}