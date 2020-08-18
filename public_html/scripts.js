$('#trigger-personal').click('shown.bs.modal', function () {
  $('#personalPortfolio').modal('show')
})

$('#trigger-concert').click('shown.bs.modal', function () {
  $('#concertCrawl').modal('show')
})

$('#trigger-show').click('shown.bs.modal', function () {
  $('#photoShow').modal('show')
})

$('#trigger-current').click('shown.bs.modal', function () {
  $('#photographyWork').modal('show')
})

$('.carousel').carousel({
  interval: 2000
})