export type Header = {
  text: string | null
  to: string | null
}

export type DataDropDown = {
  value: number | string
  name: string
}

export type User = {
  id: number
  name: string
  birth: string
  gender: number
  tel: number | null
  postal: number | null
  address: string | null
}
