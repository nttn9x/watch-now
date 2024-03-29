import { http, HttpResponse } from "msw";

export const popularMovies = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/r9oTasGQofvkQY5vlUXglneF64Z.jpg",
      genre_ids: [28, 35],
      id: 1029575,
      original_language: "en",
      original_title: "The Family Plan",
      overview:
        "Dan Morgan is many things: a devoted husband, a loving father, a celebrated car salesman. He's also a former assassin. And when his past catches up to his present, he's forced to take his unsuspecting family on a road trip unlike any other.",
      popularity: 3086.075,
      poster_path: "/jLLtx3nTRSLGPAKl4RoIv1FbEBr.jpg",
      release_date: "2023-12-14",
      title: "The Family Plan",
      video: false,
      vote_average: 7.402,
      vote_count: 614,
    },
    {
      adult: false,
      backdrop_path: "/sRLC052ieEzkQs9dEtPMfFxYkej.jpg",
      genre_ids: [878],
      id: 848326,
      original_language: "en",
      original_title: "Rebel Moon - Part One: A Child of Fire",
      overview:
        "When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch Kora, a young woman with a mysterious past, to seek out warriors from neighboring planets to help them take a stand.",
      popularity: 2101.05,
      poster_path: "/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg",
      release_date: "2023-12-15",
      title: "Rebel Moon - Part One: A Child of Fire",
      video: false,
      vote_average: 6.478,
      vote_count: 1093,
    },
    {
      adult: false,
      backdrop_path: "/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg",
      genre_ids: [18, 878, 28],
      id: 695721,
      original_language: "en",
      original_title: "The Hunger Games: The Ballad of Songbirds & Snakes",
      overview:
        "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
      popularity: 2016.503,
      poster_path: "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
      release_date: "2023-11-15",
      title: "The Hunger Games: The Ballad of Songbirds & Snakes",
      video: false,
      vote_average: 7.2,
      vote_count: 1352,
    },
    {
      adult: false,
      backdrop_path: "/gg4zZoTggZmpAQ32qIrP5dtnkEZ.jpg",
      genre_ids: [28, 80],
      id: 891699,
      original_language: "en",
      original_title: "Silent Night",
      overview:
        "A tormented father witnesses his young son die when caught in a gang's crossfire on Christmas Eve. While recovering from a wound that costs him his voice, he makes vengeance his life's mission and embarks on a punishing training regimen in order to avenge his son's death.",
      popularity: 1345.446,
      poster_path: "/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg",
      release_date: "2023-11-30",
      title: "Silent Night",
      video: false,
      vote_average: 5.876,
      vote_count: 250,
    },
    {
      adult: false,
      backdrop_path: "/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
      genre_ids: [28, 12, 14],
      id: 572802,
      original_language: "en",
      original_title: "Aquaman and the Lost Kingdom",
      overview:
        "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
      popularity: 1343.363,
      poster_path: "/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg",
      release_date: "2023-12-20",
      title: "Aquaman and the Lost Kingdom",
      video: false,
      vote_average: 6.509,
      vote_count: 407,
    },
    {
      adult: false,
      backdrop_path: "/ktHEdqmMWC1wdfPRMRCTZe2OISL.jpg",
      genre_ids: [27, 9648, 53],
      id: 1071215,
      original_language: "en",
      original_title: "Thanksgiving",
      overview:
        "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
      popularity: 1314.751,
      poster_path: "/f5f3TEVst1nHHyqgn7Z3tlwnBIH.jpg",
      release_date: "2023-11-16",
      title: "Thanksgiving",
      video: false,
      vote_average: 6.684,
      vote_count: 449,
    },
    {
      adult: false,
      backdrop_path: "/uvqf3e451hBviQiCvPx4lapVOKf.jpg",
      genre_ids: [27],
      id: 1131755,
      original_language: "en",
      original_title: "A Creature Was Stirring",
      overview:
        "A nurse taking care of her daughter's mysterious affliction struggles to hide her secrets when uninvited strangers take shelter in her house during a lethal blizzard.",
      popularity: 1272.065,
      poster_path: "/ikQG3byEFyfwcnF0zmyNtXTmr5v.jpg",
      release_date: "2023-12-08",
      title: "A Creature Was Stirring",
      video: false,
      vote_average: 5.3,
      vote_count: 13,
    },
    {
      adult: false,
      backdrop_path: "/t5zCBSB5xMDKcDqe91qahCOUYVV.jpg",
      genre_ids: [27, 9648],
      id: 507089,
      original_language: "en",
      original_title: "Five Nights at Freddy's",
      overview:
        "Recently fired and desperate for work, a troubled young man named Mike agrees to take a position as a night security guard at an abandoned theme restaurant: Freddy Fazbear's Pizzeria. But he soon discovers that nothing at Freddy's is what it seems.",
      popularity: 1160.316,
      poster_path: "/7BpNtNfxuocYEVREzVMO75hso1l.jpg",
      release_date: "2023-10-25",
      title: "Five Nights at Freddy's",
      video: false,
      vote_average: 7.753,
      vote_count: 3090,
    },
    {
      adult: false,
      backdrop_path: "/X8yF6STUk5Zr5nAuLBJiio8Sxh.jpg",
      genre_ids: [18, 10749],
      id: 1143183,
      original_language: "tl",
      original_title: "Rewind",
      overview:
        "Mary loves John for as long as she can remember. But after years of marriage, John's priorities shift, leading to a strained relationship with Mary, which causes a tragic accident that takes away Mary's life. Until one day, John gets an extraordinary proposition - to rewind time and save the life of the woman he loves.",
      popularity: 874.903,
      poster_path: "/ru1i4ZR11lPPVArk3fOcO1VCOlD.jpg",
      release_date: "2024-01-04",
      title: "Rewind",
      video: false,
      vote_average: 7.3,
      vote_count: 9,
    },
    {
      adult: false,
      backdrop_path: "/rb3QQ2TQfJoCpCZlfXBlBbzYy1D.jpg",
      genre_ids: [53, 28],
      id: 844416,
      original_language: "en",
      original_title: "Rumble Through the Dark",
      overview:
        "Set in the dark landscape of the Mississippi Delta, where a former bare-knuckle fighter must win one last fight to pay off his debts to the local mob boss and save his childhood home—the stakes nothing less than life or death.",
      popularity: 842.319,
      poster_path: "/19UbYIT9WEQS5qSD3BREDxVXk8g.jpg",
      release_date: "2023-11-03",
      title: "Rumble Through the Dark",
      video: false,
      vote_average: 6.609,
      vote_count: 32,
    },
    {
      adult: false,
      backdrop_path: "/zIYROrkHJPYB3VTiW1L9QVgaQO.jpg",
      genre_ids: [28, 35],
      id: 897087,
      original_language: "en",
      original_title: "Freelance",
      overview:
        "An ex-special forces operative takes a job to provide security for a journalist as she interviews a dictator, but a military coup breaks out in the middle of the interview, they are forced to escape into the jungle where they must survive.",
      popularity: 813.979,
      poster_path: "/7Bd4EUOqQDKZXA6Od5gkfzRNb0.jpg",
      release_date: "2023-10-05",
      title: "Freelance",
      video: false,
      vote_average: 6.485,
      vote_count: 437,
    },
    {
      adult: false,
      backdrop_path: "/EEASOZj5Mm2u6G3K4HS4pKIlfC.jpg",
      genre_ids: [27, 9648],
      id: 1035982,
      original_language: "en",
      original_title: "Hell House LLC Origins: The Carmichael Manor",
      overview:
        "A group of cold case investigators stay at the Carmichael Manor, site of the grisly and unsolved murders of the Carmichael family back in the eighties. After four nights, the group was never heard from again. What is discovered on their footage is even more disturbing than anything found on the Hell House tapes.",
      popularity: 794.574,
      poster_path: "/irxr1vZdpQl7Vnn8vdysnD69uba.jpg",
      release_date: "2023-10-24",
      title: "Hell House LLC Origins: The Carmichael Manor",
      video: false,
      vote_average: 6.288,
      vote_count: 52,
    },
    {
      adult: false,
      backdrop_path: "/yOm993lsJyPmBodlYjgpPwBjXP9.jpg",
      genre_ids: [35, 10751, 14],
      id: 787699,
      original_language: "en",
      original_title: "Wonka",
      overview:
        "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
      popularity: 791.413,
      poster_path: "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
      release_date: "2023-12-06",
      title: "Wonka",
      video: false,
      vote_average: 7.103,
      vote_count: 881,
    },
    {
      adult: false,
      backdrop_path: "/rMvPXy8PUjj1o8o1pzgQbdNCsvj.jpg",
      genre_ids: [28, 12, 53],
      id: 299054,
      original_language: "en",
      original_title: "Expend4bles",
      overview:
        "Armed with every weapon they can get their hands on and the skills to use them, The Expendables are the world’s last line of defense and the team that gets called when all other options are off the table. But new team members with new styles and tactics are going to give “new blood” a whole new meaning.",
      popularity: 786.646,
      poster_path: "/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg",
      release_date: "2023-09-15",
      title: "Expend4bles",
      video: false,
      vote_average: 6.437,
      vote_count: 983,
    },
    {
      adult: false,
      backdrop_path: "/kjQBrc00fB2RjHZB3PGR4w9ibpz.jpg",
      genre_ids: [28, 12, 878],
      id: 670292,
      original_language: "en",
      original_title: "The Creator",
      overview:
        "Amid a future war between the human race and the forces of artificial intelligence, a hardened ex-special forces agent grieving the disappearance of his wife, is recruited to hunt down and kill the Creator, the elusive architect of advanced AI who has developed a mysterious weapon with the power to end the war—and mankind itself.",
      popularity: 776.276,
      poster_path: "/vBZ0qvaRxqEhZwl6LWmruJqWE8Z.jpg",
      release_date: "2023-09-27",
      title: "The Creator",
      video: false,
      vote_average: 7.16,
      vote_count: 1767,
    },
    {
      adult: false,
      backdrop_path: "/rLb2cwF3Pazuxaj0sRXQ037tGI1.jpg",
      genre_ids: [18, 36],
      id: 872585,
      original_language: "en",
      original_title: "Oppenheimer",
      overview:
        "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
      popularity: 746.774,
      poster_path: "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
      release_date: "2023-07-19",
      title: "Oppenheimer",
      video: false,
      vote_average: 8.119,
      vote_count: 5946,
    },
    {
      adult: false,
      backdrop_path: "/36Lt4NXw5ucLDobs7dvJCIniXCp.jpg",
      genre_ids: [27],
      id: 807172,
      original_language: "en",
      original_title: "The Exorcist: Believer",
      overview:
        "When two girls disappear into the woods and return three days later with no memory of what happened to them, the father of one girl seeks out Chris MacNeil, who's been forever altered by what happened to her daughter fifty years ago.",
      popularity: 710.242,
      poster_path: "/qVKirUdmoex8SdfUk8WDDWwrcCh.jpg",
      release_date: "2023-10-04",
      title: "The Exorcist: Believer",
      video: false,
      vote_average: 6.154,
      vote_count: 723,
    },
    {
      adult: false,
      backdrop_path: "/k1KrbaCMACQiq7EA0Yhw3bdzMv7.jpg",
      genre_ids: [16, 10751, 10402, 14, 35],
      id: 901362,
      original_language: "en",
      original_title: "Trolls Band Together",
      overview:
        "When Branch's brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
      popularity: 705.3,
      poster_path: "/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
      release_date: "2023-10-12",
      title: "Trolls Band Together",
      video: false,
      vote_average: 7.181,
      vote_count: 486,
    },
    {
      adult: false,
      backdrop_path: "/9PqD3wSIjntyJDBzMNuxuKHwpUD.jpg",
      genre_ids: [16, 35, 10751],
      id: 1075794,
      original_language: "en",
      original_title: "Leo",
      overview:
        "Jaded 74-year-old lizard Leo has been stuck in the same Florida classroom for decades with his terrarium-mate turtle. When he learns he only has one year left to live, he plans to escape to experience life on the outside but instead gets caught up in the problems of his anxious students — including an impossibly mean substitute teacher.",
      popularity: 684.943,
      poster_path: "/pD6sL4vntUOXHmuvJPPZAgvyfd9.jpg",
      release_date: "2023-11-17",
      title: "Leo",
      video: false,
      vote_average: 7.519,
      vote_count: 772,
    },
    {
      adult: false,
      backdrop_path: "/tj7mp7uWjVw5N73G5Hwm1bkMOcD.jpg",
      genre_ids: [28, 10752],
      id: 975902,
      original_language: "en",
      original_title: "Boudica",
      overview:
        "Inspired by events in A.D. 60, Boudica follows the eponymous Celtic warrior who rules the Iceni people alongside her husband Prasutagus. When he dies at the hands of Roman soldiers, Boudica’s kingdom is left without a male heir and the Romans seize her land and property.  Driven to the edge of madness and determined to avenge her husband’s death, Boudica rallies the various tribes from the region and wages an epic war against the mighty Roman empire.",
      popularity: 664.279,
      poster_path: "/adMcxfUonnm9RvPImGHy25wYUks.jpg",
      release_date: "2023-10-26",
      title: "Boudica",
      video: false,
      vote_average: 5.948,
      vote_count: 96,
    },
  ],
  total_pages: 42168,
  total_results: 843354,
};

export const upComingMovies = {
  dates: {
    maximum: "2024-01-31",
    minimum: "2024-01-10",
  },
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
      genre_ids: [28, 12, 14],
      id: 572802,
      original_language: "en",
      original_title: "Aquaman and the Lost Kingdom",
      overview:
        "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
      popularity: 1536.539,
      poster_path: "/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg",
      release_date: "2023-12-20",
      title: "Aquaman and the Lost Kingdom",
      video: false,
      vote_average: 6.509,
      vote_count: 410,
    },
    {
      adult: false,
      backdrop_path: "/X8yF6STUk5Zr5nAuLBJiio8Sxh.jpg",
      genre_ids: [18, 10749],
      id: 1143183,
      original_language: "tl",
      original_title: "Rewind",
      overview:
        "Mary loves John for as long as she can remember. But after years of marriage, John's priorities shift, leading to a strained relationship with Mary, which causes a tragic accident that takes away Mary's life. Until one day, John gets an extraordinary proposition - to rewind time and save the life of the woman he loves.",
      popularity: 988.591,
      poster_path: "/ru1i4ZR11lPPVArk3fOcO1VCOlD.jpg",
      release_date: "2024-01-04",
      title: "Rewind",
      video: false,
      vote_average: 7.1,
      vote_count: 10,
    },
    {
      adult: false,
      backdrop_path: "/yOm993lsJyPmBodlYjgpPwBjXP9.jpg",
      genre_ids: [35, 10751, 14],
      id: 787699,
      original_language: "en",
      original_title: "Wonka",
      overview:
        "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
      popularity: 902.407,
      poster_path: "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
      release_date: "2023-12-06",
      title: "Wonka",
      video: false,
      vote_average: 7.104,
      vote_count: 885,
    },
  ],
  total_pages: 1,
  total_results: 2,
};

export const nowPlayingMovies = {
  dates: {
    maximum: "2024-01-10",
    minimum: "2023-11-29",
  },
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/r9oTasGQofvkQY5vlUXglneF64Z.jpg",
      genre_ids: [28, 35],
      id: 1029575,
      original_language: "en",
      original_title: "The Family Plan",
      overview:
        "Dan Morgan is many things: a devoted husband, a loving father, a celebrated car salesman. He's also a former assassin. And when his past catches up to his present, he's forced to take his unsuspecting family on a road trip unlike any other.",
      popularity: 4320.505,
      poster_path: "/jLLtx3nTRSLGPAKl4RoIv1FbEBr.jpg",
      release_date: "2023-12-14",
      title: "The Family Plan",
      video: false,
      vote_average: 7.401,
      vote_count: 616,
    },
    {
      adult: false,
      backdrop_path: "/sRLC052ieEzkQs9dEtPMfFxYkej.jpg",
      genre_ids: [878],
      id: 848326,
      original_language: "en",
      original_title: "Rebel Moon - Part One: A Child of Fire",
      overview:
        "When a peaceful colony on the edge of the galaxy finds itself threatened by the armies of the tyrannical Regent Balisarius, they dispatch Kora, a young woman with a mysterious past, to seek out warriors from neighboring planets to help them take a stand.",
      popularity: 2761.277,
      poster_path: "/ui4DrH1cKk2vkHshcUcGt2lKxCm.jpg",
      release_date: "2023-12-15",
      title: "Rebel Moon - Part One: A Child of Fire",
      video: false,
      vote_average: 6.474,
      vote_count: 1096,
    },
    {
      adult: false,
      backdrop_path: "/5a4JdoFwll5DRtKMe7JLuGQ9yJm.jpg",
      genre_ids: [18, 878, 28],
      id: 695721,
      original_language: "en",
      original_title: "The Hunger Games: The Ballad of Songbirds & Snakes",
      overview:
        "64 years before he becomes the tyrannical president of Panem, Coriolanus Snow sees a chance for a change in fortunes when he mentors Lucy Gray Baird, the female tribute from District 12.",
      popularity: 2823.104,
      poster_path: "/mBaXZ95R2OxueZhvQbcEWy2DqyO.jpg",
      release_date: "2023-11-15",
      title: "The Hunger Games: The Ballad of Songbirds & Snakes",
      video: false,
      vote_average: 7.234,
      vote_count: 1354,
    },
    {
      adult: false,
      backdrop_path: "/gg4zZoTggZmpAQ32qIrP5dtnkEZ.jpg",
      genre_ids: [28, 80],
      id: 891699,
      original_language: "en",
      original_title: "Silent Night",
      overview:
        "A tormented father witnesses his young son die when caught in a gang's crossfire on Christmas Eve. While recovering from a wound that costs him his voice, he makes vengeance his life's mission and embarks on a punishing training regimen in order to avenge his son's death.",
      popularity: 1883.624,
      poster_path: "/tlcuhdNMKNGEVpGqBZrAaOOf1A6.jpg",
      release_date: "2023-11-30",
      title: "Silent Night",
      video: false,
      vote_average: 5.885,
      vote_count: 252,
    },
    {
      adult: false,
      backdrop_path: "/jXJxMcVoEuXzym3vFnjqDW4ifo6.jpg",
      genre_ids: [28, 12, 14],
      id: 572802,
      original_language: "en",
      original_title: "Aquaman and the Lost Kingdom",
      overview:
        "Black Manta, still driven by the need to avenge his father's death and wielding the power of the mythic Black Trident, will stop at nothing to take Aquaman down once and for all. To defeat him, Aquaman must turn to his imprisoned brother Orm, the former King of Atlantis, to forge an unlikely alliance in order to save the world from irreversible destruction.",
      popularity: 1536.539,
      poster_path: "/8xV47NDrjdZDpkVcCFqkdHa3T0C.jpg",
      release_date: "2023-12-20",
      title: "Aquaman and the Lost Kingdom",
      video: false,
      vote_average: 6.509,
      vote_count: 407,
    },
    {
      adult: false,
      backdrop_path: "/ktHEdqmMWC1wdfPRMRCTZe2OISL.jpg",
      genre_ids: [27, 9648, 53],
      id: 1071215,
      original_language: "en",
      original_title: "Thanksgiving",
      overview:
        "After a Black Friday riot ends in tragedy, a mysterious Thanksgiving-inspired killer terrorizes Plymouth, Massachusetts - the birthplace of the holiday. Picking off residents one by one, what begins as random revenge killings are soon revealed to be part of a larger, sinister holiday plan.",
      popularity: 1521.483,
      poster_path: "/1QiGcvzh225Kk9N0OMtlWjTcsie.jpg",
      release_date: "2023-11-16",
      title: "Thanksgiving",
      video: false,
      vote_average: 6.703,
      vote_count: 454,
    },
    {
      adult: false,
      backdrop_path: "/uvqf3e451hBviQiCvPx4lapVOKf.jpg",
      genre_ids: [27],
      id: 1131755,
      original_language: "en",
      original_title: "A Creature Was Stirring",
      overview:
        "A nurse taking care of her daughter's mysterious affliction struggles to hide her secrets when uninvited strangers take shelter in her house during a lethal blizzard.",
      popularity: 1457.784,
      poster_path: "/ikQG3byEFyfwcnF0zmyNtXTmr5v.jpg",
      release_date: "2023-12-08",
      title: "A Creature Was Stirring",
      video: false,
      vote_average: 5.3,
      vote_count: 13,
    },
    {
      adult: false,
      backdrop_path: "/X8yF6STUk5Zr5nAuLBJiio8Sxh.jpg",
      genre_ids: [18, 10749],
      id: 1143183,
      original_language: "tl",
      original_title: "Rewind",
      overview:
        "Mary loves John for as long as she can remember. But after years of marriage, John's priorities shift, leading to a strained relationship with Mary, which causes a tragic accident that takes away Mary's life. Until one day, John gets an extraordinary proposition - to rewind time and save the life of the woman he loves.",
      popularity: 988.591,
      poster_path: "/ru1i4ZR11lPPVArk3fOcO1VCOlD.jpg",
      release_date: "2024-01-04",
      title: "Rewind",
      video: false,
      vote_average: 7.3,
      vote_count: 9,
    },
    {
      adult: false,
      backdrop_path: "/zIYROrkHJPYB3VTiW1L9QVgaQO.jpg",
      genre_ids: [28, 35],
      id: 897087,
      original_language: "en",
      original_title: "Freelance",
      overview:
        "An ex-special forces operative takes a job to provide security for a journalist as she interviews a dictator, but a military coup breaks out in the middle of the interview, they are forced to escape into the jungle where they must survive.",
      popularity: 1139.571,
      poster_path: "/7Bd4EUOqQDKZXA6Od5gkfzRNb0.jpg",
      release_date: "2023-10-05",
      title: "Freelance",
      video: false,
      vote_average: 6.475,
      vote_count: 439,
    },
    {
      adult: false,
      backdrop_path: "/yOm993lsJyPmBodlYjgpPwBjXP9.jpg",
      genre_ids: [35, 10751, 14],
      id: 787699,
      original_language: "en",
      original_title: "Wonka",
      overview:
        "Willy Wonka – chock-full of ideas and determined to change the world one delectable bite at a time – is proof that the best things in life begin with a dream, and if you’re lucky enough to meet Willy Wonka, anything is possible.",
      popularity: 902.407,
      poster_path: "/qhb1qOilapbapxWQn9jtRCMwXJF.jpg",
      release_date: "2023-12-06",
      title: "Wonka",
      video: false,
      vote_average: 7.105,
      vote_count: 882,
    },
    {
      adult: false,
      backdrop_path: "/36Lt4NXw5ucLDobs7dvJCIniXCp.jpg",
      genre_ids: [27],
      id: 807172,
      original_language: "en",
      original_title: "The Exorcist: Believer",
      overview:
        "When two girls disappear into the woods and return three days later with no memory of what happened to them, the father of one girl seeks out Chris MacNeil, who's been forever altered by what happened to her daughter fifty years ago.",
      popularity: 870.59,
      poster_path: "/qVKirUdmoex8SdfUk8WDDWwrcCh.jpg",
      release_date: "2023-10-04",
      title: "The Exorcist: Believer",
      video: false,
      vote_average: 6.154,
      vote_count: 723,
    },
    {
      adult: false,
      backdrop_path: "/k1KrbaCMACQiq7EA0Yhw3bdzMv7.jpg",
      genre_ids: [16, 10751, 10402, 14, 35],
      id: 901362,
      original_language: "en",
      original_title: "Trolls Band Together",
      overview:
        "When Branch's brother, Floyd, is kidnapped for his musical talents by a pair of nefarious pop-star villains, Branch and Poppy embark on a harrowing and emotional journey to reunite the other brothers and rescue Floyd from a fate even worse than pop-culture obscurity.",
      popularity: 725.168,
      poster_path: "/bkpPTZUdq31UGDovmszsg2CchiI.jpg",
      release_date: "2023-10-12",
      title: "Trolls Band Together",
      video: false,
      vote_average: 7.181,
      vote_count: 486,
    },
    {
      adult: false,
      backdrop_path: "/vQpvNDc0AFao8BbWyXDFVVrqiZj.jpg",
      genre_ids: [27],
      id: 853387,
      original_language: "en",
      original_title: "Lord of Misrule",
      overview:
        "When the daughter of the town's new priest goes missing during the harvest festival, a desperate search begins, uncovering the town's dark history and resurfacing tales of a mysterious, malevolent spirit that demands sacrifice.",
      popularity: 578.626,
      poster_path: "/eCNJuGsCNdf2yf4F3UcDg1WZTbo.jpg",
      release_date: "2023-10-26",
      title: "Lord of Misrule",
      video: false,
      vote_average: 5.8,
      vote_count: 13,
    },
    {
      adult: false,
      backdrop_path: "/9jPoyxjiEYPylUIMI3Ntixf8z3M.jpg",
      genre_ids: [16, 12, 35, 10751],
      id: 520758,
      original_language: "en",
      original_title: "Chicken Run: Dawn of the Nugget",
      overview:
        "A band of fearless chickens flock together to save poultry-kind from an unsettling new threat: a nearby farm that's cooking up something suspicious.",
      popularity: 593.385,
      poster_path: "/exNtEY8QUuQh9e23wSQjkPxKIU3.jpg",
      release_date: "2023-12-08",
      title: "Chicken Run: Dawn of the Nugget",
      video: false,
      vote_average: 7.256,
      vote_count: 412,
    },
    {
      adult: false,
      backdrop_path: "/bWIIWhnaoWx3FTVXv6GkYDv3djL.jpg",
      genre_ids: [878, 27, 28],
      id: 940721,
      original_language: "ja",
      original_title: "ゴジラ-1.0",
      overview:
        "In postwar Japan, a new terror rises. Will the devastated people be able to survive... let alone fight back?",
      popularity: 484.386,
      poster_path: "/hkxxMIGaiCTmrEArK7J56JTKUlB.jpg",
      release_date: "2023-11-03",
      title: "Godzilla Minus One",
      video: false,
      vote_average: 7.99,
      vote_count: 243,
    },
    {
      adult: false,
      backdrop_path: "/46Os8U0DEPmI0OnvKDxucl6SLVZ.jpg",
      genre_ids: [27, 53],
      id: 1008042,
      original_language: "en",
      original_title: "Talk to Me",
      overview:
        "When a group of friends discover how to conjure spirits using an embalmed hand, they become hooked on the new thrill, until one of them goes too far and unleashes terrifying supernatural forces.",
      popularity: 494.834,
      poster_path: "/kdPMUMJzyYAc4roD52qavX0nLIC.jpg",
      release_date: "2023-07-26",
      title: "Talk to Me",
      video: false,
      vote_average: 7.202,
      vote_count: 2052,
    },
    {
      adult: false,
      backdrop_path: "/vdpE5pjJVql5aD6pnzRqlFmgxXf.jpg",
      genre_ids: [18, 36],
      id: 906126,
      original_language: "es",
      original_title: "La sociedad de la nieve",
      overview:
        "On October 13, 1972, Uruguayan Air Force Flight 571, chartered to take a rugby team to Chile, crashes into a glacier in the heart of the Andes.",
      popularity: 655.54,
      poster_path: "/k7rEpZfNPB35FFHB00ZhXHKTL7X.jpg",
      release_date: "2023-12-13",
      title: "Society of the Snow",
      video: false,
      vote_average: 8.132,
      vote_count: 310,
    },
    {
      adult: false,
      backdrop_path: "/ptz5ETMxDoRRiE69BVuIxJzyTEO.jpg",
      genre_ids: [16, 28, 12, 35, 10751],
      id: 940551,
      original_language: "en",
      original_title: "Migration",
      overview:
        "After a migrating duck family alights on their pond with thrilling tales of far-flung places, the Mallard family embarks on a family road trip, from New England, to New York City, to tropical Jamaica.",
      popularity: 516.016,
      poster_path: "/ldfCF9RhR40mppkzmftxapaHeTo.jpg",
      release_date: "2023-12-06",
      title: "Migration",
      video: false,
      vote_average: 7.3,
      vote_count: 89,
    },
    {
      adult: false,
      backdrop_path: "/uOvcyJ3XmUv4geypGvZBeZEFMO6.jpg",
      genre_ids: [28, 80, 18],
      id: 945937,
      original_language: "en",
      original_title: "Fast Charlie",
      overview:
        "When his aging mob boss is whacked, Charlie Swift, a loyal friend and hired gun, will stop at nothing to destroy the upcoming crew that took him out.",
      popularity: 587.082,
      poster_path: "/w0rYX6dDvcz1ASO4MAKPviaAj2x.jpg",
      release_date: "2023-12-08",
      title: "Fast Charlie",
      video: false,
      vote_average: 6.194,
      vote_count: 54,
    },
    {
      adult: false,
      backdrop_path: "/1X7vow16X7CnCoexXh4H4F2yDJv.jpg",
      genre_ids: [80, 18, 36],
      id: 466420,
      original_language: "en",
      original_title: "Killers of the Flower Moon",
      overview:
        "When oil is discovered in 1920s Oklahoma under Osage Nation land, the Osage people are murdered one by one—until the FBI steps in to unravel the mystery.",
      popularity: 385.202,
      poster_path: "/dB6Krk806zeqd0YNp2ngQ9zXteH.jpg",
      release_date: "2023-10-18",
      title: "Killers of the Flower Moon",
      video: false,
      vote_average: 7.533,
      vote_count: 1780,
    },
  ],
  total_pages: 172,
  total_results: 3425,
};

export const topRatedMovies = {
  page: 1,
  results: [
    {
      adult: false,
      backdrop_path: "/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
      belongs_to_collection: null,
      budget: 25000000,
      genres: [
        {
          id: 18,
          name: "Drama",
        },
        {
          id: 80,
          name: "Crime",
        },
      ],
      homepage: "",
      id: 278,
      imdb_id: "tt0111161",
      original_language: "en",
      original_title: "The Shawshank Redemption",
      overview:
        "Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.",
      popularity: 142.177,
      poster_path: "/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
      production_companies: [
        {
          id: 97,
          logo_path: "/7znWcbDd4PcJzJUlJxYqAlPPykp.png",
          name: "Castle Rock Entertainment",
          origin_country: "US",
        },
        {
          id: 5,
          logo_path: "/71BqEFAF4V3qjjMPCpLuyJFB9A.png",
          name: "Columbia Pictures",
          origin_country: "US",
        },
      ],
      production_countries: [
        {
          iso_3166_1: "US",
          name: "United States of America",
        },
      ],
      release_date: "1994-09-23",
      revenue: 28341469,
      runtime: 142,
      spoken_languages: [
        {
          english_name: "English",
          iso_639_1: "en",
          name: "English",
        },
      ],
      status: "Released",
      tagline: "Fear can hold you prisoner. Hope can set you free.",
      title: "The Shawshank Redemption",
      video: false,
      vote_average: 8.71,
      vote_count: 25276,
    },
    {
      adult: false,
      backdrop_path: "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
      genre_ids: [18, 80],
      id: 238,
      original_language: "en",
      original_title: "The Godfather",
      overview:
        "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
      popularity: 137.208,
      poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
      release_date: "1972-03-14",
      title: "The Godfather",
      video: false,
      vote_average: 8.708,
      vote_count: 19253,
    },
    {
      adult: false,
      backdrop_path: "/kGzFbGhp99zva6oZODW5atUtnqi.jpg",
      genre_ids: [18, 80],
      id: 240,
      original_language: "en",
      original_title: "The Godfather Part II",
      overview:
        "In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.",
      popularity: 88.214,
      poster_path: "/hek3koDUyRQk7FIhPXsa6mT2Zc3.jpg",
      release_date: "1974-12-20",
      title: "The Godfather Part II",
      video: false,
      vote_average: 8.589,
      vote_count: 11607,
    },
  ],
  total_pages: 1,
  total_results: 3,
};

export const happyCaseHandlers = [
  http.get("/movie/top_rated", () => {
    // Response resolver allows you to react to captured requests,
    // respond with mock responses or passthrough requests entirely.
    // For now, let's just print a message to the console.
    return HttpResponse.json(topRatedMovies);
  }),
  http.get("/movie/now_playing", () => {
    // Response resolver allows you to react to captured requests,
    // respond with mock responses or passthrough requests entirely.
    // For now, let's just print a message to the console.
    return HttpResponse.json(nowPlayingMovies);
  }),
  http.get("/movie/upcoming", () => {
    // Response resolver allows you to react to captured requests,
    // respond with mock responses or passthrough requests entirely.
    // For now, let's just print a message to the console.
    return HttpResponse.json(upComingMovies);
  }),
  http.get("/movie/popular", () => {
    // Response resolver allows you to react to captured requests,
    // respond with mock responses or passthrough requests entirely.
    // For now, let's just print a message to the console.
    return HttpResponse.json(popularMovies);
  }),
];

export const badCaseHandlers = [
  http.get("/movie/top_rated", () => {
    return HttpResponse.error();
  }),
  http.get("/movie/now_playing", () => {
    return HttpResponse.error();
  }),
  http.get("/movie/upcoming", () => {
    return HttpResponse.error();
  }),
  http.get("/movie/popular", () => {
    return HttpResponse.error();
  }),
];
