/*!
 * jQuery SuperCookie v1
 * 
 * https://github.com/tantau-horia/jquery-SuperCookie
 *
 * Copyright 2012, Tantau Horia
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
;(function ($, window, document, undefined) {
        //golbal option for jquery.cookie
	var globalOptions = {
		expires: 7,
		path: "/"
	};
	var methods = {};
	$.super_cookie = function (globalConfig) {
		$.extend(globalOptions, globalConfig);
		$.extend(this, methods);
		//IE console fix
		if (typeof console === "undefined" || typeof console.log === "undefined") {
			if ( !window.console ) {
				console = {};
				console.log = function() {};
			};
		};
		return this;
	};
	methods = {
		//create cookie
		create: function (name, values, config) {
			var options = $.extend({}, globalOptions, config);
			$.cookie( name, JSON.stringify(values), options );
		},
		//verify if cookie exists
		check: function (name) {
			if ( name !== null && name !== undefined ) {
				var get_mc = $.cookie(name);
				if ( get_mc === null ) {
					console.log('No cookie.');
					return false;
				};
				return true;
			} else {
				console.log('No cookie selected.');
				return false; 
			};
		},
		//verify cookie json and existence
		verify: function (name) {
			if ( name !== null && name !== undefined ) {
				var get_mc = $.cookie(name);
				if ( get_mc === null ) {
					console.log('No cookie.');
					return false;
				};
				if ( jQuery.isEmptyObject(get_mc) ) {
					console.log('Invalid values.');
					return false;
				}
				try{
					JSON.parse(get_mc);
				} catch (e) {
					console.log('Not JSON.');
					return false;
				}
				return true;
			} else {
				console.log('No cookie selected.');
				return false; 
			};
		},
		//verify index existence
		check_index: function (name, index_s) {
			var get_mc = $.super_cookie().read_JSON(name);
			var check = null;
			$.each( get_mc, function(index,value){
				if ( index_s === index ) {
					check = "ok";
				};
			});
			if ( check === null ) {
				return false;
			} else {
				return true;
			};
		},
		//read all cookie values
		read_values: function (name) {
			if ( !$.super_cookie().verify(name) ) {
				return false;
			} else {
				return $.cookie(name);
			};
		},
		//read all JSON indexes as an array
		read_indexes: function (name) {
			var get_mc = $.super_cookie().read_JSON(name);
			var check = [];
			$.each( get_mc, function(index,value){
				check.push( index );
			});
			return check;
		},
		//read cookie json
		read_JSON: function (name) {
			if ( !$.super_cookie().verify(name) ) {
				return false;
			} else {
				return JSON.parse($.cookie(name));
			
			};
		},
		//read cookie value from field
		read_value: function (name, index_s) {
			var get_mc = $.super_cookie().read_JSON(name);
			var check = null;
			$.each( get_mc, function(index,value){
				if ( index_s == index ) {
					check = value;
				};
			});
			if ( check === null ) {
				return false;
			} else {
				return check;
			};
		},
		//replace cookie value from field
		replace_value: function (name, index_s, new_value, config) {
			var get_mc = $.super_cookie().read_JSON(name);
			var check = [];
			$.each( get_mc, function(index,value){
				field = "\"" + index + "\": \"" + value + "\"";
				if ( index_s === index ) {
					field = "\"" + index + "\": \"" + new_value + "\"";
					check.push( field );
				} else {
					check.push( field );
				};
			});
			check = "{" + check.join(", ") + "}";
			var ocheck = {};
			ocheck = JSON.stringify(check);
			var options = $.extend({}, globalOptions, config);
			$.removeCookie(name);
			$.cookie( name, JSON.parse(ocheck), options );
		},
		//add cookie field and value
		add_value: function (name, new_index, new_value, config) {
			var get_mc = $.super_cookie().read_JSON(name);
			var check = [];
			$.each( get_mc, function(index,value){
				field = "\"" + index + "\": \"" + value + "\"";
				check.push( field );
			});
			check.push("\"" + new_index + "\": \"" + new_value + "\"");
			check = "{" + check.join(", ") + "}";
			var ocheck = {};
			ocheck = JSON.stringify(check);
			var options = $.extend({}, globalOptions, config);
			$.removeCookie(name);
			$.cookie( name, JSON.parse(ocheck), options );
		},
		//remove cookie field and value
		remove_value: function (name, remove_index, config) {
			var get_mc = $.super_cookie().read_JSON(name);
			var check = [];
			$.each( get_mc, function(index,value){
				field = "\"" + index + "\": \"" + value + "\"";
				if ( remove_index !== index ) {
					check.push( field );
				};
			});
			check = "{" + check.join(", ") + "}";
			var ocheck = {};
			ocheck = JSON.stringify(check);
			var options = $.extend({}, globalOptions, config);
			$.removeCookie(name);
			$.cookie( name, JSON.parse(ocheck), options );
		}
	};

 })(jQuery, document);