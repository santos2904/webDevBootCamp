$("h1").text();
//"jQuery Methods Demo Page"

$("ul").text();
//"	Skittles M&Ms KitKat "

$("li").text();
//"SkittlesM&MsKitKat"

$("ul").html();
// " <li>Skittles</li> <li>M&amp;Ms</li> <li>KitKat</li>"

$("li:last").html("<a href='https://en.wikipedia.org/wiki/Android_Pie'>P</a>")
// redirects to google

$("img").css({
	width: "200px",
	height: "200px"
});

$("img:first-of-type").attr("src", "https://i.imgflip.com/1tkfx0.jpg");
$("img:last-of-type").attr("src", "https://i.pinimg.com/originals/d0/ce/f6/d0cef6569231e4cb71e4aa86bef250e5.jpg");

$("input").val("Santos Phone");

$("select").val();

$("h1").addClass("correct");

$("li:first-of-type").addClass("wrong");
$("li:last-of-type").addClass("wrong");
$("li:last-of-type").removeClass("wrong");

$("li:last").toggleClass("done");

