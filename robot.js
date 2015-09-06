(function (ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    ext._getStatus = function() {
        return { status:2, msg:'Ready' };
    };

    ext.leftWheelOn = function(direction) {
		console.log("leftWheelOn",direction);
        /*
         * $.ajax({
            type: "GET",
            url: cmdUrl,
            //dataType: "jsonp", // hack for the not origin problem - replace with CORS based solution
            success: function(data) {
                console.log("setCircle success");
            },
            error: function(jqxhr, textStatus, error) { // have to change this coz jasonp parse error
                console.log("Error setCircle: ", error);
            }
        }); // nb: GET is including the javascript callback. Do I need this for one-way call?
        
         */
    };


    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            [" ", "Turn Left Wheel on %m.direction", "leftWheelOn", "forward"],
        ],
        menus: {
            direction: ['forward', 'reverse']
        }
    };

    // Register the extension
    ScratchExtensions.register('MCPI-Scratch', descriptor, ext);

})({});