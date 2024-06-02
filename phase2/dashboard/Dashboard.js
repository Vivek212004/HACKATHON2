const allSideMenu = document.querySelectorAll('#sidebar .side-menu.top li a');

allSideMenu.forEach(item=> {
	const li = item.parentElement;

	item.addEventListener('click', function () {
		allSideMenu.forEach(i=> {
			i.parentElement.classList.remove('active');
		})
		li.classList.add('active');
	})
});




// TOGGLE SIDEBAR
const menuBar = document.querySelector('#content nav .bx.bx-menu');
const sidebar = document.getElementById('sidebar');

menuBar.addEventListener('click', function () {
	sidebar.classList.toggle('hide');
})







const searchButton = document.querySelector('#content nav form .form-input button');
const searchButtonIcon = document.querySelector('#content nav form .form-input button .bx');
const searchForm = document.querySelector('#content nav form');

searchButton.addEventListener('click', function (e) {
	if(window.innerWidth < 576) {
		e.preventDefault();
		searchForm.classList.toggle('show');
		if(searchForm.classList.contains('show')) {
			searchButtonIcon.classList.replace('bx-search', 'bx-x');
		} else {
			searchButtonIcon.classList.replace('bx-x', 'bx-search');
		}
	}
})





if(window.innerWidth < 768) {
	sidebar.classList.add('hide');
} else if(window.innerWidth > 576) {
	searchButtonIcon.classList.replace('bx-x', 'bx-search');
	searchForm.classList.remove('show');
}


window.addEventListener('resize', function () {
	if(this.innerWidth > 576) {
		searchButtonIcon.classList.replace('bx-x', 'bx-search');
		searchForm.classList.remove('show');
	}
})



const switchMode = document.getElementById('switch-mode');

switchMode.addEventListener('change', function () {
    if (this.checked) {
        document.body.classList.add('dark');
    } else {
        document.body.classList.remove('dark');
    }
});
const chatbotButton = document.getElementById('chatbot-button');
const chatbot = document.getElementById('chatbot');

chatbotButton.addEventListener('click', function () {
    chatbot.classList.toggle('hidden');
});

const sendButton = document.getElementById('sendButton');
sendButton.addEventListener('click', function () {
    const userInput = document.getElementById('userInput');
    const message = userInput.value;
    if (message.trim() !== "") {
        const messageDiv = document.createElement('div');
        messageDiv.textContent = message;
        document.getElementById('messages').appendChild(messageDiv);
        userInput.value = '';
    }
});

// Get the profile icon element
const profileIcon = document.querySelector('.profile');

// Get the profile dropdown element
const profileDropdown = document.querySelector('.profile-dropdown');

// Add event listener to the profile icon
profileIcon.addEventListener('click', () => {
    profileDropdown.classList.toggle('show');
});

// Optionally, add event listener to the change password button
const changePasswordBtn = document.getElementById('change-password-btn');
changePasswordBtn.addEventListener('click', () => {
    // Implement the logic to change the password
    console.log('Change password clicked');
    // You can replace the console.log statement with your logic to change the password
});
