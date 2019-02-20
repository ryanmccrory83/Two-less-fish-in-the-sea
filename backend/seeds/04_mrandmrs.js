exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mrandmrs')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('mrandmrs').insert([
        {
          id: 1,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536374/wedding-photos-mr-and-mrs-mccrory/1.jpg'
        },
        {
          id: 2,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536467/wedding-photos-mr-and-mrs-mccrory/2.jpg'
        },
        {
          id: 3,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550535823/wedding-photos-mr-and-mrs-mccrory/3.jpg'
        },
        {
          id: 4,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536485/wedding-photos-mr-and-mrs-mccrory/4.jpg'
        },
        {
          id: 5,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536314/wedding-photos-mr-and-mrs-mccrory/5.jpg'
        },
        {
          id: 6,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536472/wedding-photos-mr-and-mrs-mccrory/6.jpg'
        },
        {
          id: 7,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536501/wedding-photos-mr-and-mrs-mccrory/7.jpg'
        },
        {
          id: 8,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536545/wedding-photos-mr-and-mrs-mccrory/8.jpg'
        },
        {
          id: 9,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536501/wedding-photos-mr-and-mrs-mccrory/9.jpg'
        },
        {
          id: 10,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536541/wedding-photos-mr-and-mrs-mccrory/10.jpg'
        },
        {
          id: 11,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536544/wedding-photos-mr-and-mrs-mccrory/11.jpg'
        },
        {
          id: 12,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536555/wedding-photos-mr-and-mrs-mccrory/12.jpg'
        },
        {
          id: 13,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536570/wedding-photos-mr-and-mrs-mccrory/13.jpg'
        },
        {
          id: 14,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536577/wedding-photos-mr-and-mrs-mccrory/14.jpg'
        },
        {
          id: 15,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536607/wedding-photos-mr-and-mrs-mccrory/15.jpg'
        },
        {
          id: 16,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536614/wedding-photos-mr-and-mrs-mccrory/16.jpg'
        },
        {
          id: 17,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536633/wedding-photos-mr-and-mrs-mccrory/17.jpg'
        },
        {
          id: 18,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536631/wedding-photos-mr-and-mrs-mccrory/18.jpg'
        },
        {
          id: 19,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536649/wedding-photos-mr-and-mrs-mccrory/19.jpg'
        },
        {
          id: 20,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536660/wedding-photos-mr-and-mrs-mccrory/20.jpg'
        },
        {
          id: 21,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536713/wedding-photos-mr-and-mrs-mccrory/21.jpg'
        },
        {
          id: 22,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536706/wedding-photos-mr-and-mrs-mccrory/22.jpg'
        },
        {
          id: 23,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536737/wedding-photos-mr-and-mrs-mccrory/23.jpg'
        },
        {
          id: 24,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536742/wedding-photos-mr-and-mrs-mccrory/24.jpg'
        },
        {
          id: 25,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536681/wedding-photos-mr-and-mrs-mccrory/25.jpg'
        },
        {
          id: 26,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536687/wedding-photos-mr-and-mrs-mccrory/26.jpg'
        },
        {
          id: 27,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536790/wedding-photos-mr-and-mrs-mccrory/27.jpg'
        },
        {
          id: 28,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536735/wedding-photos-mr-and-mrs-mccrory/28.jpg'
        },
        {
          id: 29,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536808/wedding-photos-mr-and-mrs-mccrory/29.jpg'
        },
        {
          id: 30,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536834/wedding-photos-mr-and-mrs-mccrory/30.jpg'
        },
        {
          id: 31,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536763/wedding-photos-mr-and-mrs-mccrory/31.jpg'
        },
        {
          id: 32,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536768/wedding-photos-mr-and-mrs-mccrory/32.jpg'
        },
        {
          id: 33,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536863/wedding-photos-mr-and-mrs-mccrory/33.jpg'
        },
        {
          id: 34,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536980/wedding-photos-mr-and-mrs-mccrory/34.jpg'
        },
        {
          id: 35,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550537031/wedding-photos-mr-and-mrs-mccrory/35.jpg'
        },
        {
          id: 36,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550537177/wedding-photos-mr-and-mrs-mccrory/36.jpg'
        },
        {
          id: 37,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536873/wedding-photos-mr-and-mrs-mccrory/37.jpg'
        },
        {
          id: 38,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536910/wedding-photos-mr-and-mrs-mccrory/38.jpg'
        },
        {
          id: 39,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536932/wedding-photos-mr-and-mrs-mccrory/39.jpg'
        },
        {
          id: 40,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550536988/wedding-photos-mr-and-mrs-mccrory/40.jpg'
        },
        {
          id: 41,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550537178/wedding-photos-mr-and-mrs-mccrory/41.jpg'
        },
        {
          id: 42,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550537187/wedding-photos-mr-and-mrs-mccrory/42.jpg'
        },
        {
          id: 43,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550537078/wedding-photos-mr-and-mrs-mccrory/43.jpg'
        },
        {
          id: 44,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550537153/wedding-photos-mr-and-mrs-mccrory/44.jpg'
        }
      ])
    })
}
