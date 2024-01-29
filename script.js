const olcontainer = document.querySelector('#container-ol');
const notask = document.querySelector('#container-ol>h2');
const ol = document.querySelector('#container-ol>ol');
const addbtn = document.querySelector('#addtaskbtn');
const deletebtn = document.querySelector('#deletetaskbtn');

// hide notask message, make ol visible and add 1 task <li>
const addTask = () => {
    //hide notask message
    if(notask){
        notask.remove();
    }
    // makes ol visible
    if(ol.style.visibility == 'hidden'){
        ol.style.visibility = 'visible';
    }
    //adds 1 task (li) and append it to ol, also adds input text and input check with a class
    let newli = document.createElement('li');
    ol.appendChild(newli);
    let newinput = document.createElement('input');
    newli.appendChild(newinput);
    let complcheck = document.createElement('input');
    complcheck.type = "checkbox";
    complcheck.className ='checkbtns';
    newli.appendChild(complcheck);
}

//deletes each li, hides the ol when no li available and adds notask message again
const deleteTask = () => {
    //deletes the last li insine ol
    if(ol.hasChildNodes()){
        ol.lastChild.remove();
    }
    //show notask message if there is no li and hides ol
    if(!ol.hasChildNodes()){
        olcontainer.appendChild(notask);
        ol.style.visibility = 'hidden';
    }   
}

//fire the add function when clicked
addbtn.addEventListener('click', addTask);


//fire the delete function when clicked
deletebtn.addEventListener('click', deleteTask);

// adds a class to the targeted li when its checkbox is toggled on and removes it when toggled off
ol.addEventListener('change', (event) => {
if(event.target.checked){
    event.target.parentElement.classList.add('on');
    console.log(event.target.parentElement);
}
else{
    event.target.parentElement.classList.remove('on');
    console.log(event.target.parentElement);
}
})

