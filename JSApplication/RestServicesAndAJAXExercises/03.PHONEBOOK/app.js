function attachEvents() {

    const baseUrl = 'http://localhost:8000/phonebook';
    const elements = {
        person() {
            return document.querySelector('input#person')
        },
        phone() {
            return document.querySelector('input#phone')
        },
        createContact() {
            return document.querySelector('button#btnCreate')
        },
        loadContacts(){
            return document.querySelector('button#btnLoad')
        },
        phoneBook(){return document.querySelector('ul#phonebook')}
    };

    const contacts = [];

    elements.createContact().addEventListener('click', () => {
        const {value: person} = elements.person();
        const {value: phone} = elements.phone();

        fetch(baseUrl, {

            method: "POST",
            body: JSON.stringify({person, phone})
        })
            .then(response => response.json())
            .then(response => {
                contacts.push(response);
                elements.person().value = "";
                elements.phone().value = "";
            });
    });

    elements.loadContacts().addEventListener('click', () =>{
        contacts.forEach((cont) => {
            let listItem = document.createElement('li');
            const key = Object.keys(cont)[0];

            listItem.textContent = `${cont[key].person} - ${cont[key].phone}`;
            elements.phoneBook().appendChild(listItem);
        })
    })

}

attachEvents();