const elements = {
    info: document.querySelector('#infoBox'),
    error: document.querySelector('#errorBox'),
    loading: document.querySelector('#loadingBox'),
    
}

elements.info.addEventListener('click', hiddenInfo)
elements.error.addEventListener('click', hideError)

export function showInfo(message) {
    elements.info.children[0].textContent = message;
    elements.info.style.display = 'block';

    setTimeout(hiddenInfo, 3000);

}

export function showError(message) {
    elements.error.children[0].textContent = message;
    elements.error.style.display = 'block';
}

function hiddenInfo() {
    elements.info.style.display = 'none';

}
function hideError() {
    elements.error.style.display = 'none';

}