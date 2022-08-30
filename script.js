console.log('connecté'); 
// je selectionne et stock le formulaire 
const form =document.getElementById('form');
console.log(form);
// je selectionne et stock la tache 
const todo = document.getElementById('todo');
console.log(todo);
//je selectionne et stock list-items
const listItems = document.querySelector('.list-items');
console.log(listItems);
listItems.innerHTML=localStorage.getItem('')
// je place un espion sur le submint 
form.addEventListener ('submit',function (e) {
    // j'empêche la page de se rafraichir
    e.preventDefault();
    console.log('bouton cliqué');
    const todoValue = todo.value; 
    console.log(todoValue); 
    
    // Je crée l'élément
    let item = `
    <div class="item">
    <p>${todoValue}</p>
    <button class="btn-delete">
    <i class="fas fa-trash-alt"></i>
    </button>
    <button class="btn-archive">
    <i class="fas fa-check-circle"></i>
    </button>
    </div>
    `
    // je place item dans listItems je  met += pour cumuler les élement html 
    listItems.innerHTML+=item;
    // je stocke en local le template
    localStorage.setItem("todo",listItems.innerHTML); 

   
    // je selection et stock delete existants dans la page
    const btnDelete = document.querySelectorAll('.btn-delete'); 
   // je selectionne et stock le btn-archive existants dans la page
   const btnArchive =document.querySelectorAll('.btn-archive');
   console.log(btnArchive);


   // je fait une boucle pour agir de la même façon pour chaque élement de la liste pour delete
    btnDelete.forEach(i=> {
        console.log(btnDelete); 
        // je place un espion pour ecouté le click du btn-delete
        i.addEventListener('click',function(){
            console.log('bouton delete cliqué');
            // j'enleve l'élément parent 
            i.parentElement.remove();

        })
    })
    // je fait une boucle pour agir de la même façon pour chaque élement de la liste pour archive
    btnArchive.forEach (i=>{
        console.log(btnArchive);
         // je place un espion pour ecouté le click du btn-archive
         i.addEventListener('click',function(){
            console.log('bouton archive cliqué');
            // je selectionne l'element parent de i
            const parent =i.parentElement;
            // j'agis sur la div parent 
            parent.classList.toggle('done');
   
          
        })
        
    })
// reinitialiser le formulaire 
form.reset();
});

