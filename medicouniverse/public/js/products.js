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

$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.babybath').click(function() {
		$('html, body').animate(
			{
				scrollTop: 85
			},
			600
		);
		return false;
	});
});
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.babyDipers').click(function() {
		$('html, body').animate(
			{
				scrollTop: 600
			},
			600
		);
		return false;
	});
});
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.hairCare').click(function() {
		$('html, body').animate(
			{
				scrollTop: 1050
			},
			600
		);
		return false;
	});
});
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.lipcare').click(function() {
		$('html, body').animate(
			{
				scrollTop: 1300
			},
			600
		);
		return false;
	});
});
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.fashwash').click(function() {
		$('html, body').animate(
			{
				scrollTop: 1800
			},
			600
		);
		return false;
	});
});
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.bodybath').click(function() {
		$('html, body').animate(
			{
				scrollTop: 2300
			},
			600
		);
		return false;
	});
});
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.skinsuppliments').click(function() {
		$('html, body').animate(
			{
				scrollTop: 2500
			},
			600
		);
		return false;
	});
});
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.patangali').click(function() {
		$('html, body').animate(
			{
				scrollTop: 3000
			},
			600
		);
		return false;
	});
});
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.dabur').click(function() {
		$('html, body').animate(
			{
				scrollTop: 3500
			},
			600
		);
		return false;
	});
});
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.massgainer').click(function() {
		$('html, body').animate(
			{
				scrollTop: 3700
			},
			600
		);
		return false;
	});
});
$(document).ready(function() {
	$(window).scroll(function() {
		if ($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.exercise').click(function() {
		$('html, body').animate(
			{
				scrollTop: 4700
			},
			600
		);
		return false;
	});
});
$(document).ready(function() {
	$(window).scroll(function() {
		if ($('products').scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.horlicks').click(function() {
		$('html, body').animate(
			{
				scrollTop: 2500
			},
			600
		);
		return false;
	});
});

// $('#deleteCookie').click(function(e) {
// 	e.preventDefault();
// 	$.removeCookie('connect.sid');
// 	location.reload();
// });
