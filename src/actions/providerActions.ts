import { providerType } from "../App"


const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export const getAllProviders = async ()=>{
    const response = await fetch(`http://localhost:8080/api/providers`)
    const data = await response.json()
    return data
  }

 /* export const createProvider = async ()=>{
    const response = await fetch(`http://localhost:8080/api/provider/create`)
    const data = await response.json()
    return data
  }
*/
export const saveProvider = async (provider: providerType) => {
  const response = await fetch(`http://localhost:8080/api/provider/create`, { method: 'POST', body: JSON.stringify(provider), headers: HEADERS})
  const data = await response.json() as providerType
  return data
}

