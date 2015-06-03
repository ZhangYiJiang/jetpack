/* global google */
/* jshint unused:false */
if (jQuery) {
	jQuery( document ).ready(function( $ ) {
		$('div.contact-map').each( function(){
			// get lat and lon from hidden input values
			var lat = $( this ).find( '.contact-info-map-lat' ).val(),
				lon = $( this ).find( '.contact-info-map-lon' ).val(),
				lat_lon = new google.maps.LatLng( lat, lon ),
				mapOptions = {
					zoom: 16,
					center: lat_lon,
					mapTypeId: google.maps.MapTypeId.ROADMAP
				},
				map = new google.maps.Map( $( this ).find( '.contact-info-map-canvas' )[0], mapOptions ),
				marker = new google.maps.Marker( {
					map: map,
					position: lat_lon
				} );
				
		} );
	} );
}
