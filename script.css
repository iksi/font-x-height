(function () {
  var fs = document.querySelector('.js-fs')
  var fsEm = document.querySelector('.js-fs__em')
  var fsEx = document.querySelector('.js-fs__ex')
  var fsButton = document.querySelector('.js-fs__button')

  fsButton.addEventListener('click', function () {
    var fsEmRect = fsEm.getBoundingClientRect()
    var fsExRect = fsEx.getBoundingClientRect()

    var xHeight = fsExRect.height / fsEmRect.height

    var fontFamily = window.getComputedStyle(fs).getPropertyValue('font-family')

    fontFamily = fontFamily.split(',').map(function (fontFace) {
      return fontFace.trim()
    })

    console.clear()

    console.log(`the x-height of ${fontFamily.shift()} is: ${xHeight.toFixed(3)}`)
  })
}())
