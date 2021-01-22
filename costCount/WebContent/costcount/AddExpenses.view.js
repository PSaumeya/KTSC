sap.ui.jsview("costcount.AddExpenses", {

	/** Specifies the Controller belonging to this View. 
	 * In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	 * @memberOf accounting.AddExpenses
	 */
	getControllerName : function() {
		return "costcount.AddExpenses";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	 * Since the Controller is given to this method, its event handlers can be attached right away. 
	 * @memberOf accounting.AddExpenses
	 */
	createContent : function(oController) {
		
		
		//totalExpenseText and totalExpenseValue to display total expense at the top
		var totalExpenseText = new sap.m.Label("totalExpenseText", {
			text : "Total Expenses: RS   ",
			width : "200px",
			textAlign : "Right"
		})
		var totalExpenseValue = new sap.m.Label("totalExpense", {
			text : "0",
			width : "100px",
			textAlign : "Right"
		})
		 var filterButton=new sap.m.Button("filterButton",{
				icon : "sap-icon://add-filter",
				//text : "Filter",
				//width : "50%",
				press : oController.addFilter
			});
		 //filterButton.setVisible(false);
		var oLayoutValues = new sap.ui.layout.HorizontalLayout("oLayoutValues", {
			content: [totalExpenseText, totalExpenseValue,filterButton]
		});
		oLayoutValues.setVisible(false);
		//addNewExp is new expenses button to open form
		var addNewExp = new sap.m.Button("addNewExp", {
			text : " New Expenses",

			width : "170px",
			//icon : "images/plusLogo.png",
			press :oController.newExpenses
				
		})
		//displayExp is display expenses button to open form
		var displayExp = new sap.m.Button("displayExp", {
			text : " Display Expenses",

			width : "170px",
			//icon : "images/plusLogo.png",
			press :oController.displayExpensesList
				
		})
		var oLayoutButtons = new sap.ui.layout.HorizontalLayout("oLayoutButtons", {
			content: [addNewExp, displayExp]
		});

		
		 
		  
		
		
	
		//oSimpleForm(starts here) is a new Expenses form we can add new expenses here and when we click on save .it will save and we can see this new entry in table below.
		var oSimpleForm = new sap.ui.layout.form.SimpleForm("simpleForm", {
			title : "Add New Expenses",
			layout: sap.ui.layout.form.SimpleFormLayout.ResponsiveGridLayout,
			content : [

			new sap.m.Label({
				text : "Date"
			}), new sap.m.DatePicker("dateField", {
				valueFormat:"yyyy-MM-dd",
				displayFormat : "dd-MM-yyyy",
				
				  }),
				  new sap.m.Label({
				text : "Description"
			}), new sap.m.TextArea("descriptionField", {
				value : "",
				//width : "200px"
			}), new sap.m.Label({
				text : "Category"
			}), 
			new sap.m.Select(
					"CategoryDropdown", {
						selectedKey : "0",
						//width : "200px"
						
					}),
			
			
			
			new sap.m.Label({
				text : "Type"
			}), new sap.m.Select("typeField", {

				items : [ new sap.ui.core.Item("item10", {
					key:"0",
					text : "-select-"
				}), new sap.ui.core.Item("item11", {
					key:"1",
					text : "Usual"
				}),

				new sap.ui.core.Item("item12", {
					key:"2",
					text : "Extra"
				}),

				],
				//width : "200px"

			}),
			new sap.m.Label({
				text : "Rs"
			}), new sap.m.Input("expCostField", {
				value : "",
				//width : "200px",
				Editable : true,
				type : sap.m.InputType.Number,
				maxLength : 5,
			//change : function(){oController.validateCost();}

			}), new sap.m.Label({
				text : ""
			})

			]
		});

		oSimpleForm.setVisible(false);
		//oSimpleForm ends here
		
		//oTable(start here) is a table to display all expenses list.
		var oTable = new sap.m.Table("table", {
			headerText : "Expenses List",
			// selectionChange: oController.onSelectionChange,
			columns : [ new sap.m.Column({
				header : [ new sap.m.Label({
					text : "Date"
				}) ]
			}), 
			 new sap.m.Column({
					header : [ new sap.m.Label({
						text : "Category"
					}) ]
				}),
			 new sap.m.Column({
				header : [ new sap.m.Label({
					text : "Rs"
				}) ]
			}), new sap.m.Column({
				header : [ new sap.m.Label({
					text : "Total Rs"
				}) ]
			}),

			]
		});
		oTable.setVisible(false);
		//oTable structure ends here
		
		//we can select only one row at a time
		oTable.setMode(sap.m.ListMode.SingleSelectMaster);

		//oTable binding starts here
		oTable.bindItems("/", new sap.m.ColumnListItem("listItem", {
			cells : [
					/*new sap.m.Text({
						text : "{Date}"
					}),*/
					new sap.m.DatePicker({
				valueFormat:"yyyy-MM-dd",
				displayFormat : "dd-MM-yyyy",
				value:"{Date}"
				  }).setEditable(false),
					new sap.m.Text({
						text : "{Category}"
					}),
					new sap.m.Text({
						text : "{Rs}"
					}),
					new sap.m.Text({
						text : "{TotalCost}"
					}),
					new sap.m.Text({
						text : "{Description}"
					}),
					
					new sap.m.Text({
						text : "{Type}"
					}),
					
					new sap.m.Text({
						text : "{CategoryK}"
					}),
					new sap.m.Text({
						text : "{TableId}"
					})
					

			]
		}));
		//oTable binding ends here
		
		var saveButton=new sap.m.Button("saveButton",{
			text : "Save",
			width : "50%",
			//icon : "sap-icon://add-product", 
			press : oController.onSave
		});
		saveButton.setVisible(false);
		var saveButtonCancel=new sap.m.Button("saveButtonCancel",{
			text : "Cancel",
			width : "50%",
			//icon : "sap-icon://add-product", 
			press : oController.onSaveCancel
		});
		saveButtonCancel.setVisible(false);
		
		var viewButton=new sap.m.Button("viewButton",{
			//icon : "sap-icon://edit",
			width : "50%",
			text : "View",
			press : oController.viewFunction
		});
		viewButton.setVisible(false);
		 var analysisButton=new sap.m.Button("analysisButton",{
				//icon : "sap-icon://edit",
				text : "Analysis",
				width : "50%",
				press : oController.showGraph
			});
		 analysisButton.setVisible(false);
		
		
		//final page starts here
		return new sap.m.Page({
			title : "Cost Accounting",
			//footer having edit and delete button starts here
			footer : [ new sap.m.Bar({
				design : sap.m.BarDesign.Footer,
				contentRight : [
				                	saveButtonCancel,saveButton,viewButton,analysisButton
				                
				                ]
			}) ],
			//footer ends here
			
			//adding contents to this page
			content : [ oLayoutButtons, oLayoutValues, oSimpleForm, oTable ]
		});
		
		
	}

});