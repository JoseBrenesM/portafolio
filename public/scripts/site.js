document.querySelectorAll('[data-current-year]').forEach(element => {
    element.textContent = new Intl.DateTimeFormat('en', {
        year: 'numeric',
        timeZone: 'America/Costa_Rica'
    }).format(new Date());
});
