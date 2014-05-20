<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML+RDFa 1.0//EN" "http://www.w3.org/MarkUp/DTD/xhtml-rdfa-1.dtd">
<html>
<head>
	<title>Display Result</title>
    <link href="css/bootstrap.min.css" rel="stylesheet">
	<style>
				
		.result_table th {
			background-color:#D3D4D5;
			border-width: 1px;
			padding: 4px;
			border-style: solid;
			border-color: #a9c6c9;
		}

		.result_table tr {
			background-color:#E4E5E6;
		}

		.result_table td {
			border-width: 1px;
			padding: 4px;
			border-style: solid;
			border-color: #a9c6c9;
		}

	</style>
	<meta name="og:title" content="Keju Portfolio Risk Analysis" />
	<meta name="og:type" content="system" />
	<meta name="og:url" content="http://keju-design.com/stock_prediction/result_html5.php" />
	<meta name="og:description" content="An easy way for you to invest in stock market. Currently only available for Malaysia stock market." />
</head>
<body>
	<div class="navbar navbar-default navbar-fixed-top" role="navigation">
		<div class="container">
			<div class="navbar-header">
				<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
					<span class="sr-only">Toggle navigation</span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
					<span class="icon-bar"></span>
				</button>
				<a class="navbar-brand" href="#">Keju Portfolio Risk Analysis</a>
			</div>
			<div class="collapse navbar-collapse navbar-ex1-collapse">
				<div class="col-sm-4 pull-right">
					<div class="navbar-form" role="search">
						<div class="input-group" id="input_div" name="input_div">
							Loading ...
						</div>
					</div>
				</div>
			</div><!--/.nav-collapse -->
		</div>
	</div>
	
	<br/><br/><br/><br/>
	
	<!-- Three columns of text below the carousel -->
	<div class="container marketing">
		<div class="container">
			<div class="row" id="table_list" name="table_list">
					
			</div>
		</div>
	</div>
	
	<br/><br/>
	
	<footer>
	<p>Copyright &copy; 2014 Tan Kwee Hoe. All rights reserved.</p>
	</footer>
</body>
</html>

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/jquery.min.js"></script>
<script type="text/javascript" src="js/bootstrap.min.js"></script>
<script type="text/javascript" src="javascript/result_html5.js"></script>
<script type="text/javascript" >
	//submit_action('select');
	
	$( document ).ready(function() {
		show_all();
	});
	
</script>

<div id="fb-root"></div>

<script>(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_GB/all.js#xfbml=1&appId=238316742866283";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));</script>