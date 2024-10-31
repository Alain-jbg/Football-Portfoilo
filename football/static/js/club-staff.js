let navbar = document.querySelector('.navbar');
var links = document.querySelectorAll('.navbar a');
var sections = document.querySelectorAll('section');
let menu = document.querySelector('#menu-bars');

const fixturesLink = document.getElementById("fixtures-link");
const resultsLink = document.getElementById("results-link");

const fixturesSection = document.getElementById("fixtures-section");
const resultsSection = document.getElementById("results-section");

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

links.forEach(function(link) {
    link.addEventListener('click', function(event) {
        event.preventDefault(true);
        links.forEach(function(link) {
            link.classList.remove('active');
        });
        sections.forEach(function(section) {
            section.classList.remove('live');
        });

        this.classList.add('active');
        var targetSectionClass = this.getAttribute('href').substring(1);
        var targetSection = document.querySelector('.' + targetSectionClass);
        targetSection.classList.add('live');

        // Scroll to the top of the target section
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Close the navbar after a link is clicked
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
    });
});

// Function to toggle visibility of matches sections
function toggleSection(sectionToShow) {
    const sections = [fixturesSection, resultsSection];
    sections.forEach(section => {
        section.style.display = "none";
    });
    sectionToShow.style.display = "block";
}

// Event listeners for toggling content sections
fixturesLink.addEventListener("click", function(event) {
    event.preventDefault();
    resultsLink.classList.remove('active');
    fixturesLink.classList.add('active')
    toggleSection(fixturesSection);
});

resultsLink.addEventListener("click", function(event) {
    event.preventDefault();
    fixturesLink.classList.remove('active');
    resultsLink.classList.add('active')
    toggleSection(resultsSection);
});

// By default, show fixtures section
toggleSection(fixturesSection);