$(document).ready(function() {
	var $menus = $('.menu-vertical').find('a');
	var $panels = $('.panel-wrap').find('.panel');
	var index = 0;

	var panelCloseAnimation = {
		left: '-100%'
	};

	$panels.eq(index).addClass('visible');
	$menus.eq(index).addClass('active');

	function beforePanelAction(index) {
		var $target = $panels.eq(index);
		$target.removeClass('visible');
	}
	function beforeMenuAction(index) {
		$menus.eq(index).removeClass('active');
	}

	function afterPanelAction(index) {
		$panels.eq(index).addClass('visible');
	}
	function afterMenuAction(index) {
		$menus.eq(index).addClass('active');
	}

	$menus.click(function() {
		beforeMenuAction(index);
		beforePanelAction(index);

		index = $menus.index($(this));

		afterMenuAction(index);
		afterPanelAction(index);
	});

	var $window = window;
	var BtnEffect = {
		init : function() {
			var $targets = $('.btn--effect');
			$targets.on('click', function(e) {
				$(this).append('<span></span>');
				var $span = $(this).find('span');
				$window.setTimeout(function() {
					$span.remove();
				}, 1800);
			});
		}
	};
	BtnEffect.init();
});