// the "!" at the end of the query selection assures typescript that there will be a result. (Avoid compilation errors)
const button = document.querySelector('button')!;

function clickHandler(message: string) {
    console.log('Clicked! ' + message);
}

if (button) {
    button.addEventListener('click', clickHandler.bind(null, 'Hello there!'))
}
