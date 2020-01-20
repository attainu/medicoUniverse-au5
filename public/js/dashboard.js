$(document).ready(function () {
    var userLoc;
    $("#chngPhoneBtn").click(function () {
        $.ajax({url: '/dashboard/getuserdetails',
            success: function (user) {
                if (user.password == $("#chngPassword").val()){
                    $.post('/dashboard/savephone', {phone: $("#chngPhone").val()},
                        function (data, status) {
                            $("#exampleModal").modal('hide');
                            location.href = "/dashboard/profile";
                        }
                    );
                } else {
                    $("#passwordValidText").show();
                }
                }
            }
        );
    });

    $("#chngPassword").focus(function () {
        $("#passwordValidText").fadeOut();
    })
});

