배열함수
forEach : 반환값이 없다, 단순 for문과 같이 작동한다.
map : 반환값을 배열에 담아 반환한다.
filter: 조건에 충족하는(true) 아이템만 배열에 담아 반환한다.
some: 조건에 충족하는 아이템이 하나라도 있으면 true 반환, 아니면 flase.
every: 모든 배열에 아이템이 조건을 충족하면 true 반환, 아니면 false.
find : 조건에 충족하는 아이템 하나만 반환(여러개라면 첫번째것만 반환)
findIndex : 조건에 충족하는 아이템의 인덱스값 반환 (여러개라면 첫번째아이템의 인덱스번호만 반환)

//1//
let name2 = "a"
let age = 10

let person = {
    name ,
    age
}

console.log(person) //{ name: 'a, age:10 }

//2//
let person = {
    name:"noona",
    age:20
}

예전엔 let name = person.name
      let age = person['age']
      
이젠 let {name, age} = person
console.log(name, age) 