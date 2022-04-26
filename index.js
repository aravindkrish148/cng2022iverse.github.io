async function run(){
    var user = document.getElementById('userName').value;
    var password = document.getElementById('pass').value;
    console.log(user+' '+password);
    if(user=="ak"&&password=="aravi148"){
    try {
    const response = await axios.get(`http://localhost:3000/`);

    const todoItems = response;

    console.log(`GET: Here's the list of todos`, todoItems);

    return todoItems;
    } catch (errors) {
      console.error(errors);
    }
    }else{
        alert('Please Enter Valid Credentials');
    }
}

async function run2(){
    try {
    const response = await axios.get(`http://localhost:3000/aravind`);

    const todoItems = response;

    console.log(`GET: Here's the list of todos`, todoItems);

    return todoItems;
  } catch (errors) {
    console.error(errors);
  }
}