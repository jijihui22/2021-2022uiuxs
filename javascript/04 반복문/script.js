//// for(let i = 0;i<10;i++){
////     if(i%2 == 0){
////         console.log("야홍!!",i)
////     } 
//// }
//
//// for(let i = 0;i<10;i+=2){
////     console.log("야홍!!",i)
//// }
//
//for(let i = 2;i<=9;i++){
//    for(let j = 1;j<=9;j++){
//        console.log(i+'*'+j+'='+i*j)
//    }
//}
//
//let i=2
//while(i<10){
//    console.log("while문 실행",i)
//    i++;
//}
//
//// while(buttonclick == true){
////     console.log("while문 실행",i)
////     i++;
//// }
//
//let fruit = ["grape", "banana"]
//
//for(let i = 0;i<fruit.length;i++){
//    console.log(fruit[i])
//}
//
//// let sum = 0
//// for(i = 1;i<=100;i++){
////     sum+=i
//// }
//// console.log(sum)
//
//// for(i = 1;i<=100;i+=2){
////     console.log(i)
//// }
//
//let game = 3
//for(i = 1;i<=50;i++){
//    for(j = 1;j<=50;j*=3){
//        console.log(game"짝")
//    }
//}
//console.log()
//
//// while(i%=1,2,3,5,7,9){
////     console
//// }
//
//
//function meetAt(year,month,day){
//    if(day){
//    return `${year}/${month}/${day}`
//    } else if(month){
//    return `${year}년${month}월`     
//    } else if(year){
//    return `${year}년`    
//    }
//       
//}
//
////console.log(meetAt(2022.08.22))
//
//
//function findSmallestElement(arr){
//    if(arr.length == 0){
//        return 0
//    }
//    let result = arr[0]
//    for(let i=1;i<arr.length;i++){
//       if(result < arr[i]){
//          result = arr[i]
//          }
//          return result  
//        }
//    }
//}
//
//console.log(findSmallestElement([100,200,3,0,2,1]))

//50000
//10000
//5000
//1000
//500
//100



let unit = [50000,10000,5000,1000,500,100]

function result(money){
    for(let i=0;i<unit.length;i++)
        let num = Mate.floor(money / unit[i])
            console.log(`${unit[i]}X${num}`)
            money = money - (unit[i] * num) //재할당
}
 
result(12300)



    