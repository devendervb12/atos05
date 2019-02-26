/*global QUnit*/

sap.ui.define([
	"com/atos/ATOS_DEMO004/controller/EmpReg.controller"
], function (Controller) {
	"use strict";

	QUnit.module("EmpReg Controller");

	QUnit.test("I should test the EmpReg controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});