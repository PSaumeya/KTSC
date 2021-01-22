sap.ui.controller("costcount.AddExpenses", {

	/**
	 * Called when a controller is instantiated and its View controls (if available) are already created.
	 * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
	 * @memberOf accounting.AddExpenses
	 */
	//	onInit: function() {
	//
	//	},
	/**
	 * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
	 * (NOT before the first rendering! onInit() is used for that one!).
	 * @memberOf accounting.AddExpenses
	 */
	//	onBeforeRendering: function() {
	//
	//	},
	/**
	 * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
	 * This hook is the same one that SAPUI5 controls get after being rendered.
	 * @memberOf accounting.AddExpenses
	 */
	//	onAfterRendering: function() {
	//
	//	},
	/**
	 * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
	 * @memberOf accounting.AddExpenses
	 */
	//	onExit: function() {
	//
	//	}

	//onInit call before page loaded
	onInit : function() {
		
		//alert("inside init");
		var dataObject = [ {
			Date : "",
			Description : "",
			Category: "",
			Type : "",
			Rs : "",
			TotalCost : "",
			
		}  ];

		//definging the JSON model and set to core	
		oModel = new sap.ui.model.json.JSONModel();
		oModel.setData(dataObject);
		sap.ui.getCore().setModel(oModel);
		console.log(oModel);
		
		//sap.ui.getCore().byId("idAddExpenses1").getController().displayExpensesList();
		
	    
	},
	displayExpensesList: function()
	{
		sap.ui.getCore().byId("oLayoutValues").setVisible(true);
		sap.ui.getCore().byId("oLayoutButtons").setVisible(true);
		alert("displaying new list.");
		//get data from localData
      	var oTable = sap.ui.getCore().byId("table");
		oTable.setVisible(true);
		sap.ui.getCore().byId("viewButton").setVisible(true);
		sap.ui.getCore().byId("oLayoutValues").setVisible(true);
		
		sap.ui.getCore().byId("analysisButton").setVisible(true);
		sap.ui.getCore().byId("saveButton").setVisible(false);
		sap.ui.getCore().byId("saveButtonCancel").setVisible(false);
		sap.ui.getCore().byId("simpleForm").setVisible(false);
		//var sqlUrlDisplay="SELECT * FROM note";
		//var sqlUrlDisplay="SELECT * FROM note ORDER BY date DESC";
		var sqlUrlDisplay="SELECT * FROM note ORDER BY DATE(date) DESC";
		
      	db.transaction(function(tx) {
      		tx.executeSql(sqlUrlDisplay, [], function(tx,res){
      			//sap.ui.getCore().byId("table").removeAllItems();
      			var oTable = sap.ui.getCore().byId("table");
    			var oModel = sap.ui.getCore().getModel();
    			var aData = oModel.getProperty("/");
    			console.log(aData.length);
    			var del=aData.length;
    			console.log(del);
    			aData.splice(0, del);
    			
    			
      			//document.getElementById("data-list").innerHTML = "";
                for(var iii = 0; iii < res.rows.length; iii++)
                {
                	//alert(res.rows.item(iii).tableId+"  "+res.rows.item(iii).date+"  "+res.rows.item(iii).description+"  "+res.rows.item(iii).category+"  "+res.rows.item(iii).typeExp+"  "+res.rows.item(iii).rs+"  "+res.rows.item(iii).categoryKey);
                	var newObject = {
                			"Date" : res.rows.item(iii).date,
                			"Description" : res.rows.item(iii).description,
                			"Category" : res.rows.item(iii).category,
                			"Type" : res.rows.item(iii).typeExp,
                			"Rs" : res.rows.item(iii).rs,
                			"CategoryK" :res.rows.item(iii).categoryKey,
                			"TableId" :res.rows.item(iii).tableId
                		//"TotalCost":totalRs
                		}
                	
        			aData.push(newObject);
                	var totalC = 0;//totalC variable to calculate total expenses and put in table
                	//calculating total expenses and putting in table
        			for (i = 0; i < aData.length; i++) {
        				totalC = totalC + +aData[i].Rs;
        				aData[i].TotalCost = totalC;
        				
        			}
                	//alert("totalC:"+totalC);
                	
        			oModel.setProperty("/", aData);
        			sap.ui.getCore().byId("totalExpense").setText(totalC);//putting total expenses in total expenses variable
        			}
      			
      			
      		});
      	}, function(err){
      		alert(err.message);
      		alert("An error occured while displaying the note");
      	});
		
	},
	
	updateExpensesListById: function(content,expensesID)
	{
		
		
		//var content = sap.ui.getCore().byId("simpleForm").getContent();
		var dateField=content[1].getValue();
		var descriptionField= content[3].getValue();
		var CategoryDropdown=content[5].getSelectedItem().getText();
		var typeField=content[7].getSelectedItem().getText();
		var expCostField=content[9].getValue();
		var CategoryDropdownKey=content[5].getSelectedKey();
		//alert("inside update function :"+expensesID+" "+dateField+""+descriptionField+""+CategoryDropdown+""+typeField+""+expCostField+""+CategoryDropdownKey);
      	if(dateField == "")
      	{
      		alert("Please enter date Field");
      		return;
      	}
      	else
      		{
      		db.transaction(function(tx) {
          		tx.executeSql("UPDATE note SET date=?, description=?, category=?, typeExp=?, rs=?, categoryKey=? WHERE tableId=?", [dateField,descriptionField,CategoryDropdown,typeField,expCostField,CategoryDropdownKey,expensesID], function(tx,res){
          			//alert('Updated successfully');
          			sap.m.MessageToast.show("Updated successfully",{at: "center middle"});
          			sap.ui.getCore().byId("idAddExpenses1").getController().displayExpensesList();
          	    	
          		});
          	}, function(err){
          		alert(err.message);
          		alert("An error occured while updating the note");
          	});
      		}
		
	},
	
	deleteExpensesById: function(expensesID)
	{
		
		
		//alert("inside delete function :"+expensesID);
      	
      		db.transaction(function(tx) {
          		tx.executeSql("DELETE FROM note where tableId=?", [expensesID], function(tx,res){
          			//alert("deleted successfully");
          			sap.m.MessageToast.show("deleted successfully",{at: "center middle"});
          			sap.ui.getCore().byId("idAddExpenses1").getController().displayExpensesList();
          	    	
          		});
          	}, function(err){
          		alert(err.message);
          		alert("An error occured while deleting the note");
          	});
      		
		
	},
	
	
	fetchCategoryJson: function()
	{
		var mModel = new sap.ui.model.json.JSONModel("json/category.json"); //initialise your model from a JSON file
		  sap.ui.getCore().setModel(mModel, "your_data_model"); //set model with a name to use later
		  var oItemSelectTemplate = new sap.ui.core.Item({
		            key : "{categoryKey}",
		            text : "{categoryV}"
		        }); //Define the template for items, which will be inserted inside a select element
		 var mySelectMenu = sap.ui.getCore().byId("CategoryDropdown"); //Get a reference to the UI element, Select to bind data
		mySelectMenu.setModel(sap.ui.getCore().getModel("your_data_model"));// set model your_data_model to Select element
		mySelectMenu.bindAggregation("items","/categoryVal",oItemSelectTemplate); //bind aggregation, item to Select element with the template selected above

		
		
		
	},
	
	//adding new expenses form
	newExpenses:function()
	{
		var oTable = sap.ui.getCore().byId("table");
		
		
		sap.ui.getCore().byId("idAddExpenses1").getController().fetchCategoryJson();
		
		
		
			oTable.setVisible(false);
			sap.ui.getCore().byId("viewButton").setVisible(false);
			sap.ui.getCore().byId("oLayoutValues").setVisible(false);
			sap.ui.getCore().byId("analysisButton").setVisible(false);
			
			sap.ui.getCore().byId("simpleForm").setVisible(true);
			sap.ui.getCore().byId("saveButton").setVisible(true);
			sap.ui.getCore().byId("saveButtonCancel").setVisible(true);
			sap.ui.getCore().byId("oLayoutValues").setVisible(false);
			sap.ui.getCore().byId("oLayoutButtons").setVisible(false);
		
			//testing
			 var currentDateQv = new Date(new Date().getTime());
			  var currentDate = new Date(new Date().getTime() + 2*(24 * 60 * 60 * 1000));
			  var day = currentDateQv.getDate();
			  var month = currentDateQv.getMonth()+1;
			  var year = currentDateQv.getFullYear();
			  console.log(day);
			  console.log(month);
			  console.log(year);
			  
			  
			  var dayQv = currentDateQv.getDate();
			 
			  if(dayQv=='1'){dayQv='0'+dayQv;}
			  if(dayQv=='2'){dayQv='0'+dayQv;}
			  if(dayQv=='3'){dayQv='0'+dayQv;}
			  if(dayQv=='4'){dayQv='0'+dayQv;}
			  if(dayQv=='5'){dayQv='0'+dayQv;}
			  if(dayQv=='6'){dayQv='0'+dayQv;}
			  if(dayQv=='7'){dayQv='0'+dayQv;}
			  if(dayQv=='8'){dayQv='0'+dayQv;}
			  if(dayQv=='9'){dayQv='0'+dayQv;}
			  
			  var monthQv = currentDateQv.getMonth() + 1 ;

			  if(monthQv=='1'){monthQv='0'+monthQv;}
			  if(monthQv=='2'){monthQv='0'+monthQv;}
			  if(monthQv=='3'){monthQv='0'+monthQv;}
			  if(monthQv=='4'){monthQv='0'+monthQv;}
			  if(monthQv=='5'){monthQv='0'+monthQv;}
			  if(monthQv=='6'){monthQv='0'+monthQv;}
			  if(monthQv=='7'){monthQv='0'+monthQv;}
			  if(monthQv=='8'){monthQv='0'+monthQv;}
			  if(monthQv=='9'){monthQv='0'+monthQv;}
			 
			  var yearQv = currentDateQv.getFullYear();

			 
			  
			  var cur1Date=String(yearQv)+"-"+monthQv;
			  console.log(cur1Date);
			  var curDateQv=cur1Date+"-"+dayQv;

			  console.log(curDateQv);
			  sap.ui.getCore().byId("dateField").setValue(curDateQv);
	
	},
	onSaveCancel:function()
	{
		sap.ui.getCore().byId("simpleForm").setVisible(false);
		sap.ui.getCore().byId("viewButton").setVisible(false);
		sap.ui.getCore().byId("oLayoutValues").setVisible(false);
		sap.ui.getCore().byId("analysisButton").setVisible(false);
		sap.ui.getCore().byId("saveButton").setVisible(false);
		sap.ui.getCore().byId("saveButtonCancel").setVisible(false);
		sap.ui.getCore().byId("oLayoutButtons").setVisible(true);
		sap.ui.getCore().byId("dateField").setValue("");
		sap.ui.getCore().byId("descriptionField").setValue("");
		sap.ui.getCore().byId("CategoryDropdown").setSelectedKey("");
		sap.ui.getCore().byId("typeField").setSelectedKey("");
		sap.ui.getCore().byId("expCostField").setValue("");
	},
	
	
	//onSave is called from adding new expenses form when we click on save button ,It will save data and we can see this entry in table.
	onSave : function() {
		var content = sap.ui.getCore().byId("simpleForm").getContent();
		var dateField=content[1].getValue();
		var descriptionField= content[3].getValue();
		var CategoryDropdown=content[5].getSelectedItem().getText();
		var typeField=content[7].getSelectedItem().getText();
		var expCostField=content[9].getValue();
		var CategoryDropdownKey=content[5].getSelectedKey();
		console.log(dateField);
      	if(dateField == "")
      	{
      		alert("Please enter date Field");
      		return;
      	}
      	else
      		{

      	db.transaction(function(tx) {
      		tx.executeSql("INSERT INTO note (date,description,category,typeExp,rs,categoryKey) VALUES (?,?,?,?,?,?)", [dateField, descriptionField,CategoryDropdown,typeField, expCostField,CategoryDropdownKey], function(tx,res){
      			alert("Note"+dateField+"  "+descriptionField+"  "+CategoryDropdown+"    "+typeField+"   "+expCostField+"  "+CategoryDropdownKey);
      			//alert("Note Added");
      			sap.m.MessageToast.show("Expenses Added successfully",{at: "center middle"});
      		});
      	}, function(err){
      		alert("An error occured while saving the note"+err);
      	});
    	sap.ui.getCore().byId("idAddExpenses1").getController().displayExpensesList();
    	//empty all the data from new expenses form
		sap.ui.getCore().byId("dateField").setValue("");
		sap.ui.getCore().byId("descriptionField").setValue("");
		sap.ui.getCore().byId("CategoryDropdown").setSelectedKey("");
		sap.ui.getCore().byId("typeField").setSelectedKey("");
		sap.ui.getCore().byId("expCostField").setValue("");
		sap.ui.getCore().byId("simpleForm").setVisible(false);//closing new expenses form
		sap.ui.getCore().byId("saveButton").setVisible(false);
		sap.ui.getCore().byId("saveButtonCancel").setVisible(false);
			}
      	
      	 
      
      	
	},
	viewFunction:function()
	{

		var oEditDialog = new sap.m.Dialog();
		oEditDialog.setTitle("View Expenses");
		oEditDialog.onAfterRendering = function() {
		    if (sap.m.Dialog.prototype.onAfterRendering) {
		      sap.m.Dialog.prototype.onAfterRendering.apply(this, arguments);
		      var b = $('<div class="closebtn">X</div>');
		      this.$().prepend(b);
		      b.click(function() {
		        this.close(); 
		      }.bind(this));
		    }
		  }
		//it give complete context data assigned to row
		var contexts = sap.ui.getCore().byId("table").getSelectedContexts();
		if (contexts == "") {
			sap.m.MessageToast.show("Please Select  any expenses to View",{at: "center middle"}); //this msg will be displayed when no row is selected
		} 
		else {
			//getting data from selected row
			
			
			
			var oSelectedItem = sap.ui.getCore().byId("table").getSelectedItems();
			var item1 = oSelectedItem[0];
			var cells = item1.getCells();
			var expensesDate;
			var expensesDescription;
			var expensesCategory;
			var expensesType;
			var expensesCost;
			var expensesCategoryK; 
			
			
			//getting data from selected row
			
		
			/*
			var oSelectedItem = sap.ui.getCore().byId("table").getSelectedItems();
			var item1 = oSelectedItem[0];
			var cells = item1.getCells();
			var expensesDate = cells[0].getText();
			var expensesDescription = cells[4].getText();
			var expensesCategory = cells[1].getText();
			var expensesType = cells[5].getText();
			var expensesCost = cells[2].getText();
			var expensesCategoryK = cells[6].getText();
			var expensesTypekey;
			if (expensesType == "Usual") {
				expensesTypekey = "1";
			} else if (expensesType == "Extra") {
				expensesTypekey = "2";
			} else {
				expensesTypekey = "0";
			}
			console.log(expensesCategoryK);
			//oSimpleForm is a edit form with old data in which we can edit old expenses and save.New data will be displayed in table.
			var catdd=new sap.m.Select(
					 {
							//selectedKey : "",
							
						});
			var mModel = new sap.ui.model.json.JSONModel("json/category.json"); //initialise your model from a JSON file
			  sap.ui.getCore().setModel(mModel, "your_data_model"); //set model with a name to use later
			  var oItemSelectTemplate = new sap.ui.core.Item({
			            key : "{categoryKey}",
			            text : "{categoryV}"
			        }); //Define the template for items, which will be inserted inside a select element
			 
			 catdd.setModel(sap.ui.getCore().getModel("your_data_model"));// set model your_data_model to Select element
			 catdd.bindAggregation("items","/categoryVal",oItemSelectTemplate); //bind aggregation, item to Select element with the template selected above


			 
			var oSimpleForm = new sap.ui.layout.form.SimpleForm({
				maxContainerCols : 2,
				content : [

				new sap.m.Label({
					text : "Date"
				}), new sap.m.DatePicker({
					value : expensesDate
				}),

				new sap.m.Label({
					text : "Expenses Description"
				}), new sap.m.TextArea({
					value : expensesDescription
				}), 
				new sap.m.Label({
					text : "Category"
				}), 
				catdd.setSelectedKey(expensesCategoryK),
				
				
				new sap.m.Label({
					text : "Type"
				}), new sap.m.Select({
					items : [ new sap.ui.core.Item({
						key : "0",
						text : "-select-"
					}), new sap.ui.core.Item({
						key : "1",
						text : "Usual"
					}),

					new sap.ui.core.Item({
						key : "2",
						text : "Extra"
					}),

					],
					width : "200px"

				}).setSelectedKey(expensesTypekey),
				
				new sap.m.Label({
					text : "Rs"
				}), new sap.m.Input({
					Editable : true,
					type : sap.m.InputType.Number,
					maxLength : 5,
					value : expensesCost
				}),

				]
			});
			oSimpleForm.addStyleClass("disableCss");
			var oTable = sap.ui.getCore().byId("table");
			var oSelectedItem = oTable.getSelectedItem();
			var index = oTable.indexOfItem(oSelectedItem);

			oEditDialog.addContent(oSimpleForm);//adding edit form to dialog box
			var saveButtonEdit=new sap.m.Button(
					{
						text : "Save",
						//icon : "sap-icon://save",
						press : function() {

							var content = oSimpleForm.getContent();
							
							sap.ui.getCore().byId("idAddExpenses1").getController().updateExpensesListById(content,expensesID);
							
							oEditDialog.close();
						
						}
					});
			saveButtonEdit.setVisible(false);
			
	    			
			var editButton=new sap.m.Button(
					{
						text : "Edit",
						//icon : "sap-icon://save",
						press : function() {
							oSimpleForm.removeStyleClass("disableCss");
							saveButtonEdit.setVisible(true);
							editButton.setVisible(false);
							oEditDialog.setTitle("Update Expenses");
							//sap.ui.getCore().byId("idAddExpenses1").getController().editFunction();
						}
					});
					
			oEditDialog.addButton(saveButtonEdit);
			oEditDialog.addButton(editButton);
			oEditDialog.addButton(new sap.m.Button(
					{
						text : "Delete",
						//icon : "sap-icon://save",
						press : function() {
							sap.ui.getCore().byId("idAddExpenses1").getController().deleteFunction();
						}
					}));

			oEditDialog.open();
			*/
		
			
			var expensesID=cells[7].getText();
			alert("expensesID:"+expensesID);
	      	db.transaction(function(tx) {
	      		tx.executeSql("SELECT * FROM note WHERE tableId = ?", [expensesID], function(tx,res){
	                alert(res.rows.item(0).tableId+" "+res.rows.item(0).date+" "+res.rows.item(0).description+" "+res.rows.item(0).category+" "+res.rows.item(0).typeExp+" "+res.rows.item(0).rs+"  "+res.rows.item(0).categoryKey);
	                
	                expensesDate =res.rows.item(0).date;
	      			expensesDescription = res.rows.item(0).description;
	      			expensesCategory = res.rows.item(0).category;
	      			expensesType = res.rows.item(0).typeExp;
	      			expensesCost =res.rows.item(0).rs;
	      			expensesCategoryK = res.rows.item(0).categoryKey;
	      			
	      			
	      			//
	      			var expensesTypekey;
	    			if (expensesType == "Usual") {
	    				expensesTypekey = "1";
	    			} else if (expensesType == "Extra") {
	    				expensesTypekey = "2";
	    			} else {
	    				expensesTypekey = "0";
	    			}
	    			//console.log(expensesCategoryK);
	    			//oSimpleForm is a edit form with old data in which we can edit old expenses and save.New data will be displayed in table.
	    			var catdd=new sap.m.Select(
	    					 {
	    							//selectedKey : "",
	    							
	    						});
	    			var mModel = new sap.ui.model.json.JSONModel("json/category.json"); //initialise your model from a JSON file
	    			  sap.ui.getCore().setModel(mModel, "your_data_model"); //set model with a name to use later
	    			  var oItemSelectTemplate = new sap.ui.core.Item({
	    			            key : "{categoryKey}",
	    			            text : "{categoryV}"
	    			        }); //Define the template for items, which will be inserted inside a select element
	    			 
	    			 catdd.setModel(sap.ui.getCore().getModel("your_data_model"));// set model your_data_model to Select element
	    			 catdd.bindAggregation("items","/categoryVal",oItemSelectTemplate); //bind aggregation, item to Select element with the template selected above


	    				
	    			var oSimpleForm = new sap.ui.layout.form.SimpleForm({
	    				maxContainerCols : 2,
	    				content : [

	    				new sap.m.Label({
	    					text : "Date"
	    				}), new sap.m.DatePicker({
	    					valueFormat:"yyyy-MM-dd",
	    					displayFormat : "dd-MM-yyyy",
	    					value : expensesDate
	    					  }
	    					
	    				),

	    				new sap.m.Label({
	    					text : "Expenses Description"
	    				}), new sap.m.TextArea({
	    					value : expensesDescription
	    				}), 
	    				new sap.m.Label({
	    					text : "Category"
	    				}), 
	    				catdd.setSelectedKey(expensesCategoryK),
	    				
	    				
	    				new sap.m.Label({
	    					text : "Type"
	    				}), new sap.m.Select({
	    					items : [ new sap.ui.core.Item({
	    						key : "0",
	    						text : "-select-"
	    					}), new sap.ui.core.Item({
	    						key : "1",
	    						text : "Usual"
	    					}),

	    					new sap.ui.core.Item({
	    						key : "2",
	    						text : "Extra"
	    					}),

	    					],
	    					width : "200px"

	    				}).setSelectedKey(expensesTypekey),
	    				
	    				new sap.m.Label({
	    					text : "Rs"
	    				}), new sap.m.Input({
	    					Editable : true,
	    					type : sap.m.InputType.Number,
	    					maxLength : 5,
	    					value : expensesCost
	    				}),

	    				]
	    			});
	    			
	    			
	    			oEditDialog.addContent(oSimpleForm);//adding edit form to dialog box
	    			oSimpleForm.addStyleClass("disableCss");
	    			

	    			oEditDialog.addContent(oSimpleForm);//adding edit form to dialog box
	    			var saveButtonEdit=new sap.m.Button(
	    					{
	    						text : "Save",
	    						//icon : "sap-icon://save",
	    						press : function() {

	    							var content = oSimpleForm.getContent();
	    							
	    							sap.ui.getCore().byId("idAddExpenses1").getController().updateExpensesListById(content,expensesID);
	    							
	    							oEditDialog.close();
	    						
	    						}
	    					});
	    			saveButtonEdit.setVisible(false);
	    			
	    			var editButton=new sap.m.Button(
	    					{
	    						text : "Edit",
	    						//icon : "sap-icon://save",
	    						press : function() {
	    							oSimpleForm.removeStyleClass("disableCss");
	    							saveButtonEdit.setVisible(true);
	    							editButton.setVisible(false);
	    							oEditDialog.setTitle("Update Expenses");
	    							//sap.ui.getCore().byId("idAddExpenses1").getController().editFunction();
	    						}
	    					});
	    			
	    			oEditDialog.addButton(saveButtonEdit);
	    			oEditDialog.addButton(editButton);
	    			oEditDialog.addButton(new sap.m.Button(
	    					{
	    						text : "Delete",
	    						//icon : "sap-icon://save",
	    						press : function() {
	    							sap.ui.getCore().byId("idAddExpenses1").getController().deleteFunction();
	    							oEditDialog.close();
	    						}
	    					}));

	    			oEditDialog.open();
	      			
	                                   
	      		});
	      	}, function(err){
	      		alert(err.message);
	      		alert("An error occured while displaying the note with Id");
	      	}); 
			
			
		}

	
	},
	//editFunction is called from when we click edit button on footer
	editFunction : function() {
		var oEditDialog = new sap.m.Dialog();
		oEditDialog.setTitle("Update Expenses");

		//it give complete context data assigned to row
		var contexts = sap.ui.getCore().byId("table").getSelectedContexts();
		if (contexts == "") {
			sap.m.MessageToast.show("Please Select a any expenses to Update",{at: "center middle"});//this msg will be displayed when no row is selected
		} 
		else {
			//getting data from selected row
			
			
			
			var oSelectedItem = sap.ui.getCore().byId("table").getSelectedItems();
			var item1 = oSelectedItem[0];
			var cells = item1.getCells();
			var expensesDate;
			var expensesDescription;
			var expensesCategory;
			var expensesType;
			var expensesCost;
			var expensesCategoryK; 
			
			var expensesID=cells[7].getText();
			alert("expensesID:"+expensesID);
	      	db.transaction(function(tx) {
	      		tx.executeSql("SELECT * FROM note WHERE tableId = ?", [expensesID], function(tx,res){
	                alert(res.rows.item(0).tableId+" "+res.rows.item(0).date+" "+res.rows.item(0).description+" "+res.rows.item(0).category+" "+res.rows.item(0).typeExp+" "+res.rows.item(0).rs+"  "+res.rows.item(0).categoryKey);
	                
	                expensesDate =res.rows.item(0).date;
	      			expensesDescription = res.rows.item(0).description;
	      			expensesCategory = res.rows.item(0).category;
	      			expensesType = res.rows.item(0).typeExp;
	      			expensesCost =res.rows.item(0).rs;
	      			expensesCategoryK = res.rows.item(0).categoryKey;
	      			
	      			
	      			//
	      			var expensesTypekey;
	    			if (expensesType == "Usual") {
	    				expensesTypekey = "1";
	    			} else if (expensesType == "Extra") {
	    				expensesTypekey = "2";
	    			} else {
	    				expensesTypekey = "0";
	    			}
	    			//console.log(expensesCategoryK);
	    			//oSimpleForm is a edit form with old data in which we can edit old expenses and save.New data will be displayed in table.
	    			var catdd=new sap.m.Select(
	    					 {
	    							//selectedKey : "",
	    							
	    						});
	    			var mModel = new sap.ui.model.json.JSONModel("json/category.json"); //initialise your model from a JSON file
	    			  sap.ui.getCore().setModel(mModel, "your_data_model"); //set model with a name to use later
	    			  var oItemSelectTemplate = new sap.ui.core.Item({
	    			            key : "{categoryKey}",
	    			            text : "{categoryV}"
	    			        }); //Define the template for items, which will be inserted inside a select element
	    			 
	    			 catdd.setModel(sap.ui.getCore().getModel("your_data_model"));// set model your_data_model to Select element
	    			 catdd.bindAggregation("items","/categoryVal",oItemSelectTemplate); //bind aggregation, item to Select element with the template selected above


	    				
	    			var oSimpleForm = new sap.ui.layout.form.SimpleForm({
	    				maxContainerCols : 2,
	    				content : [

	    				new sap.m.Label({
	    					text : "Date"
	    				}), new sap.m.DatePicker({
	    					value : expensesDate
	    				}),

	    				new sap.m.Label({
	    					text : "Expenses Description"
	    				}), new sap.m.TextArea({
	    					value : expensesDescription
	    				}), 
	    				new sap.m.Label({
	    					text : "Category"
	    				}), 
	    				catdd.setSelectedKey(expensesCategoryK),
	    				
	    				/*new sap.m.Select(
	    						 {
	    							selectedKey : "",
	    							
	    						}),*/
	    				
	    				new sap.m.Label({
	    					text : "Type"
	    				}), new sap.m.Select({
	    					items : [ new sap.ui.core.Item({
	    						key : "0",
	    						text : "-select-"
	    					}), new sap.ui.core.Item({
	    						key : "1",
	    						text : "Usual"
	    					}),

	    					new sap.ui.core.Item({
	    						key : "2",
	    						text : "Extra"
	    					}),

	    					],
	    					width : "200px"

	    				}).setSelectedKey(expensesTypekey),
	    				
	    				new sap.m.Label({
	    					text : "Rs"
	    				}), new sap.m.Input({
	    					Editable : true,
	    					type : sap.m.InputType.Number,
	    					maxLength : 5,
	    					value : expensesCost
	    				}),

	    				]
	    			});
	    			
	    			
	    			oEditDialog.addContent(oSimpleForm);//adding edit form to dialog box
	    			oEditDialog.addButton(new sap.m.Button(
	    					{
	    						text : "Save",
	    						icon : "sap-icon://save",
	    						press : function() {
	    							var content = oSimpleForm.getContent();
	    							/*var oModel = sap.ui.getCore().getModel();
	    							var aData = oModel.getProperty("/");
	    							aData[index].Date = content[1].getValue();
	    							aData[index].Description = content[3].getValue();
	    							aData[index].Category = content[5].getSelectedItem().getText(),
	    							aData[index].Type = content[7].getSelectedItem().getText(),
	    							aData[index].Rs = content[9].getValue();*/
	    							sap.ui.getCore().byId("idAddExpenses1").getController().updateExpensesListById(content,expensesID);
	    							/*
	    							//getting new values from edit form
	    							var content = oSimpleForm.getContent();
	    							var oModel = sap.ui.getCore().getModel();
	    							var aData = oModel.getProperty("/");
	    							aData[index].Date = content[1].getValue();
	    							aData[index].Description = content[3]
	    									.getValue();
	    							aData[index].Category = content[5]
	    							.getSelectedItem().getText(),
	    							aData[index].Type = content[7]
	    									.getSelectedItem().getText(),
	    									aData[index].Rs = content[9]
	    											.getValue();
	    							//updating total exp if expenses cost changed
	    							if (aData[index].Rs != expensesCost) {
	    								var totalC = 0;
	    								var totalAmountNow;
	    								var totalEx = sap.ui.getCore().byId(
	    										"totalExpense").getText();
	    								console.log(totalEx);
	    								totalAmountNow = parseInt(totalEx)+ parseInt(aData[index].Rs- expensesCost);
	    								for (i = 0; i < aData.length; i++) {
	    									totalC = totalC + +aData[i].Rs;
	    									aData[i].TotalCost = totalC;
	    									//sap.ui.getCore().byId("__text4-table-"+i).setText(aData[i].TotalCost);
	    									//console.log(aData[i].TotalCost);
	    								}
	    								
	    								console.log(totalAmountNow);
	    								
	    								sap.ui.getCore().byId("totalExpense").setText(totalAmountNow);//putting new expenses value to total expenses variable
	    							}
	    							oModel.setProperty("/", aData);
	    							*/
	    							oEditDialog.close();
	    						}
	    					}));

	    			oEditDialog.open();
	      			
	                                   
	      		});
	      	}, function(err){
	      		alert(err.message);
	      		alert("An error occured while displaying the note with Id");
	      	});
			
			
		}

	},
	//deleteFunction will delete selected row and update total expenses accordingly
	deleteFunction : function() {
		//it give complete context data assigned to row
		var contexts = sap.ui.getCore().byId("table").getSelectedContexts();
		
			var oSelectedItem = sap.ui.getCore().byId("table").getSelectedItems();
			var item1 = oSelectedItem[0];
			var cells = item1.getCells();
			var expensesID=cells[7].getText();
			//alert("expensesID:"+expensesID);
			
			sap.ui.getCore().byId("idAddExpenses1").getController().deleteExpensesById(expensesID);
			
		
			

			var expensesCost = cells[3].getText();
			console.log(expensesCost);
			//if  expensesCost is there then updating total expenses
			if (expensesCost != "") {

				var totalAmountNow;
				var totalEx = sap.ui.getCore().byId("totalExpense").getText();
				console.log(totalEx);
				totalAmountNow = parseInt(totalEx) - parseInt(expensesCost);
				console.log(totalAmountNow);
				sap.ui.getCore().byId("totalExpense").setText(totalAmountNow);

			}

			console.log(oModel);
			var oTable = sap.ui.getCore().byId("table");
			var oSelectedItem = oTable.getSelectedItem();
			var index = oTable.indexOfItem(oSelectedItem);

			var oModel = sap.ui.getCore().getModel();
			var aData = oModel.getProperty("/");
			aData.splice(index, 1);
			var totalC = 0;
			for (i = 0; i < aData.length; i++) {
				totalC = totalC + +aData[i].Rs;
				aData[i].TotalCost = totalC;
				//sap.ui.getCore().byId("__text4-table-"+i).setText(aData[i].TotalCost);
				console.log(aData[i].TotalCost);
			}

			oModel.setProperty("/", aData);
		

	},
	addFilter: function()
	{
		alert("adding filter");
		var filterDialog = new sap.m.Dialog();
		filterDialog.setTitle("Add Filter");
		filterDialog.onAfterRendering = function() {
		    if (sap.m.Dialog.prototype.onAfterRendering) {
		      sap.m.Dialog.prototype.onAfterRendering.apply(this, arguments);
		      var b = $('<div class="closebtn">X</div>');
		      this.$().prepend(b);
		      b.click(function() {
		        this.close(); 
		      }.bind(this));
		    }
		  }
		
		
		var catdd=new sap.m.Select(
				 {
						//selectedKey : "",
						
					});
		var mModel = new sap.ui.model.json.JSONModel("json/category.json"); //initialise your model from a JSON file
		  sap.ui.getCore().setModel(mModel, "your_data_model"); //set model with a name to use later
		  var oItemSelectTemplate = new sap.ui.core.Item({
		            key : "{categoryKey}",
		            text : "{categoryV}"
		        }); //Define the template for items, which will be inserted inside a select element
		 
		 catdd.setModel(sap.ui.getCore().getModel("your_data_model"));// set model your_data_model to Select element
		 catdd.bindAggregation("items","/categoryVal",oItemSelectTemplate); //bind aggregation, item to Select element with the template selected above

		
		var oSimpleFormFilter = new sap.ui.layout.form.SimpleForm({
			maxContainerCols : 2,
			content : [

			new sap.m.Label({
				text : "By Date"
			}), new sap.m.DatePicker({
				valueFormat:"yyyy-MM-dd",
				displayFormat : "dd-MM-yyyy",
				
				  }),

			new sap.m.Label({
				text : "From Date"
			}), new sap.m.DatePicker({
				valueFormat:"yyyy-MM-dd",
				displayFormat : "dd-MM-yyyy",
				
				  }),
			new sap.m.Label({
				text : "To Date"
			}), new sap.m.DatePicker({
				valueFormat:"yyyy-MM-dd",
				displayFormat : "dd-MM-yyyy",
				
				  }),
			
			new sap.m.Label({
				text : "By Category"
			}), 
			catdd,
			
			
			
			new sap.m.Label({
				text : "By Type"
			}), new sap.m.Select({
				items : [ new sap.ui.core.Item({
					key : "0",
					text : "-select-"
				}), new sap.ui.core.Item({
					key : "1",
					text : "Usual"
				}),

				new sap.ui.core.Item({
					key : "2",
					text : "Extra"
				}),

				],
				width : "200px"

			})

			]
		});
		
		
		filterDialog.addContent(oSimpleFormFilter);//adding edit form to dialog box
		filterDialog.addButton(new sap.m.Button(
				{
					text : "Get Details",
					//icon : "sap-icon://save",
					press : function() {
						var content = oSimpleFormFilter.getContent();
						
						sap.ui.getCore().byId("idAddExpenses1").getController().filterTable(content);
						
						filterDialog.close();
					}
				}));
		filterDialog.addButton(new sap.m.Button(
				{
					text : "Clear",
					//icon : "sap-icon://save",
					press : function() {
						var content = oSimpleFormFilter.getContent();
						var dateField=content[1].setValue("");
						var fromDate= content[3].setValue("");
						var toDate=content[5].setValue("");
						var byCategory=content[7].setSelectedKey("");
						var byType=content[9].setSelectedKey("");
						
						
						
					}
				}));

		filterDialog.open();
		
	},
	filterTable: function(content)
	{
		var dateField=content[1].getValue();
		var fromDate= content[3].getValue();
		var toDate=content[5].getValue();
		var byCategory=content[7].getSelectedItem().getText();
		var byType=content[9].getSelectedItem().getText();
		console.log(dateField);
		console.log(fromDate);
		console.log(toDate);
		console.log(byCategory);
		console.log(byType); 
		var sqlQ;
		var sqlVal;
		if(dateField=="" && fromDate==""&& toDate==""&& byCategory=="-select-"&& byType=="-select-")
			{
			sap.m.MessageToast.show("Please Select any Values for filter",{at: "center middle"});
			}
		else if(dateField!="" && fromDate==""&& toDate==""&& byCategory=="-select-"&& byType=="-select-")
			{
			sqlQ="SELECT * FROM note WHERE date = ?";
			sqlVal=[dateField];
			}
		else if(dateField=="" && fromDate!=""&& toDate!=""&& byCategory=="-select-"&& byType=="-select-")
		{
		sqlQ="SELECT * FROM note WHERE date >= ? AND date < ? ORDER BY DATE(date) DESC";
		
		sqlVal=[fromDate,toDate];
		}
		else if(dateField=="" && fromDate==""&& toDate==""&& byCategory!="-select-"&& byType=="-select-")
		{
		sqlQ="SELECT * FROM note WHERE category = ? ORDER BY DATE(date) DESC";
		sqlVal=[byCategory];
		}
		else if(dateField=="" && fromDate==""&& toDate==""&& byCategory=="-select-"&& byType!="-select-")
		{
		sqlQ="SELECT * FROM note WHERE typeExp = ? ORDER BY DATE(date) DESC";
		sqlVal=[byType];
		}
		else if(dateField!="" && fromDate==""&& toDate==""&& byCategory!="-select-"&& byType=="-select-")
		{
		sqlQ="SELECT * FROM note WHERE date = ? AND category = ?";
		sqlVal=[dateField,byCategory];
		}
		else if(dateField!="" && fromDate==""&& toDate==""&& byCategory=="-select-"&& byType!="-select-")
		{
		sqlQ="SELECT * FROM note WHERE date = ? AND typeExp = ?";
		sqlVal=[dateField,byType];
		}
		else if(dateField!="" && fromDate==""&& toDate==""&& byCategory!="-select-" && byType!="-select-")
		{
		sqlQ="SELECT * FROM note WHERE date = ? AND typeExp = ? AND category = ?";
		sqlVal=[dateField,byType,byCategory];
		}
		else if(dateField=="" && fromDate==""&& toDate==""&& byCategory!="-select-" && byType!="-select-")
		{
		sqlQ="SELECT * FROM note WHERE typeExp = ? AND category = ? ORDER BY DATE(date) DESC";
		sqlVal=[byType,byCategory];
		}
		else if(fromDate==""&& toDate!="")
		{
			sap.m.MessageToast.show("Please Select fromDate for filter Or Choose Other Options",{at: "center middle"});
		}
		else if(fromDate!=""&& toDate=="")
		{
			sap.m.MessageToast.show("Please Select toDate for filter Or Choose Other Options",{at: "center middle"});
		}
		else if(dateField!="" && fromDate!=""&& toDate!=""&& byCategory=="-select-"&& byType=="-select-")
		{
		sap.m.MessageToast.show("Please Select any one 'By date' OR 'from date and To date' for filter",{at: "center middle"});
		}
		else
			{
			sap.m.MessageToast.show("Please Select any Options",{at: "center middle"});
			}
		alert(sqlQ);
		alert(sqlVal);
		db.transaction(function(tx) {
      		tx.executeSql(sqlQ,sqlVal, function(tx,res){
      			//sap.ui.getCore().byId("table").removeAllItems();
      			var oTable = sap.ui.getCore().byId("table");
    			var oModel = sap.ui.getCore().getModel();
    			var aData = oModel.getProperty("/");
    			console.log(aData.length);
    			var del=aData.length;
    			console.log(del);
    			aData.splice(0, del);
    			alert(res.rows.length);
    			if(res.rows.length!=0)
    				{
    				//document.getElementById("data-list").innerHTML = "";
                    for(var iii = 0; iii < res.rows.length; iii++)
                    {
                    	//alert(res.rows.item(iii).tableId+"  "+res.rows.item(iii).date+"  "+res.rows.item(iii).description+"  "+res.rows.item(iii).category+"  "+res.rows.item(iii).typeExp+"  "+res.rows.item(iii).rs+"  "+res.rows.item(iii).categoryKey);
                    	var newObject = {
                    			"Date" : res.rows.item(iii).date,
                    			"Description" : res.rows.item(iii).description,
                    			"Category" : res.rows.item(iii).category,
                    			"Type" : res.rows.item(iii).typeExp,
                    			"Rs" : res.rows.item(iii).rs,
                    			"CategoryK" :res.rows.item(iii).categoryKey,
                    			"TableId" :res.rows.item(iii).tableId
                    		//"TotalCost":totalRs
                    		}
                    	
            			aData.push(newObject);
                    	var totalC = 0;//totalC variable to calculate total expenses and put in table
                    	//calculating total expenses and putting in table
            			for (i = 0; i < aData.length; i++) {
            				totalC = totalC + +aData[i].Rs;
            				aData[i].TotalCost = totalC;
            				
            			}
                    	//alert("totalC:"+totalC);
                    	
            			oModel.setProperty("/", aData);
            			sap.ui.getCore().byId("totalExpense").setText(totalC);//putting total expenses in total expenses variable
            			}
    				}
    			else
    				{
    				oModel.setProperty("/", aData);
    				var totalC = 0;//totalC variable to calculate total expenses and put in table
    				sap.ui.getCore().byId("totalExpense").setText(totalC);//putting total expenses in total expenses variable
    				sap.m.MessageToast.show("No Data found",{at: "center middle"});
    				}
    			
    			
      			
      			
      			
      		});
      	}, function(err){
      		alert(err.message);
      		alert("An error occured while filtering the note");
      	});
	},
	showGraph: function()
	{
		var sqlQ;
		var sqlVal;
		sqlQ="SELECT date,SUM(rs) AS TotalRs FROM note GROUP BY date ORDER BY DATE(date) DESC";
		sqlVal=[];
		alert(sqlQ);
		alert(sqlVal);
		db.transaction(function(tx) {
      		tx.executeSql(sqlQ,sqlVal, function(tx,res){
      			//sap.ui.getCore().byId("table").removeAllItems();
      			
    			var oModel = sap.ui.getCore().getModel();
    			var aData = oModel.getProperty("/");
    			console.log(aData.length);
    			var del=aData.length;
    			console.log(del);
    			aData.splice(0, del);
    			alert(res.rows.length);
    			if(res.rows.length!=0)
    				{
    				//document.getElementById("data-list").innerHTML = "";
                    for(var iii = 0; iii < res.rows.length; iii++)
                    {
                    	//alert(res.rows.item(iii).tableId+"  "+res.rows.item(iii).date+"  "+res.rows.item(iii).description+"  "+res.rows.item(iii).category+"  "+res.rows.item(iii).typeExp+"  "+res.rows.item(iii).rs+"  "+res.rows.item(iii).categoryKey);
                    	alert(res.rows.item(iii).date+"  "+res.rows.item(iii).TotalRs);
                    	//alert(res.rows.item(iii).TotalRs);
                    	var newObject = {
                    			"Date" : res.rows.item(iii).date,
                    			
                    			"Rs" : res.rows.item(iii).TotalRs,
                    			
                    		//"TotalCost":totalRs
                    		}
                    	
            			aData.push(newObject);
                    	
                    	
            			oModel.setProperty("/", aData);
            			}
                  //adding dialog box for graph
           		 var graphDialog = new sap.m.Dialog();
                    graphDialog.setTitle("Monthly Graph");
                    graphDialog.onAfterRendering = function() {
            		    if (sap.m.Dialog.prototype.onAfterRendering) {
            		      sap.m.Dialog.prototype.onAfterRendering.apply(this, arguments);
            		      var b = $('<div class="closebtn">X</div>');
            		      this.$().prepend(b);
            		      b.click(function() {
            		    	 sap.ui.getCore().byId("idAddExpenses1").getController().displayExpensesList();
            				
            		        this.close(); 
            		      }.bind(this));
            		    }
            		  }
                  
                    graphDialog.open();
                    graphDialog.addContent(sap.ui.htmlview("costcount.GraphExpenses"));
                    alert("graph open..");
           		
                   //sap.ui.getCore().byId("GraphExpensesViewId").getController().getData();
           		
    				}
    			else
    				{
    				oModel.setProperty("/", aData);
    				sap.m.MessageToast.show("No Data found",{at: "center middle"});
    				}
    			
    			
      			
      			
      			
      		});
      	}, function(err){
      		alert(err.message);
      		alert("An error occured while fetching the data");
      	});
		
		
		
		
		
		
	}
	
	
});