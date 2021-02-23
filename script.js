
function multable() {
    let inputNum = document.getElementById("value");
    let table = document.getElementById("table");

    if (inputNum.value.length == 0) {
        window.alert('If do you want the multiplication table, give the value.');
        
    } else {
        let n = Number(inputNum.value);
        table.innerHTML = ``;
        for(let count = 1; count<=10; count++) {
            let item = document.createElement('option');
            item.text = `${n} x ${count} = ${n*count}`;
            table.appendChild(item);
        }
    }
}

    
    