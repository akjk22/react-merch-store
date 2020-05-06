import Image1 from '../assets/shirt.jpg'
import Image2 from '../assets/shirt.jpg'
import Image3 from '../assets/shirt.jpg'
import { v4 } from 'uuid';

const masterMerchList = [
  {
    name: 'T-Shirt',
    img: Image1,
    issue: 'This is a quality T-Shirt',
    inventory: 10,
    id: v4()
  },
  {
    name: 'Sweatshirt',
    img: Image2,
    issue: 'This is a quality Sweatshirt',
    inventory: 10,
    id: v4()
  },
  {
    name: 'Turtleneck',
    img: Image3,
    issue: 'This is a quality Turtleneck',
    inventory: 10,
    id: v4()
  }
];

export function merchList() {
  return masterMerchList;
}