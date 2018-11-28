(function () {
  var wrapper = document.querySelector('.wrapper')
  var em = document.querySelector('.em')
  var ex = document.querySelector('.ex')
  var response = document.querySelector('.response')
  var button = document.querySelector('button')

  button.addEventListener('click', function () {
    var emRect = em.getBoundingClientRect()
    var exRect = ex.getBoundingClientRect()

    var xHeight = exRect.height / emRect.height

    var fontFamily = window.getComputedStyle(wrapper).getPropertyValue('font-family')

    fontFamily = fontFamily.split(',').map(function (fontFace) {
      return fontFace.trim()
    })

    response.textContent = `the x-height of ${fontFamily.shift()} is: ${xHeight.toFixed(3)}`
  })
}())
