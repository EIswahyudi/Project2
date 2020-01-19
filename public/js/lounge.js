
//CLICK HANDLER
$("#submitbutton").on("click", function (event) {
    event.preventDefault();
    var searchVal = $("#addMusic").val();
    console.log(searchVal);
    getSong(searchVal);
})
//GET SONG DATA USING SEARCH VARIABLE
function getSong(searchVal) {

    var queryParams = searchVal;
    console.log("queryParams: " + queryParams);
    var queryURL = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${queryParams}`;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.data[0].album.id);
        
        //GET THE ALBUM ID FROM THE API CALL
        var id = response.data[0].album.id;

        //APPEND THE PLAYER WITH ID OF ALBUM SET FROM THE USER INPUT
        var player = $("#nowPlaying");
        var playerhtml = $(`<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&playing=true&width=700&height=350&color=ff0000&layout=dark&size=medium&type=album&id=${id}&app_id=1&current_song_index=0&current_song_time=4&autoplay=true&playing=true" width="%100" height="%100"></iframe>`);
        player.html(playerhtml);

        //APPEND ENTRIES BELOW SEARCH
        $('#playlist').append($('<li>' + '<i class="fas fa-thumbs-up"></i>').text(queryParams));
    })
}


//DEFAULT ALBUMS FOR EACH LOUNGE
//ROCK
function getSongDefaultRock(searchVal) {

    var queryParams = "soundgarden";
    console.log("queryParams: " + queryParams);
    var queryURL = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${queryParams}`;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.data[0].album.id);
        
        //GET THE ALBUM ID FROM THE API CALL
        var id = response.data[0].album.id;

        //APPEND THE PLAYER WITH ID OF ALBUM SET FROM THE USER INPUT
        var player = $("#nowPlaying");
        var playerhtml = $(`<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&playing=true&width=700&height=350&color=ff0000&layout=dark&size=medium&type=album&id=${id}&app_id=1&current_song_index=0&current_song_time=4&autoplay=true&playing=true" width="%100" height="%100"></iframe>`);
        player.html(playerhtml);

        //APPEND ENTRIES BELOW SEARCH
        // $('#playlist').append($('<li>' + '<i class="fas fa-thumbs-up"></i>').text(queryParams));
    })
}
//KPOP
function getSongDefaultKpop(searchVal) {

    var queryParams = "bts";
    console.log("queryParams: " + queryParams);
    var queryURL = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${queryParams}`;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.data[0].album.id);
        
        //GET THE ALBUM ID FROM THE API CALL
        var id = response.data[0].album.id;

        //APPEND THE PLAYER WITH ID OF ALBUM SET FROM THE USER INPUT
        var player = $("#nowPlaying");
        var playerhtml = $(`<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&playing=true&width=700&height=350&color=ff0000&layout=dark&size=medium&type=album&id=${id}&app_id=1&current_song_index=0&current_song_time=4&autoplay=true&playing=true" width="%100" height="%100"></iframe>`);
        player.html(playerhtml);

        //APPEND ENTRIES BELOW SEARCH
        // $('#playlist').append($('<li>' + '<i class="fas fa-thumbs-up"></i>').text(queryParams));
    })
}
//HIP HOP
function getSongDefaultHiphop(searchVal) {

    var queryParams = "mobb deep";
    console.log("queryParams: " + queryParams);
    var queryURL = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${queryParams}`;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.data[0].album.id);
        
        //GET THE ALBUM ID FROM THE API CALL
        var id = response.data[0].album.id;

        //APPEND THE PLAYER WITH ID OF ALBUM SET FROM THE USER INPUT
        var player = $("#nowPlaying");
        var playerhtml = $(`<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&playing=true&width=700&height=350&color=ff0000&layout=dark&size=medium&type=album&id=${id}&app_id=1&current_song_index=0&current_song_time=4&autoplay=true&playing=true" width="%100" height="%100"></iframe>`);
        player.html(playerhtml);

        //APPEND ENTRIES BELOW SEARCH
        // $('#playlist').append($('<li>' + '<i class="fas fa-thumbs-up"></i>').text(queryParams));
    })
}
//EMD
function getSongDefaultEmd(searchVal) {

    var queryParams = "daft punk";
    console.log("queryParams: " + queryParams);
    var queryURL = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${queryParams}`;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.data[0].album.id);
        
        //GET THE ALBUM ID FROM THE API CALL
        var id = response.data[0].album.id;

        //APPEND THE PLAYER WITH ID OF ALBUM SET FROM THE USER INPUT
        var player = $("#nowPlaying");
        var playerhtml = $(`<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&playing=true&width=700&height=350&color=ff0000&layout=dark&size=medium&type=album&id=${id}&app_id=1&current_song_index=0&current_song_time=4&autoplay=true&playing=true" width="%100" height="%100"></iframe>`);
        player.html(playerhtml);

        //APPEND ENTRIES BELOW SEARCH
        // $('#playlist').append($('<li>' + '<i class="fas fa-thumbs-up"></i>').text(queryParams));
    })
}
//JAZZ
function getSongDefaultJazz(searchVal) {

    var queryParams = "michael bolton";
    console.log("queryParams: " + queryParams);
    var queryURL = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${queryParams}`;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.data[0].album.id);
        
        //GET THE ALBUM ID FROM THE API CALL
        var id = response.data[0].album.id;

        //APPEND THE PLAYER WITH ID OF ALBUM SET FROM THE USER INPUT
        var player = $("#nowPlaying");
        var playerhtml = $(`<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&playing=true&width=700&height=350&color=ff0000&layout=dark&size=medium&type=album&id=${id}&app_id=1&current_song_index=0&current_song_time=4&autoplay=true&playing=true" width="%100" height="%100"></iframe>`);
        player.html(playerhtml);

        //APPEND ENTRIES BELOW SEARCH
        // $('#playlist').append($('<li>' + '<i class="fas fa-thumbs-up"></i>').text(queryParams));
    })
}
//CLASSICAL
function getSongDefaultClassical(searchVal) {

    var queryParams = "Wolfgang Amadeus Mozart";
    console.log("queryParams: " + queryParams);
    var queryURL = `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=${queryParams}`;
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.data[0].album.id);
        
        //GET THE ALBUM ID FROM THE API CALL
        var id = response.data[0].album.id;

        //APPEND THE PLAYER WITH ID OF ALBUM SET FROM THE USER INPUT
        var player = $("#nowPlaying");
        var playerhtml = $(`<iframe scrolling="no" frameborder="0" allowTransparency="true" src="https://www.deezer.com/plugins/player?format=classic&autoplay=true&playlist=true&playing=true&width=700&height=350&color=ff0000&layout=dark&size=medium&type=album&id=${id}&app_id=1&current_song_index=0&current_song_time=4&autoplay=true&playing=true" width="%100" height="%100"></iframe>`);
        player.html(playerhtml);

        //APPEND ENTRIES BELOW SEARCH
        // $('#playlist').append($('<li>' + '<i class="fas fa-thumbs-up"></i>').text(queryParams));
    })
}