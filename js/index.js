/*-кнопки скрола вниз-*/
const $button1 = document.querySelector(`.HEADER-button1`)
const $aboutus = document.querySelector(`.MAIN2`)

$button1.addEventListener(`click`, ()=>{
    $aboutus.scrollIntoView({
        block:`nearest`,
        behavior:`smooth`
    })
})

const $button2 = document.querySelector(`.HEADER-button2`)
const $contacts = document.querySelector(`.MAIN5`)

$button2.addEventListener(`click`, ()=>{
    $contacts.scrollIntoView({
        block:`center`,
        behavior:`smooth`
    })
})
/*-Кнопка возврата-*/
const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      window.addEventListener('scroll', () => {
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        scrollY > 400 ? this.show() : this.hide();
      });
      document.querySelector('.btn-up').onclick = () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  btnUp.addEventListener();
/*-ТЕМА-*/
  let changeThemeButtons = document.querySelectorAll('.changeTheme');

  changeThemeButtons.forEach(button => {
      button.addEventListener('click', function () {
          let theme = this.dataset.theme;
          applyTheme(theme);
      });
  });

  function applyTheme(themeName) {
      document.querySelector('[title="theme"]').setAttribute('href', `css/theme-${themeName}.css`);
      changeThemeButtons.forEach(button => {
          button.style.display = 'block'; 
      });
      document.querySelector(`[data-theme="${themeName}"]`).style.display = 'none';
      localStorage.setItem('theme', themeName)
  }
  
  let activeTheme = localStorage.getItem('theme');
  
  if(activeTheme === null || activeTheme === 'light') {
      applyTheme('light');
  } else if (activeTheme === 'dark') {
      applyTheme('dark');
  }