var assetLayerGroup = new L.LayerGroup();


function generate_ps(icon_name, layers) {
for (var i = 0; i < psPoints.length; i++) {
			var a = psPoints[i];
			var title = a[1];		
			var markers = L.marker(new L.LatLng(a[3], a[2]), {icon: icon_name});
				markers.bindPopup(title);
				layers.addLayer(markers);
			
		}
}



function generate(filter, icon_name, layers) {
for (var i = 0; i < addressPoints.length; i++) {
			var a = addressPoints[i];
			var title = a[1]+"</br>"+a[5];
			if (a[1] == filter)
			{
			 if (a[4]=='Roberry'){
			 iconname = L.icon({ iconUrl: 'police_icons/blue/robbery.png', iconSize: [24, 24],  popupAnchor: [4, 1]  }) } else if (a[4]=='Assault')
			 { 
			 iconname = L.icon({ iconUrl: 'police_icons/greenish/torture.png', iconSize: [24, 24],  popupAnchor: [4, 1]  }) } else if (a[4]=='Eveteasing')
			 { 
			 iconname = L.icon({ iconUrl: 'police_icons/black/abduction.png', iconSize: [24, 24],  popupAnchor: [4, 1]  }) } else if (a[4]=='Thefts')
			 { 
			 iconname = L.icon({ iconUrl: 'police_icons/orange/theft.png', iconSize: [24, 24],  popupAnchor: [4, 1]  }) } else if (a[4]=='Murder')
			 { 
			 iconname = L.icon({ iconUrl: 'police_icons/violet/crimescene.png', iconSize: [24, 24],  popupAnchor: [4, 1]  }) } else if (a[4]=='Accident')
			 { 
			 iconname = L.icon({ iconUrl: 'police_icons/red/blast.png', iconSize: [24, 24],  popupAnchor: [4, 1]  }) }	 else
			 
			 {  iconname = L.icon({ iconUrl: 'cubbon_police.png', iconSize: [24, 24],  popupAnchor: [4, 1]  })
			 }
		
			var markers = L.marker(new L.LatLng(a[6], a[7]), {icon: iconname});
				markers.bindPopup(title);
				layers.addLayer(markers);
			 }
		}
}

function generate_filter(filter, icon_name, layers) {
for (var i = 0; i < addressPoints.length; i++) {
			var a = addressPoints[i];
			var title = a[1]+"</br>"+a[5];
			if (a[4] == filter)
				{
			 if (a[4]=='Roberry'){
			 iconname = L.icon({ iconUrl: 'police_icons/blue/robbery.png', iconSize: [24, 24],  popupAnchor: [4, 1]  }) } else if (a[4]=='Assault')
			 { 
			 iconname = L.icon({ iconUrl: 'police_icons/greenish/torture.png', iconSize: [24, 24],  popupAnchor: [4, 1]  }) } else if (a[4]=='Eveteasing')
			 { 
			 iconname = L.icon({ iconUrl: 'police_icons/black/abduction.png', iconSize: [24, 24],  popupAnchor: [4, 1]  }) } else if (a[4]=='Thefts')
			 { 
			 iconname = L.icon({ iconUrl: 'police_icons/orange/theft.png', iconSize: [24, 24],  popupAnchor: [4, 1]  }) } else if (a[4]=='Murder')
			 { 
			 iconname = L.icon({ iconUrl: 'police_icons/violet/crimescene.png', iconSize: [24, 24],  popupAnchor: [4, 1]  }) } else if (a[4]=='Accident')
			 { 
			 iconname = L.icon({ iconUrl: 'police_icons/red/blast.png', iconSize: [24, 24],  popupAnchor: [4, 1]  }) }	 else
			 
			 {  iconname = L.icon({ iconUrl: 'cubbon_police.png', iconSize: [24, 24],  popupAnchor: [4, 1]  })
			 }
		
			var markers = L.marker(new L.LatLng(a[6], a[7]), {icon: iconname});
				markers.bindPopup(title);
				layers.addLayer(markers);
			 }
		}
}



function generate_bydates(fromdates, todates, layers, iconname) {
for (var i = 0; i < addressPoints.length; i++) {

			var fdate;
			var tdate;
			var chkdate;
			iconname = L.icon({ iconUrl: 'cubbon_police.png', iconSize: [24, 24],  popupAnchor: [4, 1]  });
			var a = addressPoints[i];
			chkdate =  Date.parse(a[3]);
			
			var title = a[1]+"</br>"+a[4]+"</br>"+a[2];
			    fDate = Date.parse(fromdates);
				tDate = Date.parse(todates);
				
			 if((chkdate <= tDate && chkdate >= fDate))
			 {
			 if (a[4]=='Roberry'){
			 iconname = L.icon({ iconUrl: 'police_icons/blue/robbery.png', iconSize: [24, 24],  popupAnchor: [4, 1]  }) } else if (a[4]=='Assault')
			 { 
			 iconname = L.icon({ iconUrl: 'police_icons/greenish/torture.png', iconSize: [24, 24],  popupAnchor: [4, 1]  }) } else if (a[4]=='Eveteasing')
			 { 
			 iconname = L.icon({ iconUrl: 'police_icons/black/abduction.png', iconSize: [24, 24],  popupAnchor: [4, 1]  }) } else if (a[4]=='Thefts')
			 { 
			 iconname = L.icon({ iconUrl: 'police_icons/orange/theft.png', iconSize: [24, 24],  popupAnchor: [4, 1]  }) } else if (a[4]=='Murder')
			 { 
			 iconname = L.icon({ iconUrl: 'police_icons/violet/crimescene.png', iconSize: [24, 24],  popupAnchor: [4, 1]  }) } else if (a[4]=='Accident')
			 { 
			 iconname = L.icon({ iconUrl: 'police_icons/red/blast.png', iconSize: [24, 24],  popupAnchor: [4, 1]  }) }	 else
			 
			 {  iconname = L.icon({ iconUrl: 'cubbon_police.png', iconSize: [24, 24],  popupAnchor: [4, 1]  })
			 }
		
			var markers = L.marker(new L.LatLng(a[6], a[7]), {icon: iconname});
				markers.bindPopup(title);
				layers.addLayer(markers);
			 }
			 }
			
}






function selectyear() {
hideall();
if (document.getElementById('year_select').value == "2013") {
map.addLayer(year2013);
} else if (document.getElementById('year_select').value == "2014") {
map.addLayer(year2014);
}
}
		




function searchfor_dates(){
hideall();
assetLayerGroup.clearLayers();
var date_layer = new L.MarkerClusterGroup({	maxClusterRadius: 20,spiderfyOnMaxZoom: true, showCoverageOnHover: false, zoomToBoundsOnClick: false});
var dateIcon;
assetLayerGroup.addLayer(date_layer);
var frmdate = document.getElementById('from_datepicker').value;
var todate = document.getElementById('to_datepicker').value;
generate_bydates(frmdate, todate, date_layer, dateIcon);
assetLayerGroup.addTo(map);

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
map.removeLayer(assetLayerGroup);
map.removeLayer(year2013);
map.removeLayer(year2014);
map.removeLayer(ps);

map.removeLayer(Eveteasing);
map.removeLayer(Roberry);
map.removeLayer(Assault);
map.removeLayer(Thefts);
map.removeLayer(Accident);
map.removeLayer(Murder);

document.getElementById('teasing').checked = false;
document.getElementById('roberry').checked = false;
document.getElementById('assault').checked = false;
document.getElementById('thefts').checked = false;
document.getElementById('accident').checked = false;
document.getElementById('murder').checked = false;
}
function hide_ps(){

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
map.removeLayer(assetLayerGroup);
map.removeLayer(year2013);
map.removeLayer(year2014);

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
        hideall();
				    
    }
	
function tease_filters(){
hide_ps();
if (document.getElementById('teasing').checked == true) {
map.addLayer(Eveteasing);
} else if 
(document.getElementById('teasing').checked == false) {
map.removeLayer(Eveteasing);
}
}

function roberry_filters(){
hide_ps();
if (document.getElementById('roberry').checked == true) {
map.addLayer(Roberry);
} else if 
(document.getElementById('roberry').checked == false) {
map.removeLayer(Roberry);
}
}

function assault_filters(){
hide_ps();
if (document.getElementById('assault').checked == true) {
map.addLayer(Assault);
} else if 
(document.getElementById('assault').checked == false) {
map.removeLayer(Assault);
}
}

function thefts_filters(){
hide_ps();
if (document.getElementById('thefts').checked == true) {
map.addLayer(Thefts);
} else if 
(document.getElementById('thefts').checked == false) {
map.removeLayer(Thefts);
}
}

function accident_filters(){
hide_ps();
if (document.getElementById('accident').checked == true) {
map.addLayer(Accident);
} else if 
(document.getElementById('accident').checked == false) {
map.removeLayer(Accident);
}
}

function murder_filters(){
hide_ps();
if (document.getElementById('murder').checked == true) {
map.addLayer(Murder);
} else if 
(document.getElementById('murder').checked == false) {
map.removeLayer(Murder);
}
}



function home() {
hideall();
location.reload();
}