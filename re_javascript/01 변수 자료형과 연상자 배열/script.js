// var color2 = 2
// color2 = color2 >= 1 || color2 >=3

let fruit = ["grape", "apple", "banana"]

console.log(fruit)
console.log(fruit[2])

fruit[2] = "cherry"
console.log(fruit)

fruit.pop()
console.log(fruit)
// poo():마지막에 있는 아이템을 뺌

fruit.push("applemango")
console.log(fruit)
// push():마지막에 아이템을 추가함.

console.log(fruit.includes("applemango"))
// includes:아이템이 있는지 없는지 확인

console.log(fruit.indexOf("applemango"))
// indexOf:아이템이 몇번째 아이템 인지 확인

fruit.push("banana")
console.log(fruit)


console.log(fruit.slice(0,2))
// slice:배열아이템을 잘라내는 역할 (시작점, 끝점-끝점 미포함) *기존의 배열을 건드리지 않고 새로운 배열을 만듬

fruit.splice(0,2)
console.log(fruit)
// splice:배열아이템을 잘라내는 역할 (시작점, 개수)

let extrafruit = fruit.slice(1,3)
console.log(extrafruit)

// 문제풀이
let animals= [
    "Aardvark",
    "Albatross",
    "Alligator",
    "Alpaca",
    "Ant",
    "Ape",
    "Armadillo",
    "Donkey",
    "Baboon",
    "Badger",
    "Barracuda",
    "Bat",
    "Bear",
    "Beaver",
    "Bee",
    "Bison",
    "Cat",
    "Caterpillar",
    "Cattle",
    "Chamois",
    "Cheetah",
    "Chicken",
    "Chimpanzee",
    "Chinchilla",
    "Chough",
    "Clam",
    "Cobra",
    "Cockroach",
    "Cod",
    "Cormorant",
    "Dugong",
    "Dunlin",
    "Eagle",
    "Echidna",
    "Eel",
    "Eland",
    "Elephant",
    "Elk",
    "Emu",
    "Falcon",
    "Ferret",
    "Finch",
    "Fish",
    "Flamingo",
    "Fly",
    "Fox",
    "Frog",
    "Gaur", 
    "Gazelle",
    "Gerbil",
    "Giraffe",
    "Grasshopper",
    "Heron",
    "Herring",
    "Hippopotamus",
    "Hornet",
    "Horse",
    "Kangaroo",
    "Kingfisher",
    "Koala",
    "Kookabura",
    "Moose",
    "Narwhal",
    "Newt",
    "Nightingale",
    "Octopus",
    "Okapi",
    "Opossum", 
    "Quail",
    "Quelea",
    "Quetzal",
    "Rabbit", 
    "Raccoon",
    "Rail",
    "Ram",
    "Rat",
    "Raven",
    "Red deer",
    "Sandpiper",
    "Sardine",
    "Sparrow",
    "Spider",
    "Spoonbill",
    "Squid",
    "Squirrel",
    "Starling",
    "Stingray",
    "Tiger",
    "Toad",
    "Whale",
    "Wildcat",
    "Wolf",
    "Worm",
    "Wren",
    "Yak",
    "Zebra"
]

animals.pop()
console.log(animals)

animals.push("Dog")
console.log(animals)

animals.push("Mosquito","Mouse","Mule")
console.log(animals)

console.log(animals.includes("human"))

console.log(animals.includes("Cat"))

animals[animals.indexOf("Red deer")] = "Deer"
console.log(animals)

animals.splice(animals.indexOf("Spider"),3)
console.log(animals)

animals.splice(animals.indexOf("Tiger"))
console.log(animals)

let newanimals = animals.slice(animals.indexOf("Baboon"),animals.indexOf("Bison")+1)
console.log(newanimals)
