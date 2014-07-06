(function( jQuery, CR ) {
	var dashboard = function( opcoes ) {
		var __nomeDoConstrutor = 'Dashboard';
		this._id = typeof opcoes.id === "string" ? opcoes.id : CR.Ferramentas._gerarIdAleatorio( __nomeDoConstrutor );

		function __inicializar( obj ) {
			
		}
		
		__inicializar( this );
	};
	CR.Dashboard = dashboard;
})( $, CR );