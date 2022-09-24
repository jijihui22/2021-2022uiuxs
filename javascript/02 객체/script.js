let patient = {
    name : "jin",
    age : 17,
    disease : "cold"
}
console.log(patient)
console.log(patient.name)
console.log(patient["name"])
patient.name = "jk"
patient["age"] = 25
console.log(patient.name)

let patientlist = [{name : "jin",age : 14 },{name : "jk",age : 40},{name : "jhope",age : 40}]
console.log(patientlist)
console.log("첫번째 환자는:",patientlist[0])
console.log("첫번째 환자의 나이는?:",patientlist[0]["age"])
console.log("두번째 환자?:",patientlist[1].name)
