const { createWriteStream } = require('fs');
const { resolve } = require('path');

const { SitemapStream, streamToPromise } = require('sitemap');

const domain = 'https://saucepan.pp.ua/';
const pages = [
  {
    url: '/',
    changefreq: 'daily',
    priority: 1.0,
    img: [
      {
        url: `${domain}images/hero-saucepan.png`,
        title: 'Головний банер сайту',
        caption: 'Гусятниця 5 л з кришкою - сковородою Сітон',
      },
      {
        url: `${domain}images/descr.jpg`,
        title: 'Гусятниця 5 л з кришкою - сковородою Сітон',
        caption: 'Гусятниця 5 л з кришкою - сковородою Сітон',
      },
      {
        url: `${domain}images/description.jpg`,
        title: 'Гусятниця 5 л з кришкою - сковородою Сітон',
        caption: 'Гусятниця 5 л з кришкою - сковородою Сітон',
      },
      {
        url: `${domain}images/size-saucepan.png`,
        title: 'Розміри чавунної гусятниці',
        caption: 'Литий чавунний посуд без покриття 32см * 20см * 13см',
      },
      {
        url: `${domain}images/size-cover.jpg`,
        title: 'Розміри чавунної гусятниці',
        caption: 'Литий чавунний посуд без покриття 32см * 20см * 13см',
      },
    ],
    video: [
      {
        thumbnail_loc: `${domain}images/video-thumbnail.png`,
        title: 'Відеоогляд',
        description: 'Короткий відеоогляд чавунної гусятниці',
        content_loc: `${domain}videos/video.MP4`,
        player_loc: `${domain}video-player.html`,
        duration: 120,
        publication_date: '2024-02-18T12:00:00+00:00',
        family_friendly: 'yes',
      },
    ],
  },
];

// Створення SitemapStream
const sitemapStream = new SitemapStream({ hostname: domain });

// Створення writeStream для запису в sitemap.xml
const writeStream = createWriteStream(resolve(__dirname, 'src/public/sitemap.xml'));

// Додавання сторінок до sitemap
pages.forEach((page) => sitemapStream.write(page));

// Завершення потоку
sitemapStream.end();

// Очікуємо на завершення генерації та записуємо в файл
streamToPromise(sitemapStream)
  .then(() => {
    console.log('✅ Sitemap generated!');
  })
  .catch((err) => {
    console.error('❌ Error generating sitemap:', err);
  });

// Перенаправлення потоку sitemapStream до writeStream
sitemapStream.pipe(writeStream);
