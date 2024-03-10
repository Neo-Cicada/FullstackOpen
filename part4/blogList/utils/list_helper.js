const dummy = (blogs) =>{

    return 1
}

const totalLikes = (blogPost) => {

   const reducer = (like, blogPost) =>{
    return like + blogPost.likes
   }
   return blogPost.reduce(reducer, 0)
}

const favoriteBlog = (blogs) =>{
    let highestLikes = null;
    for(let i = 0; i < blogs.length; i++){
        if(highestLikes === null){
            highestLikes = blogs[i];
        }
        if(blogs[i].likes > highestLikes.likes){
            highestLikes = blogs[i];
        }
    }
    return {
        title: highestLikes.title,
        author: highestLikes.author,
        likes: highestLikes.likes
    };
}
/*
*
*
*/
const mostBlogs = (blogs)=>{
    const authorCount = {};

    blogs.forEach(blog => {
        const author = blog.author;
        authorCount[author] = (authorCount[author] || 0) + 1;
    });

    const maxAuthor = Object.keys(authorCount).reduce((prev, curr) => {
        return authorCount[curr] > authorCount[prev] ? curr : prev;
    });

    return {
        author: maxAuthor,
        blogs: authorCount[maxAuthor]
    };
}

const mostLikes = (blogs) =>{
    const authorLikes = {}
    blogs.forEach(blogs =>{
        const author = blogs.author
        authorLikes[author] = (authorLikes[author] || 0) + blogs.likes
    })

    let maxAuthor = null;
    let maxLikes = 0;
    for (const author in authorLikes) {
        if (authorLikes[author] > maxLikes) {
            maxAuthor = author;
            maxLikes = authorLikes[author];
        }
    }
    
    return {
        author: maxAuthor,
        likes: maxLikes
    };
}

module.exports = {
    dummy,
    totalLikes,
    favoriteBlog,
    mostBlogs,
    mostLikes
}