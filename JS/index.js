//disable button if input is blank

const formInput = document.querySelector("#formLink");
const formBtn = document.querySelector("#formBtn");
const convertedBtn = document.querySelector("#ConvertBtn");

formInput.addEventListener('input', trackText);

function trackText(){
    let formInputValue = document.querySelector("#formLink").value;
    
        if(formInputValue.length > 0){
            formBtn.classList.remove("disabled");
        }
        else{
            formBtn.classList.add("disabled");
        }   
}
// form button click event
formBtn.addEventListener('click', formBtnClicked);

function formBtnClicked(){
    //url validation for https://forms.office.com
    let formInputValue = document.querySelector("#formLink").value;
    let n = formInputValue.startsWith("https://forms.office.com/Pages/ResponsePage.aspx");
    let x = formInputValue.endsWith("&lang=he-IL");
    if(n === false){
        //alert("יש להזין כתובת נכונה של טופס");
        Materialize.toast("יש להזין כתובת נכונה של טופס",4000);
    }
    else if(x===true){
        Materialize.toast("לא לשגע אותי...כבר המרתי לך את הטופס :)",4000);
    }
    else{
    //add suffix to url
    let hebrewSuffix = "&lang=he-IL";
    let fullUrl = formInputValue + hebrewSuffix;
    //hide the form button
    document.querySelector("#formBtn").classList.add("hide");
    //display progress div
    document.querySelector("#progressRow").classList.remove("hide");
    //hide progress div | expose button div after 2 seconds
        setTimeout(function(){
            document.querySelector("#progressRow").classList.add("hide");
            document.querySelector("#ConvertBtnRow").classList.remove("hide");
            document.querySelector("#ConvertBtn").setAttribute("href", fullUrl);
        }, 2000);
    }
    
} 
// converted btn click event | refresh page
convertedBtn.addEventListener('click', function(){
    location.reload();
});
//trigger for modal dialog - jquery 
$('#modal1').modal();