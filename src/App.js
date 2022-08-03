import {React, useState} from 'react'
import PostForm from './components/PostForm';
import PostList from './components/PostList';
import Select from './components/UI/Select/Select';
import './styles/App.css'

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: 'JavaScript', body: 'Description'},
		{id: 2, title: 'JavaScript 2', body: 'Description 2'},
		{id: 3, title: 'JavaScript 2', body: 'Description 3'},
	])

	const [selectedSort, setSelectedSort] = useState('')

	function createPost (newPost) {
		setPosts([...posts, newPost])
	}

	function removePost (post) {
		setPosts(posts.filter(p => p.id !== post.id))
	}

	function sortPosts (sort) {
		setSelectedSort(sort)
		setPosts(posts.sort())
	}

  return (
    <div className="App">
			<PostForm create={createPost}/>
			<hr style={{margin:'15px 0'}}/>
			<div>
				<Select
					defaultValue='Сортировка'
					value={selectedSort}
					onChange={sortPosts}
					options={[
						{value:'title', name:'По названию'},
						{value:'body', name:'По описанию'}
					]}
				/>
			</div>
			{posts.length
				? <PostList remove={removePost} posts={posts} title={'Список постов'}/>
				: <h1 style={{textAlign:'center'}}>Посты не были найдены</h1>
			}
    </div>
  );
}

export default App;
