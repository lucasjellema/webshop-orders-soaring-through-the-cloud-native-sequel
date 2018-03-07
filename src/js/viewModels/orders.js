define(
    ['ojs/ojcore', 'knockout', 'jquery', 'ojs/ojlistview', 'ojs/ojarraydataprovider'
    ],
    function (oj, ko, $) {
        'use strict';
        function BasketModel() {
            var self = this;
            self.username = ko.observable("");
            self.init = function () {
                // listener for events posted on the window;
                // used for applications running insidean IFRAME to receive events from the
                // embedding application
                window.addEventListener("message", function (event) {
                  console.log("Received message from embedding application " + event);
                  console.log("Payload =  " + JSON.stringify(event.data));
                  if (event.data.eventType =="globalContext") {
                      var un = event.data.payload.globalContext.userName;
                      self.username(un)
                  }
                },
                  false);
              }
              $(document).ready(function () { self.init(); })

        }

        return new BasketModel();
    }
);
