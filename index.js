var BloomFilter = require('bloom-filter-cpp').BloomFilter

var b1 = new BloomFilter()

console.log('b1 ading hello')
b1.add('hello')

console.log('b1 exists hello? ', b1.exists('hello'))
console.log('b1 exists hello2? ', b1.exists('hello2'))

var b2 = new BloomFilter()
console.log('b2 exists hello? ', b2.exists('hello'))
console.log('b2 exists hello2? ', b2.exists('hello2'))
