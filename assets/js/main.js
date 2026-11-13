(() => {
      const translations = {
        ta: {
          eyebrow: 'இரு குடும்பங்களின் அன்புடன்', title: 'நம் திருமணம்', name1: 'மோனிகா', name2: 'செந்தமிழன்',
          intro: 'எங்கள் வாழ்வின் இனிய தொடக்க விழாவில் தங்களையும் குடும்பத்தினரையும் அன்புடன் வரவேற்கிறோம்.',
          heroDate: '17 & 18 மார்ச் 2027 · புதுச்சேரி',
          bigDay: 'இனிய நாள் நெருங்குகிறது', countTitle: 'இனிதே தொடங்கும் இல்லறப் பயணம்',
          countNote: 'திருமண நாள் · 18 மார்ச் 2027 · காலை 9:00 மணி (IST)',
          days: 'நாட்கள்', hours: 'மணி', minutes: 'நிமிடங்கள்', seconds: 'விநாடிகள்',
          countMessage: 'ஒவ்வொரு நொடியும் அந்த இனிய தருணத்தை நெருங்கச் செய்கிறது.',
          saveDate: 'நாளைக் குறித்து வைத்துக்கொள்ளுங்கள்', eventsTitle: 'இரண்டு நாட்கள் இனிய கொண்டாட்டம்',
          dayOne: 'முதல் நாள்', reception: 'வரவேற்பு', receptionDate: 'புதன்கிழமை, 17 மார்ச் 2027',
          receptionTime: 'மாலை 7:00 – 9:00 மணி', dayTwo: 'இரண்டாம் நாள்', marriage: 'திருமணம்',
          marriageDate: 'வியாழக்கிழமை, 18 மார்ச் 2027', marriageTime: 'காலை 9:00 மணி',
          venueKicker: 'நிகழ்விடம்', venueTitle: 'உங்கள் வருகையை ஆவலுடன் எதிர்நோக்குகிறோம்',
          venueName: 'ஸ்ரீ ராஜ ராஜேஸ்வரி திருமண மண்டபம்',
          venueAddress: 'எண் 144, 100 அடி கிழக்கு கடற்கரைச் சாலை (ECR), பாக்கமுடையன்பேட்டை, லாஸ்பேட்டை, புதுச்சேரி – 605008.',
          mapButton: 'கூகுள் வரைபடத்தில் பார்க்க', directionsButton: 'வழித்தடம்',
          footer: 'உங்கள் வருகையே எங்கள் மகிழ்ச்சி · அன்புடன்',
          fontLabTitle: 'தமிழ் எழுத்துருக்களைப் பாருங்கள்', fontLabHint: 'எழுத்துரு தேர்வு',
          fontLabIntro: 'ஒவ்வொரு எழுத்துருவையும் பார்த்து, பிடித்ததைத் தேர்ந்தெடுக்கலாம். தேர்வு செய்ததும் முழு அழைப்பிதழிலும் அது பயன்படுத்தப்படும்.',
          fontClassic: 'பாரம்பரியம்', fontDecorative: 'அலங்காரமான', fontModern: 'நவீன எளிமை',
          fontVersatile: 'மென்மையான', fontLiterary: 'இலக்கிய நயம்', fontClean: 'தெளிவான தோற்றம்',
          fontUse: 'இந்த எழுத்துருவைப் பயன்படுத்து', fontCurrent: 'தற்போதைய எழுத்துரு',
          finished: 'திருமணக் கொண்டாட்டம் இனிதே தொடங்கிவிட்டது!'
        },
        en: {
          eyebrow: 'Together with our families', title: 'Our Wedding', name1: 'Monika', name2: 'Senthamizhan',
          intro: 'With joyful hearts, we invite you and your family to celebrate the beginning of our forever.',
          heroDate: '17 & 18 March 2027 · Puducherry',
          bigDay: 'The special day is getting closer', countTitle: 'Counting down to forever',
          countNote: 'Wedding day · 18 March 2027 · 9:00 AM (IST)',
          days: 'Days', hours: 'Hours', minutes: 'Minutes', seconds: 'Seconds',
          countMessage: 'Every moment brings us closer to the celebration.',
          saveDate: 'Please save the dates', eventsTitle: 'Two days of celebration',
          dayOne: 'Day one', reception: 'Reception', receptionDate: 'Wednesday, 17 March 2027',
          receptionTime: '7:00 PM – 9:00 PM', dayTwo: 'Day two', marriage: 'Wedding ceremony',
          marriageDate: 'Thursday, 18 March 2027', marriageTime: '9:00 AM',
          venueKicker: 'The venue', venueTitle: 'We look forward to celebrating with you',
          venueName: 'Shree Raja Rajeswari Thirumana Mandabam',
          venueAddress: 'No. 144, 100 Feet East Coast Road (ECR), Pakkamudayanpet, Lawspet, Puducherry – 605008, India.',
          mapButton: 'View on Google Maps', directionsButton: 'Get directions',
          footer: 'Your presence is our happiness · With love',
          fontLabTitle: 'Explore Tamil fonts', fontLabHint: 'Choose a style',
          fontLabIntro: 'Preview each typeface and choose your favourite. Your selection will be applied across the invitation.',
          fontClassic: 'Traditional', fontDecorative: 'Decorative', fontModern: 'Modern & clean',
          fontVersatile: 'Soft & versatile', fontLiterary: 'Literary', fontClean: 'Clean & clear',
          fontUse: 'Use this font', fontCurrent: 'Current font',
          finished: 'The celebration has begun. Today is the day!'
        }
      };

      const languageButtons = document.querySelectorAll('[data-language]');
      const baminiTargets = new Set([
        document.getElementById('page-title'),
        ...document.querySelectorAll('.couple-names [data-i18n], .hero-copy, .countdown-note, .countdown-section h2, .events .section-heading, .venue .section-heading, .event-card h3, .event-date, .event-time, .venue-name, .venue-address, footer')
      ]);
      baminiTargets.delete(null);

      const weddingTime = new Date('2027-03-18T09:00:00+05:30').getTime();
      let currentLanguage = 'ta';
      let baminiReady = false;   // stays false until both Bamini fonts have really loaded
      let finishedShown = Date.now() >= weddingTime;

      // Bamini maps Latin letters to Tamil glyphs, so Latin words (IST, ECR) are kept out of it.
      // Screen readers get the real Unicode text; the Bamini text is visual only (aria-hidden).
      function renderLegacy(element, text) {
        const reader = document.createElement('span');
        reader.className = 'sr-only';
        reader.textContent = text;
        const visual = document.createElement('span');
        visual.setAttribute('aria-hidden', 'true');
        text.split(/([A-Za-z]+)/).forEach((part, index) => {
          if (!part) return;
          const span = document.createElement('span');
          if (index % 2 === 1) {
            span.textContent = part;
          } else {
            span.className = 'legacy-tamil';
            span.textContent = window.unicodeToBamini(part);
          }
          visual.appendChild(span);
        });
        element.replaceChildren(reader, visual);
      }

      function setText(element, text) {
        const useBamini = currentLanguage === 'ta' && baminiReady &&
          baminiTargets.has(element) && typeof window.unicodeToBamini === 'function';
        if (useBamini) renderLegacy(element, text);
        else element.textContent = text;
      }

      function renderTexts() {
        const copy = translations[currentLanguage];
        document.querySelectorAll('[data-i18n]').forEach((element) => {
          const key = (element.id === 'countdown-message' && Date.now() >= weddingTime)
            ? 'finished' : element.dataset.i18n;
          if (copy[key]) setText(element, copy[key]);
        });
      }

      function setLanguage(language) {
        currentLanguage = language;
        document.documentElement.lang = language;
        document.body.classList.toggle('lang-en', language === 'en');
        document.title = language === 'ta' ? 'மோனிகா & செந்தமிழன் | 17–18 மார்ச் 2027' : 'Monika & Senthamizhan | 17–18 March 2027';
        renderTexts();
        languageButtons.forEach((button) => {
          button.setAttribute('aria-pressed', String(button.dataset.language === language));
        });
        document.getElementById('countdown').setAttribute('aria-label',
          language === 'ta' ? 'திருமணத்திற்கான மீதமுள்ள நேரம்' : 'Time remaining until the wedding');
        try { localStorage.setItem('wedding-language', language); } catch (_) {}
      }
      languageButtons.forEach((button) => button.addEventListener('click', () => setLanguage(button.dataset.language)));

      let initialLanguage = 'ta';
      try {
        const savedLanguage = localStorage.getItem('wedding-language');
        if (savedLanguage === 'ta' || savedLanguage === 'en') initialLanguage = savedLanguage;
      } catch (_) {}
      setLanguage(initialLanguage);   // readable Unicode Tamil first

      // Switch to Bamini only after both font files are confirmed loaded (4s limit).
      function loadBaminiFonts() {
        if (!document.fonts || !document.fonts.load) return Promise.resolve(false);
        const timeout = new Promise((resolve) => setTimeout(() => resolve(false), 4000));
        const loads = Promise.all([
          document.fonts.load("1em 'Bamini Tamil 70'", 'a'),
          document.fonts.load("1em 'Bamini Tamil 71'", 'a')
        ]).then((results) => results.every((faces) => faces.length > 0));
        return Promise.race([loads, timeout]).catch(() => false);
      }
      loadBaminiFonts().then((ok) => {
        baminiReady = ok;
        if (ok) renderTexts();
      });

      const fields = {
        days: document.getElementById('days'), hours: document.getElementById('hours'),
        minutes: document.getElementById('minutes'), seconds: document.getElementById('seconds')
      };
      function updateCountdown() {
        const remaining = weddingTime - Date.now();
        if (remaining <= 0) {
          Object.values(fields).forEach((field) => { field.textContent = '00'; });
          if (!finishedShown) { finishedShown = true; renderTexts(); }
          return;
        }
        const totalSeconds = Math.floor(remaining / 1000);
        fields.days.textContent = String(Math.floor(totalSeconds / 86400)).padStart(3, '0');
        fields.hours.textContent = String(Math.floor((totalSeconds % 86400) / 3600)).padStart(2, '0');
        fields.minutes.textContent = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, '0');
        fields.seconds.textContent = String(totalSeconds % 60).padStart(2, '0');
      }
      updateCountdown();
      window.setInterval(updateCountdown, 1000);
    })();
