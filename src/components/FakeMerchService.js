import Image1 from '../assets/shirt.jpg'
import Image2 from '../assets/hoodie.jpg'
import Image3 from '../assets/mask.png'
import { v4 } from 'uuid';

const masterMerchList = [
  {
    name: 'T-Shirt',
    img: Image1,
    issue: 'Vintage Goods',
    inventory: 5,
    id: v4()
  },
  {
    name: 'Hoodie',
    img: Image2,
    issue: 'Tribute to Mamba',
    inventory: 24,
    id: v4()
  },
  {
    name: 'Mask',
    img: Image3,
    issue: 'Protect Yourself',
    inventory: 20,
    id: v4()
  }
];

export function merchList() {
  return masterMerchList;
}