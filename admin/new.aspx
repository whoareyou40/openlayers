<!DOCTYPE html>
<html lang="en">
	<head>
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
		<meta http-equiv="Content-Type" content="text/html; charset=gb2312">
		<title>Form Wizard - Ace Admin</title>

		<meta name="description" content="and Validation" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

		<!-- bootstrap & fontawesome -->
		<link rel="stylesheet" href="../assets/css/bootstrap.css" />
		<link rel="stylesheet" href="../components/font-awesome/css/font-awesome.css" />

		<!-- page specific plugin styles -->
		<link rel="stylesheet" href="../components/select2/dist/css/select2.css" />

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


	</head>

	<body class="no-skin">
		<!-- #section:basics/navbar.layout -->
		<div id="navbar" class="navbar navbar-default          ace-save-state">
			<div class="navbar-container ace-save-state" id="navbar-container">
				<!-- #section:basics/sidebar.mobile.toggle -->
				<button type="button" class="navbar-toggle menu-toggler pull-left" id="menu-toggler" data-target="#sidebar">
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

		<!-- /section:basics/navbar.layout -->
		<div class="main-container ace-save-state" id="main-container">
			<script type="text/javascript">
				try{ace.settings.loadState('main-container')}catch(e){}
			</script>

			<!-- #section:basics/sidebar -->
			

			<!-- /section:basics/sidebar -->
			<div class="main-content">
				<div class="main-content-inner">
					<!-- #section:basics/content.breadcrumbs -->
				

					<!-- /section:basics/content.breadcrumbs -->
					<div class="page-content">
						<!-- #section:settings.box -->
					
						<!-- /section:settings.box -->
			

						<div class="row">
							<div class="col-xs-12">
								<!-- PAGE CONTENT BEGINS -->
						

								<div class="widget-box">
									<div class="widget-header widget-header-blue widget-header-flat">
										<h4 class="widget-title lighter">新增影像图</h4>

							
									</div>

									<div class="widget-body">
										<div class="widget-main">
											<!-- #section:plugins/fuelux.wizard -->
											<div id="fuelux-wizard-container">
												<div>
													<!-- #section:plugins/fuelux.wizard.steps -->
													<ul class="steps">
														<li data-step="1" class="active">
															<span class="step">1</span>
															<span class="title">上传影像图</span>
														</li>

														<li data-step="2">
															<span class="step">2</span>
															<span class="title">新增数据</span>
														</li>

														<li data-step="3">
															<span class="step">3</span>
															<span class="title">发布图层</span>
														</li>

														<li data-step="4">
															<span class="step">4</span>
															<span class="title">完成</span>
														</li>
													</ul>

													<!-- /section:plugins/fuelux.wizard.steps -->
												</div>

												<hr />

												<!-- #section:plugins/fuelux.wizard.container -->
												<div class="step-content pos-rel">
                                                    <div class="step-pane" data-step="1">
														<div>
												

															<div class="alert alert-warning">
																<button type="button" class="close" data-dismiss="alert">
																	<i class="ace-icon fa fa-times"></i>
																</button>
																<strong>上传影像图</strong>

																ftp://192.168.1.108
                                                                <p/>
                                                                文件格式GeoTiff
																<br />
                                                                 <input type="file">
	<div class="progress-bar" style="width:66%;"></div>

															</div>

										
														</div>
													</div>
													<div class="step-pane " data-step="2">
														

											

														<form class="form-horizontal " id="validation-form" method="get">
											

															<div class="form-group">
																<label class="control-label col-xs-12 col-sm-3 no-padding-right" for="name">影像图地址:</label>

																<div class="col-xs-12 col-sm-9">
																	<div class="clearfix">
																		<input type="text" id="url" name="name" class="col-xs-12 col-sm-5" />
																	</div>
																</div>
															</div>
                                                            <div class="form-group">
																<label class="control-label col-xs-12 col-sm-3 no-padding-right" for="name">数据名称:</label>

																<div class="col-xs-12 col-sm-9">
																	<div class="clearfix">
																		<input type="text" id="dataName" name="name" class="col-xs-12 col-sm-5" />
																	</div>
																</div>
															</div>

														</form>
													</div>

													

													<div class="step-pane" data-step="3">
													<form class="form-horizontal " id="Form1" method="get">
											

															<div class="form-group">
																<label class="control-label col-xs-12 col-sm-3 no-padding-right" for="name">图层名称:</label>

																<div class="col-xs-12 col-sm-9">
																	<div class="clearfix">
																		<input type="text" id="layerName"  class="col-xs-12 col-sm-5" />
																	</div>
																</div>
															</div>
                                                            <div class="form-group">
																<label class="control-label col-xs-12 col-sm-3 no-padding-right" for="name">源数据坐标系:</label>

																<div class="col-xs-12 col-sm-9">
																	<div class="clearfix">
																			<select class="input-large" id="cs" >
																		        <option value="EPSG:3857" selected>WGS 84 / Pseudo-Mercator</option>
                                                                                <option value="EPSG:4326">WGS 84（long/lat)</option>
                                                                                <option value="EPSG:4210">Beijing 1954</option>
                                                                                <option value="EPSG:3857">Xian 1980</option>
																		</select>
																	</div>
																</div>
															</div>

														</form>
													</div>

													<div class="step-pane" data-step="4">
														<div class="center">
															<h3 class="green"></h3>
															图层已发布成功。
														</div>
													</div>
												</div>

												<!-- /section:plugins/fuelux.wizard.container -->
											</div>

											<hr />
											<div class="wizard-actions">
												<!-- #section:plugins/fuelux.wizard.buttons -->
												<!--button class="btn btn-prev">
													<i class="ace-icon fa fa-arrow-left"></i>
													上一步
												</!--button>-->

												<button class="btn btn-success btn-next" data-last="完成">
													下一步
													<i class="ace-icon fa fa-arrow-right icon-on-right"></i>
												</button>

												<!-- /section:plugins/fuelux.wizard.buttons -->
											</div>

											<!-- /section:plugins/fuelux.wizard -->
										</div><!-- /.widget-main -->
									</div><!-- /.widget-body -->
								</div>

							
							</div><!-- /.col -->
						</div><!-- /.row -->
					</div><!-- /.page-content -->
				</div>
			</div><!-- /.main-content -->

	

			<a href="#" id="btn-scroll-up" class="btn-scroll-up btn btn-sm btn-inverse">
				<i class="ace-icon fa fa-angle-double-up icon-only bigger-110"></i>
			</a>
		</div><!-- /.main-container -->

		<!-- basic scripts -->

		<!--[if !IE]> -->
		<script src="../components/jquery/dist/jquery.js"></script>

		<!-- <![endif]-->

		<!--[if IE]>
<script src="../components/jquery.1x/dist/jquery.js"></script>
<![endif]-->
		<script type="text/javascript">
			if('ontouchstart' in document.documentElement) document.write("<script src='../components/_mod/jquery.mobile.custom/jquery.mobile.custom.js'>"+"<"+"/script>");
		</script>
		<script src="../components/bootstrap/dist/js/bootstrap.js"></script>

		<!-- page specific plugin scripts -->
		<script src="../components/fuelux/js/wizard.js"></script>
		<script src="../components/jquery-validation/dist/jquery.validate.js"></script>
		<script src="../components/jquery-validation/dist/additional-methods.js"></script>
		<script src="../components/bootbox.js/bootbox.js"></script>
		<script src="../components/jquery.maskedinput/dist/jquery.maskedinput.js"></script>
		<script src="../components/select2/dist/js/select2.js"></script>

		<!-- ace scripts -->
		<script src="../assets/js/src/elements.scroller.js"></script>
		<script src="../assets/js/src/elements.colorpicker.js"></script>
		<script src="../assets/js/src/elements.fileinput.js"></script>
		<script src="../assets/js/src/elements.typeahead.js"></script>
		<script src="../assets/js/src/elements.wysiwyg.js"></script>
		<script src="../assets/js/src/elements.spinner.js"></script>
		<script src="../assets/js/src/elements.treeview.js"></script>
		<script src="../assets/js/src/elements.wizard.js"></script>
		<script src="../assets/js/src/elements.aside.js"></script>
		<script src="../assets/js/src/ace.js"></script>
		<script src="../assets/js/src/ace.basics.js"></script>
		<script src="../assets/js/src/ace.scrolltop.js"></script>
		<script src="../assets/js/src/ace.ajax-content.js"></script>
		<script src="../assets/js/src/ace.touch-drag.js"></script>
		<script src="../assets/js/src/ace.sidebar.js"></script>
		<script src="../assets/js/src/ace.sidebar-scroll-1.js"></script>
		<script src="../assets/js/src/ace.submenu-hover.js"></script>
		<script src="../assets/js/src/ace.widget-box.js"></script>
		<script src="../assets/js/src/ace.settings.js"></script>
		<script src="../assets/js/src/ace.settings-rtl.js"></script>
		<script src="../assets/js/src/ace.settings-skin.js"></script>
		<script src="../assets/js/src/ace.widget-on-reload.js"></script>
		<script src="../assets/js/src/ace.searchbox-autocomplete.js"></script>


        <script src="admin.js"></script>
		<!-- inline scripts related to this page -->
		<script type="text/javascript">
			jQuery(function($) {
			
				$('[data-rel=tooltip]').tooltip();
			
				$('.select2').css('width','200px').select2({allowClear:true})
				.on('change', function(){
					$(this).closest('form').validate().element($(this));
				}); 
			
			
				var $validation = false;
				$('#fuelux-wizard-container')
				.ace_wizard({
					//step: 2 //optional argument. wizard will jump to step "2" at first
					//buttons: '.wizard-actions:eq(0)'
				})
				.on('actionclicked.fu.wizard' , function(e, info){
				    if (info.step == 1) {
				    
					//	if(!$('#validation-form').valid()) 
				    }
				    else if (info.step == 2) {
				        //       
				        e.preventDefault();
				        step2();

				       // step2(e);
				    }
				    else if (info.step == 3) {
				        e.preventDefault();
				        step3();
				    }
				})
				//.on('changed.fu.wizard', function() {
				//})
				.on('finished.fu.wizard', function(e) {
				    location.href = "index.html";
				}).on('stepclick.fu.wizard', function(e){
				    //e.preventDefault();//this will prevent clicking and selecting steps
				
				});
			
			
				//jump to a step
				/**
				var wizard = $('#fuelux-wizard-container').data('fu.wizard')
				wizard.currentStep = 3;
				wizard.setState();
				*/
			
				//determine selected step
				//wizard.selectedItem().step
			
			
			
				//hide or show the other form which requires validation
				//this is for demo only, you usullay want just one form in your application
				$('#skip-validation').removeAttr('checked').on('click', function(){
					$validation = this.checked;
					if(this.checked) {
						$('#sample-form').hide();
						$('#validation-form').removeClass('hide');
					}
					else {
						$('#validation-form').addClass('hide');
						$('#sample-form').show();
					}
				})
			
			
			
				//documentation : http://docs.jquery.com/Plugins/Validation/validate
			
			
				$.mask.definitions['~']='[+-]';
				$('#phone').mask('(999) 999-9999');
			
				jQuery.validator.addMethod("phone", function (value, element) {
					return this.optional(element) || /^\(\d{3}\) \d{3}\-\d{4}( x\d{1,6})?$/.test(value);
				}, "Enter a valid phone number.");
			
				$('#validation-form').validate({
					errorElement: 'div',
					errorClass: 'help-block',
					focusInvalid: false,
					ignore: "",
					rules: {
						email: {
							required: true,
							email:true
						},
						password: {
							required: true,
							minlength: 5
						},
						password2: {
							required: true,
							minlength: 5,
							equalTo: "#password"
						},
						name: {
							required: true
						},
						phone: {
							required: true,
							phone: 'required'
						},
						url: {
							required: true,
							url: true
						},
						comment: {
							required: true
						},
						state: {
							required: true
						},
						platform: {
							required: true
						},
						subscription: {
							required: true
						},
						gender: {
							required: true,
						},
						agree: {
							required: true,
						}
					},
			
					messages: {
						email: {
							required: "Please provide a valid email.",
							email: "Please provide a valid email."
						},
						password: {
							required: "Please specify a password.",
							minlength: "Please specify a secure password."
						},
						state: "Please choose state",
						subscription: "Please choose at least one option",
						gender: "Please choose gender",
						agree: "Please accept our policy"
					},
			
			
					highlight: function (e) {
						$(e).closest('.form-group').removeClass('has-info').addClass('has-error');
					},
			
					success: function (e) {
						$(e).closest('.form-group').removeClass('has-error');//.addClass('has-info');
						$(e).remove();
					},
			
					errorPlacement: function (error, element) {
						if(element.is('input[type=checkbox]') || element.is('input[type=radio]')) {
							var controls = element.closest('div[class*="col-"]');
							if(controls.find(':checkbox,:radio').length > 1) controls.append(error);
							else error.insertAfter(element.nextAll('.lbl:eq(0)').eq(0));
						}
						else if(element.is('.select2')) {
							error.insertAfter(element.siblings('[class*="select2-container"]:eq(0)'));
						}
						else if(element.is('.chosen-select')) {
							error.insertAfter(element.siblings('[class*="chosen-container"]:eq(0)'));
						}
						else error.insertAfter(element.parent());
					},
			
					submitHandler: function (form) {
					},
					invalidHandler: function (form) {
					}
				});
			
				
				
				
				$('#modal-wizard-container').ace_wizard();
				$('#modal-wizard .wizard-actions .btn[data-dismiss=modal]').removeAttr('disabled');
				
				
				/**
				$('#date').datepicker({autoclose:true}).on('changeDate', function(ev) {
					$(this).closest('form').validate().element($(this));
				});
				
				$('#mychosen').chosen().on('change', function(ev) {
					$(this).closest('form').validate().element($(this));
				});
				*/
				
				
				$(document).one('ajaxloadstart.page', function(e) {
					//in ajax mode, remove remaining elements before leaving page
					$('[class*=select2]').remove();
				});
			})
		</script>


	</body>
</html>
