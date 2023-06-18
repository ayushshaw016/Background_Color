const heading = document.getElementById('heading');
const btn = document.getElementById('btn');


btn.addEventListener('click', function(){
const  newcolor = changecolor();
document.body.style.backgroundColor = newcolor;
heading.innerHTML = newcolor;

})

function changecolor(){
    const r = Math.floor(Math.random() * 255) + 1;
    const g = Math.floor(Math.random() * 255) + 1;
    const b = Math.floor(Math.random() * 255) + 1;

    return `rgb(${r},${g},${b})`;

}