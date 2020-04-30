import Image1 from '../assets/shirt.jpg'
import Image2 from '../assets/shirt.jpg'
import Image3 from '../assets/shirt.jpg'

const masterTicketList = [
  {
    name: 'T-Shirt',
    location: Image1,
    issue: 'This is a quality T-Shirt'
  },
  {
    name: 'Sweatshirt',
    location: Image2,
    issue: 'This is a quality Sweatshirt'
  },
  {
    name: 'Turtleneck',
    location: Image3,
    issue: 'This is a quality Turtleneck'
  }
];

export function merchList() {
  return masterTicketList;
}