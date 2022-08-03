import React from 'react'
import Button from './UI/Button/Button'

function PostItem(props) {
	return (
		<div>
			<div className="post">
				<div className="post-content">
					<strong>{props.number}. {props.post.title}</strong>
					<div>
						{props.post.body}
					</div>
				</div>
				<div className="post-btns">
					<Button onClick={() => props.remove(props.post)}>Удаление</Button>
				</div>
			</div>
		</div>
	)
}

export default PostItem