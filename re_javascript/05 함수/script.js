// function makeburger(type,size,num){
//     console.log("메뉴는?",type)
//     console.log("빵두기")
//     console.log("상추두기")

//     if(type == "불고기"){
//         console.log("고기패티두기")
//     } else if(type == "새우"){
//         console.log("새우패티두기")
//     }
//     console.log("뚜껑덮기")
//     console.log(type,"버거",size,"사이즈",num,"개 준비완료")

//     return "완료되었습니다."
// }

// function servecoke(){
//     console.log("콜라통 선택")
//     console.log("얼음담기")
//     console.log("콜라담기")
// }

// function servefrenchfries(){
//     console.log("감튀박스선택")
//     console.log("감튀담기")
// }

// let result = makeburger("불고기","L",2)
// console.log("버거 프로세스",result)

// function makeset(){
//     makeburger("새우","m","2")
//     servecoke()
//     servefrenchfries()
// }

// makeset()

function greet(name){
    if(name  ==  "제시카"){
    console.log("안녕 내 이름은 제시카야")
    } else if(name == "수정"){
        console.log("안녕 내 이름은 수정이야")
    } else if(name == "할리"){
        console.log("안녕 내 이름은 할리야")
    }
}

greet("할리")

function meetAt(year,month,date){
    if(year && month && date){
        return `${month}/${month}/${date}`
    } else if(year && month){
        return `${year}년 ${month}월`
    } else if(year){
        return `${year}년`
    }
}

function meetAt(year,month,date){
    if(date){
        return `${month}/${month}/${date}`
    } else if(month){
        return `${year}년 ${month}월`
    } else if(year){
        return `${year}년`
    }
}

console.log(meetAt(2022,1,7))

