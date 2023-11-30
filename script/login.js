$(document).ready(function() {
    $('#getDataButton').click(function() {
        $.ajax({
            url: '/ajax/LoginController/getSample',
            method: 'GET',
            success: function(response) {
                console.log(response);
            },
            error: function(err) {
                console.error(err);
            }
        });
    });
});