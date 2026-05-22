const images = [
  "header1.jpg",
  "header2.jpg",
  "header3.jpg",
  "header4.jpg",
  "header5.jpg",
  "header6.jpg",
];
let currentIndex = 0;
function changeImage() {
  currentIndex = (currentIndex + 1) % images.length;
  document.getElementById("slide").src = images[currentIndex];
}
setInterval(changeImage, 3000);

const prev_btn = document.querySelector(".control-prev");
const next_btn = document.querySelector(".control-next");
const imgs = document.querySelectorAll(".slider ul img");

let n = 0;

function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[n].style.display = "block";
}
changeSlide();

prev_btn.addEventListener("click", (e) => {
  if (n > 0) {
    n--;
  } else {
    n = imgs.length;
  }
  changeSlide();
});

next_btn.addEventListener("click", (e) => {
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  changeSlide();
});
const scrollContainers = document.querySelectorAll(".products");
for (const container of scrollContainers) {
  container.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    container.scrollLeft += evt.deltaY;
  });
}
const reviews = [
  {
    id: 1,
    name: "Jung Hoseok",
    job: "Artist / Dancer",
    img: "bts-j-hope.png",
    text: "I am just believing myself and running, alright. This world is deep and we are going for it, up all night.You're trying something new. That in itself is a reflection that you're going in a good direction.",
  },
  {
    id: 2,
    name: "Min Yoongi",
    job: "Artist / Rapper",
    img: "bts-yoongi.png",
    text: "Stay innocent, be naive. But still dream big. Dream big to the point that it is beyond your ability and endeavour to achieve it.Because the dawn right before the sun rises is the darkest. Even in the far future, never forget the you of right now.",
  },
  {
    id: 3,
    name: "Kim Namjoon",
    job: "Artist / Rapper",
    img: "rapmonster-bts.png",
    text: "My ideal and what is reality, they’re so far, far away. But I want to cross those two bridges to reach myself.I hope you know your limits well. But don't stay within those limits. Overcome the limits each day.",
  },
  {
    id: 4,
    name: "Kim Seokjin",
    job: " Artist / Singer",
    img: "jin-of-bts.webp",
    text: "If any of you feel lost in the face of uncertainty or the pressure of starting something new, don’t rush. You may find any moment can be turned into an opportunity.I'm the one I should love in this world. Shining me, precious soul of mine, I finally realized so I love me.",
  },
  {
    id: 5,
    name: " Park Jimin",
    job: " Artist / Singer",
    img: "jimin-hd.webp",
    text: "It's alright if you started right now. It's alright if you're in a good mood. It's alright if you do everything you want to do.I hope you never give up. Remember there is a person here in Korea, in the city of Seoul, who understands you.",
  },
  {
    id: 6,
    name: " Kim Taehyung",
    job: " Artist / Singer",
    img: "v-bts.webp",
    text: "When things get hard, stop for a while and look back and see how far you’ve come. Don’t forget how rewarding it is.Don’t be upset because someone didn’t cheer you up. If you feel drained, why not do less rather than trying to do more.",
  },
  {
    id: 7,
    name: "Jeon Jungkook",
    job: " Artist / Singer",
    img: "bts-jk.webp",
    text: "You should build your own goals and dreams. I think it’s really sad that some people don’t get a chance to build their dreams because of outside pressure.Don’t think it’s too late but keep working on it. It may take time but there’s nothing that gets worse when you practice.",
  },
  {
    id: 8,
    name: "Makkah Ismel",
    job: " Nothing Yet",
    img: "IMG_20230414_185140.jpg",
    text: "Our greatest weakness lies in giving up. The most certain way to succeed is always to try just one more time.The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
  },
];
const img = document.querySelector(".personal-info img");
const info = document.querySelector(".text");
const author = document.querySelector(".author");
const job = document.querySelector(".job");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

randomBtn.addEventListener("click", () => {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();

  console.log(currentItem);
});
