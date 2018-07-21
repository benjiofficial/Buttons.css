
function Style()
{
    var inputs = document.getElementsByClassName("button custom");
    for (var i = 0; i < inputs.length; i++) {
        var id = inputs[i].id;
        var css, csshover, TextColor;
        color = id.slice(6);
        var BGcolor  = "#" + color;
        document.getElementById(id).style.backgroundColor = BGcolor;
        var ColorDec = parseInt(color, 16);
        if(ColorDec <= 8388608)
        {
            document.getElementById(id).style.color = "#FFFFFF";
            TextColor = "#FFFFFF";
        }
        if(ColorDec >= 8388608)
        {
            document.getElementById(id).style.color = "#000000";
            TextColor = "#000000";
        }
        css = '#' + id + '{ background-color: ' + BGcolor + ' !important;'+ ' color: ' + TextColor +'!important;}'; 
        var sheet = document.createElement('style')
        sheet.innerHTML = css;
        document.head.appendChild(sheet);
        csshover = '#' + id + ':hover { background-color: ' + TextColor + ' !important;'+ ' color: ' + BGcolor +'!important;}'; 
        var sheet = document.createElement('style')
        sheet.innerHTML = csshover;
        document.head.appendChild(sheet);
    }
}
