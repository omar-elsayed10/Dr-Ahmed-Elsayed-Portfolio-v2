$(document).ready(function () {
  //sticky header
  $(window).scroll(function () {
    if ($(this).scrollTop() > 1) {
      $(".header-area").addClass("sticky");
    } else {
      $(".header-area").removeClass("sticky");
    }

    // Update the active section in the header
    updateActiveSection();
  });

  $(".header ul li a").click(function (e) {
    e.preventDefault();

    var target = $(this).attr("href");

    if ($(target).hasClass("active-section")) {
      return;
    }

    if (target === "#home") {
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        500
      );
    } else {
      var offset = $(target).offset().top - 40;

      $("html, body").animate(
        {
          scrollTop: offset,
        },
        500
      );
    }

    $(".header ul li a").removeClass("active");
    $(this).addClass("active");
  });

  //Initial content revealing js
  ScrollReveal({
    distance: "100px",
    duration: 2000,
    delay: 200,
  });

  ScrollReveal().reveal(
    ".header a, .profile-photo, .about-content, .education",
    {
      origin: "left",
    }
  );
  ScrollReveal().reveal(
    ".header ul, .profile-text, .about-skills, .internship",
    {
      origin: "right",
    }
  );
  ScrollReveal().reveal(".project-title, .contact-title", {
    origin: "top",
  });
  ScrollReveal().reveal(".projects, .contact", {
    origin: "bottom",
  });

  //contact form to excel sheet
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbzUSaaX3XmlE5m9YLOHOBrRuCh2Ohv49N9bs4bew7xPd1qlgpvXtnudDs5Xhp3jF-Fx/exec";
  const form = document.forms["submitToGoogleSheet"];
  const msg = document.getElementById("msg");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        msg.innerHTML = "Message sent successfully";
        setTimeout(function () {
          msg.innerHTML = "";
        }, 5000);
        form.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  });
});

function updateActiveSection() {
  var scrollPosition = $(window).scrollTop();

  // Checking if scroll position is at the top of the page
  if (scrollPosition === 0) {
    $(".header ul li a").removeClass("active");
    $(".header ul li a[href='#home']").addClass("active");
    return;
  }

  // Iterate through each section and update the active class in the header
  $("section").each(function () {
    var target = $(this).attr("id");
    var offset = $(this).offset().top;
    var height = $(this).outerHeight();

    if (
      scrollPosition >= offset - 40 &&
      scrollPosition < offset + height - 40
    ) {
      $(".header ul li a").removeClass("active");
      $(".header ul li a[href='#" + target + "']").addClass("active");
    }
  });
}

// toggle menu
const menuIcon = document.querySelector(".menu_icon");
const navbar = document.querySelector(".navbar");

menuIcon.addEventListener("click", () => {
  navbar.classList.toggle("active");
});

$(document).ready(function () {
  // if dropdown option is du make intership word to this word Berufserfahrung
  $("#languageSwitcher").on("change", function () {
    if ($(this).val() === "de") {
      $(".internship .title").text("Berufserfahrung");
    } else {
      $(".internship .title").text("Internship");
    }
  });
  // =================== Translation Texts ===================
  const texts = {
    en: {
      navbar: ["Home", "About", "Education", "Blog", "Contact"],
      home: {
        hi: "Hi I'm",
        name: "Ahmed",
        description:
          "Welcome to my portfolio website! I am a dedicated and aspiring speech-language educator with a strong passion for working with children. My goal is to support linguistic development through targeted interventions and to uncover each child’s individual strengths.With joy, empathy, and professional expertise, I guide children on their journey to overcome language barriers and develop their communication skills. I view language not only as a means of communication but also as a key to participation, education, and self-confidence.I am constantly motivated to expand my knowledge, explore new methods, and incorporate innovative approaches into my educational practice.",
        btnCV: "Download CV",
        btnContact: "Contact",
      },
      about: {
        title: "About Me",
        list: [
          "I am currently pursuing a doctoral degree in speech-language education, focusing on early literacy acquisition. In my work, I combine scientific research with educational practice to understand how children can be best supported as they embark on the journey into the world of written language.",
          "My goal is to promote linguistic and literacy skills from an early age, enabling children to embark on a successful educational journey. I place particular emphasis on individualized support that fosters a love for language and writing while empowering each child in their uniqueness.",
        ],
        skills: [
          "Name: Ahmed Elsayed",
          "Age: 28",
          "From: Egypt",
          "Email:  ahmedenglish012@gmail.com",
          "Availability: Part-time",
        ],
      },
      education: {
        title: "Education",
        timeline: [
          {
            degree: "Dissertation: Literacy – Early Literacy Acquisition",
            school: "University: Justus Liebig University",
            year: "City: Giessen | Country: Germany [Oct. 2025] ",
          },
          {
            degree:
              "Master’s Degree: Inclusive Education and Early Childhood Education, with a focus on Speech-Language Education",
            school: "University: Justus Liebig University",
            year: "City: Giessen | Country: Germany [2023 – 2025]",
          },
          {
            degree: "Professional Diploma: in Early Childhood Education",
            school: "University: Cairo University",
            year: "City: Giza | Country: Egypt [2020 – 2021]",
          },
          {
            degree: "Bachelor’s Degree: Economics, specializing in Statistics",
            school: "University: Helwan University",
            year: "City: Helwan | Country: Egypt [2014 – 2019]",
          },
        ],
        internship: [
          {
            title: "Lecturer with a Focus on Speech-Language Education",
            company: "Institution: Justus-Liebig-Universität",
            month: "10.2025 – Present",
            description: "City: Giessen | Country: Germany",
          },
          {
            title: "Educational Support Staff and Inclusion Assistant",
            company:
              "Institution: Ev. Kindertageseinrichtung und Familienzentrum",
            month: "07.2025 – Present",
            description: "City: Giessen | Country: Germany",
          },
          {
            title: "Educational Support Staff",
            company: "Institution: Stephanusgemeinde für Kinder und Familie",
            month: "01.08.2024 – 30.09.2024",
            description: "City: Giessen | Country: Germany",
          },
          {
            title: "Educator",
            company: "Institution: Wiseness Schule",
            month: "2019 – 08.2022",
            description: "City: Giza | Country: Egypt",
          },
          {
            title: "English Teacher for Children",
            company: "Institution: Egypt Center for Training and Development",
            month: "10.2016 – 10.2017",
            description: "City: Giza | Country: Egypt",
          },
          {
            title: "English Teacher",
            company: "Institution: Happy Land Schule",
            month: "09.2015 – 2018",
            description: "City: Giza | Country: Egypt",
          },
        ],
      },
      // projects: {
      //   title: "My Projects",
      //   subtitle: "Discover my projects, where creativity meets innovation",
      //   items: [
      //     {
      //       title: "SnakeGame Using Java",
      //       description:
      //         "This is a simple implementation of the classic Snake game using Java and Swing.",
      //     },
      //     {
      //       title: "Nightguard",
      //       description:
      //         "An innovative embedded system solution for safer driving, combining matrix LED technology to reduce headlight glare and vibration sensors to detect potholes, enhancing road safety and minimizing accidents.",
      //     },
      //     {
      //       title: "Portfolio Website",
      //       description:
      //         "Created a portfolio website using HTML, CSS, and JavaScript. It serves as a platform to introduce myself, share my projects, and provide information about my education and internship.",
      //     },
      //   ],
      // },
      blog: {
        title: "My Blogs",
        subtitle: "Discover my blogs, where creativity meets innovation",
        items: [
          {
            title:
              "Language, Multilingualism, and Integration: Building Bridges Between Worlds",
            description:
              "Language is far more than just a means of communication. It is a key to the world, to identity, and to belonging. For many migrants in Germany, acquiring the language is the first step toward integration. It opens doors to education, employment, and social participation, as well as to human connection.In my work as a prospective speech and language therapist, I experience every day how crucial language is for children’s development especially for those growing up in multilingual environments. Multilingualism is not an obstacle but a valuable asset. Children who speak multiple languages are cognitively flexible and learn to understand and respect cultural differences.However, many families face significant challenges. Often, there is a lack of suitable support programs or awareness that speaking the heritage language does not hinder, but rather supports, the development of the German language. What truly matters is that children are linguistically stimulated in all their languages — at home, in kindergarten, and at school.My goal is to promote inclusive and intercultural language development. Learning a language means becoming part of a community. When we value multilingualism, we foster understanding and social cohesion.",
          },
        ],
      },
      contact: {
        title: "Contact Me",
        subtitle: "Get In Touch",
        whatsapp: "WhatsApp",
        linkedin: "LinkedIn",
        gmail: "Gmail",
      },
      footer: {
        message: "Thanks for visiting and happy coding!",
        copyright: "© Copyright 2025. All rights reserved.",
      },
    },
    de: {
      navbar: ["Startseite", "Über mich", "Bildung", "Blog", "Kontakt"],
      home: {
        hi: "Hallo, ich bin",
        name: "Ahmed",
        description:
          "Willkommen auf meiner Portfolio-Website! Ich bin ein engagierter und angehender Sprachheilpädagoge mit großer Leidenschaft für die Arbeit mit Kindern. Mein Ziel ist es, durch gezielte Förderung die sprachliche Entwicklung zu unterstützen und individuelle Stärken zu entdecken.Mit Freude, Einfühlungsvermögen und Fachwissen begleite ich Kinder auf ihrem Weg, sprachliche Hürden zu überwinden und ihre Kommunikationsfähigkeiten zu entfalten. Dabei sehe ich Sprache nicht nur als Mittel zur Verständigung, sondern auch als Schlüssel zu Teilhabe, Bildung und Selbstbewusstsein.Ich bin stets motiviert, mein Wissen zu erweitern, neue Methoden kennenzulernen und innovative Ansätze in meine pädagogische Arbeit einfließen zu lassen.",
        btnCV: "Lebenslauf herunterladen",
        btnContact: "Kontakt",
      },
      about: {
        title: "Über mich",
        list: [
          "Ich promoviere derzeit im Bereich Sprachheilpädagogik zum Thema früher Schriftspracherwerb. In meiner Arbeit verbinde ich wissenschaftliche Forschung mit pädagogischer Praxis, um zu verstehen, wie Kinder beim Einstieg in die Welt der Schrift bestmöglich unterstützt werden können.",
          "Mein Ziel ist es, sprachliche und schriftsprachliche Kompetenzen früh zu fördern und Kindern so einen erfolgreichen Bildungsweg zu ermöglichen. Dabei lege ich besonderen Wert auf eine individuelle Begleitung, die Freude an Sprache und Schrift vermittelt und jedes Kind in seiner Einzigartigkeit stärkt.",
        ],
        skills: [
          "Name : Ahmed Elsayed",
          "Alter : 28",
          "Herkunft : Ägypten",
          "Email : ahmedenglish012@gmail.com",
          "Verfügbarkeit : Teilzeit",
        ],
      },
      education: {
        title: "Berufliche Bildung",
        timeline: [
          {
            degree: "Dissertation: Literacy – früher Schriftspracherwerb",
            school: "Justus-Liebig-Universität",
            year: "Ort: Gießen | Land: Deutschland [Okt. 2025]",
          },
          {
            degree:
              "Master: „inklusive Pädagogik und Elementarbildung“ mit dem Schwerpunkt Sprachheilpädagogik",
            school: "Justus-Liebig-Universität",
            year: "Ort: Gießen | Land: Deutschland [2023 – 2025]",
          },
          {
            degree: "Berufsdiplom: im Bereich der frühkindlichen Erziehung",
            school: "Kairo Universität",
            year: "Ort: Giza | Land: Ägypten [2020 – 2021]",
          },
          {
            degree: "Bachelor: Wirtschaft, in dem Fachbereich Statistik",
            school: "Helwan Universität",
            year: "Ort: Helwan | Land: Ägypten [2014 – 2019]",
          },
        ],
        internship: [
          {
            title: "Lehrbeauftragter mit dem Schwerpunkt Sprachheilpädagogik",
            company: "Justus-Liebig-Universität",
            month: "10.2025 – bisher",
            description: "Ort: Gießen | Land: Deutschland",
          },
          {
            title: "Heilpädgogische Fachkraft und I-kraft",
            company: "Ev. Kindertageseinrichtung und Familienzentrum",
            month: "07.2025 – bisher",
            description: "Ort: Gießen | Land: Deutschland",
          },
          {
            title: "Pädagogische Unterstützungskraft",
            company: "Stephanusgemeinde für Kinder und Familie",
            month: "01.08.2024 – 30.09.2024",
            description: "Ort: Gießen | Land: Deutschland",
          },
          {
            title: "Erzieher",
            company: "Wiseness Schule",
            month: "2019 – 08.2022",
            description: "Ort: Giza | Land: Ägypten",
          },
          {
            title: "Englischlehrer für die Kinder",
            company: "Egypt Center for Training and Development",
            month: "10.2016 – 10.2017",
            description: "Ort: Giza | Land: Ägypten",
          },
          {
            title: "Englischlehrer",
            company: "Happy Land Schule",
            month: "09.2015 – 2018",
            description: "Ort: Giza | Land: Ägypten",
          },
        ],
      },
      // projects: {
      //   title: "Meine Projekte",
      //   subtitle:
      //     "Entdecken Sie meine Projekte, wo Kreativität auf Innovation trifft",
      //   items: [
      //     {
      //       title: "SnakeGame Using Java",
      //       description:
      //         "Dies ist eine einfache Implementierung des klassischen Snake-Spiels mit Java und Swing.",
      //     },
      //     {
      //       title: "Nightguard",
      //       description:
      //         "Eine innovative Embedded-System-Lösung für sicheres Fahren, die Matrix-LED-Technologie zur Reduzierung von Scheinwerferblendung und Vibrationssensoren zur Erkennung von Schlaglöchern kombiniert, um die Verkehrssicherheit zu erhöhen und Unfälle zu minimieren.",
      //     },
      //     {
      //       title: "Portfolio Website",
      //       description:
      //         "Erstellte Portfolio-Website mit HTML, CSS und JavaScript. Sie dient als Plattform, um mich vorzustellen, meine Projekte zu teilen und Informationen über meine Ausbildung und Praktika bereitzustellen.",
      //     },
      //   ],
      // },
      blog: {
        title: "Mein Blog",
        subtitle:
          "Entdecken Sie meine Blogs, wo Kreativität auf Innovation trifft",
        items: [
          {
            title:
              "Sprache, Mehrsprachigkeit und Integration: Brücken zwischen Welten",
            description:
              "Sprache ist weit mehr als nur ein Kommunikationsmittel. Sie ist ein Schlüssel zur Welt, zur Identität und zur Zugehörigkeit. Für viele Migrantinnen und Migranten in Deutschland ist der Erwerb der Sprache der erste Schritt in Richtung Integration. Sie öffnet Türen zu Bildung, Arbeit und gesellschaftlicher Teilhabe sowie zu zwischenmenschlicher Begegnung. In meiner Arbeit als angehende Sprachheilpädagogin erlebe ich täglich, wie wichtig Sprache für die Entwicklung von Kindern ist, insbesondere für mehrsprachig aufwachsende Kinder. Mehrsprachigkeit ist kein Hindernis, sondern ein wertvoller Vorteil. Kinder, die mehrere Sprachen sprechen, sind kognitiv flexibel und lernen, kulturelle Unterschiede zu verstehen und zu respektieren. Dennoch sehen sich viele Familien mit Herausforderungen konfrontiert. Oft fehlen passende Förderangebote oder das Bewusstsein, dass das Sprechen der Herkunftssprache die Entwicklung der deutschen Sprache nicht behindert, sondern sogar fördert. Entscheidend ist, dass Kinder in allen Sprachen sprachlich angeregt werden, und zwar in der Familie, in der Kita und in der Schule. Mein Ziel ist die inklusive und interkulturelle Sprachförderung. Eine Sprache zu lernen bedeutet, Teil einer Gemeinschaft zu werden. Wenn wir Mehrsprachigkeit wertschätzen, fördern wir Verständigung und Zusammenhalt.",
          },
        ],
      },
      contact: {
        title: "Kontakt",
        subtitle: "In Verbindung treten",
        whatsapp: "WhatsApp",
        linkedin: "LinkedIn",
        gmail: "Gmail",
      },
      footer: {
        message: "Danke für den Besuch und viel Spaß beim Programmieren!",
        copyright: "© Copyright 2025. Alle Rechte vorbehalten.",
      },
    },
  };

  // =================== Helper Function for Fade ===================
  function fadeChange(selector, newText) {
    $(selector).fadeOut(150, function () {
      $(this).text(newText).fadeIn(150);
    });
  }

  // =================== Change Language Function ===================
  function changeLanguage(lang) {
    // Navbar
    $(".header ul li a").each(function (i) {
      fadeChange(this, texts[lang].navbar[i]);
    });

    // Home
    fadeChange(".FirstElement h5", texts[lang].home.hi);
    fadeChange(".FirstElement h1", texts[lang].home.name);
    fadeChange(".FirstElement p", texts[lang].home.description);
    fadeChange(".btn-group a.btn.active", texts[lang].home.btnCV);
    fadeChange(".btn-group a.btn:not(.active)", texts[lang].home.btnContact);

    // About
    fadeChange(".about-content h4", texts[lang].about.title);
    $(".about-content ul li").each(function (i) {
      fadeChange(this, texts[lang].about.list[i]);
    });
    $(".about-skills ul li").each(function (i) {
      fadeChange(this, texts[lang].about.skills[i]);
    });

    // Education Titles
    $(".education .title").each(function (i) {
      fadeChange(this, texts[lang].education.title);
    });

    $(".timeline-item").each(function (i) {
      const edu = texts[lang].education.timeline[i];
      if (edu) {
        $(this).find("h3.timeline-title").eq(0).text(edu.degree);
        $(this).find("h4.timeline-title").eq(0).text(edu.school);
        $(this)
          .find("h4.timeline-title")
          .eq(1)
          .html('<i class="fa fa-calendar"></i> ' + edu.year);
      }
    });

    $(".internship .timeline-item").each(function (i) {
      const inter = texts[lang].education.internship[i];
      if (inter) {
        $(this).find("h3.timeline-title").eq(0).text(inter.title);
        $(this).find("h4.timeline-title").eq(0).text(inter.company);
        $(this)
          .find("h4.timeline-title")
          .eq(1)
          .html('<i class="fa fa-calendar"></i> ' + inter.month);
        $(this).find("li.timeline-text").text(inter.description);
      }
    });

    // Projects
    // $(".project-title h4").eq(0).text(texts[lang].projects.title);
    // $(".project-title p").eq(0).text(texts[lang].projects.subtitle);
    // $(".projects .project").each(function (i) {
    //   const item = texts[lang].projects.items[i];
    //   if (item) {
    //     $(this).find("h4").text(item.title);
    //     $(this).find("p").text(item.description);
    //   }
    // });

    // Blog
    $(".project-title h4").eq(1).text(texts[lang].blog.title);
    $(".project-title p").eq(1).text(texts[lang].blog.subtitle);
    $("#blog .projects .project").each(function (i) {
      const item = texts[lang].blog.items[i];
      if (item) {
        $(this).find("h4").text(item.title);
        $(this).find("p").text(item.description);
      }
    });

    // Contact
    fadeChange(".contact-title h4", texts[lang].contact.title);
    fadeChange(".contact-title p", texts[lang].contact.subtitle);
    fadeChange(".contact-buttons a.whatsapp", texts[lang].contact.whatsapp);
    fadeChange(".contact-buttons a.linkedin", texts[lang].contact.linkedin);
    fadeChange(".contact-buttons a.gmail", texts[lang].contact.gmail);

    // Footer
    fadeChange(".footer .message", texts[lang].footer.message);
    fadeChange(".footer .copyright", texts[lang].footer.copyright);
  }

  // =================== Language Switcher ===================
  $("#languageSwitcher").on("change", function () {
    changeLanguage($(this).val());
  });

  // Set default language
  changeLanguage("en");
});


