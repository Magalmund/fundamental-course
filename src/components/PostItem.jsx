import React from 'react'
import Button from './UI/Button/Button'
import {useNavigate} from "react-router-dom";

function PostItem(props) {
	const router = useNavigate()
	return (
		<div>
			<div className="post">
				<div className="post-content">
					<strong>{props.post.id}. {props.post.title}</strong>
					<div>
						{props.post.body}
					</div>
				</div>
				<div className="post-btn">
					<Button onClick={() => router(`/posts/${props.post.id}`)}>Открыть</Button>
					<Button onClick={() => props.remove(props.post)}>Удаление</Button>
				</div>
			</div>
		</div>
	)
}

export default PostItem