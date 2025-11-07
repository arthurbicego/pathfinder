// Dark Mode Handling
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  document.documentElement.classList.add('dark');
} else {
  document.documentElement.classList.remove('dark');
}

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    if (event.matches) {
        document.documentElement.classList.add('dark');
    } else {
        document.documentElement.classList.remove('dark');
    }
});

// Slider functionality
const daySlider = document.getElementById('day-slider');
const dayCount = document.getElementById('day-count');

daySlider.addEventListener('input', () => {
  const days = daySlider.value;
  dayCount.textContent = `${days} dias`;

  const progress = ((days - daySlider.min) / (daySlider.max - daySlider.min)) * 100;
  document.documentElement.style.setProperty('--slider-progress', progress);
});

// Set initial slider progress
const initialProgress = ((daySlider.value - daySlider.min) / (daySlider.max - daySlider.min)) * 100;
document.documentElement.style.setProperty('--slider-progress', initialProgress);

// Interest card selection
const interestCards = document.querySelectorAll('.interest-card');

interestCards.forEach(card => {
  card.addEventListener('click', () => {
    // Check if the card is currently selected
    const isSelected = card.classList.contains('border-primary');

    // Toggle border styles
    card.classList.toggle('border-primary', !isSelected);
    card.classList.toggle('border-2', !isSelected);
    card.classList.toggle('border-gray-200', isSelected);
    card.classList.toggle('dark:border-gray-700', isSelected);

    // Toggle background styles
    card.classList.toggle('bg-primary/5', !isSelected);
    card.classList.toggle('dark:bg-primary/10', !isSelected);
    card.classList.toggle('bg-white', isSelected);
    card.classList.toggle('dark:bg-background-dark', isSelected);

    const iconContainer = card.querySelector('div');
    iconContainer.classList.toggle('bg-primary', !isSelected);
    iconContainer.classList.toggle('text-white');
    iconContainer.classList.toggle('bg-gray-100');
    iconContainer.classList.toggle('dark:bg-gray-700');
    iconContainer.classList.toggle('text-text-subtle-light');
    iconContainer.classList.toggle('dark:text-text-subtle-dark');

    const text = card.querySelector('p');
    text.classList.toggle('text-primary');
    text.classList.toggle('font-semibold');
    text.classList.toggle('text-text-subtle-light');
    text.classList.toggle('dark:text-text-subtle-dark');
    text.classList.toggle('font-medium');
  });
});
