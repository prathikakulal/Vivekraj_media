

const cardData = [
  // ---------- ENGLISH ----------
  {
    img: "assets/img/portfolio/forbes.jpg",
    src: "Forbes",
    desc: "Vivek Raj Redefines Agriculture with Hydroponic Saffron Farming",
    lang: "en",
    link: "https://organiser.org/2024/10/22/261430/bharat/karnataka-vivek-raj-poojary-earns-forbes-india-honours-for-revolutionising-saffron-farming-with-hydroponics/"
  },
  {
    img: "assets/img/portfolio/2.jpg",
    src: "The Indian Express",
    desc: "Panama to develop Coal, Iron Ore Blocks in Zimbabwe",
    lang: "en",
    link: "https://timesofindia.indiatimes.com/Vivek-Raj-CEO-of-Mangalore-based-Panama-Group-had-an-exclusive-face-to-face-meeting-with-Arthur-Mutambara-deputy-Prime-minister-of-Zimbabwe-at-Bangalore-recently-Arthur-Mutambara-has-privately-invited-Panama-group-a-diversified-trading-company-to-develop-coal-and-iron-ore-mine-blocks-existing-in-Zimbabwe-/articleshow/12416414.cms"
  },
  {
    img: "assets/img/portfolio/4.jpg",
    src: "The Indian Express",
    desc: "City's Vivek Raj to attend World Economic Summit in New Delhi",
    lang: "en"
  },
  {
    img: "assets/img/portfolio/5.jpg",
    src: "The Times Of India",
    desc: "City man to co-host economic summit",
    lang: "en"
  },
  {
    img: "assets/img/portfolio/10.jpg",
    src: "The Times Of India",
    desc: "City's CEO heads for WEF in China",
    lang: "en"
  },
  {
    img: "assets/img/portfolio/14.jpg",
    src: "Deccan Herald",
    desc: "Firm to buy vegetables from farmers in distress",
    lang: "en"
  },
  {
    img: "assets/img/portfolio/18.jpg",
    src: "Deccan Herald",
    desc: "Experts give out success mantra for UPSC aspirants",
    lang: "en"
  },
  {
    img: "assets/img/portfolio/19.jpg",
    src: "Deccan Herald",
    desc: "Discipline, Determination and Dedication - Key to clear Exams",
    lang: "en"
  },
  {
    img: "assets/img/portfolio/21.jpg",
    src: "Deccan Herald",
    desc: "Congress Covid-19 Helpline to distribute 3000 kits",
    lang: "en"
  },
  {
    img: "assets/img/portfolio/23.jpeg",
    src: "Forbes",
    desc: "Empowering Global Agriculture through AI and Precision Agritech",
    lang: "en"
  },
  {
  img: "assets/img/portfolio/24.jpeg",
  src: "Forbes India",
  desc: "Vivek Raj on Union Budget 2026 and Bharat-VISTAAR Integration",
  lang: "en"
  },
  // ---------- KANNADA ----------
  {
    img: "assets/img/portfolio/3.jpg",
    src: "Udayavani",
    desc: "Panama becomes Mangalore's Pride",
    lang: "kn"
  },
  {
    img: "assets/img/portfolio/6.jpg",
    src: "Udayavani",
    desc: "Panama Corporation gains respect in presence of guests",
    lang: "kn"
  },
  {
    img: "assets/img/portfolio/9.jpg",
    src: "Praja Vani",
    desc: "Diligence: Efforts of Vivek Raj and his success",
    lang: "kn"
  },
  {
    img: "assets/img/portfolio/11.jpg",
    src: "Jayakirana",
    desc: "Let's Distribute the Kits to the Need",
    lang: "kn"
  },
  {
    img: "assets/img/portfolio/12.jpg",
    src: "Jayakirana",
    desc: "Organized Struggle against MRPL Necessary",
    lang: "kn"
  },
  {
    img: "assets/img/portfolio/13.jpg",
    src: "Kannada Prabha",
    desc: "Purchase of farmers' vegetables, fruits from Panama Company",
    lang: "kn"
  },
  {
    img: "assets/img/portfolio/15.jpg",
    src: "Vijaya Karnataka",
    desc: "Vivek Raj Pujari is the Chairman of Panama Institute",
    lang: "kn"
  },
  {
    img: "assets/img/portfolio/16.jpg",
    src: "Vijaya Karnataka",
    desc: "Covid Kit distribution to 4350 families",
    lang: "kn"
  },
  {
    img: "assets/img/portfolio/17.jpg",
    src: "Jayakirana",
    desc: "Farmers' Dear Friend: Vivek Raj Poojary",
    lang: "kn"
  },
  {
    img: "assets/img/portfolio/20.jpg",
    src: "Prajavani",
    desc: "No thirst for power, money, popularity",
    lang: "kn",
    link: "https://www.prajavani.net/district/dakshina-kannada/prajavani-deccan-herald-mangalore-upsc-883200.html"
  }
];






let currentLang = "en"; // default: English

function createCard(card) {

  // If link exists → use it, else fallback to image
  const targetLink = card.link ? card.link : card.img;

  return `
    <div class="col-sm-6 col-md-6 col-lg-6 col-xl-4 card-spacing">
      <div
        class="card justify-content-center card-fluid border-0 shadow mx-auto"
        style="width: 18rem; height: 27rem"
      >
        <div class="card-header bg-white">

          <img
            src="${card.img}"
            style="height: 310px; width: 100%; object-fit: cover;"
            class="card-img-top img-fluid"
            loading="lazy"
          />

          <br /><br />

          <h6 style="color: gray; font-size: 12px;">
            ${card.src}
          </h6>

          <h6>
            <strong>
              <a
                href="${targetLink}"
                target="_blank"
                class="stretched-link"
                style="color: black; text-decoration: none;"
              >
                ${card.desc}
              </a>
            </strong>
          </h6>

        </div>
      </div>
    </div>
  `;
}

function renderCards() {
  const portfolioCards = document.getElementById("portfolio-cards");

  // Filter cards based on selected language
  const filteredData = cardData.filter(
    card => card.lang === currentLang
  );

  portfolioCards.innerHTML = filteredData
    .map(card => createCard(card))
    .join("");
}

function toggleLanguage(lang) {
  currentLang = lang;

  renderCards();
  updateButtonStyles(lang);
}

function updateButtonStyles(lang) {

  const btnEn = document.getElementById("btn-en");
  const btnKn = document.getElementById("btn-kn");

  btnEn.classList.toggle("btn-primary", lang === "en");
  btnEn.classList.toggle("btn-outline-primary", lang !== "en");

  btnKn.classList.toggle("btn-primary", lang === "kn");
  btnKn.classList.toggle("btn-outline-primary", lang !== "kn");
}

// Load English articles by default
document.addEventListener("DOMContentLoaded", () => {
  renderCards();
  updateButtonStyles("en");
});
