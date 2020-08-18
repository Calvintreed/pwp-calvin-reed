//Triggering Personal Portfolio Modal
$('#trigger-personal').click('shown.bs.modal', function () {
  $('#personalPortfolio').modal('show')
})
//Triggering Concert Crawl Modal
$('#trigger-concert').click('shown.bs.modal', function () {
  $('#concertCrawl').modal('show')
})
//Triggering Photography Show Modal
$('#trigger-show').click('shown.bs.modal', function () {
  $('#photoShow').modal('show')
})
//Triggering Current Photography Modal
$('#trigger-current').click('shown.bs.modal', function () {
  $('#photographyWork').modal('show')
})
//Carousel interval in Current Photography Modal
$('.carousel').carousel({
  interval: 2000
})