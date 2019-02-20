exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('beforetheceremony')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('beforetheceremony').insert([
        {
          id: 1,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526422/wedding-photos-before-the-ceremony/1.jpg'
        },
        {
          id: 2,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526426/wedding-photos-before-the-ceremony/2.jpg'
        },
        {
          id: 3,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526426/wedding-photos-before-the-ceremony/3.jpg'
        },
        {
          id: 4,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526420/wedding-photos-before-the-ceremony/4.jpg'
        },
        {
          id: 5,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526422/wedding-photos-before-the-ceremony/5.jpg'
        },
        {
          id: 6,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526423/wedding-photos-before-the-ceremony/6.jpg'
        },
        {
          id: 7,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526448/wedding-photos-before-the-ceremony/7.jpg'
        },
        {
          id: 8,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526455/wedding-photos-before-the-ceremony/8.jpg'
        },
        {
          id: 9,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526435/wedding-photos-before-the-ceremony/9.jpg'
        },
        {
          id: 10,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526450/wedding-photos-before-the-ceremony/10.jpg'
        },
        {
          id: 11,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526476/wedding-photos-before-the-ceremony/11.jpg'
        },
        {
          id: 12,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526475/wedding-photos-before-the-ceremony/12.jpg'
        },
        {
          id: 13,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526486/wedding-photos-before-the-ceremony/13.jpg'
        },
        {
          id: 14,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526481/wedding-photos-before-the-ceremony/14.jpg'
        },
        {
          id: 15,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526475/wedding-photos-before-the-ceremony/15.jpg'
        },
        {
          id: 16,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526467/wedding-photos-before-the-ceremony/16.jpg'
        },
        {
          id: 17,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526475/wedding-photos-before-the-ceremony/17.jpg'
        },
        {
          id: 18,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526509/wedding-photos-before-the-ceremony/18.jpg'
        },
        {
          id: 19,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526506/wedding-photos-before-the-ceremony/19.jpg'
        },
        {
          id: 20,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526480/wedding-photos-before-the-ceremony/20.jpg'
        },
        {
          id: 21,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526506/wedding-photos-before-the-ceremony/21.jpg'
        },
        {
          id: 22,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526511/wedding-photos-before-the-ceremony/22.jpg'
        },
        {
          id: 23,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526490/wedding-photos-before-the-ceremony/23.jpg'
        },
        {
          id: 24,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526500/wedding-photos-before-the-ceremony/24.jpg'
        },
        {
          id: 25,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550526501/wedding-photos-before-the-ceremony/25.jpg'
        }
      ])
    })
}
