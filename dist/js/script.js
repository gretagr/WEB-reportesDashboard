/* ============ MENU TOGGLE FUNCTION =========== */

const navigation = () => {
  const menu = document.getElementById('menu');
  const nav = document.getElementById('main-nav');
  const navItems = document.querySelectorAll("#main-nav li");

  // toggle menu
  menu.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    // animate links

    setTimeout(function () {
      navItems.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = ``;
        }
        else {
          link.style.animation = `navLinkFade 0.5s ease forwards ${index / 4}s`;
        }
      });
    }, 500);

    // menu icon animation

    menu.classList.toggle('toggle');
  });
}


/* ============ CREATE & ADD TWITTER POSTS =========== */

const populatePosts = () => {

const container = document.getElementById('search-results');
let post;

  for (let i = 0; i < 9; i++) {
    post = createPost();
    container.innerHTML += post;
  }
  const overlay = document.getElementById("overlay");
  const openSidebar = document.querySelectorAll('.create-report');
  const sidebar = document.getElementById('sidebar');

  const close = document.getElementById('close');

  openSidebar.forEach(function (btn) {
    btn.addEventListener('click', function () {
      sidebar.classList.add('active');
    });
  })

  close.addEventListener('click', function () {
    sidebar.classList.remove('active');
  })
}


const createPost = () => {

  const postData = [
    {
      name: 'Eduardo H.',
      nickname: '@eduaroh53',
      image: 'dist/images/profile.png',
      date: 'Hace 2 dias',
      message: 'Responde desde hace 3 semanas la fuga y aun no me dan servicio. Horrible',
      tag:  '@GobiernoAcapozalcoOficial'
    }
  ];

  const post =
      `<div class="tweet">
        <div class="twitter-user">
        <img class= "twitter-user-image" src="${postData[0].image}" alt="user profile image">
        <p class="user-name">${postData[0].name} <br >
        <span class="user-nickname">${postData[0].nickname}</span>
        </p>

        </div>
        <p class="post-date">${postData[0].date}</p>
        <p class="post-body">${postData[0].message}<br >
        <span>${postData[0].tag}</span></p>

        <div class="actions">
        <a href="#" class="hide">Ocultar</a>
        <a href="#" class="reply">Responder</a>
        <a href="#" class="create-report">Crear Reporte</a>
        </div>
        </div>`;

      return post;
}

/* ============ SIDEBAR FUNCTIONS =========== */



/* ============ INVOKE ALL FUNCTIONS =========== */

const app = () => {
  populatePosts();
  navigation();

}

app();
