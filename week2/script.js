
// Assignment 4: HTML DOM and Event Handling

// Request 1: Click to Change Text.
// When the user clicks on the "Welcome Message" block, change text to "Have a Good Time!".


let headMsg = document.querySelector('.msg');

headMsg.addEventListener('click', () => {
	headMsg.textContent =  'Have a Good Time!';         
});


// Request 2: Click to Show/Close Menu.
// When the user clicks the menu at the top-right corner, show the hidden mobile menu. 
// After that, the user can click the close button to hide it.

let toggleMenuBtn = document.querySelector('.menu-icon');
let mobileMenuBox = document.getElementById('myLinks');
let closeMenuBtn = document.querySelector('.close-icon');

toggleMenuBtn.addEventListener('click', () => {
		if (mobileMenuBox.style.display ==  'none' || mobileMenuBox.style.display =='') {
			mobileMenuBox.style.display = 'block';
		}
});

closeMenuBtn.addEventListener('click', () => {
		if (mobileMenuBox.style.display ==  'block') {
			mobileMenuBox.style.display = 'none';
		}

});


// Request 3: Click to Show More Content Boxes.
// There are some more content boxes waiting to show. 
// When the user clicks the Call-to-Action button, show those hidden content boxes.

let callToActionBtn = document.querySelector('.btn');
let moreBoxRow = document.querySelector('.morebox');

callToActionBtn.addEventListener('click', () => {
	if (moreBoxRow.style.display ==  'none' || moreBoxRow.style.display =='') {
	moreBoxRow.style.display =  'block';
	}    
});


