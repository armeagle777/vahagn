import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    return (
        <article className='post'>
            <Link to={`post/${post.id}`}>
                <h2>{post.name}</h2>
            </Link>
            <p className='postBody'>
                {post.task.length <= 25
                    ? post.task
                    : `${post.task.slice(0, 25)}...`}
            </p>
        </article>
    );
};

export default Post;
