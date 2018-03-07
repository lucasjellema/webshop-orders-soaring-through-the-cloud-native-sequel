/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your application specific code will go here
 */
define(['ojs/ojcore', 'knockout', 'ojs/ojrouter', 'ojs/ojknockout', 'ojs/ojarraytabledatasource', 'ojs/ojmenu'],
  function(oj, ko) {
     function ControllerViewModel() {
       var self = this;
            // this function will communicate an event with the parent window
            // typically used for applications that run inside an IFRAME to inform the
            // embedding application about what is going on.      
            self.callParent = function (message) {
              console.log('send message from Orders UI to parent window');
              // here we can restrict which parent page can receive our message
              // by specifying the origin that this page should have
              var targetOrigin = '*';
              parent.postMessage(message, targetOrigin);

          }
          self.callParent({"childHasLoaded":true})

      // Media queries for repsonsive layouts
      var smQuery = oj.ResponsiveUtils.getFrameworkQuery(oj.ResponsiveUtils.FRAMEWORK_QUERY_KEY.SM_ONLY);
      self.smScreen = oj.ResponsiveKnockoutUtils.createMediaQueryObservable(smQuery);
      // Router setup
      self.router = oj.Router.rootInstance;
      self.router.configure({
        'basket': { label: 'Shopping Basket', isDefault: true },
        'orders': { label: 'Order History' }});
      oj.Router.defaults['urlAdapter'] = new oj.Router.urlParamAdapter();

      // Navigation setup
      var navData = [
        {
          name: 'Shopping Basket', id: 'basket', loggedInOnly: false,
          iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-chart-icon-24'
        },
        {
          name: 'Order Status & History', id: 'orders', loggedInOnly: true,
          iconClass: 'oj-navigationlist-item-icon demo-icon-font-24 demo-download-icon-24'
        }

      ];
      self.navDataSource = new oj.ArrayTableDataSource(navData, { idAttribute: 'id' });



      // Header
      // Application Name used in Branding Area
      self.appName = ko.observable("Orders");

     }

     return new ControllerViewModel();
  }
);
