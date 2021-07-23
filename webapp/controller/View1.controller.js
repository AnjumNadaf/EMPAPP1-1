sap.ui.define([
	"sap/ui/core/mvc/Controller"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller) {
		"use strict";

		return Controller.extend("eventbus.controller.View1", {
			onInit: function () {
                  var oEventBus = sap.ui.getCore().getEventBus();
				  oEventBus.subscribe("SubView1","onShowPopUp", this.onShowPopUp,this);
				  oEventBus.subscribe("SubView2","onShowPopUp",this.onShowPopUp,this);
			},
			onShowPopUp:function(sChannel,sEvent,oData){
				debugger;
				if(sEvent == "onShowPopUp"){
					var msg = "Message From " + sChannel + " -Event:" + sEvent + "- "+ oData.text;
				}else{
					msg = "Message From Main View";
					
				}
				sap.m.MessageToast.show(msg);
			}
			
		});
	});
