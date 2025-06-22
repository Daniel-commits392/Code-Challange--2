// form to input name
// a submit button that add the name
//delete buton to remove the name
//should be at each guest
// limiting facor ten people 

const myVisitorName = document.getElementById('myVisitorName');
const addButton = document.getElementById('inputVisitor');
const rollList = document.getElementById('roll');
const clearList = document.getElementById('clearList');
const visitorType = document.getElementById('visitorType');

//console.log(myVisitorName);
//console.log(addButton) ;
//console.log(rollList);
//console.log( clearList);
//console.log(visitorType);

let visitorsTotal = 0;
const peoplesNames = new Set();

addButton.addEventListener('click', function() {
  const theVisitorsName = myVisitorName.value.trim();
  const type =visitorType.value;


if (theVisitorsName ==="") {
    alert("Please enter a name before submitting okay.");
    return;
  };

  if (visitorsTotal > 10) {
    alert("The guest list is full. Cannot add more guests.");
    return;
  }

  const lowerName = theVisitorsName.toLowerCase();

    if (peoplesNames.has(lowerName)) {
      alert("This name is already in the list.");
      return;
    }

    rollList.innerHTML += 
    `<li>
    ${theVisitorsName} (${type})
     <button class="deleteButton">Delete</button>
     </li>`;

    peoplesNames.add(lowerName);
    visitorsTotal++;
    myVisitorName.value = '';
    visitorType.value = 'Friend'; 
});

clearList.addEventListener('click', function() {
  rollList.innerHTML = '';
  peoplesNames.clear();
  visitorsTotal = 0;
});

rollList.addEventListener('click',function(events) {
  if (events.target.classList.contains('deleteButton')){
    const listItem = events.target.parentElement;
    const visitorName = listItem.firstChild.textContent.split(' ')[0].toLowerCase();
    
    peoplesNames.delete(visitorName);
    listItem.remove();
    visitorsTotal--;
  }
});






