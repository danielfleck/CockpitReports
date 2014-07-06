(function( jQuery,CR ) {
	CR.Cockpit = function(elemento) {
		this.__classe = 'cockpit-conteiner';
		this._elemento = elemento;
		this._dashboards = [];

		function __inicializar(obj) {
			CR.Ferramentas._definirClasse(obj._elemento, obj.__classe);
		}
		
		__inicializar( this );
	}
})( $, CR );