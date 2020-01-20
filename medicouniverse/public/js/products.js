var dropdown = document.getElementsByClassName('dropdown-btn');
var i;

for (i = 0; i < dropdown.length; i++) {
	dropdown[i].addEventListener('click', function() {
		this.classList.toggle('active');
		var dropdownContent = this.nextElementSibling;
		if (dropdownContent.style.display === 'none') {
			dropdownContent.style.display = 'block';
		} else {
			dropdownContent.style.display = 'none';
		}
	});
}
