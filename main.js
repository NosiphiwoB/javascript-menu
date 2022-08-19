let menu =[{course:'starters',img:'./assets/canape-g238c2382b_1280.jpg', meals:[{meal: 'Cheesy Pretzel Bread ',description:'Slice pretzel rolls,melted provone,house-made ranch.erved with marinara sauce.',price:6.99},{meal: 'Chicken Wings',description:'6 wings, served with baby carrots and blue cheese dressing. Your choice of sauce: BBQ,Old Bay, or Honey Sriracha.',price:35.80},{meal: 'Cheese Curds',description:'Served with marinara sauce.',price:18.90}]},{course:'main',img:'./assets/meatloaf-g91c82bce1_1280.jpg', meals:[{meal: 'Artchoke  and Spinach Dip ',description:'Tuscan bread served with a delicious blend of spinach, and cream.',price:78.89},{meal: 'Bruschetta ',description:'Grilled country bread with tomatoes, olive oil, garlic and basil.',price:6.99},{meal: 'Fried Calamari ',description:'Breaded calamari, lightly fried in canola oil.garlic and basil.',price:6.99},{meal: 'Shrimp Scampi ',description:'Jumbo shrimp sauteed in white wine, butter and garlic.',price:6.99},]}]

let nav_select = document.querySelectorAll('.select')
console.log('select', nav_select)
nav_select.forEach((select)=>{
    select.addEventListener('click',()=>{
        let display = document.getElementById('menu');
        display.innerHTML ='';
        menu.forEach(m=>{
            if(m.course == select.innerHTML.toLowerCase()){
                m.meals.forEach(meal=>{
                    display.style.backgroundImage=`url(${m.img})`
                    display.innerHTML+=`<div >
                    <div><h2 class="menu-meal">${meal.meal}</h2><span>R${meal.price}</span></div>
                    
                    <p>${meal.description}</p>
                    
                    </div>`
                })
            }
        })
        console.log('hello',select.innerHTML)
    })
})