import { Group } from '@/pages/order/components/groupCard/@types';

export const groupMock = async () => {
  const response = [
    {
      id: 1,
      name: 'Burguers',
      icon: 'GiHamburger',
    },
    {
      id: 2,
      name: 'Drinks',
      icon: 'GiSodaCan',
    },
    {
      id: 3,
      name: 'Pizzas',
      icon: 'CiPizza',
    },
    {
      id: 4,
      name: 'Ice Cream',
      icon: 'IoIceCream',
    },
  ];
  return new Promise<Group[]>((resolve) => {
    resolve(response);
  });
};

export const productMock = async () => {
  const response = [
    {
      id: 1,
      groupId: 1,
      name: 'Cheeseburguer',
      img_url: '/assets/cheeseburger.png',
      info: '250g',
      price: 6.0,
    },
    {
      id: 1,
      groupId: 1,
      name: 'Spicy Chiken',
      img_url: '/assets/spicy-chicken.png',
      info: '150g',
      price: 7.5,
    },
    {
      id: 1,
      groupId: 1,
      name: 'Big Fetch',
      img_url: '/assets/burguer.png',
      info: '350g',
      price: 9.0,
    },
    {
      id: 1,
      groupId: 1,
      name: 'Cheeseburguer',
      img_url: '/assets/cheeseburger.png',
      info: '250g',
      price: 6.0,
    },
    {
      id: 1,
      groupId: 1,
      name: 'Spicy Chiken',
      img_url: '/assets/spicy-chicken.png',
      info: '150g',
      price: 7.5,
    },
    {
      id: 1,
      groupId: 1,
      name: 'Big Fetch',
      img_url: '/assets/burguer.png',
      info: '350g',
      price: 9.0,
    },
    {
      id: 1,
      groupId: 1,
      name: 'Cheeseburguer',
      img_url: '/assets/cheeseburger.png',
      info: '250g',
      price: 6.0,
    },
    {
      id: 1,
      groupId: 1,
      name: 'Spicy Chiken',
      img_url: '/assets/spicy-chicken.png',
      info: '150g',
      price: 7.5,
    },
    {
      id: 1,
      groupId: 1,
      name: 'Big Fetch',
      img_url: '/assets/burguer.png',
      info: '350g',
      price: 9.0,
    },
  ];
  return new Promise<any[]>((resolve) => {
    const newArr = [...response, ...response];
    resolve(newArr);
  });
};
