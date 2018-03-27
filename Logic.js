//-------------Global-----------------
var arrHero = ['Mr.Incredible', 'Spiderman', 'Batman', 'Ironman','Green Ranger'];

//--------------Ajax-----------------

function displayGif() {
    var hero = $(this).attr("data-name");


    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        hero + "&api_key=dc6zaTOxFJmzC&limit=3";


        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
        
        console.log(response);

        var results = response.data

        for (var i = 0; i < results.length; i++) {
            var gifDiv = $("<div class='item'>");

            var p = $("<p>").text("Rating: " + rating);

            console.log(results);

            var rating = results[i].rating;         

            var heroImage = $("<img>");
            heroImage.attr("src", results[i].images.fixed_height.url);
            heroImage.addClass("gif")
            heroImage.attr("data-animate", results[i].images.fixed_height.url)
            heroImage.attr("data-still", results[i].images.fixed_height.url)
            heroImage.attr("data-state","still",results[i].images.fixed_height.url)

            
            $(".gif").on("click", function() {
   
                var state = $(this).attr("data-state");
                console.log(state);
                
                if(state === "still"){
                $(this).attr("src", $(this).attr("data-animate"));
                $(this).attr("data-state", "animate");
                } else {
                $(this).attr("src", $(this).attr("data-still"));
                $(this).attr("data-state", "still");
                }
                
                });

            
            gifDiv.prepend(p);
            gifDiv.prepend(heroImage);
  
              $("#super").prepend(gifDiv);
            }

          });

};

//-------------function to handle array--------------------
function renderButtons() {
    $("#giphyButtons").empty();

    for (var i = 0; i < arrHero.length; i++) {
        var a = $("<button>");
        a.addClass("hero-btn");
        a.attr("data-name", arrHero[i]);
        a.text(arrHero[i]);
        $("#giphyButtons").append(a);
        }
}
// --------On Click Event for button----------------
$("#addSuper").on("click", function(event) {
  event.preventDefault();

    var hero = $("#super-input").val().trim();

    arrHero.push(hero);

    renderButtons();
});



$(document).on("click", ".hero-btn", displayGif);

      // Calling the renderButtons function to display the intial buttons
      renderButtons();
