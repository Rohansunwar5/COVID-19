function updateMap() {
    fetch("/data.json")
        .then(response => response.json())
        .then(rsp => {
            console.log(rsp.data)
            rsp.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;
                fine = element.recovered;
                cases =element.infected;
                loss = element.dead;
                if(cases > 255)
                {
                    color= "rgb(212, 6, 6)";
                }

                else{
                    color = `rgb(${cases},0,0)`;
                }
                
                if(fine>50)
                {
                    color="green";
                }
                if(loss)
                {
                    color:"grey";
                }
                //mark on the map 
                new mapboxgl.Marker({
                    draggable: false,
                    color: color,
                    
                })
                    .setLngLat([longitude, latitude])
                    .addTo(map);

            });
        })
}
let interval = 20000;
setInterval(updateMap,interval)
updateMap();