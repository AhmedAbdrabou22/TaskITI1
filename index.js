let s = document.querySelectorAll('.s')


s.forEach((s)=>{
    s.addEventListener('mouseover',()=>{
        s.nextElementSibling.style.display = 'block';
    })
})

s.forEach((s)=>{
    s.addEventListener('mouseout',()=>{
        s.nextElementSibling.style.display = 'none';
    })
})