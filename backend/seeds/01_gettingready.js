exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex('gettingready').del()
    .then(function () {
      // Inserts seed entries
      return knex('gettingready').insert([{
          id: 1,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513312/wedding-photos-getting-ready-for-the-big-day/1.jpg'
        },
        {
          id: 2,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513261/wedding-photos-getting-ready-for-the-big-day/2.jpg'
        },
        {
          id: 3,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513267/wedding-photos-getting-ready-for-the-big-day/3.jpg'
        },
        {
          id: 4,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513265/wedding-photos-getting-ready-for-the-big-day/4.jpg'
        },
        {
          id: 5,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513273/wedding-photos-getting-ready-for-the-big-day/5.jpg'
        },
        {
          id: 6,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513272/wedding-photos-getting-ready-for-the-big-day/6.jpg'
        },
        {
          id: 7,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513291/wedding-photos-getting-ready-for-the-big-day/7.jpg'
        },
        {
          id: 8,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513276/wedding-photos-getting-ready-for-the-big-day/8.jpg'
        },
        {
          id: 9,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513264/wedding-photos-getting-ready-for-the-big-day/9.jpg'
        },
        {
          id: 10,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513272/wedding-photos-getting-ready-for-the-big-day/10.jpg1'
        },
        {
          id: 11,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513281/wedding-photos-getting-ready-for-the-big-day/11.jpg'
        },
        {
          id: 12,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513296/wedding-photos-getting-ready-for-the-big-day/12.jpg'
        },
        {
          id: 13,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550516377/wedding-photos-getting-ready-for-the-big-day/13.jpg'
        },
        {
          id: 14,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513316/wedding-photos-getting-ready-for-the-big-day/14.jpg'
        },
        {
          id: 15,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513291/wedding-photos-getting-ready-for-the-big-day/15.jpg'
        },
        {
          id: 16,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550516453/wedding-photos-getting-ready-for-the-big-day/16.jpg'
        },
        {
          id: 17,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513309/wedding-photos-getting-ready-for-the-big-day/17.jpg'
        },
        {
          id: 18,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513302/wedding-photos-getting-ready-for-the-big-day/18.jpg'
        },
        {
          id: 19,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550516808/wedding-photos-getting-ready-for-the-big-day/19.jpg'
        },
        {
          id: 20,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513309/wedding-photos-getting-ready-for-the-big-day/20.jpg'
        },
        {
          id: 21,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513324/wedding-photos-getting-ready-for-the-big-day/21.jpg'
        },
        {
          id: 22,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513320/wedding-photos-getting-ready-for-the-big-day/22.jpg'
        },
        {
          id: 23,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550523896/wedding-photos-getting-ready-for-the-big-day/23.jpg'
        },
        {
          id: 24,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513327/wedding-photos-getting-ready-for-the-big-day/24.jpg'
        },
        {
          id: 25,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513327/wedding-photos-getting-ready-for-the-big-day/25.jpg'
        },
        {
          id: 26,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550523918/wedding-photos-getting-ready-for-the-big-day/26.jpg'
        },
        {
          id: 27,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550523895/wedding-photos-getting-ready-for-the-big-day/27.jpg'
        },
        {
          id: 28,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513343/wedding-photos-getting-ready-for-the-big-day/28.jpg'
        },
        {
          id: 29,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550523897/wedding-photos-getting-ready-for-the-big-day/29.jpg'
        },
        {
          id: 30,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550523928/wedding-photos-getting-ready-for-the-big-day/30.jpg'
        },
        {
          id: 31,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550523911/wedding-photos-getting-ready-for-the-big-day/31.jpg'
        },
        {
          id: 32,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513368/wedding-photos-getting-ready-for-the-big-day/32.jpg'
        },
        {
          id: 33,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513400/wedding-photos-getting-ready-for-the-big-day/33.jpg'
        },
        {
          id: 34,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513377/wedding-photos-getting-ready-for-the-big-day/34.jpg'
        },
        {
          id: 35,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513384/wedding-photos-getting-ready-for-the-big-day/35.jpg'
        },
        {
          id: 36,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513406/wedding-photos-getting-ready-for-the-big-day/36.jpg'
        },
        {
          id: 37,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513400/wedding-photos-getting-ready-for-the-big-day/37.jpg'
        },
        {
          id: 38,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513401/wedding-photos-getting-ready-for-the-big-day/38.jpg'
        },
        {
          id: 39,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513410/wedding-photos-getting-ready-for-the-big-day/39.jpg'
        },
        {
          id: 40,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550523931/wedding-photos-getting-ready-for-the-big-day/40.jpg'
        },
        {
          id: 41,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513415/wedding-photos-getting-ready-for-the-big-day/41.jpg'
        },
        {
          id: 42,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513422/wedding-photos-getting-ready-for-the-big-day/42.jpg'
        },
        {
          id: 43,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513419/wedding-photos-getting-ready-for-the-big-day/43.jpg'
        },
        {
          id: 44,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513419/wedding-photos-getting-ready-for-the-big-day/44.jpg'
        },
        {
          id: 45,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550523932/wedding-photos-getting-ready-for-the-big-day/45.jpg'
        },
        {
          id: 46,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550523934/wedding-photos-getting-ready-for-the-big-day/46.jpg'
        },
        {
          id: 47,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550523936/wedding-photos-getting-ready-for-the-big-day/47.jpg'
        },
        {
          id: 48,
          image_url: 'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550513428/wedding-photos-getting-ready-for-the-big-day/48.jpg'
        }
      ]);
    });
};