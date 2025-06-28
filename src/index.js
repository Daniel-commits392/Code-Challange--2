

const myVisitorName = document.getElementById('myVisitorName');
const addButton = document.getElementById('inputVisitor');
const rollList = document.getElementById('roll');
const clearList = document.getElementById('clearList');
const visitorType = document.getElementById('visitorType');
const visitorForm=document.getElementById('visitorForm')


let visitorsTotal = 0;
const peoplesNames = new Set();

visitorForm.addEventListener('submit', function(event) {
  event.preventDefault();

  const theVisitorsName = myVisitorName.value.trim();
  const type =visitorType.value;


if (theVisitorsName ==="") {
    alert("Please enter a name before submitting okay.");
    return;
  };

  if (visitorsTotal >=10) {
    alert("The guest list is full. Cannot add more guests.");
    return;
  }

  const lowerName = theVisitorsName.toLowerCase();

    if (peoplesNames.has(lowerName)) {
      alert("This name is already in the list.");
      return;
    }

  const li=document.createElement('li');
  li.setAttribute('data-name', lowerName);
  
  li.innerHTML=`
  ${theVisitorsName} (${type})
  <button class ='rsvpButton'>Attending</button>
  <button class='deleteButton'>Delete</button>`;

    rollList.appendChild(li); 

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

rollList.addEventListener('click',function(event) {
  if (event.target.classList.contains('deleteButton')){
    const listItem = event.target.parentElement;
    const visitorName = listItem.getAttribute('data-name');
    peoplesNames.delete(visitorName);
    listItem.remove();
    visitorsTotal--;
  }
  if (event.target.classList.contains('rsvpButton')){
    const btn =event.target;
    btn.textContent=btn.textContent==='Attending' ? 'Not Attending' : 'Attending';
  }
});






