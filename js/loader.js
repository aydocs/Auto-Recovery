document.addEventListener('DOMContentLoaded', function () {
    const loader = document.getElementById('loader');
    const content = document.querySelector('.content');

    console.log('Loader:', loader);
    console.log('Content:', content);

    if (loader && content) {
        window.onload = function() {
            loader.style.display = 'none'; // Loader'ı gizle
            content.style.display = 'block'; // İçeriği göster
        };
    } else {
        console.error('Loader veya içerik elementi DOM\'da bulunamadı.');
    }
});
