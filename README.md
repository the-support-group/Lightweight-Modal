Lightweight-Modal
=================

A lightweight jQuery plugin modal box.

# Usage

* Install the plugin via Bower:

Include the following line in the "dependencies" section of your bower.json file:

    "tsg-lightweight-modal": "0.0.*"

* If you are using RequireJS simply include the plugin as a dependency:

define(['tsgmodal'], function() {

    // Your code goes here...

});

* Creating a Modal from an existing DOM element:

    // Initialise the modal
    var modal = new $.tsgModal([DOM Element]);

* Showing and hiding the modal:

    var modal = new $.tsgModal([DOM Element]);

    // Show the modal.
    modal.open();

    // Hide the modal
    modal.close();

* Settings/events:

    All settings have a default value (as shown below).

    // Initialise the modal
    var modal = new $.tsgModal(
        [DOM Element],
        {
            // Settings
            top: 100,                   // Position from top of window.
            overlayOpacity: 0.2,        // The opacity of the overlay.
            overlayId: 'ef_overlay',    // The ID of the overlay element.

            // Events
            onClosed: function() {}     // Fired when the modal is closed.
        }
    );
