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
      // nút đóng mở Menu
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
  // nút cuộn trình duyệt về đầu

  function tang() {
    let input = document.getElementById("soluong");
    input.value = parseInt(input.value) + 1;
  }

  function giam() {
    let input = document.getElementById("soluong");
    if (parseInt(input.value) > parseInt(input.min)) {
      input.value = parseInt(input.value) - 1;
    }
  }

  function Popup_mon() {
    document.getElementById("them_mon_an").style.display = "block";
    document.getElementById("popup_overlay").style.display = "block";
    document.body.style.overflow = "hidden";
    window.scrollTo(0, 0);
  }

  function closePopup() {
    document.getElementById("them_mon_an").style.display = "none";
    document.getElementById("popup_overlay").style.display = "none";
    document.body.style.overflow = "auto";
  }

  function themMon() {
    const tb = document.getElementById("thongbao_themmon");
    tb.style.display = "block";
    tb.style.opacity = "1";

    setTimeout(() => {
      tb.style.opacity = "0";
    }, 3000);

    setTimeout(() => {
      tb.style.display = "none";
    }, 3500);
  }

  function addToCard() {
    closePopup(); // đóng popup + overlay + bật scroll lại
    themMon(); // hiện thông báo
  }
}
