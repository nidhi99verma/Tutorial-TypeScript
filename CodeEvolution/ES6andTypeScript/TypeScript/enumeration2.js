"use strict";
var Colors;
(function (Colors) {
    Colors[Colors["red"] = 1] = "red";
    Colors[Colors["yellow"] = 4] = "yellow";
    Colors[Colors["green"] = 6] = "green";
})(Colors || (Colors = {}));
;
var MyColor1 = Colors.green;
var MyColor2 = Colors.red;
console.log(MyColor1);
console.log(MyColor2);
console.log(Colors[MyColor2]);
