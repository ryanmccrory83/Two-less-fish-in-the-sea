exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('reception').del()
    .then(function () {
      // Inserts seed entries
      return knex('reception').insert([{
          id: 1,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550548989/wedding-photos-reception/1.jpg'
        },
        {
          id: 2,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550548998/wedding-photos-reception/2.jpg'
        },
        {
          id: 3,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550548955/wedding-photos-reception/3.jpg'
        },
        {
          id: 4,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549032/wedding-photos-reception/4.jpg'
        },
        {
          id: 5,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549026/wedding-photos-reception/5.jpg'
        },
        {
          id: 6,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549017/wedding-photos-reception/6.jpg'
        },
        {
          id: 7,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549015/wedding-photos-reception/7.jpg'
        },
        {
          id: 8,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550548995/wedding-photos-reception/8.jpg'
        },
        {
          id: 9,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550548998/wedding-photos-reception/9.jpg'
        },
        {
          id: 10,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550548983/wedding-photos-reception/10.jpg'
        },
        {
          id: 11,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549005/wedding-photos-reception/11.jpg'
        },
        {
          id: 12,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549033/wedding-photos-reception/12.jpg'
        },
        {
          id: 13,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549005/wedding-photos-reception/13.jpg'
        },
        {
          id: 14,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549005/wedding-photos-reception/14.jpg'
        },
        {
          id: 15,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549018/wedding-photos-reception/15.jpg'
        },
        {
          id: 16,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549034/wedding-photos-reception/16.jpg'
        },
        {
          id: 17,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549065/wedding-photos-reception/17.jpg'
        },
        {
          id: 18,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549032/wedding-photos-reception/18.jpg'
        },
        {
          id: 19,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549035/wedding-photos-reception/19.jpg'
        },
        {
          id: 20,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549044/wedding-photos-reception/20.jpg'
        },
        {
          id: 21,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549084/wedding-photos-reception/21.jpg'
        },
        {
          id: 22,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549121/wedding-photos-reception/22.jpg'
        },
        {
          id: 23,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549061/wedding-photos-reception/23.jpg'
        },
        {
          id: 24,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549049/wedding-photos-reception/24.jpg'
        },
        {
          id: 25,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549063/wedding-photos-reception/25.jpg'
        },
        {
          id: 26,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549220/wedding-photos-reception/26.jpg'
        },
        {
          id: 27,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549439/wedding-photos-reception/27.jpg'
        },
        {
          id: 28,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549698/wedding-photos-reception/28.jpg'
        },
        {
          id: 29,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549511/wedding-photos-reception/29.jpg'
        },
        {
          id: 30,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549696/wedding-photos-reception/30.jpg'
        },
        {
          id: 31,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549718/wedding-photos-reception/31.jpg'
        },
        {
          id: 32,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549700/wedding-photos-reception/32.jpg'
        },
        {
          id: 33,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549707/wedding-photos-reception/33.jpg'
        },
        {
          id: 34,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549740/wedding-photos-reception/34.jpg'
        },
        {
          id: 35,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549731/wedding-photos-reception/35.jpg'
        },
        {
          id: 36,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549740/wedding-photos-reception/36.jpg'
        },
        {
          id: 37,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549710/wedding-photos-reception/37.jpg'
        },
        {
          id: 38,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549767/wedding-photos-reception/38.jpg'
        },
        {
          id: 39,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549757/wedding-photos-reception/39.jpg'
        },
        {
          id: 40,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549745/wedding-photos-reception/40.jpg'
        },
        {
          id: 41,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549776/wedding-photos-reception/41.jpg'
        },
        {
          id: 42,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549777/wedding-photos-reception/42.jpg'
        },
        {
          id: 43,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549788/wedding-photos-reception/43.jpg'
        },
        {
          id: 44,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549773/wedding-photos-reception/44.jpg'
        },
        {
          id: 45,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549801/wedding-photos-reception/45.jpg'
        },
        {
          id: 46,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549781/wedding-photos-reception/46.jpg'
        },
        {
          id: 47,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549788/wedding-photos-reception/47.jpg'
        },
        {
          id: 48,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549822/wedding-photos-reception/48.jpg'
        },
        {
          id: 49,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549815/wedding-photos-reception/49.jpg'
        },
        {
          id: 50,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549788/wedding-photos-reception/50.jpg'
        },
        {
          id: 51,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549798/wedding-photos-reception/51.jpg'
        },
        {
          id: 52,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549830/wedding-photos-reception/52.jpg'
        },
        {
          id: 53,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549808/wedding-photos-reception/53.jpg'
        },
        {
          id: 54,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549827/wedding-photos-reception/54.jpg'
        },
        {
          id: 55,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549821/wedding-photos-reception/55.jpg'
        },
        {
          id: 56,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549828/wedding-photos-reception/56.jpg'
        },
        {
          id: 57,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549866/wedding-photos-reception/57.jpg'
        },
        {
          id: 58,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549880/wedding-photos-reception/58.jpg'
        },
        {
          id: 59,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549883/wedding-photos-reception/59.jpg'
        },
        {
          id: 60,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549882/wedding-photos-reception/60.jpg'
        },
        {
          id: 61,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549890/wedding-photos-reception/61.jpg'
        },
        {
          id: 62,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549883/wedding-photos-reception/62.jpg'
        },
        {
          id: 63,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549909/wedding-photos-reception/63.jpg'
        },
        {
          id: 64,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549914/wedding-photos-reception/64.jpg'
        },
        {
          id: 65,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549897/wedding-photos-reception/65.jpg'
        },
        {
          id: 66,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549898/wedding-photos-reception/66.jpg'
        },
        {
          id: 67,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549900/wedding-photos-reception/67.jpg'
        },
        {
          id: 68,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549905/wedding-photos-reception/68.jpg'
        },
        {
          id: 69,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549913/wedding-photos-reception/69.jpg'
        },
        {
          id: 70,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549908/wedding-photos-reception/70.jpg'
        },
        {
          id: 71,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549985/wedding-photos-reception/71.jpg'
        },
        {
          id: 72,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549926/wedding-photos-reception/72.jpg'
        },
        {
          id: 73,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550549924/wedding-photos-reception/73.jpg'
        }

      ]);
    });
};