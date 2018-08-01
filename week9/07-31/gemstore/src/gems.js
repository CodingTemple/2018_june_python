const gems = [{
  id: 1,
  name: 'Dodecahedron',
  price: 2.95,
  description: "Some gems have hidden qualities beyonf their lustre, beyond their shine... Dodecahredon is one of those gems",
  imagePath: "./assets/img/gem-01.gif",
  inventory: 10,
  reviews: [{
    id: 1,
    createDate: 'Tuesday',
    author: 'Derek',
    rating: 1,
    body: 'I hate this!'
  }, {
    id: 2,
    createDate: 'Wednesday',
    author: 'Joseph',
    rating: 5,
    body: 'I love this product!'
  }]
}, {
  id: 2,
  name: 'Pentagonal',
  price: 5.95,
  description: 'The origin of the pentagonal gem is unknown, hence it\'s low value',
  imagePath: './assets/img/gem-02.gif',
  inventory: 0,
  reviews: [{
    id: 1,
    createDate: 'Monday',
    author: 'Ripal',
    rating: 5,
    body: 'Coding Temple is phenomenal!'
  }, {
    id: 2,
    createDate: 'Friday',
    author: 'Frank',
    rating: 3,
    body: 'I don\'t understand what I\'m doing.!'
  }]
}, {
  id: 3,
  name: 'Hexagonal',
  price: 12.95,
  description: 'The hexagonal gem is one of our best sellers',
  imagePath: './assets/img/gem-03.gif',
  inventory: 10,
  reviews: [{
    id: 1,
    createDate: 'Sunday',
    author: 'Ryan',
    rating: 5,
    body: 'I love this product!'
  }, {
    id: 3,
    createDate: 'Thursday',
    author: 'Ananya',
    rating: 1,
    body: 'Can I leave yet??'
  }]
}];

export default gems;