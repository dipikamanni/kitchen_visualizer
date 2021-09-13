<?php
/**
 * Plugin Name:       SCW - Kitchen Visualizer
 * Plugin URI:        https://www.stonecabinetworks.com
 * Description:       Easiest way to visualize you dream kitchen
 * Version:           1.1.0
 * Author:            SCW
 * Author URI:        https://www.stonecabinetworks.com
 * License:           GPLv2 or later
 * License URI:       http://www.gnu.org/licenses/gpl-2.0.html
 */

/**
 * Activate the plugin.
 */
// function pluginprefix_activate() { 
//     echo '23232';
// }
// register_activation_hook( __FILE__, 'pluginprefix_activate' );

// register_activation_hook( __FILE__, "SCW_plugin_activated" );
// function SCW_plugin_activated(){
// 	echo 'hihihihihih';
	add_action('wp_enqueue_scripts','scw_plugin_scripts');
// }


function scw_plugin_scripts() {
	wp_enqueue_style( 'wp-scw-plugin-style' , plugins_url( 'scw/css/plugin-style.css?time='.time() , 1.3 , __FILE__ ) );
	wp_enqueue_script( 'wp-scw-map-js' , 'https://cdnjs.cloudflare.com/ajax/libs/maphilight/1.4.0/jquery.maphilight.min.js' ,array( 'jquery' ) );
	wp_enqueue_script( 'wp-scw-plugin-js' , plugins_url( 'scw/js/script.js?time='.time() , 1.3 , __FILE__ ),array( 'jquery' ) );
}
add_shortcode('scw_kitchen_visualizer_shortcode','scw_kitchen_visualizer_shortcode_func');
function scw_kitchen_visualizer_shortcode_func(){
	// HTML PART BEFINS .....
	?>
	<body style="background-image: url(https://img.freepik.com/free-vector/stylish-hexagonal-line-pattern-background_1017-19742.jpg?size=626&ext=jpg);background-attachment: fixed;">
		<div class="page-loader" style="display: none;">
			<div class="spinner"></div>
			<div class="txt">Loading...</div>
		</div>
		<div class="first-welcome-div" id="first">
			<h1>Visualize Your Dream Kitchen in Several Easy Steps</h1>
			<button id="get_started">Get Started</button>
			<input type="hidden" id="plugin_url" value="<?php echo plugins_url(); ?>/scw/" />
		</div>
		<h2 class="sec-heading" style="display: none;">1) Please choose the shape of your kitchen</h2>
		<div class="second-welcome-div" id="second" style="display: none;">
			<button id="go_back_first">Go Back</button>
			<input type="radio" id="l-shape" name="fav_language" value="l-shape-k" style="display: none;">
			<label for="l-shape">L<span class="text-part">1) L Shaped Kitchen</span></label><br>
			<input type="radio" id="u-shape" name="fav_language" value="u-shape-k" style="display: none;">
			<label for="u-shape">U<span class="text-part">2) U Shaped Kitchen</span></label><br>
			<input type="radio" id="li-shape" name="fav_language" value="li-shape-k" style="display: none;">
			<label for="li-shape">--<span class="text-part">3) Line Shaped Kitchen</span></label>
		</div>
		<div class="shape-image" id="l-shape-k" style="display: none;">
			<button id="go_back_second">Go Back</button>
			<h2>2) Please choose the kitchen which is the most similar to yours</h2>
			<img id="1-k" src="<?php echo plugins_url(); ?>/scw/assets/l-shape/1-Kitchen.jpg" />
			<img id="2-k" src="<?php echo plugins_url(); ?>/scw/assets/l-shape/2-Kitchen.jpg" />
			<img id="3-k" src="<?php echo plugins_url(); ?>/scw/assets/l-shape/3-Kitchen.jpg" />
			<img id="4-k" src="<?php echo plugins_url(); ?>/scw/assets/l-shape/4-Kitchen.jpg" />
			<img id="5-k" src="<?php echo plugins_url(); ?>/scw/assets/l-shape/5-Kitchen.jpg" />
			<img id="6-k" src="<?php echo plugins_url(); ?>/scw/assets/l-shape/6-Kitchen.jpg" />
			<img id="7-k" src="<?php echo plugins_url(); ?>/scw/assets/l-shape/7-Kitchen.jpg" />		
		</div>
		<div class="shape-image" id="u-shape-k" style="display: none;">
			<h2>2) Please choose the kitchen which is the most similar to yours</h2>
			<img src="<?php echo plugins_url(); ?>/scw/u-shape/1-Kitchen.jpg" />
			<img src="<?php echo plugins_url(); ?>/scw/u-shape/2-Kitchen.jpg" />		
		</div>
		<div class="shape-image" id="li-shape-k" style="display: none;">
			<h2>2) Please choose the kitchen which is the most similar to yours</h2>
			<img src="<?php echo plugins_url(); ?>/scw/assets/li-shape/1-Kitchen.jpg" />
			<img src="<?php echo plugins_url(); ?>/scw/assets/li-shape/2-Kitchen.jpg" />		
		</div>
		<div class="main-dashboard" id="final-stage" style="display: none;">
			<div class="side_bar">			
				<ul>
					<button id="go_back_third">Go Back</button>
					<h3>Select from below options: </h3>
					<li id="wall-cab"><span class="plus_add">+ Wall Cabinets</li>
					<li id="base-cab"><span class="plus_add">+ Base Cabinets</li>
					<li id="counter-top"><span class="plus_add">+ Counter Tops</li>

				</ul>
			</div>
			<div class="main_image_map">
				<h2>Start Editing</h2>			
			</div>
		</div>
		<div class="exit-poup-code-wrap">    
		    <div class="popup-content-area" style="position:relative;background:#ffffff);">
			    <span class="popup_exit_close">X</span>
			    <p>Select Wall Cabinet</p>
			    <span class="cab-counter-type">Stock Line cabinets</span>
			    <img id="cabinet-1" src="<?php echo plugins_url(); ?>/scw/assets/cabinet/cabinet-1.jpg"/>
			    <span class="cab-counter-type">Frame Less Cabinets</span>
			    <img id="cabinet-2" src="<?php echo plugins_url(); ?>/scw/assets/cabinet/cabinet-2.jpg"/>
			    <span class="cab-counter-type">Custom Cabinets</span>		    
			    <img id="cabinet-3" src="<?php echo plugins_url(); ?>/scw/assets/cabinet/cabinet-3.jpg"/>
			</div>
		</div>

		<div class="exit-poup-code-wrap-base-cabinet">    
		    <div class="popup-content-area" style="position:relative;background:#ffffff);">
			    <span class="popup_exit_close">X</span>
			    <p>Select Base Cabinet</p>
			    <img id="cabinet-1" src="<?php echo plugins_url(); ?>/scw/assets/cabinet/cabinet-1.jpg"/>
			    <img id="cabinet-2" src="<?php echo plugins_url(); ?>/scw/assets/cabinet/cabinet-2.jpg"/>
			    <img id="cabinet-3" src="<?php echo plugins_url(); ?>/scw/assets/cabinet/cabinet-3.jpg"/>
			</div>
		</div>

		<div class="exit-poup-code-wrap-counter-top">    
		    <div class="popup-content-area" style="position:relative;background:#ffffff);">
			    <span class="popup_exit_close">X</span>
			    <p>Select Counter Tops</p>
			    <img id="counter-1" src="<?php echo plugins_url(); ?>/scw/assets/counter/counter-1.jpg"/>
			    <img id="counter-2" src="<?php echo plugins_url(); ?>/scw/assets/counter/counter-2.jpg"/>
			    <img id="counter-3" src="<?php echo plugins_url(); ?>/scw/assets/counter/counter-3.jpg"/>
			</div>
		</div>
	</body>
	<?php
}