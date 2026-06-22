var ACTIVITIES = {
  week1: {
    label: "Week 1 — Getting Started",
    difficulty: 1,
    days: [
      {
        day: 1, title: "Animals Around Us",
        focus: "English",
        english: {
          type: "comprehension",
          story: "🐶 Tom has a dog named Buddy. Buddy is brown and white. He likes to run and play in the yard. Every morning, Tom gives Buddy food and water. Buddy wags his tail when Tom comes home.",
          questions: [
            {q:"What is the dog's name?", opts:["Max","Buddy","Rex"], a:1},
            {q:"What color is Buddy?", opts:["Black and white","Brown and white","Yellow"], a:1},
            {q:"What does Tom give Buddy every morning?", opts:["Toys","Food and water","A bone"], a:1}
          ]
        },
        math: {
          type: "word_problems",
          problems: [
            {q:"🐕 There are 3 dogs and 2 cats. How many animals in all?", a:5},
            {q:"🐦 A tree has 8 birds. 3 fly away. How many are left?", a:5},
            {q:"🐟 Ana has 4 fish. She buys 3 more. How many fish now?", a:7}
          ]
        },
        filipino: {
          type: "matching",
          pairs: [
            {emoji:"🐶", english:"Dog", filipino:"Aso"},
            {emoji:"🐱", english:"Cat", filipino:"Pusa"},
            {emoji:"🐦", english:"Bird", filipino:"Ibon"},
            {emoji:"🐟", english:"Fish", filipino:"Isda"}
          ]
        },
        spelling: {
          words: [
            {clue:"🐶", hint:"Man's best friend", answer:"dog"},
            {clue:"🐱", hint:"It says meow", answer:"cat"},
            {clue:"🐦", hint:"It can fly", answer:"bird"},
            {clue:"🐟", hint:"Lives in water", answer:"fish"}
          ]
        }
      },
      {
        day: 2, title: "My Family",
        focus: "Filipino",
        english: {
          type: "fill_blank",
          sentence_set: [
            {sentence:"My ___ cooks food for us.", word:"mother", opts:["mother","school","tree"]},
            {sentence:"My ___ goes to work every day.", word:"father", opts:["father","cat","book"]},
            {sentence:"I love my ___.", word:"family", opts:["family","color","rain"]},
            {sentence:"My sister and I are ___.", word:"siblings", opts:["siblings","animals","flowers"]}
          ]
        },
        math: {
          type: "word_problems",
          problems: [
            {q:"👨‍👩‍👧 A family has 2 parents and 1 child. How many people?", a:3},
            {q:"🎂 Lola bakes 10 cookies. She gives 4 to her grandchildren. How many left?", a:6},
            {q:"🏠 There are 5 rooms in the house. 2 are bedrooms. How many other rooms?", a:3}
          ]
        },
        filipino: {
          type: "multiple_choice",
          questions: [
            {q:"Sino ang ama sa pamilya?", opts:["Nanay","Tatay","Lola"], a:1},
            {q:"Sino ang ina sa pamilya?", opts:["Tatay","Lolo","Nanay"], a:2},
            {q:"Ano ang tawag sa anak ng iyong tiya?", opts:["Kapatid","Pinsan","Kaibigan"], a:1}
          ]
        },
        spelling: {
          words: [
            {clue:"👨", hint:"Your male parent", answer:"father"},
            {clue:"👩", hint:"Your female parent", answer:"mother"},
            {clue:"👧", hint:"A female child", answer:"girl"},
            {clue:"👦", hint:"A male child", answer:"boy"}
          ]
        }
      },
      {
        day: 3, title: "Nature Walk",
        focus: "Math",
        english: {
          type: "comprehension",
          story: "🌳 Mia and her mom went for a walk in the park. They saw tall trees and colorful flowers. A butterfly flew past them. Mia picked up a smooth stone from the ground. She put it in her pocket to keep.",
          questions: [
            {q:"Where did Mia and her mom go?", opts:["The mall","The park","The school"], a:1},
            {q:"What did Mia pick up?", opts:["A flower","A leaf","A smooth stone"], a:2},
            {q:"What flew past them?", opts:["A bird","A butterfly","A bee"], a:1}
          ]
        },
        math: {
          type: "word_problems",
          problems: [
            {q:"🌸 There are 6 red flowers and 4 yellow flowers. How many flowers in all?", a:10},
            {q:"🌳 A park has 9 trees. Workers plant 5 more. How many trees now?", a:14},
            {q:"🦋 Mia sees 7 butterflies. 3 fly away. How many remain?", a:4}
          ]
        },
        filipino: {
          type: "matching",
          pairs: [
            {emoji:"🌳", english:"Tree", filipino:"Puno"},
            {emoji:"🌸", english:"Flower", filipino:"Bulaklak"},
            {emoji:"🌧️", english:"Rain", filipino:"Ulan"},
            {emoji:"☀️", english:"Sun", filipino:"Araw"}
          ]
        },
        spelling: {
          words: [
            {clue:"🌳", hint:"Has roots, trunk and leaves", answer:"tree"},
            {clue:"🌸", hint:"Pretty and colorful, bees love it", answer:"flower"},
            {clue:"🌿", hint:"Found on trees and plants", answer:"leaf"},
            {clue:"🌧️", hint:"Falls from clouds", answer:"rain"}
          ]
        }
      },
      {
        day: 4, title: "Community Helpers",
        focus: "Spelling",
        english: {
          type: "fill_blank",
          sentence_set: [
            {sentence:"The ___ puts out fires.", word:"firefighter", opts:["firefighter","teacher","farmer"]},
            {sentence:"The ___ helps sick people.", word:"doctor", opts:["doctor","baker","pilot"]},
            {sentence:"The ___ teaches students.", word:"teacher", opts:["teacher","chef","nurse"]},
            {sentence:"The ___ keeps us safe.", word:"police", opts:["police","actor","singer"]}
          ]
        },
        math: {
          type: "word_problems",
          problems: [
            {q:"👮 There are 4 police officers on Monday and 5 on Tuesday. How many in all?", a:9},
            {q:"🏥 A doctor sees 8 patients. 3 go home. How many are still waiting?", a:5},
            {q:"🚒 A fire truck has 6 firefighters. 2 stay at the station. How many go to the fire?", a:4}
          ]
        },
        filipino: {
          type: "multiple_choice",
          questions: [
            {q:"Ano ang trabaho ng doktor?", opts:["Nagtuturo","Nagpapagaling","Nagmamasid"], a:1},
            {q:"Sino ang nagtatanggol sa bayan?", opts:["Guro","Pulis","Doktor"], a:1},
            {q:"Saan nagtatrabaho ang guro?", opts:["Ospital","Palengke","Paaralan"], a:2}
          ]
        },
        spelling: {
          words: [
            {clue:"👨‍⚕️", hint:"Works at a hospital", answer:"doctor"},
            {clue:"👩‍🏫", hint:"Works at a school", answer:"teacher"},
            {clue:"👮", hint:"Keeps the community safe", answer:"police"},
            {clue:"🚒", hint:"Fights fires", answer:"fire"}
          ]
        }
      },
      {
        day: 5, title: "Weekend Bonus — All Topics!",
        focus: "Mixed",
        english: {
          type: "comprehension",
          story: "🌈 It rained all morning. After lunch, the sun came out. Ana ran outside and saw a big rainbow in the sky. It had many colors — red, orange, yellow, green, blue, and violet. She called her brother to come and see. They both smiled and clapped.",
          questions: [
            {q:"When did the sun come out?", opts:["In the morning","After lunch","At night"], a:1},
            {q:"What did Ana see in the sky?", opts:["A kite","A rainbow","A cloud"], a:1},
            {q:"Who did Ana call?", opts:["Her mother","Her friend","Her brother"], a:2}
          ]
        },
        math: {
          type: "word_problems",
          problems: [
            {q:"🌈 A rainbow has 6 colors. How many colors do 2 rainbows have?", a:12},
            {q:"🎨 Ana has 5 crayons. She gets 7 more. How many crayons in all?", a:12},
            {q:"☁️ There are 15 clouds in the sky. 6 move away. How many clouds left?", a:9}
          ]
        },
        filipino: {
          type: "matching",
          pairs: [
            {emoji:"🌈", english:"Rainbow", filipino:"Bahaghari"},
            {emoji:"🌧️", english:"Rain", filipino:"Ulan"},
            {emoji:"☀️", english:"Sun", filipino:"Araw"},
            {emoji:"⭐", english:"Star", filipino:"Bituin"}
          ]
        },
        spelling: {
          words: [
            {clue:"🌈", hint:"Appears after rain", answer:"rainbow"},
            {clue:"☀️", hint:"Gives us light and warmth", answer:"sun"},
            {clue:"⭐", hint:"Shines in the night sky", answer:"star"},
            {clue:"🌙", hint:"Glows at night", answer:"moon"}
          ]
        }
      }
    ]
  },
  week2: {
    label: "Week 2 — Building Up",
    difficulty: 2,
    days: [
      {
        day: 6, title: "Farm Animals",
        focus: "English",
        english: {
          type: "comprehension",
          story: "🐄 Lolo Ben lives on a big farm. He has cows, chickens, pigs, and horses. Every morning, he wakes up early to feed them. The cows give milk. The chickens lay eggs. Lolo Ben sells the milk and eggs at the market. He works very hard every day.",
          questions: [
            {q:"What animals does Lolo Ben have on his farm?", opts:["Dogs and cats","Cows, chickens, pigs, horses","Lions and tigers"], a:1},
            {q:"What do the cows give?", opts:["Eggs","Wool","Milk"], a:2},
            {q:"Where does Lolo Ben sell milk and eggs?", opts:["School","Market","Church"], a:1}
          ]
        },
        math: {
          type: "word_problems",
          problems: [
            {q:"🐄 A farm has 6 cows and 8 chickens. How many animals in all?", a:14},
            {q:"🥚 A chicken lays 2 eggs each day. How many eggs in 5 days?", a:10},
            {q:"🐷 There are 12 pigs. The farmer sells 4. How many pigs are left?", a:8}
          ]
        },
        filipino: {
          type: "matching",
          pairs: [
            {emoji:"🐄", english:"Cow", filipino:"Baka"},
            {emoji:"🐷", english:"Pig", filipino:"Baboy"},
            {emoji:"🐔", english:"Chicken", filipino:"Manok"},
            {emoji:"🐴", english:"Horse", filipino:"Kabayo"}
          ]
        },
        spelling: {
          words: [
            {clue:"🐄", hint:"Gives us milk", answer:"cow"},
            {clue:"🐔", hint:"Lays eggs", answer:"chicken"},
            {clue:"🐴", hint:"Used for riding", answer:"horse"},
            {clue:"🥚", hint:"Comes from a chicken", answer:"egg"}
          ]
        }
      },
      {
        day: 7, title: "Seasons & Weather",
        focus: "Filipino",
        english: {
          type: "fill_blank",
          sentence_set: [
            {sentence:"In summer, the weather is very ___.", word:"hot", opts:["hot","cold","wet"]},
            {sentence:"We use an umbrella when it ___.", word:"rains", opts:["rains","shines","freezes"]},
            {sentence:"The wind ___ the leaves from the trees.", word:"blows", opts:["blows","grows","swims"]},
            {sentence:"After the rain, the plants look ___.", word:"green", opts:["green","dry","brown"]}
          ]
        },
        math: {
          type: "word_problems",
          problems: [
            {q:"🌡️ It is 30 degrees on Monday and 35 degrees on Tuesday. How much hotter is Tuesday?", a:5},
            {q:"☔ It rained for 3 days this week and 4 days last week. How many rainy days in all?", a:7},
            {q:"🌻 Ana plants 4 flowers in spring. She plants 6 more in summer. How many total?", a:10}
          ]
        },
        filipino: {
          type: "multiple_choice",
          questions: [
            {q:"Ano ang panahon kapag mainit?", opts:["Tag-ulan","Tag-araw","Tag-lamig"], a:1},
            {q:"Ano ang ginagamit natin kapag umuulan?", opts:["Payong","Salamin","Sapatos"], a:0},
            {q:"Ano ang kulay ng langit kapag maulap?", opts:["Asul","Puti","Kulay-abo"], a:2}
          ]
        },
        spelling: {
          words: [
            {clue:"☀️", hint:"Hot season", answer:"summer"},
            {clue:"🌧️", hint:"Water falling from the sky", answer:"rain"},
            {clue:"💨", hint:"Moving air", answer:"wind"},
            {clue:"⛅", hint:"Puffy white things in the sky", answer:"cloud"}
          ]
        }
      },
      {
        day: 8, title: "Food & Eating",
        focus: "Math",
        english: {
          type: "comprehension",
          story: "🍚 Every lunchtime, Kiko eats rice, vegetables, and sometimes meat. His favorite food is adobo. His mother cooks it with soy sauce and vinegar. After eating, Kiko always drinks a glass of water. His mom says eating healthy food makes you strong and smart.",
          questions: [
            {q:"What is Kiko's favorite food?", opts:["Sinigang","Adobo","Tinola"], a:1},
            {q:"What does Kiko's mother cook with?", opts:["Sugar and cream","Soy sauce and vinegar","Salt and pepper"], a:1},
            {q:"What does Kiko drink after eating?", opts:["Juice","Milk","Water"], a:2}
          ]
        },
        math: {
          type: "word_problems",
          problems: [
            {q:"🍎 A basket has 5 apples, 3 bananas, and 4 oranges. How many fruits in all?", a:12},
            {q:"🍕 A pizza is cut into 8 slices. The family eats 5 slices. How many are left?", a:3},
            {q:"🥕 Mama buys 10 carrots. She uses 6 for soup. How many carrots are left?", a:4}
          ]
        },
        filipino: {
          type: "matching",
          pairs: [
            {emoji:"🍚", english:"Rice", filipino:"Kanin"},
            {emoji:"🥩", english:"Meat", filipino:"Karne"},
            {emoji:"🥦", english:"Vegetable", filipino:"Gulay"},
            {emoji:"🍌", english:"Banana", filipino:"Saging"}
          ]
        },
        spelling: {
          words: [
            {clue:"🍚", hint:"Staple food in the Philippines", answer:"rice"},
            {clue:"🍎", hint:"Red, round and crunchy", answer:"apple"},
            {clue:"🥕", hint:"Orange vegetable rabbits love", answer:"carrot"},
            {clue:"🥛", hint:"White drink from cows", answer:"milk"}
          ]
        }
      },
      {
        day: 9, title: "School Life",
        focus: "Spelling",
        english: {
          type: "fill_blank",
          sentence_set: [
            {sentence:"I use a ___ to write in my notebook.", word:"pencil", opts:["pencil","spoon","stone"]},
            {sentence:"The ___ teaches us new things every day.", word:"teacher", opts:["teacher","policeman","driver"]},
            {sentence:"We read books in the ___.", word:"library", opts:["library","playground","kitchen"]},
            {sentence:"I put my books in my ___.", word:"bag", opts:["bag","pot","box"]}
          ]
        },
        math: {
          type: "word_problems",
          problems: [
            {q:"📚 A class has 20 students. 5 are absent. How many students are present?", a:15},
            {q:"✏️ Each student needs 3 pencils. There are 4 students. How many pencils in all?", a:12},
            {q:"📖 Mia reads 6 pages before recess and 7 pages after. How many pages in all?", a:13}
          ]
        },
        filipino: {
          type: "multiple_choice",
          questions: [
            {q:"Ano ang gamit natin sa pagsulat?", opts:["Lapis","Pinto","Baso"], a:0},
            {q:"Saan tayo nagbabasa ng maraming libro?", opts:["Kusina","Aklatan","Palengke"], a:1},
            {q:"Sino ang nagtuturo sa paaralan?", opts:["Doktor","Guro","Pulis"], a:1}
          ]
        },
        spelling: {
          words: [
            {clue:"✏️", hint:"You write with this", answer:"pencil"},
            {clue:"📚", hint:"You read from these", answer:"book"},
            {clue:"🎒", hint:"You carry your things in this", answer:"bag"},
            {clue:"🏫", hint:"Where you go to learn", answer:"school"}
          ]
        }
      },
      {
        day: 10, title: "Weekend Bonus — Super Mix!",
        focus: "Mixed",
        english: {
          type: "comprehension",
          story: "🏖️ Last summer, our family went to the beach. The water was clear and blue. My brother and I built a sandcastle. Mama sat under a big umbrella. Papa caught a small fish with his net. We ate lunch by the sea. It was the best day of my life!",
          questions: [
            {q:"Where did the family go?", opts:["The mountains","The beach","The park"], a:1},
            {q:"What did the children build?", opts:["A boat","A kite","A sandcastle"], a:2},
            {q:"What did Papa catch?", opts:["A crab","A small fish","A shrimp"], a:1}
          ]
        },
        math: {
          type: "word_problems",
          problems: [
            {q:"🐚 Ana collected 8 shells on Monday and 9 on Tuesday. How many shells in all?", a:17},
            {q:"🏄 There are 20 swimmers. 7 go home. How many are still in the water?", a:13},
            {q:"🌊 Papa caught 3 fish in the morning and 6 in the afternoon. How many fish total?", a:9}
          ]
        },
        filipino: {
          type: "matching",
          pairs: [
            {emoji:"🏖️", english:"Beach", filipino:"Dalampasigan"},
            {emoji:"🐚", english:"Shell", filipino:"Kuhol"},
            {emoji:"🌊", english:"Wave", filipino:"Alon"},
            {emoji:"🐠", english:"Fish", filipino:"Isda"}
          ]
        },
        spelling: {
          words: [
            {clue:"🏖️", hint:"Sandy place by the ocean", answer:"beach"},
            {clue:"🌊", hint:"Moving water in the sea", answer:"wave"},
            {clue:"🐚", hint:"Found on the sand by the sea", answer:"shell"},
            {clue:"🏄", hint:"Riding ocean waves on a board", answer:"surf"}
          ]
        }
      }
    ]
  },
  week3: {
    label: "Week 3 — Going Deeper",
    difficulty: 3,
    days: [
      {
        day: 11, title: "The Human Body",
        focus: "English",
        english: {
          type: "comprehension",
          story: "🧠 Our body has many parts that work together. The heart pumps blood to all parts of the body. The lungs help us breathe. The brain controls everything we think and do. We have two eyes to see, two ears to hear, and a nose to smell. Taking care of our body is very important.",
          questions: [
            {q:"What does the heart do?", opts:["Helps us breathe","Pumps blood","Controls thinking"], a:1},
            {q:"What do the lungs help us do?", opts:["See","Breathe","Hear"], a:1},
            {q:"How many eyes do we have?", opts:["One","Three","Two"], a:2}
          ]
        },
        math: {
          type: "word_problems",
          problems: [
            {q:"🖐️ You have 2 hands. Each hand has 5 fingers. How many fingers in all?", a:10},
            {q:"👣 You take 15 steps to the door and 12 steps back. How many steps in all?", a:27},
            {q:"👁️ A class of 6 students. Each has 2 eyes. How many eyes in all?", a:12}
          ]
        },
        filipino: {
          type: "multiple_choice",
          questions: [
            {q:"Ano ang ginagamit natin para makita ang mga bagay?", opts:["Tenga","Mata","Ilong"], a:1},
            {q:"Ano ang organ na nagpapump ng dugo?", opts:["Utak","Baga","Puso"], a:2},
            {q:"Anong bahagi ng katawan ang nagkokontrol ng lahat?", opts:["Puso","Utak","Kamay"], a:1}
          ]
        },
        spelling: {
          words: [
            {clue:"🧠", hint:"Organ in your head for thinking", answer:"brain"},
            {clue:"❤️", hint:"Pumps blood around your body", answer:"heart"},
            {clue:"👁️", hint:"You see with these", answer:"eyes"},
            {clue:"👂", hint:"You hear with these", answer:"ears"}
          ]
        }
      },
      {
        day: 12, title: "Transport & Travel",
        focus: "Filipino",
        english: {
          type: "fill_blank",
          sentence_set: [
            {sentence:"We ride a ___ to cross the sea.", word:"boat", opts:["boat","bicycle","bus"]},
            {sentence:"A ___ flies high in the sky.", word:"plane", opts:["plane","train","jeep"]},
            {sentence:"The ___ stops at every station.", word:"train", opts:["train","car","tricycle"]},
            {sentence:"In the Philippines, we often ride a ___.", word:"jeepney", opts:["jeepney","subway","tram"]}
          ]
        },
        math: {
          type: "word_problems",
          problems: [
            {q:"🚌 A bus has 30 seats. 18 are taken. How many empty seats are there?", a:12},
            {q:"✈️ A plane flies 200 km in one hour. How far in 2 hours?", a:400},
            {q:"🚲 Berto bikes 5 km to school and 5 km back home. How many km in all?", a:10}
          ]
        },
        filipino: {
          type: "matching",
          pairs: [
            {emoji:"🚌", english:"Bus", filipino:"Bus"},
            {emoji:"🚢", english:"Ship", filipino:"Barko"},
            {emoji:"✈️", english:"Airplane", filipino:"Eroplano"},
            {emoji:"🚲", english:"Bicycle", filipino:"Bisikleta"}
          ]
        },
        spelling: {
          words: [
            {clue:"✈️", hint:"Flies in the sky", answer:"plane"},
            {clue:"🚢", hint:"Travels on water", answer:"ship"},
            {clue:"🚂", hint:"Runs on rails", answer:"train"},
            {clue:"🚲", hint:"Two wheels, you pedal it", answer:"bicycle"}
          ]
        }
      },
      {
        day: 13, title: "Plants & Garden",
        focus: "Math",
        english: {
          type: "comprehension",
          story: "🌱 Nena loves her garden. She grows tomatoes, eggplants, and kangkong. Every day she waters the plants and pulls out the weeds. She uses organic fertilizer made from banana peels and leftover food. Her vegetables are healthy and delicious. She shares them with her neighbors.",
          questions: [
            {q:"What vegetables does Nena grow?", opts:["Carrots and cabbage","Tomatoes, eggplants, kangkong","Potatoes and onions"], a:1},
            {q:"What does she use for fertilizer?", opts:["Chemical fertilizer","Rainwater","Banana peels and leftover food"], a:2},
            {q:"What does she do with her vegetables?", opts:["Sells them","Shares with neighbors","Throws them away"], a:1}
          ]
        },
        math: {
          type: "word_problems",
          problems: [
            {q:"🍅 Nena plants 7 tomato plants. Each grows 4 tomatoes. How many tomatoes in all?", a:28},
            {q:"🌱 She has 3 rows of plants. Each row has 6 plants. How many plants total?", a:18},
            {q:"💧 She waters her garden 2 times a day. How many times in a week (7 days)?", a:14}
          ]
        },
        filipino: {
          type: "multiple_choice",
          questions: [
            {q:"Ano ang kailangan ng halaman para lumago?", opts:["Tubig at araw","Asukal at gatas","Asin at paminta"], a:0},
            {q:"Ano ang ginagamit para palaguin ang halaman?", opts:["Pataba","Asin","Tubig lamang"], a:0},
            {q:"Saan matatagpuan ang mga halaman sa bahay?", opts:["Sala","Hardin","Banyo"], a:1}
          ]
        },
        spelling: {
          words: [
            {clue:"🌱", hint:"A baby plant just starting to grow", answer:"seed"},
            {clue:"🌿", hint:"The green part of a plant", answer:"leaf"},
            {clue:"🌻", hint:"A tall yellow flower", answer:"sunflower"},
            {clue:"🍅", hint:"Red round vegetable/fruit", answer:"tomato"}
          ]
        }
      },
      {
        day: 14, title: "Days & Time",
        focus: "Spelling",
        english: {
          type: "fill_blank",
          sentence_set: [
            {sentence:"There are seven ___ in a week.", word:"days", opts:["days","months","years"]},
            {sentence:"The first day of the week is ___.", word:"Sunday", opts:["Sunday","Friday","Wednesday"]},
            {sentence:"We go to school from ___ to Friday.", word:"Monday", opts:["Monday","Saturday","Sunday"]},
            {sentence:"There are 24 ___ in a day.", word:"hours", opts:["hours","days","weeks"]}
          ]
        },
        math: {
          type: "word_problems",
          problems: [
            {q:"📅 There are 7 days in a week. How many days in 3 weeks?", a:21},
            {q:"⏰ School starts at 7 AM and ends at 5 PM. How many hours is that?", a:10},
            {q:"🗓️ January has 31 days. How many days have passed after 2 weeks?", a:14}
          ]
        },
        filipino: {
          type: "matching",
          pairs: [
            {emoji:"1️⃣", english:"Monday", filipino:"Lunes"},
            {emoji:"2️⃣", english:"Tuesday", filipino:"Martes"},
            {emoji:"3️⃣", english:"Wednesday", filipino:"Miyerkules"},
            {emoji:"4️⃣", english:"Friday", filipino:"Biyernes"}
          ]
        },
        spelling: {
          words: [
            {clue:"📅", hint:"Seven of these make a week", answer:"days"},
            {clue:"⏰", hint:"Device that shows the time", answer:"clock"},
            {clue:"🗓️", hint:"Has 12 months", answer:"year"},
            {clue:"🌅", hint:"The start of the day", answer:"morning"}
          ]
        }
      },
      {
        day: 15, title: "Weekend Bonus — Challenge Round!",
        focus: "Mixed",
        english: {
          type: "comprehension",
          story: "🦁 The lion is called the King of the Jungle. It lives in Africa on the grasslands called savannas. Lions sleep up to 20 hours a day! The female lion, called a lioness, does most of the hunting. Baby lions are called cubs. A group of lions is called a pride.",
          questions: [
            {q:"Where do lions live?", opts:["In the ocean","In the jungle","On the savannas in Africa"], a:2},
            {q:"How many hours a day do lions sleep?", opts:["8 hours","Up to 20 hours","12 hours"], a:1},
            {q:"What is a baby lion called?", opts:["Pup","Cub","Kit"], a:1}
          ]
        },
        math: {
          type: "word_problems",
          problems: [
            {q:"🦁 A pride has 4 lions and 6 lionesses. How many in the pride?", a:10},
            {q:"🌿 A savanna has 25 trees. A storm knocks down 8. How many trees are left?", a:17},
            {q:"🐾 A lion walks 12 km in the morning and 15 km at night. How far in all?", a:27}
          ]
        },
        filipino: {
          type: "multiple_choice",
          questions: [
            {q:"Ano ang tawag sa hari ng kagubatan?", opts:["Tigre","Leon","Elepante"], a:1},
            {q:"Ano ang tawag sa grupo ng mga leon?", opts:["Kawan","Pride","Grupo"], a:1},
            {q:"Sino ang nangangaso sa grupo ng leon?", opts:["Ang lalaking leon","Ang batang leon","Ang babaeng leon"], a:2}
          ]
        },
        spelling: {
          words: [
            {clue:"🦁", hint:"King of the jungle", answer:"lion"},
            {clue:"🐆", hint:"Has spots, runs fast", answer:"leopard"},
            {clue:"🦒", hint:"Very tall animal with a long neck", answer:"giraffe"},
            {clue:"🐘", hint:"Largest land animal", answer:"elephant"}
          ]
        }
      }
    ]
  },
  week4: {
    label: "Week 4 — Star Level",
    difficulty: 4,
    days: [
      {
        day: 16, title: "Our Country",
        focus: "Filipino",
        english: {
          type: "comprehension",
          story: "🇵🇭 The Philippines is a beautiful country made up of more than 7,000 islands. Its capital city is Manila. The national bird is the Philippine Eagle, one of the largest eagles in the world. The national flower is the Sampaguita. Filipinos are known for being friendly, hardworking, and hospitable.",
          questions: [
            {q:"How many islands does the Philippines have?", opts:["More than 7,000","About 1,000","Exactly 500"], a:0},
            {q:"What is the capital city of the Philippines?", opts:["Cebu","Davao","Manila"], a:2},
            {q:"What is the national bird of the Philippines?", opts:["Maya","Philippine Eagle","Parrot"], a:1}
          ]
        },
        math: {
          type: "word_problems",
          problems: [
            {q:"🏝️ The Philippines has 7,107 islands. If 100 are big islands, how many are small?", a:7007},
            {q:"🗺️ Luzon, Visayas, and Mindanao are the 3 main island groups. Each has about 8 provinces. How many provinces?", a:24},
            {q:"🌺 A garden has 15 sampaguita plants. Each has 8 flowers. How many flowers?", a:120}
          ]
        },
        filipino: {
          type: "multiple_choice",
          questions: [
            {q:"Ano ang pambansang ibon ng Pilipinas?", opts:["Maya","Agila","Kalapati"], a:1},
            {q:"Ano ang kabisera ng Pilipinas?", opts:["Cebu","Davao","Maynila"], a:2},
            {q:"Ano ang pambansang bulaklak ng Pilipinas?", opts:["Rosas","Sampaguita","Orchid"], a:1}
          ]
        },
        spelling: {
          words: [
            {clue:"🇵🇭", hint:"Our beautiful country", answer:"Philippines"},
            {clue:"🦅", hint:"Our national bird", answer:"eagle"},
            {clue:"🌺", hint:"Our national flower", answer:"sampaguita"},
            {clue:"🏙️", hint:"The capital city", answer:"Manila"}
          ]
        }
      },
      {
        day: 17, title: "Water & Environment",
        focus: "English",
        english: {
          type: "fill_blank",
          sentence_set: [
            {sentence:"We should ___ water so we don't run out.", word:"conserve", opts:["conserve","waste","destroy"]},
            {sentence:"Throwing garbage in rivers causes ___.", word:"pollution", opts:["pollution","beauty","growth"]},
            {sentence:"We should ___ our trash properly.", word:"segregate", opts:["segregate","ignore","burn"]},
            {sentence:"Planting trees helps ___ the environment.", word:"protect", opts:["protect","destroy","ignore"]}
          ]
        },
        math: {
          type: "word_problems",
          problems: [
            {q:"💧 A leaky faucet wastes 5 liters per hour. How much water is wasted in 8 hours?", a:40},
            {q:"🌳 A school plants 6 trees every month. How many trees in 6 months?", a:36},
            {q:"♻️ Ana recycles 3 bottles a day. How many bottles in 2 weeks (14 days)?", a:42}
          ]
        },
        filipino: {
          type: "matching",
          pairs: [
            {emoji:"🌊", english:"Ocean", filipino:"Karagatan"},
            {emoji:"🏔️", english:"Mountain", filipino:"Bundok"},
            {emoji:"🌲", english:"Forest", filipino:"Kagubatan"},
            {emoji:"🏞️", english:"River", filipino:"Ilog"}
          ]
        },
        spelling: {
          words: [
            {clue:"🌊", hint:"Large body of salt water", answer:"ocean"},
            {clue:"🏔️", hint:"Very tall land formation", answer:"mountain"},
            {clue:"🌲", hint:"Large area full of trees", answer:"forest"},
            {clue:"♻️", hint:"Using things again instead of throwing", answer:"recycle"}
          ]
        }
      },
      {
        day: 18, title: "Celebrations & Traditions",
        focus: "Math",
        english: {
          type: "comprehension",
          story: "🎉 Filipinos love to celebrate fiestas. Every town has its own patron saint and a special fiesta day. Families prepare lots of food and invite relatives and friends. Children wear colorful costumes and join parades. Music, dancing, and laughter fill the streets. Fiestas show the joy and culture of Filipino people.",
          questions: [
            {q:"What does every town have according to the story?", opts:["A big mall","A patron saint and fiesta day","A famous school"], a:1},
            {q:"What do children do during fiestas?", opts:["Stay at home","Wear costumes and join parades","Sleep all day"], a:1},
            {q:"What do fiestas show?", opts:["Joy and culture of Filipinos","Sadness","Anger"], a:0}
          ]
        },
        math: {
          type: "word_problems",
          problems: [
            {q:"🎂 For the fiesta, mama bakes 4 cakes. Each cake is cut into 8 pieces. How many pieces in all?", a:32},
            {q:"🎊 There are 5 barangays. Each prepares 12 dishes for the fiesta. How many dishes in all?", a:60},
            {q:"🎵 A parade has 8 groups. Each group has 15 members. How many people in the parade?", a:120}
          ]
        },
        filipino: {
          type: "multiple_choice",
          questions: [
            {q:"Ano ang karaniwang okasyon sa bawat bayan sa Pilipinas?", opts:["Olimpiko","Pista opisyal","Eleksyon"], a:1},
            {q:"Ano ang ginagawa ng mga bata sa pista?", opts:["Natutulog","Sumasali sa prusisyon","Nag-aaral"], a:1},
            {q:"Ano ang ipinapakita ng pista opisyal?", opts:["Kalungkutan","Kultura at kasiyahan","Galit"], a:1}
          ]
        },
        spelling: {
          words: [
            {clue:"🎉", hint:"A big celebration", answer:"festival"},
            {clue:"🎊", hint:"Colorful strips of paper thrown at parties", answer:"confetti"},
            {clue:"🎵", hint:"Pleasing sounds played together", answer:"music"},
            {clue:"🕺", hint:"Moving your body to music", answer:"dance"}
          ]
        }
      },
      {
        day: 19, title: "Technology Around Us",
        focus: "Spelling",
        english: {
          type: "fill_blank",
          sentence_set: [
            {sentence:"We use a ___ to call our friends and family.", word:"phone", opts:["phone","broom","stone"]},
            {sentence:"The ___ helps us find information quickly.", word:"internet", opts:["internet","window","garden"]},
            {sentence:"We watch shows and movies on ___.", word:"television", opts:["television","rice","paper"]},
            {sentence:"Students use ___ for online classes.", word:"computer", opts:["computer","shovel","pillow"]}
          ]
        },
        math: {
          type: "word_problems",
          problems: [
            {q:"📱 Ana uses her phone 2 hours a day. How many hours in a week (7 days)?", a:14},
            {q:"💻 A school has 5 computer labs. Each has 24 computers. How many computers in all?", a:120},
            {q:"📺 A TV show is 45 minutes long. How many minutes for 2 shows?", a:90}
          ]
        },
        filipino: {
          type: "matching",
          pairs: [
            {emoji:"📱", english:"Phone", filipino:"Telepono"},
            {emoji:"💻", english:"Computer", filipino:"Kompyuter"},
            {emoji:"📺", english:"Television", filipino:"Telebisyon"},
            {emoji:"📷", english:"Camera", filipino:"Kamera"}
          ]
        },
        spelling: {
          words: [
            {clue:"💻", hint:"Electronic device for computing", answer:"computer"},
            {clue:"📱", hint:"Small device you carry to call people", answer:"phone"},
            {clue:"🌐", hint:"Global network of information", answer:"internet"},
            {clue:"📺", hint:"Shows moving pictures and sound", answer:"television"}
          ]
        }
      },
      {
        day: 20, title: "Grand Finale — All Stars!",
        focus: "Mixed",
        english: {
          type: "comprehension",
          story: "🌟 Learning is a wonderful adventure. Every day you discover something new — a word, a number, a story, or a song. Good students are curious, hardworking, and kind. They ask questions when they don't understand. They help their classmates. They respect their teachers. The most important lesson is to never stop learning because the world is full of amazing things waiting to be discovered!",
          questions: [
            {q:"What is learning compared to in the story?", opts:["A chore","A wonderful adventure","A boring routine"], a:1},
            {q:"What are good students like?", opts:["Lazy and quiet","Curious, hardworking and kind","Loud and playful"], a:1},
            {q:"What is the most important lesson?", opts:["To be quiet in class","Never stop learning","To memorize everything"], a:1}
          ]
        },
        math: {
          type: "word_problems",
          problems: [
            {q:"⭐ You earned 8 stars in Week 1, 12 in Week 2, 15 in Week 3, and 18 in Week 4. How many stars total?", a:53},
            {q:"📝 You answered 20 questions per day for 20 days. How many questions did you answer in all?", a:400},
            {q:"🏆 The class needs 100 points to win a pizza party. They have 67 points. How many more do they need?", a:33}
          ]
        },
        filipino: {
          type: "multiple_choice",
          questions: [
            {q:"Ano ang katangian ng isang mabuting mag-aaral?", opts:["Tamad at walang pakialam","Masipag at mausisa","Maingay at mapagkumpitensya"], a:1},
            {q:"Ano ang dapat gawin kapag hindi mo naiintindihan?", opts:["Matulog","Magtanong","Lumabas ng klase"], a:1},
            {q:"Ano ang pinakamahalagang aral ayon sa kwento?", opts:["Huwag matakot","Huwag tumigil sa pag-aaral","Maglaro lagi"], a:1}
          ]
        },
        spelling: {
          words: [
            {clue:"🌟", hint:"You are one of these — bright and shining!", answer:"star"},
            {clue:"🏆", hint:"Given to winners and champions", answer:"trophy"},
            {clue:"📚", hint:"Things you gain from studying", answer:"knowledge"},
            {clue:"🎓", hint:"What you wear when you graduate", answer:"graduation"}
          ]
        }
      }
    ]
  }
};
