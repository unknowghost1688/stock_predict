	function submit_action(act,txt_search){
		var actionFile="result-action";
		var adds ="";
		if(act=="select"){
			adds="";
		}else if(act=="search_data"){
			adds="&txt_search="+txt_search;
		}
		
		var params = "act="+act+adds;
		
		xmlHttp=GetXmlHttpObject()
		if (xmlHttp==null){
			alert (langs['YOUR_BROWSER_DOES_NOT_SUPPORT_AJAX']);
			return;
		}
		var url= actionFile+".php";
		url=url+"?sid="+Math.random();
		if(act == "select"){
			xmlHttp.onreadystatechange=stateChanged;
		}else if(act == "search_data"){
			xmlHttp.onreadystatechange=stateChanged;
		}
		
		xmlHttp.open("POST",url,true);
		//xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded", "charset=UTF-8");
		xmlHttp.setRequestHeader("Content-length", params.length);
		xmlHttp.setRequestHeader("Connection", "close");
		xmlHttp.send(params);
	}
	
	function stateChanged(){ 
		if (xmlHttp.readyState==4){ 
			data = xmlHttp.responseText;
			data_array = data.split("^");
			data_return = eval("("+data_array[1]+")");
			if(data_return['errMsg'] != undefined){	
				var str1 = [];		
				str1.push('');
				if(data_return['stock_name'] != undefined){
					var i=0;
					while(i < data_return['stock_name'].length){
						var stock_name = data_return['stock_name'][i];
						str1.push('<table class="result_table" cellspacing="1" cellpadding="0" border="1" id="result_table">');
						str1.push('<tr id="tr_'+stock_name+'">');
						str1.push('<th nowrap id="th_'+stock_name+'_desc" >Stock name: </th>');
						str1.push('<th nowrap id="th_'+stock_name+'">'+stock_name+'</th>');
						str1.push('</tr>');
						
						str1.push('<tr id="tr_'+stock_name+'_seven">');
						str1.push('<th nowrap id="th_'+stock_name+'_seven_desc" colspan=2> &nbsp&nbsp 7 days result &nbsp&nbsp </th>');
						str1.push('</tr>');
						str1.push('<tr id="tr_'+stock_name+'_seven">');
						str1.push('<td nowrap id="td_'+stock_name+'_seven_1_desc" > &nbsp&nbsp Less than -5.555555 percentages &nbsp&nbsp </td>');
						str1.push('<td nowrap id="td_'+stock_name+'_seven_1" > &nbsp&nbsp '+data_return['percentage_increasing_seven_day_1'][i]+' &nbsp&nbsp </td>');
						str1.push('</tr>');
						str1.push('<tr id="tr_'+stock_name+'_seven">');
						str1.push('<td nowrap id="td_'+stock_name+'_seven_2_desc" > &nbsp&nbsp In between -5.555555 and -0.7462686 percentages &nbsp&nbsp </td>');
						str1.push('<td nowrap id="td_'+stock_name+'_seven_2" > &nbsp&nbsp '+data_return['percentage_increasing_seven_day_2'][i]+' &nbsp&nbsp </td>');
						str1.push('</tr>');
						str1.push('<tr id="tr_'+stock_name+'_seven">');
						str1.push('<td nowrap id="td_'+stock_name+'_seven_3_desc" > &nbsp&nbsp In between -0.7462686 and 4.93421 percentages &nbsp&nbsp </td>');
						str1.push('<td nowrap id="td_'+stock_name+'_seven_3" > &nbsp&nbsp '+data_return['percentage_increasing_seven_day_3'][i]+' &nbsp&nbsp </td>');
						str1.push('</tr>');
						str1.push('<tr id="tr_'+stock_name+'_seven">');
						str1.push('<td nowrap id="td_'+stock_name+'_seven_4_desc" > &nbsp&nbsp More than 4.93421 percentages</td>');
						str1.push('<td nowrap id="td_'+stock_name+'_seven_4" > &nbsp&nbsp '+data_return['percentage_increasing_seven_day_4'][i]+'</td>');
						str1.push('</tr>');
						
						str1.push('<tr id="tr_'+stock_name+'_fourteen">');
						str1.push('<th nowrap id="th_'+stock_name+'_fourteen_desc" colspan=2> &nbsp&nbsp 14 days result &nbsp&nbsp </th>');
						str1.push('</tr>');
						str1.push('<tr id="tr_'+stock_name+'_fourteen">');
						str1.push('<td nowrap id="td_'+stock_name+'_fourteen_1_desc" > &nbsp&nbsp Less than -7.8125 percentages &nbsp&nbsp </td>');
						str1.push('<td nowrap id="td_'+stock_name+'_fourteen_1" > &nbsp&nbsp '+data_return['percentage_increasing_fourteen_day_1'][i]+' &nbsp&nbsp </td>');
						str1.push('</tr>');
						str1.push('<tr id="tr_'+stock_name+'_fourteen">');
						str1.push('<td nowrap id="td_'+stock_name+'_fourteen_2_desc" > &nbsp&nbsp In between -7.8125 and -1.048951 percentages &nbsp&nbsp </td>');
						str1.push('<td nowrap id="td_'+stock_name+'_fourteen_2" > &nbsp&nbsp '+data_return['percentage_increasing_fourteen_day_2'][i]+' &nbsp&nbsp </td>');
						str1.push('</tr>');
						str1.push('<tr id="tr_'+stock_name+'_fourteen">');
						str1.push('<td nowrap id="td_'+stock_name+'_fourteen_3_desc" > &nbsp&nbsp In between -1.048951 and 6.666667 percentages &nbsp&nbsp </td>');
						str1.push('<td nowrap id="td_'+stock_name+'_fourteen_3" > &nbsp&nbsp '+data_return['percentage_increasing_fourteen_day_3'][i]+' &nbsp&nbsp </td>');
						str1.push('</tr>');
						str1.push('<tr id="tr_'+stock_name+'_fourteen">');
						str1.push('<td nowrap id="td_'+stock_name+'_fourteen_4_desc" > &nbsp&nbsp More than 6.666667 percentages &nbsp&nbsp </td>');
						str1.push('<td nowrap id="td_'+stock_name+'_fourteen_4" > &nbsp&nbsp '+data_return['percentage_increasing_fourteen_day_4'][i]+' &nbsp&nbsp </td>');
						str1.push('</tr>');
						
						str1.push('<tr id="tr_'+stock_name+'_twenty_one">');
						str1.push('<th nowrap id="th_'+stock_name+'_twenty_one_desc" colspan=2> &nbsp&nbsp 21 days result &nbsp&nbsp </th>');
						str1.push('</tr>');
						str1.push('<tr id="tr_'+stock_name+'_twenty_one">');
						str1.push('<td nowrap id="td_'+stock_name+'_twenty_one_1_desc" > &nbsp&nbsp Less than -9.38248 percentages &nbsp&nbsp </td>');
						str1.push('<td nowrap id="td_'+stock_name+'_twenty_one_1" > &nbsp&nbsp '+data_return['percentage_increasing_twenty_one_day_1'][i]+' &nbsp&nbsp </td>');
						str1.push('</tr>');
						str1.push('<tr id="tr_'+stock_name+'_twenty_one">');
						str1.push('<td nowrap id="td_'+stock_name+'_twenty_one_2_desc" > &nbsp&nbsp In between -9.38248 and -1.376147 percentages &nbsp&nbsp </td>');
						str1.push('<td nowrap id="td_'+stock_name+'_twenty_one_2" > &nbsp&nbsp '+data_return['percentage_increasing_twenty_one_day_2'][i]+' &nbsp&nbsp </td>');
						str1.push('</tr>');
						str1.push('<tr id="tr_'+stock_name+'_twenty_one">');
						str1.push('<td nowrap id="td_'+stock_name+'_twenty_one_3_desc" > &nbsp&nbsp In between -1.376147 and 7.869742 percentages &nbsp&nbsp </td>');
						str1.push('<td nowrap id="td_'+stock_name+'_twenty_one_3" > &nbsp&nbsp '+data_return['percentage_increasing_twenty_one_day_3'][i]+' &nbsp&nbsp </td>');
						str1.push('</tr>');
						str1.push('<tr id="tr_'+stock_name+'_twenty_one">');
						str1.push('<td nowrap id="td_'+stock_name+'_twenty_one_4_desc" > &nbsp&nbsp More than 7.869742 percentages &nbsp&nbsp </td>');
						str1.push('<td nowrap id="td_'+stock_name+'_twenty_one_4" > &nbsp&nbsp '+data_return['percentage_increasing_twenty_one_day_4'][i]+' &nbsp&nbsp </td>');
						str1.push('</tr>');
						str1.push('<table cellspacing="1" cellpadding="0" border="0" id="result_table">');
						str1.push('<br /><br />');
						i++;
					}
				}else{
					str1.push('<table class="result_table" cellspacing="1" cellpadding="0" border="1" id="result_table">');
					str1.push('<tr id="tr_'+stock_name+'_no_records">');
					str1.push('<th nowrap id="th_'+stock_name+'_no_records_desc" colspan=2> &nbsp&nbsp No record exist &nbsp&nbsp </th>');
					str1.push('</tr>');
					str1.push('<table cellspacing="1" cellpadding="0" border="0" id="result_table">');
				}
				return_data = str1.join("");
				replaceHtml('table_list',return_data,ih);
			}else{
				alert('Error Occur');
			}
		}
	}
	
	function search_stock(){
		var txt_search = document.getElementById('txt_search').value;
		if(txt_search != ''){
			submit_action('search_data',txt_search);
		}
	}
	
	function show_all(){
		submit_action('select');
	}