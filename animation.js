var images = ["Resources/house-roof.jpg", "Resources/workplace.jpg"],
    $main = $("#main"),
    $secondary = $("#secondary"),
    sources = [$main, $secondary];
colors = ["red", "green"]

$(function () {
    var i = 0;
    setInterval(function () {
        sources[i].replaceWith(function () {
            sources[i].css("display", "none");
            i++;
            if (i == sources.length) {
                i = 0;
            }
            $("#homepage-box").css("background-image", "url(" + images[i] + ")");
            sources[i].css("display", "block");
            return sources[i];
        })

        $(".button").css("background-color", colors[i]);
        $(".button").css("border-color", colors[i]);
    }, 5000);
});