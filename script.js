
document.addEventListener('DOMContentLoaded', function() {
    // Timeline Data
    const timelineData = [
        { year: '1931', title: 'Birth', description: 'Born in Rameswaram, Tamil Nadu, India.' },
        { year: '1969', title: 'ISRO', description: 'Joined ISRO and played a major role in developing India’s first Satellite Launch Vehicle (SLV-III).' },
        { year: '1980s', title: 'Missile Man', description: 'Led the development of India’s ballistic missile and launch vehicle technology.' },
        { year: '1998', title: 'Pokhran-II', description: 'Played a pivotal role in India’s nuclear tests making India a nuclear power.' },
        { year: '2002-2007', title: 'President of India', description: 'Served as the 11th President of India, fondly called the "People’s President".' },
        { year: '2015', title: 'Legacy', description: 'Passed away while delivering a lecture, inspiring generations till his last breath.' }
    ];

    // Achievements Data
    const achievementsData = [
        { title: 'Missile Man of India', icon: '🚀', description: 'Key architect of India’s missile program.', details: 'Developed Agni and Prithvi missiles which strengthened India’s defense.' },
        { title: 'Pokhran-II', icon: '⚛️', description: 'Led India’s nuclear weapon tests in 1998.', details: 'Boosted India’s position as a nuclear power.' },
        { title: 'Bharat Ratna', icon: '🏅', description: 'Highest civilian award of India.', details: 'Awarded in 1997 for his contribution to science and service to the nation.' },
        { title: 'People’s President', icon: '🇮🇳', description: '11th President of India (2002–2007).', details: 'Remembered for his humility, vision, and connection with students.' },
        { title: 'Author', icon: '📚', description: 'Wrote inspirational books.', details: 'His works like "Wings of Fire" and "Ignited Minds" continue to inspire millions.' },
        { title: 'Teacher', icon: '👨‍🏫', description: 'Loved teaching and interacting with students.', details: 'Spent his post-presidency years motivating youth and encouraging innovation.' }
    ];

    // Gallery Data
    const galleryData = [
        { src: 'https://i.pinimg.com/1200x/2f/f1/f2/2ff1f24de41da3989d03eb341e56b7cb.jpg', alt: 'Kalam Portrait', title: 'Portrait' },
        { src: 'https://i.pinimg.com/736x/a9/ee/62/a9ee62e02cd24aa9d4b83560cea0c06c.jpg', alt: 'With Students', title: 'Inspiring Youth' },
        { src: 'https://i.pinimg.com/736x/a3/55/a1/a355a10c0f84ce48a208a8c8cf472e11.jpg', alt: 'Kalam with Book', title: 'Author' },
        { src: 'https://i.pinimg.com/736x/7a/81/4e/7a814e63128e88701d4186b2b9351ef9.jpg', alt: 'Kalam Speech', title: 'Public Speech' }
    ];

// Typing Effect
const heroTitle = document.getElementById('hero-title');
const titleText = "Dr. A. P. J.|Abdul Kalam"; 
let i = 0;

function typeWriter() {
    if (i < titleText.length) {
        if (titleText.charAt(i) === "|") {
            heroTitle.innerHTML += "<br>";
        } else {
            heroTitle.innerHTML += titleText.charAt(i);
        }
        i++;
        setTimeout(typeWriter, 150);
    }
}
typeWriter();




    // Timeline Render
    const timelineContainer = document.querySelector('#timeline .timeline-container');
    timelineData.forEach((item, index) => {
        const alignment = index % 2 === 0 ? 'flex-row-reverse' : '';
        timelineContainer.innerHTML += `
            <div class="mb-8 flex justify-between items-center w-full ${alignment}">
                <div class="order-1 w-5/12"></div>
                <div class="z-20 flex items-center order-1 bg-red-500 shadow-xl w-8 h-8 rounded-full">
                    <h1 class="mx-auto font-semibold text-lg text-white">${item.year}</h1>
                </div>
                <div class="order-1 card rounded-lg shadow-xl w-5/12 px-6 py-4 timeline-item">
                    <h3 class="font-bold text-white text-xl">${item.title}</h3>
                    <p class="text-sm text-gray-400">${item.description}</p>
                </div>
            </div>
        `;
    });

    // Achievements Render
    const achievementsContainer = document.querySelector('#achievements .grid');
    achievementsData.forEach((a, index) => {
        achievementsContainer.innerHTML += `
            <div class="card p-6 rounded-lg achievement-card animate-on-scroll" style="transition-delay: ${index * 100}ms">
                <div class="flex items-center mb-4">
                    <span class="text-4xl mr-4 achievement-icon">${a.icon}</span>
                    <h3 class="text-2xl font-bold text-white">${a.title}</h3>
                </div>
                <p class="text-gray-400 mb-2">${a.description}</p>
                <div class="details"><p class="text-gray-500 mt-4">${a.details}</p></div>
            </div>
        `;
    });

    // Gallery Render
    const galleryContainer = document.querySelector('#gallery .grid');
    galleryData.forEach((image, index) => {
        const galleryElement = document.createElement('div');
        galleryElement.className = 'gallery-item animate-on-scroll';
        galleryElement.style.transitionDelay = `${index * 50}ms`;

        const img = document.createElement('img');
        img.src = image.src;
        img.alt = image.alt;
        img.onerror = function() { this.src='https://placehold.co/400x300/0a0a0a/FFFFFF?text=Image+Error'; };

        const caption = document.createElement('p');
        caption.textContent = image.title;
        caption.className = "absolute bottom-2 left-2 text-sm text-white bg-black bg-opacity-50 px-2 py-1 rounded";

        galleryElement.appendChild(img);
        galleryElement.appendChild(caption);
        galleryContainer.appendChild(galleryElement);

        galleryElement.addEventListener('click', () => {
            document.querySelectorAll('.gallery-item').forEach(item => item.classList.remove('bright'));
            galleryElement.classList.toggle('bright');
        });
    });

    // Scroll Animation
    const scrollElements = document.querySelectorAll('.animate-on-scroll, .timeline-item');
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('is-visible', 'visible'); });
    }, { threshold: 0.1 });
    scrollElements.forEach(el => observer.observe(el));
});
