import Post from "./models/post.model.js";

const resolvers = {
    Query: {
        posts: () => Post.find({}),
    },
    Mutation: {
        addPost: (parent, post) => {
            const newPost = new Post({ title: post.title, content: post.content });
            return newPost.save();
        }
    }
};

export default resolvers;