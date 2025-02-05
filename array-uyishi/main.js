





let family = prompt("Matnni kiriting:");

let fly = confirm("Siz matnning boshidan-olib tashlamoqchimisiz? aa");


if (fly) {
  family = family.slice(1);  
}

alert("Sizni matningiz: " + family + "\nMatnni uzunligi: " + family.length);
