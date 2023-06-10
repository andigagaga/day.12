let dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-blog-title").value;
  let content = document.getElementById("input-blog-content").value;
  let image = document.getElementById("input-blog-image").files;

  // untuk membuat url gambar, agar tampil
  image = URL.createObjectURL(image[0]);
  console.log(image);

  let blog = {
    title,
    content,
    image,
    postAt:  new Date(),
    author: "GUSWANDI",
  };

  dataBlog.push(blog);
  console.log(dataBlog);

  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  //   for (let index = 0; index < dataBlog.length; index++) {
  //     console.log(index);
  //   }

  for (let index = 0; index < dataBlog.length; index++) {
    document.getElementById("contents").innerHTML += `
        <div class="blog-list-item">
            <div class="blog-image">
                <img src="${dataBlog[index].image}" alt="blog_img" />
            </div>
            <div class="blog-content">
            <div class="btn-group">
                <button class="btn-edit">Edit Post</button>
                <button class="btn-delete">Delete Post</button>
            </div>
            <h1>
                <a href="blog-detail.html" target="_blank"
                >${dataBlog[index].title}</a
                >
            </h1>
            <div class="detail-blog-content">
                ${getFullTime(dataBlog[index].postAt)} | ${dataBlog[index].author}
            </div>
            <p>
                ${dataBlog[index].content}
            </p>
            </div>
        </div>
    `;
  }
}
function getFullTime(time) {
 // console.log("get full time");
 // let time = new Date();
 // console.log(time);

 let monthName = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
//console.log(monthName[5]);

let date = time.getDate();
console.log(date);

let monthIndex = time.getMonth();
console.log(monthIndex);

let year = time.getFullYear();
console.log(year);

let hours = time.getHours();
console.log(hours);

let minutes = time.getMinutes();
console.log(minutes);

let seconds = time.getSeconds();
console.log(seconds)

if (hours <= 9) {
  hours = "0" + hours;
} else if (minutes <= 9) {
  minutes = "0" + minutes;
}


 return `${date} ${monthName[monthIndex]} ${year} ${hours} ${minutes} ${seconds} WIB`;
}

function getDistanceTime(time) {
  let timeNow = new Date();
  let timePost = time;

  let milisecond = 1000; // milisecond
  let secondInHours = 3600; // 1 jam 3600 detik
  let hoursInDays = 24; // 1 hari 24 jam

  let distanceDay = Math.floor(
    distance / (milisecond * secondInHours * hoursInDays)
  ); // 1/86400000
  let distanceHours = Math.floor(distance / (milisecond * 60 * 60)); // 1/3600000
  let distanceMinutes = Math.floor(distance / (milisecond * 60)); // 1/60000
  let distanceSeconds = Math.floor(distance / milisecond); // 1/1000

  if (distanceDay > 0) {
    return `${distanceDay} Day Ago`;
  } else if (distanceHours > 0) {
    return `${distanceHours} Hours Ago`;
  } else if (distanceMinutes > 0) {
    return `${distanceMinutes} Minutes Ago`;
  } else {
    return `${distanceSeconds} Seconds Ago`;
  }

}
setInterval(function () {
  renderBlog();
}, 10000);


