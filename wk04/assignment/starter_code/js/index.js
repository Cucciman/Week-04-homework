$('.readmore a').click(function(){
  event.preventDefault()
  $('#show-this-on-click').slideDown()
  $('.readless').show()
  $('.readmore').hide()
})

$('.readless').click(function(){
  event.preventDefault()
  $('#show-this-on-click').slideUp()
  $('.readless').hide()
  $('.readmore').show()
})

$('.learnmore').click(function(){
    event.preventDefault()
  $('.learnmore').hide()
  $('#learnmoretext').slideDown()
})

$('#learnmoretext').click(function(){
  $('#learnmoretext').hide()
  $('.learnmore').slideUp()
  $('.learnmore').show()
})


/*
$('.learnmore').click(sidebarLearnMore)

function sidebarLearnMore() {
  $('.learnmore').hide()
  $('#learnmoretext').slideDown()
}
*/
