// JewishTimeLine Application Logic
const events = MOCK_DATA;
let filteredEvents = [...events];

function renderCalendar() {
    const container = document.getElementById('calendar-container');
    container.innerHTML = '';
    filteredEvents.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.className = `event-card ${event.type}`;
        eventCard.innerHTML = `
            <h4 class="font-bold text-lg">${event.name}</h4>
            <p class="text-sm text-gray-300">${event.date}</p>
            <p class="text-xs mt-2">${event.description.substring(0, 50)}...</p>
        `;
        eventCard.addEventListener('click', () => showEventDetails(event));
        container.appendChild(eventCard);
    });
}

function showEventDetails(event) {
    const detailsContainer = document.getElementById('event-details');
    detailsContainer.innerHTML = `
        <h3 class="text-2xl font-bold text-blue-400 mb-2">${event.name}</h3>
        <p class="text-gray-300 mb-2"><strong>Date:</strong> ${event.date}</p>
        <p class="text-gray-300 mb-2"><strong>Type:</strong> ${event.type}</p>
        <p class="text-gray-300">${event.description}</p>
        ${event.source ? `<p class="text-sm text-gray-400 mt-4">Source: ${event.source}</p>` : ''}
    `;
}

function filterEvents(type) {
    if (type === 'all') {
        filteredEvents = [...events];
    } else {
        filteredEvents = events.filter(event => event.type === type);
    }
    renderCalendar();
}

// Event listeners for filter buttons
document.getElementById('filter-holidays').addEventListener('click', () => filterEvents('holiday'));
document.getElementById('filter-historical').addEventListener('click', () => filterEvents('historical'));
document.getElementById('filter-all').addEventListener('click', () => filterEvents('all'));

// Language switch functionality
document.getElementById('language-select').addEventListener('change', function() {
    const lang = this.value;
    // For now, just log the selected language and show an alert.
    // In a real implementation, you would update the entire UI text.
    console.log('Language switched to:', lang);
    alert(`Language switched to ${lang === 'he' ? 'Hebrew' : 'English'}. Full translation would be implemented here.`);
});

// Initial render
renderCalendar();

// Simulate loading animation
window.addEventListener('load', () => {
    console.log('JewishTimeLine MVP loaded successfully!');
});