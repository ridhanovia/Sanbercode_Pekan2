console.log('---Soal 1---')
var phi = 3.14
const Luas = (r)=> {
     return phi*r*r
}
const Keliling = (r) => {
    return phi*r*2
}
console.log('Luas lingkaran dengan jari-jari 2 cm : ', Luas(2))
console.log('Keliling lingkaran dengan jari-jari 1 cm :',Keliling(1))

console.log();
console.log('---Soal 2---')
function tambahkata (word1,word2,word3,word4,word5){
    const kalimat = `${word1} ${word2} ${word3} ${word4} ${word5}`
    console.log(kalimat)
}
tambahkata("saya","adalah","seorang","frontend","programmer")

console.log();
console.log('---Soal 3---')
const newFunction = function literal(firstName, lastName){
    return {
      firstName,
      lastName,
      fullName :()=> {
        console.log(`${firstName} ${lastName}`)
        return 
      }
    }
  }
  newFunction("William", "Imoh").fullName() 

  console.log();
  console.log('---Soal 4---')
  const newObject = {
      firstName: "Harry",
      lastName: "Potter Holt",
      destination: "Hogwarts React Conf",
      occupation: "Deve-wizard Avocado",
      spell: "Vimulus Renderus!!!"
    }
  const {firstName, lastName, destination,occupation,spell} = newObject
  console.log(firstName, lastName, destination, occupation)
  
  console.log();
  console.log('---Soal 5---')
  const west = ["Will", "Chris", "Sam", "Holly"]
  const east = ["Gill", "Brian", "Noel", "Maggie"]
  const combined = west.concat(east)
  const [will, chris, ...rest] = west
  console.log(combined)

