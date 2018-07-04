(function(){
  const inputName = document.getElementById('name');
  const inputNewBuys = document.getElementById('new-buys');
  const inputIncrementBuys = document.getElementById('increment-buys');
  const inputVisits = document.getElementById('visits');
  const inputUsers = document.getElementById('users');
  const inputDate = document.getElementById('date');
  const button = document.getElementById('button');
  const containerCards = document.getElementById('cards');
  const option1 = document.getElementById('option1');
  const option2 = document.getElementById('option2');

  inputName.addEventListener('input', function(){
    var name = inputName.value;
    button.addEventListener('click', function(){
      containerCards.disabled = false;
      containerCards.innerHTML = `<div class="card"><p>${name}</p></div>`;
  
    });
   
  });

  inputNewBuys.addEventListener('input', function(){
    var newBuy = inputNewBuys.value;
    button.addEventListener('click', function(){
      containerCards.innerHTML = `<div class="card"><p>${newBuy}</p></div>`;
  
    })
    
  });

  inputIncrementBuys.addEventListener('input', function(){
    var incrementBuy = inputIncrementBuys.value;
    button.addEventListener('click', function(){
      containerCards.innerHTML = `<div class="card"><p>${incrementBuy}</p></div>`;
  
    })
    
  });

  inputVisits.addEventListener('input', function(){
    var visit = inputVisits.value;
    button.addEventListener('click', function(){
      containerCards.innerHTML = `<div class="card"><p>${visit}</p></div>`;
    })
    
  });

  inputUsers.addEventListener('input', function(){
    var user = inputUsers.value;
    button.addEventListener('click', function(){
      containerCards.innerHTML = `<div class="card"><p>${user}</p></div>`;
    })
    
    
  });

  inputDate.addEventListener('input', function(){
    var date = inputDate.value;
    button.addEventListener('click', function(){
      containerCards.innerHTML = `<div><p>${date}</p></div>`;
    })
  
    
  });

  option1.addEventListener('click' , function(){
    containerCards.disabled = true;
    console.log(option1);
  });

  option2.addEventListener('click' , function(){
    containerCards.disabled = false;
    console.log(option2);
  })

})();