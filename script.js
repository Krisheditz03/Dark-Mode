document.addEventListener('DOMContentLoaded', function() {
    const modeToggleBtn = document.getElementById('modeToggle');
    let isDarkMode = false;

    modeToggleBtn.addEventListener('click', function() {
        isDarkMode = !isDarkMode;
        updateMode();
    });

    function updateMode() {
        if (isDarkMode) {
            document.body.style.backgroundColor = '#111'; // Dark background color
            document.body.style.color = '#fff'; // White text color
            modeToggleBtn.textContent = 'Dark Mode';
        } else {
            document.body.style.backgroundColor = '#fff'; // Default background color
            document.body.style.color = '#000'; // Default text color
            modeToggleBtn.textContent = 'Normal Mode';
        }
    }
});
