// before the call
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(menu) {
    for(let key in menu) {
        if(typeof(menu[key]) == 'number') {
            menu[key] *= 2
        }
    }
}

multiplyNumeric(menu);

for(let key in menu) {
    console.log(menu[key])
}
  
//   // after the call
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };