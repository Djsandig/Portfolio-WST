const contactMeBtn = document.getElementById('contactMeBtn');
const contactTab = document.getElementById('contact');

contactMeBtn.addEventListener('click', function() {
    contactTab.classList.toggle('hidden');
});