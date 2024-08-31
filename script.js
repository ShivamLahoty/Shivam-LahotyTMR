document.getElementById('infoButton').addEventListener('click', function() {
    var infoContent = document.getElementById('infoContent');
    if (infoContent.style.display === 'none') {
        infoContent.style.display = 'block';
    } else {
        infoContent.style.display = 'none';
    }
});
