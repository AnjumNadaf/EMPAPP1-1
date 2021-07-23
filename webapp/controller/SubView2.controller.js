sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("eventbus.controller.SubView2", {
			onInit: function () {

			},
			
            onButtonPress:function(){
                debugger;
                var oEventBus = sap.ui.getCore().getEventBus();
                oEventBus.publish("SubView2", "onShowPopUp",{text:"Demo text 2"});

            }
			
		});
	});
