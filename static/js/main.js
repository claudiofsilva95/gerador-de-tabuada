function verificar(){
    event.preventDefault()
    var txtnum = document.getElementById('txtnum')
    var tab = document.getElementById('seltab')
    if(txtnum.value.length == 0){
        alert('Por favor, digite um número!')
    } else {
        var n = Number(txtnum.value)
        tab.innerHTML = ''
            for (var c = 1;c <= 10; c++){
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
    txtnum.value = ''
    txtnum.focus()
}