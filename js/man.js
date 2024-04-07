function changeImage(imageUrl) {
    document.getElementById('mainImage').src = imageUrl;
  }
  

  var collapseList = document.querySelectorAll('.collapse');
  var collapseTriggers = document.querySelectorAll('[data-bs-toggle="collapse"]');

  collapseTriggers.forEach(function (triggerEl) {
    triggerEl.addEventListener('click', function () {
      var target = document.querySelector(triggerEl.getAttribute('data-bs-target'));

      collapseList.forEach(function (collapseEl) {
        if (collapseEl !== target) {
          var collapse = bootstrap.Collapse.getInstance(collapseEl);
          if (collapse && collapse._isTransitioning) return;
          collapse.hide();
        }
      });
    });
  });

  document.getElementById("btAC_").addEventListener("click", function() {
    // При нажатии на кнопку 1, будет эмулировано нажатие на кнопку 2
    document.getElementById("btC_").click();
});

document.getElementById('btC_').addEventListener('click', function() {
    // Получаем элемент collapse
    var collapseElement = document.getElementById('haracter_');
    // Прокручиваем к элементу collapse
    collapseElement.scrollIntoView({ behavior: 'smooth' });
});
