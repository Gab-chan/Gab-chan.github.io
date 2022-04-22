//Start of Collection.html JS
const Evoda = ["Evoda", "Julie", "Oniichan", "Max", "Sexual", "Gay", "Lesbian", "Bisexual", "Pansexual", "Cisgender", "Asexual"];

//functions that creates all the buttons in "div1" using the global array above
function createButtons(){
    for (let i = 0; i < Evoda.length; i++) {
        let button = $("<button>");
        button.text(Evoda[i]);
        button.attr("data-Evoda", Evoda[i]);
        button.addClass("btn btn-primary btn-danger");
        button.addClass("EvodaButton");
        $("#div1").append(button);
    } 
} 
createButtons();

//Function that adds new values to the global array to create new buttons using the text barr
$(".click").on("click", function() {
    const inputText = document.getElementById("inputText").value;
    Evoda.push(inputText);
    // console.log(animes)
    // console.log("test")
    $("#div1").empty();
    createButtons();
}) 


//AJAX call that uses giphy API to add the gifs to this project
$("#div1").on("click", ".EvodaButton", function(){
    // console.log("a button was click");
    let Evoda = $(this).attr("data-Evoda");
    const queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        Evoda + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response){
        console.log(response);
        const results = response.data;
        for(let i = 0; i < results.length; i++){

            // Creating an image tag
            let image = $("<img>");

            image.attr("data-still", results[i].images.original_still.url);
            image.attr("data-original", results[i].images.original.url);

            // Giving the image tag an src attribute of a property pulled off the
            // result item
            image.attr("src", results[i].images.original_still.url);
            image.attr("src", results[i].images.original.url);
            
            $(image).on("click", function() {
                let state = $(this).attr("data-Evoda");
                if (state === "still") {
                    $(this).attr("src", $(this).attr("data-original"));
                    $(this).attr("data-Evoda", "animate");
                    } else {
                    $(this).attr("src", $(this).attr("data-still"));
                    $(this).attr("data-Evoda", "still");
                    }
                    
            })
            // Appending the paragraph and Image we created to the "#div3" div.
            $("#div3").append(image);
        }
    })
    
})

//End of collection.html JS