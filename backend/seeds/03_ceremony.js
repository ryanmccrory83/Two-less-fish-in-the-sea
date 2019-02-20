exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ceremony')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('ceremony').insert([
        {
          id: 1,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550528985/wedding-photos-the-ceremony/1.jpg'
        },
        {
          id: 2,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550528974/wedding-photos-the-ceremony/2.jpg'
        },
        {
          id: 3,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550528978/wedding-photos-the-ceremony/3.jpg'
        },
        {
          id: 4,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550528971/wedding-photos-the-ceremony/4.jpg'
        },
        {
          id: 5,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550528976/wedding-photos-the-ceremony/5.jpg'
        },
        {
          id: 6,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550528988/wedding-photos-the-ceremony/6.jpg'
        },
        {
          id: 7,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529006/wedding-photos-the-ceremony/7.jpg'
        },
        {
          id: 8,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529021/wedding-photos-the-ceremony/8.jpg'
        },
        {
          id: 9,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529024/wedding-photos-the-ceremony/9.jpg'
        },
        {
          id: 10,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529023/wedding-photos-the-ceremony/10.jpg'
        },
        {
          id: 11,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529020/wedding-photos-the-ceremony/11.jpg'
        },
        {
          id: 12,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529018/wedding-photos-the-ceremony/12.jpg'
        },
        {
          id: 13,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529040/wedding-photos-the-ceremony/13.jpg'
        },
        {
          id: 14,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529051/wedding-photos-the-ceremony/14.jpg'
        },
        {
          id: 15,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529029/wedding-photos-the-ceremony/15.jpg'
        },
        {
          id: 16,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529068/wedding-photos-the-ceremony/16.jpg'
        },
        {
          id: 17,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529053/wedding-photos-the-ceremony/17.jpg'
        },
        {
          id: 18,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529069/wedding-photos-the-ceremony/18.jpg'
        },
        {
          id: 19,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529062/wedding-photos-the-ceremony/19.jpg'
        },
        {
          id: 20,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529076/wedding-photos-the-ceremony/20.jpg'
        },
        {
          id: 21,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529074/wedding-photos-the-ceremony/21.jpg'
        },
        {
          id: 22,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529065/wedding-photos-the-ceremony/22.jpg'
        },
        {
          id: 23,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529074/wedding-photos-the-ceremony/23.jpg'
        },
        {
          id: 24,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529107/wedding-photos-the-ceremony/24.jpg'
        },
        {
          id: 25,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529114/wedding-photos-the-ceremony/25.jpg'
        },
        {
          id: 26,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529119/wedding-photos-the-ceremony/26.jpg'
        },
        {
          id: 27,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529084/wedding-photos-the-ceremony/27.jpg'
        },
        {
          id: 28,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529100/wedding-photos-the-ceremony/28.jpg'
        },
        {
          id: 29,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529115/wedding-photos-the-ceremony/29.jpg'
        },
        {
          id: 30,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529124/wedding-photos-the-ceremony/30.jpg'
        },
        {
          id: 31,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529124/wedding-photos-the-ceremony/31.jpg'
        },
        {
          id: 32,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529146/wedding-photos-the-ceremony/32.jpg'
        },
        {
          id: 33,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529171/wedding-photos-the-ceremony/33.jpg'
        },
        {
          id: 34,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529136/wedding-photos-the-ceremony/34.jpg'
        },
        {
          id: 35,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529156/wedding-photos-the-ceremony/35.jpg'
        },
        {
          id: 36,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529136/wedding-photos-the-ceremony/36.jpg'
        },
        {
          id: 37,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529160/wedding-photos-the-ceremony/37.jpg'
        },
        {
          id: 38,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529169/wedding-photos-the-ceremony/38.jpg'
        },
        {
          id: 39,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529167/wedding-photos-the-ceremony/39.jpg'
        },
        {
          id: 40,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529194/wedding-photos-the-ceremony/40.jpg'
        },
        {
          id: 41,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529211/wedding-photos-the-ceremony/41.jpg'
        },
        {
          id: 42,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529172/wedding-photos-the-ceremony/42.jpg'
        },
        {
          id: 43,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529177/wedding-photos-the-ceremony/43.jpg'
        },
        {
          id: 44,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529193/wedding-photos-the-ceremony/44.jpg'
        },
        {
          id: 45,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529183/wedding-photos-the-ceremony/45.jpg'
        },
        {
          id: 46,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529229/wedding-photos-the-ceremony/46.jpg'
        },
        {
          id: 47,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529184/wedding-photos-the-ceremony/47.jpg'
        },
        {
          id: 48,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529196/wedding-photos-the-ceremony/48.jpg'
        },
        {
          id: 49,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529197/wedding-photos-the-ceremony/49.jpg'
        },
        {
          id: 50,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529199/wedding-photos-the-ceremony/50.jpg'
        },
        {
          id: 51,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529511/wedding-photos-the-ceremony/51.jpg'
        },
        {
          id: 52,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529206/wedding-photos-the-ceremony/52.jpg'
        },
        {
          id: 53,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529207/wedding-photos-the-ceremony/53.jpg'
        },
        {
          id: 54,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529228/wedding-photos-the-ceremony/54.jpg'
        },
        {
          id: 55,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529514/wedding-photos-the-ceremony/55.jpg'
        },
        {
          id: 56,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529217/wedding-photos-the-ceremony/56.jpg'
        },
        {
          id: 57,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550530010/wedding-photos-the-ceremony/57.jpg'
        },
        {
          id: 58,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550529758/wedding-photos-the-ceremony/58.jpg'
        },
        {
          id: 59,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550530362/wedding-photos-the-ceremony/59.jpg'
        },
        {
          id: 60,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550530420/wedding-photos-the-ceremony/60.jpg'
        },
        {
          id: 61,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550530569/wedding-photos-the-ceremony/61.jpg'
        },
        {
          id: 62,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550530399/wedding-photos-the-ceremony/62.jpg'
        },
        {
          id: 63,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550530234/wedding-photos-the-ceremony/63.jpg'
        },
        {
          id: 64,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550530352/wedding-photos-the-ceremony/64.jpg'
        },
        {
          id: 65,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550530894/wedding-photos-the-ceremony/65.jpg'
        },
        {
          id: 66,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550530607/wedding-photos-the-ceremony/66.jpg'
        },
        {
          id: 67,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550530532/wedding-photos-the-ceremony/67.jpg'
        },
        {
          id: 68,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550531269/wedding-photos-the-ceremony/68.jpg'
        },
        {
          id: 69,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550531174/wedding-photos-the-ceremony/69.jpg'
        },
        {
          id: 70,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550530767/wedding-photos-the-ceremony/70.jpg'
        },
        {
          id: 71,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550530823/wedding-photos-the-ceremony/71.jpg'
        },
        {
          id: 72,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550531003/wedding-photos-the-ceremony/72.jpg'
        },
        {
          id: 73,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550531043/wedding-photos-the-ceremony/73.jpg'
        },
        {
          id: 74,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550531671/wedding-photos-the-ceremony/74.jpg'
        },
        {
          id: 75,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550531075/wedding-photos-the-ceremony/75.jpg'
        },
        {
          id: 76,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550531179/wedding-photos-the-ceremony/76.jpg'
        },
        {
          id: 77,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550531572/wedding-photos-the-ceremony/77.jpg'
        },
        {
          id: 78,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550531222/wedding-photos-the-ceremony/78.jpg'
        },
        {
          id: 79,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550531354/wedding-photos-the-ceremony/79.jpg'
        },
        {
          id: 80,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550531910/wedding-photos-the-ceremony/80.jpg'
        },
        {
          id: 81,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550531488/wedding-photos-the-ceremony/81.jpg'
        },
        {
          id: 82,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550531519/wedding-photos-the-ceremony/82.jpg'
        },
        {
          id: 83,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550531569/wedding-photos-the-ceremony/83.jpg'
        },
        {
          id: 84,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550531709/wedding-photos-the-ceremony/84.jpg'
        },
        {
          id: 85,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550531772/wedding-photos-the-ceremony/85.jpg'
        },
        {
          id: 86,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550531855/wedding-photos-the-ceremony/86.jpg'
        },
        {
          id: 87,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550531892/wedding-photos-the-ceremony/87.jpg'
        },
        {
          id: 88,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550531924/wedding-photos-the-ceremony/88.jpg'
        },
        {
          id: 89,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550533874/wedding-photos-the-ceremony/89.jpg'
        },
        {
          id: 90,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550532005/wedding-photos-the-ceremony/90.jpg'
        },
        {
          id: 91,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550534021/wedding-photos-the-ceremony/91.jpg'
        },
        {
          id: 92,
          image_url:
            'https://res.cloudinary.com/ryanmccrory83/image/upload/v1550533700/wedding-photos-the-ceremony/92.jpg'
        }
      ])
    })
}
