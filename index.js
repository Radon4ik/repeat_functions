function getStrings() {
  let result = '';
  let answer = true;
  
  for(let i = 0; true; i++) {
    
    if (i !== 0 && i % 3 === 0) {
      answer = confirm('Do you want to continue?');
    }

    if(!answer) {
      break;
    }

    const askValue = prompt('Enter your value', '');
    result = result + askValue;
    console.log(result);

    if (askValue === null) {
      break;
    }
  }
  
}
getStrings();
