gsap.registerPlugin(ScrollTrigger);

const links =document.querySelectorAll('.menu-btn');
const image = document.querySelector('.menu-center img');
const menuBtn = document.querySelector('.menu-button');
const menu = document.querySelector('.menu');
const texts = gsap.utils.toArray('.text');


links.forEach(link => {
    link.addEventListener("mouseenter", () => {
        const bgColor = link.getAttribute("data-color"); 
        const imgSrc = link.getAttribute("data-image");
        gsap.to('.menu', {
            background: bgColor,
            duration: 0.5
        });
        image.src = imgSrc;
    })
});

document.querySelector('.menu-button').addEventListener('click', function() {
    this.classList.toggle('active');
});

menuBtn.addEventListener('click', function() {
  this.classList.toggle('show'); // Thêm/xóa lớp 'active' để tạo hiệu ứng xoay dấu X
  menu.classList.toggle('show'); // Thêm/xóa lớp 'active' để hiển thị/ẩn menu
});

const images = document.querySelectorAll('.img img');

// Gắn sự kiện 'mouseenter' và 'mouseleave' cho các hình ảnh
images.forEach(img => {
    img.addEventListener('mouseenter', function() {
        const targetClass = this.getAttribute('data-text'); // Lấy giá trị data-text
        const targetText = document.querySelector(`.project-text-item.${targetClass}`); // Tìm phần tử project-text-item tương ứng
        if (targetText) {
            targetText.classList.add('move-up'); // Thêm class để di chuyển lên trên
        }
    });

    img.addEventListener('mouseleave', function() {
        const targetClass = this.getAttribute('data-text');
        const targetText = document.querySelector(`.project-text-item.${targetClass}`);
        if (targetText) {
            targetText.classList.remove('move-up'); // Xóa class để trở về vị trí cũ
        }
    });
});

let tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".circle",
        start: "top 49%",
        end: "top 0",
        scrub: true
    }
});

tl.from('.circle', {
    scale: 0
});



