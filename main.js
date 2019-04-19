function Style()                                                                                                        //Create style function
{
    var inputs = document.getElementsByClassName("button custom");                                                      //Find elements in classes 'button' & 'custom'
    for (var i = 0; i < inputs.length; i++) {                                                                           //Loop for styling custom buttons
        var id = inputs[i].id;                                                                                          //Find id for current button
        var css, csshover, TextColor;                                                                                   //Declare variables for custom css
        color = id.slice(6);                                                                                            //Slice the variables after button
        var BGcolor  = "#" + color;                                                                                     //Create background colour as variable
        document.getElementById(id).style.backgroundColor = BGcolor;                                                    //Set background colour
        var ColorDec = parseInt(color, 16);                                                                             //Convert hexcode to decimal for maths
        if(ColorDec <= 8388608)                                                                                         //Check if hue is dark
        {
            document.getElementById(id).style.color = "#FFFFFF";                                                        //Set text colour to white as tag argument
            TextColor = "#FFFFFF";                                                                                      //Set text colour to white as variable for css entry
        }
        if(ColorDec >= 8388608)                                                                                         //Check if hue is light 
        {
            document.getElementById(id).style.color = "#000000";                                                        //Set text colour to black as tag argument
            TextColor = "#000000";                                                                                      //Set text colour to black as variable for css entry
        }
        css = '#' + id + '{ background-color: ' + BGcolor + ' !important;'+ ' color: ' + TextColor +'!important;}';     //Create new css code as string
        var sheet = document.createElement('style');                                                                    //Create style tag
        sheet.innerHTML = css;                                                                                          //Write custom css to style tag
        document.head.appendChild(sheet);                                                                               //Nest style tag in <head> of document 
        csshover = '.active#' + id + ':hover { background-color: ' + TextColor + ' !important;'+ ' color: ' + BGcolor +'!important;}';  //Create new css code for :hover called .active
        var sheet = document.createElement('style');                                                                     //Create  a new style tag
        sheet.innerHTML = csshover;                                                                                      //Write custom css to new style tag
        document.head.appendChild(sheet);                                                                               //Nest new style tag after old style tag in <head> of document
    }
}
