(function(){

    const appEl=document.getElementById('app');


    function init() {
        Promise.all([
            fetch('./contact-card.hbs').then(res=> res.text()),
            fetch('./contacts.hbs').then(res=> res.text()),
            fetch('./abonati.json').then(res => res.json())
        ]).then(([contactCardTemplateString,contactsTemplateString,contacts]) =>{
            Handlebars.registerPartial('contact',contactCardTemplateString);
            var template = Handlebars.compile(contactsTemplateString);
            appEl.innerHTML = template({contacts});

            const contactsEl = appEl.querySelector('#contacts');
            contactsEl.addEventListener('click', function (e) {

                const target = e.target;
                if (!target.classList.contains('detailsBtn')) {
                    return;
                }

                const detailsEl = e.target.parentElement.querySelector('.details');
                if (detailsEl.classList.contains('hidden')) {
                    detailsEl.classList.remove('hidden');
                }else{
                    detailsEl.classList.add('hidden');
                }

                console.log(e);
                
            })

        });
    }

    init();
}())