import { billType } from "../App"


const HEADERS = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
}

export const getAllBills = async ()=>{
    const response = await fetch(`https://backraulstore.herokuapp.com/api/providerInvoices`)
    const data = await response.json()
    return data
  }

export const saveBill = async (bill: billType) => {
  const response = await fetch(`https://backraulstore.herokuapp.com/api/providerInvoice/create`, { method: 'POST', body: JSON.stringify(bill), headers: HEADERS})
  const data = await response.json() as billType
  return data
}
