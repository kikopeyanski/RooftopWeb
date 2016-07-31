 var images = ["Resources/house-roof.jpg", "Resources/roofEx.jpg"];
    $(function () {
        var i = 0;
        $("#toGray").css("background-image", "url(" + images[i] + ")");
        setInterval(function () {
            i++;
            if (i == images.length) {
                i = 0;
            }
            $("#toGray").fadeOut("fast", function () {
                $(this).css("background-image", "url(" + images[i] + ")");
                $(this).fadeIn("fast");
            });
        }, 1000);
    });