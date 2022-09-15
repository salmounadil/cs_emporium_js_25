import vari from './modules/recup.js'
vari.h3section3.prepend(vari.texth3section3)
vari.divsection3.prepend(vari.h3section3)
vari.section3.prepend(vari.divsection3)
// document.getElementsByTagName('body')[0].prepend(vari.section3)
//Produit 1
vari.span1product1.appendChild(vari.textspan1product1)
vari.span2product1.appendChild(vari.textspan2product1)
vari.divproduct1.appendChild(vari.imgproduct1)
vari.divproduct1.appendChild(vari.span1product1)
vari.divproduct1.appendChild(vari.span2product1)
vari.row1.appendChild(vari.divproduct1)
vari.divsection3.appendChild(vari.row1)

vari.section3.appendChild(vari.divsection3)

//Produit 2

vari.span1product2.appendChild(vari.textspan1product2)
vari.prixbarre1.appendChild(vari.textprixbarre1)
vari.prixbarre2.appendChild(vari.textprixbarre2)
vari.span2product2.appendChild(vari.prixbarre1)
vari.span2product2.appendChild(vari.textspan2product2)
vari.col7sale1.appendChild(vari.span1product2)
vari.col7sale1.appendChild(vari.span2product2)
vari.sale1.appendChild(vari.textsale1)
vari.sale2.appendChild(vari.textsale2)
vari.colsale1.appendChild(vari.sale1)
vari.etiquette1.appendChild(vari.colsale1)
vari.etiquette1.appendChild(vari.col7sale1)
vari.divproduct2.appendChild(vari.imgproduct2)
vari.divproduct2.appendChild(vari.etiquette1)
vari.row1.appendChild(vari.divproduct2)


// Produit 3 


vari.span1product3.appendChild(vari.textspan1product3)
vari.span2product3.appendChild(vari.textspan2product3)
vari.divproduct3.appendChild(vari.imgproduct3)
vari.divproduct3.appendChild(vari.span1product3)
vari.divproduct3.appendChild(vari.span2product3)
vari.row1.appendChild(vari.divproduct3)

// Produit 4

vari.span1product4.appendChild(vari.textspan1product4)
vari.span2product4.appendChild(vari.prixbarre2)
vari.span2product4.appendChild(vari.textspan2product4)
vari.col7sale2.appendChild(vari.span1product4)
vari.col7sale2.appendChild(vari.span2product4)
vari.colsale2.appendChild(vari.sale2)
vari.etiquette2.appendChild(vari.colsale2)
vari.etiquette2.appendChild(vari.col7sale2)
vari.divproduct4.appendChild(vari.imgproduct4)
vari.divproduct4.appendChild(vari.etiquette2)
vari.row2.appendChild(vari.divproduct4)

//Produit 5

vari.span1product5.appendChild(vari.textspan1product5)
vari.span2product5.appendChild(vari.textspan2product5)
vari.divproduct5.appendChild(vari.imgproduct5)
vari.divproduct5.appendChild(vari.span1product5)
vari.divproduct5.appendChild(vari.span2product5)
vari.row2.appendChild(vari.divproduct5)

//Produit 6

vari.span1product6.appendChild(vari.textspan1product6)
vari.span2product6.appendChild(vari.textspan2product6)
vari.divproduct6.appendChild(vari.imgproduct6)
vari.divproduct6.appendChild(vari.span1product6)
vari.divproduct6.appendChild(vari.span2product6)
vari.row2.appendChild(vari.divproduct6)

//Produit 7

vari.span1product7.appendChild(vari.textspan1product7)
vari.span2product7.appendChild(vari.textspan2product7)
vari.divproduct7.appendChild(vari.imgproduct7)
vari.divproduct7.appendChild(vari.span1product7)
vari.divproduct7.appendChild(vari.span2product7)
vari.row3.appendChild(vari.divproduct7)

//Produit 8

vari.span1product8.appendChild(vari.textspan1product8)
vari.span2product8.appendChild(vari.textspan2product8)
vari.divproduct8.appendChild(vari.imgproduct8)
vari.divproduct8.appendChild(vari.span1product8)
vari.divproduct8.appendChild(vari.span2product8)
vari.row3.appendChild(vari.divproduct8)

//Produit 9

vari.span1product9.appendChild(vari.textspan1product9)
vari.span2product9.appendChild(vari.textspan2product9)
vari.divproduct9.appendChild(vari.imgproduct9)
vari.divproduct9.appendChild(vari.span1product9)
vari.divproduct9.appendChild(vari.span2product9)
vari.row3.appendChild(vari.divproduct9)

vari.divsection3.appendChild(vari.row2)
vari.divsection3.appendChild(vari.row3)

vari.section3.classList.add('section3')
vari.divsection3.classList.add('container-fluid')
vari.h3section3.classList.add('text-center','m-5')
vari.row1.classList.add('row','d-flex','justify-content-center','m-4','gap-4')
vari.row2.classList.add('row','d-flex','justify-content-center','m-4','gap-4')
vari.row3.classList.add('row','d-flex','justify-content-center','m-4','gap-4')
vari.divproduct1.classList.add('col-3','divimgsection3','d-flex','justify-content-center','flex-column','align-items-center')
vari.divproduct2.classList.add('col-3','divimgsection3','d-flex','justify-content-center','flex-column','align-items-center')
vari.divproduct3.classList.add('col-3','divimgsection3','d-flex','justify-content-center','flex-column','align-items-center')
vari.divproduct4.classList.add('col-3','divimgsection3','d-flex','justify-content-center','flex-column','align-items-center')
vari.divproduct5.classList.add('col-3','divimgsection3','d-flex','justify-content-center','flex-column','align-items-center')
vari.divproduct6.classList.add('col-3','divimgsection3','d-flex','justify-content-center','flex-column','align-items-center')
vari.divproduct7.classList.add('col-3','divimgsection3','d-flex','justify-content-center','flex-column','align-items-center')
vari.divproduct8.classList.add('col-3','divimgsection3','d-flex','justify-content-center','flex-column','align-items-center')
vari.divproduct9.classList.add('col-3','divimgsection3','d-flex','justify-content-center','flex-column','align-items-center')
vari.imgproduct1.classList.add('imgsection3')

vari.imgproduct2.classList.add('imgsection3')
vari.imgproduct3.classList.add('imgsection3')
vari.imgproduct4.classList.add('imgsection3')
vari.imgproduct5.classList.add('imgsection3')
vari.imgproduct6.classList.add('imgsection3')
vari.imgproduct7.classList.add('imgsection3')
vari.imgproduct8.classList.add('imgsection3')
vari.imgproduct9.classList.add('imgsection3')

// Image qui s'agrandit

vari.imgproduct1.addEventListener('mouseover',()=>{
    vari.imgproduct1.style.transition = 'all 1s'
    vari.imgproduct1.style.transform = 'scale(1.05)'
 
})
vari.imgproduct1.addEventListener('mouseout',()=>{
    vari.imgproduct1.style.transition = 'all 1s'
    vari.imgproduct1.style.transform = 'scale(1)'
    
})
vari.imgproduct2.addEventListener('mouseover',()=>{
    vari.imgproduct2.style.transition = 'all 1s'
    vari.imgproduct2.style.transform = 'scale(1.05)'
 
})
vari.imgproduct2.addEventListener('mouseout',()=>{
    vari.imgproduct2.style.transition = 'all 1s'
    vari.imgproduct2.style.transform = 'scale(1)'
    
})

vari.imgproduct3.addEventListener('mouseover',()=>{
    vari.imgproduct3.style.transition = 'all 1s'
    vari.imgproduct3.style.transform = 'scale(1.05)'
 
})
vari.imgproduct3.addEventListener('mouseout',()=>{
    vari.imgproduct3.style.transition = 'all 1s'
    vari.imgproduct3.style.transform = 'scale(1)'
    
})
vari.imgproduct4.addEventListener('mouseover',()=>{
    vari.imgproduct4.style.transition = 'all 1s'
    vari.imgproduct4.style.transform = 'scale(1.05)'
 
})
vari.imgproduct4.addEventListener('mouseout',()=>{
    vari.imgproduct4.style.transition = 'all 1s'
    vari.imgproduct4.style.transform = 'scale(1)'
    
})
vari.imgproduct5.addEventListener('mouseover',()=>{
    vari.imgproduct5.style.transition = 'all 1s'
    vari.imgproduct5.style.transform = 'scale(1.05)'
 
})
vari.imgproduct5.addEventListener('mouseout',()=>{
    vari.imgproduct5.style.transition = 'all 1s'
    vari.imgproduct5.style.transform = 'scale(1)'
    
})
vari.imgproduct6.addEventListener('mouseover',()=>{
    vari.imgproduct6.style.transition = 'all 1s'
    vari.imgproduct6.style.transform = 'scale(1.05)'
 
})
vari.imgproduct6.addEventListener('mouseout',()=>{
    vari.imgproduct6.style.transition = 'all 1s'
    vari.imgproduct6.style.transform = 'scale(1)'
    
})

vari.imgproduct7.addEventListener('mouseover',()=>{
    vari.imgproduct7.style.transition = 'all 1s'
    vari.imgproduct7.style.transform = 'scale(1.05)'
 
})
vari.imgproduct7.addEventListener('mouseout',()=>{
    vari.imgproduct7.style.transition = 'all 1s'
    vari.imgproduct7.style.transform = 'scale(1)'
    
})

vari.imgproduct8.addEventListener('mouseover',()=>{
    vari.imgproduct8.style.transition = 'all 1s'
    vari.imgproduct8.style.transform = 'scale(1.05)'
 
})
vari.imgproduct8.addEventListener('mouseout',()=>{
    vari.imgproduct8.style.transition = 'all 1s'
    vari.imgproduct8.style.transform = 'scale(1)'
    
})
vari.imgproduct9.addEventListener('mouseover',()=>{
    vari.imgproduct9.style.transition = 'all 1s'
    vari.imgproduct9.style.transform = 'scale(1.05)'
 
})
vari.imgproduct9.addEventListener('mouseout',()=>{
    vari.imgproduct9.style.transition = 'all 1s'
    vari.imgproduct9.style.transform = 'scale(1)'
    
})




vari.span1product1.classList.add('span1','m-2','mt-2')
vari.span1product2.classList.add('span1','m-2','mt-2')
vari.span1product3.classList.add('span1','m-2','mt-2')
vari.span1product4.classList.add('span1','m-2','mt-2')
vari.span1product5.classList.add('span1','m-2','mt-2')
vari.span1product6.classList.add('span1','m-2','mt-2')
vari.span1product7.classList.add('span1','m-2','mt-2')
vari.span1product8.classList.add('span1','m-2','mt-2')
vari.span1product9.classList.add('span1','m-2','mt-2')
vari.span2product1.classList.add('span2','mb-2')
vari.span2product2.classList.add('span2','mb-2')
vari.span2product3.classList.add('span2','mb-2')
vari.span2product4.classList.add('span2','mb-2')
vari.span2product5.classList.add('span2','mb-2')
vari.span2product6.classList.add('span2','mb-2')
vari.span2product7.classList.add('span2','mb-2')
vari.span2product8.classList.add('span2','mb-2')
vari.span2product9.classList.add('span2','mb-2')
vari.sale1.classList.add('sale','d-flex','justify-content-center','align-items-center')
vari.sale2.classList.add('sale','d-flex','justify-content-center','align-items-center')
vari.colsale1.classList.add('col-5' ,'d-flex' ,'justify-content-center' ,'align-items-center')
vari.colsale2.classList.add('col-5' ,'d-flex' ,'justify-content-center' ,'align-items-center')
vari.col7sale1.classList.add('col-7','d-flex','flex-column')
vari.col7sale2.classList.add('col-7','d-flex','flex-column')
vari.etiquette1.classList.add('etiquette','d-flex')
vari.etiquette2.classList.add('etiquette','d-flex')
vari.prixbarre1.classList.add('prixbarre')
vari.prixbarre2.classList.add('prixbarre')
document.getElementsByTagName('main')[0].insertBefore(vari.section3,document.getElementsByTagName('section')[2])


// Caroussel

let div1 = document.getElementsByClassName('div1caroussel')[0]
let div2 = document.getElementsByClassName('div2caroussel')[0]
let div3 = document.getElementsByClassName('div3caroussel')[0]
let div4 = document.getElementsByClassName('div4caroussel')[0]
let puce1 = document.getElementsByClassName('puce1')[0]
let puce2 = document.getElementsByClassName('puce2')[0]
let puce3 = document.getElementsByClassName('puce3')[0]
let puce4 = document.getElementsByClassName('puce4')[0]
let divscaroussel = document.querySelectorAll('.caroussel > div')
let puces = document.querySelectorAll('.puces > div')

let i = 0

let slider = ()=>{
    if (divscaroussel[i].nextElementSibling != null) {
        divscaroussel.forEach(element => {
            element.classList.remove(('visible'))
            element.classList.add(('invisible'))
            puces.forEach(element => {
                element.classList.remove('pucebleu')
            });
        });
        divscaroussel[i].classList.remove('visible')
        divscaroussel[i].classList.add('invisible')
        puces[i].classList.remove('pucebleu')
        divscaroussel[i].nextElementSibling.classList.remove('invisible')
        divscaroussel[i].nextElementSibling.classList.add('visible')
        puces[i].nextElementSibling.classList.add('pucebleu')
    };
    if (divscaroussel[i].nextElementSibling == null) {
        divscaroussel[i].classList.remove('visible')
        divscaroussel[i].classList.add('invisible')
        puces[i].classList.remove('pucebleu')
        divscaroussel[i].parentElement.firstElementChild.classList.remove('invisible')
        divscaroussel[i].parentElement.firstElementChild.classList.add('visible')
        puces[i].parentElement.firstElementChild.classList.add('pucebleu')
        i = -1
    }
    
    i++
    
    
}

let interval = setInterval(() => {
    slider()
}, 2000);


puce1.addEventListener('click',()=>{
    puces.forEach(element => {
        element.classList.remove('pucebleu')
    });
    puce1.classList.add('pucebleu')
    divscaroussel.forEach(element => {
        element.classList.remove(('visible'))
        element.classList.add(('invisible'))
    });
    div1.classList.remove('invisible')
    div1.classList.add('visible')
    i=0
    clearInterval(interval)
    interval = setInterval(() => {
    slider()
}, 2000);
    

})
puce2.addEventListener('click',()=>{
    puces.forEach(element => {
        element.classList.remove('pucebleu')
    });
    puce2.classList.add('pucebleu')
    divscaroussel.forEach(element => {
        element.classList.remove(('visible'))
        element.classList.add(('invisible'))
    });
    div2.classList.remove('invisible')
    div2.classList.add('visible')
    i=1
   
    clearInterval(interval)
    interval = setInterval(() => {
    slider()
}, 2000);

})

puce3.addEventListener('click',()=>{
    puces.forEach(element => {
        element.classList.remove('pucebleu')
    });
    puce3.classList.add('pucebleu')
    divscaroussel.forEach(element => {
        element.classList.remove(('visible'))
        element.classList.add(('invisible'))
    });
    div3.classList.remove('invisible')
    div3.classList.add('visible')
    i=2
    clearInterval(interval)
    interval = setInterval(() => {
    slider()
}, 2000);
    

}) 


puce4.addEventListener('click',()=>{
    puces.forEach(element => {
        element.classList.remove('pucebleu')
    });
    puce4.classList.add('pucebleu')
    divscaroussel.forEach(element => {
        element.classList.remove(('visible'))
        element.classList.add(('invisible'))
    });
    div4.classList.remove('invisible')
    div4.classList.add('visible')
    i=3

   clearInterval(interval)
    interval = setInterval(() => {
    slider()
}, 2000);
    

})

// Customer

document.getElementsByClassName('customer')[0].addEventListener('mouseover',()=>{
    document.getElementsByClassName('customer')[0].style.color = 'white'
    document.getElementsByClassName('customer')[0].style.backgroundColor = '#dd4545'
    document.querySelectorAll('.customer >p')[0].style.color='white'
    document.querySelectorAll('.customer >span')[0].style.color='white'
    document.getElementsByClassName('bouton')[0].style.backgroundColor='white'
    document.getElementsByClassName('bouton')[0].style.color='#343a40'

})
document.getElementsByClassName('customer')[0].addEventListener('mouseout',()=>{
    document.getElementsByClassName('customer')[0].style.color = '#343a40'
    document.getElementsByClassName('customer')[0].style.backgroundColor = '#f3f2f3'
    document.querySelectorAll('.customer >p')[0].style.color='#b3adad'
    document.querySelectorAll('.customer >span')[0].style.color='#343a40'
    document.getElementsByClassName('bouton')[0].style.backgroundColor='#343a40'
    document.getElementsByClassName('bouton')[0].style.color='white'
})
document.getElementsByClassName('customer')[1].addEventListener('mouseover',()=>{
    document.getElementsByClassName('customer')[1].style.color = 'white'
    document.getElementsByClassName('customer')[1].style.backgroundColor = '#dd4545'
    document.querySelectorAll('.customer >p')[1].style.color='white'
    document.querySelectorAll('.customer >span')[1].style.color='white'
    document.getElementsByClassName('bouton')[1].style.backgroundColor='white'
    document.getElementsByClassName('bouton')[1].style.color='#343a40'

})
document.getElementsByClassName('customer')[1].addEventListener('mouseout',()=>{
    document.getElementsByClassName('customer')[1].style.color = '#343a40'
    document.getElementsByClassName('customer')[1].style.backgroundColor = '#f3f2f3'
    document.querySelectorAll('.customer >p')[1].style.color='#b3adad'
    document.querySelectorAll('.customer >span')[1].style.color='#343a40'
    document.getElementsByClassName('bouton')[1].style.backgroundColor='#343a40'
    document.getElementsByClassName('bouton')[1].style.color='white'
})
document.getElementsByClassName('customer')[2].addEventListener('mouseover',()=>{
    document.getElementsByClassName('customer')[2].style.color = 'white'
    document.getElementsByClassName('customer')[2].style.backgroundColor = '#dd4545'
    document.querySelectorAll('.customer >p')[2].style.color='white'
    document.querySelectorAll('.customer >span')[2].style.color='white'
    document.getElementsByClassName('bouton')[2].style.backgroundColor='white'
    document.getElementsByClassName('bouton')[2].style.color='#343a40'

})
document.getElementsByClassName('customer')[2].addEventListener('mouseout',()=>{
    document.getElementsByClassName('customer')[2].style.color = '#343a40'
    document.getElementsByClassName('customer')[2].style.backgroundColor = '#f3f2f3'
    document.querySelectorAll('.customer >p')[2].style.color='#b3adad'
    document.querySelectorAll('.customer >span')[2].style.color='#343a40'
    document.getElementsByClassName('bouton')[2].style.backgroundColor='#343a40'
    document.getElementsByClassName('bouton')[2].style.color='white'
})


// Mode nuit
let mode;
document.getElementsByClassName('modesombre')[0].addEventListener('click',()=>{
    document.getElementsByClassName('inscription')[0].classList.remove('modaljouractive')
    document.getElementsByClassName('connexion')[0].classList.remove('modaljouractive')
    document.getElementsByClassName('inscription')[0].classList.add('modalnuitactive')
    document.getElementsByClassName('connexion')[0].classList.add('modalnuitactive')
    mode = 'sombre'
    document.getElementsByTagName('body')[0].classList.remove('modejouractive')
    document.getElementsByTagName('body')[0].classList.add('modesombreactive')
    document.getElementsByClassName('barNav')[0].classList.remove('modejouractive') 
    document.getElementsByClassName('barNav')[0].classList.add('modesombreactive') 
    document.querySelectorAll(' a').forEach(element => {
        element.classList.remove('modejouractive')
        element.classList.add('modesombreactive')
    });
    document.querySelectorAll('.fonta').forEach(element => {
        element.style.color = 'black'
    });
    
})


// Mode jour

document.getElementsByClassName('modejour')[0].addEventListener('click',()=>{
    document.getElementsByClassName('inscription')[0].classList.remove('modalnuitactive')
    document.getElementsByClassName('connexion')[0].classList.remove('modalnuitactive')
    document.getElementsByClassName('inscription')[0].classList.add('modaljouractive')
    document.getElementsByClassName('connexion')[0].classList.add('modaljouractive')
    mode = 'jour'
    document.getElementsByTagName('body')[0].classList.remove('modesombreactive')
    document.getElementsByTagName('body')[0].classList.add('modejouractive')
    document.getElementsByClassName('barNav')[0].classList.remove('modesombreactive') 
    document.getElementsByClassName('barNav')[0].classList.add('modejouractive') 
    document.querySelectorAll(' a').forEach(element => {
        element.classList.remove('modesombreactive')
        element.classList.add('modejouractive')
    });
    document.querySelectorAll('.fonta').forEach(element => {
        element.style.color = 'black'
    });
    
})

// Modal Connexion

document.getElementsByClassName('boutonConnexion')[0].addEventListener('click',()=>{
//    document.classList.add('brightness')
    // document.getElementsByTagName('footer')[0].classList.add('brightness')
    // document.getElementsByTagName('header')[0].classList.add('brightness')
    // document.getElementsByTagName('main')[0].classList.add('brightness')
    document.getElementsByTagName('html')[0].classList.add('html');
    document.getElementsByClassName('connexion')[0].classList.remove('invisible')
    document.getElementsByClassName('connexion')[0].classList.add('visible')
})

document.getElementsByClassName('lieninscr')[0].addEventListener('click',()=>{
    document.getElementsByTagName('html')[0].classList.add('html');
    document.getElementsByClassName('connexion')[0].classList.remove('visible')
    document.getElementsByClassName('connexion')[0].classList.add('invisible')
    document.getElementsByClassName('inscription')[0].classList.remove('invisible')
    document.getElementsByClassName('inscription')[0].classList.add('visible')
})
document.getElementsByClassName('lienconn')[0].addEventListener('click',()=>{
    document.getElementsByTagName('html')[0].classList.add('html');
    document.getElementsByClassName('connexion')[0].classList.remove('invisible')
    document.getElementsByClassName('connexion')[0].classList.add('visible')
    document.getElementsByClassName('inscription')[0].classList.remove('visible')
    document.getElementsByClassName('inscription')[0].classList.add('invisible')
})


document.getElementsByClassName('croixi')[0].addEventListener('click',()=>{
    document.getElementsByTagName('html')[0].classList.remove('html');
    document.getElementsByClassName('inscription')[0].classList.remove('visible')
    document.getElementsByClassName('inscription')[0].classList.add('invisible')
})
document.getElementsByClassName('croixc')[0].addEventListener('click',()=>{
    document.getElementsByTagName('html')[0].classList.remove('html');
    document.getElementsByClassName('connexion')[0].classList.remove('visible')
    document.getElementsByClassName('connexion')[0].classList.add('invisible')
})

// document.getElementsByTagName('html')[0].addEventListener('click',()=>{
//     if (document.getElementsByClassName('inscription')[0].classList.contains('visible')) {
//         document.getElementsByClassName('inscription')[0].classList.remove('visible')
//         document.getElementsByClassName('inscription')[0].classList.add('invisible')
//     }
//     if (document.getElementsByClassName('connexion')[0].classList.contains('visible')) {
//         document.getElementsByClassName('connexion')[0].classList.remove('visible')
//         document.getElementsByClassName('connexion')[0].classList.add('invisible')
//     }
// })


window.addEventListener('click',(event)=>{
    if ((event.target != document.getElementsByClassName('boutonConnexion')[0])&& (event.target != document.getElementsByTagName('input')[0]) && (event.target != document.getElementsByTagName('input')[1]) && (event.target != document.getElementsByTagName('input')[2])&& (event.target != document.getElementsByTagName('input')[3]) && (event.target != document.getElementsByTagName('input')[4]) && (event.target != document.getElementsByTagName('input')[5]) && (event.target != document.getElementsByTagName('input')[6]) && (event.target != document.getElementsByTagName('input')[7]) && (event.target != document.getElementsByClassName('divcroix')[0])&& (event.target != document.getElementsByClassName('btnconect')[0]) && (event.target != document.getElementsByClassName('btnconect')[1]) && (event.target != document.getElementsByClassName('divcroix')[1]) && (event.target != document.getElementsByClassName('connexion')[0]) && (event.target != document.getElementsByClassName('inscription')[0] )&& (event.target != document.getElementsByTagName('h2')[0] ) && (event.target != document.getElementsByTagName('h2')[1] ) &&(event.target != document.getElementsByClassName('lieninscr')[0] )&& (event.target != document.getElementsByClassName('lienconn')[0] )) {
        if (document.getElementsByClassName('inscription')[0].classList.contains('visible')) {
                    document.getElementsByClassName('inscription')[0].classList.remove('visible')
                    document.getElementsByClassName('inscription')[0].classList.add('invisible')
                    document.getElementsByTagName('html')[0].classList.remove('html');
                }
                if (document.getElementsByClassName('connexion')[0].classList.contains('visible')) {
                    document.getElementsByClassName('connexion')[0].classList.remove('visible')
                    document.getElementsByClassName('connexion')[0].classList.add('invisible')
                    document.getElementsByTagName('html')[0].classList.remove('html');
                }
    };
})


// document.getElementsByTagName('header')[0].addEventListener("visibilitychange", () => {
//     if (document.getElementsByTagName('header')[0].visibilityState === 'visible') {
//       document.getElementsByClassName('barNav')[0].classList.remove('opacity')
//     } else {
//         document.getElementsByClassName('barNav')[0].classList.add('opacity')
//     }
//   });

  window.onscroll=()=>{
    document.getElementsByClassName('barNav')[0].classList.add('opacity')
  }
//   window.onscroll=()=>{
    // document.getElementsByClassName('barNav')[0].classList.remove('opacity')
//   }

document.getElementsByClassName('barNav')[0].addEventListener('mouseover',()=>{
    document.getElementsByClassName('barNav')[0].classList.remove('opacity')
})
document.getElementsByClassName('barNav')[0].addEventListener('mouseout',()=>{
    document.getElementsByClassName('barNav')[0].classList.add('opacity')
})