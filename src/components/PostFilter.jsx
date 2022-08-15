import React from 'react'
import Input from './UI/Input/Input'
import Select from './UI/Select/Select'

function PostFilter({filter, setFilter}) {
	return (
		<div>
			<Input
				value={filter.query}
				onChange={e => setFilter({...filter, query: e.target.value})}
				placeholder={"Поиск..."}
			/>
			<Select
				defaultValue='Сортировка'
				value={filter.sort}
				onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
				options={[
					{value:'title', name:'По названию'},
					{value:'body', name:'По описанию'}
				]}
			/>
		</div>
	)
}

export default PostFilter