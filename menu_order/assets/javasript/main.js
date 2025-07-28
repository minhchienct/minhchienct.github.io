if (window.innerWidth <= 768) {
  console.log("Đang ở mobile");
  // có thể làm gì đó riêng cho mobile

  // Lấy phần tử nút và menu
  const menuButton = document.getElementById("menu");
  const navMenu = document.getElementById("menu_list");
  const menuIcon = document.getElementById("menu_icon");

  menuButton.addEventListener("click", function () {
    const isHidden =
      navMenu.style.display === "none" || navMenu.style.display === "";
    navMenu.style.display = isHidden ? "block" : "none";
    if (isHidden) {
      menuIcon.classList.remove("fa-bars");
      menuIcon.classList.add("fa-xmark");
    } else {
      menuIcon.classList.remove("fa-xmark");
      menuIcon.classList.add("fa-bars");
    }
    // Khi bấm vào nút thì chạy hàm này
    //   menuButton.addEventListener("click", function () {
    //     if (navMenu.style.display === "none" || navMenu.style.display === "") {
    //       navMenu.style.display = "block";
    //     } else {
    //       navMenu.style.display = "none";
    //     }
  });

  document.getElementById("goTop").addEventListener("click", function (e) {
    e.preventDefault(); // Ngăn trình duyệt tự nhảy giật lên
    const topElement = document.getElementById("container");
    topElement.scrollIntoView({ behavior: "smooth" });
  });
}
