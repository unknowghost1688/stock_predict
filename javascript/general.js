/*---------------------------------------------------------------------------------------------------/
	Script	: /javascript/general.js
	Usage	: general function
	Author	: 24/12/2009 BS
/---------------------------------------------------------------------------------------------------*/
ia=document;ih=true;ii=false;ij=parseInt;iz=eval;

function GetXmlHttpObject(){
	var xmlHttp=null;
	try{
	   // Firefox, Opera 8.0+, Safari
		 xmlHttp=new XMLHttpRequest();
	}catch (e){
	   // Internet Explorer
	 	try{
	   	 	xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
	 	}catch(e){
	   	 	xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
	   }
	}
	return xmlHttp;
}

function _id(obj){
    return ia.getElementById(obj);
}
	
function _name(obj){
    return ia.getElementsByName(obj);
}
	
function htmlfuc(el, html){
    var oldEl =typeof el === "string" ? _id(el) : el;
   
    var newEl =oldEl.cloneNode(ii);
    newEl.innerHTML =html;
    oldEl.parentNode.replaceChild(newEl, oldEl);
}

function replaceHtml(el, html, cler) {
    cler ? htmlfuc(el, "") : '';
    htmlfuc(el, html);
}

function funSetValue(name,val){
    _id(name).value=val;
}

function hidControl(name){
    _id(name).style.display="none";
}

function showControl(name){
    _id(name).style.display="";
}

function removeContorl(control){
    _id(control).parentNode.removeChild(_id(control));
}		
	
function in_array(needle, haystack, strict){
    var found =ii, key, strict =!!strict;
	 
    for (key in haystack) {
        if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
            found =ih;
            break;
        }
    }
    return found;
}
	
function remove_object_key(i,arr){
    var temparr =new Object();
    for(var j in arr){
        (j != i) ? temparr[j] =arr[j] : '';
    }
		
    return temparr;
}
	
function remove_array_key(i,arr){
    var temparr =[];
	var count =0;
	for(var j in arr){
		(arr[j] != i) ? temparr[count] =arr[j] : '';
		if(arr[j] != i){
			count =count+1;
		}
    }
	return temparr;
}

function moveControl(parentControl,pointControl)	{
    g_RMenu =_id(parentControl);
    g_RadialDragObj =new dragObject(parentControl,pointControl);
}

function convert_string(message){
    message=message.replace(/\&\#(\d+?);/g,toUnicode);
    return unescape(message);
}

function secure_responseText(str){
	str = str.split("<start>");
	return str[1];
}
function numericInput(evt){
	var charCode = (evt.which) ? evt.which : event.keyCode
	if(charCode == 46 || (charCode >= 48 && charCode <=57)){
		return true;
	}
	return false;
}

function number_format( number, decimals, dec_point, thousands_sep ) {    
    var n = number, c = isNaN(decimals = Math.abs(decimals)) ? 0 : decimals;    
	var d = dec_point == undefined ? "." : dec_point;   
	var t = thousands_sep == undefined ? "," : thousands_sep, s = n < 0 ? "-" : "";    
	var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "", j = (j = i.length) > 3 ? j % 3 : 0;     
	return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
}

function draw_upline_selectlist(content){
	var first_undefined = false;
	var data = content.split('&&');
	var lang = data[0].split('#');//lang[2] = selected
	var column = data[1].split('@@@');
	var str = [];
	str.push('<table cellspacing=1 class="editor" width:100px;>');
	str.push('<tr id="editor_move" class="move"><th class="tdR"><img style="cursor:hand;" src="../images/close.jpg" onclick=replaceHtml(\"editor\",\"\",ih)></th></tr>');
	str.push('<tr><td>');
	str.push('<select id="id_select_upline" name="fr_select_upline" style="width:182px" onchange=select_upline("1")>');		
	if(data.length>0){
		str.push('<option value="">-'+lang[0]+'-</option>');
		for(var field in column){
			if(first_undefined==false){
				first_undefined = true;
				continue;
			}
			var value = column[field].split('%%');
			var selected = (value[0]==lang[2])?'selected':'';		
			str.push('<option value="'+value[0]+'" '+selected+'>'+value[0]+'&nbsp;'+value[1]+'</option>');
		}
	}else{
		str.push('<option value="">'+lang[1]+'</option>');	
	}	
	str.push('</select></td></tr></table>');	
	return str.join('');
}