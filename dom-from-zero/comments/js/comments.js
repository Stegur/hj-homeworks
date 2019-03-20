'use strict';

function showComments(list) {

	const commentsContainer = document.querySelector('.comments');
	
	for (let comment of list) {
		commentsContainer.appendChild(createComment(comment));
	}
}

function createComment(comment) {

	return element('div', { class: 'comment-wrap' }, [
		element('div', { class: 'photo', title: `${comment.author.name}` }, [
			element('div', { class: 'avatar', style: `background-image: url("${comment.author.pic}")` }),
		]),
		element('div', { class: 'comment-block' }, [
			element('p', { class: 'comment-text' }, `${comment.text}`),
			element('div', { class: 'bottom-comment' }, [
				element('div', { class: 'coment-date' }, `${new Date(comment.date).toLocaleString('ru-Ru')}`),
				element('ul', { class: 'comment-actions' }, [
					element('li', { class: 'complain' }, 'Пожаловаться'),
					element('li', { class: 'reply' }, 'Ответить')
				])
			])
		])
	]);
}

function element(tagName, attributes, children) {

	const element = document.createElement(tagName);

	if (typeof attributes === 'object') {
		Object.keys(attributes).forEach(i => element.setAttribute(i, attributes[i]));
	}

	if (typeof children === 'string') {
		element.innerText = children;
	} else if (children instanceof Array) {
		children.forEach(child => element.appendChild(child));
	}

	return element;
}

fetch('https://neto-api.herokuapp.com/comments')
	.then(res => res.json())
	.then(showComments);
