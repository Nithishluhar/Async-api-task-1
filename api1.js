
var api = fetch("https://api.openbrewerydb.org/v1/breweries");
api.then((data)=>data.json()).then((data1)=>{
   



      
    for (const i in data1) {

      var breweries = data1[i];
     console.log(data1[i],i) 
// console.log(data1[i].state);
    


 let content = document.createElement("div");
 content.innerHTML = `<div class="card   mb-3" style="max-width: 18rem;">
  <div class="card-header"> <i class="fa fa-glass"></i> ${breweries.name}</div>
  <div class="card-body">
    <h5 class="card-title"> <i class="fa fa-map-marker "></i> ${breweries.country}</h5>
    <p > <i class="fa fa-address-card"></i>Address: ${breweries.address_1}</p>
    <p> <i class="fa fa-mobile-phone"></i> Phone no-${breweries.phone}</p>
    <p> Brewery Type: ${breweries.brewery_type} </p>
    <p>City: ${breweries.city}</p>
   <i class="fa fa-link"></i><a href="${breweries.website_url }" target="_blank">Website Link</a>
     </div>
   </div>`
 document.body.append(content)
  }     
  
})



