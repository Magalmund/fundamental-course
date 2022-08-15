import {React, useState, useMemo} from 'react'
import PostFilter from './components/PostFilter';
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import './styles/App.css'

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: 'JavaScript', body: 'Description'},
		{id: 2, title: 'JavaScript 2', body: 'Description 2'},
		{id: 3, title: 'JavaScript 2', body: 'Description 3'},
	])

	const [filter, setFilter] = useState({sort:'', query:''})

	const sortedPosts = useMemo(() => {
		if(filter.sort) {
			return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
		}
		return posts
	}, [filter.sort, posts])

	const sortedAndSearchedPosts = useMemo(() => {
		return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query))
	}, [filter.query, sortedPosts])

	function createPost (newPost) {
		setPosts([...posts, newPost])
	}

	function removePost (post) {
		setPosts(posts.filter(p => p.id !== post.id))
	}



  return (
    <div className="App">
			<PostForm create={createPost}/>
			<hr style={{margin:'15px 0'}}/>
			<PostFilter filter={filter} setFilter={setFilter}/>
			
			{/* {sortedAndSearchedPosts.length
				? <PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'}/>
				: <h1 style={{textAlign:'center'}}>Посты не были найдены</h1>
			} */}

			<PostList remove={removePost} posts={sortedAndSearchedPosts} title={'Список постов'}/>
    </div>
  );
}

export default App;
