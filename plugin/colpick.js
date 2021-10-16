function validate(str, id) {
    if(str.includes("#")){
        document.getElementById(id).classList.add("error");
        return false;
    }else{
        document.getElementById(id).classList.remove("error");
        return true;
    }
}
function setColor(fromId, toId, toInput = 0) {
    var fromObject = document.getElementById(fromId).value;
    if(toInput){
        fromObject = fromObject.substring(1);
        var toObject = document.getElementById(toId);
        toObject.value = fromObject;
    }else{
        if(validate(fromObject, fromId)){
            var toObject = document.getElementById(toId);
            toObject.value = '#'.concat(fromObject);
        }
    }
}
function LightenDarkenColor(col, amt) {
    var usePound = false;
    if (col[0] == "#") {
        col = col.slice(1);
        usePound = true;
    }
    var num = parseInt(col,16);
    var r = (num >> 16) + amt;
    if (r > 255) r = 255;
    else if  (r < 0) r = 0;
    var b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255) b = 255;
    else if  (b < 0) b = 0;
    var g = (num & 0x0000FF) + amt;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;
    return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}
function setTheme(color) {
    var input = document.querySelector("#accent-input");
    var picker = document.querySelector("#accent-picker");
    input.value = color;
    picker.value = '#'.concat(color);
    var secColor = LightenDarkenColor('#'.concat(color), -30);
    var secInput = document.querySelector("#sec-input");
    var secPicker = document.querySelector("#sec-picker");
    secInput.value = secColor.substring(1);
    secPicker.value = secColor;
}