const tabs = document.querySelectorAll('.tabs button');
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const tabId = tab.getAttribute('id').replace('-tab', '');
    tabs.forEach(tab => {
      tab.classList.remove('active:bg-white');
    });
    tab.classList.add('active:bg-white');
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
      content.classList.add('hidden');
    });
    document.getElementById(tabId).classList.remove('hidden');
  });
});
