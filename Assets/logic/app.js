const boxes = document.querySelectorAll('.box');


boxes.forEach((box) => {

  box.addEventListener('mouseover', () => {
    //remove the active class from all boxes
    boxes.forEach((box) => {
      box.classList.remove('active')
  })

    // add active class to the box that clicked
    box.classList.add('active');
  })

});

