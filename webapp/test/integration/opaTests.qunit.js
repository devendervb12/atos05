/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/atos/ATOS_DEMO004/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});