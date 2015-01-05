/**
 * The Support Group Lightweight Modal jQuery plugin.
 *
 * @version 0.0.5
 * @link https://github.com/the-support-group/Lightweight-Modal
 */
(function($) {

    // Attach plugin to jQuery namespace.
    $.tsgModal = function(el, options) {

        /**
         * The plugin default settings
         *
         * @type {{top: number, overlayOpacity: number, overlayId: string, onClosed: Function}}
         */
        var defaults = {
            top: 100,
            overlayOpacity: 0.2,
            overlayId: 'ef_overlay',

            // Events
            onClosed: function() {}
        };


        // To avoid confusion we use plugin to provide a consistent reference.
        var plugin = this;


        // This will hold the defaults merged with options provided by the user.
        plugin.settings = {};


        /**
         * The modal constructor
         */
        var init = function() {
            // Merge the default and user settings.
            plugin.settings = $.extend({}, defaults, options);

            // Make the collection of elements available to the plugin.
            plugin.el = el;

            // Initialise the overlay
            var overlay = $("<div id='" + plugin.settings.overlayId + "'></div>");
            $("body").append(overlay);

            // Close the modal when the overlay is clicked.
            overlay.click(function() {
                plugin.close();
            });

            // Close the modal when the escape key is pressed.
            $(document).keyup(function(e) {
                if (e.keyCode === 27) {
                    plugin.close();
                }
            });
        };


        /**
         * Public methods.
         * ===============
         */


        /**
         * Open the modal dialog.
         */
        plugin.open = function()
        {
            var modal_width = plugin.el.outerWidth();

            // Show the background overlay.
            showOverlay();

            plugin.el.css({
                'display': 'block',
                'position': 'absolute',
                'opacity': 0,
                'z-index': 11000,
                'left': 50 + '%',
                'margin-left': -(modal_width / 2) + "px",
                'top': plugin.settings.top + "px"
            });

            plugin.el.fadeTo(200, 1);
        };


        /**
         * Close the modal dialog.
         */
        plugin.close = function()
        {
            $('#' + plugin.settings.overlayId).fadeOut(200);
            plugin.el.css({'display': 'none'});

            // Fire the onClosed event
            plugin.settings.onClosed();
        };


        /**
         * Hide the modal, the overlay is not affected.
         * This allows other elements to temporarily replace the modal.
         */
        plugin.hide = function()
        {
            plugin.el.hide();
        };


        /**
         * Show the hidden modal.
         */
        plugin.show = function()
        {
            plugin.el.show();
        };


        /**
         * Private methods.
         * ================
         */


        /**
         * Show the overlay beneath the modal.
         */
        var showOverlay = function() {
            var overlay = $('#' + plugin.settings.overlayId);

            overlay.css({
                'position': 'fixed',
                'top': 0,
                'left': 0,
                'width': '100%',
                'height': '100%',
                'display': 'block',
                'background-color': 'black',
                'opacity': 0
            });

            overlay.fadeTo(200, plugin.settings.overlayOpacity);
        };


        // Call the "constructor" method
        init();
    }

})(jQuery);
