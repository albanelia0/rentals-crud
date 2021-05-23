const API_URL = 'http://localhost:3030'
const API_REAL_ESTATE = `${API_URL}/real-estate`

export interface ApiRentalFields {
  title: string
  desc: string
  image: string
  price: number
}

export interface ApiRental extends ApiRentalFields {
  id: string
}

export const fetchRentalById = async (id: string): Promise<ApiRental> => {
  return await window
    .fetch(`${API_REAL_ESTATE}/${id}`)
    .then(async res => await res.json())
}

export const fetchRentals = async (): Promise<ApiRental[]> => {
  return await window
    .fetch(API_REAL_ESTATE)
    .then(async res => await res.json())
}

export const createRental = async (fields: ApiRentalFields): Promise<ApiRental> => {
  return await window
    .fetch(API_REAL_ESTATE, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fields)
    })
    .then(async res => await res.json())
}

export const updateRental = async (id: string, fields: ApiRentalFields): Promise<ApiRental> => {
  return await window
    .fetch(`http://localhost:3030/real-estate/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(fields)
    })
    .then(async res => await res.json())
}

export const deleteRentalById = async (id: string): Promise<ApiRental> => {
  return await window
    .fetch(`http://localhost:3030/real-estate/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
    .then(async res => await res.json())
}
