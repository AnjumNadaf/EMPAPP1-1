sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("eventbus.controller.SubView1", {
			onInit: function () {

			},
			
            onButtonPress:function(){
                debugger;
                var oEventBus = sap.ui.getCore().getEventBus();
                oEventBus.publish("SubView1","onShowPopUp", {text:"Demo Text 1"});



            }
			
		});
	});
