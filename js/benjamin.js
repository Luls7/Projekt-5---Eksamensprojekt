
var day = new Date();
var hr = day.getHours();
if (hr >= 0 && hr < 9) {
    document.write("Hej Anna! Godmorgen!");
} else if (hr == 12) {
    document.write("Hej Anna! Godeftermiddag!");
} else if (hr >= 12 && hr <= 20) {
    document.write("Good Afternoon!");
} else {
    document.write("Hej Anna! God Aften!");
}
document.write("</font></center>");
