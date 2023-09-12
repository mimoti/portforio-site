

//ページ内遷移　スムーススクロール
window.addEventListener('DOMContentLoaded', () => {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  const anchorLinksArr = Array.prototype.slice.call(anchorLinks);

  anchorLinksArr.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault(); //ブラウザのデフォルトの挙動を止める
      const targetId = link.hash;
      const targetElement = document.querySelector(targetId);
      const targetOffsetTop = window.pageYOffset + targetElement.getBoundingClientRect().top - 150;
      window.scrollTo({
        top: targetOffsetTop,
        behavior: "smooth"
      });
    });
  });
});

window.addEventListener('scroll', () => {
  const headHight = document.getElementById("js-header").offsetHeight;
  const scroll = scrollY;
  const header = document.getElementById("js-header");

  if(headHight <= scroll) {
    header.classList.add("change");
  } else {
    header.classList.remove("change");
  }
});