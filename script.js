

    let tg = window.Telegram.window;
    tg.expand();

    let params = new URLSearchParams(window.location.search);
    let userId = params.get('userid');

    console.log("User ID:", userId);
    document.getElementById("userId").innerText = "User ID: " + userId;

    tg.MainButton.text = "Changed Text";
    tg.MainButton.setText("Changed Text1");
    tg.MainButton.textColor = "#F55353";
    tg.MainButton.color = "#143F6B";
    tg.MainButton.setParams({"color": "#143F6B"});

    let btn = document.getElementById("btn");
    btn.addEventListener('click', function(){
      if (tg.MainButton.isVisible){
        tg.MainButton.hide();
      }
      else{
        tg.MainButton.show();
      }
    });

    let btnED = document.getElementById("btnED");
    btnED.addEventListener('click', function(){
      if (tg.MainButton.isActive){
        tg.MainButton.setParams({"color": "#E0FFFF"});
        tg.MainButton.disable();
      }
      else{
        tg.MainButton.setParams({"color": "#143F6B"});
        tg.MainButton.enable();
      }
    });

    Telegram.WebApp.onEvent('mainButtonClicked', function(){
      tg.sendData("some string that we need to send");
    });

    let usercard = document.getElementById("usercard");
    if (tg.initDataUnsafe.user) {
      let profName = document.createElement('p');
      profName.innerText = `${tg.initDataUnsafe.user.first_name} ${tg.initDataUnsafe.user.last_name} ${tg.initDataUnsafe.user.username} (${tg.initDataUnsafe.user.language_code})`;
      usercard.appendChild(profName);

      let userid = document.createElement('p');
      userid.innerText = `${tg.initDataUnsafe.user.id}`;
      usercard.appendChild(userid);
    }

    const squares = [
      { title: 'Игра 1', image: 'image1.jpg' },
      { title: 'Игра 2', image: 'image2.jpg' },
      { title: 'Игра 3', image: 'image3.jpg' },
      { title: 'Игра 4', image: 'image4.jpg' },
    ];

    function createSquare(square) {
      const div = document.createElement('div');
      div.className = 'square';

      const img = document.createElement('img');
      img.src = square.image;
      img.alt = square.title;

      const title = document.createElement('h2');
      title.textContent = square.title;

      div.appendChild(img);
      div.appendChild(title);

      return div;
    }

    function renderSquares() {
      const container = document.getElementById('container');
      container.innerHTML = '';

      const searchInput = document.getElementById('searchInput');
      const searchText = searchInput.value.toLowerCase();

      const filteredSquares = squares.filter(square =>
        square.title.toLowerCase().includes(searchText)
      );

      let row;
      filteredSquares.forEach((square, index) => {
        if (index % 2 === 0) {
          row = document.createElement('div');
          row.className = 'row';
          container.appendChild(row);
        }

        const div = createSquare(square);
        row.appendChild(div);
      });
    }

    document.addEventListener('DOMContentLoaded', () => {
      const searchInput = document.getElementById('searchInput');
      searchInput.addEventListener('input', renderSquares);

      renderSquares();
    });

     document.addEventListener('click', function(event) {
  var targetElement = event.target; // Получаем элемент, по которому было произведено нажатие

  // Проверяем, является ли целевой элемент текстовым полем ввода
  var isInput = targetElement.tagName === 'INPUT' && targetElement.type === 'text';

  // Если нажатие было по другой части экрана и клавиатура открыта, скрываем клавиатуру
  if (!isInput && document.activeElement === targetElement) {
    targetElement.blur(); // Скрываем клавиатуру, убирая фокус с текстового поля ввода
  }
});
