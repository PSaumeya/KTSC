sap.ui.controller("ktscgame.homeView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ktscgame.homeView
*/
	onInit: function() {
		var audio = new Audio('sounds/demonstrative.mp3');
		audio.play();
		//alert("global:--"+resultRW);
		 /*sap.ui.getCore().byId("firstView--containerLayout").setVisible(false);
		 sap.ui.getCore().byId("firstView--pauseButtonID").setVisible(false);
		 sap.ui.getCore().byId("firstView--inputFormLayoutID").setVisible(false);*/
		
		sap.ui.getCore().byId("firstView--MessageLayout").addStyleClass("DisplayCss");
		sap.ui.getCore().byId("firstView--startGameImgID").addStyleClass("DisplayCss");
		sap.ui.getCore().byId("firstView--pauseButtonID").addStyleClass("DisplayNoneCss");
		sap.ui.getCore().byId("firstView--scoreButtonID").addStyleClass("DisplayNoneCss");
		sap.ui.getCore().byId("firstView--hidescoreButtonID").addStyleClass("DisplayNoneCss");
		sap.ui.getCore().byId("firstView--distributeButtonID").addStyleClass("DisplayNoneCss");
		sap.ui.getCore().byId("firstView--startAgainButtonKtsc").addStyleClass("DisplayNoneCss");
		sap.ui.getCore().byId("firstView--finalScoreButtonID").addStyleClass("DisplayNoneCss");
		sap.ui.getCore().byId("firstView--finalScoreLayout").addStyleClass("DisplayNoneCss");
		sap.ui.getCore().byId("firstView--inputFormLayoutID").addStyleClass("DisplayNoneCss");
		sap.ui.getCore().byId("firstView--scoreTableLayout").addStyleClass("DisplayNoneCss");
		sap.ui.getCore().byId("firstView--containerLayout").setVisible(false);
		
		
		 //sap.ui.getCore().byId("firstView--containerLayout").addStyleClass("DisplayNoneCss");
		

		
		
		 
	
		
	},

	
	startGame:function(oControlEvent)
	{
		var audio = new Audio('sounds/beep.mp3');
		
		audio.play();
		
		 var buttonClickId=oControlEvent.getSource().getId();
		
		 if(buttonClickId!=="firstView--startGameImgID")
			 {

				okButtonClickCount=0;
				resultList.items.length = 0;
				
				  

					 var oModel = new sap.ui.model.json.JSONModel();
					  oModel.setData(resultList);
					  sap.ui.getCore().byId("firstView--scoreTable").setModel(oModel);
					  sap.ui.getCore().byId("firstView--scoreTable").bindRows("/items");
				  
			/*	 sap.ui.getCore().byId("startButtonKtsc").setVisible(true);
				 sap.ui.getCore().byId("startAgainButtonKtsc").setVisible(false);
				 
				 sap.ui.getCore().byId("scoreLayout").setVisible(false);
				 sap.ui.getCore().byId("maxScorePlayer").setVisible(false);
					sap.ui.getCore().byId("maxScoreimageResult").setVisible(false);*/
				 pointP1=0;
				pointP2=0;
				pointP3=0;
				 pointP4=0;
				totalPointP1=0;
				totalPointP2=0;
					totalPointP3=0;
				totalPointP4=0;
				
				 maxScoreGotPlayer='';
				
				
			 
					sap.ui.getCore().byId("firstView--finalScoreButtonID").removeStyleClass("DisplayCss");
					
				sap.ui.getCore().byId("firstView--pauseButtonID").removeStyleClass("DisplayCss");
				sap.ui.getCore().byId("firstView--scoreButtonID").removeStyleClass("DisplayCss");
				sap.ui.getCore().byId("firstView--hidescoreButtonID").removeStyleClass("DisplayCss");
				sap.ui.getCore().byId("firstView--distributeButtonID").removeStyleClass("DisplayCss");
				sap.ui.getCore().byId("firstView--startAgainButtonKtsc").removeStyleClass("DisplayCss");
			 
				sap.ui.getCore().byId("firstView--finalScoreButtonID").addStyleClass("DisplayNoneCss");
				sap.ui.getCore().byId("firstView--pauseButtonID").addStyleClass("DisplayNoneCss");
				sap.ui.getCore().byId("firstView--scoreButtonID").addStyleClass("DisplayNoneCss");
				sap.ui.getCore().byId("firstView--hidescoreButtonID").addStyleClass("DisplayNoneCss");
				sap.ui.getCore().byId("firstView--distributeButtonID").addStyleClass("DisplayNoneCss");
				sap.ui.getCore().byId("firstView--startAgainButtonKtsc").addStyleClass("DisplayNoneCss");
				
				
				sap.ui.getCore().byId("firstView--finalScoreLayout").removeStyleClass("DisplayCss");
				sap.ui.getCore().byId("firstView--scoreTableLayout").removeStyleClass("DisplayCss");
				
				sap.ui.getCore().byId("firstView--finalScoreLayout").addStyleClass("DisplayNoneCss");
				sap.ui.getCore().byId("firstView--scoreTableLayout").addStyleClass("DisplayNoneCss");
				sap.ui.getCore().byId("firstView--containerLayout").setVisible(false);
				
			 
			 
			 }
		/* sap.ui.getCore().byId("firstView--startGameImgID").setVisible(false);
		
		 sap.ui.getCore().byId("firstView--inputFormLayoutID").setVisible(true);*/
		 
		 
		 sap.ui.getCore().byId("firstView--MessageLayout").removeStyleClass("DisplayCss");
			sap.ui.getCore().byId("firstView--startGameImgID").removeStyleClass("DisplayCss");
			sap.ui.getCore().byId("firstView--MessageLayout").addStyleClass("DisplayNoneCss");
			sap.ui.getCore().byId("firstView--startGameImgID").addStyleClass("DisplayNoneCss");
			
		 sap.ui.getCore().byId("firstView--inputFormLayoutID").removeStyleClass("DisplayNoneCss");
		 sap.ui.getCore().byId("firstView--inputFormLayoutID").addStyleClass("DisplayCss");
		// sap.ui.getCore().byId("firstView--inputFormLayoutID").addStyleClass("slideDownForm");
		 
	},
	saveName:function()
	{
		var audio = new Audio('sounds/Rockslide.mp3');
		audio.play();
	/*	sap.ui.getCore().byId("firstView--inputFormLayoutID").setVisible(false);
		 sap.ui.getCore().byId("firstView--pauseButtonID").setVisible(true);
		 sap.ui.getCore().byId("firstView--containerLayout").setVisible(true);*/
		 
		sap.ui.getCore().byId("firstView--inputFormLayoutID").removeStyleClass("DisplayCss");
		 sap.ui.getCore().byId("firstView--inputFormLayoutID").addStyleClass("DisplayNoneCss");
		 
		 sap.ui.getCore().byId("firstView--MessageLayout").removeStyleClass("DisplayNoneCss");
			sap.ui.getCore().byId("firstView--pauseButtonID").removeStyleClass("DisplayNoneCss");
			
			sap.ui.getCore().byId("firstView--scoreButtonID").removeStyleClass("DisplayNoneCss");
			sap.ui.getCore().byId("firstView--distributeButtonID").removeStyleClass("DisplayNoneCss");
			
			
			sap.ui.getCore().byId("firstView--MessageLayout").addStyleClass("DisplayCss");
			sap.ui.getCore().byId("firstView--pauseButtonID").addStyleClass("DisplayCss");
			sap.ui.getCore().byId("firstView--scoreButtonID").addStyleClass("DisplayCss");
			sap.ui.getCore().byId("firstView--distributeButtonID").addStyleClass("DisplayCss");
			sap.ui.getCore().byId("firstView--containerLayout").setVisible(true);
			// sap.ui.getCore().byId("firstView--containerLayout").removeStyleClass("DisplayNoneCss");
				//sap.ui.getCore().byId("firstView--containerLayout").addStyleClass("DisplayCss");
			
		 
		 var oView = this.getView();
		
		 
		 

			if(oView.byId("player1Name").getValue()!='')
				{
				
				oView.byId("player1MainLayout").setTitle(oView.byId("player1Name").getValue());
			
				}
			if(oView.byId("player2Name").getValue()!='')
			{
			
			oView.byId("player2MainLayout").setTitle(oView.byId("player2Name").getValue());
		
			}
			if(oView.byId("player3Name").getValue()!='')
			{
			
			oView.byId("player3MainLayout").setTitle(oView.byId("player3Name").getValue());
		
			}
			if(oView.byId("player4Name").getValue()!='')
			{
			
			oView.byId("player4MainLayout").setTitle(oView.byId("player4Name").getValue());
		
			}
			
			
			
			if(sap.ui.getCore().byId("firstView--Genderplayer1").getSelectedIndex()=='0')
			{
			
			oView.byId("player1ImgSet").setSrc("images/boyFace.jpg");
		
			}
			else
				{
				oView.byId("player1ImgSet").setSrc("images/girlFace.jpg");
				}
			if(sap.ui.getCore().byId("firstView--Genderplayer2").getSelectedIndex()=='0')
			{
			
			oView.byId("player2ImgSet").setSrc("images/boyFace.jpg");
		
			}
			else
				{
				oView.byId("player2ImgSet").setSrc("images/girlFace.jpg");
				}
			if(sap.ui.getCore().byId("firstView--Genderplayer3").getSelectedIndex()=='0')
			{
			
			oView.byId("player3ImgSet").setSrc("images/boyFace.jpg");
		
			}
			else
				{
				oView.byId("player3ImgSet").setSrc("images/girlFace.jpg");
				}
			if(sap.ui.getCore().byId("firstView--Genderplayer4").getSelectedIndex()=='0')
			{
			
			oView.byId("player4ImgSet").setSrc("images/boyFace.jpg");
		
			}
			else
				{
				oView.byId("player4ImgSet").setSrc("images/girlFace.jpg");
				}
		
		 
	},
	cancelForm:function()
	{
		var audio = new Audio('sounds/Rockslide.mp3');
		audio.play();
		/*sap.ui.getCore().byId("firstView--inputFormLayoutID").setVisible(false);
		 sap.ui.getCore().byId("firstView--pauseButtonID").setVisible(true);
		 sap.ui.getCore().byId("firstView--containerLayout").setVisible(true);
		 */
		 
		 
			sap.ui.getCore().byId("firstView--inputFormLayoutID").removeStyleClass("DisplayCss");
			 sap.ui.getCore().byId("firstView--inputFormLayoutID").addStyleClass("DisplayNoneCss");
			 
			 sap.ui.getCore().byId("firstView--MessageLayout").removeStyleClass("DisplayNoneCss");
				sap.ui.getCore().byId("firstView--pauseButtonID").removeStyleClass("DisplayNoneCss");
				
				sap.ui.getCore().byId("firstView--scoreButtonID").removeStyleClass("DisplayNoneCss");
				sap.ui.getCore().byId("firstView--distributeButtonID").removeStyleClass("DisplayNoneCss");
				
				
				sap.ui.getCore().byId("firstView--MessageLayout").addStyleClass("DisplayCss");
				sap.ui.getCore().byId("firstView--pauseButtonID").addStyleClass("DisplayCss");
				sap.ui.getCore().byId("firstView--scoreButtonID").addStyleClass("DisplayCss");
				sap.ui.getCore().byId("firstView--distributeButtonID").addStyleClass("DisplayCss");
				sap.ui.getCore().byId("firstView--containerLayout").setVisible(true);
				 //sap.ui.getCore().byId("firstView--containerLayout").removeStyleClass("DisplayNoneCss");
					//sap.ui.getCore().byId("firstView--containerLayout").addStyleClass("DisplayCss");
			
	},
	distributePress: function (oEvent) 
	{
		var audio = new Audio('sounds/demonstrative.mp3');
		audio.play();
	sap.ui.getCore().byId("firstView--containerLayout").removeStyleClass("disabledCss");
		/*sap.ui.getCore().byId("player1HorizontalLayout").removeStyleClass("disabledCss");
		sap.ui.getCore().byId("player2HorizontalLayout").removeStyleClass("disabledCss");
		sap.ui.getCore().byId("player3HorizontalLayout").removeStyleClass("disabledCss");
		sap.ui.getCore().byId("player4HorizontalLayout").removeStyleClass("disabledCss");
		*/
		var arr={};
		    var text = "";
		    var possible = "KTSC";

		    for( var i=0; i < 4; i++ )
		    	{
		        text = possible.charAt(Math.floor(Math.random() * possible.length));
		        console.log(text);
		        var p1,p2,p3,p4;
		        if(i==0)
		        	{
		        	p1=text;
		        	}
		        if(i==1)
	        	{
	        	p2=text;
	        	}
		        if(i==2)
	        	{
	        	p3=text;
	        	}
		        if(i==3)
	        	{
	        	p4=text;
	        	}
		        if(i==0)
		        	{
		        	 arr[i]=text;
		        	}
		        else if(i==1)
		        	{
		        	if(text==p1)
		        	{
		        	
		        	i--;
		        	}
		        else
		        	{
		        	
		        	 arr[i]=text;
		        	}
		        	}
		        else if(i==2)
		        	
		        	{
		        	if(text==p1 || text==p2)
		        	{
		        	
		        	i--;
		        	}
		        else
		        	{
		        	
		        	 arr[i]=text;
		        	}
		        	}
		        else if(i==3)
		        	{
		        	if(text==p1 || text==p2 || text==p3)
		        	{
		        	
		        	i--;
		        	}
		        else
		        	{
		        
		        	 arr[i]=text;
		        	}
		        	
		        	}
		        
		       
		    	}
		    console.log(arr);
		    for(var i=0; i < 4; i++ )
		    	{
		    	if(arr[i]=='K')
		    		{
		    		arr[i]='KING';
		    		}
		    	else if(arr[i]=='T')
	    		{
	    		arr[i]='THIEF';
	    		}
		    	else if(arr[i]=='S')
	    		{
	    		arr[i]='SOLDIER';
	    		}
		    	else if(arr[i]=='C')
	    		{
	    		arr[i]='COMMANDER';
	    		}
		    	}
		    console.log(arr);
		    	sap.ui.getCore().byId("firstView--player1NameSet").setText(arr[0]);
		    	sap.ui.getCore().byId("firstView--player2NameSet").setText(arr[1]);
				sap.ui.getCore().byId("firstView--player3NameSet").setText(arr[2]);
				sap.ui.getCore().byId("firstView--player4NameSet").setText(arr[3]);
				
				
				if(sap.ui.getCore().byId("firstView--player1NameSet").getText()=='KING' || sap.ui.getCore().byId("firstView--player1NameSet").getText()=='SOLDIER')
					{
					sap.ui.getCore().byId("firstView--player1NameSet").setVisible(true);
					sap.ui.getCore().byId("firstView--choosePlayer1ID").setVisible(false);
					
					if(sap.ui.getCore().byId("firstView--player1NameSet").getText()=='KING')
						{
						pointP1=1000;
						
						}
					else
						{
						pointP1=0;
						}
					}
				else
					{
					sap.ui.getCore().byId("firstView--player1NameSet").setVisible(false);
					sap.ui.getCore().byId("firstView--choosePlayer1ID").setVisible(true);
					pointP1=0;
					
					}
				if(sap.ui.getCore().byId("firstView--player2NameSet").getText()=='KING' || sap.ui.getCore().byId("firstView--player2NameSet").getText()=='SOLDIER')
				{
				sap.ui.getCore().byId("firstView--player2NameSet").setVisible(true);
				sap.ui.getCore().byId("firstView--choosePlayer2ID").setVisible(false);
				if(sap.ui.getCore().byId("firstView--player2NameSet").getText()=='KING')
				{
				pointP2=1000;
			
				}
			else
				{
				pointP2=0;
				}
				}
				else
				{
				sap.ui.getCore().byId("firstView--player2NameSet").setVisible(false);
				sap.ui.getCore().byId("firstView--choosePlayer2ID").setVisible(true);
				pointP2=0;
				}
				
				if(sap.ui.getCore().byId("firstView--player3NameSet").getText()=='KING' || sap.ui.getCore().byId("firstView--player3NameSet").getText()=='SOLDIER')
				{
				sap.ui.getCore().byId("firstView--player3NameSet").setVisible(true);
				sap.ui.getCore().byId("firstView--choosePlayer3ID").setVisible(false);
				if(sap.ui.getCore().byId("firstView--player3NameSet").getText()=='KING')
				{
				pointP3=1000;
				
				}
			else
				{
				pointP3=0;
				}
				}
				else
				{
				sap.ui.getCore().byId("firstView--player3NameSet").setVisible(false);
				sap.ui.getCore().byId("firstView--choosePlayer3ID").setVisible(true);
				pointP3=0;
				}
				if(sap.ui.getCore().byId("firstView--player4NameSet").getText()=='KING' || sap.ui.getCore().byId("firstView--player4NameSet").getText()=='SOLDIER')
				{
				sap.ui.getCore().byId("firstView--player4NameSet").setVisible(true);
				sap.ui.getCore().byId("firstView--choosePlayer4ID").setVisible(false);
				if(sap.ui.getCore().byId("firstView--player4NameSet").getText()=='KING')
				{
				pointP4=1000;
				
				}
			else
				{
				pointP4=0;
				}
				}
				else
				{
				sap.ui.getCore().byId("firstView--player4NameSet").setVisible(false);
				sap.ui.getCore().byId("firstView--choosePlayer4ID").setVisible(true);
				pointP4=0;
				}
				
				
				
				sap.ui.getCore().byId("firstView--distributeButtonID").removeStyleClass("DisplayCss");
				 sap.ui.getCore().byId("firstView--distributeButtonID").addStyleClass("DisplayNoneCss");
				 sap.ui.getCore().byId("firstView--MessageLayout").removeStyleClass("DisplayCss");
				 sap.ui.getCore().byId("firstView--MessageLayout").addStyleClass("DisplayNoneCss");
				//sap.ui.getCore().byId("firstView--distributeButtonID").setVisible(false);
				
					
				
		
		
	},
	showResult:function (oEvent) {
		var audio = new Audio('sounds/demonstrative.mp3');
		audio.play();
		if (!this.dialog) {
			  this.dialog = sap.ui.xmlfragment("ktscgame.dialog", this);
			  this.getView().addDependent(this.dialog);
			  }
			  // toggle compact style
			  jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this.dialog);
		
		
		
		var selectedPersonID=oEvent.getSource().getId();
		
		if(selectedPersonID=="firstView--choosePlayer1ID")
			{
		 if( sap.ui.getCore().byId("firstView--player1NameSet").getText()=="THIEF")
		 {
		 resultRW="right";
		 sap.ui.getCore().byId("oTextResultMsg").setText("You are right");
		 sap.ui.getCore().byId("imageResult").setSrc("images/smily.jpg");
		 pointP1=0;
		 
		 sap.ui.getCore().byId("firstView--player1NameSet").setVisible(true);
		 }
	 else
		 {
		 resultRW="wrong";
		 sap.ui.getCore().byId("oTextResultMsg").setText("You are wrong");
		 sap.ui.getCore().byId("imageResult").setSrc("images/cry.jpg");
		 pointP1=800;
		 
		 sap.ui.getCore().byId("firstView--player1NameSet").setVisible(true);
		 }
			}
		else if(selectedPersonID=="firstView--choosePlayer2ID")
			{
			if( sap.ui.getCore().byId("firstView--player2NameSet").getText()=="THIEF")
			 {
			 resultRW="right";
			 sap.ui.getCore().byId("oTextResultMsg").setText("You are right");
			 sap.ui.getCore().byId("imageResult").setSrc("images/smily.jpg");
			 pointP2=0;
			 
			 sap.ui.getCore().byId("firstView--player2NameSet").setVisible(true);
			 }
		 else
			 {
			 resultRW="wrong";
			 sap.ui.getCore().byId("oTextResultMsg").setText("You are wrong");
			 sap.ui.getCore().byId("imageResult").setSrc("images/cry.jpg");
			 pointP2=800;
			 
			 sap.ui.getCore().byId("firstView--player2NameSet").setVisible(true);
			 }
			}
		else if(selectedPersonID=="firstView--choosePlayer3ID")
		{
			if( sap.ui.getCore().byId("firstView--player3NameSet").getText()=="THIEF")
			 {
			 resultRW="right";
			 sap.ui.getCore().byId("oTextResultMsg").setText("You are right");
			 sap.ui.getCore().byId("imageResult").setSrc("images/smily.jpg");
			 pointP3=0;
			 
			 sap.ui.getCore().byId("firstView--player3NameSet").setVisible(true);
			 }
		 else
			 {
			 resultRW="wrong";
			 sap.ui.getCore().byId("oTextResultMsg").setText("You are wrong");
			 sap.ui.getCore().byId("imageResult").setSrc("images/cry.jpg");
			 pointP3=800;
			 
			 sap.ui.getCore().byId("firstView--player3NameSet").setVisible(true);
			 }
		}
		else if(selectedPersonID=="firstView--choosePlayer4ID")
		{
			if( sap.ui.getCore().byId("firstView--player4NameSet").getText()=="THIEF")
			 {
			 reultRW="right";
			 sap.ui.getCore().byId("oTextResultMsg").setText("You are right");
			 sap.ui.getCore().byId("imageResult").setSrc("images/smily.jpg");
			 pointP4=0;
			
			 sap.ui.getCore().byId("firstView--player4NameSet").setVisible(true);
			 }
		 else
			 {
			 resultRW="wrong";
			 sap.ui.getCore().byId("oTextResultMsg").setText("You are wrong");
			 sap.ui.getCore().byId("imageResult").setSrc("images/cry.jpg");
			 pointP4=800;
			 
			 sap.ui.getCore().byId("firstView--player4NameSet").setVisible(true);
			 }
		}
		//for fragment
		
		
		  this.dialog.open();
		//end fragment
		
	},
	okPress: function(oEvent)
	{
		var audio = new Audio('sounds/beep.mp3');
		audio.play();
		
		if (!this.dialog) {
			  this.dialog = sap.ui.xmlfragment("ktscgame.dialog", this);
			  this.getView().addDependent(this.dialog);
			  }
			  // toggle compact style
			  jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this.dialog);
		 this.dialog.close();
		 
		 
		 sap.ui.getCore().byId("firstView--MessageLayout").removeStyleClass("DisplayNoneCss");
		 sap.ui.getCore().byId("firstView--MessageLayout").addStyleClass("DisplayCss");
		 
		 sap.ui.getCore().byId("firstView--distributeButtonID").removeStyleClass("DisplayNoneCss");
		 sap.ui.getCore().byId("firstView--distributeButtonID").addStyleClass("DisplayCss");
		 
		 
		 
		 okButtonClickCount++;
			if(sap.ui.getCore().byId("firstView--player1NameSet").getText()=='SOLDIER')
				{
				if(resultRW=='right')
					{
				pointP1=500;
				if(sap.ui.getCore().byId("firstView--player2NameSet").getText()=='COMMANDER')
				{
					pointP2=800;
				}
				
				if(sap.ui.getCore().byId("firstView--player3NameSet").getText()=='COMMANDER')
				{
					pointP3=800;
				}
				if(sap.ui.getCore().byId("firstView--player4NameSet").getText()=='COMMANDER')
				{
					pointP4=800;
				}
				
					}
				else
					{
					
					pointP1=0;
					if(sap.ui.getCore().byId("firstView--player2NameSet").getText()=='THIEF')
					{
						pointP2=500;
					}
					
					if(sap.ui.getCore().byId("firstView--player3NameSet").getText()=='THIEF')
					{
						pointP3=500;
					}
					if(sap.ui.getCore().byId("firstView--player4NameSet").getText()=='THIEF')
					{
						pointP4=500;
					}
					
					
					}
				}
			if(sap.ui.getCore().byId("firstView--player2NameSet").getText()=='SOLDIER')
			{
			if(resultRW=='right')
				{
			pointP2=500;
			
			
			if(sap.ui.getCore().byId("firstView--player1NameSet").getText()=='COMMANDER')
			{
				pointP1=800;
			}
			
			if(sap.ui.getCore().byId("firstView--player3NameSet").getText()=='COMMANDER')
			{
				pointP3=800;
			}
			if(sap.ui.getCore().byId("firstView--player4NameSet").getText()=='COMMANDER')
			{
				pointP4=800;
			}
				}
			else
				{
				pointP2=0;
				if(sap.ui.getCore().byId("firstView--player1NameSet").getText()=='THIEF')
				{
					pointP1=500;
				}
				
				if(sap.ui.getCore().byId("firstView--player3NameSet").getText()=='THIEF')
				{
					pointP3=500;
				}
				if(sap.ui.getCore().byId("firstView--player4NameSet").getText()=='THIEF')
				{
					pointP4=500;
				}
				}
			}
			if(sap.ui.getCore().byId("firstView--player3NameSet").getText()=='SOLDIER')
			{
			if(resultRW=='right')
				{
			pointP3=500;
			if(sap.ui.getCore().byId("firstView--player2NameSet").getText()=='COMMANDER')
			{
				pointP2=800;
			}
			
			if(sap.ui.getCore().byId("firstView--player1NameSet").getText()=='COMMANDER')
			{
				pointP1=800;
			}
			if(sap.ui.getCore().byId("firstView--player4NameSet").getText()=='COMMANDER')
			{
				pointP4=800;
			}
				}
			else
				{
				pointP3=0;
				if(sap.ui.getCore().byId("firstView--player2NameSet").getText()=='THIEF')
				{
					pointP2=500;
				}
				
				if(sap.ui.getCore().byId("firstView--player1NameSet").getText()=='THIEF')
				{
					pointP1=500;
				}
				if(sap.ui.getCore().byId("firstView--player4NameSet").getText()=='THIEF')
				{
					pointP4=500;
				}
				}
			}
			if(sap.ui.getCore().byId("firstView--player4NameSet").getText()=='SOLDIER')
			{
			if(resultRW=='right')
				{
			pointP4=500;
			if(sap.ui.getCore().byId("firstView--player2NameSet").getText()=='COMMANDER')
			{
				pointP2=800;
			}
			
			if(sap.ui.getCore().byId("firstView--player3NameSet").getText()=='COMMANDER')
			{
				pointP3=800;
			}
			if(sap.ui.getCore().byId("firstView--player1NameSet").getText()=='COMMANDER')
			{
				pointP1=800;
			}
				}
			else
				{
				pointP4=0;
				if(sap.ui.getCore().byId("firstView--player2NameSet").getText()=='THIEF')
				{
					pointP2=500;
				}
				
				if(sap.ui.getCore().byId("firstView--player3NameSet").getText()=='THIEF')
				{
					pointP3=500;
				}
				if(sap.ui.getCore().byId("firstView--player1NameSet").getText()=='THIEF')
				{
					pointP1=500;
				}
				}
			}
			
				
			
			resultList.items.push(
				    {p1: pointP1, p2: pointP2, p3: pointP3,p4:pointP4}
				);
		
			
			
			
			
			 var oModel = new sap.ui.model.json.JSONModel();
			  oModel.setData(resultList);
			  sap.ui.getCore().byId("firstView--scoreTable").setModel(oModel);
			  sap.ui.getCore().byId("firstView--scoreTable").bindRows("/items");
			  
			  
			  
			  sap.ui.getCore().byId("firstView--scoreTable1Label").setText(sap.ui.getCore().byId("firstView--player1MainLayout").getTitle());
				sap.ui.getCore().byId("firstView--scoreTable2Label").setText(sap.ui.getCore().byId("firstView--player2MainLayout").getTitle());
				sap.ui.getCore().byId("firstView--scoreTable3Label").setText(sap.ui.getCore().byId("firstView--player3MainLayout").getTitle());
				sap.ui.getCore().byId("firstView--scoreTable4Label").setText(sap.ui.getCore().byId("firstView--player4MainLayout").getTitle());
				
			 
			  
			  
			  sap.ui.getCore().byId("firstView--containerLayout").addStyleClass("disabledCss");
			  
			
			if(okButtonClickCount<5)
				{
				 sap.ui.getCore().byId("firstView--distributeButtonID").removeStyleClass("DisplayNoneCss");
				 sap.ui.getCore().byId("firstView--distributeButtonID").addStyleClass("DisplayCss");
				 
				 sap.ui.getCore().byId("firstView--containerLayout").addStyleClass("disabledCss");
				
				}
			
			totalPointP1=totalPointP1+pointP1;
			totalPointP2=totalPointP2+pointP2;
			totalPointP3=totalPointP3+pointP3;
			totalPointP4=totalPointP4+pointP4;
			if(okButtonClickCount==5)
				{
				 sap.ui.getCore().byId("firstView--distributeButtonID").removeStyleClass("DisplayCss");
				 sap.ui.getCore().byId("firstView--distributeButtonID").addStyleClass("DisplayNoneCss");
				sap.ui.getCore().byId("firstView--containerLayout").addStyleClass("disabledCss");
				sap.ui.getCore().byId("firstView--player1NameSet").setVisible(false);
				sap.ui.getCore().byId("firstView--player2NameSet").setVisible(false);
				sap.ui.getCore().byId("firstView--player3NameSet").setVisible(false);
				sap.ui.getCore().byId("firstView--player4NameSet").setVisible(false);
				sap.ui.getCore().byId("firstView--choosePlayer1ID").setVisible(false);
				sap.ui.getCore().byId("firstView--choosePlayer2ID").setVisible(false);
				sap.ui.getCore().byId("firstView--choosePlayer3ID").setVisible(false);
				sap.ui.getCore().byId("firstView--choosePlayer4ID").setVisible(false);
				sap.ui.getCore().byId("firstView--startAgainButtonKtsc").removeStyleClass("DisplayNoneCss");
				sap.ui.getCore().byId("firstView--startAgainButtonKtsc").addStyleClass("DisplayCss");
				sap.ui.getCore().byId("firstView--containerLayout").removeStyleClass("disabledCss");
				if (!this.dialogResult) {
					  this.dialogResult = sap.ui.xmlfragment("ktscgame.resultDialog", this);
					  this.getView().addDependent(this.dialogResult);
					  }
					  // toggle compact style
					  jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this.dialogResult);
				 this.dialogResult.open();
				
				var a=sap.ui.getCore().byId("firstView--player1MainLayout").getTitle();
				console.log("name"+a);
				var maxScore=Math.max(totalPointP1,totalPointP2,totalPointP3,totalPointP4);
				console.log(maxScore);
				if(maxScore==totalPointP1)
					{
					if(maxScoreGotPlayer=='')
						{
						maxScoreGotPlayer=sap.ui.getCore().byId("firstView--player1MainLayout").getTitle();
						}
					else
						{
					maxScoreGotPlayer=maxScoreGotPlayer+" & "+sap.ui.getCore().byId("firstView--player1MainLayout").getTitle();
						}
					}
				if(maxScore==totalPointP2)
				{
				
				if(maxScoreGotPlayer=='')
				{
				maxScoreGotPlayer=sap.ui.getCore().byId("firstView--player2MainLayout").getTitle();
				}
			else
				{
			maxScoreGotPlayer=maxScoreGotPlayer+" & "+sap.ui.getCore().byId("firstView--player2MainLayout").getTitle();
				}
				}
				if(maxScore==totalPointP3)
				{
			
				
				if(maxScoreGotPlayer=='')
				{
				maxScoreGotPlayer=sap.ui.getCore().byId("firstView--player3MainLayout").getTitle();
				}
			else
				{
			maxScoreGotPlayer=maxScoreGotPlayer+" "+sap.ui.getCore().byId("firstView--player3MainLayout").getTitle();
				}
				}
				if(maxScore==totalPointP4)
				{
				
				
				if(maxScoreGotPlayer=='')
				{
				maxScoreGotPlayer=sap.ui.getCore().byId("firstView--player4MainLayout").getTitle();
				}
			else
				{
			maxScoreGotPlayer=maxScoreGotPlayer+" "+sap.ui.getCore().byId("firstView--player4MainLayout").getTitle();
				}
				}
				console.log("maxScore"+maxScoreGotPlayer);
				
				
				sap.ui.getCore().byId("oTextFinalResultMsg").setText("Congratulations "+maxScoreGotPlayer+"!!!!  you  Won");
				sap.ui.getCore().byId("firstView--finalScoreButtonID").removeStyleClass("DisplayNoneCss");
				sap.ui.getCore().byId("firstView--finalScoreButtonID").addStyleClass("DisplayCss");
				
				sap.ui.getCore().byId("firstView--player1Score").setText(sap.ui.getCore().byId("firstView--player1MainLayout").getTitle()+":"+totalPointP1);
				sap.ui.getCore().byId("firstView--player2Score").setText(sap.ui.getCore().byId("firstView--player2MainLayout").getTitle()+":"+totalPointP2);
				sap.ui.getCore().byId("firstView--player3Score").setText(sap.ui.getCore().byId("firstView--player3MainLayout").getTitle()+":"+totalPointP3);
				sap.ui.getCore().byId("firstView--player4Score").setText(sap.ui.getCore().byId("firstView--player4MainLayout").getTitle()+":"+totalPointP4);
				
				sap.ui.getCore().byId("firstView--maxScorePlayer").setText("Congratulations "+maxScoreGotPlayer+"!!!!! you  Won");
				
				
				
				}
			
			console.log(totalPointP1+"   "+totalPointP2+"  "+totalPointP3+"  "+totalPointP4);
			
		
			 
	},
	okPressGameOver: function (oEvent) {
		var audio = new Audio('sounds/demonstrative.mp3');
		audio.play();
		if (!this.dialogResult) {
			  this.dialogResult = sap.ui.xmlfragment("ktscgame.resultDialog", this);
			  this.getView().addDependent(this.dialogResult);
			  }
			  // toggle compact style
			  jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this.dialogResult);
		 this.dialogResult.close();
		 
		 
			var player1Name=sap.ui.getCore().byId("firstView--player1MainLayout").getTitle();
			var player2Name=sap.ui.getCore().byId("firstView--player2MainLayout").getTitle();
			var player3Name=sap.ui.getCore().byId("firstView--player3MainLayout").getTitle();
			var player4Name=sap.ui.getCore().byId("firstView--player4MainLayout").getTitle();
			
				
//		      1.Get the id of the VizFrame		
				 oVizFrame = this.getView().byId("BarGraphID");
				
//		      2.Create a JSON Model and set the data
				var oModel = new sap.ui.model.json.JSONModel();
				var data = {
						'SCORE' : [
				            {"Player": player1Name,"Value": totalPointP1},
				            {"Player": player2Name,"Value": totalPointP2},
				            {"Player": player3Name,"Value": totalPointP3},
				            {"Player": player4Name,"Value": totalPointP4},
				           
				           ]};
				oModel.setData(data);
				
//		      3. Create Viz dataset to feed to the data to the graph
				var oDataset = new sap.viz.ui5.data.FlattenedDataset({
					dimensions : [{
						name : 'Player',
						value : "{Player}"}],
					               
					measures : [{
						name : 'SCORE',
						value : '{Value}'} ],
					             
					data : {
						path : "/SCORE"
					}
				});		
				oVizFrame.setDataset(oDataset);
				oVizFrame.setModel(oModel);	
				oVizFrame.setVizType('column');
				
//		      4.Set Viz properties
				oVizFrame.setVizProperties({
		            plotArea: {
		            	colorPalette : d3.scale.category20().range()
		                }});
				var feedValueAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
				      'uid': "valueAxis",
				      'type': "Measure",
				      'values': ["SCORE"]
				    }), 
				    feedCategoryAxis = new sap.viz.ui5.controls.common.feeds.FeedItem({
				      'uid': "categoryAxis",
				      'type': "Dimension",
				      'values': ["Player"]
				    });
				oVizFrame.addFeed(feedValueAxis);
				oVizFrame.addFeed(feedCategoryAxis);
				
			 
				
//		      1.Get the id of the VizFrame		
				oVizFramePie = this.getView().byId("idpiechart");
				
//		      2.Create a JSON Model and set the data
				var oModel = new sap.ui.model.json.JSONModel();
				var data = {
					'finalScore' : [{
						  "playerName": player1Name,
						  "Score": totalPointP1
						}, {
						  "playerName": player2Name,
						  "Score": totalPointP2
						}, {
						  "playerName": player3Name,
						  "Score": totalPointP3
						}, {
						  "playerName": player4Name,
						  "Score": totalPointP4
						}]};
				oModel.setData(data);
				
//		      3. Create Viz dataset to feed to the data to the graph
				var oDataset = new sap.viz.ui5.data.FlattenedDataset({
					dimensions : [{
					        name : 'Player Name',
						value : "{playerName}"}],
					               
					measures : [{
						name : 'Score',
						value : '{Score}'} ],
					             
					data : {
						path : "/finalScore"
					}
				});		
				oVizFramePie.setDataset(oDataset);
				oVizFramePie.setModel(oModel);	
				
//		      4.Set Viz properties
				oVizFramePie.setVizProperties({
					title:{
						text : "Score"
					},
		            plotArea: {
		            	colorPalette : d3.scale.category20().range(),
		            	drawingEffect: "glossy"
		                }});
				
				var feedSize = new sap.viz.ui5.controls.common.feeds.FeedItem({
				      'uid': "size",
				      'type': "Measure",
				      'values': ["Score"]
				    }), 
				    feedColor = new sap.viz.ui5.controls.common.feeds.FeedItem({
				      'uid': "color",
				      'type': "Dimension",
				      'values': ["Player Name"]
				    });
				oVizFramePie.addFeed(feedSize);
				oVizFramePie.addFeed(feedColor);
	},
	
	
	showScore: function (oEvent) {
		var audio = new Audio('sounds/demonstrative.mp3');
		audio.play();
		sap.ui.getCore().byId("firstView--scoreButtonID").removeStyleClass("DisplayCss");
		sap.ui.getCore().byId("firstView--scoreButtonID").addStyleClass("DisplayNoneCss");
		sap.ui.getCore().byId("firstView--hidescoreButtonID").removeStyleClass("DisplayNoneCss");
		sap.ui.getCore().byId("firstView--hidescoreButtonID").addStyleClass("DisplayCss");
		sap.ui.getCore().byId("firstView--scoreTableLayout").removeStyleClass("DisplayNoneCss");
		sap.ui.getCore().byId("firstView--scoreTableLayout").addStyleClass("DisplayCss");
	},
	hideScore:function (oEvent) {
		var audio = new Audio('sounds/beep.mp3');
		
		audio.play();
		sap.ui.getCore().byId("firstView--hidescoreButtonID").removeStyleClass("DisplayCss");
		sap.ui.getCore().byId("firstView--hidescoreButtonID").addStyleClass("DisplayNoneCss");
		
		sap.ui.getCore().byId("firstView--scoreButtonID").removeStyleClass("DisplayNoneCss");
		sap.ui.getCore().byId("firstView--scoreButtonID").addStyleClass("DisplayCss");
		
		
	
		
		sap.ui.getCore().byId("firstView--scoreTableLayout").removeStyleClass("DisplayCss");
		sap.ui.getCore().byId("firstView--scoreTableLayout").addStyleClass("DisplayNoneCss");
	},
	finalScore: function (oEvent) {
		var audio = new Audio('sounds/demonstrative.mp3');
		audio.play();
		 var buttonClickText=oEvent.getSource().getText();
		 if(buttonClickText=="Final Score")
			 {
			 sap.ui.getCore().byId("firstView--finalScoreButtonID").setText("Hide Final Score")
			 
				sap.ui.getCore().byId("firstView--finalScoreLayout").removeStyleClass("DisplayNoneCss");
				sap.ui.getCore().byId("firstView--finalScoreLayout").addStyleClass("DisplayCss");
			 }
		 else
			 {
			 sap.ui.getCore().byId("firstView--finalScoreButtonID").setText("Final Score")
			
			
				sap.ui.getCore().byId("firstView--finalScoreLayout").removeStyleClass("DisplayCss");
				sap.ui.getCore().byId("firstView--finalScoreLayout").addStyleClass("DisplayNoneCss");
			 }
	
		 
	},
		
	pauseButtonPress: function (oEvent) {
	/*	
	  for fragment...
	 if (!this.dialog) {
			  this.dialog = sap.ui.xmlfragment("ktscgame.dialog", this);
			  this.getView().addDependent(this.dialog);
			  }
			  // toggle compact style
			  jQuery.sap.syncStyleClass("sapUiSizeCompact", this.getView(), this.dialog);
			  this.dialog.open();*/
		
		
		},
	
	
/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ktscgame.homeView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ktscgame.homeView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ktscgame.homeView
*/
//	onExit: function() {
//
//	}

});