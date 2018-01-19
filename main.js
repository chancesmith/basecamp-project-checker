var projectsCount = $('article').length

// remove projects that were updated in the last 24 hours
$('article:contains("hours ago")').remove()

// now get new count of projects left over
var projectsUpdateNeededCount = $('article').length

// get leftover project names
var $projectNames = $('article a h5')
var str = '',
    comma = '',
    i = 0

$.each($projectNames, function() {
  console.log(i, comma, $(this).text(), str)
  i == 0 ? comma = '' : comma = ', '
  str += comma + $.trim($(this).text())
  i++
})

var message = `Tuesday Basecamp alert: These ${projectsUpdateNeededCount} of ${projectsCount} projects have not changed since last week, and might need a nudge or progress update: ${str}`
