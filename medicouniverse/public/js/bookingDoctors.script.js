// $(document).ready(function(){

//     dt = new Date().toDateString()
//         $("#date").html(dt)
    
//         function formatAmPm(date) {
//             var hours = date.getHours();
//             var minutes = date.getMinutes();
//             var ampm = hours >= 12 ? 'pm' : 'am';
//             hours = hours % 12;
//             hours = hours ? hours : 12; 
//             minutes = minutes < 10 ? '0'+minutes : minutes;
//             var strTime = hours + ':' + minutes + ' ' + ampm;
            
//             return strTime;
//             }
//         $("#time").html(formatAmPm(new Date))

//     $(".cancelBttn").hide()
// })
    


$("#findBtn").on("click" , function(){

  
    var bookBtn = document.getElementsByClassName("bookBttn") 
    console.log(bookBtn.id)
})


function displayDt(){

    dt = new Date().toDateString()
    $("#date").html(dt)

    function formatAmPm(date) {
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'pm' : 'am';
        hours = hours % 12;
        hours = hours ? hours : 12; 
        minutes = minutes < 10 ? '0'+minutes : minutes;
        var strTime = hours + ':' + minutes + ' ' + ampm;
        
        return strTime;
        }
    $("#time").html(formatAmPm(new Date))

}








$(".bookBttn").on("click" , function(){

    $(this).closest(".bookBttn").hide()
    $(this).next(".cancelBttn").show()

  

});

$(".cancelBttn").on("click" , function(){


    $(this).closest(".cancelBttn").hide()
    $(this).prev(".bookBttn").show()
 
    

});

$('#submitDetails').on("click" , function(){

    $("#modalCenter").hide()
})







function changeValue(){
    var selection = $("#service").val()

    if(selection === "Doctors"){
       
        $("#specs").html("<option value='Orthopedics Specialist'>"+
        "<option value='General Physician'>"+
        "<option value='ENT Specialist'>"+
        "<option value='Dentist'>"+
        "<option value='Gynecologist'>")
        console.log("1")
    }
    else if(selection === "Therapists"){
        console.log("2")
       
        $("#specs").html("<option value='Child Therapist'>"+
        "<option value='Nutritional Therapist'>"+
        "<option value='Physio Therapist'>"+
        "<option value='Psychotherapist'>"+
        "<option value='Speech Therapist'>")
    }
    else if(selection === "Nurses"){
        console.log("3")
        $("#specs").html("<option value='Nurse'>")  
    }
    else{
        console.log("4")
        $("#specs").html("<option value='Babysitter'>")   
    }
}



