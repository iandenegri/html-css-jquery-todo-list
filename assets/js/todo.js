// Cross out to-do items by clicking
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

// Click X to delete to-do item
$("ul").on("click", "span", function(event){
    // Remove the li holding this span after a 400ms fadeout
    $(this).parent().fadeOut(400, function(){
        $(this).remove();
    });
    // Events in any parent objects will not occur after this interacting with the span.
    event.stopPropagation();
});

// Add new to-do item to list on enter press
$("input[type='text']").keypress(function(event){
    // if keypress is enter (enter val is 13) and the todo item isnt blank
    if (event.which === 13 && $(this).val() !== ""){
        // assign the current text in input to var
        let newTodo = $(this).val();
        $(this).val("");
        // create new li and add to ul
        $("ul").append('<li><span><i class="fas fa-trash"></i></span> ' + newTodo + '</li>');
    }
});

// Add the ability to toggle the text input on or off with the plus icon in the header.
$("#add-todo").click(function(){
    $("input[type='text']").fadeToggle();
})