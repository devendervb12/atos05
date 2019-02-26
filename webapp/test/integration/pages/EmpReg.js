sap.ui.define([
	"sap/ui/test/Opa5"
], function (Opa5) {
	"use strict";
	var sViewName = "EmpReg";
	Opa5.createPageObjects({
		onTheAppPage: {

			actions: {},

			assertions: {

				iShouldSeeTheApp: function () {
					return this.waitFor({
						id: "app",
						viewName: sViewName,
						success: function () {
							Opa5.assert.ok(true, "The EmpReg view is displayed");
						},
						errorMessage: "Did not find the EmpReg view"
					});
				}
			}
		}
	});

});