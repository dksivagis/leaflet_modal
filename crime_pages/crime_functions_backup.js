var tease_filter;
var roberry_filter;
var assault_filter;
var thefts_filter;
var accident_filter;
var murder_filter;
var lightIcon;
var lightIcon1;
var lightIcon2;
var lightIcon3;
var lightIcon4;
var lightIcon5;
function generate(filter, icon_name, layers) {
for (var i = 0; i < addressPoints.length; i++) {
			var a = addressPoints[i];
			var title = a[1]+"</br>"+a[5];
			if (a[1] == filter)
			{
			var markers = L.marker(new L.LatLng(a[6], a[7]), {icon: icon_name},{ title: title });
			markers.on('mouseover', function(e) {  
			var popup = L.popup()
				.setLatLng(e.latlng) 
				.setContent(title)
				.openOn(map);
						});
			layers.addLayer(markers);
			}
		}
}

function generate_filter(filter, icon_name, layers) {
for (var i = 0; i < addressPoints.length; i++) {
			var a = addressPoints[i];
			var title = a[1]+"</br>"+a[5];
			if (a[3] == filter)
			{
			var markers = L.marker(new L.LatLng(a[6], a[7]), {icon: icon_name},{ title: title });
				markers.on('mouseover', function(e) {  
			var popup = L.popup()
				.setLatLng(e.latlng) 
				.setContent(title)
				.openOn(map);
						});
			layers.addLayer(markers);
			}
		}
}

function hideall() {
map.removeLayer(cubbon);
map.removeLayer(ashok);
map.removeLayer(SJPARK);
map.removeLayer(srnagar);
map.removeLayer(vivek);
map.removeLayer(high_grounds);
map.removeLayer(sadashiv);
map.removeLayer(seshadri);
map.removeLayer(bharathi);
map.removeLayer(byappanahalli);
map.removeLayer(jeevanabima);
map.removeLayer(hennur);

document.getElementById('teasing').checked = false;
document.getElementById('roberry').checked = false;
document.getElementById('assault').checked = false;
document.getElementById('thefts').checked = false;
document.getElementById('accident').checked = false;
document.getElementById('murder').checked = false;

map.removeLayer(roberry_filter);
map.removeLayer(tease_filter);
map.removeLayer(assault_filter);
map.removeLayer(thefts_filter);
map.removeLayer(accident_filter);
map.removeLayer(murder_filter);




}

function unhideall() {
map.addLayer(cubbon);
map.addLayer(ashok);
map.addLayer(SJPARK);
map.addLayer(srnagar);
map.addLayer(vivek);
map.addLayer(high_grounds);
map.addLayer(sadashiv);
map.addLayer(seshadri);
map.addLayer(bharathi);
map.addLayer(byappanahalli);
map.addLayer(jeevanabima);
map.addLayer(hennur);

}



function switches()
    {
      if(document.user_options.switch.checked == true)
      {
        unhideall();
      }
	  else if(document.user_options.switch.checked == false)
	  {
	  hideall();
	  }
    }

function tease_filters(filtering, chkbox_name)
    {
	if(document.getElementById(chkbox_name).checked == true)
      {
        map.removeLayer(cubbon);
		map.removeLayer(ashok);
		map.removeLayer(SJPARK);
		map.removeLayer(srnagar);
		map.removeLayer(vivek);
		map.removeLayer(high_grounds);
		map.removeLayer(sadashiv);
		map.removeLayer(seshadri);
		map.removeLayer(bharathi);
		map.removeLayer(byappanahalli);
		map.removeLayer(jeevanabima);
		map.removeLayer(hennur);
		
		tease_filter = new L.MarkerClusterGroup({	maxClusterRadius: 20,spiderfyOnMaxZoom: true, showCoverageOnHover: false, zoomToBoundsOnClick: false});
		 lightIcon = L.icon({ iconUrl: 'cubbon_police.png', iconSize: [24, 24],  popupAnchor: [4, 1]  });
		 generate_filter(filtering, lightIcon, tease_filter);
		 map.addLayer(tease_filter);
		
      }
	  else if(document.getElementById(chkbox_name).checked == false)
	 {
	  map.removeLayer(tease_filter);
	  }
	
    }
function roberry_filters(filtering, chkbox_name)
    {
	if(document.getElementById(chkbox_name).checked == true)
      {
        map.removeLayer(cubbon);
		map.removeLayer(ashok);
		map.removeLayer(SJPARK);
		map.removeLayer(srnagar);
		map.removeLayer(vivek);
		map.removeLayer(high_grounds);
		map.removeLayer(sadashiv);
		map.removeLayer(seshadri);
		map.removeLayer(bharathi);
		map.removeLayer(byappanahalli);
		map.removeLayer(jeevanabima);
		map.removeLayer(hennur);
		
		roberry_filter = new L.MarkerClusterGroup({	maxClusterRadius: 20,spiderfyOnMaxZoom: true, showCoverageOnHover: false, zoomToBoundsOnClick: false});
		 lightIcon1 = L.icon({ iconUrl: 'cubbon_police.png', iconSize: [24, 24],  popupAnchor: [4, 1]  });
		 generate_filter(filtering, lightIcon, roberry_filter);
		 map.addLayer(roberry_filter);
		
      }
	  else if(document.getElementById(chkbox_name).checked == false)
	 {
	  map.removeLayer(roberry_filter);
	  }
	
    }

function assault_filters(filtering, chkbox_name)
    {
	if(document.getElementById(chkbox_name).checked == true)
      {
        map.removeLayer(cubbon);
		map.removeLayer(ashok);
		map.removeLayer(SJPARK);
		map.removeLayer(srnagar);
		map.removeLayer(vivek);
		map.removeLayer(high_grounds);
		map.removeLayer(sadashiv);
		map.removeLayer(seshadri);
		map.removeLayer(bharathi);
		map.removeLayer(byappanahalli);
		map.removeLayer(jeevanabima);
		map.removeLayer(hennur);
		
		assault_filter = new L.MarkerClusterGroup({	maxClusterRadius: 20,spiderfyOnMaxZoom: true, showCoverageOnHover: false, zoomToBoundsOnClick: false});
		 lightIcon2 = L.icon({ iconUrl: 'cubbon_police.png', iconSize: [24, 24],  popupAnchor: [4, 1]  });
		 generate_filter(filtering, lightIcon, assault_filter);
		 map.addLayer(assault_filter);
		
      }
	  else if(document.getElementById(chkbox_name).checked == false)
	 {
	  map.removeLayer(assault_filter);
	  }
	
    }
	

	
function thefts_filters(filtering, chkbox_name)
    {
	if(document.getElementById(chkbox_name).checked == true)
      {
        map.removeLayer(cubbon);
		map.removeLayer(ashok);
		map.removeLayer(SJPARK);
		map.removeLayer(srnagar);
		map.removeLayer(vivek);
		map.removeLayer(high_grounds);
		map.removeLayer(sadashiv);
		map.removeLayer(seshadri);
		map.removeLayer(bharathi);
		map.removeLayer(byappanahalli);
		map.removeLayer(jeevanabima);
		map.removeLayer(hennur);
		
		thefts_filter = new L.MarkerClusterGroup({	maxClusterRadius: 20,spiderfyOnMaxZoom: true, showCoverageOnHover: false, zoomToBoundsOnClick: false});
		 lightIcon3 = L.icon({ iconUrl: 'cubbon_police.png', iconSize: [24, 24],  popupAnchor: [4, 1]  });
		 generate_filter(filtering, lightIcon, thefts_filter);
		 map.addLayer(thefts_filter);
		
      }
	  else if(document.getElementById(chkbox_name).checked == false)
	 {
	  map.removeLayer(thefts_filter);
	  }
	
    }
	
function accident_filters(filtering, chkbox_name)
    {
	if(document.getElementById(chkbox_name).checked == true)
      {
        map.removeLayer(cubbon);
		map.removeLayer(ashok);
		map.removeLayer(SJPARK);
		map.removeLayer(srnagar);
		map.removeLayer(vivek);
		map.removeLayer(high_grounds);
		map.removeLayer(sadashiv);
		map.removeLayer(seshadri);
		map.removeLayer(bharathi);
		map.removeLayer(byappanahalli);
		map.removeLayer(jeevanabima);
		map.removeLayer(hennur);
		
		accident_filter = new L.MarkerClusterGroup({	maxClusterRadius: 20,spiderfyOnMaxZoom: true, showCoverageOnHover: false, zoomToBoundsOnClick: false});
		 lightIcon4 = L.icon({ iconUrl: 'cubbon_police.png', iconSize: [24, 24],  popupAnchor: [4, 1]  });
		 generate_filter(filtering, lightIcon, accident_filter);
		 map.addLayer(accident_filter);
		
      }
	  else if(document.getElementById(chkbox_name).checked == false)
	 {
	  map.removeLayer(accident_filter);
	  }
	
    }
	
function murder_filters(filtering, chkbox_name)
    {
	if(document.getElementById(chkbox_name).checked == true)
      {
        map.removeLayer(cubbon);
		map.removeLayer(ashok);
		map.removeLayer(SJPARK);
		map.removeLayer(srnagar);
		map.removeLayer(vivek);
		map.removeLayer(high_grounds);
		map.removeLayer(sadashiv);
		map.removeLayer(seshadri);
		map.removeLayer(bharathi);
		map.removeLayer(byappanahalli);
		map.removeLayer(jeevanabima);
		map.removeLayer(hennur);
		
		
		murder_filter = new L.MarkerClusterGroup({	maxClusterRadius: 20,spiderfyOnMaxZoom: true, showCoverageOnHover: false, zoomToBoundsOnClick: false});
		 lightIcon5 = L.icon({ iconUrl: 'cubbon_police.png', iconSize: [24, 24],  popupAnchor: [4, 1]  });
		 generate_filter(filtering, lightIcon, murder_filter);
		 map.addLayer(murder_filter);
		
      }
	  else if(document.getElementById(chkbox_name).checked == false)
	 {
	  map.removeLayer(murder_filter);
	  }
	
    }
	
