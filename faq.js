$(document).ready(function(){
    $('.question').click(function(event){
        event.preventDefault();
        $(this).next('.answer').slideToggle();
        $('.answer').not($(this).next('.answer')).slideUp();
    });
});