document.addEventListener('DOMContentLoaded', () => {
  const Mycontainer = document.querySelector('.container ul');

  fetch('data.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(job => {
        const li = document.createElement('li');

        li.innerHTML = `
          <div class="left-part">
            <div class="mypic">
              <img src="${job.logo}" alt="${job.company} image">
            </div>
            <div class="inner-left-part">
              <div class="top">
                <div class="top-title"><h2>${job.company}</h2></div>
                ${job.new ? '<div class="top-mid">NEW!</div>' : ''}
                ${job.featured ? '<div class="top-end">Featured</div>' : ''}
              </div>
              <div class="mid">
                <h2>${job.position}</h2>
              </div> <br>
              <div class="bottom">
                <p>${job.postedAt} &nbsp; &nbsp; . ${job.contract} &nbsp; &nbsp; . ${job.location}</p>
              </div>
            </div>
          </div>

          <div class="right-part">
            <div class="item">${job.role}</div>
            <div class="item">${job.level}</div>
            ${job.languages.map(lang => `<div class="item">${lang}</div>`).join('')}
            ${job.tools.map(tool => `<div class="item">${tool}</div>`).join('')}
          </div>
        `;

        Mycontainer.appendChild(li);
      });
    })
    .catch(err => {
      console.error('Error loading JSON:', err);
    });
});
