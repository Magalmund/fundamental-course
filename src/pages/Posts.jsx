import {React, useEffect, useRef, useState} from 'react'
import PostFilter from '../components/PostFilter';
import PostForm from "../components/PostForm";
import PostList from '../components/PostList';
import Button from '../components/UI/Button/Button';
import Modal from '../components/UI/Modal/Modal';
import {usePosts} from "../hooks/usePosts"
import PostService from '../API/PostService';
import Loader from '../components/UI/Loader/Loader';
import {useFetching} from '../hooks/useFetching';
import {getPageCount, getPagesArray} from "../Utils/pages";
import Pagination from "../components/UI/Pagination/Pagination";
import {useObserver} from "../hooks/useObserver";
import Select from "../components/UI/Select/Select";


function Posts() {
    const [posts, setPosts] = useState([])
    const [filter, setFilter] = useState({sort:'', query:''})
    const [modal, setModal] = useState(false);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(10);
    const [page, setPage] = useState(1);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
    const lastElement = useRef()

    const [fetchPosts, isPostsLoading, postError] = useFetching(async(limit, page) => {
        const response = await PostService.getAll(limit, page);
        setPosts([...posts, ...response.data])
        const totalCount = response.headers['x-total-count']
        setTotalPages(getPageCount(totalCount, limit));
    })

    useObserver(lastElement, page < totalPages, isPostsLoading, () => {
        setPage(page + 1)
    })

    useEffect(() => {
        fetchPosts(limit, page)
    }, [page, limit])

    function createPost (newPost) {
        setPosts([...posts, newPost])
        setModal(false)
    }

    function removePost (post) {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) => {
        setPage(page)
    }

    return (
        <div className="App">
            <Button style={{marginTop:30}} onClick={() => setModal(true)}>Создать пост</Button>
            <Modal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </Modal>
            <hr style={{margin:'15px 0'}}/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <Select
                value={limit}
                onChange={value => setLimit(value)}
                defaultValue='Кол-во элементов на странице'
                options={[
                    {value: 5, name: '5'},
                    {value: 10, name: '10'},
                    {value: 25, name: '25'},
                    {value: -1, name: 'Показать всё'},
                ]}
            />
            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'}/>
            <div ref={lastElement} style={{height: 20, background: 'red'}}></div>
            {isPostsLoading &&
                <div style={{display: 'flex', justifyContent: 'center', marginTop: 50}}><Loader/></div>
            }
            <Pagination
                page={page}
                changePage={changePage}
                totalPages={totalPages}
            />
        </div>
    );
}

export default Posts;
