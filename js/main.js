var scroller = scrollama();

scroller
  .setup({
    step: '.anim',
    offset: 0.85
  })
  .onStepEnter(function(response) {
    response.element.classList.add('appear');
  });

window.addEventListener('resize', scroller.resize);


var infotabs = document.querySelectorAll('[id^=info]');

infotabs.addEventListener('focus', (event) => {
  event.target.classList.add("border border-moroi-Realred");
});