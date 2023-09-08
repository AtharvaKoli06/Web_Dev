console.log('WelCome to Flex Panels Image Gallery');

const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');//adds a class name
}
function toggleActive(e) {
    console.log(e.propertyName);
    if (e.propertyName.includes('flex')){
        this.classList.toggle('open-active');
    } 
}
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
