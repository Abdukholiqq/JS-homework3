// // Homework main

var name = prompt('Ismingizni kiriting');
let ball = +prompt (" To'plagan balingizni kiriting");

if (0 <= ball && ball < 80) {
  console.log(`${name} Afsuski siz o'qishga qabul qilinmadingiz`);
} else if (80 <= ball && ball < 100) {
  alert("siz super-kontrakt asosida o'qishga tavsiya qilindingiz");
  var money = +prompt(
    " Super-kontrakt miqdori 3000$ iltimos pulingizni kiriting"
  );
  if (money => 3000) {
    console.log(
      " tabriklaymiz siz super-kontrakat asosoada talabalikka qabul qilindingiz"
    );
  } else {
    console.log(`${name} Afsuski siz o'qishga qabul qilinmadingiz`);
  }
} else if (100 <= ball && ball < 150) {
  alert("siz kontrakt asosida o'qishga tavsiya qilindingiz");
  var money = +prompt(" kontrakt miqdori 2000$ iltimos pulingizni  kiriting");
  if (money => 2000) {
    console.log(
      " tabriklaymiz siz kontrakat asosoada talabalikka qabul qilindingiz"
    );
  } else {
    console.log(`${name} Afsuski siz o'qishga qabul qilinmadingiz`);
  }
} else if (150 <= ball <= 180) {
  console.log(
    `Tabriklaymiz  ${name} siz grand asosida talabalikka qabul qilindingiz `
  );
}
 else if (ball >= 180 && ball< 0) {
  console.log(
    `Noto'g'ri raqam! iltimos  ballingizni tekshirib qaytadan kiriting `
  );
}

// Homework2

 alert('siz bonus sifatida haydovchilik guvohnomasi olishni istaysizmi?');
alert('u holda quyidagi shartlarni bajaring')

 var a = +prompt("1-sonni kiriting");
 var b = +prompt("2-sonni kiriting");
 var c = +prompt("3-sonni kiriting");

 if (a > b && a > c) {
   console.log(`1-son ya'ni, ${a} soni ${b} va ${c} sonlaridan  katta`);
 } else if (b > a && b > c) {
   console.log(`2-son ya'ni, ${b} soni ${a} va ${c} sonlaridan  katta`);
 } else if (a < c && b < c) {
   console.log(`3-son ya'ni, ${c} soni ${a} va ${b} sonlaridan  katta`);
 } else if ((a = b = c)) {
   console.log(` barcha sonlar teng`);
 }


// //Homework1 


var age = prompt(` ${name} aka yoshingizni kiriting`);
var age2 = 18;

if ( age >= age2){
        console.log(` ${name} aka siz haydovchilik guvohnomasi olishingiz mumkin Murojaat uchun: +998911303349`)
    }
    else{
            console.log(` ${name} aka siz guvohnoma olish uchun ${age2 - age} yil kutishingiz kerak`)
        }
        
        
        
        
       
            
            
            // Practice
            
            // var a = +prompt('son kiriting') ;
            // var b = 15;
            
            // if ( a = b) {
            // console.log(`sonlar teng`)}
            // else {
            //     console.log(`1-son katta`)
            // }
            // else{
            //     console.log(`2-son katta`)
            // }