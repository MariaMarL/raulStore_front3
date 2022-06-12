import { billType } from "../App"


const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export const getAllBills = async ()=>{
    const response = await fetch(`http://localhost:8080/api/providerInvoices`)
    const data = await response.json()
    console.log("imprimiento este data: "+ data);
    
    return data
  }

export const saveBill = async (bill: billType) => {
  const response = await fetch(`http://localhost:8080/api/providerInvoice/create`, { method: 'POST', body: JSON.stringify(bill), headers: HEADERS})
  const data = await response.json() as billType
  return data
}
