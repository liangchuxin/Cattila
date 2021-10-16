<?php /* EL PSY CONGROO */ /* EL PSY CONGROO */ 	 	 	     							 
require '../../../zb_system/function/c_system_base.php';    			   		     	 	    
require '../../../zb_system/function/c_system_admin.php';     	 	   	     				  	
$zbp->Load();         		 			  
$action='root';     			          	  	      	 	  	 	    			          		 	  	      		 		     	    			
if (!$zbp->CheckRights($action)) {$zbp->ShowError(6);die();}     	 	 	      		 	 	  
if (!$zbp->CheckPlugin('cattila')) {$zbp->ShowError(48);die();}   	 	 	 		       	 	       			 		       	    	
$blogtitle='Cattila主题配置';   	  	     	  		 	    		           	     	    	 	         			  			
$act = "";    			    	    			 		 	    	  			      		  	 		      	   		        		        	   		
if ($_GET['act']){    			 	       	  	 			
$act = $_GET['act'] == "" ? 'base_set' : $_GET['act'];     	 			      								
}		 	 		    		    	       	 	  	      		 	       	  	 		    		 	  	      			 		 
require $blogpath . 'zb_system/admin/admin_header.php';           	    					   
require $blogpath . 'zb_system/admin/admin_top.php';
//基础设置    		 		 	     			 				    	 		 	      	 			  	       	 	           	 	    	 		 	 	
if(isset($_POST['darkmode_switch'])){       	 	       	 	 	 	    	    			       		 		      	  			    	 	 	           		 	
    if (function_exists('CheckIsRefererValid')) CheckIsRefererValid();   
    $zbp->Config('cattila')->favicon_url = $_POST['favicon_url'];   
    $zbp->Config('cattila')->logo_light = $_POST['logo_light'];  	
    $zbp->Config('cattila')->logo_dark = $_POST['logo_dark'];  				      			 		 	    			  		       	 			     	 	 		 	    	      	      			  				      			 		 	    			  		       	 			     	 	 		 	    	      	      			  	
    $zbp->Config('cattila')->cover_switch = $_POST['cover_switch'];
    $zbp->Config('cattila')->cover_url = $_POST['cover_url'];
    $zbp->Config('cattila')->center_text = $_POST['center_text'];
    $zbp->Config('cattila')->below_text = $_POST['below_text'];
    $zbp->Config('cattila')->global_cover_switch = $_POST['global_cover_switch'];
    $zbp->Config('cattila')->accent_color = $_POST['accent_color'];
    $zbp->Config('cattila')->sec_color = $_POST['sec_color'];
    $zbp->Config('cattila')->darkmode_switch = $_POST['darkmode_switch'];    
    $zbp->Config('cattila')->lightbox_switch = $_POST['lightbox_switch'];           	 				       	 				
	$zbp->Config('cattila')->new_post_num = $_POST['new_post_num']; 	//最新文章    	           		 			          	  	      	  	 	    	 	  			      	 			      				   
    $zbp->Config('cattila')->footer_icp = $_POST['footer_icp'];   //页尾备案信息       							        	  	     	   	  	
    $zbp->Config('cattila')->footer_copy = $_POST['footer_copy'];      	   	      	 		 	       	 	 	  				     		 	 	        			 		
    $zbp->Config('cattila')->footer_code = $_POST['footer_code'];     //页尾统计代码     		 				     	   		 	    	 			 	         			      	 		  	      		  		     							
    $zbp->SaveConfig('cattila');     	     	        		      	 	 	  	    	 				 	    	   		       		 		      		 		   
    $zbp->ShowHint('good');       	        	   		      	 				       	 		        	 	 		     		  				       					
}  
//组件设置      		 	 	    				 			     	 	        	 		          	   		    			 	 	     				 	 	
if(isset($_POST['login_switch'])){     				  	    	 			  	       	   	    		  	  	     		  			     	 	  	      		 	   
    if (function_exists('CheckIsRefererValid')) CheckIsRefererValid();    	   		 	     		 	  	     							     		   	      		 	        	  			     		   	 	
    $zbp->Config('cattila')->signup_switch = $_POST['signup_switch'];     //注册
    $zbp->Config('cattila')->login_switch = $_POST['login_switch'];     //登录		                  	 	  	    		     	    			   		    	 	 			     	  	   	       	   	 	     	 		  	      		  		      					 	     	 	 	       	  	 	          	 	
    $zbp->Config('cattila')->signup_url = $_POST['signup_url'];     //注册链接
    $zbp->Config('cattila')->signup_solid = $_POST['signup_solid'];     
    $zbp->Config('cattila')->login_url = $_POST['login_url'];     //登录链接
    $zbp->Config('cattila')->login_solid = $_POST['login_solid']; 
    $zbp->SaveConfig('cattila');    	    	 	    		   	       			 		      	 			 	      		         		 	 		     					 	
	$zbp->ShowHint('good');      				 	      	 			     					  	    		 		        			  		     	 		       	 			  	
}    		  	     				
?>
<style>
.ue-image-upload {
    height: auto!important;
}
</style>
<div id="divMain">
  <div class="divHeader"><?php echo $blogtitle;?></div>
  <div class="SubMenu"><?php cattila_SubMenu($act);?></div>
  <div id="divMain2">
<?php if ($act == 'base_set') { ?>
    <table width="100%" style="padding:0;margin:0;" cellspacing="0" cellpadding="0" class="tableBorder">
        <tr>
            <th width="15%"><p align="center">名称</p></th>
            <th width="50%"><p align="center">设置</p></th>
            <th width="25%"><p align="center">说明</p></th>
        </tr>
     </form> 
        <form id="form1" name="form1" method="post">
            <?php if (function_exists('CheckIsRefererValid')) {echo '<input type="hidden" name="csrfToken" value="' . $zbp->GetCSRFToken() . '">';}?>
            <tr>
            <td><label for="logo_light"><p align="center">LOGO图片</p></label></td> 
            <td><p><input name="logo_light" style="width:80%" type="text" class="ue-url" value="<?php echo $zbp->Config('cattila')->logo_light;?>" placeholder="输入图片URL或者上传图片"/><input class="ue-image-upload" type="button" value="上传图片"/></p></td>
                        <td><img src="<?php echo $zbp->Config('cattila')->logo_light; ?>" style="height: 60px; width; auto"/></td>
            </tr>
            <tr>
            <td><label for="logo_dark"><p align="center">暗夜模式LOGO</p></label></td> 
            <td><p><input name="logo_dark" style="width:80%" type="text" class="ue-url" value="<?php echo $zbp->Config('cattila')->logo_dark;?>" placeholder="输入图片URL或者上传图片"/><input class="ue-image-upload" type="button" value="上传图片"/></p></td>
                        <td><img src="<?php echo $zbp->Config('cattila')->logo_dark; ?>" style="height: 60px; width; auto"/></td>
            </tr>
            <tr>
            <td><label for="favicon_url"><p align="center">favicon图标(32*32)</p></label></td> 
            <td><p><input name="favicon_url" style="width:80%" type="text" class="ue-url" value="<?php echo $zbp->Config('cattila')->favicon_url;?>" placeholder="输入图片URL或者上传图片"/><input class="ue-image-upload" type="button" value="上传图片"/></p></td>
                        <td><img src="<?php echo $zbp->Config('cattila')->favicon_url; ?>" style="width: 28px; height: auto;"/></td>
            </tr>
            <tr>
            <td><label for="cover_switch"><p align="center">主页背景图开关</p></label></td> 
            <td><p><label>是否开启：<input type="text" name="cover_switch" class="checkbox" value="<?php echo $zbp->Config('cattila')->cover_switch;?>"/></label></p>
                <p>背景图：<input name="cover_url" style="width:70%" type="text" class="ue-url" value="<?php echo $zbp->Config('cattila')->cover_url;?>" placeholder="输入图片URL或者上传图片"/><input class="ue-image-upload" type="button" value="上传图片"/></p></td>
                        <td>建议使用水平方向背景图<br />开启若未设置背景图将使用默认图片</td>
            </tr>
            <tr>
            <td><label for="center_text"><p align="center">主页文字</p></label></td> 
            <td><p><label>中间的文字：<input style="width:80%;margin-bottom:5px;" type="text" name="center_text" placeholder="<?php echo $zbp->option['ZC_BLOG_NAME'];?>" value="<?php echo $zbp->Config('cattila')->center_text;?>" /></label></p>
            <p><label>下面的文字：<input style="width:80%;margin-bottom:5px;" type="text" name="below_text" placeholder="<?php echo $zbp->option['ZC_BLOG_SUBNAME'];?>" value="<?php echo $zbp->Config('cattila')->below_text;?>" /></label></p></td>
            <td>留空默认为网站标题副标题</td>
            </tr>
            <tr>
            <td><label for="center_text"><p align="center">背景图文字开关</p></label></td> 
            <td><p><label>是否在所有文章列表页显示背景图，标题和副标题：<input type="text" name="global_cover_switch" class="checkbox" value="<?php echo $zbp->Config('cattila')->global_cover_switch;?>"/></label></p></td>
            <td>默认不开启</td>
            </tr>
            <tr>
            <td><label for="accent_color"><p align="center">颜色设置</p></label></td> 
            <td><div style="display: flex; justify-content: space-around; flex-direction: row;"><div><label style="cursor: auto">主色：</label><div style="margin-bottom: 10px;" id="accent-box" class="input-color-form-group ember-view">
                <div class="input-color">
                    <input placeholder="<?php echo $zbp->Config('cattila')->accent_color ?>" id="accent-input" oninput="setColor('accent-input', 'accent-picker')" name="accent_color" value="<?php echo $zbp->Config('cattila')->accent_color;?>" autocorrect="off" maxlength="6" class="gh-input" type="text">
                    <div class="color-picker-horizontal-divider"></div>
                    <div class="color-box-container">
                        <input name="accent-color" class="color-picker" type="color" id="accent-picker" oninput="setColor('accent-picker', 'accent-input', 1)" value="#<?php echo $zbp->Config('cattila')->accent_color ?>">
                    </div>
                </div>
            </div>
            <style>
                .input-color-form-group {
                    display: inline-block;
                    max-width: 620px;
                }
                .input-color {
                    display: flex;
                    position: relative;
                }
                .input-color input.gh-input {
                    position: relative;
                    height: 30px!important;
                    width: 102px!important;
                    padding: 3px 4px 3px 46px!important;
                    font-size: 13px!important;
                    transition: none!important;
                }
                input.gh-input.error {
                    border-color: #f50b23!important;
                    box-shadow: none;
                }
                input.error.gh-input:focus {
                    box-shadow: inset 0 0 0 1px #f50b23;
                }
                .gh-input.focus, .gh-input:focus {
                    outline: 0;
                    border-color: #30cf43;
                    box-shadow: inset 0 0 0 1px #30cf43;
                    background: #fff;
                }
                .input-color:after {
                    content: "#";
                    position: absolute;
                    top: 3px;
                    left: 37px;
                    color: #abb4be;
                    font-family: Consolas,monaco,monospace;
                    font-size: 13px;
                }
                .gh-input {
                    border: 1px solid #dddedf;
                    background: #fff;
                    color: #394047;
                    border-radius: 3px;
                    -webkit-appearance: none;
                }
                .color-picker-horizontal-divider {
                    position: absolute;
                    display: block;
                    content: "";
                    width: 1px;
                    top: 0;
                    left: 29px;
                    bottom: 0;
                    background: #dddedf;
                }
                .color-box-container {
                    height: 26px;
                    width: 26px;
                    position: absolute;
                    overflow: hidden;
                    top: 2px;
                    left: 2px;
                    border-top-left-radius: 2px;
                    border-bottom-left-radius: 2px;
                }
                .color-box-container .color-picker {
                    position: absolute;
                    top: -10px;
                    left: -10px;
                    border: none;
                    outline: none;
                    padding: 0;
                    margin: 0;
                    width: 50px;
                    height: 50px;
                }
                .color-presets {
                    margin-right: 10px;
                }
                .color-presets div {
                    margin: 5px;
                    height: 26px;
                    width: 26px;
                    border-radius: 4px; 
                    cursor: pointer;
                }
            </style>
            <br /><label for="sec_color">辅色：</label><div class="input-color-form-group ember-view">
                <div class="input-color">
                    <input placeholder="<?php echo $zbp->Config('cattila')->sec_color ?>" id="sec-input" oninput="setColor('sec-input', 'sec-picker')" name="sec_color" value="<?php echo $zbp->Config('cattila')->sec_color;?>" autocorrect="off" maxlength="6" class="gh-input" type="text">
                    <div class="color-picker-horizontal-divider"></div>
                    <div> <div class="color-box-container">
                        <input name="sec-color" class="color-picker" type="color" id="sec-picker" oninput="setColor('sec-picker', 'sec-input', 1)" value="#<?php echo $zbp->Config('cattila')->sec_color ?>">
                    </div>
                </div></div>
            </div></div><div class="color-presets" style="display: flex; justify-content: center; align-items: center;">
                    <div onclick="setTheme('d95736')" style="background: #d95736;"></div>
                    <div onclick="setTheme('ff3333')" style="background: #ff3333;"></div>
                    <div onclick="setTheme('ff1a75')" style="background: #ff1a75;"></div>
                    <div onclick="setTheme('495AC0')" style="background: #495AC0;"></div>
                    <div onclick="setTheme('000000')" style="background: #000000;"></div>
                    <div onclick="setTheme('41872D')" style="background: #41872D;"></div>
            
            </div></td>
            <td>留空默认为网站标题副标题</td>
            </tr>
            <tr>
            <td><label for="darkmode_switch"><p align="center">暗夜模式开关</p></label></td>                 
            <td><p>是否开启暗夜模式（开关在底部右侧）</p></td>
            <td><p align="left"><input type="text" name="darkmode_switch" class="checkbox" value="<?php echo $zbp->Config('cattila')->darkmode_switch;?>"/></p></td>
            </tr> 
            <tr>
            <td><label for="lightbox_switch"><p align="center">简洁灯箱开关</p></label></td>                 
            <td><p>是否开启图片灯箱（即点击图片放大查看）</p><td><input type="text" name="lightbox_switch" class="checkbox" value="<?php echo $zbp->Config('cattila')->lightbox_switch;?>"/></p></td>
            </td></tr>              
    	    <tr>
        		<td><p align="center">首页最新文章</p></td>
        		<td><label>显示篇数：<input style="width:38px;margin-left:10px;text-align:center;" type="text" name="new_post_num" value="<?php echo $zbp->Config('cattila')->new_post_num;?>" /></label>
        					</td>
        		<td></td>
    		</tr>  		
            <tr>
                <td><label for="footer_copy"><p align="center">页尾版权信息</p></label></td>
                <td><p align="left"><textarea name="footer_copy" type="text" id="footer_copy" rows="2" style="width:98%;"><?php echo $zbp->Config('cattila')->footer_copy;?></textarea></p></td>
                <td><p align="left">页尾版权信息修改</p></td>
            </tr>             
            <tr>
                <td><label for="footer_icp"><p align="center">页尾备案信息</p></label></td>
                <td><p align="left"><textarea name="footer_icp" type="text" id="footer_icp" rows="3" style="width:98%;"><?php echo $zbp->Config('cattila')->footer_icp;?></textarea></p></td>
                <td><p align="left">没有备案的留空即可</p></td>
            </tr> 
            <tr>
                <td><label for="footer_code"><p align="center">统计代码</p></label></td>
                <td><p align="left"><textarea name="footer_code" type="text" id="footer_code" rows="4" style="width:98%;"><?php echo $zbp->Config('cattila')->footer_code;?></textarea></p></td>
                <td><p align="left">百度、CNZZ等统计代码</p></td>
            </tr>  
    </table> 
        <br/>
        <input name="" type="Submit" class="button" value="保存"/>  <a href="javascript:;" onclick="location.reload();">刷新</a>
        <br/><br/>
    </form> 
<?php }if ($act == 'seo_set') { ?>
    <form id="form2" name="form2" method="post"> 
    <?php if (function_exists('CheckIsRefererValid')) {echo '<input type="hidden" name="csrfToken" value="' . $zbp->GetCSRFToken() . '">';}?>
    <table width="100%" style="padding:0;margin:0;" cellspacing="0" cellpadding="0" class="tableBorder">
        <tr>
            <th width="15%"><p align="center">名称</p></th>
            <th width="50%"><p align="center">设置</p></th>
            <th width="25%"><p align="center">说明</p></th>
        </tr>  
        <tr>
            <td><label for="seo_switch"><p align="center">SEO 总开关</p></label></td>
            <td><p align="left"><input type="text" id="seo_switch" name="seo_switch" class="checkbox" value="<?php echo $zbp->Config('cattila')->seo_switch;?>"/></p></td>
            <td><p align="left">开启后以下功能才能生效</p></td>
        </tr>  
        <tr>
            <td><label for="cate_switch"><p align="center">显示分类名的开关</p></label></td>
            <td><p align="left"><input type="text" id="cate_switch" name="cate_switch" class="checkbox" value="<?php echo $zbp->Config('cattila')->cate_switch;?>"/> 开启后<span class="red">文章详情</span>页标题为：文章名称-分类名称-网站名称</p></td>
            <td><p align="left">关闭则显示：文章名称-网站名称</p></td>
        </tr>         
        <tr>
            <td><label for="index_title"><p align="center">首页标题</p></label></td>
            <td><p align="left"><textarea name="index_title" type="text" id="index_title" rows="2" style="width:98%;"><?php echo $zbp->Config('cattila')->index_title;?></textarea></p></td>
            <td><p align="left">填写网站首页标题</p></td>
        </tr> 
       
        <tr>
            <td><label for="index_keywords"><p align="center">首页关键词</p></label></td>
            <td><p align="left"><textarea name="index_keywords" type="text" id="index_keywords" rows="2" style="width:98%;"><?php echo $zbp->Config('cattila')->index_keywords;?></textarea></p></td>
            <td><p align="left">填写网站首页关键词，多个英文逗号隔开</p></td>
        </tr>
        <tr>
             <td><label for="description"><p align="center">首页描述</p></label></td>
            <td><p align="left"><textarea name="index_description" type="text" id="index_description" rows="4" style="width:98%;"><?php echo $zbp->Config('cattila')->index_description;?></textarea></p></td>
            <td><p align="left">填写网站首页描述</p></td>
        </tr> 
        <tr>
            <td><label><p align="center">图片ALT自动补全</p></label>
            <td>
            <p><input name="auto_alt_switch" type="text" value="<?php echo $zbp->Config('cattila')->auto_alt_switch;?>" class="checkbox"></p>
            <p>
                <label><input type="radio" id="auto_alt" name="auto_alt" value="1" <?php echo $zbp->Config('cattila')->auto_alt ==1 ? 'checked="checked"' : '';?>/>显示文章标题</label>
                &nbsp;&nbsp;
                <label><input type="radio" id="auto_alt2" name="auto_alt" value="2" <?php echo $zbp->Config('cattila')->auto_alt ==2 ? 'checked="checked"' : '';?>/>显示文章标题+第N张图</label>  
                &nbsp;&nbsp;
                <label><input type="radio" id="auto_alt3" name="auto_alt" value="3" <?php echo $zbp->Config('cattila')->auto_alt ==3 ? 'checked="checked"' : '';?>/>显示文章标题+第N张图+站名</label>                  
            </p>   
			</td>
            <td><p align="left">自动给图片添加alt属性为文章标题，可为站长节省时间的同时提升图片的SEO友好度</p></td>
        </tr>                        
    </table>
    <br/>
    <input name="" type="Submit" class="button" style="margin-top:10px;padding:0 auto;" value="保存"/>  <a href="javascript:;" onclick="location.reload();">刷新</a>
    </form>
<?php }if ($act == 'widget_set') { ?>
    <form id="form4" name="form4" method="post">
    <?php if (function_exists('CheckIsRefererValid')) {echo '<input type="hidden" name="csrfToken" value="' . $zbp->GetCSRFToken() . '">';}?>	    	
	<table width="100%" style='padding:0;margin:0;' cellspacing='0' cellpadding='0' class="tableBorder">
	<tr>
        <th width="15%"><p align="center">名称</p></th>
        <th width="50%"><p align="center">设置/说明</p></th>
        <th width="25%"><p align="center">开关</p></th>
	</tr>
    <tr>
        <td><label for="login_signup_switch"><p align="center">顶部注册登录开关</p></label></td>                 
        <td><p>是否开启注册：<input type="text" name="signup_switch" class="checkbox" value="<?php echo $zbp->Config('cattila')->signup_switch;?>"/>&nbsp;&nbsp;  实心：<input type="text" name="signup_solid" class="checkbox" value="<?php echo $zbp->Config('cattila')->signup_solid;?>"/></p>
        <p>是否开启登录：<input type="text" name="login_switch" class="checkbox" value="<?php echo $zbp->Config('cattila')->login_switch;?>"/>&nbsp;&nbsp;  实心：<input type="text" name="login_solid" class="checkbox" value="<?php echo $zbp->Config('cattila')->login_solid;?>"/></p></td>
        <td><p>右上角的两个按钮，默认不显示<br />建议不要只开注册 (*/ω＼*)</p></td>
        </tr>       
        <tr>
        <td><label for="login_url"><p align="center">顶部注册登录</p></label></td>                 
        <td><p><label>注册地址：<input style="width:80%;margin-bottom:5px;" type="text" name="signup_url" value="<?php echo $zbp->Config('cattila')->signup_url;?>" /></label></p>
        <p><label>登录地址：<input style="width:80%;margin-bottom:5px;" type="text" name="login_url" value="<?php echo $zbp->Config('cattila')->login_url;?>" /></label></p>
        <td></td>
    </tr>
	
	</table>

	<br/>
    <input name="" type="Submit" class="button" style="margin-top:10px;padding:0 auto;" value="保存"/>
	</form>
<?php } ?>
    </div>
<script src="./plugin/colpick.js"></script>
<script src="./plugin/lib.upload.js"></script>