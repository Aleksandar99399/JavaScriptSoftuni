function addItem() {
    const text = document.querySelector('#newItemText').value;
    const value = document.querySelector('#newItemValue').value;

    const  option = document.createElement('option');
    option.textContent = text;
    option.value = value;

    document.querySelector('#menu').appendChild(option);
    console.log(text,value)

    document.querySelector('#newItemText').value = '';
    document.querySelector('#newItemValue').value = '';

}