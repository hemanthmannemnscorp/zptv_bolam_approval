/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/bolam/zptv_bolam_approval/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});