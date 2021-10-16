<?php /* EL PSY CONGROO */ /* EL PSY CONGROO */     	  	   	 	 	    
#注册插件  	     	   	  
RegisterPlugin("cattila","ActivePlugin_cattila");	  	      	 	  	       			 	     					      	   	 	
function ActivePlugin_cattila() {        				 
	global $zbp;         	   	
	$s = '';    	 				 	
	Add_Filter_Plugin('Filter_Plugin_Admin_TopMenu', 'cattila_AddMenu');        			 		 	 	  	       	  			 
	Add_Filter_Plugin('Filter_Plugin_Html_Js_Add', 'cattila_Html_Js_Add');    		 	  		    	 		 	  
	//Add_Filter_Plugin('Filter_Plugin_Search_Begin','cattila_search_plus');
	Add_Filter_Plugin('Filter_Plugin_Edit_Response5','cattila_article_AddCover');
	Add_Filter_Plugin('Filter_Plugin_Admin_Header','cattila_backstage_Css');
	Add_Filter_Plugin('Filter_Plugin_Login_Header','cattila_backstage_Css');
	Add_Filter_Plugin('Filter_Plugin_Other_Header','cattila_backstage_Css');
	Add_Filter_Plugin('Filter_Plugin_Admin_Header','cattila_backstage_Js');
	Add_Filter_Plugin('Filter_Plugin_Other_Header','cattila_backstage_Js');
	    	  			 	
	if($zbp->Config('cattila')->seo_switch == '1'){       	        		 			  
    	Add_Filter_Plugin('Filter_Plugin_Edit_Response5','cattila_art_seo');    			    	    	    	 	
    	Add_Filter_Plugin('Filter_Plugin_Tag_Edit_Response','cattila_tag_seo');       				      					  
    	Add_Filter_Plugin('Filter_Plugin_Category_Edit_Response','cattila_cat_seo');       	 		  	 
    	Add_Filter_Plugin('Filter_Plugin_ViewPost_Template','cattila_img_alt');    		 	 			
    	   			 	 		     						 
	} 	    	     	 
	    		  	 		     	   	 			
	if($zbp->Config('cattila')->from_switch == '1'){        	 	  
	    Add_Filter_Plugin('Filter_Plugin_Edit_Response5','cattila_from_where');//文章来源       		 			
	}		 			     	  			  
//主题颜色	
	if($zbp->Config('cattila')->accent_color) {     				       			 	 		
		$zbp->Config('cattila')->accent_color = str_replace('#', '', $zbp->Config('cattila')->accent_color);
	}else{
		$zbp->Config('cattila')->accent_color = "d95736";
	}
	$s .= ":root {--color-primary: #" . $zbp->Config('cattila')->accent_color . ";}";    

	if($zbp->Config('cattila')->sec_color) {     				       			 	 		
		$zbp->Config('cattila')->sec_color = str_replace('#', '', $zbp->Config('cattila')->sec_color);
	}else{
		$zbp->Config('cattila')->sec_color = "bf4526";
	}
	$s .= ":root {--color-primary-active: #" . $zbp->Config('cattila')->sec_color . ";}";   
		 	      	     
	if($zbp->Config('cattila')->HasKey("diy_css")){      		           			  	 
	    $s .= $zbp->Config('cattila')->diy_css;    	 						     			  		
	}	    		 			 	       	 		 
	$zbp->header .= '<style type="text/css">'.$s.'</style>' . "\r\n";     	             		 	 
}  
function cattila_backstage_Css() {
	global $zbp;
	$s = ":root {--color-primary: #" . $zbp->Config('cattila')->accent_color . ";}";
	$s .= ":root {--color-primary-active: #" . $zbp->Config('cattila')->sec_color . ";}";
    echo '<style type="text/css">'.$s.'</style><link rel="stylesheet" type="text/css" href="'. $zbp->host .'zb_users/theme/cattila/style/backstage.css"/>' . "\r\n";
}
function cattila_backstage_Js() {
	global $zbp;
	echo '<script src="'. $zbp->host .'zb_users/theme/cattila/style/backstage.js"/>' . "\r\n";
}  
function cattila_article_AddCover(){
    global $zbp,$article;
   	echo '<div id="alias" class="editmod"><label style="margin-bottom: 5px;" for="meta_cover_url" class="editinputname">大背景图：</label><br /><input class="ue-url" style="width: 80.5%" placeholder="输入图片URL或者上传图片（需选择使用大背景图文章模板）" type="text" name="meta_cover_url" value="'.htmlspecialchars($article->Metas->cover_url).'"/><input class="ue-image-upload" style="width: 16%;" type="button" value="上传图片"/></div>';
	if ($zbp->CheckPlugin('UEditor')) {    		  	 	     		 			 	    	  		 	 
		echo "<script type=\"text/javascript\" src=\"{$zbp->host}zb_users/theme/cattila/plugin/lib.upload.js\"></script>";    
	}
}

//后台按钮        			     	  	 	  
function cattila_AddMenu(&$m){     		 	  	       	  		
	global $zbp;     	 			      	 	  		        	   	     	 	  		    		 	  		     		   		        	 	 
	array_unshift($m, MakeTopMenu("root",'主题配置',$zbp->host . "zb_users/theme/cattila/main.php?act=base_set","","topmenu_cattila"));    	 	 	  	      	 	 	 
}   
function cattila_SubMenu($id){     	          				   	
	$arySubMenu = array(      	          	  		 	     		   		      	    	    	  				     					         			 		
		0 => array('基础设置', 'base_set', 'left', false),    	 			 		        		  
		1 => array('SEO设置', 'seo_set', 'left', false),     	 		 		         	 	
		2 => array('组件设置', 'widget_set', 'left', false),      	  	      	   				
		3 => array('自定义css', 'my_css', 'left', false)    	    			     		   		
	);      	  			    	  					     			  	       	 		       	   	      	 	 		 	       	    
	foreach($arySubMenu as $k => $v){     		 		       		 		  
		echo '<a href="?act='.$v[1].'" '.($v[3]==true?'target="_blank"':'').'><span class="m-'.$v[2].' '.($id==$v[1]?'m-now':'').'">'.$v[0].'</span></a>';    	 					       	     
	}    		 	  		     	 	 		     		 	 	 	      	 				    		 	 	       	  		 	     	  	   
}
//初始化     			  	     			 		 	     	   	 	
function InstallPlugin_cattila() {    	 	  		       	  	      	    		 
	global $zbp;    							      		  		         	 	 	     	 		         			  	       				 
	if(!$zbp->Config('cattila')->HasKey('Version')){     		  		      			 		       		 			
		$zbp->Config('cattila')->cover_switch = '0';
		$zbp->Config('cattila')->cover_url = "https://coolbackgrounds.io/images/unsplash/josh-bean-medium-9501ba9f.jpg";
		$zbp->Config('cattila')->accent_color = "#d95736";
		$zbp->Config('cattila')->sec_color = "#bf4526";
		$zbp->Config('cattila')->darkmode_switch = "1";           	 				
		$zbp->Config('cattila')->new_post_num = "4"; 	//最新文章    	           		 			          	  	      	  	 	    	 	  			      	 			      				   
		$zbp->Config('cattila')->footer_copy = "YourSite © 2021";      	   	      	 		 	       	 	 	  				     		 	 	        			 		
		$zbp->Config('cattila')->signup_switch = "1";     //注册
		$zbp->Config('cattila')->login_switch = "1";     //登录		                  	 	  	    		     	    			   		    	 	 			     	  	   	       	   	 	     	 		  	      		  		      					 	     	 	 	       	  	 	          	 	
		$zbp->Config('cattila')->signup_url = $zbp->host."zb_system/login.php";     //注册链接
		$zbp->Config('cattila')->signup_solid = "1";     
		$zbp->Config('cattila')->login_url = $zbp->host."zb_system/login.php";     //登录链接
		$zbp->Config('cattila')->login_solid = "0"; 		     	 	 		     		  	  	     			  		
    	$zbp->SaveConfig('cattila');      	           	  	 	    	 			 		
    }    	    			    		   	        	 		 	
    $zbp->SaveConfig('cattila');     	 		        		 	 		    		   	 	
}         	 
?>