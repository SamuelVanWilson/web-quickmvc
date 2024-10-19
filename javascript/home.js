const sectionFeatures = document.querySelectorAll('#features>section')
const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry =>{
        if (entry.isIntersecting) {
            entry.target.classList.add('animation-slide-to-right')
        }
    })
}, {threshold: .15,
});

document.addEventListener('DOMContentLoaded',function () {
    sectionFeatures.forEach(element => {
        observer.observe(element)
    })
})