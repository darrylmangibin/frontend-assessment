const getData = () => {
  fetch('../../data.json').then(res => {
    return res.json();
  }).then(data => {
    const tabs = document.getElementById('tabs');
    const sidebar = document.querySelector('.tabs__sidebar');
    data.map((d, i) => {
      const button = document.createElement('button');
      button.textContent = `Tab ${i + 1}`;
      sidebar.appendChild(button);
      const tabs__content = document.createElement('div');
      tabs__content.classList.add('tabs__content');
      const h2 = document.createElement('h2');
      h2.textContent = d.title;
      tabs__content.appendChild(h2);
      const div = document.createElement('div');
      div.innerHTML = d.content;
      tabs__content.appendChild(div)
      tabs.appendChild(tabs__content);

      button.addEventListener('click', (e) => {
        const tabsContentChildren = document.querySelectorAll('.tabs__content');
        const buttonChildren = document.querySelectorAll('.tabs__sidebar button');
        buttonChildren.forEach((btn, index) => {
          btn.classList.remove('active');
          if (index === i) {
            btn.classList.add('active')
          }
        })
        tabsContentChildren.forEach((tab, index) => {
          tab.style.opacity = 0;
          tab.style.transform = 'translateX(40px)'
          tab.classList.remove('active');
          if(index === i) {
            tab.classList.add('active')
            setTimeout(() => {
              tab.style.opacity = 1;
              tab.style.transform = 'translateX(0)'
            }, 100);
          }
        })
      })
      const buttons = button.parentElement.children;
      buttons[0].click();
    })
  })
}

getData();