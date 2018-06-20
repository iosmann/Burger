$(function(){
    $(".devour-button").on("click", function(event){
        event.preventDefault();
        var id = $(this).data("id");
        // var newDevour = $(this).data("newdevour");
        console.log(id);
        
        var newDevourState = {
            devoured: true
        };

        $.ajax("/burgers/" + id, {
            type: "PUT",
            data: newDevourState
        }).then(function(){
            console.log("Changed devour to", newDevourState);
            location.reload();
            
        });
    });

    $(".create-form").on("submit", function(event){
        event.preventDefault();

        var newBurger = {
            burger_name: $("#bc").val().trim(),
            devoured: 0
        }

        $.ajax("/burgers", {
            type: "POST",
            data: newBurger
        }).then(function(){
            console.log("created new burger");
            location.reload();
        });
    });

});
