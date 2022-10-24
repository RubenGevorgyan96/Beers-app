export interface Volume {
  value: number
  unit: string
}

export interface Hops {
  name: string
  amount: Volume
  add: string
  attribute: string
}

export interface Malt {
  name: string
  amount: Volume
}

export interface MashTemp {
  temp: { value: number; unit: string }
  duration: number
}

export interface Ingredients {
  hops: Hops[]
  malt: Malt[]
  yeast: string
}

export interface Method {
  mash_temp: {}
  fermentation: { temp: Volume }
  twist: null | string
}

export interface Beer {
  abv: number
  attenuation_level: number
  boil_volume: Volume
  brewers_tips: string
  contributed_by: string
  description: string
  ebc: number
  first_brewed: string
  food_pairing: string[]
  ibu: number
  id: number
  image_url: string
  ingredients: Ingredients
  method: MashTemp[]
  name: string
  ph: number
  srm: number
  tagline: string
  target_fg: number
  target_og: number
  volume: Volume
  count:number
}
