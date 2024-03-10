const {test, describe} = require('node:test')
const assert = require('node:assert')
const listHelper = require('../utils/list_helper')
test('dummy returns one', ()=>{
    const blog = []
    const result = listHelper.dummy(blog)
    assert.strictEqual(result, 1)
})

describe('total likes', () => {
    const listWithOneBlog = [
      {
        _id: '5a422aa71b54a676234d17f8',
        title: 'Go To Statement Considered Harmful',
        author: 'Edsger W. Dijkstra',
        url: 'https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf',
        likes: 5,
        __v: 0
      }
    ]
  
    test('when list has only one blog, equals the likes of that', () => {
      const result = listHelper.totalLikes(listWithOneBlog)
      assert.strictEqual(result, 5)
    })
  })
describe("fave blogs", ()=>{
  const data = [{
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    likes: 12
  },
  {
    title: "neo",
    author: "the great",
    likes: 999
  }
]
  test("returning the highest likes within the data provided", ()=>{
    const likesResult = listHelper.favoriteBlog(data)
    assert.deepStrictEqual(likesResult,{
      title: "neo",
      author: "the great",
      likes: 999
    } )
  })

})

describe("Author who has a most works", ()=>{
  const data = [{
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    likes: 12
  },
  {
    title: "neo",
    author: "the great",
    likes: 999
  },
  {
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    likes: 12
  },
  {
    title: "neo",
    author: "the great",
    likes: 999
  },
  {
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    likes: 12
  },
]

test("Author who have most works")
  const result = listHelper.mostBlogs(data)
  assert.deepStrictEqual(result, {
    author: "Edsger W. Dijkstra",
    blogs: 3
  })
})

describe("Author who have most likes", ()=>{
  const data = [{
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    likes: 12
  },
  {
    title: "neo",
    author: "the great",
    likes: 999
  },
  {
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    likes: 12
  },
  {
    title: "neo",
    author: "the great",
    likes: 999
  }]

  const result = listHelper.mostLikes(data)

  assert.deepStrictEqual(result, {
    author: "the great",
    likes: 1998
  })


})
