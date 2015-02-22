var spinner = require('../')()

var fs = require('fs')
var style = fs.readFileSync(__dirname+'/style.css', 'utf8')
require('insert-css')(style)

var classes = require('dom-classes')

require('domready')(function() {
	var container = document.createElement("div")
	document.body.appendChild(container)

	//add spinner
    classes.add(spinner.element, 'spinner')
    container.appendChild(spinner.element)
})