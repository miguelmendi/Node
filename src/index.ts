
import validator from "validator"

let name:string = "Bonieky"
if(validator.isLowercase(name)) {
  console.log(`A string ${name} è toda minúscula.`)
} else {
  console.log(`A string ${name} NÃO é toda minúscula.`)
}


