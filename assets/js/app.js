(function() {
	var scene = document.getElementById('scene');
	var parallax = new Parallax(scene, {
		// scalarX: 10, //レイヤーの横移動の幅
		// scalarY: 10, //レイヤーの縦移動の幅
		// frictionX: 0.2, //移動の速度 0～1
		// frictionY: 0.5, //移動の速度 0～1
		// originX: 0.5, //マウス入力の横軸初期値,デフォルト0.5
		originY: 0.8 //マウス入力の縦軸初期値,デフォルト0.5
	});
	function elemBounce($elem, startAnimation, closeAnimation, duration) {
		$elem.animate(startAnimation, duration)
			.animate(closeAnimation, duration);
		setTimeout(elemBounce, duration*2,
			$elem, startAnimation, closeAnimation,
				duration);
	}
	elemBounce(
		$('.cubicon--top'), { top : '+=10px' }, { top : '-=10px'}, 1000
	);
	elemBounce(
		$('.cubicon--bottom'), { bottom : '-=8px' }, { bottom : '+=8px'}, 1000
	);
	elemBounce(
		$('#top-back'), { left : '-=80px' }, { left : '+=80px'}, 4000
	);
})();