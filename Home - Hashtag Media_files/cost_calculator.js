jQuery.fn.serializeArrayAll = function(){
	var rCRLF = /\r?\n/g;
	return this.map( function() {

		// Can add propHook for "elements" to filter or add form elements
		var elements = jQuery.prop( this, "elements" );
		return elements ? jQuery.makeArray( elements ) : this;
	} )
	/*.filter( function() {
		var type = this.type;

		// Use .is(":disabled") so that fieldset[disabled] works
		return this.name && !jQuery( this ).is( ":disabled" ) &&
			rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
			( this.checked || !rcheckableType.test( type ) );
	} )*/
	.map( function( i, elem ) {
		var val = jQuery( this ).val();

		return val == null ?
			null :
			jQuery.isArray( val ) ?
				jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} ) :
				{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
	} ).get();
}
jQuery(document).ready(function($){
	//cost calculator
	$(".cost-calculator-cost-slider").each(function(){
		$(this).slider({
			range: "min",
			value: parseFloat($(this).data("value")),
			min: parseFloat($(this).data("min")),
			max: parseFloat($(this).data("max")),
			step: parseFloat($(this).data("step")),
			slide: function(event, ui){
				$("#" + $(this).data("input")).val(ui.value);
				$("." + $(this).data("input") + "-hidden").val(ui.value);
				$(this).find(".cost-slider-tooltip .cost-calculator-value").html(ui.value);
				$(this).find(".cost-slider-tooltip").css("left", "-" + Math.round(($(this).find(".cost-slider-tooltip .cost-calculator-value").outerWidth()-30)/2) + "px");
				if(typeof($(this).data("price"))!="undefined")
					$("#" + $(this).data("value-input")).val(ui.value*$(this).data("price"));
				$(".cost-calculator-summary-price").costCalculator("calculate");
			},
			change: function(event, ui){
				$("#" + $(this).data("input")).val(ui.value);
				$("." + $(this).data("input") + "-hidden").val(ui.value);
				$(this).find(".cost-slider-tooltip .cost-calculator-value").html(ui.value);
				$(this).find(".cost-slider-tooltip").css("left", "-" + Math.round(($(this).find(".cost-slider-tooltip .cost-calculator-value").outerWidth()-30)/2) + "px");
				if(typeof($(this).data("price"))!="undefined")
					$("#" + $(this).data("value-input")).val(ui.value*$(this).data("price"));
				$(".cost-calculator-summary-price").costCalculator("calculate");
			}
		}).find(".ui-slider-handle").append('<div class="cost-slider-tooltip"><div class="cost-calculator-arrow"></div><div class="cost-calculator-value">' + $(this).data("value") + '</div></div>');
		var sliderTooltip = $(this).find(".cost-slider-tooltip");
		if(sliderTooltip.is(":visible"))
			sliderTooltip.css("left", "-" + Math.round((sliderTooltip.children(".cost-calculator-value").outerWidth()-30)/2) + "px");
	});
	$(".cost-calculator-cost-slider-input").on("paste change keyup", function(){
		var self = $(this);
		if(self.attr("type")=="checkbox")
		{
			if(self.is(":checked"))
			{
				self.val(self.data("value"));
				$("." + self.attr("id")).val($("." + self.attr("id")).data("yes"));
			}
			else
			{
				self.val(0);
				$("." + self.attr("id")).val($("." + self.attr("id")).data("no"));
			}
		}
		if($("[data-input='" + self.attr("id") + "']").length)
			setTimeout(function(){
				$("[data-input='" + self.attr("id") + "']").slider("value", self.val());
			}, 500);
		else
		{
			$(".cost-calculator-summary-price").costCalculator("calculate");
		}
	});
	/*event for input will fire only when pressing enter or leaving input area
	$(".cost-calculator-cost-slider-input").on("keypress blur", function(event){
		var self = $(this);
		if(event.type=="blur" || event.which == 13)
		{
			$("[data-input='" + self.attr("id") + "']").slider("value", self.val());
		}
	});*/
	$(".cost-calculator-cost-dropdown").each(function(){
		$(this).selectmenu({
			icons: { button: "cc-template-arrow-vertical-3" },
			change: function(event, ui){
				$(".cost-calculator-summary-price").costCalculator("calculate");
				$("." + $(this).attr("id")).val(ui.item.label);
				$("." + $(this).attr("id") + "-hidden").val($(this).val());
			},
			select: function(event, ui){
				$(".cost-calculator-summary-price").costCalculator("calculate");
				$("." + $(this).attr("id")).val(ui.item.label);
				$("." + $(this).attr("id") + "-hidden").val($(this).val());
			},
			create: function(event, ui){
				$(".cost-calculator-form").each(function(){
					$(this)[0].reset();
				});
				$("#" + $(this).attr("id") + "-menu").parent().addClass("cost-calculator-dropdown").addClass("cost-calculator-dropdown-" + $(this).closest("form.cost-calculator-form").attr("id"));
				$(this).selectmenu("refresh");
				$("." + $(this).attr("id")).val($("#" + $(this).attr("id") + " option:selected").text());
			}
		});
	});
	/*$.datepicker.regional['nl'] = {clearText: 'Effacer', clearStatus: '',
		closeText: 'sluiten', closeStatus: 'Onveranderd sluiten ',
		prevText: '<vorige', prevStatus: 'Zie de vorige maand',
		nextText: 'volgende>', nextStatus: 'Zie de volgende maand',
		currentText: 'Huidige', currentStatus: 'Bekijk de huidige maand',
		monthNames: ['januari','februari','maart','april','mei','juni',
		'juli','augustus','september','oktober','november','december'],
		monthNamesShort: ['jan','feb','mrt','apr','mei','jun',
		'jul','aug','sep','okt','nov','dec'],
		monthStatus: 'Bekijk een andere maand', yearStatus: 'Bekijk nog een jaar',
		weekHeader: 'Sm', weekStatus: '',
		dayNames: ['zondag','maandag','dinsdag','woensdag','donderdag','vrijdag','zaterdag'],
		dayNamesShort: ['zo', 'ma','di','wo','do','vr','za'],
		dayNamesMin: ['zo', 'ma','di','wo','do','vr','za'],
		dayStatus: 'Gebruik DD als de eerste dag van de week', dateStatus: 'Kies DD, MM d',
		dateFormat: 'dd/mm/yy', firstDay: 1, 
		initStatus: 'Kies een datum', isRTL: false};
	$.datepicker.setDefaults($.datepicker.regional['nl']);*/
	$(".cost-calculator-cost-slider-input.type-date").each(function(){
		$(this).datepicker({
			//beforeShowDay: $.datepicker.noWeekends,
			//minDate: 0, //disable past dates use minDate: 1, to disable past dates and tomorrow
			beforeShow: function(input, inst){
				inst.dpDiv.addClass("cost-calculator-datepicker").addClass("cost-calculator-datepicker-" + $(this).closest("form.cost-calculator-form").attr("id"));
			},
			dateFormat: "DD, d MM yy",
			nextText: "",
			prevText: ""
		});
	});
	$(".cost-calculator-datepicker-container .ui-icon").on("click", function(){
		$(this).next().datepicker("show");
	});
	
	//cost calculator form
	if($("form.cost-calculator-container").length)
	{
		$("form.cost-calculator-container").each(function(){
			var self = $(this);
			self[0].reset();
			self.find("input[type='hidden']").each(function(){
				if(typeof($(this).data("default"))!="undefined")
					$(this).val($(this).data("default"));
			});
			self.find(".cost-calculator-summary-price").costCalculator("calculate");
		});
	}
	$(".prevent-submit").on("submit", function(event){
		event.preventDefault();
		return false;
	});
	//contact form
	if($(".cost-calculator-form").length)
	{
		$(".cost-calculator-form").each(function(){
			var self = $(this);
			self[0].reset();
			self.find("input[type='hidden']").each(function(){
				if(typeof($(this).data("default"))!="undefined")
					$(this).val($(this).data("default"));
			});
			self.find(".cost-calculator-summary-price").costCalculator("calculate");
			self.find(".cost-calculator-submit-form").on("click", function(event){
				event.preventDefault();
				self.submit();
			});
		});
	}
	//reset checkboxes
	$(".cost-calculator-cost-slider-input.type-checkbox").each(function(){
		var self = $(this);
		if(self.is(":checked"))
			$("." + self.attr("id")).val($("." + self.attr("id")).data("yes"));
		else
			$("." + self.attr("id")).val($("." + self.attr("id")).data("no"));
	});
	$(".cost-calculator-form:not('.prevent-submit')").on("submit", function(event){
		event.preventDefault();
		//clear placeholders
		$(".cost-calculator-contact-box input[placeholder].hint").each(function(){
			if($(this).val()==$(this).attr("placeholder"))
				$(this).val("");
		});
		var data = $(this).serializeArrayAll();
		//set placeholders
		$(".cost-calculator-contact-box input[placeholder].hint").each(function(){
			if($(this).val()=="")
				$(this).val($(this).attr("placeholder"));
		});
		var self = $(this);
		var id = $(this).attr("id");
		//set not checked checkboxes
		/*$("#"+id+" .type-checkbox:not(:checked)").each(function(){
			data.push({name: $(this).attr("name"), value: $(this).val()});
		});*/
		$("#"+id+" [name='terms']:not(:checked)").each(function(){
			data.push({name: $(this).attr("name"), value: 0});
		});
		if(parseInt($("#"+id+" [name='name']").data("required"), 10))
			data.push({name: 'name_required', value: 1});
		if(parseInt($("#"+id+" [name='email']").data("required"), 10))
			data.push({name: 'email_required', value: 1});
		if(parseInt($("#"+id+" [name='phone']").data("required"), 10))
			data.push({name: 'phone_required', value: 1});
		if(parseInt($("#"+id+" [name='message']").data("required"), 10))
			data.push({name: 'message_required', value: 1});
		//set required fields
		for(var field in data)
		{
			if(parseInt($("#"+id+" [name='" + data[field].name + "']").data("required"), 10))
			{
				data.push({name: data[field].name + '_required_field', value: 1});
				if($("#"+id+" [name='" + data[field].name + "']").is(":checkbox"))
					data.push({name: data[field].name + '_required_field_is_checkbox', value: 1});
				if(typeof($("#"+id+" [name='" + data[field].name + "']").data("required-message"))!="undefined")
					data.push({name: data[field].name + '_required_field_message', value: $("#"+id+" [name='" + data[field].name + "']").data("required-message")});
			}
		}
		$("#"+id+" .cost-calculator-block").block({
			message: false,
			overlayCSS: {
				opacity:'0.3',
				"backgroundColor": "#FFF"
			}
		});
		$("#"+id+" .cost-calculator-submit-form").off("click");
		$("#"+id+" .cost-calculator-submit-form").on("click", function(event){
			event.preventDefault();
		});
		$.ajax({
			url: cost_calculator_config.ajaxurl,
			data: data,
			type: "post",
			dataType: "json",
			success: function(json){
				$(".cost-calculator-tooltip").each(function(){
					$(this).data("qtip").destroy();
				});
				if(typeof(json.isOk)!="undefined" && json.isOk)
				{
					if(typeof(json.submit_message)!="undefined" && json.submit_message!="")
					{
						$("#"+id+" .cost-calculator-submit-form").qtip(
						{
							style: {
								classes: 'ui-tooltip-success cost-calculator-tooltip'
							},
							content: { 
								text: json.submit_message 
							},
							hide: false,
							position: { 
								my: "right center",
								at: "left center"
							}
						}).qtip('show');
						setTimeout(function(){
							$("#"+id+" [class*='cost-calculator-submit-']").qtip("api").hide();
						}, 5000);
						$("#"+id)[0].reset();
						if(typeof(grecaptcha)!="undefined")
							grecaptcha.reset();
						self.find(".cost-calculator-cost-slider-input").trigger("change");
						self.find(".cost-calculator-cost-dropdown").selectmenu("refresh");
						$("#"+id+" input[type='text'], #"+id+" textarea").trigger("focus").trigger("blur");
					}
				}
				else
				{
					if(typeof(json.submit_message)!="undefined" && json.submit_message!="")
					{
						$("#"+id+" .cost-calculator-submit-form").qtip(
						{
							style: {
								classes: 'ui-tooltip-error cost-calculator-tooltip'
							},
							content: { 
								text: json.submit_message 
							},
							position: { 
								my: "right center",
								at: "left center"
							}
						}).qtip('show');
						if(typeof(grecaptcha)!="undefined" && grecaptcha.getResponse()!="")
							grecaptcha.reset();
					}
					if(typeof(json.error_captcha)!="undefined" && json.error_captcha!="")
					{
						$("#"+id+" .g-recaptcha").qtip(
						{
							style: {
								classes: 'ui-tooltip-error cost-calculator-tooltip'
							},
							content: { 
								text: json.error_captcha 
							},
							position: { 
								my: "bottom left",
								at: "top left" 
							}
						}).qtip('show');
					}
					if(typeof(json.error_terms)!="undefined" && json.error_terms!="")
					{
						$("#"+id+" [name='terms']").qtip(
						{
							style: {
								classes: 'ui-tooltip-error cost-calculator-tooltip'
							},
							content: { 
								text: json.error_terms 
							},
							position: { 
								my: (cost_calculator_config.is_rtl ? "bottom right" : "bottom left"),
								at: (cost_calculator_config.is_rtl ? "top right" : "top left")
							}
						}).qtip('show');
					}
					for(var field in json)
					{
						if(field.indexOf("error_")==0 && field!="error_captcha" && field!="error_terms")
						{
							if($("#"+id+" [name='" + field.replace("error_", "") + "']").is("select"))
							{
								$("#"+id+" #" + $("#"+id+" [name='" + field.replace("error_", "") + "']").attr("id") + "-button").qtip(
								{
									style: {
										classes: 'ui-tooltip-error cost-calculator-tooltip'
									},
									content: { 
										text: json[field]
									},
									position: { 
										my: "bottom center",
										at: "top center" 
									}
								}).qtip('show');
							}
							else if($("#"+id+" [name='" + field.replace("error_", "") + "']").is(":checkbox"))
							{
								$("#"+id+" [for='" + $("#"+id+" [name='" + field.replace("error_", "") + "']").attr("id") + "']").last().qtip(
								{
									style: {
										classes: 'ui-tooltip-error cost-calculator-tooltip'
									},
									content: { 
										text: json[field]
									},
									position: { 
										my: "bottom center",
										at: "top center" 
									}
								}).qtip('show');
							}
							else
							{
								$("#"+id+" [name='" + field.replace("error_", "") + "']").qtip(
								{
									style: {
										classes: 'ui-tooltip-error cost-calculator-tooltip'
									},
									content: { 
										text: json[field]
									},
									position: { 
										my: "bottom center",
										at: "top center" 
									}
								}).qtip('show');
							}
						}
					}
				}
				$("#"+id+" .cost-calculator-block").unblock();
				$("#"+id+" .cost-calculator-submit-form").on("click", function(event){
					event.preventDefault();
					$("#"+id).submit();
				});
			}
		});
	});
});