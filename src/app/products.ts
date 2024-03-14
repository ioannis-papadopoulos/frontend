export interface Product {
  id?: number;
  name?: string | null;
  type?: string | null;
  motor?: string | null;
  color?: string | null;
  equipement?: string | null;
  price?: number| null;
  description?: string | null;
}

export const products: Product[] = [
  {
    id: 0,
    name: 'C Klasse',
    color: 'black',
    type: 'Cabrioler',
    motor: '150 kw',
    price: 54430,
    equipement: 'Leder, Lenkradheizung'
  },
  {
    id: 1,
    name: 'E Klasse',
    color: 'red',
    type: 'Limousine',
    motor: '118 kw',
    price: 53823,
    equipement: 'Soundsystem, Panoramadach'
  },
  {
    id: 2,
    name: 'AMG',
    color: 'red',
    type: 'Coupe',
    motor: '287 kw',
    price: 102518,
    equipement: 'Klimaanlage, Lenkradheizung'
  }
];
