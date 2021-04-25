

const openBtn = document.querySelectorAll('.open-btn')
const boxCls = document.querySelectorAll('.questionDesign')
const btnIcon = document.querySelector('.open-btn i')


openBtn.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const clickedItem = e.currentTarget.parentElement.nextElementSibling
        const boxBtnIcon = e.currentTarget.firstElementChild
        clickedItem.classList.toggle('openBox')
        if (clickedItem.classList.contains('openBox')) {
            boxBtnIcon.classList.remove('fa-plus')
            boxBtnIcon.classList.add('fa-minus')
        } else {
            boxBtnIcon.classList.remove('fa-minus')
            boxBtnIcon.classList.add('fa-plus')
        }
    })
})




// boxCls.forEach(function(item){
//     if (item.classList.contains('openBox')){
//         item.classList.remove('openBox')
//     } else
// })





// const boxBtnIcon = e.currentTarget.firstElementChild
// boxCls.forEach(function(item){
//     if (item.classList.contains('openBox')){
//         item.classList.remove('openBox')
//     } else {
//         clickedItem.classList.toggle('openBox')
//     }
// })
// if (clickedItem.classList.contains('openBox')){
//     boxBtnIcon.classList.remove('fa-plus')
//     boxBtnIcon.classList.add('fa-minus')
// } else {
//     boxBtnIcon.classList.add('fa-plus')
//     boxBtnIcon.classList.remove('fa-minus') 
// }