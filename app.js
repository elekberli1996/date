//1 random rengli consol

// let birthday = new Date("08-03-1996");

// setInterval(() => {
//   let now = new Date();
//   let between = now - birthday;
//   let il = Math.trunc(between / (1000 * 60 * 60 * 24 *30*12));
//   let ay = Math.trunc(between / (1000 * 60 * 60 * 24 *30)%12);
//   let gun = Math.trunc(between / (1000 * 60 * 60 * 24)%30);
//   let saat = Math.trunc((between / (1000 * 60 * 60)) % 24);
//   let deqiqe = Math.trunc((between / (1000 * 60)) % 60);
//   let saniye = Math.trunc((between / 1000) % 60);
  
//   let r=Math.trunc(Math.random()*256);
//   let g=Math.trunc(Math.random()*256);
//   let b=Math.trunc(Math.random()*256);
  
//    console.clear();
//   console.log(`%c ${il} il ${ay} ay ${gun} gun ${saat} saat ${deqiqe} deqiqe ${saniye} saniye `,`color:rgb(${r},${g},${b}); font-size: 20px;`);
// }, 1000);



// *****************************
//2 students search
// let students=[
//             {
//                 id:1,
//                 name:"emin",
//                 surname:"elekberli",
//                 age:28,
//                 grade:100,
//                 hobbies:["sahmat","football", "basketball"],
//                 group_id:1
            
//             },
//             {
//                 id:2,
//                 name:"kenan",
//                 surname:"agayev",
//                 age:26,
//                 grade:98,
//                 hobbies:["coding","football", "tennis"],
//                 group_id:1
            
//             },
//             {
//                 id:3,
//                 name:"esger",
//                 surname:"aliyev",
//                 age:28,
//                 grade:85,
//                 hobbies:["sahmat","football", "reading"],
//                 group_id:2
            
//             },
//             {
//                 id:4,
//                 name:"ali",
//                 surname:"gulmemmedli",
//                 age:28,
//                 grade:80,
//                 hobbies:["sahmat","football", "basketball"],
//                 group_id:3
            
//             },
//             {
//                 id:5,
//                 name:"rauf",
//                 surname:"Hesenov",
//                 age:28,
//                 grade:100,
//                 hobbies:["sahmat","football", "basketball"],
//                 group_id:3
            
//             }
//         ];

//         let searced_name=prompt("bir ad girin");
//         console.log(searced_name);
//         let student=students.find(a=>a.name.toUpperCase()===searced_name.toUpperCase())
//         if(student)
//         {
//             alert(`aradiginiz ad tapildi :${student.name}`)
//         }
//         else{
//             alert("aradiginiz ad bulunamadi")
//         }

// *********************************************

// task 3



// let ad=prompt("ad daxil edin")
// let array=[]
// let a=1;
// const numune=setInterval(() => {
//     for(let i=0;i<a;i++){
//         array.push(ad[i]);  
//     }   
//     let yeni_ad=array.join("");
//     console.log(yeni_ad);
//     array=[]; 
//     if(a===ad.length)
//     {
//         clearInterval(numune);
//         azalt();
//     }
//     a++;  
// }, 1000);

// function azalt(){
//     let b=ad.length;
//    const numune2=setInterval(() => {
//     if(b===2)
//     {
//       clearInterval(numune2);
//     }
//     for(let i=0;i<b-1;i++){
//       array.push(ad[i]);  
//     }   
//     let yeni_ad=array.join("");
//     console.log(yeni_ad);
//     array=[];
//     b--; 
// }, 1000);
// }

// const d = new Date();
// let text = d.toLocaleDateString();
// console.log(typeof text)



