// class Testimonial {
//     #quote = "";
//     #image = "";
  
//     constructor(quote, image) {
//       this.#quote = quote;
//       this.#image = image;
//     }
  
//     get quote() {
//       return this.#quote;
//     }
  
//     get image() {
//       return this.#image;
//     }
  
//     // This is an abstract method that subclasses will implement
//     get author() {
//       throw new Error("getAuthor() method must be implemented");
//     }
  
//     // This is a polymorphic method that can take any subclasses of Testimonial
//     get testimonialHTML() {
//       return `<div class="testimonial">
//                   <img
//                       src="${this.image}"
//                       class="profile-testimonial"
//                   />
//                   <p class="quote">${this.quote}</p>
//                   <p class="author">- ${this.author}</p>
//               </div>
//           `;
//     }
//   }
  
//   // Subclass
//   class AuthorTestimonials extends Testimonial {
//     #author = "";
  
//     constructor(author, quote, image) {
//       super(quote, image);
//       this.#author = author;
//     }
  
//     get author() {
//       return this.#author;
//     }
//   }
  
//   // Subclass
//   class CompanyTestimonials extends Testimonial {
//     #company = "";
  
//     constructor(company, quote, image) {
//       super(quote, image);
//       this.#company = company;
//     }
  
//     get author() {
//       return this.#company + " Company";
//     }
//   }
  
//   const testimonial1 = new AuthorTestimonials(
//     "guswandi",
//     "capres!!",
//     "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//   );
//   const testimonial2 = new AuthorTestimonials(
//     "jokowi dodo",
//     "Keren cuys!!",
//     "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//   );
//   const testimonial3 = new CompanyTestimonials(
//     "prabowo subianto",
//     "bukan maen!!",
//     "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//   );
  
//   let testimonialData = [testimonial1, testimonial2, testimonial3];
//   let testimonialHTML = "";
  
//   for (let i = 0; i < testimonialData.length; i++) {
//     testimonialHTML += testimonialData[i].testimonialHTML;
//   }
  
//   document.getElementById("testimonials").innerHTML = testimonialHTML;
// let testimonialData = [
//   {
//     author: "TOKYO REVENGER",
//     quote: "PETARUNG SEKOLAHAN",
//     image:
//       "https://www.xtrafondos.com/wallpapers/personajes-de-tokyo-revengers-8137.jpg",
//     rating: 2,
//   },
//   {
//     author: "DRAGON BALL",
//     quote: "SI BOLA NAGA!!",
//     image:
//       "https://tse3.mm.bing.net/th?id=OIP.QMMyCac-wexTatkyeDFKIgHaE1&pid=Api&P=0&h=180",
//     rating: 1,
//   },
//   {
//     author: "SPONGEBOB",
//     quote:"SI KUBUS YANG LUCU!",
//     image:
//       "https://tse4.mm.bing.net/th?id=OIP.kDowMEm-dyCTQDRglReUVwHaFj&pid=Api&P=0&h=180",
//     rating: 5,
//   },
//   {
//   author: "BOBOIBOY",
//     quote: "SANG PENYELAMAT BUMI!",
//     image:
//       "https://tse4.mm.bing.net/th?id=OIP.u8dYcQvDXq2Cu90mnfaKTwHaEK&pid=Api&P=0&h=180",
//     rating: 3,
//   },
//   {
//     author: "DORAEMON",
//       quote: "KANTONG AJAIB BERJUTA MANFAAT!",
//       image:
//         "https://www.vooks.net/img/2019/08/doraemon.jpg",
//       rating: 4,
//     },
// ];

// function allTestimonials() {

  
//   let testimonialHTML = "";

//   // testimonialData.forEach(function (item) {
//   //   testimonialHTML += `<div class="testimonial">
//   //                           <img
//   //                               src="${item.image}"
//   //                               class="profile-testimonial"
//   //                           />
//   //                           <p class="quote">${item.quote}</p>
//   //                           <p class="author">- ${item.author}</p>
//   //                           <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
//   //                       </div>
//   //       `;
//   // });

//   document.getElementById("testimonials").innerHTML = testimonialHTML;
// }

// allTestimonials();

// function filterTestimonials(rating) {
//   let testimonialHTML = "";

//   const testimonialFiltered = testimonialData.filter(function (item) {
//     return item.rating === rating;
//   });

  
//   if (testimonialFiltered.length === 0) {
//     testimonialHTML += `<h1>Data not found!</h1>`;
//   } else {
//     testimonialFiltered.forEach(function (item) {
//       testimonialHTML += `<div class="testimonial">
//                                 <img
//                                     src="${item.image}"
//                                     class="profile-testimonial"
//                                 />
//                                 <p class="quote">${item.quote}</p>
//                                 <p class="author">- ${item.author}</p>
//                                 <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
//                             </div>
//                         `;
//     });
//   }

//   document.getElementById("testimonials").innerHTML = testimonialHTML;
// }
                

const promise = new Promise (function(resolve, reject) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api.npoint.io/a86a580787671c14d85f", true);
  console.log(xhr);
  xhr.onload = () => {
      if (xhr.status === 200) {
          resolve (JSON.parse(xhr.response));
      } else
      reject("eror load data");

  };
  xhr.onerror = () => {
      reject("network eror.");
  };
  xhr.send();

  
});

async function getAllTestimonials() {
  const response = await promise;
  // console.log(response);

  let testimonialHTML = "";
  // response.foreach(function(item) {
      response.forEach(function (item) {
  testimonialHTML += `<div class="testimonial">
                          <img
                              src="${item.image}"
                              class="profile-testimonial"
                          />
                          <p class="quote">${item.quote}</p>
                          <p class="author">- ${item.author}</p>
                          <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                      </div>
      `;
});
      
document.getElementById("testimonials").innerHTML = testimonialHTML;
}

getAllTestimonials();

async function getFilteredTestimonials(rating) {
  const response = await promise;

  const testimonialFiltered = response.filter((item) => {
      return item.rating === rating;
});

//   console.log(testimonialFiltered);

let testimonialHTML = ""

if (testimonialFiltered.length === 0) {
  testimonialHTML = "<h1>data tidak ada</h1>";
}else {
 testimonialFiltered.forEach((item) => {
      testimonialHTML += `<div class="testimonial">
                              <img
                                  src="${item.image}"
                                  class="profile-testimonial"
                              />
                              <p class="quote">${item.quote}</p>
                              <p class="author">- ${item.author}</p>
                              <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                          </div>
                      `;
  });
  }

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}
