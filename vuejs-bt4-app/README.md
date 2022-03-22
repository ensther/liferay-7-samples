# vuejs-bt4-app

Vuejs Bt4 App

##package.json
This file need to be updated with following dependencies:

``"devDependencies": {
		"liferay-npm-bundler": "^2.8.0",
		"liferay-npm-build-support": "^2.8.0",
		"copy-webpack-plugin": "4.6.0",
		"webpack": "4.36.0",//Update version
		"webpack-cli": "3.3.0",
		"webpack-dev-server": "3.2.1",
		"babel-cli": "6.26.0",//Remove (moved to @babel/cli)
		"babel-preset-env": "1.7.0",//Remove
		"babel-loader": "7.1.5",
		"@babel/cli": "^7.10.5",
		"@babel/core": "^7.11.1",
		"@vue/cli-plugin-babel": "^4.5.11",
		"@vue/cli-service": "^4.5.4",
		"vue-template-compiler": "^2.6.12",		
		"sass": "^1.26.10",//Include if scss it's needed
		"sass-loader": "^9.0.3"//Include if scss it's needed		
	},
	"dependencies": {
		"vue": "^2.6.12"
	},``

Also change the start task:
``
	"start": "lnbs-start" -> "start": "lfr-js-start"

``