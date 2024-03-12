let vals=document.querySelectorAll('.button');
let input=document.querySelector('input');
let display="";
vals.forEach((btn1)=>{
    btn1.addEventListener('click',(e)=>{
      // console.log(e.target);
       if(e.target.innerHTML=='=')
       {
        try
            {
            display=eval(display);
            input.value=display; 
            }
        catch
            {
            display=""
            input.value="Error!.."; 
            }
       }
       else if(e.target.innerHTML=='AC')
       {
        display =""; 
        input.value=display; 
       }
       else if(e.target.innerHTML=='De')
       {
        if(input.value!="")
        {
         display=input.value;
        }
            display = display.slice(0, -1);
            input.value=display;
        // input.value=input.value.slice(0,-1);
        // display=input.value;
       }
       else
       { 
        if(input.value=='undefined'||input.value=='Infinity'||input.value=="Error!.."||input.value=="NaN")
        {
            display="";
            input.value=display; 
        }
        display=display + e.target.innerHTML;
        input.value=display; 
       }
    })
});