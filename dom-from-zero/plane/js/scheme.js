'use strict';

const form = document.querySelector('form'),
	select = document.querySelector('select'),
	showSchemeButton = document.getElementById('btnSeatMap'),
	mainContainer = document.getElementById('seatMapDiv'),
	mapTitle = document.getElementById('seatMapTitle'),
	totalPax = document.getElementById('totalPax'),
	totalHalf = document.getElementById('totalHalf'),
	totalAdult = document.getElementById('totalAdult'),
	fullButton = document.getElementById('btnSetFull'),
	emptyButton = document.getElementById('btnSetEmpty');

let response,
	title;

select.addEventListener('change', sendRequest);
showSchemeButton.addEventListener('click', showScheme);

fullButton.addEventListener('click', fullSeats);
emptyButton.addEventListener('click', emptySeats);
fullButton.disable = true;
emptyButton.disable = true;

function sendRequest(event) {

	let id = event.target.value;
	
	let xhr = new XMLHttpRequest();
	xhr.open('GET', `https://neto-api.herokuapp.com/plane/${id}`, true);
	xhr.addEventListener('load', schemeSeats);
	xhr.send();
	
	const options = event.target.getElementsByTagName('option');
	
	for (let option of options) {
		if (option.value === id) {
			title = option.textContent;
		}
	}
}

function schemeSeats(event) {

	if (event.target.status === 200) {
		response = JSON.parse(event.target.responseText);
	}
}

function showScheme(event) {

	event.preventDefault();
	mainContainer.textContent = '';

	fullButton.disable = false;
	emptyButton.disable = false;

	mapTitle.textContent = title;

	totalPax.textContent = 0;
	totalHalf.textContent = 0;
	totalAdult.textContent = 0;

	for (let i = 0; i < response.scheme.length; i++) {
		if (response.scheme[i] === 6) {
			mainContainer.appendChild(createRowSix(i));
		} else if (response.scheme[i] === 4) {
			mainContainer.appendChild(createRowFour(i));
		}
	}
	const objectSeats = mainContainer.querySelectorAll('div.seat');
	for (let seat of objectSeats) {
		seat.addEventListener('click', changeSeat);
	}
}

function createRowSix(number) {
	
	return element('div', { class: 'row seating-row text-center' }, [
		element('div', { class: 'col-xs-1 row-number' }, [
			element('h2', { class: '' }, `${number}`)
		]),
		element('div', { class: 'col-xs-5' }, [
			element('div', { class: 'col-xs-4 seat' }, [
				element('span', { class: 'seat-label' }, 'A')
			]),
			element('div', { class: 'col-xs-4 seat' }, [
				element('span', { class: 'seat-label' }, 'B')
			]),
			element('div', { class: 'col-xs-4 seat' }, [
				element('span', { class: 'seat-label' }, 'C')
			])
		]),
		element('div', { class: 'col-xs-5' }, [
			element('div', { class: 'col-xs-4 seat' }, [
				element('span', { class: 'seat-label' }, 'D')
			]),
			element('div', { class: 'col-xs-4 seat' }, [
				element('span', { class: 'seat-label' }, 'E')
			]),
			element('div', { class: 'col-xs-4 seat' }, [
				element('span', { class: 'seat-label' }, 'F')
			])
		])
	])
}

function createRowFour(number) {

	return element('div', { class: 'row seating-row text-center' }, [
		element('div', { class: 'col-xs-1 row-number' }, [
			element('h2', { class: '' }, `${number}`)
		]),
		element('div', { class: 'col-xs-5' }, [
			element('div', { class: 'col-xs-4 no-seat' }),
			element('div', { class: 'col-xs-4 seat' }, [
				element('span', { class: 'seat-label' }, 'B')
			]),
			element('div', { class: 'col-xs-4 seat' }, [
				element('span', { class: 'seat-label' }, 'C')
			])
		]),
		element('div', { class: 'col-xs-5' }, [
			element('div', { class: 'col-xs-4 seat' }, [
				element('span', { class: 'seat-label' }, 'D')
			]),
			element('div', { class: 'col-xs-4 seat' }, [
				element('span', { class: 'seat-label' }, 'E')
			]),
			element('div', { class: 'col-xs-4 no-seat' })
		])
	])
}

function element(tagName, attributes, children) {

	const element = document.createElement(tagName);

	if (typeof attributes === 'object') {
		Object.keys(attributes).forEach(i => element.setAttribute(i, attributes[i]));
	}

	if (typeof children === 'string') {
		element.textContent = children;
	} else if (children instanceof Array) {
		children.forEach(child => element.appendChild(child));
	}

	return element;
}

function fullSeats() {

	event.preventDefault();
	const seats = mainContainer.querySelectorAll('div.seat');

	for (let seat of seats) {
		if (seat.classList.contains('half')) {
			seat.classList.remove('half');
		}
		seat.classList.add('adult');
	}

	footer();
}


function emptySeats() {

	event.preventDefault();
	const seats = mainContainer.querySelectorAll('div.seat');

	for (let seat of seats) {
		if (seat.classList.contains('half')) {
			seat.classList.remove('half');
		}
		if (seat.classList.contains('adult')) {
			seat.classList.remove('adult');
		}
	}

	footer();
}

function changeSeat(event) {

	event.preventDefault();
	const target = event.currentTarget;

	if (event.altKey) {
		if (target.classList.contains('adult')) {
			target.classList.remove('adult');
		}
		if (!(target.classList.contains('half'))) {
			target.classList.add('half');
		} else {
			target.classList.remove('half');
		}
	} else {
		if (target.classList.contains('half')) {
			target.classList.remove('half');
		}
		if (!(target.classList.contains('adult'))) {
			target.classList.add('adult');
		} else {
			target.classList.remove('adult');
		}
	}

	footer();
}

function footer() {

	const seats = mainContainer.querySelectorAll('div.seat');
	let adults = 0;
	let children = 0;

	for (let seat of seats) {
		if (seat.classList.contains('half')) {
			children++;
		}
		if (seat.classList.contains('adult')) {
			adults++;
		}
	}

	totalAdult.textContent = adults;
	totalHalf.textContent = children;
	totalPax.textContent = +totalAdult.textContent + +totalHalf.textContent;
}