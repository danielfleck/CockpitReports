(function( jQuery,CR ) {
	var ferramentas = {};

	ferramentas._definirClasse = function ( elemento, classe ) {
		$(elemento).addClass(classe);
	};

	ferramentas._gerarIdAleatorio = function ( key, numeroDeCaracteres ) {
		var letras = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz',
	        aleatorio = key + '-' || '',
	        tamanho = numeroDeCaracteres > 0 ? numeroDeCaracteres : 16;
	    
	    for (var i = 0; i < tamanho; i++) {
	        var rnum = Math.floor(Math.random() * letras.length);
	        aleatorio += letras.substring(rnum, rnum + 1);
	    }

	    return aleatorio;
	};
	
	CR.Ferramentas = ferramentas; 
})( $, CR ); 