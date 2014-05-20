	
	var localCache = {
		data: {},
		remove: function (url) {
			//delete localCache.data[url];
		},
		exist: function (url) {
			return localCache.data.hasOwnProperty(url) && localCache.data[url] !== null;
		},
		get: function (url) {
			console.log('Getting in cache for url' + url);
			return localCache.data[url];
		},
		set: function (url, cachedData, callback) {
			localCache.remove(url);
			localCache.data[url] = cachedData;
			if ($.isFunction(callback)) callback(cachedData);
		}
	};

	function search_stock(){
		var txt_search = $('#txt_search').val();
		if(txt_search != ''){
			$("#input_div").html('Loading ...');
			var url = "http://keju-design.com/stock_prediction/result-action.php";
			$. ajax ({
				type: "POST",
				url: url,
				data: {
					act: 'search_data',
					search_value: txt_search
				},
				
				cache: true,
				beforeSend: function () {
					if (localCache.exist(url)) {
						doSomething(localCache.get(url));
						return false;
					}
					return true;
				},
				
				success: function (data) {
					var input_btn = [];
					input_btn.push('<input type="text" class="form-control" placeholder="Search" id="txt_search" name="txt_search" onKeyPress="return checkSubmit_search(event)">');
					input_btn.push('<div class="input-group-btn" id="div_btn" name="div_btn">');
					input_btn.push('<button class="btn btn-default" type="button" onclick="search_stock()" id="btn_search_stock" name="btn_search_stock" >search</button>');
					input_btn.push('<button class="btn btn-default" type="button" onclick="show_all()" id="btn_show_all" name="btn_show_all" >show all</button>');
					input_btn.push('</div>');
					input_btn.push('<div class="fb-share-button" data-href="http://keju-design.com/stock_prediction/result_html5.php" data-type="icon"></div>');
			
					var return_data_input_btn = input_btn.join("");
					$("#input_div").html(return_data_input_btn);
					
					data_array = data.split("^");
					data_return = eval("("+data_array[1]+")");
					if(data_return['errMsg'] == "file_exists"){	
						
						$("#table_list").empty();
						var i=0;
						
						while(i < data_return['stock_name'].length){
							var stock_name 								= data_return['stock_name'][i];
							var percentage_increasing_seven_day 		= data_return['percentage_increasing_seven_day'][i];
							var percentage_increasing_fourteen_day 		= data_return['percentage_increasing_fourteen_day'][i];
							var percentage_increasing_twenty_one_day 	= data_return['percentage_increasing_twenty_one_day'][i];
							var str1 = [];	
								
							str1.push('');
							str1.push('<div class="col-lg-10">');
							str1.push('<table class="table table-striped">');
							str1.push('<tr id="tr_'+stock_name+'">');
							str1.push('<th nowrap id="th_'+stock_name+'_desc" > &nbsp&nbsp Stock name: &nbsp&nbsp');
							str1.push('&nbsp&nbsp '+stock_name+' &nbsp&nbsp </th>');
							str1.push('</tr>');
							
							str1.push('<tr id="tr_'+stock_name+'_seven">');
							str1.push('<td nowrap id="th_'+stock_name+'_seven_desc"> <b> &nbsp&nbsp 7th days closing price </b> &nbsp&nbsp&nbsp&nbsp');
							str1.push('&nbsp&nbsp '+percentage_increasing_seven_day+' &nbsp&nbsp </td>');
							str1.push('</tr>');
							
							str1.push('<tr id="tr_'+stock_name+'_fourteen">');
							str1.push('<td nowrap id="th_'+stock_name+'_fourteen_desc"> <b> &nbsp&nbsp 14th days closing price </b> &nbsp&nbsp');
							str1.push('&nbsp&nbsp '+percentage_increasing_fourteen_day+' &nbsp&nbsp </td>');
							str1.push('</tr>');
							
							str1.push('<tr id="tr_'+stock_name+'_twenty_one">');
							str1.push('<td nowrap id="th_'+stock_name+'_twenty_one_desc"> <b> &nbsp&nbsp 21th days closing price </b> &nbsp&nbsp');
							str1.push('&nbsp&nbsp '+percentage_increasing_twenty_one_day+' &nbsp&nbsp </td>');
							str1.push('</tr>');
							
							str1.push('</table>');
							str1.push('<br/><br/>');
							str1.push('</div><!-- /.col-lg-5 -->');
							
							var return_data = str1.join("");
							$("#table_list").append(return_data);
							i++;
						}
						
					}else{
						alert('Error Occur');
					}
					
				}
			});
		}
	}
	
	function show_all(){
		$("#input_div").html('Loading ...');
		$('#txt_search').val('');
		//var url = "http://keju-design.com/stock_prediction/result-action.php";
		var url = "http://keju-design.com/stock_prediction/result-action.php";
		$. ajax ({
			type: "POST",
			url: url,
			crossDomain:'true',
			data: {
                act: 'select'
            },
			
            cache: true,
            beforeSend: function () {
                if (localCache.exist(url)) {
                    doSomething(localCache.get(url));
                    return false;
                }
                return true;
            },
			
			success: function (data) {
				var input_btn = [];
				input_btn.push('<input type="text" class="form-control" placeholder="Search" id="txt_search" name="txt_search" onKeyPress="return checkSubmit_search(event)">');
				input_btn.push('<div class="input-group-btn" id="div_btn" name="div_btn">');
				input_btn.push('<button class="btn btn-default" type="button" onclick="search_stock()" id="btn_search_stock" name="btn_search_stock" >search</button>');
				input_btn.push('<button class="btn btn-default" type="button" onclick="show_all()" id="btn_show_all" name="btn_show_all" >show all</button>');
				input_btn.push('</div>');
				input_btn.push('<div class="fb-share-button" data-href="http://keju-design.com/stock_prediction/result_html5.php" data-type="icon"></div>');
		
				var return_data_input_btn = input_btn.join("");
				$("#input_div").html(return_data_input_btn);
				
				data_array = data.split("^");
				data_return = eval("("+data_array[1]+")");
				
				if(data_return['errMsg'] == "file_exists"){	
					
					$("#table_list").empty();
					var i=0;
					
					while(i < data_return['stock_name'].length){
						var stock_name 								= data_return['stock_name'][i];
						var percentage_increasing_seven_day 		= data_return['percentage_increasing_seven_day'][i];
						var percentage_increasing_fourteen_day 		= data_return['percentage_increasing_fourteen_day'][i];
						var percentage_increasing_twenty_one_day 	= data_return['percentage_increasing_twenty_one_day'][i];
						var str1 = [];	
					
						str1.push('');
						str1.push('<div class="col-lg-10">');
						str1.push('<table class="table table-striped">');
						str1.push('<tr id="tr_'+stock_name+'">');
						str1.push('<th nowrap id="th_'+stock_name+'_desc" > &nbsp&nbsp Stock name: &nbsp&nbsp');
						str1.push('&nbsp&nbsp '+stock_name+' &nbsp&nbsp </th>');
						str1.push('</tr>');
						
						str1.push('<tr id="tr_'+stock_name+'_seven">');
						str1.push('<td nowrap id="th_'+stock_name+'_seven_desc"> <b> &nbsp&nbsp 7th days closing price </b> &nbsp&nbsp&nbsp&nbsp');
						str1.push('&nbsp&nbsp '+percentage_increasing_seven_day+' &nbsp&nbsp </td>');
						str1.push('</tr>');
						
						str1.push('<tr id="tr_'+stock_name+'_fourteen">');
						str1.push('<td nowrap id="th_'+stock_name+'_fourteen_desc"> <b> &nbsp&nbsp 14th days closing price </b> &nbsp&nbsp');
						str1.push('&nbsp&nbsp '+percentage_increasing_fourteen_day+' &nbsp&nbsp </td>');
						str1.push('</tr>');
						
						str1.push('<tr id="tr_'+stock_name+'_twenty_one">');
						str1.push('<td nowrap id="th_'+stock_name+'_twenty_one_desc"> <b> &nbsp&nbsp 21th days closing price </b> &nbsp&nbsp');
						str1.push('&nbsp&nbsp '+percentage_increasing_twenty_one_day+' &nbsp&nbsp </td>');
						str1.push('</tr>');
						
						str1.push('</table>');
						str1.push('<br/><br/>');
						str1.push('</div><!-- /.col-lg-5 -->');
						str1.push('<div class="col-lg-1">');
						str1.push('</div><!-- /.col-lg-1 -->');
						
						var return_data = str1.join("");
						$("#table_list").append(return_data);
						i++;
					}
					/*return_data = str1.join("");
					replaceHtml('table_list',return_data,ih);*/
				}else{
					alert('Error Occur');
				}
				
			},
			error: function (return_data) {
				//alert('error'+data.responseText);
				var data = return_data.responseText;
				var input_btn = [];
				input_btn.push('<input type="text" class="form-control" placeholder="Search" id="txt_search" name="txt_search" onKeyPress="return checkSubmit_search(event)">');
				input_btn.push('<div class="input-group-btn" id="div_btn" name="div_btn">');
				input_btn.push('<button class="btn btn-default" type="button" onclick="search_stock()" id="btn_search_stock" name="btn_search_stock" >search</button>');
				input_btn.push('<button class="btn btn-default" type="button" onclick="show_all()" id="btn_show_all" name="btn_show_all" >show all</button>');
				input_btn.push('</div>');
				input_btn.push('<div class="fb-share-button" data-href="http://keju-design.com/stock_prediction/result_html5.php" data-type="icon"></div>');
		
				var return_data_input_btn = input_btn.join("");
				$("#input_div").html(return_data_input_btn);
				
				data_array = data.split("^");
				data_return = eval("("+data_array[1]+")");
				
				if(data_return['errMsg'] == "file_exists"){	
					
					$("#table_list").empty();
					var i=0;
					
					while(i < data_return['stock_name'].length){
						var stock_name 								= data_return['stock_name'][i];
						var percentage_increasing_seven_day 		= data_return['percentage_increasing_seven_day'][i];
						var percentage_increasing_fourteen_day 		= data_return['percentage_increasing_fourteen_day'][i];
						var percentage_increasing_twenty_one_day 	= data_return['percentage_increasing_twenty_one_day'][i];
						var str1 = [];	
					
						str1.push('');
						str1.push('<div class="col-lg-10">');
						str1.push('<table class="table table-striped">');
						str1.push('<tr id="tr_'+stock_name+'">');
						str1.push('<th nowrap id="th_'+stock_name+'_desc" > &nbsp&nbsp Stock name: &nbsp&nbsp');
						str1.push('&nbsp&nbsp '+stock_name+' &nbsp&nbsp </th>');
						str1.push('</tr>');
						
						str1.push('<tr id="tr_'+stock_name+'_seven">');
						str1.push('<td nowrap id="th_'+stock_name+'_seven_desc"> <b> &nbsp&nbsp 7th days closing price </b> &nbsp&nbsp&nbsp&nbsp');
						str1.push('&nbsp&nbsp '+percentage_increasing_seven_day+' &nbsp&nbsp </td>');
						str1.push('</tr>');
						
						str1.push('<tr id="tr_'+stock_name+'_fourteen">');
						str1.push('<td nowrap id="th_'+stock_name+'_fourteen_desc"> <b> &nbsp&nbsp 14th days closing price </b> &nbsp&nbsp');
						str1.push('&nbsp&nbsp '+percentage_increasing_fourteen_day+' &nbsp&nbsp </td>');
						str1.push('</tr>');
						
						str1.push('<tr id="tr_'+stock_name+'_twenty_one">');
						str1.push('<td nowrap id="th_'+stock_name+'_twenty_one_desc"> <b> &nbsp&nbsp 21th days closing price </b> &nbsp&nbsp');
						str1.push('&nbsp&nbsp '+percentage_increasing_twenty_one_day+' &nbsp&nbsp </td>');
						str1.push('</tr>');
						
						str1.push('</table>');
						str1.push('<br/><br/>');
						str1.push('</div><!-- /.col-lg-5 -->');
						str1.push('<div class="col-lg-1">');
						str1.push('</div><!-- /.col-lg-1 -->');
						
						var return_data = str1.join("");
						$("#table_list").append(return_data);
						i++;
					}
					/*return_data = str1.join("");
					replaceHtml('table_list',return_data,ih);*/
				}else{
					alert('Error Occur');
				}
			}
		});
	}
	

	function checkSubmit_search(e){
		if(e && e.keyCode == 13){
			search_stock();
		}
	}