//-------------Global-----------------
var arrHero = ['Mr.Incredible', 'Spiderman', 'Batman', 'Ironman'];

//--------------Ajax-----------------

function displayGif() {
    var hero = $(this).attr("data-name");

   // arrHero.push(hero);

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        hero + "&api_key=dc6zaTOxFJmzC&limit=5";


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

            gifDiv.prepend(p);
            gifDiv.prepend(heroImage);
  
              $("#super").prepend(gifDiv);
            }

          });
   // console.log(hero);
    //console.log(arrHero);
    //console.log(queryURL);

  // renderButtons();
};

//-------------function to handle array--------------------
function renderButtons() {
    $("#giphyButtons").empty();

    for (var i = 0; i < arrHero.length; i++) {
        var a = $("<button>");
        // Adding a class of movie-btn to our button
        a.addClass("hero-btn");
        // Adding a data-attribute
        a.attr("data-name", arrHero[i]);
        // Providing the initial button text
        a.text(arrHero[i]);
        // Adding the button to the buttons-view div
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