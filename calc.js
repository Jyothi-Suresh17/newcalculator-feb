//display number

function display(num){
  result.value+=num;
}

//clear field

function clearAll(){
  result.value='';
}


//deleting last item from input field

function delLast(){
  result.value=result.value.slice(0,-1);
}

//evaluate the expression

function evaluatEelm(){

//eval is a predefined method to evaluate our expression
  try{
    result.value=eval(result.value);
  }
  catch(error){
    result.value="error"

    setTimeout(() =>
       {result.value=''
      
    }, 1000);


  }

}