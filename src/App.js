import {React, useEffect, useState} from 'react'
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Button from './components/UI/Button/Button';
import Modal from './components/UI/Modal/Modal';
import {usePosts} from "./hooks/usePosts"
import './styles/App.css'
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader';
import {useFetching} from './hooks/useFetching';

function App() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({sort:'', query:''})
	const [modal, setModal] = useState(false);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	const [fetchPosts, isPostsLoading, postError] = useFetching(async() => {
		const posts = await PostService.getAll();
		setPosts(posts)
	})

	useEffect(() => {
		fetchPosts()
	}, [])

	function createPost (newPost) {
		setPosts([...posts, newPost])
		setModal(false)
	}

	function removePost (post) {
		setPosts(posts.filter(p => p.id !== post.id))
	}

  return (
    <div className="App">
			<Button style={{marginTop:30}} onClick={() => setModal(true)}>Создать пост</Button>
			<Modal visible={modal} setVisible={setModal}>
				<PostForm create={createPost}/>
			</Modal>
			<hr style={{margin:'15px 0'}}/>
			<PostFilter filter={filter} setFilter={setFilter}/>
			{postError &&
				<h1>Произошла ошибка ${postError}</h1>
			}
			{isPostsLoading
				? <div style={{display: 'flex', justifyContent: 'center', marginTop:50}}><Loader/></div>
				: <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'}/>
			}
    </div>
  );
}

export default App;
