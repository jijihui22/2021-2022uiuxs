let weight = 68

try{
    //소스코드를 쓴다
    //이안에서 에러가 발생하면 캐리로 가며 
    if(weight<80){
        throw new Error("정상입니당!")
    }
       
}catch(error){
    //캐치가 에러를 잡아준다
    console.log("에러",error.message)
}
 for i in range(10):
  print(i)
  print(i+1)