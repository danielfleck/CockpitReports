(function( jQuery,CR ) {
	CR.Cockpit = function(elemento) {
		var __classe = 'cockpit-conteiner';

		this._elemento = elemento;

		function __inicializar(__elemento) {
			CR._definirClasse(__elemento, __classe);
		}
		
		__inicializar(elemento);
	}
})( $, CR );