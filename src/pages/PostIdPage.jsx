import React from 'react';
import {useParams} from "react-router-dom";

const PostIdPage = () => {
    const params = useParams()
    console.log(params)
    return (
        <div>
            <h1>Open Post</h1>

        </div>
    );
};

export default PostIdPage;