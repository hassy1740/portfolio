$(".openbtn1").click(function () {//ボタンがクリックされたら
  $(this).toggleClass('active');//ボタン自身に activeクラスを付与し
  $("#g-nav").toggleClass('panelactive');//ナビゲーションにpanelactiveクラスを付与
});

$("#g-nav a").click(function () {//ナビゲーションのリンクがクリックされたら
  $(".openbtn1").removeClass('active');//ボタンの activeクラスを除去し
  $("#g-nav").removeClass('panelactive');//ナビゲーションのpanelactiveクラスも除去
});

const PHOTO_LIST = ['../images/photo-output.JPG', '../images/photo-output2.JPG']

  let count = 0;
  const photo = document.getElementById('photo');

  function changePhoto() {
    console.log(photo);
    if (count % 2 == 0) {
      photo.style.backgroundImage = "url(../images/photo-output2.JPG)"
    } else {
      photo.style.backgroundImage = "url(../images/photo-output.JPG)"
    }



    count++
  }
  setInterval(changePhoto, 5000);

