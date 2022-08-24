import React from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import Posts from "../pages/Posts";
import About from "../pages/About";
import Error from "../pages/Error";
import PostIdPage from "../pages/PostIdPage";


const AppRouter = () => {
    return (
        <Routes>
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostIdPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Navigate to="/posts" replace />}/>
            {/*<Route*/}
            {/*	path="*"*/}
            {/*	element={*/}
            {/*		<main style={{padding: "1rem"}}>*/}
            {/*			<p>There's nothing here</p>*/}
            {/*		</main>*/}
            {/*	}*/}
            {/*/>*/}
        </Routes>
    );
};

export default AppRouter;