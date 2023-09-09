export default (params) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: [
          {
            id: 1,
            name: 'Lena',
            money: 1000,
            date: '2020-02-24',
          },
          {
            id: 2,
            name: 'Dima',
            money: 1999.99,
            date: '2020-02-25',
          },
          {
            id: 3,
            name: 'Petya',
            money: 3000.5,
            date: '2020-02-26',
          },
          {
            id: 4,
            name: 'Katya',
            money: 4000,
            date: '2020-02-27',
          },
          {
            id: 5,
            name: 'Jenya',
            money: 5000,
            date: '2020-02-28',
          },
          {
            id: 6,
            name: 'Oleg',
            money: 10000,
            date: '2020-02-28',
          },
          {
            id: 7,
            name: 'Masha',
            money: 1000000,
            date: '2020-02-30',
          },
        ],
      });
    }, 1500);
  });
};
