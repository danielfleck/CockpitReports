(function ( window ) {
	var CR =  {};
	CR._version = "1.0.0-dev";
	CR._definirClasse = function (elemento, classe) {
		$(elemento).addClass(classe);
	};
	window.CR = CR;
})( window, jQuery ); 