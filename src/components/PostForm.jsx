import {React, useState} from 'react'
import Input from './UI/Input/Input'
import Button from './UI/Button/Button'



function PostForm({create}) {
	const [post, setPost] = useState({title:'', body:''})

	function addNewPost(e) {
		e.preventDefault();
		const newPost = {...post, id: Date.now()}
		setPost({title: '', body:''})
		create(newPost)
	}

	return (
		<form>
				<Input type="text" placeholder="Название поста" value={post.title} onChange={e => setPost({...post, title: e.target.value})}/>
				<Input type="text" placeholder="Описание поста" value={post.body} onChange={e => setPost({...post, body: e.target.value})}/>
				<Button onClick={addNewPost}>Создать пост</Button>
		</form>
	)
}

export default PostForm