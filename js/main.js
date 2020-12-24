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