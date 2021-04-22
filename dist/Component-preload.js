//@ui5-bundle com/bolam/zptv_bolam_approval/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"com/bolam/zptv_bolam_approval/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","com/bolam/zptv_bolam_approval/model/models"],function(e,t,o){"use strict";return e.extend("com.bolam.zptv_bolam_approval.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(o.createDeviceModel(),"device")}})});
},
	"com/bolam/zptv_bolam_approval/controller/ApprovalHome.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/Dialog","sap/m/DialogType","sap/m/Button","sap/m/ButtonType","sap/m/Label","sap/m/MessageToast","sap/m/Text","sap/m/HBox"],function(e,t,o,s,i,a,n,l,r){"use strict";return e.extend("com.bolam.zptv_bolam_approval.controller.ApprovalHome",{onInit:function(){this.onReadTable()},onReadTable:function(){var e=this.getView().byId("idFileApprovalTable");var t=this.getView().getModel("fileListModel");var o=this.getView().getModel("oFileMainModelJSON");t.read("/FileReqSet",{success:function(t){var s=t.results;o.setData(s);e.setModel(o)}})},onFilesSubmitReq:function(){var e=this.getView().byId("idFileApprovalTable").getModel().getData();var n=0;var l=0;this._oData=e;for(var p=0;p<e.length;p++){if(e[p].Approve==true){n=n+1}if(e[p].Deny==true){l=l+1}}this.oApproveDialog=new t({type:o.Message,title:"Save & Submit Information?",content:[new r({items:[new a({text:"You are about to submit:"})]}),new r({items:[new a({text:n+" Approved Files"}).addStyleClass("bulletlist")]}),new r({items:[new a({text:l+" Denied Files"}).addStyleClass("bulletlist")]}),new r({items:[new a({text:""})]}),new r({items:[new a({text:"Are you sure you would like to save and submit the information "})]}),new r({items:[new a({text:"from this session?"})]})],beginButton:new s({type:i.Emphasized,text:"Yes",press:function(){this.onApproveYesPress();this.oApproveDialog.close()}.bind(this)}),endButton:new s({text:"Cancel",press:function(){this.oApproveDialog.close()}.bind(this)})});this.oApproveDialog.open()},onApproveYesPress:function(){var e=this._oData;var t=[];for(var o=0;o<e.length;o++){var s=new Date;var i="PT"+s.getHours()+"H"+s.getMinutes()+"M"+s.getSeconds()+"S";var a={File:e[o].File,Count:e[o].Count,Date:e[o].Date,Time:e[o].Time,Approve:e[o].Approve,Deny:e[o].Deny,Notes:e[o].Notes,Pernr:"",Dateap:s,Timeap:i,Type:e[o].Type};t.push(a)}var n={File:"NSC_6_US_BOLA_653810_NS TRVL_20210408_171836.txt",Count:6,Date:"/Date(1617840000000)/",Time:"PT17H18M46S",Approve:false,Deny:false,Notes:"",Type:"BOLA",ReqToPostNav:t};var l=this.getView().getModel("fileListModel");var r=this;l.create("/FileReqSet",n,{success:function(){r.onReadTable()},error:function(){r.onReadTable()}})}})});
},
	"com/bolam/zptv_bolam_approval/fragments/approvalTable.fragment.xml":'<core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core"><Table inset="false" items="{ path: \'/\' }" id="idFileApprovalTable"><columns><Column width="18em"><Text text="File Name"/></Column><Column width="5em"><Text text="Records Count"/></Column><Column width="10em"><Text text="Date"/></Column><Column width="10em"><Text text="Time"/></Column><Column width="8em"><Text text="Approve"/></Column><Column width="5em"><Text text="Deny"/></Column><Column demandPopin="true"><Text text="Reason for Approval/Denial"/></Column></columns><items><ColumnListItem><cells><Text text="{File}"/><Text text="{Count}"/><Text text="{ path: \'Date\', type: \'sap.ui.model.odata.type.DateTime\', constraints : {displayFormat: \'Date\'} }"/><Text text="{ path: \'Time\', type: \'sap.ui.model.odata.type.Time\', formatOptions: { style: \'medium\' } }"/><RadioButton groupName="{File}" selected="{Approve}"/><RadioButton groupName="{File}" selected="{Deny}"/><Input value="{Notes}" type="{Text}" maxLength="100"/></cells></ColumnListItem></items></Table></core:FragmentDefinition>',
	"com/bolam/zptv_bolam_approval/i18n/i18n.properties":'title=CITI Travel BOLA/BOLM File Approval\nappTitle=CITI Travel BOLA/BOLM File Approval\nappDescription=CITI Travel BOLA/BOLM File Approval',
	"com/bolam/zptv_bolam_approval/localService/metadata.xml":'<edmx:Edmx xmlns:edmx="http://schemas.microsoft.com/ado/2007/06/edmx"\n\txmlns:m="http://schemas.microsoft.com/ado/2007/08/dataservices/metadata" xmlns:sap="http://www.sap.com/Protocols/SAPData" Version="1.0"><edmx:DataServices m:DataServiceVersion="2.0"><Schema xmlns="http://schemas.microsoft.com/ado/2008/09/edm" Namespace="ZPTV_BOLAM_LIMIT_SRV" xml:lang="en" sap:schema-version="1"><EntityType Name="FileReq" sap:content-version="1"><Key><PropertyRef Name="File"/></Key><Property Name="File" Type="Edm.String" Nullable="false" MaxLength="200" sap:unicode="false" sap:label="File Name" sap:creatable="false"\n\t\t\t\t\tsap:updatable="false" sap:sortable="false" sap:filterable="false"/><Property Name="Count" Type="Edm.Int32" Nullable="false" sap:unicode="false" sap:label="Number" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="Date" Type="Edm.DateTime" Nullable="false" Precision="7" sap:unicode="false" sap:label="Current Date" sap:creatable="false"\n\t\t\t\t\tsap:updatable="false" sap:sortable="false" sap:filterable="false"/><Property Name="Time" Type="Edm.Time" Nullable="false" Precision="0" sap:unicode="false" sap:label="Time" sap:creatable="false"\n\t\t\t\t\tsap:updatable="false" sap:sortable="false" sap:filterable="false"/><Property Name="Approve" Type="Edm.String" Nullable="false" MaxLength="1" sap:unicode="false" sap:label="Approve" sap:creatable="false"\n\t\t\t\t\tsap:updatable="false" sap:sortable="false" sap:filterable="false"/><Property Name="Deny" Type="Edm.String" Nullable="false" MaxLength="1" sap:unicode="false" sap:label="Deny" sap:creatable="false"\n\t\t\t\t\tsap:updatable="false" sap:sortable="false" sap:filterable="false"/><Property Name="Notes" Type="Edm.String" Nullable="false" MaxLength="100" sap:unicode="false" sap:label="Reason App/Den"\n\t\t\t\t\tsap:creatable="false" sap:updatable="false" sap:sortable="false" sap:filterable="false"/><Property Name="Type" Type="Edm.String" Nullable="false" MaxLength="4" sap:unicode="false" sap:label="Function Type" sap:creatable="false"\n\t\t\t\t\tsap:updatable="false" sap:sortable="false" sap:filterable="false"/><NavigationProperty Name="ReqToPostNav" Relationship="ZPTV_BOLAM_LIMIT_SRV.ReqToPost" FromRole="FromRole_ReqToPost"\n\t\t\t\t\tToRole="ToRole_ReqToPost"/></EntityType><EntityType Name="FilePost" sap:content-version="1"><Key><PropertyRef Name="File"/></Key><Property Name="File" Type="Edm.String" Nullable="false" MaxLength="200" sap:unicode="false" sap:label="File Name" sap:creatable="false"\n\t\t\t\t\tsap:updatable="false" sap:sortable="false" sap:filterable="false"/><Property Name="Count" Type="Edm.Int32" Nullable="false" sap:unicode="false" sap:label="Number" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:sortable="false" sap:filterable="false"/><Property Name="Date" Type="Edm.DateTime" Nullable="false" Precision="7" sap:unicode="false" sap:label="Current Date" sap:creatable="false"\n\t\t\t\t\tsap:updatable="false" sap:sortable="false" sap:filterable="false"/><Property Name="Time" Type="Edm.Time" Nullable="false" Precision="0" sap:unicode="false" sap:label="Time" sap:creatable="false"\n\t\t\t\t\tsap:updatable="false" sap:sortable="false" sap:filterable="false"/><Property Name="Approve" Type="Edm.String" Nullable="false" MaxLength="1" sap:unicode="false" sap:label="Approve" sap:creatable="false"\n\t\t\t\t\tsap:updatable="false" sap:sortable="false" sap:filterable="false"/><Property Name="Deny" Type="Edm.String" Nullable="false" MaxLength="1" sap:unicode="false" sap:label="Deny" sap:creatable="false"\n\t\t\t\t\tsap:updatable="false" sap:sortable="false" sap:filterable="false"/><Property Name="Notes" Type="Edm.String" Nullable="false" MaxLength="100" sap:unicode="false" sap:label="Reason App/Den"\n\t\t\t\t\tsap:creatable="false" sap:updatable="false" sap:sortable="false" sap:filterable="false"/><Property Name="Pernr" Type="Edm.String" Nullable="false" MaxLength="8" sap:unicode="false" sap:label="Personnel no." sap:creatable="false"\n\t\t\t\t\tsap:updatable="false" sap:sortable="false" sap:filterable="false"/><Property Name="Dateap" Type="Edm.DateTime" Nullable="false" Precision="7" sap:unicode="false" sap:label="Current Date"\n\t\t\t\t\tsap:creatable="false" sap:updatable="false" sap:sortable="false" sap:filterable="false"/><Property Name="Timeap" Type="Edm.Time" Nullable="false" Precision="0" sap:unicode="false" sap:label="Time" sap:creatable="false"\n\t\t\t\t\tsap:updatable="false" sap:sortable="false" sap:filterable="false"/><Property Name="Type" Type="Edm.String" Nullable="false" MaxLength="4" sap:unicode="false" sap:label="Function Type" sap:creatable="false"\n\t\t\t\t\tsap:updatable="false" sap:sortable="false" sap:filterable="false"/></EntityType><Association Name="ReqToPost" sap:content-version="1"><End Type="ZPTV_BOLAM_LIMIT_SRV.FileReq" Multiplicity="1" Role="FromRole_ReqToPost"/><End Type="ZPTV_BOLAM_LIMIT_SRV.FilePost" Multiplicity="*" Role="ToRole_ReqToPost"/><ReferentialConstraint><Principal Role="FromRole_ReqToPost"><PropertyRef Name="File"/></Principal><Dependent Role="ToRole_ReqToPost"><PropertyRef Name="File"/></Dependent></ReferentialConstraint></Association><EntityContainer Name="ZPTV_BOLAM_LIMIT_SRV_Entities" m:IsDefaultEntityContainer="true" sap:supported-formats="atom json xlsx"><EntitySet Name="FileReqSet" EntityType="ZPTV_BOLAM_LIMIT_SRV.FileReq" sap:creatable="false" sap:deletable="false" sap:pageable="false"\n\t\t\t\tsap:content-version="1"/><EntitySet Name="FilePostSet" EntityType="ZPTV_BOLAM_LIMIT_SRV.FilePost" sap:creatable="false" sap:updatable="false" sap:deletable="false"\n\t\t\t\tsap:pageable="false" sap:content-version="1"/><AssociationSet Name="ReqToPostSet" Association="ZPTV_BOLAM_LIMIT_SRV.ReqToPost" sap:creatable="false" sap:updatable="false"\n\t\t\t\t\tsap:deletable="false" sap:content-version="1"><End EntitySet="FileReqSet" Role="FromRole_ReqToPost"/><End EntitySet="FilePostSet" Role="ToRole_ReqToPost"/></AssociationSet></EntityContainer><atom:link xmlns:atom="http://www.w3.org/2005/Atom" rel="self" href="./sap/ZPTV_BOLAM_LIMIT_SRV/$metadata"/><atom:link xmlns:atom="http://www.w3.org/2005/Atom" rel="latest-version" href="./sap/ZPTV_BOLAM_LIMIT_SRV/$metadata"/></Schema></edmx:DataServices></edmx:Edmx>',
	"com/bolam/zptv_bolam_approval/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"com.bolam.zptv_bolam_approval","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","sourceTemplate":{"id":"servicecatalog.connectivityComponentForManifest","version":"0.0.0"},"dataSources":{"ZPTV_BOLAM_LIMIT_SRV":{"uri":"/sap/opu/odata/sap/ZPTV_BOLAM_LIMIT_SRV/","type":"OData","settings":{"localUri":"localService/metadata.xml"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":false,"rootView":{"viewName":"com.bolam.zptv_bolam_approval.view.ApprovalHome","type":"XML","async":true,"id":"ApprovalHome"},"dependencies":{"minUI5Version":"1.65.6","libs":{"sap.ui.layout":{},"sap.ui.core":{},"sap.m":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.bolam.zptv_bolam_approval.i18n.i18n"}},"fileListModel":{"type":"sap.ui.model.odata.v2.ODataModel","settings":{"defaultOperationMode":"Server","defaultBindingMode":"OneWay","defaultCountMode":"Request","useBatch":true},"dataSource":"ZPTV_BOLAM_LIMIT_SRV","preload":true},"oFileMainModelJSON":{"type":"sap.ui.model.json.JSONModel","settings":{},"preload":false}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"com.bolam.zptv_bolam_approval.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteApprovalHome","pattern":"RouteApprovalHome","target":["TargetApprovalHome"]}],"targets":{"TargetApprovalHome":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"ApprovalHome","viewName":"ApprovalHome"}}}},"sap.platform.abap":{"uri":"/sap/bc/ui5_ui5/sap/zptv_bolam_appr/webapp","_version":"1.1.0"}}',
	"com/bolam/zptv_bolam_approval/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"com/bolam/zptv_bolam_approval/serviceBinding.js":'function initModel(){var a="/sap/opu/odata/sap/ZPTV_BOLAM_LIMIT_SRV/";var e=new sap.ui.model.odata.ODataModel(a,true);sap.ui.getCore().setModel(e)}',
	"com/bolam/zptv_bolam_approval/view/ApprovalHome.view.xml":'<mvc:View controllerName="com.bolam.zptv_bolam_approval.controller.ApprovalHome" xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n\txmlns="sap.m" xmlns:core="sap.ui.core"><Shell id="shell"><App id="app"><pages><Page id="page" title="{i18n>title}"><content><core:Fragment fragmentName="com.bolam.zptv_bolam_approval.fragments.approvalTable" type="XML"/></content><footer><OverflowToolbar id="otbFooter"><ToolbarSpacer/><Button type="Accept" text="Submit" press="onFilesSubmitReq"><layoutData><OverflowToolbarLayoutData priority="NeverOverflow"/></layoutData></Button></OverflowToolbar></footer></Page></pages></App></Shell></mvc:View>'
}});