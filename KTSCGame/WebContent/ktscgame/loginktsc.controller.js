sap.ui.controller("ktscgame.loginktsc", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ktscgame.loginktsc
*/
//	onInit: function() {
//
//	},
	login: function (evt) {
	    //jQuery.sap.require("sap.m.MessageToast");
	    //sap.m.MessageToast.show(evt.getSource().getId() + " Pressed");
	    
	    
		var userName=this.byId("userNameInput").mProperties.value;
		
		var password=this.byId("passwordInput").mProperties.value;
		console.log("userInput"+userName);
		console.log("passwordInput"+password);
		if(userName=="" && password=="")
			{
			//alert("please enter userName and Passwords!!!!!");
			 sap.m.MessageToast.show("please enter userName and Passwords!!!!!", {duration: 2000, at: "center middle"});
			}
		else if(userName=="sweety" && password=="sweety123")
			{
			 sap.m.MessageToast.show("successfully login", {duration: 2000, at: "center middle"});
			 /*var oRouter = sap.ui.core.UIComponent.getRouterFor(this);
			  oRouter.navTo("second");
			  */
			  sap.ui.getCore().byId("idloginView1").removeAllContent();
              sap.ui.getCore().byId("idloginView1").addContent(sap.ui.jsview("ktscgame.homeView"));
             
			//sap.ui.getCore().byId("idvecvLogin1").destroyContent();
			//.ui.getCore().byId("idvecvLogin1").addContent(sap.ui.jsview("vecvproject.home"));
			}
		else
			{
			//alert("please enter correct credentials!!!!!!");
			 sap.m.MessageToast.show("please enter correct credentials!!!!!!", {duration: 2000, at: "center middle"});
			}
	
	  },
	  onPress: function (evt) {
		    //jQuery.sap.require("sap.m.MessageToast");
		    //sap.m.MessageToast.show(evt.getSource().getId() + " Pressed");
		    
		    

			var userName=sap.ui.getCore().byId("userNameInput").getValue();
			var password=sap.ui.getCore().byId("passwordInput").getValue();
			if(userName=="" && password=="")
				{
				//alert("please enter userName and Passwords!!!!!");
				 sap.m.MessageToast.show("please enter userName and Passwords!!!!!", {duration: 2000, at: "center middle"});
				}
			else if(userName=="sweety" && password=="sweety123")
				{
				 sap.m.MessageToast.show("successfully login", {duration: 2000, at: "center middle"});
					
				//sap.ui.getCore().byId("idvecvLogin1").destroyContent();
				//.ui.getCore().byId("idvecvLogin1").addContent(sap.ui.jsview("vecvproject.home"));
				}
			else
				{
				//alert("please enter correct credentials!!!!!!");
				 sap.m.MessageToast.show("please enter correct credentials!!!!!!", {duration: 2000, at: "center middle"});
				}
		
		  }
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ktscgame.loginktsc
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ktscgame.loginktsc
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ktscgame.loginktsc
*/
//	onExit: function() {
//
//	}

});