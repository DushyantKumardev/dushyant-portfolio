// 1. Preloader 
window.addEventListener('load', function() {
    setTimeout(() => {
    // Hide the preloader
    document.getElementById('preloader').style.display = 'none';
    }, 1000);
});

// 2. Fetch Preloader From Components
document.addEventListener('DOMContentLoaded', () => {
    fetch('../../components/preloader.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('preloader').innerHTML = data;
        });
});


