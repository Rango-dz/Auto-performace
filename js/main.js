var scroller = scrollama();

scroller
  .setup({
    step: 'div',
    offset: 0.85
  })
  .onStepEnter(function(response) {
    response.element.classList.add('tracking');
  });

window.addEventListener('resize', scroller.resize);