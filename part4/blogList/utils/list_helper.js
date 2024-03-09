const dummy = (blogs) =>{

    return 1
}

const totalLikes = (blogPost) => {

   const reducer = (like, blogPost) =>{
    return like + blogPost.likes
   }
   return blogPost.reduce(reducer, 0)
}

module.exports = {
    dummy,
    totalLikes
}