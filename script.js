let classNames = [ 'header', "menu", "menu-item", "menu-item", "menu-item", "footer", "menu", "link", "link", "link", "link", "link", "link"];

let classNamesCount = {};
let uinqClassNames = [];

 for(let i =0; i < classNames.length; i++){
     let current = classNames[i];
     if(classNames[current]){
         classNames[current]+=1;
     }else{
         classNames[current] = 1;
         uinqClassNames.push(current);
     }
 }

 let result = uinqClassNames.sort((a, b) => {
     return classNamesCount[b] - classNamesCount[a];
 });

 console.log(result);