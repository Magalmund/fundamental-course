import {React, useState} from 'react'
import PostList from './components/PostList';
import Button from './components/UI/Button/Button';
import Input from './components/UI/Input/Input';
import './styles/App.css'

function App() {
	const [posts, setPosts] = useState([
		{id: 1, title: 'JavaScript', body: 'Description'},
		{id: 2, title: 'JavaScript 2', body: 'Description 2'},
		{id: 3, title: 'JavaScript 2', body: 'Description 3'},

	])


	const [post, setPost] = useState ({title: '', body: ''})
	function addNewPost (e) {
		e.preventDefault();
		setPosts([...posts, {...post, id: Date.now()}])
		setPost({title: '', body: ''})
	}
  return (
    <div className="App">
			<form>
				<Input type="text" placeholder="Название поста" value={post.title} onChange={e => setPost({...post, title: e.target.value})}/>
				<Input type="text" placeholder="Описание поста" value={post.body} onChange={e => setPost({...post, body: e.target.value})}/>
				<Button onClick={addNewPost}>Создать пост</Button>
			</form>
			<PostList posts={posts} title={'Список постов'}/>
    </div>
  );
}

export default App;
