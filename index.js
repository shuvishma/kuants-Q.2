let select = document.getElementById('select') ;
let arr = [{
    id : 1 ,
    value : 'Red',
    },
    {
        id : 2,
        value : 'Orange',
    },
    {
        id : 3,
        value : 'Yellow',
    },
    {
        id : 4,
        value : 'Pink',
    }
] ;
for(let i=0; i<arr.length; i++) {
    let option = document.createElement('option') ;
    let txt = document.createTextNode(arr[i].value) ;
    option.appendChild(txt) ;
    select.insertBefore(option, select.lastChild) ;
}