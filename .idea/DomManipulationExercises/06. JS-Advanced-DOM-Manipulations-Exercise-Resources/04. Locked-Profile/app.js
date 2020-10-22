function lockedProfile() {

    document.querySelector('button').addEventListener('click', oneClick);

    function oneClick(e) {
        const parent = e.target.parentNode;
        const hiddenFields = [...parent.querySelectorAll('div')].filter(d => d.id.includes('HiddenFields'));

        console.log(hiddenFields.style.display);
        // if (hiddenFields.style.display !== 'block') {
        //
        //     hiddenFields.style.display = 'block';
        //     e.target.textContent = 'Hiden it'
        // } else {
        //
        //     hiddenFields.style.display = 'none';
        //     e.target.textContent = 'Show more'
        // }


    }
}