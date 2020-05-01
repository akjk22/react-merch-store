

const masterTicketList = [
  {
    name: 'T-Shirt',
    location: Image1,
    issue: 'This is a quality T-Shirt',
    inventory: 10,
    id: v4()
  },
  {
    name: 'Sweatshirt',
    location: Image2,
    issue: 'This is a quality Sweatshirt',
    inventory: 10,
    id: v4()
  },
  {
    name: 'Turtleneck',
    location: Image3,
    issue: 'This is a quality Turtleneck',
    inventory: 10,
    id: v4()
  }
];

export function merchList() {
  return masterTicketList;
}