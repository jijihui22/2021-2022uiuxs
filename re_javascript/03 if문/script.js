// if(조건문){
//     조건이 충족되면 할일들
// }
if(false){
    console.log("조건은 참입니다.")
}else  {
    console.log("거짓입니다.")
}

let age = 21
let licence = true

if(age>20){
    if(licence == true){
        console.log("운전이 가능합니다")
    }else{
        console.log("면혀가 필요합니다")
    }
} else{
    console.log("운전이 불가능합니다")
}

let a = 1 
let b ="1"
console.log(a==b)
console.log(a===b)

let number = -5

if(number >= 1){
    console.log("양성")
} else if (number == 0){
    console.log(0)
} else {
    console.log("음성")
}

let report = 59

if(report >= 90){
    console.log("A")
} else if (report < 90 && report > 79){
    console.log("B")
} else if (report < 80 && report > 69){
    console.log("C")
} else if (report < 70 && report > 59){
    console.log("D")
} else {
    console.log("F")
}

let skills = ["HTML","CSS","Javascript","React"]

if(skills.includes("Javascript") && skills.includes("React")){
    console.log("합격")
} else if (skills.includes("Javascript") || skills.includes("React")){
    console.log("예비")
} else {
    console.log("불합격")
}


let menu = 1

if(menu == 1){
    console.log("물건 사기")
} else if (menu == 2){
    console.log("잔고확인")
} else if (menu == 3){
    console.log("히스토리확인")
} else {
    console.log("홈으로 돌아가기")
}


// switch
switch (menu){
    case 1 :
        console.log("물건사기")
        break;
    case 2 :
        console.log{"잔고확인"}
        break;
    case 3 :
        console.log("히스토리확인")
        break;
    default :
        console.log("홈으로 돌아가기")
}

// 삼항 연산식
let menu = 2

if(menu <= 3){
    console.log("범위안")
} else {
    console.log("범위밖")
}

let answer = menu <=3?"범위안" : "범위밖"

console.log(answer)




