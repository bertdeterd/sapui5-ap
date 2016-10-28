jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
jQuery.sap.require("sap.ui.test.opaQunit");
jQuery.sap.require("sap.ui.test.Opa5");

jQuery.sap.require("nl.stedin.apps.somain.test.integration.pages.Common");
jQuery.sap.require("nl.stedin.apps.somain.test.integration.pages.App");
jQuery.sap.require("nl.stedin.apps.somain.test.integration.pages.Browser");
jQuery.sap.require("nl.stedin.apps.somain.test.integration.pages.Master");
jQuery.sap.require("nl.stedin.apps.somain.test.integration.pages.Detail");
jQuery.sap.require("nl.stedin.apps.somain.test.integration.pages.NotFound");

sap.ui.test.Opa5.extendConfig({
	arrangements: new nl.stedin.apps.somain.test.integration.pages.Common(),
	viewNamespace: "nl.stedin.apps.somain.view."
});

jQuery.sap.require("nl.stedin.apps.somain.test.integration.MasterJourney");
jQuery.sap.require("nl.stedin.apps.somain.test.integration.NavigationJourney");
jQuery.sap.require("nl.stedin.apps.somain.test.integration.NotFoundJourney");
jQuery.sap.require("nl.stedin.apps.somain.test.integration.BusyJourney");
jQuery.sap.require("nl.stedin.apps.somain.test.integration.FLPIntegrationJourney");