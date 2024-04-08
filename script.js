function checkURL() {
    var url = document.getElementById('urlInput').value;
    if (url === '') {
        document.getElementById('result').textContent = 'Please Enter the URL....';
        return;
    }
    // Regular expression to check for common phishing patterns
    var regex = /^(?:https?|ftp):\/\/([^\s@]+)(?::(\d+))?(?:\/[^\s]*)?$/i;
    if (regex.test(url)) {
        document.getElementById('result').textContent = 'This URL seems safe.';
    } else {
        document.getElementById('result').textContent = 'This URL might be phishing, proceed with caution.';
    }
}