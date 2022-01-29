

function searchPhotos() {
    var clientId = "16fhpb1Xbh6jP72FmHScpXOG1swSwLefaPnVCrqgVOU";
    var query = document.getElementById("search").value;
    var url = "https://api.unsplash.com/search/photos/?client_id=" + clientId + "&query=" + query;

    fetch(url)
        .then(function (data) {
            return data.json();
        })
        .then(function (data) {
            console.log(data);
            data.results.forEach(photo => {

                let result = `
                    <img src="${photo.urls.regular}">
                    <a href="${photo.links.download}"> 
                `;

                $("#result").html(result);
                //document.getElementById("result").innerHTML(result);

            });
        });
}