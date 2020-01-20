
$("#bookBtn").on("click" , function(){

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

})

function changeValue(){
    var selection = $("#service").val()

    if(selection === "Doctors"){
       
        $("#specs").html("<option value='Orthopedics Specialist'>"+
        "<option value='General Physician'>"+
        "<option value='ENT Specialist'>"+
        "<option value='Dentist'>"+
        "<option value='Gynecologist'>")
    }
    else if(selection === "Therapists"){
      
       
        $("#specs").html("<option value='Child Therapist'>"+
        "<option value='Nutritional Therapist'>"+
        "<option value='Physio Therapist'>"+
        "<option value='Psychotherapist'>"+
        "<option value='Speech Therapist'>")
    }
    else if(selection === "Nurses"){
        $("#specs").html("<option value='Nurse'>")  
    }
    else{
        $("#specs").html("<option value='Babysitter'>")   
    }
}

