<!DOCTYPE html>
<html>
    <head>
	    <title>影像图管理</title>
        <meta name="description" content="Static &amp; Dynamic Tables" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

		<!-- bootstrap & fontawesome -->
		<link rel="stylesheet" href="../assets/css/bootstrap.css" />
		<link rel="stylesheet" href="../components/font-awesome/css/font-awesome.css" />

		<!-- page specific plugin styles -->

		<!-- text fonts -->
		<link rel="stylesheet" href="../assets/css/ace-fonts.css" />

		<!-- ace styles -->
		<link rel="stylesheet" href="../assets/css/ace.css" class="ace-main-stylesheet" id="main-ace-style" />

		<!--[if lte IE 9]>
			<link rel="stylesheet" href="../assets/css/ace-part2.css" class="ace-main-stylesheet" />
		<![endif]-->
		<link rel="stylesheet" href="../assets/css/ace-skins.css" />
		<link rel="stylesheet" href="../assets/css/ace-rtl.css" />

		<!--[if lte IE 9]>
		  <link rel="stylesheet" href="../assets/css/ace-ie.css" />
		<![endif]-->

		<!-- inline styles related to this page -->

		<!-- ace settings handler -->
		<script src="../assets/js/ace-extra.js"></script>

		<!-- HTML5shiv and Respond.js for IE8 to support HTML5 elements and media queries -->

		<!--[if lte IE 8]>
		<script src="../components/html5shiv/dist/html5shiv.min.js"></script>
		<script src="../components/respond/dest/respond.min.js"></script>
		<![endif]-->
	    <style type="text/css">
	        #dataTable.classy {
	            color: red;
	        }
	    </style>
    </head>

    <body class="no-skin">

        
        		<div id="navbar" class="navbar navbar-default          ace-save-state">
			<div class="navbar-container ace-save-state" id="navbar-container">
				<!-- #section:basics/sidebar.mobile.toggle -->
			
					<span class="sr-only">Toggle sidebar</span>

					<span class="icon-bar"></span>

					<span class="icon-bar"></span>

					<span class="icon-bar"></span>
				</button>

				<!-- /section:basics/sidebar.mobile.toggle -->
	

				<!-- #section:basics/navbar.dropdown -->
		

				<!-- /section:basics/navbar.dropdown -->
			</div><!-- /.navbar-container -->
		</div>
     
        <div id="container" class="main-container ace-save-state">  <div  style="text-align: right"> <a href ="FileUpload.aspx">新增</a> <a href ="#" onclick="location.reload()">刷新</a></div></div>
        
	    <script type="text/javascript" src="jquery.min.js"></script>

        <script type="text/javascript">
            var jsondata;
            var cjson = {};
        
                $.ajax({
                    type: "get",
                    contentType: "application/json",
                    url: "http://192.168.1.201:8080/geoserver/rest/workspaces/shanghai/coveragestores",
               
                    success: function (json) {
                        var json_source = json.coverageStores;
                        json_source = json_source.coverageStore
                     
                        initTable(json_source);
                     

                    
                    },
                    error: function (error) {
                        alert("出错：" + error.responseText);
                    }
                });

                function initTable(json_source) {
                    var html = '<table border=0 class="table  table-bordered table-hover">';
                    html += "<thead><tr><td>影像图名称</td><td>发布日期</td><td>操作</td></thead>"
                    for (var j in json_source) {
                        var obj = json_source[j];
                        html += '<tbody><tr>'
                        html += '<td>shanghai:' + obj.name + '</td>';
                        html += '<td>' + obj.name + '</td>';
                        html += '<td><a href="priview.html?layername=' + obj.name + '">查看</a> <a href="#" onClick=deleteData(' + obj.name + ')>删除</a></td>';
                        html += '</tr></tbody>'
                    }
                    html += '</table>';

                    $('#container').append(html);
                }
	        

                function deleteData(name) {
                    if (confirm("确定删除数据?")) {


                        $.ajax({
                            type: "delete",
                            contentType: "application/json",
                            url: "http://192.168.1.108:8080/geoserver/rest/workspaces/shanghai/coveragestores/" + name + "?recurse=true",
                            success: function (data) {
                                alert("数据删除成功");
                                location.reload();
                            },
                            error: function (error) {
                                alert("出错：" + error.responseText);
                            }
                        });
                    }
                    else {

                    }
                }
	
        </script>
    </body>
</html>
