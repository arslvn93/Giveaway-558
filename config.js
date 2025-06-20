const config = {
  "modalQuestions": [
    {
      "id": "summer_weekend_activity",
      "questionText": "How do you currently spend your summer weekends?",
      "options": [
        { "value": "sports_events", "text": "Attending live sports games or events" },
        { "value": "home_family", "text": "Relaxing at home with family" },
        { "value": "exploring_new", "text": "Exploring new activities or places" },
        { "value": "working", "text": "Working or catching up on professional tasks" }
      ]
    },
    {
      "id": "family_setup",
      "questionText": "Which of the following closely matches your family setup?",
      "options": [
        { "value": "couple", "text": "Couple" },
        { "value": "young_couple_with_child", "text": "Young couple with a child" },
        { "value": "single_professional", "text": "Single professional" },
        { "value": "family_with_older_children", "text": "Family with older children" }
      ]
    },
    {
      "id": "social_activity_frequency",
      "questionText": "How often do you make time for social activities during the week?",
      "options": [
        { "value": "daily", "text": "Daily" },
        { "value": "few_times_week", "text": "A few times a week" },
        { "value": "once_week", "text": "Once a week" },
        { "value": "rarely", "text": "Rarely" }
      ]
    },
    {
      "id": "interest_in_sports_events",
      "questionText": "Which of the following best describes your interest in sports events or live performances?",
      "options": [
        { "value": "regular_attendee", "text": "I regularly attend games or performances" },
        { "value": "occasional_attendee", "text": "I attend occasionally; enjoy the atmosphere" },
        { "value": "few_past_attendance", "text": "I've attended a few in the past" },
        { "value": "not_interested", "text": "Not really interested, but open to trying" }
      ]
    }
  ],
  "giveaway": {
    "name": "Blue Jays Summer Game Night Giveaway",
    "heroHeadline": "Win <span class='highlight'>Free Toronto Blue Jays Tickets</span> for an Epic Summer Game Night!",
    "heroSubheadline": "Score two premium seats to see the Toronto Blue Jays take on the Texas Rangers, valued at $400! Make your summer unforgettable with this all-star night out. Entry closes July 25th, winner picked July 29th.",
    "promotionDates": "Enter from June 27th to July 25th, 2025 - winner announced July 29th!",
    "endDate": "2025-07-25T23:59:59",
    "heroBackgroundImageUrl": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/3x4pjwf8h1rma0cqhn6tw7t808.jpg",
    "heroCtaText": "Enter to Win Now!",
    "entryFormCtaText": "Enter Game Night Draw!",
    "successModalHeaderText": "You’re in the Draw!",
    "successModalMainMessage": "Your entry for the <strong>Toronto Blue Jays Summer Game Night</strong> is in! Winner will be announced July 29th and notified by email. Good luck!",
    "successModalEmailPrompt": "Watch your email and keep July 29th on your calendar—you could be on your way to the ballpark!"
  },
  "prize": {
    "name": "Toronto Blue Jays Summer Game Night Experience",
    "value": "$400 Value",
    "description": "Imagine you and your favorite person cheering in the stands as the Blue Jays play live against the Texas Rangers! Feel the rush, eat ballpark snacks, and enjoy a big summer night in the city. This giveaway gets you <span class='highlight'>two premium tickets</span> for the best seats in the house. Whether it’s a fun date or a night with a friend, you’ll remember it all year long.",
    "images": [
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/hg2dnqs7yhrm80cqhn79nt68j8.jpg",
        "alt": "Cheering fans at a Blue Jays baseball game"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/bk4ehhbc35rmc0cqhn78wzw7t8.jpg",
        "alt": "Couple enjoying a summer night at the Rogers Centre"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/w99mghnswxrm80cqhn7bm108b0.jpg",
        "alt": "Exciting baseball action between Toronto Blue Jays and Texas Rangers"
      },
      {
        "src": "https://salesgenius.s3.ca-central-1.amazonaws.com/giveaways/generations/wzcq768e4drme0cqhn7v49g7tr.jpg",
        "alt": "Tickets for a premier Blue Jays game experience"
      }
    ],
    "includedItems": [
      { "icon": "fas fa-baseball-ball", "text": "Two premium tickets to Blue Jays vs. Rangers" },
      { "icon": "fas fa-user-friends", "text": "Perfect for couples, friends, or a special family outing" },
      { "icon": "fas fa-star", "text": "$400 total value - for a big-time experience" },
      { "icon": "fas fa-city", "text": "Catch live baseball in downtown Toronto" },
      { "icon": "fas fa-calendar-day", "text": "Game date: Summer 2025, Texas Rangers matchup" }
    ],
    "limitedTimeOfferText": "Summer Only - Limited Entry!",
    "ctaButtonText": "I Want These Game Tickets!"
  },
  "howToEnter": {
    "steps": [
      {
        "icon": "fas fa-edit",
        "title": "Fill Out the Form",
        "description": "Enter your name and email in the quick form below—done in under 30 seconds!"
      },
      {
        "icon": "fas fa-question-circle",
        "title": "Answer Simple Questions",
        "description": "Tell us a little about who you’d bring and why you’d love this summer baseball night."
      },
      {
        "icon": "fas fa-trophy",
        "title": "Get Your Chance to Win!",
        "description": "That’s it! Watch your inbox—winner picked July 29th."
      }
    ],
    "highlights": [
      { "icon": "fas fa-clock", "text": "Super quick and easy entry" },
      { "icon": "fas fa-gift", "text": "No purchase needed" },
      { "icon": "fas fa-heart", "text": "Great night out with someone special" },
      { "icon": "fas fa-star", "text": "Random, fair winner pick" }
    ]
  },
  "entryForm": {
    "subtitle": "Enter your details below for a shot at your dream Blue Jays night out!",
    "entryCountText": "Hundreds of Toronto fans are already in—don’t miss your chance!",
    "socialSharePrompt": "Share with your friends—make it a race to win!",
    "sharePlatforms": {
      "facebook": "https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(window.location.href),
      "twitter": "https://twitter.com/intent/tweet?url=" + encodeURIComponent(window.location.href) + "&text=" + encodeURIComponent("Win Toronto Blue Jays Tickets for an Epic Summer Game Night!")
    }
  },
  "rules": {
    "fairSelectionInfo": {
      "title": "Fair and Random Drawing",
      "text": "Every entry has the same fair shot! Winner is chosen by a random draw. No tricks, just luck."
    },
    "importantNotice": {
      "title": "Watch Your Email",
      "text": "Only the email you use here will be contacted. Be sure to check your spam, too, on July 29th."
    },
    "faq": [
      {
        "q": "Who can enter this giveaway?",
        "a": "Anyone 18 or older living in Ontario can enter. Couples, families, and friends are welcome!"
      },
      {
        "q": "How will I know if I win?",
        "a": "Winner will get an email from jk@property.ca on July 29th. Check your inbox and spam!"
      },
      {
        "q": "Do I have to pay for anything?",
        "a": "Nope—the tickets are totally free! Just show up and enjoy the game."
      },
      {
        "q": "What if I can’t make the game?",
        "a": "If you can’t attend, let us know so someone else can use this amazing prize."
      }
    ],
    "tips": [
      "Double-check your email for typos—make sure you can be reached",
      "Think of who you'd take for this special night",
      "Tell family and friends to enter too",
      "Follow Julian Kashani on Instagram or Facebook for the winner post"
    ]
  },
  "footerContact": {
    "organizerName": "Julian Kashani",
    "organizerLogoUrl": "",
    "email": "jk@property.ca",
    "phone": "(416) 837-7775",
    "address": "36 Distillery Lane Unit 500 Toronto M5A3C4",
    "brokerageName": "Property.Ca",
    "secondaryLogoUrl": "",
    "secondaryLogoAlt": "Property.Ca Brokerage Logo",
    "social": {
      "facebook": "https://www.facebook.com/JulianKashaniRealtor",
      "instagram": "http://instagram.com/juliankashani"
    },
    "agentContact": {
      "name": "Julian Kashani",
      "title": "Real Estate Agent",
      "phone": "(416) 837-7775",
      "email": "jk@property.ca",
      "headshotImageUrl": "https://prod-files-secure.s3.us-west-2.amazonaws.com/8e0c10a0-da43-409c-b191-91135b7161ff/92accef5-b30e-4259-8b9e-b230d7fe2eb7/julian-headshot.jpg"
    },
    "copyrightOwner": "Property.Ca",
    "footerDisclaimer": "This giveaway is sponsored by Julian Kashani, REALTOR®, and is not sponsored by or affiliated with the Toronto Blue Jays or Texas Rangers. Winner selected at random from entries received by July 25th, 2025. Must be 18+ and an Ontario resident to enter."
  },
  "meta": {
    "pageTitle": "Win $400 Blue Jays Tickets - Summer Game Night Giveaway!",
    "navBrandLogoText": "Julian Kashani",
    "privacyPolicyLink": "https://property.ca/privacy"
  },
  "settings": {
    "theme": "dark",
    "primaryColorOverride": "",
    "confettiColors": ["#0055A4", "#003366", "#FFFFFF"] ,
    "showCountdownInHero": true
  },
  "deploymentInfo": {
    "repoName": "Giveaway-558",
    "repoUrl": "https://github.com/arslvn93/Giveaway-558",
    "tag": "Blue Jays Summer Game Night Giveaway",
    "netlifyUrl": "http://Giveaway-558.netlify.app"
  }
};