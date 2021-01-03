(function () {

    // Your web app's Firebase configuration
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    var firebaseConfig = {
        apiKey: "AIzaSyCLXi0EO-cwD1tvuum6cvGPn8jbVh7JvtE",
        authDomain: "furniture-747ca.firebaseapp.com",
        projectId: "furniture-747ca",
        databaseURL: "https://furniture-747ca-default-rtdb.europe-west1.firebasedatabase.app/",
        storageBucket: "furniture-747ca.appspot.com",
        messagingSenderId: "138509326166",
        appId: "1:138509326166:web:f141e160b691bf6b5868f7",
        measurementId: "G-Q05SZQYN6E"
    }
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();


    const templates = {};
    const loadingBoxEl = document.getElementById('loadingBox');
    const infoBoxEl = document.getElementById('infoBox');
    const errorBoxEl = document.getElementById('errorBox');

    function toggleLoader(showLoader) {
        if (showLoader) {
            loadingBoxEl.style.display = 'inline';
            return;
        }

        loadingBoxEl.style.display = 'none';
    }

    function getTemplate(templatePath) {
        const existingTemplate = templates[templatePath]
        if (existingTemplate) {
            return Promise.resolve(existingTemplate);

        }


        return fetch(`../templates/${templatePath}.hbs`)
            .then(res => res.text())
            .then(templateString => {
                const template = Handlebars.compile(templateString);

                templates[templatePath] = template;
                return template;
            });


    }

    function loadRegisterPartialTemplate(templatePath, templateName) {
        return fetch(`/templates/partials/${templatePath}.hbs`)
            .then(res => res.text)
            .then(templateStr => {

                Handlebars.registerPartial(
                    templateName,
                    templateStr
                );
                return templateStr;
            });


    }



    function renderTemplate(templatePath, templateContext, swapFn) {
        return getTemplate(templatePath)
            .then(tempalteFn => {
                const content = tempalteFn(templateContext)
                swapFn(content)
            })
    }

    function onCreateFurnitureLoaded(createHandlerFn) {
        const createBtn = document.getElementById('create-btn')

        createBtn.addEventListener('click', createHandlerFn)
    }

    function loadFurniture() {
        return fetch(`${firebaseConfig.databaseURL}/furniture.json`)
        .then(res=>res.json)
        .then(data => {
            return Object.keys(data).reduce((acc,currId) => {
                const currentItem = data[currId];
                return acc.concat({id: currId, ...currentItem});
            },[])
        })
    }
    
    function loadFurnitureWithId(id) {
        return fetch(`${firebaseConfig.databaseURL}/furniture/${id}.json`)
        .then(res=>res.json)
        
    }


    const app = Sammy('#container', function () {

        this.before({}, function () {
            toggleLoader(true);
        })

        this.get('#/', function () {
            Promise.all([loadFurniture(),loadRegisterPartialTemplate('furniture-item', 'furnitureItem')])
                .then(([items]) => renderTemplate('home', {items}, this.swap.bind(this)))
                .then(() => {
                    toggleLoader(false);
                })

        })

        this.get('#/profile', function () {
            renderTemplate('profile', {}, this.swap.bind(this))
                .then(() => {
                    toggleLoader(false);

                })


        })

        this.get('#/create-furniture', function () {
            renderTemplate('create-furniture', {}, this.swap.bind(this))
                .then(() => {
                    toggleLoader(false);

                    const onCreateHandler = () => {
                        const newMakeEl = document.getElementById('new-make')
                        const newModelEl = document.getElementById('new-model')
                        const newYearEl = document.getElementById('new-year')
                        const newDescriptionEl = document.getElementById('new-description')
                        const newPriceEl = document.getElementById('new-price')
                        const newImageEl = document.getElementById('new-image')
                        const newMaterialEl = document.getElementById('new-material')

                        const inputs = [
                            newMakeEl,
                            newModelEl,
                            newYearEl,
                            newDescriptionEl,
                            newPriceEl,
                            newImageEl,
                            newMaterialEl
                        ];

                        const values = inputs.map(input => input.value);

                        const missingInputValues = values.findIndex(v => !v);
                        if (missingInputValues !== -1) {
                            console.error('MISSING DATA', inputs[missingInputValues]);
                            return;
                        }
                        const body = values.reduce((acc, curr, index) => {
                            const currentInputEl = inputs[index]
                            acc[currentInputEl.name] = curr;
                            return acc;

                        }, {});

                        const url = `${firebaseConfig.databaseURL}/furniture.json`
                        fetch(url,
                            {
                                method: 'POST',
                                body: JSON.stringify(body)
                            })
                            .then(() => {
                                this.redirect('#/');
                            })
                    }

                    onCreateFurnitureLoaded(onCreateHandler)
                })

        })

        this.get('#/furniture-details/:id', function (context) {
            const id = context.params.id;
            loadFurnitureWithId(id)
            .then(furniture =>{

                renderTemplate('furniture-details', {furniture}, this.swap.bind(this))
                
            })
            .then(() => {
                toggleLoader(false);
            })
           
        })
    })

    app.run('#/')
}());

