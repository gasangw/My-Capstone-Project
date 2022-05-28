const hamburger = document.querySelector('.nav__menu');
const menu = document.querySelector('.nav__mobile--menu');
const menuItem = document.querySelectorAll('.nav__links');
const closeButton = document.querySelector('.nav__mobile--header');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
  closeButton.classList.toggle('active');
});

menuItem.forEach((n) => {
  n.addEventListener('click', () => {
    menu.classList.toggle('active');
    hamburger.classList.toggle('active');
  });
});

const card = document.querySelector('.speaker-section');
const h2 = document.createElement('h2');
const div = document.createElement('div');
div.classList.add('speaker-container');
const container = document.createElement('div');
container.classList.add('speakers');

card.append(h2);
card.append(div);
card.append(container);

const speakersLists = [
  {
    sImage: ['./images/pic.png'],
    name: 'Tashobya Shedrack',
    discipline: 'Secretary Bank of Uganda.',
    biography: 'He served as the minister of Technology from 2013 to 2016, became the manager of bank of Africa and he has invested alot in developing youth from various nations.',
  },
  {
    sImage: ['./images/pic.png'],
    name: 'Nduhukire Catherine',
    discipline: 'Human Resource Manager African Union.',
    biography: ' She is a stakeholder in KCB bank, serves as well as the presidential advisor of the republic of Nigeria and one of the frontline leaders in educating youth.',
  },
  {
    sImage: ['./images/pic.png'],
    name: 'Gasanna James',
    discipline: 'Deputy Secretary World Bank.',
    biography: 'He served as the minister of finance in Rwanda from 2009 to 2012 and he is one of the frontline leaders in equipping youth with the neccessary knowlwdge for developing the continent.',
  },
  {
    sImage: ['./images/pic.png'],
    name: 'Abasa Denis',
    discipline: 'Africa Youth Coordinator.',
    biography: 'He has mobilised youth in various nations for various workshops and conferences, served as the deputy chancellor of Makerere University.',
  },
  {
    sImage: ['./images/pic.png'],
    name: 'Nabasa Diana',
    discipline: 'CEO Egypt Airlines.',
    biography: 'She served as a member of staff in the african union, appointed as an ambossordor in Russia. She has partiicioated in various youth projects around Africa and Asia as well.',
  },
  {
    sImage: ['./images/pic.png'],
    name: 'Tumukunde Benoni',
    discipline: 'Ambassodor of the republic of kenya in South Africa.',
    biography: 'He served as the head of COCIS and the general auditor in the East African Parliament. He has tremendous love for the youth.',
  },
];

let speakersName = '';
let speakersDiscipline = '';
let speakersBiography = '';

speakersLists.forEach((n, index) => {
  speakersName = n.name;
  speakersDiscipline = n.discipline;
  speakersBiography = n.biography;

  const content = `<div class="speakers__speaker">
  <img
    src="./images/pic.png"
    alt="Cathy"
    class="speakers__speaker--photo"
  />
  <div class="speakers__speaker--info">
    <h4 class="speakers__speaker--name">${speakersName}</h4>
    <small class="speakers__speaker--profile">${speakersDiscipline}</small>
    <p class="speakers__speaker--bio">
    ${speakersBiography}
    </p>
  </div>
</div>`;
  const cont = document.createElement('div');
  cont.classList.add('speakers');
  if (index > 2) {
    div.classList.add('des_speaker_lists');
  }
  cont.innerHTML = content;
  container.append(cont);
});

const buti = document.createElement('btn');
buti.classList.add('section-button');
buti.innerHTML = 'See More ';
card.append(buti);

const addMore = document.querySelector('.section-button');
addMore.addEventListener('click', () => {
  document.querySelectorAll('.speakers').forEach((m) => {
    if (m.classList.contains('des_speaker_lists')) {
      document.querySelector('.section-button').innerHTML = '<button class="section-button" type="button">See More &darr;</button>';
    } else {
      m.classList.add('des_speaker_lists');
      document.querySelector('.section-button').innerHTML = '<button class="section-button" type="button">See More &darr;</button>';
    }
  });
});