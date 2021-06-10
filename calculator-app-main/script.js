const wrapper = document.getElementById('rowsContainer')
var result = document.getElementById('result')

wrapper.addEventListener('click', (event) => {
    console.log(event)
 if(event.target.localName === "button" || event.target.localName === "span"){
     isValid = true
 }
 else{
     isValid = false
 }
  
 if ( !isValid || result.innerText.length == 11 ) {
    return;
  }
  
  if (event.target.className == "reset_button"){
    result.innerHTML = ""
    return
  }

  if (event.target.className == "del_button" || event.target.innerHTML == "DEL"){
    result.innerHTML = result.innerHTML.slice(0, -1)
    return
  }

  if (event.target.className == "equals_button"){
    let formula = result.innerHTML
    let sign
    if(formula.indexOf("/") > 0){
        sign = "/"
        index = formula.indexOf("/")
    }

    if(formula.indexOf("*") > 0){
        sign = "*"
        index = formula.indexOf("*")
    }

    if(formula.indexOf("+") > 0){
        sign = "+"
        index = formula.indexOf("+")
    }

    if(formula.indexOf("-") > 0){
        sign = "-"
        index = formula.indexOf("-")
    }
    first_num = Number(formula.substring(0, index)) 
    second_num = Number(formula.substring(index+1, formula.length))
    result.innerHTML = eval(first_num + sign + second_num)
    return
  }

  else{
    result.innerHTML += event.target.innerText
  }
})