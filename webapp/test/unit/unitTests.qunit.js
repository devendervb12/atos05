/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/atos/ATOS_DEMO004/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});