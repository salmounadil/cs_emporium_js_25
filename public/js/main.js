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
vari.span1product1.classList.add('span1','m-2','mt-3')
vari.span1product2.classList.add('span1','m-2','mt-3')
vari.span1product3.classList.add('span1','m-2','mt-3')
vari.span1product4.classList.add('span1','m-2','mt-3')
vari.span1product5.classList.add('span1','m-2','mt-3')
vari.span1product6.classList.add('span1','m-2','mt-3')
vari.span1product7.classList.add('span1','m-2','mt-3')
vari.span1product8.classList.add('span1','m-2','mt-3')
vari.span1product9.classList.add('span1','m-2','mt-3')
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
vari.divproduct1.addEventListener('click',()=>{
vari.imgproduct1.style.width ='500%'
vari.divproduct1.style.overflow ='hidden'

})


