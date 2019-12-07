const getData = () => {
  fetch('data.json')
    .then(res => res.json())
    .then(data => {
      app(data);
    })
}

getData();

const tabs = document.querySelector('#tabs');

const render = (data) => {
  tabs.innerHTML = ''
  const sidebar = document.createElement('div');
  sidebar.classList.add('tabs__sidebar');
  tabs.appendChild(sidebar);

  data.forEach((d, i) => {
    sidebar.appendChild(generateButton(d, i))
  })
  const x = document.querySelectorAll('.tabs__sidebar button');
  x[0].click();
}

const generateButton = (d, i) => {
  const buttons = document.createElement('button');
  buttons.textContent = `Tab ${i + 1}`;
  buttons.addEventListener('click', (e) => {
    if(document.querySelector('.tabs__content')) {
      document.querySelector('.tabs__content').remove()
    }
    const sideBarBtns = document.querySelectorAll('.tabs__sidebar button');
    sideBarBtns.forEach(btn => {
      if(btn.classList.contains('active')) {
        btn.classList.remove('active')
      }
    })
    e.target.classList.add('active')
    generateContent(d, buttons)
  })
  return buttons
};

const generateContent = (data, btn) => {
  const div = document.createElement('div');
  div.classList.add('tabs__content');
  setTimeout(() => {
    div.classList.add('active');
  },100);
  const h3 = document.createElement('h3');
  h3.textContent = data.title;
  
  if(window.innerWidth <= 767) {
    div.appendChild(h3)
    div.innerHTML += data.content;
    btn.parentNode.insertBefore(div, btn.nextSibling)
  } else {
    div.appendChild(h3)
    div.innerHTML += data.content;
    tabs.appendChild(div)
  }
}

window.addEventListener('resize', () => {
  const sideBar = document.querySelector('.tabs__sidebar');
  const tabs = document.querySelector('#tabs')
  if(window.innerWidth > 767) {
    sideBar.childNodes.forEach(list => {
      if (list.classList.contains('tabs__content')) {
        list.remove()
      }
    })
  } else {
    tabs.childNodes.forEach(list => {
      if (list.classList.contains('tabs__content')) {
        list.remove()
      }
    })
  }
  const buttons = document.querySelectorAll('.tabs__sidebar button');
  buttons.forEach(btn => {
    if(btn.classList.contains('active')) {
      btn.click()
    }
  })
})

const app = (data) => {
  render(data);
}

// app();