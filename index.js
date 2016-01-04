var BloomFilter = require('bloom-filter-cpp').BloomFilter
var HashSet = require('hashset-cpp').HashSet
var ABPFilterParserLib = require('abp-filter-parser-cpp')
var ABPFilterParser = ABPFilterParserLib.ABPFilterParser
var FilterOptions = ABPFilterParserLib.FilterOptions

;(function bloomFilterTest () {
  console.log('Bloom Filter')
  var b1 = new BloomFilter()
  console.log('b1 adding hello')
  b1.add('hello')

  console.log('b1 exists hello? ', b1.exists('hello'))
  console.log('b1 exists hello2? ', b1.exists('hello2'))

  var b2 = new BloomFilter()
  console.log('b2 exists hello? ', b2.exists('hello'))
  console.log('b2 exists hello2? ', b2.exists('hello2'))
})()

;(function hashSetTest () {
  console.log('\nHashSet')
  var h1 = new HashSet()
  console.log('h1 adding hello')
  h1.add('hello')

  console.log('h1 exists hello? ', h1.exists('hello'))
  console.log('h1 exists hello2? ', h1.exists('hello2'))

  var h2 = new HashSet()
  console.log('h2 exists hello? ', h2.exists('hello'))
  console.log('h2 exists hello2? ', h2.exists('hello2'))
})()

;(function abpFilterParserTest() {
  console.log('\nABPFilterParser')
  var parser = new ABPFilterParser()
  parser.parse('/public/ad/*$domain=slashdot.org')
  parser.parse('/public/ad3/*$script')
  var b1 = parser.matches('http://www.brianbondy.com/public/ad/some-ad', FilterOptions.script, 'slashdot.org')
  var b2 = parser.matches('http://www.brianbondy.com/public/ad/some-ad', FilterOptions.script, 'digg.com')
  var b3 = parser.matches('http://www.brianbondy.com/public/ad2/some-ad', FilterOptions.script, 'slashdot.org')
  var b4 = parser.matches('http://www.brianbondy.com/public/ad3/some-ad', FilterOptions.script, 'slashdot.org')
  var b5 = parser.matches('http://www.brianbondy.com/public/ad3/some-ad', FilterOptions.image, 'slashdot.org')
  console.log('public/ad/* should match b1.  Actual: ', b1)
  console.log('public/ad/* should not match b2.  Actual: ', b2)
  console.log('public/ad/* should not match b3.  Actual: ', b3)
  console.log('public/ad/* should match b4.  Actual: ', b4)
  console.log('public/ad/* should not match b5.  Actual: ', b5)
})()
