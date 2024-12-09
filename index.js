// splice
// let arr7  = ["I", "go", "Home"];
// delete arr[1]; // Удалить "go"
// alert(arr [1]); // undefined
// //теперь arr = ["I", , "home"];
// alert(arr.lengyh); // 3


// alert (arr7)

// let arr = ["Я", "изучаю", "JavaScript"];
// arr.splice(0 , 3); //начиная с позиции 1, удалить 1 элемент 

// alert(arr); // осталось ["Я", "JavaScript"]

// let arr3 = ["Я", "изучаю", "JavaScript"];
// const remove = arr.splice(0, 2);  //начиная с позиции 1, удалить 1 элемент 
// alert(arr); //  осталось ["Я", "JavaScript"]
// alert(remove)


// slice  копирует элементы 
// let arr = ["t", "e", "s", "t"];
// alert (arr.slice(1, 3) ); // e, s (копирует с 1 до 3)
// alert(arr.slice(-2) ); // s,t (копирует с -2 до конца)

// IndexsOF//LastIndexOF и  Includes
// let arr8 = ["abc", "a", "b", "c",   1,2, true, 0 ]
// let arr8 = [1, 0 false ];
// alert (arr8.indexOf("a") ); 1
// alert (arr8.indexOf(false ));// -1 так как он не нашел такой  элемент 
// alert (arr8.indexOf(true));
// alert (arr8.includes("c")); // если содержиться такой элемент то true  иначе false 

// sort(fn)
// const months = [ "March", "Jan", "Feb", "Dec"];
// months.sort();
// console.log(months);


  
// let arr = [ 1, 2, 15 ];
// // метод сортирует содержимое arr
// arr.sort();
// alert( arr );  // 1, 15, 2
 
// "a" > "b"



function compare(a, b) {
	if (a > b) return 1; // если первое значение больше второго
	if (a == b) return 0; // если равны
	if (a < b) return -1; // если первое значение меньше второго
}







