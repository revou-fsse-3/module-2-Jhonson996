const btnNav = document.getElementById('btn-nav');
const headerNav = document.querySelector('header');

btnNav.addEventListener('click', () => {
    if (headerNav.style.left === '0px') {
        closeNavBar();
    } else {
        openNavBar();
    }
});

function openNavBar() {
    headerNav.style.left = '0';
}

function closeNavBar() {
    headerNav.style.left = '-20rem';
}

const menuItems = document.querySelectorAll('nav a');
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        closeNavBar();
    });
});

// munculin placeholder dulu
document.addEventListener("DOMContentLoaded", function () {
	var mapIframe = document.getElementById("google-map");
	var mapPlaceholder = document.getElementById("map-placeholder");

	mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9988.829689203925!2d73.08999453450154!3d-0.6071675965626031!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x24b59f84718a48af%3A0x245be39225de10cd!2sHithadhoo%20Swimming%20Track!5e0!3m2!1sen!2sid!4v1697728202681!5m2!1sen!2sid";

	mapIframe.onload = function () {
	  mapPlaceholder.style.display = "none";
	};
  });

// Submit-form
function submitForm() {
    // Mendapatkan nilai dari inputan
		var fullName = document.getElementById("full_name").value;
		var attendance = document.querySelector('input[name="attendance"]:checked').value;
		var wishes = document.getElementById("wishes").value;
	
	//unhide text 
		var list = document.getElementById("list");
		if (window.getComputedStyle( list ).display === "none") {
			list.style.display = "flex";
		}
	

	// elemen untuk menampilkan hasil input
		var listItem0 = document.createElement("div");
		listItem0.className = "name-attend";
		listItem0.innerHTML = fullName;

		var listItem2 = document.createElement("p");
		listItem2.innerHTML = "Wishes : ";

		var listItem3 = document.createElement("p");
		listItem3.className = "wishes-attend";
		listItem3.innerHTML = wishes;

            // untuk Attend yes or no tidak di tampilkan
            var listItem1 = document.createElement("div");
            listItem1.className = "attend-y-n";
            listItem1.innerHTML = attendance;

    // Membuat div untuk menampilkan hasil input
		var listDiv = document.createElement("div");
		listDiv.className = "list-attend";


	// Menambahkan elemen-elemen ke dalam div pembungkus
		listDiv.appendChild(listItem0);
		// listDiv.appendChild(listItem1);
		listDiv.appendChild(listItem2);
		listDiv.appendChild(listItem3);

	// Menambahkan list div  ke daftar kehadiran
		var attendanceList = document.getElementById("attendance-list");
		attendanceList.appendChild(listDiv);

	alert(`Thank you, ${fullName}! For your Participation.`);
	
	// Reset formulir
	document.getElementById("attendance-form").reset();
	
  }

// modal
var modal = document.getElementById("modalImg");
var btn = document.getElementById("BtnImg");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// Fungsi u/darkMode
const darkModeToggle = document.getElementById('dark-mode-toggle');
const bodyElement = document.body;

darkModeToggle.addEventListener('change', function() {
    if (darkModeToggle.checked) {
        bodyElement.classList.add('dark-mode');
        sessionStorage.setItem('darkMode', 'enabled');
    } else {
        bodyElement.classList.remove('dark-mode');
        sessionStorage.setItem('darkMode', 'disabled');
    }
});

// check DarkMode aktif?
window.onload = function () {
    const darkModeStatus = sessionStorage.getItem('darkMode');
    if (darkModeStatus === 'enabled') {
        darkModeToggle.checked = true;
        bodyElement.classList.add('dark-mode');
    }
}
