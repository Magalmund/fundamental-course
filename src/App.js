import {React, useEffect, useState} from 'react'
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Button from './components/UI/Button/Button';
import Modal from './components/UI/Modal/Modal';
import {usePosts} from "./hooks/usePosts"
import './styles/App.css'
import PostService from './API/PostService';
import Loader from './components/UI/Loader/Loader'

function App() {
	const [posts, setPosts] = useState([])
	const [filter, setFilter] = useState({sort:'', query:''})
	const [modal, setModal] = useState(false);
	const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
	const [isPostsLoading, setIsPostsLoading] = useState(false);

	useEffect(() => {
		fetchPosts()
	}, [])

	function createPost (newPost) {
		setPosts([...posts, newPost])
		setModal(false)
	}

	async function fetchPosts() {
		setIsPostsLoading(true);
		const posts = await PostService.getAll();
		setPosts(posts);
		setIsPostsLoading(false);
	}

	function removePost (post) {
		setPosts(posts.filter(p => p.id !== post.id))
	}

  return (
    <div className="App">
			<Button onClick={fetchPosts}>Get posts</Button>
			<Button style={{marginTop:30}} onClick={() => setModal(true)}>Создать пользователя</Button>
			<Modal visible={modal} setVisible={setModal}>
				<PostForm create={createPost}/>
			</Modal>
			<hr style={{margin:'15px 0'}}/>
			<PostFilter filter={filter} setFilter={setFilter}/>
			{isPostsLoading
				? <div style={{display: 'flex', justifyContent: 'center', marginTop:50}}><Loader/></div>
				: <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'}/>
			}
    </div>
  );
}

export default App;
