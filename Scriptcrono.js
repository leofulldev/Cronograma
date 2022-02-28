/* Autor leodevfull */
/* 27-02-2022 */


function guardar(){
   
    var _fec = document.getElementById("fec").value;
    var _act = document.getElementById("act").value;
    var _res = document.getElementById("res").value;
    var _lug = document.getElementById("lug").value;

    var fila="<tr><td>"+_fec+"</td><td>"+_act+"</td><td>"+_res+"</td><td>"+_lug+"</td></tr>";

    var btn = document.createElement("TR");
   	btn.innerHTML=fila;
    document.getElementById("tablecrono").appendChild(btn);
    _fec="";
    _act="";
    _res="";
    _lug="";

}

function sendpdf()
{
    var doc = new jsPDF();
    var specialElementHandlers = {
        '#editor': function (element, renderer) {
            return true;
        }
    };
    doc.fromHTML(document.getElementById('corazon'), 15, 15, {
        'width': 170,
            'elementHandlers': specialElementHandlers
    });
    doc.save('sample-file.pdf');
}
function enviarpdf() {
    var pdf = new jsPDF('p', 'pt', 'letter');
    
    // source can be HTML-formatted string, or a reference
    // to an actual DOM element from which the text will be scraped.

    source = $('#corazon')[0];

    // we support special element handlers. Register them with jQuery-style 
    // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
    // There is no support for any other type of selectors 
    // (class, of compound) at this time.
    specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        '#bypassme': function (element, renderer) {
            // true = "handled elsewhere, bypass text extraction"
            return true
        }
    };
    margins = {
        top: 80,
        bottom: 60,
        left: 40,
        width: 580
    };
    
        tamañoDiv();
       


    // all coords and widths are in jsPDF instance's declared units
    // 'inches' in this case
    pdf.addHTML(
       
    source, // HTML string or DOM elem ref.
    margins.left, // x coord
    margins.top, { // y coord
        'width': margins.width, // max width of content on PDF
        'elementHandlers': specialElementHandlers
        
    },
    
   

    function (dispose) {
        
    
        // dispose: object with X, Y of the last line add to the PDF 
        //          this allow the insertion of new lines after html
        pdf.save('Test.pdf');
    }, margins);
}
function ipdf(){
    var pdf = new jsPDF("p", "pt", "a4");
	pdf.addHTML($('#corazon'), 15, 15, function() {
	  pdf.save('div.pdf');
	});
}

function agregar() {
    var mise = document.getElementById("miSelect");
    var indices = mise.selectedIndex;
    var valor = mise.options[indices].text;
   
    
    var tab=document.getElementById("tablecrono");
   
    if(valor=="Enero"){
        document.getElementById("mes").innerText="Enero 2022";
    }
    
    else
    {
        var fil="<tr>"+valor+2022+"</tr>";
        var btn = document.createElement("TR");
        btn.innerHTML=fil;
        tab.appendChild(btn);
    }

}
function tamañoDiv(){
    var div = document.getElementById("corazon");
    var tb= document.getElementById("tbl");
    if (tb.heigth>div.heigth){
        div.heigth=tb.heigth;
    }
}
function limpiar(){
    document.getElementById("act").value="";
}
