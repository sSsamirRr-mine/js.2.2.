document.getElementById('menu').addEventListener('click', () => {
    document.querySelector('ul').style.display = 'flex'
})

document.getElementById('x').addEventListener('click', () => {
    document.querySelector('ul').style.display = 'none'
})

function on(nami, som) {
    let num = +prompt(`Nechta olmoqchisiz donasi ${som} so'm turadi `)


    let link = confirm(`Siz rostanham ${nami} olmoqchimisiz? hammasi bo'lib ${som * num}`)

    if (link) {
        alert("Zakazingiz qabul qilindi, zakazni kutmang u kelmiydi 🙃")
    } else {
        alert("... , bu oddiy o'yin")
    }



}