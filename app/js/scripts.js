
/* ============ MENU TOGGLE FUNCTION =========== */

const navigation = () => {
  const menu = document.getElementById('menu');
  const nav = document.getElementById('main-nav');
  const navItems = document.querySelectorAll("#main-nav li");

  // toggle menu
  menu.addEventListener('click', () => {
    nav.classList.toggle('nav-active');

    // animate links

    setTimeout( () => {
      
      for (let i = 0; i < navItems.length; i++) {
        if (navItems[i].style.animation) {
            navItems[i].style.animation = ``;
          }
          else {
            navItems[i].style.animation = `navLinkFade 0.5s ease forwards ${i / 4}s`;
          }
      }
    }, 500);

    // menu icon animation

    menu.classList.toggle('toggle');
  });
}


/* ============ ADD TWITTER POSTS =========== */

const populatePosts = () => {

// create posts
const container = document.getElementById('search-results');
let post;

  for (let i = 0; i < 9; i++) {
      post = createPost();
      container.innerHTML += post;
  }

  // add event listeners to open & close sidebar

  const buttons = document.querySelectorAll('.create-report');
  const close = document.getElementById('close');
  const overlay = document.getElementById('overlay');

  // event listener for buttons that opens sidebar

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', () => {
    openSidebar();
  })};
  // event listener for button that closes sidebar
  close.addEventListener('click', () => {
    closeSidebar();
  });

  //add click event for overlay (to close the sidebar)
  overlay.addEventListener('click', () => {
    closeSidebar();
  })
}

/* ============ CREATE TWITTER POSTS =========== */

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

// set scroll position
window.addEventListener('scroll', () => {
document.documentElement.style.setProperty('--scroll-y', `${window.scrollY}px`);
});

// open sidebar
const openSidebar = () => {

  const overlay = document.getElementById("overlay");
  const sidebar = document.getElementById('sidebar');

  overlay.style.display = "block";
  sidebar.classList.add('active');

  // fix body to it's scroll position
  const scrollY = document.documentElement.style.getPropertyValue('--scroll-y');
  const body = document.body;
  body.style.position = "fixed";
  body.style.top = `-${scrollY}`;

}



const closeSidebar = () => {
  const overlay = document.getElementById("overlay");
  const sidebar = document.getElementById('sidebar');

  sidebar.classList.remove('active');
  overlay.style.display = "none";

  //release body back to it's scroll position
  const body = document.body;
  const scrollY = body.style.top;

  body.style.position = '';
  body.style.top = '';
  window.scrollTo(0, parseInt(scrollY || '0') * -1);

}



/* ============ INVOKE FUNCTIONS =========== */

const app = () => {
  populatePosts();
  navigation();
}

app();
