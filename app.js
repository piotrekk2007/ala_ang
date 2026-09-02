// ===== BADGES DEFINITION (global so checkBadges can reference names) =====
const BADGES_DEF = [
  { id:'first_test',   icon:'🎯', name:'Pierwszy test',     desc:'Ukończ swój pierwszy test' },
  { id:'perfect',      icon:'💯', name:'Perfekcja!',        desc:'Zdobądź 100% w teście' },
  { id:'perfect3',     icon:'👑', name:'Królowa 100%',      desc:'Trzy razy z rzędu 100%' },
  { id:'streak3',      icon:'🔥', name:'3 dni z rzędu',     desc:'Ucz się 3 dni z rzędu' },
  { id:'streak7',      icon:'🌟', name:'Tygodniowa passa',  desc:'Ucz się 7 dni z rzędu' },
  { id:'streak14',     icon:'⚡', name:'Dwa tygodnie!',     desc:'Ucz się 14 dni z rzędu' },
  { id:'streak30',     icon:'🚀', name:'Miesiąc nauki!',    desc:'Ucz się 30 dni z rzędu' },
  { id:'five_tests',   icon:'📊', name:'5 testów',          desc:'Ukończ 5 testów' },
  { id:'twenty_tests', icon:'🏅', name:'20 testów',         desc:'Ukończ 20 testów' },
  { id:'fifty_tests',  icon:'🥇', name:'50 testów',         desc:'Ukończ 50 testów' },
  { id:'all_sets',     icon:'🏆', name:'Kolekcjoner',       desc:'Stwórz 3 zestawy słówek' },
  { id:'five_sets',    icon:'📚', name:'Biblioteka',        desc:'Stwórz 5 zestawów słówek' },
  { id:'words50',      icon:'✨', name:'50 słówek',         desc:'Miej 50 słówek w zestawach' },
  { id:'words100',     icon:'🌈', name:'100 słówek!',       desc:'Miej 100 słówek w zestawach' },
  { id:'song_added',   icon:'🎵', name:'Muzyczny geniusz',  desc:'Dodaj swoją pierwszą piosenkę' },
  { id:'songs3',       icon:'🎤', name:'Gwiazda pop',       desc:'Dodaj 3 piosenki' },
  { id:'three_good',   icon:'😎', name:'Passa wyników',     desc:'Trzy razy powyżej 80%' },
  { id:'improved',     icon:'📈', name:'Coraz lepiej!',     desc:'Popraw swój poprzedni wynik' },
  { id:'chat_first',   icon:'💬', name:'Pierwsza pogawędka',  desc:'Ukończ swoją pierwszą rozmowę w Pogadajmy' },
  { id:'chat10',       icon:'🗣️', name:'Gadatliwa Ala',       desc:'Ukończ 10 rozmów w Pogadajmy' },
  { id:'chat_explorer',icon:'🗺️', name:'Odkrywczyni scenariuszy', desc:'Wypróbuj 10 różnych scenariuszy rozmów' },
  { id:'chat_flawless',icon:'🌟', name:'Bez błędu!',          desc:'Zakończ rozmowę bez żadnych błędów w analizie "Popraw razem"' },
];

// ===== CHAT SCENARIOS (Pogadajmy) =====
const CHAT_SCENARIOS = [
  {
    id: 'restaurant', icon: '🍽️', title: 'W restauracji',
    roles: [
      { user: 'Głodny klient', ai: 'Zabawny, gadatliwy kelner' },
      { user: 'Wybredny klient ze specjalną dietą', ai: 'Znudzony, oschły kelner' },
      { user: 'Celebryta incognito', ai: 'Kelner, który rozpoznał gwiazdę i traci głowę' },
    ],
    complications: {
      B1: 'W trakcie zamówienia zabrakło jednego z dań z menu — zareaguj na to i wybierz alternatywę.',
      B2: 'Pod koniec pojawia się problem z rachunkiem (zła kwota lub brak możliwości płatności kartą) — rozwiąż to grzecznie, ale stanowczo.',
    },
  },
  {
    id: 'post', icon: '📮', title: 'Na poczcie',
    roles: [
      { user: 'Klient nadający paczkę za granicę', ai: 'Pomocny pracownik poczty' },
      { user: 'Zdezorientowany klient, który zgubił awizo', ai: 'Zniecierpliwiony urzędnik' },
      { user: 'Osoba nadająca tajemniczą, ciężką paczkę', ai: 'Podejrzliwy urzędnik przekonany, że to przemyt' },
    ],
    complications: {
      B1: 'Paczka jest za ciężka na standardową wysyłkę — negocjuj inną opcję dostawy.',
      B2: 'Urzędnik informuje, że przesyłka wymaga dodatkowych dokumentów celnych — dopytaj o szczegóły i ustal, co dalej.',
    },
  },
  {
    id: 'park', icon: '🌳', title: 'Small talk w parku',
    roles: [
      { user: 'Osoba wyprowadzająca psa', ai: 'Rozgadany sąsiad na spacerze' },
      { user: 'Turysta pytający o drogę', ai: 'Uprzejmy miejscowy' },
      { user: 'Amatorski poeta czytający wiersze na ławce', ai: 'Zdezorientowany przechodzień, który się na to natknął' },
    ],
    complications: {
      B1: 'W trakcie rozmowy zaczyna padać deszcz — zdecydujcie razem, co robić dalej.',
      B2: 'Rozmówca zaprasza Cię na wydarzenie w przyszłym tygodniu — dopytaj o szczegóły i uzgodnij termin.',
    },
  },
  {
    id: 'shop', icon: '🛒', title: 'Zakupy w sklepie',
    roles: [
      { user: 'Klient szukający konkretnego produktu', ai: 'Pomocny sprzedawca' },
      { user: 'Klient reklamujący zepsuty towar', ai: 'Nieco zirytowany sprzedawca' },
      { user: 'Klient kupujący prezent na ostatnią chwilę', ai: 'Sprzedawca, dla którego wszystko jest "idealnym prezentem"' },
    ],
    complications: {
      B1: 'Produktu, którego szukasz, akurat zabrakło — zapytaj o zamiennik lub termin dostawy.',
      B2: 'Sprzedawca próbuje sprzedać Ci droższy produkt niż potrzebujesz — grzecznie odmów, argumentując swój wybór.',
    },
  },
  {
    id: 'airport', icon: '✈️', title: 'Na lotnisku (odprawa)',
    roles: [
      { user: 'Pasażer z nadbagażem', ai: 'Sumienna pracownica odprawy' },
      { user: 'Roztrzepany podróżnik, który nie może znaleźć paszportu', ai: 'Zniecierpliwiony strażnik graniczny' },
    ],
    complications: {
      B1: 'Twój lot jest opóźniony — dopytaj o nowy czas i możliwe opcje.',
      B2: 'Brakuje Ci jednego z wymaganych dokumentów — wytłumacz sytuację i poproś o rozwiązanie.',
    },
  },
  {
    id: 'hotel', icon: '🏨', title: 'W hotelu (recepcja)',
    roles: [
      { user: 'Gość zameldowujący się po długiej podróży', ai: 'Uprzejmy recepcjonista' },
      { user: 'Gość reklamujący hałas z sąsiedniego pokoju', ai: 'Recepcjonista, który udaje, że nic nie słyszał' },
    ],
    complications: {
      B1: 'Pokój, który zarezerwowałeś, jest niedostępny — uzgodnij alternatywę.',
      B2: 'W rachunku pojawia się nieoczekiwana opłata — dopytaj, skąd się wzięła, i wynegocjuj jej usunięcie.',
    },
  },
  {
    id: 'pharmacy', icon: '💊', title: 'W aptece',
    roles: [
      { user: 'Pacjent z przeziębieniem', ai: 'Troskliwy farmaceuta' },
      { user: 'Hipochondryk pytający o każdy możliwy lek', ai: 'Cierpliwy, ale już nieco zmęczony farmaceuta' },
    ],
    complications: {
      B1: 'Lek, którego potrzebujesz, wymaga recepty, której nie masz — zapytaj o inne rozwiązanie.',
      B2: 'Musisz dokładnie opisać objawy i zapytać o możliwe interakcje z innym lekiem, który już bierzesz.',
    },
  },
  {
    id: 'doctor', icon: '🩺', title: 'U lekarza',
    roles: [
      { user: 'Pacjent opisujący objawy bólu głowy', ai: 'Spokojny lekarz rodzinny' },
      { user: 'Pacjent przekonany, że ma rzadką chorobę z internetu', ai: 'Lekarz o ograniczonej cierpliwości' },
    ],
    complications: {
      B1: 'Lekarz pyta o historię choroby w rodzinie — musisz to opisać własnymi słowami.',
      B2: 'Musisz wynegocjować termin badania, bo najbliższy wolny termin Ci nie pasuje.',
    },
  },
  {
    id: 'hairdresser', icon: '💇', title: 'U fryzjera',
    roles: [
      { user: 'Klient chcący drobną zmianę fryzury', ai: 'Gadatliwy fryzjer, który zna wszystkie plotki' },
      { user: 'Klient, który boi się nowej fryzury', ai: 'Fryzjer-artysta z wielkimi ambicjami' },
    ],
    complications: {
      B1: 'Fryzjer proponuje coś innego niż prosiłeś — wyjaśnij dokładnie, czego chcesz.',
      B2: 'W trakcie strzyżenia coś idzie nie tak — musisz zareagować i zdecydować, jak to naprawić.',
    },
  },
  {
    id: 'taxi', icon: '🚕', title: 'W taksówce',
    roles: [
      { user: 'Pasażer śpieszący się na pociąg', ai: 'Kierowca, który zna skróty, ale uwielbia opowiadać historie' },
      { user: 'Turysta niepewny adresu', ai: 'Milczący, tajemniczy taksówkarz' },
    ],
    complications: {
      B1: 'Kierowca jedzie inną trasą niż się spodziewałeś — zapytaj dlaczego i czy to się opłaca.',
      B2: 'Musisz wynegocjować cenę kursu, zanim wsiądziesz, bo licznik nie działa.',
    },
  },
  {
    id: 'bank', icon: '🏦', title: 'W banku',
    roles: [
      { user: 'Klient zakładający konto', ai: 'Formalny doradca bankowy' },
      { user: 'Klient reklamujący dziwną opłatę na koncie', ai: 'Doradca, który tylko recytuje regulamin' },
    ],
    complications: {
      B1: 'Bank wymaga dodatkowego dokumentu, którego nie masz przy sobie — zapytaj o alternatywę.',
      B2: 'Musisz złożyć reklamację nieautoryzowanej transakcji i wyjaśnić szczegóły.',
    },
  },
  {
    id: 'office', icon: '🏢', title: 'W urzędzie',
    roles: [
      { user: 'Osoba meldująca nowy adres', ai: 'Rzeczowy urzędnik' },
      { user: 'Osoba z niekompletnymi dokumentami', ai: 'Urzędnik uwielbiający stemple i procedury' },
    ],
    complications: {
      B1: 'Brakuje jednego z wymaganych formularzy — zapytaj, jak go uzupełnić.',
      B2: 'Urzędnik odsyła Cię do innego okienka — musisz dopytać o cały proces krok po kroku.',
    },
  },
  {
    id: 'mechanic', icon: '🔧', title: 'U mechanika',
    roles: [
      { user: 'Kierowca z dziwnym dźwiękiem w silniku', ai: 'Doświadczony mechanik' },
      { user: 'Kierowca, który nic nie wie o samochodach', ai: 'Mechanik próbujący sprzedać niepotrzebne naprawy' },
    ],
    complications: {
      B1: 'Naprawa będzie droższa niż się spodziewałeś — zareaguj i zapytaj o tańsze opcje.',
      B2: 'Musisz wynegocjować termin odbioru samochodu, bo pilnie go potrzebujesz.',
    },
  },
  {
    id: 'gym', icon: '🏋️', title: 'Na siłowni',
    roles: [
      { user: 'Nowy członek pytający o sprzęt', ai: 'Entuzjastyczny trener personalny' },
      { user: 'Osoba szukająca partnera do ćwiczeń', ai: 'Zbyt pewny siebie kulturysta' },
    ],
    complications: {
      B1: 'Sprzęt, którego chciałeś użyć, jest zajęty — zapytaj o alternatywę.',
      B2: 'Trener proponuje plan treningowy, którego się obawiasz — wyraź swoje wątpliwości i wynegocjuj zmiany.',
    },
  },
  {
    id: 'party', icon: '🎉', title: 'Na imprezie urodzinowej',
    roles: [
      { user: 'Gość, który nikogo nie zna', ai: 'Towarzyski gospodarz imprezy' },
      { user: 'Osoba próbująca uciec od nudnej rozmowy', ai: 'Gaduła opowiadający wyłącznie o swoim akwarium' },
    ],
    complications: {
      B1: 'Ktoś na imprezie myli Cię z inną osobą — musisz to wyjaśnić.',
      B2: 'W trakcie rozmowy musisz taktownie odmówić czegoś, co Ci zaproponowano (np. jedzenia, gry, wyjścia).',
    },
  },
  {
    id: 'interview', icon: '💼', title: 'Rozmowa kwalifikacyjna',
    roles: [
      { user: 'Kandydat na stanowisko stażysty', ai: 'Uprzejma rekruterka' },
      { user: 'Pewny siebie kandydat z małym doświadczeniem', ai: 'Sceptyczny, wymagający dyrektor HR' },
    ],
    complications: {
      B1: 'Rekruterka pyta o Twoją największą słabość — musisz odpowiedzieć dyplomatycznie.',
      B2: 'Musisz wynegocjować termin rozpoczęcia pracy lub inny szczegół oferty.',
    },
  },
  {
    id: 'neighbor', icon: '🏠', title: 'Rozmowa z sąsiadem',
    roles: [
      { user: 'Zirytowany sąsiad zza ściany skarżący się na hałas', ai: 'Zaskoczony sąsiad, który właśnie urządził imprezę' },
      { user: 'Osoba proszące o pożyczenie cukru', ai: 'Podejrzliwy, samotny sąsiad, który uwielbia teorie spiskowe' },
    ],
    complications: {
      B1: 'Sąsiad prosi o coś, na co nie masz ochoty — musisz grzecznie odmówić.',
      B2: 'Sytuacja się komplikuje (sąsiad się obraża lub nie ustępuje) — musisz rozładować napięcie.',
    },
  },
  {
    id: 'vet', icon: '🐶', title: 'U weterynarza',
    roles: [
      { user: 'Zaniepokojony właściciel psa', ai: 'Spokojna weterynarz' },
      { user: 'Właściciel bardzo niegrzecznego kota', ai: 'Weterynarz, który szczerze boi się tego kota' },
    ],
    complications: {
      B1: 'Weterynarz sugeruje kosztowne badanie — zapytaj o alternatywy.',
      B2: 'Musisz opisać nietypowe zachowanie zwierzęcia i odpowiedzieć na serię szczegółowych pytań.',
    },
  },
  {
    id: 'library', icon: '📚', title: 'W bibliotece',
    roles: [
      { user: 'Student szukający konkretnej książki', ai: 'Pomocna bibliotekarka' },
      { user: 'Osoba oddająca książkę miesiąc po terminie', ai: 'Surowa bibliotekarka pilnująca ciszy' },
    ],
    complications: {
      B1: 'Książki, której szukasz, nie ma na półce — zapytaj o inne opcje.',
      B2: 'Musisz wynegocjować przedłużenie terminu zwrotu, tłumacząc swoją sytuację.',
    },
  },
  {
    id: 'cinema', icon: '🎬', title: 'W kinie (kasa biletowa)',
    roles: [
      { user: 'Widz kupujący bilety na wieczorny seans', ai: 'Znudzona kasjerka' },
      { user: 'Osoba, która pomyliła godzinę seansu', ai: 'Kasjer-fanatyk kina, który zna każdy film na pamięć' },
    ],
    complications: {
      B1: 'Seans, na który chciałeś iść, jest wyprzedany — zapytaj o alternatywę.',
      B2: 'Musisz zareklamować złe miejsca lub problem z biletem kupionym online.',
    },
  },
  {
    id: 'return', icon: '🛍️', title: 'Zwrot towaru w sklepie',
    roles: [
      { user: 'Klient zwracający buty w złym rozmiarze', ai: 'Wyrozumiały sprzedawca' },
      { user: 'Klient reklamujący pizzę z za małą ilością salami', ai: 'Zdezorientowany kucharz broniący swojej pizzy' },
    ],
    complications: {
      B1: 'Sprzedawca prosi o paragon, którego nie masz — musisz to jakoś rozwiązać.',
      B2: 'Sprzedawca odmawia zwrotu — musisz argumentować i dążyć do kompromisu.',
    },
  },
  {
    id: 'luggage', icon: '🧳', title: 'Zgubiony bagaż na lotnisku',
    roles: [
      { user: 'Pasażer zgłaszający zaginiony bagaż', ai: 'Cierpliwy pracownik biura reklamacji' },
      { user: 'Podróżnik w panice bez ubrań na wakacje', ai: 'Pracownik linii lotniczych, który akurat ma kiepski dzień' },
    ],
    complications: {
      B1: 'Musisz dokładnie opisać wygląd zagubionej walizki.',
      B2: 'Pracownik informuje, że bagaż odnajdzie się dopiero za kilka dni — musisz wynegocjować rekompensatę lub pomoc.',
    },
  },
  {
    id: 'carrental', icon: '🚗', title: 'Wypożyczalnia samochodów',
    roles: [
      { user: 'Klient wypożyczający samochód na weekend', ai: 'Rzeczowy pracownik wypożyczalni' },
      { user: 'Klient chcący najtańszą opcję, ale z dużymi wymaganiami', ai: 'Sprzedawca usilnie dosprzedający ubezpieczenie' },
    ],
    complications: {
      B1: 'Samochód, który rezerwowałeś, jest niedostępny — uzgodnij zamiennik.',
      B2: 'Podczas odbioru zauważasz rysę na aucie — musisz to zgłosić, zanim podpiszesz umowę.',
    },
  },
  {
    id: 'office-smalltalk', icon: '☕', title: 'Small talk przy kawie w pracy',
    roles: [
      { user: 'Nowy pracownik poznający kolegów', ai: 'Wylewny współpracownik uwielbiający plotki z biura' },
      { user: 'Osoba unikająca rozmowy o pogodzie', ai: 'Kolega, który potrafi rozmawiać wyłącznie o pogodzie' },
    ],
    complications: {
      B1: 'Ktoś pyta Cię o coś niezręcznego — musisz zmienić temat w naturalny sposób.',
      B2: 'Musisz taktownie nie zgodzić się z opinią współpracownika, nie robiąc z tego konfliktu.',
    },
  },
  {
    id: 'beach', icon: '🏖️', title: 'Na plaży (wakacje)',
    roles: [
      { user: 'Turysta pytający o wypożyczenie leżaka', ai: 'Zrelaksowany ratownik' },
      { user: 'Osoba broniąca swojego miejsca na plaży', ai: 'Sąsiad z plaży, który rozstawił się o metr za blisko' },
    ],
    complications: {
      B1: 'Zaczyna się sztorm lub silny wiatr — musisz zdecydować, co robić.',
      B2: 'Musisz rozwiązać spór o miejsce na plaży w sposób dyplomatyczny.',
    },
  },
  {
    id: 'parking', icon: '🅿️', title: 'Spór o miejsce parkingowe',
    roles: [
      { user: 'Kierowca, który "zajął" czyjeś zwyczajowe miejsce', ai: 'Oburzony sąsiad broniący swojego terytorium' },
      { user: 'Osoba parkująca lekko krzywo', ai: 'Nadgorliwy strażnik osiedlowy z metrówką' },
    ],
    complications: {
      B1: 'Druga osoba nie chce ustąpić — musisz znaleźć kompromis.',
      B2: 'Sytuacja eskaluje i ktoś grozi wezwaniem straży — musisz rozładować napięcie i zaproponować rozwiązanie.',
    },
  },
  {
    id: 'fortuneteller', icon: '🔮', title: 'Wizyta u wróżki',
    roles: [
      { user: 'Sceptyczny klient chcący poznać przyszłość', ai: 'Tajemnicza wróżka z kryształową kulą' },
      { user: 'Osoba pytająca o miłość', ai: 'Wróżka, która widzi wyłącznie złe wiadomości' },
    ],
    complications: {
      B1: 'Wróżka przepowiada coś niepokojącego — musisz zapytać o więcej szczegółów.',
      B2: 'Musisz zakwestionować jedną z przepowiedni, zachowując uprzejmość.',
    },
  },
  {
    id: 'alien', icon: '👽', title: 'Rozmowa z kosmitą uczącym się angielskiego',
    roles: [
      { user: 'Ziemianin tłumaczący, czym jest kawa', ai: 'Kosmita, który myli słowa i zadaje bardzo dziwne pytania' },
      { user: 'Przewodnik oprowadzający kosmitę po Ziemi', ai: 'Kosmita głęboko przekonany, że ludzie to roboty' },
    ],
    complications: {
      B1: 'Kosmita nie rozumie podstawowego ziemskiego zwyczaju — musisz to cierpliwie wytłumaczyć.',
      B2: 'Kosmita zaczyna panikować z powodu nieporozumienia — musisz go uspokoić i wyjaśnić sytuację.',
    },
  },
  {
    id: 'robot', icon: '🤖', title: 'Robot-sprzedawca w sklepie przyszłości',
    roles: [
      { user: 'Klient szukający zwykłego chleba', ai: 'Robot-sprzedawca polecający wyłącznie futurystyczne jedzenie' },
      { user: 'Klient próbujący wyłączyć nachalnego robota', ai: 'Robot z nadgorliwym programem sprzedażowym' },
    ],
    complications: {
      B1: 'Robot poleca coś zupełnie niepotrzebnego — musisz stanowczo, ale grzecznie odmówić.',
      B2: 'System robota się zawiesza w trakcie rozmowy — musisz zdecydować, jak dokończyć zakupy.',
    },
  },
  {
    id: 'ghost', icon: '🏰', title: 'Rozmowa z duchem w starym zamku',
    roles: [
      { user: 'Zwiedzający, który niespodziewanie spotkał ducha', ai: 'Zrzędliwy duch mieszkający w zamku od 300 lat' },
      { user: 'Przewodnik wycieczki próbujący uspokoić grupę', ai: 'Duch, który uwielbia straszyć, ale w głębi duszy jest samotny' },
    ],
    complications: {
      B1: 'Duch prosi Cię o przysługę — musisz zdecydować, czy się zgodzić.',
      B2: 'Duch zdradza mroczny sekret zamku — musisz zareagować i zadać dalsze pytania.',
    },
  },
  {
    id: 'superhero', icon: '🦸', title: 'Trening superbohatera',
    roles: [
      { user: 'Uczeń szkoły superbohaterów', ai: 'Ekscentryczny mentor-superbohater' },
      { user: 'Superbohater na pierwszej misji', ai: 'Złoczyńca, który tak naprawdę chce się zaprzyjaźnić' },
    ],
    complications: {
      B1: 'Mentor daje Ci trudne zadanie do wykonania na już — musisz zapytać o szczegóły.',
      B2: 'W trakcie treningu coś idzie nie tak (sprzęt lub moc zawodzi) — musisz zaimprowizować rozwiązanie.',
    },
  },
  {
    id: 'pirates', icon: '🏴‍☠️', title: 'Na statku piratów',
    roles: [
      { user: 'Nowy członek załogi', ai: 'Kapitan piratów szukający zaginionego skarbu' },
      { user: 'Jeniec próbujący uciec', ai: 'Gadatliwa papuga kapitana, która mówi ludzkim głosem' },
    ],
    complications: {
      B1: 'Załoga odkrywa problem z mapą skarbów — musisz zaproponować rozwiązanie.',
      B2: 'Musisz wynegocjować swój udział w skarbie z resztą załogi.',
    },
  },
  {
    id: 'dragonschool', icon: '🐉', title: 'Szkoła treserów smoków',
    roles: [
      { user: 'Uczeń w szkole treserów smoków', ai: 'Nauczycielka ucząca, jak się zaprzyjaźnić ze smokiem' },
      { user: 'Smoczy jeździec na pierwszym locie', ai: 'Nerwowy smok, który boi się latać' },
    ],
    complications: {
      B1: 'Twój smok odmawia współpracy — musisz go uspokoić i przekonać.',
      B2: 'Pojawia się nieoczekiwane niebezpieczeństwo podczas lotu — musisz zareagować i podjąć decyzję.',
    },
  },
  {
    id: 'videogame', icon: '🎮', title: 'Wewnątrz gry wideo',
    roles: [
      { user: 'Gracz, który utknął w grze', ai: 'NPC dający wskazówki, ale trochę pomylony' },
      { user: 'Bohater questu', ai: 'Zły boss, który tak naprawdę woli gadać niż walczyć' },
    ],
    complications: {
      B1: 'NPC daje Ci mylące wskazówki — musisz dopytać, żeby zrozumieć zadanie.',
      B2: 'Musisz wynegocjować z bossem rozejm zamiast walki.',
    },
  },
  {
    id: 'magicschool', icon: '🧙', title: 'Szkoła magii',
    roles: [
      { user: 'Nowy uczeń szkoły magii', ai: 'Ekscentryczny nauczyciel zaklęć' },
      { user: 'Uczeń, któremu zaklęcie nie do końca wyszło', ai: 'Mówiący kot, który jest w tej szkole od 100 lat' },
    ],
    complications: {
      B1: 'Twoje zaklęcie działa nie tak, jak powinno — musisz opisać, co poszło nie tak.',
      B2: 'Musisz przekonać nauczyciela, żeby dał Ci drugą szansę po nieudanym zaklęciu.',
    },
  },
  {
    id: 'timetravel', icon: '🕰️', title: 'Podróż w czasie',
    roles: [
      { user: 'Podróżnik w czasie, który wylądował w średniowieczu', ai: 'Zdziwiony mieszkaniec średniowiecznej wioski' },
      { user: 'Odkrywca przyszłości', ai: 'Robot z roku 3000, trochę zdezorientowany' },
    ],
    complications: {
      B1: 'Rozmówca nie rozumie, skąd jesteś — musisz to wytłumaczyć.',
      B2: 'Musisz rozwiązać nieporozumienie, które grozi zmianą biegu historii.',
    },
  },
  {
    id: 'zoo', icon: '🦁', title: 'W zoo',
    roles: [
      { user: 'Zwiedzający pytający opiekuna o zwierzęta', ai: 'Entuzjastyczny opiekun zoo' },
      { user: 'Osoba, która przypadkiem rozumie mowę zwierząt', ai: 'Znudzony lew, który narzeka na jedzenie' },
    ],
    complications: {
      B1: 'Jedno ze zwierząt zachowuje się nietypowo — musisz o to dopytać opiekuna.',
      B2: 'Musisz przekonać znudzone, marudne zwierzę, żeby współpracowało.',
    },
  },
  {
    id: 'friendbirthday', icon: '🎂', title: 'Urodziny kolegi/koleżanki ze szkoły',
    roles: [
      { user: 'Gość na urodzinach szkolnego kolegi', ai: 'Ekscytowany solenizant pokazujący prezenty' },
      { user: 'Osoba organizująca niespodziankę', ai: 'Kolega, który prawie zdradza sekret' },
    ],
    complications: {
      B1: 'Zapomniałeś prezentu — musisz wytłumaczyć się przed solenizantem.',
      B2: 'Musisz utrzymać niespodziankę w tajemnicy mimo trudnych pytań.',
    },
  },
  {
    id: 'summercamp', icon: '🏕️', title: 'Na obozie letnim',
    roles: [
      { user: 'Uczestnik obozu poznający nowych znajomych', ai: 'Wesoły opiekun obozowy' },
      { user: 'Osoba opowiadająca straszną historię przy ognisku', ai: 'Nieco przestraszony uczestnik obozu' },
    ],
    complications: {
      B1: 'Pogoda psuje zaplanowaną aktywność — musicie zdecydować, co robić zamiast tego.',
      B2: 'Musisz rozwiązać spór między dwoma uczestnikami obozu.',
    },
  },
  {
    id: 'ghosthunt', icon: '👻', title: 'Polowanie na duchy',
    roles: [
      { user: 'Młody łowca duchów na pierwszej misji', ai: 'Doświadczony, ale zabawny mentor łowców duchów' },
      { user: 'Osoba, która znalazła nawiedzony dom', ai: 'Duch, który tylko chce, żeby ktoś zagrał z nim w planszówkę' },
    ],
    complications: {
      B1: 'Wykrywacz duchów pokazuje coś niepokojącego — musisz zdecydować, co dalej.',
      B2: 'Duch, na którego polujecie, okazuje się bardziej przebiegły, niż myśleliście — musicie zmienić plan.',
    },
  },
];

let currentChat = null;
let chatSetupState = { scenario: null, level: null };
let chatSummaryWords = {};

// ===== ESSAY TOPICS (Wypracowania) =====
const ESSAY_TOPICS = {
  A1: [
    { title: 'My family', minWords: 40, requirements: [
      'Napisz minimum 40 słów.',
      'Powiedz, ile osób jest w Twojej rodzinie.',
      'Opisz, kim są (mama, tata, brat, siostra...) i ile mają lat.',
      'Napisz, co lubią robić.',
    ]},
    { title: 'My favourite animal', minWords: 40, requirements: [
      'Napisz minimum 40 słów.',
      'Napisz, jakie to zwierzę i jak wygląda.',
      'Opisz, gdzie mieszka.',
      'Napisz, co je i dlaczego je lubisz.',
    ]},
    { title: 'My day', minWords: 40, requirements: [
      'Napisz minimum 40 słów.',
      'Opisz swój typowy dzień od rana do wieczora.',
      'Użyj czasu teraźniejszego (Present Simple).',
    ]},
    { title: 'My room', minWords: 40, requirements: [
      'Napisz minimum 40 słów.',
      'Opisz, jakie meble i przedmioty są w Twoim pokoju.',
      'Napisz, gdzie się znajdują (użyj słów typu "next to", "on", "under").',
    ]},
    { title: 'My favourite food', minWords: 40, requirements: [
      'Napisz minimum 40 słów.',
      'Napisz, jakie jedzenie lubisz najbardziej i dlaczego.',
      'Opisz, kiedy je jesz.',
    ]},
  ],
  A2: [
    { title: 'My last holiday', minWords: 70, requirements: [
      'Napisz minimum 70 słów.',
      'Opisz, gdzie byłeś na ostatnich wakacjach i z kim.',
      'Napisz, co robiłeś każdego dnia.',
      'Użyj czasu przeszłego (Past Simple).',
    ]},
    { title: 'My best friend', minWords: 70, requirements: [
      'Napisz minimum 70 słów.',
      'Opisz wygląd i charakter swojego najlepszego przyjaciela.',
      'Napisz, co razem lubicie robić.',
    ]},
    { title: 'My favourite hobby', minWords: 70, requirements: [
      'Napisz minimum 70 słów.',
      'Napisz, jakie masz hobby i od kiedy je uprawiasz.',
      'Wyjaśnij, dlaczego je lubisz.',
    ]},
    { title: 'A day I will never forget', minWords: 70, requirements: [
      'Napisz minimum 70 słów.',
      'Opisz konkretny dzień, który dobrze zapamiętałeś.',
      'Wyjaśnij, dlaczego był wyjątkowy.',
      'Użyj czasu przeszłego (Past Simple).',
    ]},
    { title: 'My dream house', minWords: 70, requirements: [
      'Napisz minimum 70 słów.',
      'Opisz, jak wyglądałby Twój wymarzony dom.',
      'Napisz, gdzie by stał i co by w nim było.',
    ]},
  ],
  B1: [
    { title: 'The advantages and disadvantages of social media', minWords: 120, requirements: [
      'Napisz minimum 120 słów.',
      'Podaj przynajmniej dwie zalety i dwie wady social mediów.',
      'Zakończ własną opinią.',
    ]},
    { title: 'My plans for the future', minWords: 120, requirements: [
      'Napisz minimum 120 słów.',
      'Opisz swoje plany dotyczące szkoły, pracy i marzeń.',
      'Użyj konstrukcji czasu przyszłego ("will", "going to").',
    ]},
    { title: 'A book or a movie that changed how I think', minWords: 120, requirements: [
      'Napisz minimum 120 słów.',
      'Opisz krótko, o czym była książka/film.',
      'Wyjaśnij, jak wpłynęła na Twoje myślenie.',
    ]},
    { title: 'Should students have homework?', minWords: 120, requirements: [
      'Napisz minimum 120 słów.',
      'Przedstaw argumenty za i przeciw.',
      'Zakończ własną opinią.',
    ]},
    { title: 'The most interesting place I have visited', minWords: 120, requirements: [
      'Napisz minimum 120 słów.',
      'Opisz miejsce i to, co widziałeś/robiłeś.',
      'Wyjaśnij, dlaczego było interesujące.',
    ]},
  ],
  B2: [
    { title: 'Is technology making us less social?', minWords: 180, requirements: [
      'Napisz minimum 180 słów.',
      'Przedstaw argumenty za i przeciw tej tezie.',
      'Użyj słów łączących (however, moreover, on the other hand).',
      'Zakończ jasnym wnioskiem.',
    ]},
    { title: 'The importance of learning foreign languages', minWords: 180, requirements: [
      'Napisz minimum 180 słów.',
      'Wyjaśnij, dlaczego nauka języków obcych jest ważna.',
      'Podaj konkretne przykłady/argumenty.',
    ]},
    { title: 'Should schools ban mobile phones?', minWords: 180, requirements: [
      'Napisz minimum 180 słów.',
      'Przedstaw argumenty obu stron.',
      'Zakończ własnym, uzasadnionym stanowiskiem.',
    ]},
    { title: 'My role model', minWords: 180, requirements: [
      'Napisz minimum 180 słów.',
      'Opisz osobę, która Cię inspiruje.',
      'Podaj konkretne przykłady jej osiągnięć lub cech.',
    ]},
    { title: 'Living in a big city vs a small town', minWords: 180, requirements: [
      'Napisz minimum 180 słów.',
      'Porównaj zalety i wady życia w dużym mieście i w małej miejscowości.',
      'Zakończ własną opinią, gdzie wolałbyś mieszkać.',
    ]},
  ],
};

let essaySetupState = { level: null };
let currentEssay = null;
let essayVocabWords = {};

// ===== KIDS MODE (Dla najmłodszych) =====
const KIDS_CATEGORIES = [
  { id: 'colors', icon: '🎨', title: 'Kolory', words: [
    { emoji: '🔴', en: 'red', pl: 'czerwony' },
    { emoji: '🟠', en: 'orange', pl: 'pomarańczowy' },
    { emoji: '🟡', en: 'yellow', pl: 'żółty' },
    { emoji: '🟢', en: 'green', pl: 'zielony' },
    { emoji: '🔵', en: 'blue', pl: 'niebieski' },
    { emoji: '🟣', en: 'purple', pl: 'fioletowy' },
    { emoji: '⚫', en: 'black', pl: 'czarny' },
    { emoji: '⚪', en: 'white', pl: 'biały' },
    { emoji: '🟤', en: 'brown', pl: 'brązowy' },
    { emoji: '🩷', en: 'pink', pl: 'różowy' },
  ]},
  { id: 'animals', icon: '🐾', title: 'Zwierzątka', words: [
    { emoji: '🐶', en: 'dog', pl: 'pies' },
    { emoji: '🐱', en: 'cat', pl: 'kot' },
    { emoji: '🐰', en: 'rabbit', pl: 'królik' },
    { emoji: '🐻', en: 'bear', pl: 'miś' },
    { emoji: '🦁', en: 'lion', pl: 'lew' },
    { emoji: '🐘', en: 'elephant', pl: 'słoń' },
    { emoji: '🐸', en: 'frog', pl: 'żaba' },
    { emoji: '🐦', en: 'bird', pl: 'ptak' },
    { emoji: '🐟', en: 'fish', pl: 'ryba' },
    { emoji: '🐴', en: 'horse', pl: 'koń' },
  ]},
  { id: 'numbers', icon: '🔢', title: 'Liczby', words: [
    { emoji: '1️⃣', en: 'one', pl: 'jeden' },
    { emoji: '2️⃣', en: 'two', pl: 'dwa' },
    { emoji: '3️⃣', en: 'three', pl: 'trzy' },
    { emoji: '4️⃣', en: 'four', pl: 'cztery' },
    { emoji: '5️⃣', en: 'five', pl: 'pięć' },
    { emoji: '6️⃣', en: 'six', pl: 'sześć' },
    { emoji: '7️⃣', en: 'seven', pl: 'siedem' },
    { emoji: '8️⃣', en: 'eight', pl: 'osiem' },
    { emoji: '9️⃣', en: 'nine', pl: 'dziewięć' },
    { emoji: '🔟', en: 'ten', pl: 'dziesięć' },
  ]},
  { id: 'family', icon: '👪', title: 'Rodzina', words: [
    { emoji: '👩', en: 'mum', pl: 'mama' },
    { emoji: '👨', en: 'dad', pl: 'tata' },
    { emoji: '👧', en: 'sister', pl: 'siostra' },
    { emoji: '👦', en: 'brother', pl: 'brat' },
    { emoji: '👵', en: 'grandma', pl: 'babcia' },
    { emoji: '👴', en: 'grandpa', pl: 'dziadek' },
    { emoji: '👶', en: 'baby', pl: 'dziecko' },
    { emoji: '👪', en: 'family', pl: 'rodzina' },
  ]},
  { id: 'food', icon: '🍎', title: 'Jedzenie', words: [
    { emoji: '🍎', en: 'apple', pl: 'jabłko' },
    { emoji: '🍌', en: 'banana', pl: 'banan' },
    { emoji: '🍕', en: 'pizza', pl: 'pizza' },
    { emoji: '🍦', en: 'ice cream', pl: 'lody' },
    { emoji: '🍪', en: 'cookie', pl: 'ciasteczko' },
    { emoji: '🥛', en: 'milk', pl: 'mleko' },
    { emoji: '🍞', en: 'bread', pl: 'chleb' },
    { emoji: '🧀', en: 'cheese', pl: 'ser' },
    { emoji: '🍇', en: 'grapes', pl: 'winogrona' },
    { emoji: '🍓', en: 'strawberry', pl: 'truskawka' },
  ]},
  { id: 'clothes', icon: '👕', title: 'Ubrania', words: [
    { emoji: '👕', en: 't-shirt', pl: 'koszulka' },
    { emoji: '👖', en: 'trousers', pl: 'spodnie' },
    { emoji: '👗', en: 'dress', pl: 'sukienka' },
    { emoji: '🧦', en: 'socks', pl: 'skarpetki' },
    { emoji: '👟', en: 'shoes', pl: 'buty' },
    { emoji: '🧢', en: 'cap', pl: 'czapka' },
    { emoji: '🧥', en: 'jacket', pl: 'kurtka' },
    { emoji: '🧤', en: 'gloves', pl: 'rękawiczki' },
  ]},
  { id: 'toys', icon: '🧸', title: 'Zabawki', words: [
    { emoji: '⚽', en: 'ball', pl: 'piłka' },
    { emoji: '🧸', en: 'teddy bear', pl: 'miś' },
    { emoji: '🪁', en: 'kite', pl: 'latawiec' },
    { emoji: '🎈', en: 'balloon', pl: 'balon' },
    { emoji: '🧩', en: 'puzzle', pl: 'puzzle' },
    { emoji: '🧱', en: 'blocks', pl: 'klocki' },
    { emoji: '🥁', en: 'drum', pl: 'bębenek' },
    { emoji: '🤖', en: 'robot', pl: 'robot' },
  ]},
  { id: 'vehicles', icon: '🚗', title: 'Pojazdy', words: [
    { emoji: '🚗', en: 'car', pl: 'samochód' },
    { emoji: '🚌', en: 'bus', pl: 'autobus' },
    { emoji: '🚂', en: 'train', pl: 'pociąg' },
    { emoji: '✈️', en: 'plane', pl: 'samolot' },
    { emoji: '🚲', en: 'bike', pl: 'rower' },
    { emoji: '🚁', en: 'helicopter', pl: 'helikopter' },
    { emoji: '🚤', en: 'boat', pl: 'łódka' },
    { emoji: '🚚', en: 'truck', pl: 'ciężarówka' },
  ]},
  { id: 'emotions', icon: '😀', title: 'Emocje', words: [
    { emoji: '😀', en: 'happy', pl: 'wesoły' },
    { emoji: '😢', en: 'sad', pl: 'smutny' },
    { emoji: '😠', en: 'angry', pl: 'zły' },
    { emoji: '😴', en: 'sleepy', pl: 'śpiący' },
    { emoji: '😲', en: 'surprised', pl: 'zaskoczony' },
    { emoji: '😨', en: 'scared', pl: 'przestraszony' },
    { emoji: '🤩', en: 'excited', pl: 'podekscytowany' },
    { emoji: '😳', en: 'shy', pl: 'nieśmiały' },
  ]},
];

const KIDS_SENTENCES = [
  { emoji: '👋', en: 'Hello!', pl: 'Cześć!' },
  { emoji: '🙋', en: 'My name is Ala.', pl: 'Mam na imię Ala.' },
  { emoji: '🪑', en: 'This is a chair.', pl: 'To jest krzesło.' },
  { emoji: '🐶', en: 'This is a dog.', pl: 'To jest pies.' },
  { emoji: '😊', en: 'I am happy.', pl: 'Jestem szczęśliwy.' },
  { emoji: '🍎', en: 'I like apples.', pl: 'Lubię jabłka.' },
  { emoji: '💧', en: 'I want water.', pl: 'Chcę wodę.' },
  { emoji: '🙏', en: 'Thank you!', pl: 'Dziękuję!' },
  { emoji: '🤗', en: 'I love you.', pl: 'Kocham cię.' },
  { emoji: '👍', en: 'Good job!', pl: 'Dobra robota!' },
  { emoji: '😴', en: 'I am tired.', pl: 'Jestem zmęczony.' },
  { emoji: '🎂', en: 'Happy birthday!', pl: 'Wszystkiego najlepszego!' },
];

let kidsCategoryId  = null;
let kidsFlashIndex  = 0;
let kidsQuizWord    = null;
let kidsTFCurrent   = null;
let kidsSentenceIndex = 0;
let kidsStars       = parseInt(localStorage.getItem('kids_stars') || '0', 10);

// ===== STORAGE =====
const DB = {
  get: (key) => { try { return JSON.parse(localStorage.getItem(key)) || null; } catch { return null; } },
  set: (key, val) => localStorage.setItem(key, JSON.stringify(val)),
};

function getSets()     { return DB.get('sets') || []; }
function saveSets(s)   { DB.set('sets', s); }
function getSongs()    { return DB.get('songs') || []; }
function saveSongs(s)  { DB.set('songs', s); }
function getProgress() { return DB.get('progress') || { streak: { lastDate: null, count: 0 }, badges: [], history: [] }; }
function saveProgress(p) { DB.set('progress', p); }

function uid() { return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }

// ===== STREAK =====
function updateStreak() {
  const prog = getProgress();
  const today = new Date().toISOString().slice(0, 10);
  const last = prog.streak.lastDate;
  if (last === today) return prog;
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);
  if (last === yesterday) { prog.streak.count += 1; }
  else { prog.streak.count = 1; }
  prog.streak.lastDate = today;
  saveProgress(prog);
  return prog;
}

// ===== ROUTER =====
let currentSetId  = null;
let currentSongId = null;

function showView(name, params = {}) {
  document.querySelectorAll('.view').forEach(v => v.style.display = 'none');
  const el = document.getElementById('view-' + name);
  if (!el) return;
  el.style.display = '';

  if (name === 'home')        renderHome();
  if (name === 'sets-list')   renderSetsList();
  if (name === 'set-edit')    initSetEdit(params.id || null);
  if (name === 'set-detail')  { currentSetId = params.id; renderSetDetail(params.id); }
  if (name === 'songs-list')    renderSongsList();
  if (name === 'song-edit')     initSongEdit(params.id || null);
  if (name === 'song-detail')   { currentSongId = params.id; renderSongDetail(params.id); }
  if (name === 'song-translate'){ currentSongId = params.id; renderTranslate(params.id); }
  if (name === 'song-extract')  { currentSongId = params.id; renderExtract(params.id); }
  if (name === 'hangman')     {} // initialized by startHangman()
  if (name === 'match')       {} // initialized by startMatch()
  if (name === 'progress')    renderProgress();
  if (name === 'chat-setup')  renderChatSetup();
  if (name === 'chat')        {} // initialized by startChat()
  if (name === 'chat-summary'){} // initialized by finishChat()
  if (name === 'essay-setup') renderEssaySetup();
  if (name === 'essay-write') {} // initialized by startEssay()
  if (name === 'essay-result'){} // initialized by submitEssayForCheck()
  if (name === 'kids-home')       renderKidsHome();
  if (name === 'kids-category')   {} // initialized by pickKidsCategory()
  if (name === 'kids-flashcards') {} // initialized by startKidsFlashcards()
  if (name === 'kids-quiz')       {} // initialized by startKidsQuiz()
  if (name === 'kids-truefalse')  {} // initialized by startKidsTrueFalse()
  if (name === 'kids-sentences')  {} // initialized by startKidsSentences()
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== HOME =====
function renderHome() {
  const prog = updateStreak();
  const streak = prog.streak.count;
  document.getElementById('hero-greeting').textContent = 'Cześć Ala! 👋';
  document.getElementById('hero-streak').textContent =
    streak > 1 ? `🔥 ${streak} dni z rzędu! Niesamowite!`
    : streak === 1 ? '🌟 Zaczynamy dzisiaj!'
    : '👀 Zaloguj się jutro, żeby utrzymać passę!';

  const sets = getSets();
  const recent = document.getElementById('home-recent');
  if (sets.length === 0) { recent.innerHTML = ''; return; }
  const lastSet = [...sets].sort((a, b) => (b.lastUsed || 0) - (a.lastUsed || 0))[0];
  recent.innerHTML = `
    <h2>📖 Ostatnio ćwiczone</h2>
    <div class="sets-grid" style="max-width:300px">
      ${renderSetCard(lastSet)}
    </div>`;
}

// ===== SETS LIST =====
function renderSetsList() {
  const sets = getSets();
  const grid = document.getElementById('sets-grid');
  if (sets.length === 0) {
    grid.innerHTML = `<div class="empty-state">
      <div class="empty-icon">📚</div>
      <p>Nie masz jeszcze żadnych zestawów.<br>Stwórz pierwszy!</p>
      <button class="btn btn-primary btn-large" onclick="showView('set-edit',{id:null})">➕ Nowy zestaw</button>
    </div>`;
    return;
  }
  grid.innerHTML = sets.map(renderSetCard).join('');
}

function renderSetCard(s) {
  const best = s.results && s.results.length ? Math.max(...s.results.map(r => r.score)) : 0;
  return `<div class="set-card" onclick="showView('set-detail',{id:'${s.id}'})">
    <div class="set-card-icon">${s.icon || '📚'}</div>
    <div class="set-card-name">${s.name}</div>
    <div class="set-card-count">${s.words.length} słówek</div>
    <div class="set-card-bar"><div class="set-card-fill" style="width:${best}%"></div></div>
    <div style="font-size:.8rem;color:var(--text-light);margin-top:4px">Najlepszy wynik: ${best}%</div>
  </div>`;
}

// ===== SET EDIT =====
const EMOJIS = ['📚','🌈','🐶','🐱','🐸','🦁','🌸','⭐','🍎','🏠','🚗','🎨','🌍','🎭','🦋','🔢','🎯','🏅'];
let editingSetId = null;
let selectedEmoji = '📚';

function initSetEdit(id) {
  editingSetId = id;
  selectedEmoji = '📚';
  document.getElementById('set-edit-title').textContent = id ? 'Edytuj zestaw' : 'Nowy zestaw';
  document.getElementById('delete-set-btn').style.display = id ? '' : 'none';
  document.getElementById('bulk-input').value = '';

  const emojiPicker = document.getElementById('emoji-picker');
  emojiPicker.innerHTML = EMOJIS.map(e =>
    `<span class="emoji-opt${e === selectedEmoji ? ' selected' : ''}" onclick="selectEmoji('${e}')">${e}</span>`
  ).join('');

  if (id) {
    const set = getSets().find(s => s.id === id);
    if (!set) return;
    document.getElementById('set-name-input').value = set.name;
    selectedEmoji = set.icon || '📚';
    document.querySelectorAll('.emoji-opt').forEach(el => {
      el.classList.toggle('selected', el.textContent === selectedEmoji);
    });
    renderWordRows(set.words);
  } else {
    document.getElementById('set-name-input').value = '';
    renderWordRows([{ id: uid(), en: '', pl: '' }, { id: uid(), en: '', pl: '' }]);
  }
}

function selectEmoji(e) {
  selectedEmoji = e;
  document.querySelectorAll('.emoji-opt').forEach(el => el.classList.toggle('selected', el.textContent === e));
}

function renderWordRows(words) {
  const table = document.getElementById('words-table');
  table.innerHTML = words.map((w, i) => `
    <div class="word-row" id="row-${w.id}">
      <input type="text" value="${esc(w.en)}" placeholder="Angielski" class="word-en-input" data-id="${w.id}"
        onkeydown="if(event.key==='Enter')addWordRow()" />
      <input type="text" value="${esc(w.pl)}" placeholder="Polski" class="word-pl-input" data-id="${w.id}"
        onkeydown="if(event.key==='Enter')addWordRow()" />
      <button class="delete-word-btn" onclick="removeWordRow('${w.id}')">✕</button>
    </div>`).join('');
}

function getWordRowsData() {
  return Array.from(document.querySelectorAll('.word-row')).map(row => ({
    id: row.id.replace('row-', ''),
    en: row.querySelector('.word-en-input').value.trim(),
    pl: row.querySelector('.word-pl-input').value.trim(),
  })).filter(w => w.en || w.pl);
}

function addWordRow() {
  const newId = uid();
  const row = document.createElement('div');
  row.className = 'word-row';
  row.id = 'row-' + newId;
  row.innerHTML = `
    <input type="text" placeholder="Angielski" class="word-en-input" data-id="${newId}"
      onkeydown="if(event.key==='Enter')addWordRow()" />
    <input type="text" placeholder="Polski" class="word-pl-input" data-id="${newId}"
      onkeydown="if(event.key==='Enter')addWordRow()" />
    <button class="delete-word-btn" onclick="removeWordRow('${newId}')">✕</button>`;
  document.getElementById('words-table').appendChild(row);
  row.querySelector('.word-en-input').focus();
}

function removeWordRow(id) {
  const row = document.getElementById('row-' + id);
  if (row) row.remove();
}

function parseBulk() {
  const raw = document.getElementById('bulk-input').value;
  const lines = raw.split('\n').map(l => l.trim()).filter(Boolean);
  const words = lines.map(l => {
    const sep = l.includes('=') ? '=' : l.includes('-') ? '-' : null;
    if (!sep) return null;
    const [en, ...rest] = l.split(sep);
    return { id: uid(), en: en.trim(), pl: rest.join(sep).trim() };
  }).filter(Boolean);
  if (!words.length) { showToast('Nie znaleziono słówek. Użyj formatu: angielski = polski'); return; }
  const existing = getWordRowsData();
  renderWordRows([...existing, ...words]);
  document.getElementById('bulk-input').value = '';
  showToast(`✅ Dodano ${words.length} słówek!`);
}

function saveSet() {
  const name = document.getElementById('set-name-input').value.trim();
  if (!name) { showToast('Podaj nazwę zestawu!'); return; }
  const words = getWordRowsData();
  if (!words.length) { showToast('Dodaj przynajmniej jedno słówko!'); return; }

  const sets = getSets();
  if (editingSetId) {
    const idx = sets.findIndex(s => s.id === editingSetId);
    if (idx >= 0) {
      sets[idx] = { ...sets[idx], name, icon: selectedEmoji, words };
    }
  } else {
    sets.push({ id: uid(), name, icon: selectedEmoji, words, results: [], createdAt: today(), lastUsed: Date.now() });
  }
  saveSets(sets);
  showToast('✅ Zestaw zapisany!');
  showView('sets-list');
}

function deleteSet() {
  showModal('Usuń zestaw', 'Na pewno chcesz usunąć ten zestaw? Nie można tego cofnąć.', [
    { label: 'Tak, usuń', cls: 'btn-danger', action: () => {
      saveSets(getSets().filter(s => s.id !== editingSetId));
      closeModal();
      showView('sets-list');
      showToast('Zestaw usunięty.');
    }},
    { label: 'Anuluj', cls: 'btn-secondary', action: closeModal },
  ]);
}

function deleteCurrentSet() {
  showModal('Usuń zestaw', 'Na pewno chcesz usunąć ten zestaw? Nie można tego cofnąć.', [
    { label: 'Tak, usuń', cls: 'btn-danger', action: () => {
      saveSets(getSets().filter(s => s.id !== currentSetId));
      closeModal();
      showView('sets-list');
      showToast('Zestaw usunięty.');
    }},
    { label: 'Anuluj', cls: 'btn-secondary', action: closeModal },
  ]);
}

function exportSet() {
  const words = getWordRowsData();
  const name = document.getElementById('set-name-input').value.trim() || 'zestaw';
  const data = { name, icon: selectedEmoji, words };
  downloadJSON(data, `zestaw_${slug(name)}.json`);
  showToast('📤 Plik pobrany!');
}

function importSet() { document.getElementById('import-file').click(); }

function handleImport(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      if (!data.words || !Array.isArray(data.words)) throw new Error();
      const sets = getSets();
      const newSet = {
        id: uid(),
        name: data.name || 'Importowany zestaw',
        icon: data.icon || '📚',
        words: data.words.map(w => ({ id: uid(), en: w.en || '', pl: w.pl || '' })),
        results: [],
        createdAt: today(),
        lastUsed: Date.now(),
      };
      sets.push(newSet);
      saveSets(sets);
      showToast(`✅ Zaimportowano "${newSet.name}"!`);
      renderSetsList();
    } catch { showToast('❌ Błędny plik JSON!'); }
  };
  reader.readAsText(file);
  e.target.value = '';
}

// ===== SET DETAIL =====
function renderSetDetail(id) {
  const set = getSets().find(s => s.id === id);
  if (!set) { showView('sets-list'); return; }
  document.getElementById('set-detail-title').textContent = `${set.icon || '📚'} ${set.name}`;

  const best = set.results && set.results.length ? Math.max(...set.results.map(r => r.score)) : null;
  const attempts = set.results ? set.results.length : 0;
  document.getElementById('set-detail-stats').innerHTML = `
    <div class="stat-badge"><div class="stat-num">${set.words.length}</div><div class="stat-label">Słówek</div></div>
    <div class="stat-badge"><div class="stat-num">${attempts}</div><div class="stat-label">Testów</div></div>
    <div class="stat-badge"><div class="stat-num">${best !== null ? best + '%' : '—'}</div><div class="stat-label">Najlepszy wynik</div></div>`;

  document.getElementById('set-words-preview').innerHTML = `
    <div class="words-preview-header">
      <h3>Wszystkie słówka (${set.words.length})</h3>
      <button class="btn btn-ghost" id="toggle-words-btn" onclick="toggleWordsList()">👁️ Pokaż</button>
    </div>
    <div id="words-list-body" style="display:none">
      ${set.words.map(w => `<div class="words-list-item">
        <span class="word-en">${esc(w.en)}</span>
        <span class="word-pl">${esc(w.pl)}</span>
      </div>`).join('')}
    </div>`;
}

function editCurrentSet() {
  showView('set-edit', { id: currentSetId });
}

// ===== LEARN MODE =====
let learnQueue   = [];
let learnSetId   = null;
let learnCorrect = 0;
let learnTotal   = 0;
let learnReverse = false; // false = eng→pol, true = pol→eng

function startLearn(reverse) {
  const set = getSets().find(s => s.id === currentSetId);
  if (!set || !set.words.length) { showToast('Brak słówek!'); return; }
  learnSetId   = currentSetId;
  learnReverse = reverse || false;
  learnQueue   = shuffle([...set.words]);
  learnCorrect = 0;
  learnTotal   = learnQueue.length;

  document.getElementById('learn-title').textContent = `📖 ${set.name}`;
  updateDirectionBadge('learn');
  showView('learn');
  showLearnWord();
}

function toggleLearnSwap() {
  learnReverse = !learnReverse;
  updateDirectionBadge('learn');
  learnQueue   = shuffle([...getSets().find(s => s.id === learnSetId).words]);
  learnCorrect = 0;
  learnTotal   = learnQueue.length;
  showLearnWord();
}

function updateDirectionBadge(mode) {
  const id = mode === 'learn' ? 'learn-direction-badge' : 'test-direction-badge';
  const rev = mode === 'learn' ? learnReverse : testReverse;
  document.getElementById(id).textContent = rev ? '🇵🇱 Polski → 🇬🇧 Angielski' : '🇬🇧 Angielski → 🇵🇱 Polski';
}

function showLearnWord() {
  if (learnQueue.length === 0) {
    showToast(`🎉 Koniec! Wszystkie słówka nauczone!`);
    showView('set-detail', { id: learnSetId });
    return;
  }
  const word = learnQueue[0];
  const done = learnTotal - learnQueue.length;
  document.getElementById('learn-progress-fill').style.width = (done / learnTotal * 100) + '%';
  document.getElementById('learn-counter').textContent = `${done} / ${learnTotal}`;
  document.getElementById('learn-word').textContent = learnReverse ? word.pl.split('/')[0].trim() : word.en;
  document.getElementById('learn-hint').textContent = learnReverse ? 'Jak to jest po angielsku?' : 'Jak to jest po polsku?';
  document.getElementById('learn-input').placeholder = learnReverse ? 'Wpisz po angielsku...' : 'Wpisz po polsku...';
  document.getElementById('learn-input').value = '';
  document.getElementById('learn-input').className = 'learn-answer-input';
  document.getElementById('learn-feedback').style.display = 'none';
  document.getElementById('learn-check-btn').style.display = '';
  setTimeout(() => document.getElementById('learn-input').focus(), 50);
}

function checkLearnAnswer() {
  const word  = learnQueue[0];
  const input = document.getElementById('learn-input');
  const ans   = input.value.trim();
  if (!ans) return;

  const expected = learnReverse ? word.en : word.pl;
  const correct  = isCorrectAnswer(ans, expected);
  document.getElementById('learn-check-btn').style.display = 'none';
  document.getElementById('learn-feedback').style.display = '';
  setTimeout(() => document.getElementById('learn-input').focus(), 50);

  if (correct) {
    input.className = 'learn-answer-input correct';
    document.getElementById('feedback-icon').textContent = '✅';
    document.getElementById('feedback-text').innerHTML = `<span class="correct-answer">Świetnie!</span> Dokładnie tak!`;
    learnCorrect++;
    learnQueue.shift();
  } else {
    input.className = 'learn-answer-input incorrect';
    document.getElementById('feedback-icon').textContent = '❌';
    document.getElementById('feedback-text').innerHTML = `Twoja odpowiedź: <b style="color:var(--red)">${esc(ans)}</b>`;
    document.getElementById('learn-word').innerHTML =
      `<span style="font-size:0.85rem;color:var(--text-muted);display:block;margin-bottom:4px">Poprawna odpowiedź:</span>` +
      `<span style="color:var(--green);font-size:2rem;font-weight:900">${esc(formatExpected(expected))}</span>`;
    learnQueue.push(learnQueue.shift());
  }
}

function nextLearnWord() { showLearnWord(); }

function exitLearn() { showView('set-detail', { id: learnSetId }); }

function toggleWordsList() {
  const body = document.getElementById('words-list-body');
  const btn  = document.getElementById('toggle-words-btn');
  const hidden = body.style.display === 'none';
  body.style.display = hidden ? '' : 'none';
  btn.textContent = hidden ? '🙈 Ukryj' : '👁️ Pokaż';
}

// ===== TEST MODE =====
let testQueue    = [];
let testResults  = [];
let testSetId    = null;
let testCurrent  = 0;
let testReverse  = false;

function startTest(reverse) {
  const set = getSets().find(s => s.id === currentSetId);
  if (!set || !set.words.length) { showToast('Brak słówek!'); return; }
  testSetId   = currentSetId;
  testReverse = reverse || false;
  testQueue   = shuffle([...set.words]);
  testResults = [];
  testCurrent = 0;

  document.getElementById('test-title').textContent = `✏️ ${set.name}`;
  updateDirectionBadge('test');
  showView('test');
  showTestWord();
}

function toggleTestSwap() {
  testReverse = !testReverse;
  updateDirectionBadge('test');
  testQueue   = shuffle([...getSets().find(s => s.id === testSetId).words]);
  testResults = [];
  testCurrent = 0;
  showTestWord();
}

function showTestWord() {
  if (testCurrent >= testQueue.length) { finishTest(); return; }
  const word  = testQueue[testCurrent];
  const total = testQueue.length;
  document.getElementById('test-progress-fill').style.width = (testCurrent / total * 100) + '%';
  document.getElementById('test-counter').textContent = `${testCurrent + 1} / ${total}`;
  document.getElementById('test-word').textContent = testReverse ? word.pl.split('/')[0].trim() : word.en;
  document.getElementById('test-input').value = '';
  document.getElementById('test-input').placeholder = testReverse ? 'Wpisz po angielsku...' : 'Wpisz po polsku...';
  document.getElementById('test-input').className = 'learn-answer-input';
  document.getElementById('test-feedback').style.display = 'none';
  document.getElementById('test-check-btn').style.display = '';
  setTimeout(() => document.getElementById('test-input').focus(), 50);
}

function checkTestAnswer() {
  const word     = testQueue[testCurrent];
  const input    = document.getElementById('test-input');
  const ans      = input.value.trim();
  if (!ans) return;

  const expected = testReverse ? word.en : word.pl;
  const correct  = isCorrectAnswer(ans, expected);
  testResults.push({ word, ans, correct, expected });
  document.getElementById('test-check-btn').style.display = 'none';
  document.getElementById('test-feedback').style.display = '';

  if (correct) {
    input.className = 'learn-answer-input correct';
    document.getElementById('test-feedback-icon').textContent = '✅';
    document.getElementById('test-feedback-text').innerHTML = `<span class="correct-answer">Doskonale!</span>`;
  } else {
    input.className = 'learn-answer-input incorrect';
    document.getElementById('test-feedback-icon').textContent = '❌';
    document.getElementById('test-feedback-text').innerHTML = `Poprawnie: <span class="correct-answer">${esc(formatExpected(expected))}</span>`;
  }
}

function nextTestWord() { testCurrent++; showTestWord(); }

function finishTest() {
  const total   = testResults.length;
  const correct = testResults.filter(r => r.correct).length;
  const pct     = Math.round(correct / total * 100);
  const stars   = pct >= 90 ? 3 : pct >= 60 ? 2 : 1;

  // Save result
  const sets = getSets();
  const idx  = sets.findIndex(s => s.id === testSetId);
  if (idx >= 0) {
    if (!sets[idx].results) sets[idx].results = [];
    sets[idx].results.push({ date: today(), score: pct, total, correct });
    sets[idx].lastUsed = Date.now();
    saveSets(sets);
  }

  // Save to progress history
  const prog = getProgress();
  const set  = getSets().find(s => s.id === testSetId);
  prog.history.unshift({ date: today(), setName: set ? set.name : '?', score: pct, correct, total, stars });
  prog.history = prog.history.slice(0, 50);
  checkBadges(prog, pct, sets);
  saveProgress(prog);

  // Render result
  document.getElementById('result-emoji').textContent = pct === 100 ? '🎉' : pct >= 80 ? '😄' : pct >= 50 ? '🙂' : '💪';
  document.getElementById('result-title').textContent = pct === 100 ? 'Perfekcyjnie!' : pct >= 80 ? 'Świetnie!' : pct >= 50 ? 'Nieźle!' : 'Ćwicz dalej!';
  document.getElementById('result-score').textContent = pct + '%';
  document.getElementById('result-stars').textContent = '⭐'.repeat(stars) + '☆'.repeat(3 - stars);

  const details = testResults.map(r => `
    <div class="result-row ${r.correct ? 'correct' : 'incorrect'}">
      <span><b>${esc(testReverse ? r.word.pl : r.word.en)}</b> → ${esc(formatExpected(r.expected))}</span>
      <span class="result-row-status">${r.correct ? '✅' : '❌ ' + esc(r.ans)}</span>
    </div>`).join('');
  document.getElementById('result-details').innerHTML = details;

  showView('test-result');
}

function exitTest() { showView('set-detail', { id: testSetId }); }

// ===== SONGS LIST =====
function renderSongsList() {
  const songs = getSongs();
  const grid  = document.getElementById('songs-grid');
  if (!songs.length) {
    grid.innerHTML = `<div class="empty-state">
      <div class="empty-icon">🎵</div>
      <p>Nie masz jeszcze żadnych piosenek.</p>
      <button class="btn btn-primary btn-large" onclick="showView('song-edit',{id:null})">➕ Dodaj piosenkę</button>
    </div>`;
    return;
  }
  grid.innerHTML = songs.map(s => `
    <div class="song-card" onclick="showView('song-detail',{id:'${s.id}'})">
      <div class="song-card-icon">🎵</div>
      <div class="song-card-title">${esc(s.title)}</div>
      <div class="song-card-artist">${esc(s.artist || '')}</div>
    </div>`).join('');
}

// ===== SONG EDIT =====
let editingSongId = null;

function initSongEdit(id) {
  editingSongId = id;
  document.getElementById('song-edit-title').textContent = id ? 'Edytuj piosenkę' : 'Nowa piosenka';
  document.getElementById('delete-song-btn').style.display = id ? '' : 'none';
  if (id) {
    const song = getSongs().find(s => s.id === id);
    if (!song) return;
    document.getElementById('song-title-input').value  = song.title || '';
    document.getElementById('song-artist-input').value = song.artist || '';
    document.getElementById('song-yt-input').value     = song.ytUrl || '';
    document.getElementById('song-en-input').value     = song.verses.map(v => v.en).join('\n\n');
    document.getElementById('song-pl-input').value     = song.verses.map(v => v.pl).join('\n\n');
  } else {
    ['song-title-input','song-artist-input','song-yt-input','song-en-input','song-pl-input']
      .forEach(id => document.getElementById(id).value = '');
  }
}

function saveSong() {
  const title  = document.getElementById('song-title-input').value.trim();
  const artist = document.getElementById('song-artist-input').value.trim();
  const ytRaw  = document.getElementById('song-yt-input').value.trim();
  // Accept full <iframe> embed code — extract src from it
  const iframeSrc = ytRaw.match(/src=["']([^"']+)["']/);
  const ytUrl  = iframeSrc ? iframeSrc[1] : ytRaw;
  const enRaw  = document.getElementById('song-en-input').value.trim();
  const plRaw  = document.getElementById('song-pl-input').value.trim();

  if (!title) { showToast('Podaj tytuł piosenki!'); return; }
  if (!enRaw) { showToast('Dodaj tekst piosenki po angielsku!'); return; }

  const enVerses = splitVerses(enRaw);
  const plVerses = splitVerses(plRaw);
  const verses   = enVerses.map((en, i) => ({ en, pl: plVerses[i] || '' }));

  const songs = getSongs();
  if (editingSongId) {
    const idx = songs.findIndex(s => s.id === editingSongId);
    if (idx >= 0) songs[idx] = { ...songs[idx], title, artist, ytUrl, verses };
  } else {
    songs.push({ id: uid(), title, artist, ytUrl, verses, createdAt: today() });
  }
  saveSongs(songs);
  showToast('✅ Piosenka zapisana!');
  showView('songs-list');
}

function deleteSong() {
  showModal('Usuń piosenkę', 'Na pewno chcesz usunąć tę piosenkę?', [
    { label: 'Tak, usuń', cls: 'btn-danger', action: () => {
      saveSongs(getSongs().filter(s => s.id !== editingSongId));
      closeModal();
      showView('songs-list');
      showToast('Piosenka usunięta.');
    }},
    { label: 'Anuluj', cls: 'btn-secondary', action: closeModal },
  ]);
}

function editCurrentSong() { showView('song-edit', { id: currentSongId }); }

function deleteCurrentSong() {
  showModal('Usuń piosenkę', 'Na pewno chcesz usunąć tę piosenkę?', [
    { label: 'Tak, usuń', cls: 'btn-danger', action: () => {
      saveSongs(getSongs().filter(s => s.id !== currentSongId));
      closeModal();
      showView('songs-list');
      showToast('Piosenka usunięta.');
    }},
    { label: 'Anuluj', cls: 'btn-secondary', action: closeModal },
  ]);
}

// ===== SONG DETAIL =====
function renderSongDetail(id) {
  const song = getSongs().find(s => s.id === id);
  if (!song) { showView('songs-list'); return; }
  document.getElementById('song-detail-title').textContent = `🎵 ${song.title}`;

  renderYtPlayer('song-yt-player', song.ytUrl);

  // Verses
  const versesEl = document.getElementById('song-verses');
  versesEl.innerHTML = song.verses.map((v, i) => `
    <div class="verse-block" id="verse-${i}">
      <div class="verse-en">${esc(v.en)}</div>
      ${v.pl ? `
        <button class="verse-reveal-btn" onclick="revealVerse(${i})">👁️ Pokaż tłumaczenie</button>
        <div class="verse-pl" id="verse-pl-${i}">${esc(v.pl)}</div>` : ''}
    </div>`).join('');
}

function renderYtPlayer(elId, ytUrl) {
  const el = document.getElementById(elId);
  if (!ytUrl) { el.innerHTML = ''; return; }
  const ytId = extractYtId(ytUrl);
  if (!ytId) {
    el.innerHTML = `<a href="${esc(ytUrl)}" target="_blank" class="btn btn-secondary yt-open-btn">▶️ Otwórz piosenkę na YouTube</a>`;
    return;
  }
  el.innerHTML = `
    <iframe src="https://www.youtube-nocookie.com/embed/${ytId}?rel=0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerpolicy="strict-origin-when-cross-origin"
      allowfullscreen></iframe>
    <div class="yt-fallback-bar">
      <span class="yt-fallback-hint">Jeśli widzisz błąd 153 → film ma zablokowane osadzanie, szukaj innej wersji</span>
      <a href="${esc(ytUrl.replace('youtube-nocookie.com','youtube.com'))}" target="_blank" class="btn btn-secondary" style="padding:6px 14px;font-size:0.85rem">▶️ Otwórz w YouTube</a>
    </div>`;
}

function revealVerse(i) {
  const plEl = document.getElementById('verse-pl-' + i);
  const btn  = plEl.previousElementSibling;
  if (plEl) { plEl.style.display = 'block'; if (btn) btn.style.display = 'none'; }
}

function revealAll() {
  document.querySelectorAll('.verse-pl').forEach(el => el.style.display = 'block');
  document.querySelectorAll('.verse-reveal-btn').forEach(el => el.style.display = 'none');
}

function hideAll() {
  document.querySelectorAll('.verse-pl').forEach(el => el.style.display = 'none');
  document.querySelectorAll('.verse-reveal-btn').forEach(el => el.style.display = '');
}

// ===== SONG TRANSLATE MODE =====
function renderTranslate(id) {
  const song = getSongs().find(s => s.id === id);
  if (!song) return;
  document.getElementById('translate-title').textContent = `✍️ ${song.title}`;
  renderYtPlayer('translate-yt-player', song.ytUrl);

  const verses = (song.verses || []);
  document.getElementById('translate-verses').innerHTML = verses.map((v, i) => `
    <div class="translate-verse">
      <div class="verse-en translate-en-clickable">${makeClickableWords(v.en)}</div>
      <div class="translate-hint">💡 Kliknij na słowo, żeby sprawdzić tłumaczenie w Google</div>
      <textarea id="tr-input-${i}" placeholder="Wpisz tutaj swoje tłumaczenie po polsku...">${esc(v.pl || '')}</textarea>
      ${v.pl ? '<div class="verse-saved-badge">✅ Tłumaczenie zapisane</div>' : ''}
    </div>`).join('');
}

function makeClickableWords(text) {
  if (!text) return '';
  return text.split(/(\s+)/).map(token => {
    const clean = token.replace(/[^a-zA-Z'-]/g, '');
    if (!clean) return esc(token);
    const url = `https://translate.google.com/?sl=en&tl=pl&text=${encodeURIComponent(clean)}&op=translate`;
    // Only open link if nothing is selected (prevents conflict with drag-select)
    return `<a href="${url}" target="_blank" class="clickable-word" title="Sprawdź w Google Translate"
      onclick="if(window.getSelection().toString().trim().length>1){event.preventDefault();}">${esc(token)}</a>`;
  }).join('');
}

function saveTranslation() {
  const songs = getSongs();
  const idx   = songs.findIndex(s => s.id === currentSongId);
  if (idx < 0) return;
  songs[idx].verses = songs[idx].verses.map((v, i) => {
    const input = document.getElementById('tr-input-' + i);
    return { ...v, pl: input ? input.value.trim() : v.pl };
  });
  saveSongs(songs);
  showToast('✅ Tłumaczenie zapisane!');
  showView('song-detail', { id: currentSongId });
}

// ===== EXTRACT WORDS FROM SONG =====
let extractSelectedWords = {};

function extractWordsFromSong() {
  showView('song-extract', { id: currentSongId });
}

function renderExtract(id) {
  const song = getSongs().find(s => s.id === id);
  if (!song) return;
  extractSelectedWords = {};

  const fullText = song.verses.map(v => v.en).join('\n\n');
  const words    = fullText.split(/[\s\n\r]+/).map(w => w.replace(/[^a-zA-Z'-]/g, '').toLowerCase()).filter(Boolean);
  const unique   = [...new Set(words)];

  const extractEl = document.getElementById('extract-text');
  extractEl.innerHTML = song.verses.map((v, vi) =>
    '<p>' + v.en.split(/\s+/).map(raw => {
      const clean = raw.replace(/[^a-zA-Z'-]/g, '').toLowerCase();
      if (!clean) return raw;
      return `<span class="extract-word" data-word="${clean}" onclick="toggleExtractWord('${clean}', this)">${raw}</span>`;
    }).join(' ') + '</p>'
  ).join('<br>');

  document.getElementById('selected-words-list').innerHTML = '';
  document.getElementById('extract-set-name').value = song.title ? `Słówka z "${song.title}"` : 'Słówka z piosenki';
}

// ===== GEMINI API =====
const GEMINI_MODEL = 'gemini-3.5-flash-lite';

function getGeminiKey() { return localStorage.getItem('gemini_api_key') || ''; }
function saveGeminiKey(k) { localStorage.setItem('gemini_api_key', k.trim()); }

async function fetchTranslationGemini(phrase, apiKey) {
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${apiKey}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: `Przetłumacz poniższe angielskie słowo lub zwrot na język polski. Podaj TYLKO tłumaczenie, nic więcej. Jeśli jest kilka znaczeń, rozdziel je ukośnikiem. Słowo/zwrot: "${phrase}"` }] }]
      })
    }
  );
  const data = await res.json();
  const t = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
  return t || '';
}

function openApiSettings() {
  const currentKey = getGeminiKey();
  const masked = currentKey ? currentKey.slice(0, 8) + '••••••••••••••••' : '';
  showModal('⚙️ Ustawienia — klucz Gemini API', '', [
    { label: 'Zapisz', cls: 'btn-primary', action: () => {
      const input = document.getElementById('gemini-key-input');
      if (input) {
        saveGeminiKey(input.value);
        showToast(input.value.trim() ? '✅ Klucz Gemini zapisany!' : 'Klucz usunięty.');
      }
      closeModal();
    }},
    { label: 'Anuluj', cls: 'btn-secondary', action: closeModal },
  ]);
  setTimeout(() => {
    const body = document.getElementById('modal-body');
    if (body) body.innerHTML = `
      <p style="margin-bottom:12px;font-size:0.9rem;color:var(--text-light)">
        Klucz Google AI Studio (Gemini). Gdy podany — tłumaczenia słówek i zwrotów oraz tryb "Pogadajmy" używają Gemini 3.5 Flash Lite zamiast MyMemory.
      </p>
      <input id="gemini-key-input" type="password" class="big-input"
        placeholder="AIza..." value="${esc(currentKey)}"
        style="font-family:monospace;font-size:0.9rem" />
      ${currentKey ? `<div style="font-size:0.8rem;color:var(--text-light);margin-top:6px">Aktualny klucz: ${esc(masked)}</div>` : ''}
    `;
  }, 0);
}

async function fetchTranslation(word) {
  const w = word.toLowerCase();
  // 1. Offline dictionary
  if (typeof OFFLINE_DICT !== 'undefined' && OFFLINE_DICT[w]) return OFFLINE_DICT[w];
  // 2. Gemini (jeśli podano klucz)
  const key = getGeminiKey();
  if (key) {
    try {
      const t = await fetchTranslationGemini(word, key);
      if (t) return t;
    } catch {}
  }
  // 3. MyMemory fallback
  try {
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=en|pl`);
    const data = await res.json();
    const t = data?.responseData?.translatedText;
    if (t && t.toLowerCase() !== w) return t;
  } catch {}
  return '';
}

async function toggleExtractWord(word, el) {
  if (extractSelectedWords[word] !== undefined) {
    delete extractSelectedWords[word];
    document.querySelectorAll(`.extract-word[data-word="${word}"]`).forEach(e => e.classList.remove('selected'));
    renderSelectedChips();
  } else {
    extractSelectedWords[word] = '';
    document.querySelectorAll(`.extract-word[data-word="${word}"]`).forEach(e => e.classList.add('selected'));
    renderSelectedChips();
    const pl = await fetchTranslation(word);
    if (extractSelectedWords[word] !== undefined && extractSelectedWords[word] === '') {
      extractSelectedWords[word] = pl;
      renderSelectedChips();
    }
  }
}

function renderSelectedChips() {
  const list = document.getElementById('selected-words-list');
  list.innerHTML = Object.keys(extractSelectedWords).map(w => `
    <span class="selected-word-chip">
      <b>${w}</b> =
      <input type="text" placeholder="tłumaczenie" value="${esc(extractSelectedWords[w])}"
        oninput="extractSelectedWords['${w}']=this.value" />
      <span class="chip-remove" onclick="toggleExtractWord('${w}')">✕</span>
    </span>`).join('');
}

function saveExtractedWords() {
  const entries = Object.entries(extractSelectedWords).filter(([w, pl]) => w);
  if (!entries.length) { showToast('Wybierz przynajmniej jedno słówko!'); return; }
  const name  = document.getElementById('extract-set-name').value.trim() || 'Słówka z piosenki';
  const words = entries.map(([en, pl]) => ({ id: uid(), en, pl }));
  const sets  = getSets();
  sets.push({ id: uid(), name, icon: '🎵', words, results: [], createdAt: today(), lastUsed: Date.now() });
  saveSets(sets);
  showToast(`✅ Zestaw "${name}" zapisany!`);
  showView('sets-list');
}

// ===== CHAT (POGADAJMY) =====
function renderChatSetup() {
  chatSetupState = { scenario: null, level: null };
  renderChatStepScenario();
}

function renderChatStepScenario() {
  document.getElementById('chat-setup-body').innerHTML = `
    <p class="hint">Wybierz temat rozmowy:</p>
    <div class="scenario-grid">
      ${CHAT_SCENARIOS.map(s => `
        <div class="scenario-card" onclick="pickChatScenario('${s.id}')">
          <div class="scenario-icon">${s.icon}</div>
          <div class="scenario-title">${esc(s.title)}</div>
        </div>`).join('')}
    </div>`;
}

function pickChatScenario(id) {
  chatSetupState.scenario = CHAT_SCENARIOS.find(s => s.id === id);
  renderChatStepLevel();
}

function renderChatStepLevel() {
  const s = chatSetupState.scenario;
  document.getElementById('chat-setup-body').innerHTML = `
    <button class="btn btn-ghost" onclick="renderChatStepScenario()">← Inny temat</button>
    <p class="hint">${s.icon} ${esc(s.title)} — wybierz poziom trudności:</p>
    <div class="level-grid">
      ${['A1','A2','B1','B2'].map(l => `<div class="level-pill" onclick="pickChatLevel('${l}')">${l}</div>`).join('')}
    </div>`;
}

function pickChatLevel(level) {
  chatSetupState.level = level;
  renderChatStepRole();
}

function renderChatStepRole() {
  const s = chatSetupState.scenario;
  document.getElementById('chat-setup-body').innerHTML = `
    <button class="btn btn-ghost" onclick="renderChatStepLevel()">← Inny poziom</button>
    <p class="hint">${s.icon} ${esc(s.title)} · poziom ${chatSetupState.level} — kim chcesz być?</p>
    <div class="role-grid">
      ${s.roles.map((r, i) => `
        <div class="role-pair-card" onclick="startChat(${i})">
          <div class="role-you"><b>Ty:</b> ${esc(r.user)}</div>
          <div class="role-ai"><b>AI:</b> ${esc(r.ai)}</div>
        </div>`).join('')}
    </div>`;
}

function buildChatSystemPrompt(scenario, level, userRole, aiRole) {
  let prompt = `Uczymy się języka angielskiego. Rozmówcą jest nastolatek (10-15 lat), więc bądź cierpliwy, przyjazny i wyrozumiały. ` +
    `Ćwiczymy dialog w scenariuszu: "${scenario.title}". Poziom językowy ucznia: ${level}. Odpowiadaj WYŁĄCZNIE po angielsku, dostosowując słownictwo i długość zdań do poziomu ${level}. ` +
    `Ty wcielasz się w rolę: ${aiRole}. Uczeń gra rolę: ${userRole}. ` +
    `To jest dialog ćwiczebny — jeśli widzisz, że uczeń nie radzi sobie, ma problem ze sformułowaniem zdania, pisze po polsku albo utknął, ` +
    `delikatnie podpowiedz mu po angielsku (możesz dodać krótką podpowiedź po polsku w nawiasie) i zachęć go ciepłym tonem do kontynuowania w roli. ` +
    `Trzymaj się swojej roli i scenariusza przez całą rozmowę, baw się nią i bądź pozytywny.`;
  const complication = scenario.complications && scenario.complications[level];
  if (complication) {
    prompt += ` Dodatkowe wyzwanie, które musisz wpleść w rozmowę w naturalnym momencie: ${complication}`;
  }
  prompt += ` Zacznij rozmowę pierwszy, krótkim zdaniem pasującym do sceny i Twojej roli.`;
  return prompt;
}

function startChat(roleIdx) {
  if (!getGeminiKey()) {
    showToast('Ustaw najpierw klucz Gemini API (⚙️ w górnym menu)!');
    return;
  }
  const s = chatSetupState.scenario;
  const role = s.roles[roleIdx];
  currentChat = {
    scenario: s, level: chatSetupState.level,
    userRole: role.user, aiRole: role.ai,
    history: [],
  };
  currentChat.systemPrompt = buildChatSystemPrompt(s, chatSetupState.level, role.user, role.ai);

  document.getElementById('chat-title').textContent = `💬 ${s.title}`;
  document.getElementById('chat-info-bar').innerHTML =
    `<span>${chatSetupState.level}</span> · <span>Ty: ${esc(role.user)}</span> · <span>AI: ${esc(role.ai)}</span>`;
  document.getElementById('chat-window').innerHTML = '';
  document.getElementById('chat-error').style.display = 'none';
  document.getElementById('chat-hint').style.display = 'none';
  document.getElementById('chat-input').value = '';
  showView('chat');
  requestFirstChatMessage();
}

async function callGemini(systemInstruction, contents) {
  const key = getGeminiKey();
  if (!key) throw new Error('no-key');
  const res = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${key}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: systemInstruction }] },
        contents,
      }),
    }
  );
  if (!res.ok) throw new Error('http-' + res.status);
  const data = await res.json();
  const t = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();
  if (!t) throw new Error('empty-response');
  return t;
}

async function callGeminiChat(history) {
  return callGemini(currentChat.systemPrompt, history.map(m => ({ role: m.role, parts: [{ text: m.text }] })));
}

async function requestFirstChatMessage() {
  renderChatTyping(true);
  try {
    const reply = await callGeminiChat([{ role: 'user', text: 'Rozpocznij teraz rozmowę zgodnie z instrukcjami.' }]);
    currentChat.history.push({ role: 'model', text: reply });
    renderChatMessages();
  } catch {
    showChatError();
  } finally {
    renderChatTyping(false);
  }
}

async function requestChatHint() {
  if (!currentChat) return;
  const btn = document.getElementById('chat-hint-btn');
  const hintEl = document.getElementById('chat-hint');
  btn.disabled = true;
  hintEl.style.display = '';
  hintEl.textContent = 'Szukam podpowiedzi…';
  const prompt = 'Nie kontynuuj teraz rozmowy jako postać. Zamiast tego podaj uczniowi krótką podpowiedź PO POLSKU (1-2 zdania), ' +
    'co mógłby teraz odpowiedzieć po angielsku w tej sytuacji, dopasowaną do jego roli i poziomu. Możesz podać przykładowe zdanie po angielsku w cudzysłowie.';
  const history = [...currentChat.history, { role: 'user', text: prompt }];
  try {
    const hint = await callGeminiChat(history);
    hintEl.textContent = '💡 ' + hint;
  } catch {
    hintEl.textContent = 'Nie udało się pobrać podpowiedzi. Spróbuj ponownie.';
  } finally {
    btn.disabled = false;
  }
}

async function sendChatMessage() {
  const input = document.getElementById('chat-input');
  const text = input.value.trim();
  if (!text || !currentChat) return;
  document.getElementById('chat-error').style.display = 'none';
  document.getElementById('chat-hint').style.display = 'none';
  currentChat.history.push({ role: 'user', text });
  input.value = '';
  renderChatMessages();
  renderChatTyping(true);
  try {
    const reply = await callGeminiChat(currentChat.history);
    currentChat.history.push({ role: 'model', text: reply });
    renderChatMessages();
  } catch {
    showChatError();
  } finally {
    renderChatTyping(false);
    setTimeout(() => input.focus(), 50);
  }
}

function showChatError() {
  const el = document.getElementById('chat-error');
  el.textContent = 'Nie udało się połączyć z Gemini. Sprawdź klucz API (⚙️) i połączenie z internetem, i spróbuj ponownie.';
  el.style.display = '';
}

function renderChatTyping(show) {
  document.getElementById('chat-send-btn').disabled = show;
  let el = document.getElementById('chat-typing');
  if (show) {
    if (!el) {
      el = document.createElement('div');
      el.id = 'chat-typing';
      el.className = 'chat-bubble chat-bubble-ai chat-typing';
      el.textContent = '…';
      document.getElementById('chat-window').appendChild(el);
    }
  } else if (el) {
    el.remove();
  }
  const w = document.getElementById('chat-window');
  w.scrollTop = w.scrollHeight;
}

function renderChatMessages() {
  const w = document.getElementById('chat-window');
  w.innerHTML = currentChat.history.map(m => `
    <div class="chat-bubble ${m.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'}">${esc(m.text)}</div>`
  ).join('');
  w.scrollTop = w.scrollHeight;
}

function exitChat() {
  if (currentChat && currentChat.history.length) {
    showModal('Zakończyć rozmowę?', 'Jeśli wyjdziesz teraz, ta rozmowa nie zostanie podsumowana i słówka z niej nie zostaną zapisane. Na pewno?', [
      { label: 'Tak, wyjdź', cls: 'btn-danger', action: () => { closeModal(); currentChat = null; showView('chat-setup'); } },
      { label: 'Anuluj', cls: 'btn-secondary', action: closeModal },
    ]);
  } else {
    currentChat = null;
    showView('chat-setup');
  }
}

async function finishChat() {
  if (!currentChat || !currentChat.history.length) { showToast('Rozmowa jest jeszcze pusta!'); return; }
  document.getElementById('chat-send-btn').disabled = true;
  showToast('Generuję podsumowanie…');
  try {
    await generateChatSummary();
    recordChatCompletion(currentChat.scenario.id);
    showView('chat-summary');
  } catch {
    showToast('Nie udało się wygenerować podsumowania. Spróbuj ponownie.');
  } finally {
    document.getElementById('chat-send-btn').disabled = false;
  }
}

function recordChatCompletion(scenarioId) {
  const prog = getProgress();
  if (!prog.chatStats) prog.chatStats = { count: 0, scenarios: [] };
  prog.chatStats.count++;
  if (!prog.chatStats.scenarios.includes(scenarioId)) prog.chatStats.scenarios.push(scenarioId);
  checkChatBadges(prog);
  saveProgress(prog);
}

function checkChatBadges(prog) {
  const add = id => { if (!prog.badges.includes(id)) { prog.badges.push(id); showToast(`🎖️ Nowa odznaka: ${BADGES_DEF.find(b=>b.id===id)?.name || id}!`); } };
  if (prog.chatStats.count >= 1) add('chat_first');
  if (prog.chatStats.count >= 10) add('chat10');
  if (prog.chatStats.scenarios.length >= 10) add('chat_explorer');
}

async function generateChatSummary() {
  const prompt = 'Rozmowa ćwiczebna dobiegła końca. Napisz podsumowanie przebiegu rozmowy (2-3 zdania) w DWÓCH wersjach językowych: ' +
    'po polsku i po angielsku. Podaj też listę wszystkich nowych/ważnych angielskich słówek i zwrotów, które pojawiły się w rozmowie, wraz z tłumaczeniem na polski. ' +
    'Odpowiedz WYŁĄCZNIE w formacie JSON, bez znaczników markdown, dokładnie w takiej strukturze: ' +
    '{"summary_pl":"...","summary_en":"...","words":[{"en":"...","pl":"..."}]}';
  const history = [...currentChat.history, { role: 'user', text: prompt }];
  const raw = await callGeminiChat(history);
  const cleaned = raw.replace(/```json/gi, '').replace(/```/g, '').trim();
  let data;
  try { data = JSON.parse(cleaned); } catch { data = null; }

  chatSummaryWords = {};
  if (data) {
    if (Array.isArray(data.words)) data.words.forEach(w => { if (w.en) chatSummaryWords[w.en] = w.pl || ''; });
    document.getElementById('chat-summary-text').innerHTML =
      `<div class="summary-lang"><b>🇵🇱 PL:</b> ${esc(data.summary_pl || '')}</div>` +
      `<div class="summary-lang summary-en">${esc(data.summary_en || '')}</div>`;
  } else {
    document.getElementById('chat-summary-text').textContent = raw;
  }
  document.getElementById('chat-summary-set-name').value = `Pogadajmy: ${currentChat.scenario.title}`;
  document.getElementById('chat-analysis').innerHTML = '';
  document.getElementById('chat-analysis').style.display = 'none';
  document.getElementById('chat-summary-transcript').style.display = 'none';
  document.getElementById('chat-summary-transcript').innerHTML = '';
  document.getElementById('toggle-transcript-btn').textContent = 'Pokaż całą rozmowę';
  renderChatSummaryChips();
}

function toggleChatTranscript() {
  const el  = document.getElementById('chat-summary-transcript');
  const btn = document.getElementById('toggle-transcript-btn');
  const hidden = el.style.display === 'none';
  if (hidden && !el.innerHTML) renderChatTranscript();
  el.style.display = hidden ? '' : 'none';
  btn.textContent = hidden ? 'Ukryj rozmowę' : 'Pokaż całą rozmowę';
}

function renderChatTranscript() {
  const el = document.getElementById('chat-summary-transcript');
  el.innerHTML = currentChat.history.map(m => `
    <div class="chat-bubble ${m.role === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'} transcript-bubble">
      ${makeChatWordsClickable(m.text)}
    </div>`).join('') +
    '<p class="hint" style="margin-top:6px">Kliknij na angielskie słowo, żeby dodać je do listy słówek poniżej.</p>';
}

function makeChatWordsClickable(text) {
  return text.split(/(\s+)/).map(token => {
    const clean = token.replace(/[^a-zA-Z'-]/g, '');
    if (!clean) return esc(token);
    const key = clean.toLowerCase();
    const selected = chatSummaryWords[key] !== undefined;
    return `<span class="extract-word${selected ? ' selected' : ''}" data-chat-word="${esc(key)}" onclick="toggleChatWord('${key.replace(/'/g, "\\'")}', this)">${esc(token)}</span>`;
  }).join('');
}

async function toggleChatWord(word, el) {
  if (chatSummaryWords[word] !== undefined) {
    delete chatSummaryWords[word];
    document.querySelectorAll(`[data-chat-word="${word}"]`).forEach(e => e.classList.remove('selected'));
    renderChatSummaryChips();
  } else {
    chatSummaryWords[word] = '';
    document.querySelectorAll(`[data-chat-word="${word}"]`).forEach(e => e.classList.add('selected'));
    renderChatSummaryChips();
    const pl = await fetchTranslation(word);
    if (chatSummaryWords[word] === '') {
      chatSummaryWords[word] = pl;
      renderChatSummaryChips();
    }
  }
}

async function analyzeChatMistakes() {
  const btn = document.getElementById('analyze-chat-btn');
  btn.disabled = true;
  btn.textContent = 'Analizuję…';
  const prompt = 'Przeanalizuj powyższą rozmowę pod kątem błędów językowych UCZNIA (wiadomości o roli "user"), oceniając poziom ' +
    `${currentChat.level}. Dla każdego istotnego błędu podaj: co uczeń napisał, poprawną wersję po angielsku, i krótkie, ciepłe wyjaśnienie po polsku, ` +
    'dlaczego to był błąd (pisz życzliwie, to nastolatek uczący się języka). Jeśli uczeń nie popełnił błędów, zwróć pustą listę mistakes. Na koniec przygotuj też "improved_dialogue" — ' +
    'całą rozmowę zapisaną od nowa, w której wypowiedzi ucznia są poprawione na w pełni poprawny, bardziej naturalny angielski ' +
    '(wypowiedzi AI zostaw bez zmian). Odpowiedz WYŁĄCZNIE w formacie JSON, bez znaczników markdown, dokładnie w takiej strukturze: ' +
    '{"mistakes":[{"original":"...","corrected":"...","explanation":"..."}],"improved_dialogue":[{"speaker":"user"|"ai","text":"..."}]}';
  const history = [...currentChat.history, { role: 'user', text: prompt }];
  try {
    const raw = await callGeminiChat(history);
    const cleaned = raw.replace(/```json/gi, '').replace(/```/g, '').trim();
    const data = JSON.parse(cleaned);
    renderChatAnalysis(data);
    if (Array.isArray(data.mistakes) && data.mistakes.length === 0) {
      const prog = getProgress();
      if (!prog.badges.includes('chat_flawless')) {
        prog.badges.push('chat_flawless');
        showToast(`🎖️ Nowa odznaka: ${BADGES_DEF.find(b => b.id === 'chat_flawless')?.name}!`);
        saveProgress(prog);
      }
    }
  } catch {
    showToast('Nie udało się wygenerować analizy. Spróbuj ponownie.');
  } finally {
    btn.disabled = false;
    btn.textContent = '🔍 Popraw razem';
  }
}

function renderChatAnalysis(data) {
  const mistakes = Array.isArray(data.mistakes) ? data.mistakes : [];
  const dialogue = Array.isArray(data.improved_dialogue) ? data.improved_dialogue : [];

  const mistakesHtml = mistakes.length
    ? mistakes.map(m => `
      <div class="mistake-item">
        <div class="mistake-original">❌ ${esc(m.original || '')}</div>
        <div class="mistake-corrected">✅ ${esc(m.corrected || '')}</div>
        <div class="mistake-explanation">${esc(m.explanation || '')}</div>
      </div>`).join('')
    : '<p class="hint">Brak istotnych błędów — świetna robota! 🎉</p>';

  const dialogueHtml = dialogue.map(d => `
    <div class="chat-bubble ${d.speaker === 'user' ? 'chat-bubble-user' : 'chat-bubble-ai'} transcript-bubble">${esc(d.text || '')}</div>`
  ).join('');

  document.getElementById('chat-analysis').innerHTML = `
    <h3>Twoje błędy i poprawki</h3>
    ${mistakesHtml}
    ${dialogueHtml ? `<h3 style="margin-top:18px">Jak mogłaby wyglądać ta rozmowa</h3><div class="chat-window analysis-window">${dialogueHtml}</div>` : ''}`;
  document.getElementById('chat-analysis').style.display = '';
}

function renderChatSummaryChips() {
  const list = document.getElementById('chat-summary-words-list');
  list.innerHTML = Object.keys(chatSummaryWords).map(w => `
    <span class="selected-word-chip" data-key="${esc(w)}">
      <b>${esc(w)}</b> =
      <input type="text" placeholder="tłumaczenie" value="${esc(chatSummaryWords[w])}"
        oninput="chatSummaryWords[this.closest('.selected-word-chip').dataset.key]=this.value" />
      <span class="chip-remove" onclick="removeChatSummaryChip(this.closest('.selected-word-chip').dataset.key)">✕</span>
    </span>`).join('');
}

function removeChatSummaryChip(word) {
  delete chatSummaryWords[word];
  renderChatSummaryChips();
}

function saveChatSummaryWords() {
  const entries = Object.entries(chatSummaryWords).filter(([w]) => w);
  if (!entries.length) { showToast('Brak słówek do zapisania!'); return; }
  const name  = document.getElementById('chat-summary-set-name').value.trim() || 'Słówka z rozmowy';
  const words = entries.map(([en, pl]) => ({ id: uid(), en, pl }));
  const sets  = getSets();
  sets.push({ id: uid(), name, icon: '💬', words, results: [], createdAt: today(), lastUsed: Date.now() });
  saveSets(sets);
  showToast(`✅ Zestaw "${name}" zapisany!`);
  currentChat = null;
  showView('sets-list');
}

// ===== ESSAYS (WYPRACOWANIA) =====
function renderEssaySetup() {
  essaySetupState = { level: null };
  renderEssayStepLevel();
}

function renderEssayStepLevel() {
  document.getElementById('essay-setup-body').innerHTML = `
    <p class="hint">Wybierz poziom trudności:</p>
    <div class="level-grid">
      ${['A1','A2','B1','B2'].map(l => `<div class="level-pill" onclick="pickEssayLevel('${l}')">${l}</div>`).join('')}
    </div>`;
}

function pickEssayLevel(level) {
  essaySetupState.level = level;
  renderEssayStepTopic();
}

function renderEssayStepTopic() {
  const level  = essaySetupState.level;
  const topics = ESSAY_TOPICS[level];
  document.getElementById('essay-setup-body').innerHTML = `
    <button class="btn btn-ghost" onclick="renderEssayStepLevel()">← Inny poziom</button>
    <p class="hint">Poziom ${level} — wybierz temat wypracowania:</p>
    <div class="topic-grid">
      ${topics.map((t, i) => `
        <div class="topic-card" onclick="startEssay(${i})">
          <div class="topic-card-title">${esc(t.title)}</div>
          <div class="topic-card-hint">min. ${t.minWords} słów</div>
        </div>`).join('')}
    </div>`;
}

function startEssay(idx) {
  if (!getGeminiKey()) {
    showToast('Ustaw najpierw klucz Gemini API (⚙️ w górnym menu)!');
    return;
  }
  const level = essaySetupState.level;
  const topic = ESSAY_TOPICS[level][idx];
  currentEssay = { level, topic, text: '' };

  document.getElementById('essay-write-title').textContent = `📝 ${topic.title}`;
  document.getElementById('essay-info-bar').innerHTML = `<span>Poziom ${level}</span> · <span>${esc(topic.title)}</span>`;
  document.getElementById('essay-requirements').innerHTML = topic.requirements.map(r => `<li>${esc(r)}</li>`).join('');
  document.getElementById('essay-textarea').value = '';
  document.getElementById('essay-error').style.display = 'none';
  updateEssayWordCount();
  showView('essay-write');
  setTimeout(() => document.getElementById('essay-textarea').focus(), 50);
}

function countWords(text) {
  return (text.trim().match(/\S+/g) || []).length;
}

function updateEssayWordCount() {
  const text  = document.getElementById('essay-textarea').value;
  const count = countWords(text);
  const min   = currentEssay ? currentEssay.topic.minWords : 0;
  const el    = document.getElementById('essay-word-counter');
  el.textContent = `Liczba słów: ${count} (minimum: ${min})`;
  el.classList.toggle('too-short', count < min);
}

function exitEssayWrite() {
  const text = document.getElementById('essay-textarea').value.trim();
  if (text) {
    showModal('Wyjść bez zapisu?', 'Twoje wypracowanie nie zostało sprawdzone i zniknie. Na pewno chcesz wyjść?', [
      { label: 'Tak, wyjdź', cls: 'btn-danger', action: () => { closeModal(); currentEssay = null; showView('essay-setup'); } },
      { label: 'Anuluj', cls: 'btn-secondary', action: closeModal },
    ]);
  } else {
    currentEssay = null;
    showView('essay-setup');
  }
}

function buildEssaySystemPrompt(level, topic) {
  return `Jesteś nauczycielem języka angielskiego oceniającym wypracowanie ucznia (nastolatka 10-15 lat) na poziomie ${level}. ` +
    `Bądź życzliwy i wspierający, dostosuj surowość oceny do poziomu ${level}. ` +
    `Temat wypracowania: "${topic.title}". Wymagania zadania: ${topic.requirements.join(' ')} ` +
    `Uczeń przyśle swoje wypracowanie jako wiadomość. Oceń je pod kątem poprawności językowej (gramatyka, słownictwo, szyk zdania) ` +
    `odpowiedniej dla poziomu ${level} oraz sprawdź, czy spełnia wymagania zadania. ` +
    `Odpowiedz WYŁĄCZNIE w formacie JSON, bez znaczników markdown, dokładnie w takiej strukturze: ` +
    `{"overall_pl":"...","mistakes":[{"original":"...","corrected":"...","explanation":"..."}],"vocabulary":[{"en":"...","pl":"..."}]}. ` +
    `Pole "overall_pl" to krótkie (2-3 zdania), ciepłe podsumowanie PO POLSKU — co wyszło dobrze i co warto poprawić, oraz czy wymagania zadania zostały spełnione. ` +
    `Pole "mistakes" to lista istotnych błędów językowych z krótkim wyjaśnieniem po polsku (jeśli nie ma błędów, zwróć pustą listę). ` +
    `Pole "vocabulary" to 5-8 przydatnych angielskich słówek lub zwrotów związanych z tematem, których uczeń mógłby się nauczyć, żeby wzbogacić wypracowanie (nie muszą pochodzić z jego tekstu).`;
}

async function submitEssayForCheck() {
  const text = document.getElementById('essay-textarea').value.trim();
  if (!text) { showToast('Napisz coś przed sprawdzeniem!'); return; }
  const btn = document.getElementById('essay-check-btn');
  document.getElementById('essay-error').style.display = 'none';
  btn.disabled = true;
  btn.textContent = 'Sprawdzam…';
  try {
    const systemInstruction = buildEssaySystemPrompt(currentEssay.level, currentEssay.topic);
    const raw = await callGemini(systemInstruction, [{ role: 'user', parts: [{ text }] }]);
    const cleaned = raw.replace(/```json/gi, '').replace(/```/g, '').trim();
    const data = JSON.parse(cleaned);
    currentEssay.text = text;
    renderEssayResult(data);
    recordEssayCompletion(currentEssay.level, currentEssay.topic.title, Array.isArray(data.mistakes) ? data.mistakes.length : 0);
    showView('essay-result');
  } catch {
    document.getElementById('essay-error').textContent = 'Nie udało się sprawdzić wypracowania. Sprawdź klucz API (⚙️) i połączenie z internetem, i spróbuj ponownie.';
    document.getElementById('essay-error').style.display = '';
  } finally {
    btn.disabled = false;
    btn.textContent = 'Sprawdź ✓';
  }
}

function renderEssayResult(data) {
  document.getElementById('essay-overall-text').textContent = data.overall_pl || '';

  const mistakes = Array.isArray(data.mistakes) ? data.mistakes : [];
  const mistakesHtml = mistakes.length
    ? mistakes.map(m => `
      <div class="mistake-item">
        <div class="mistake-original">❌ ${esc(m.original || '')}</div>
        <div class="mistake-corrected">✅ ${esc(m.corrected || '')}</div>
        <div class="mistake-explanation">${esc(m.explanation || '')}</div>
      </div>`).join('')
    : '<p class="hint">Brak istotnych błędów — świetna robota! 🎉</p>';
  document.getElementById('essay-mistakes').innerHTML = `<h3>Błędy i poprawki</h3>${mistakesHtml}`;

  essayVocabWords = {};
  if (Array.isArray(data.vocabulary)) {
    data.vocabulary.forEach(w => { if (w.en) essayVocabWords[w.en] = w.pl || ''; });
  }
  document.getElementById('essay-set-name').value = `Wypracowanie: ${currentEssay.topic.title}`;
  renderEssayVocabChips();
}

function renderEssayVocabChips() {
  const list = document.getElementById('essay-words-list');
  list.innerHTML = Object.keys(essayVocabWords).map(w => `
    <span class="selected-word-chip" data-key="${esc(w)}">
      <b>${esc(w)}</b> =
      <input type="text" placeholder="tłumaczenie" value="${esc(essayVocabWords[w])}"
        oninput="essayVocabWords[this.closest('.selected-word-chip').dataset.key]=this.value" />
      <span class="chip-remove" onclick="removeEssayVocabChip(this.closest('.selected-word-chip').dataset.key)">✕</span>
    </span>`).join('');
}

function removeEssayVocabChip(word) {
  delete essayVocabWords[word];
  renderEssayVocabChips();
}

function saveEssayWords() {
  const entries = Object.entries(essayVocabWords).filter(([w]) => w);
  if (!entries.length) { showToast('Brak słówek do zapisania!'); return; }
  const name  = document.getElementById('essay-set-name').value.trim() || 'Słówka z wypracowania';
  const words = entries.map(([en, pl]) => ({ id: uid(), en, pl }));
  const sets  = getSets();
  sets.push({ id: uid(), name, icon: '📝', words, results: [], createdAt: today(), lastUsed: Date.now() });
  saveSets(sets);
  showToast(`✅ Zestaw "${name}" zapisany!`);
  currentEssay = null;
  showView('sets-list');
}

function recordEssayCompletion(level, topicTitle, mistakeCount) {
  const prog = getProgress();
  if (!prog.essays) prog.essays = [];
  prog.essays.unshift({ date: today(), level, topic: topicTitle, mistakeCount });
  prog.essays = prog.essays.slice(0, 50);
  saveProgress(prog);
}

// ===== KIDS MODE (Dla najmłodszych) =====
function speakKids(text, lang) {
  try {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utter = new SpeechSynthesisUtterance(text);
    utter.lang = lang;
    utter.rate = 0.8;
    window.speechSynthesis.speak(utter);
  } catch {}
}

function updateKidsStarsDisplay() {
  document.querySelectorAll('.kids-stars-value').forEach(el => el.textContent = kidsStars);
}

function addKidsStar() {
  kidsStars++;
  localStorage.setItem('kids_stars', kidsStars);
  updateKidsStarsDisplay();
}

function exitKids(view) {
  try { window.speechSynthesis && window.speechSynthesis.cancel(); } catch {}
  showView(view);
}

function renderKidsHome() {
  updateKidsStarsDisplay();
  document.getElementById('kids-category-grid').innerHTML = KIDS_CATEGORIES.map(c => `
    <div class="kids-category-card" onclick="pickKidsCategory('${c.id}')">
      <div class="kids-category-icon">${c.icon}</div>
      <div class="kids-category-title">${esc(c.title)}</div>
    </div>`).join('');
}

function pickKidsCategory(id) {
  kidsCategoryId = id;
  const cat = KIDS_CATEGORIES.find(c => c.id === id);
  document.getElementById('kids-category-title').textContent = `${cat.icon} ${cat.title}`;
  showView('kids-category');
}

function startKidsFlashcards() {
  kidsFlashIndex = 0;
  showView('kids-flashcards');
  document.getElementById('kids-flash-pl').style.display = 'none';
  renderKidsFlashcard();
}

function renderKidsFlashcard() {
  const cat  = KIDS_CATEGORIES.find(c => c.id === kidsCategoryId);
  const word = cat.words[kidsFlashIndex];
  document.getElementById('kids-flash-emoji').textContent = word.emoji;
  document.getElementById('kids-flash-word').textContent = word.en;
  document.getElementById('kids-flash-counter').textContent = `${kidsFlashIndex + 1} / ${cat.words.length}`;
  document.getElementById('kids-flash-pl').style.display = 'none';
  speakKids(word.en, 'en-US');
}

function replayKidsFlashAudio() {
  const cat  = KIDS_CATEGORIES.find(c => c.id === kidsCategoryId);
  speakKids(cat.words[kidsFlashIndex].en, 'en-US');
}

function revealKidsTranslation() {
  const cat  = KIDS_CATEGORIES.find(c => c.id === kidsCategoryId);
  const word = cat.words[kidsFlashIndex];
  document.getElementById('kids-flash-pl').textContent = word.pl;
  document.getElementById('kids-flash-pl').style.display = '';
  speakKids(word.pl, 'pl-PL');
}

function nextKidsFlashcard() {
  const cat = KIDS_CATEGORIES.find(c => c.id === kidsCategoryId);
  kidsFlashIndex = (kidsFlashIndex + 1) % cat.words.length;
  renderKidsFlashcard();
}

function prevKidsFlashcard() {
  const cat = KIDS_CATEGORIES.find(c => c.id === kidsCategoryId);
  kidsFlashIndex = (kidsFlashIndex - 1 + cat.words.length) % cat.words.length;
  renderKidsFlashcard();
}

function startKidsQuiz() {
  showView('kids-quiz');
  updateKidsStarsDisplay();
  document.getElementById('kids-quiz-feedback').style.display = 'none';
  nextKidsQuizRound();
}

function nextKidsQuizRound() {
  const cat     = KIDS_CATEGORIES.find(c => c.id === kidsCategoryId);
  const shuffled = shuffle([...cat.words]);
  kidsQuizWord   = shuffled[0];
  const options  = shuffle(shuffled.slice(0, 3));
  document.getElementById('kids-quiz-options').innerHTML = options.map(w => `
    <div class="kids-option" onclick="checkKidsQuizAnswer('${w.en}', this)">${w.emoji}</div>`).join('');
  document.getElementById('kids-quiz-feedback').style.display = 'none';
  setTimeout(() => speakKids(kidsQuizWord.en, 'en-US'), 300);
}

function replayKidsQuizAudio() {
  if (kidsQuizWord) speakKids(kidsQuizWord.en, 'en-US');
}

function checkKidsQuizAnswer(en, el) {
  const feedback = document.getElementById('kids-quiz-feedback');
  if (en === kidsQuizWord.en) {
    el.classList.add('correct');
    addKidsStar();
    feedback.textContent = '🎉 Brawo!';
    feedback.className = 'kids-quiz-feedback good';
    feedback.style.display = '';
    setTimeout(nextKidsQuizRound, 1400);
  } else {
    el.classList.add('wrong');
    setTimeout(() => el.classList.remove('wrong'), 500);
    feedback.textContent = '🙂 Spróbuj jeszcze raz!';
    feedback.className = 'kids-quiz-feedback retry';
    feedback.style.display = '';
  }
}

function startKidsTrueFalse() {
  showView('kids-truefalse');
  updateKidsStarsDisplay();
  document.getElementById('kids-tf-feedback').style.display = 'none';
  nextKidsTrueFalseRound();
}

function nextKidsTrueFalseRound() {
  const cat   = KIDS_CATEGORIES.find(c => c.id === kidsCategoryId);
  const words = cat.words;
  const word  = words[Math.floor(Math.random() * words.length)];
  const isTrue = Math.random() < 0.5;
  let shownWord = word.en;
  if (!isTrue) {
    const others = words.filter(w => w.en !== word.en);
    shownWord = others[Math.floor(Math.random() * others.length)].en;
  }
  kidsTFCurrent = { word, shownWord, isTrue };
  document.getElementById('kids-tf-emoji').textContent = word.emoji;
  document.getElementById('kids-tf-word').textContent = shownWord;
  document.getElementById('kids-tf-feedback').style.display = 'none';
  setTimeout(() => speakKids(shownWord, 'en-US'), 300);
}

function replayKidsTrueFalseAudio() {
  if (kidsTFCurrent) speakKids(kidsTFCurrent.shownWord, 'en-US');
}

function answerKidsTrueFalse(answer) {
  const feedback = document.getElementById('kids-tf-feedback');
  const correct  = answer === kidsTFCurrent.isTrue;
  if (correct) {
    addKidsStar();
    feedback.textContent = '🎉 Brawo! Dobrze!';
    feedback.className = 'kids-quiz-feedback good';
  } else {
    feedback.textContent = `🙂 To było "${kidsTFCurrent.word.en}"`;
    feedback.className = 'kids-quiz-feedback retry';
  }
  feedback.style.display = '';
  setTimeout(nextKidsTrueFalseRound, 1600);
}

function startKidsSentences() {
  kidsSentenceIndex = 0;
  showView('kids-sentences');
  renderKidsSentence();
}

function renderKidsSentence() {
  const s = KIDS_SENTENCES[kidsSentenceIndex];
  document.getElementById('kids-sentence-emoji').textContent = s.emoji;
  document.getElementById('kids-sentence-en').textContent = s.en;
  document.getElementById('kids-sentence-counter').textContent = `${kidsSentenceIndex + 1} / ${KIDS_SENTENCES.length}`;
  document.getElementById('kids-sentence-pl').style.display = 'none';
  speakKids(s.en, 'en-US');
}

function replayKidsSentenceAudio() {
  speakKids(KIDS_SENTENCES[kidsSentenceIndex].en, 'en-US');
}

function revealKidsSentenceTranslation() {
  const s = KIDS_SENTENCES[kidsSentenceIndex];
  document.getElementById('kids-sentence-pl').textContent = s.pl;
  document.getElementById('kids-sentence-pl').style.display = '';
  speakKids(s.pl, 'pl-PL');
}

function nextKidsSentence() {
  kidsSentenceIndex = (kidsSentenceIndex + 1) % KIDS_SENTENCES.length;
  renderKidsSentence();
}

function prevKidsSentence() {
  kidsSentenceIndex = (kidsSentenceIndex - 1 + KIDS_SENTENCES.length) % KIDS_SENTENCES.length;
  renderKidsSentence();
}

// ===== PROGRESS =====
function renderProgress() {
  const prog   = getProgress();
  const streak = prog.streak.count;

  document.getElementById('progress-streak').innerHTML =
    `🔥 Passa: <b>${streak} ${streak === 1 ? 'dzień' : streak < 5 ? 'dni' : 'dni'} z rzędu!</b>
    <div style="font-size:1rem;font-weight:400;margin-top:6px">Ucz się codziennie, żeby utrzymać passę!</div>`;

  // use global BADGES_DEF

  document.getElementById('badges-grid').innerHTML = BADGES_DEF.map(b => `
    <div class="badge-item ${prog.badges.includes(b.id) ? '' : 'locked'}">
      <div class="badge-icon">${b.icon}</div>
      <div class="badge-name">${b.name}</div>
      <div class="badge-desc">${b.desc}</div>
    </div>`).join('');

  if (!prog.history || !prog.history.length) {
    document.getElementById('test-history').innerHTML = '<p style="color:var(--text-light)">Brak historii testów. Rozwiąż swój pierwszy test!</p>';
  } else {
    document.getElementById('test-history').innerHTML = prog.history.map(h => `
      <div class="history-item">
        <span class="history-date">${h.date}</span>
        <span class="history-set">${esc(h.setName)}</span>
        <span class="history-score">${h.score}%</span>
        <span class="history-stars">${'⭐'.repeat(h.stars || 1)}</span>
      </div>`).join('');
  }

  const essays = prog.essays || [];
  document.getElementById('essay-history').innerHTML = essays.length
    ? essays.map(e => `
      <div class="history-item">
        <span class="history-date">${e.date}</span>
        <span class="history-set">${esc(e.topic)} (${e.level})</span>
        <span class="history-score">${e.mistakeCount} błędów</span>
      </div>`).join('')
    : '<p style="color:var(--text-light)">Brak historii wypracowań. Napisz swoje pierwsze!</p>';
}

function checkBadges(prog, pct, sets) {
  const add = id => { if (!prog.badges.includes(id)) { prog.badges.push(id); showToast(`🎖️ Nowa odznaka: ${BADGES_DEF.find(b=>b.id===id)?.name || id}!`); } };
  const history = prog.history;
  const totalWords = sets.reduce((s, set) => s + (set.words?.length || 0), 0);
  if (history.length >= 1)               add('first_test');
  if (pct === 100)                        add('perfect');
  if (history.filter(h=>h.score===100).length >= 3) add('perfect3');
  if (prog.streak.count >= 3)            add('streak3');
  if (prog.streak.count >= 7)            add('streak7');
  if (prog.streak.count >= 14)           add('streak14');
  if (prog.streak.count >= 30)           add('streak30');
  if (history.length >= 5)              add('five_tests');
  if (history.length >= 20)             add('twenty_tests');
  if (history.length >= 50)             add('fifty_tests');
  if (sets.length >= 3)                  add('all_sets');
  if (sets.length >= 5)                  add('five_sets');
  if (totalWords >= 50)                  add('words50');
  if (totalWords >= 100)                 add('words100');
  if (getSongs().length >= 1)            add('song_added');
  if (getSongs().length >= 3)            add('songs3');
  if (pct >= 80 && history.length >= 3 && history.slice(0,3).every(h=>h.score>=80)) add('three_good');
  const setResults = sets.find(s=>s.id===testSetId)?.results || [];
  if (setResults.length >= 2 && pct > (setResults[setResults.length-2]?.score||0)) add('improved');
}

// ===== MODAL =====
function showModal(title, body, buttons) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').textContent  = body;
  document.getElementById('modal-actions').innerHTML = buttons.map((b, i) =>
    `<button class="btn ${b.cls}" onclick="modalActions[${i}]()">${b.label}</button>`
  ).join('');
  window.modalActions = buttons.map(b => b.action);
  document.getElementById('modal-overlay').style.display = 'flex';
}
function closeModal() { document.getElementById('modal-overlay').style.display = 'none'; }

// ===== TOAST =====
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.display = 'block';
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.style.display = 'none', 2800);
}

// ===== HELPERS =====
function esc(s) {
  if (!s) return '';
  return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

function today() { return new Date().toISOString().slice(0, 10); }

function slug(s) { return s.toLowerCase().replace(/\s+/g,'_').replace(/[^a-z0-9_]/g,''); }

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// Accept answer against expected (which may contain variants separated by '/')
function isCorrectAnswer(ans, expected) {
  const variants = expected.split('/').map(v => v.trim()).filter(Boolean);
  return variants.some(v => isSimilar(ans, v));
}

// Show all variants nicely formatted
function formatExpected(expected) {
  return expected.split('/').map(v => v.trim()).join(' / ');
}

function isSimilar(a, b) {
  a = a.trim().toLowerCase().replace(/[^a-ząćęłńóśźż\s]/gi, '');
  b = b.trim().toLowerCase().replace(/[^a-ząćęłńóśźż\s]/gi, '');
  if (a === b) return true;
  // Allow 1 typo for words ≥4 chars
  if (b.length >= 4 && levenshtein(a, b) <= 1) return true;
  return false;
}

function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({length: m+1}, (_, i) => Array.from({length: n+1}, (_, j) => i ? (j ? 0 : i) : j));
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = a[i-1] === b[j-1] ? dp[i-1][j-1] : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
  return dp[m][n];
}

function splitVerses(text) {
  return text.split(/\n\n+/).map(v => v.trim()).filter(Boolean);
}

function extractYtId(url) {
  const m = url.match(/(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]{11})/);
  return m ? m[1] : null;
}

function downloadJSON(data, filename) {
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a    = document.createElement('a');
  a.href     = URL.createObjectURL(blob);
  a.download = filename;
  a.click();
  URL.revokeObjectURL(a.href);
}

// ===== HANGMAN =====
const HANGMAN_PARTS = ['h-head','h-body','h-larm','h-rarm','h-lleg','h-rleg'];
let hangmanSetId   = null;
let hangmanQueue   = [];
let hangmanWord    = '';
let hangmanGuessed = [];
let hangmanWrong   = 0;
let hangmanCorrect = 0;
let hangmanTotal   = 0;
const MAX_WRONG    = 6;

function startHangman() {
  const set = getSets().find(s => s.id === currentSetId);
  if (!set || !set.words.length) { showToast('Brak słówek!'); return; }
  hangmanSetId = currentSetId;
  hangmanQueue = shuffle([...set.words]);
  hangmanCorrect = 0;
  hangmanWrong   = 0;
  hangmanTotal   = hangmanQueue.length;
  document.getElementById('hangman-title').textContent = `🪢 ${set.name}`;
  showView('hangman');
  nextHangmanWord();
}

function nextHangmanWord() {
  if (!hangmanQueue.length) {
    showHangmanGameOver();
    return;
  }
  const word = hangmanQueue.shift();
  hangmanWord    = word.en.toLowerCase();
  hangmanGuessed = [];

  // Pokaż tylko tyle części wisielca ile błędów już popełniono
  HANGMAN_PARTS.forEach((id, i) => {
    document.getElementById(id).style.display = i < hangmanWrong ? '' : 'none';
  });
  document.getElementById('hangman-result').style.display = 'none';
  document.getElementById('hangman-keyboard').style.display = '';

  document.getElementById('hangman-clue').textContent = `Znaczenie: ${word.pl}`;
  document.getElementById('hangman-score-badge').textContent = `✅ ${hangmanCorrect} odgadniętych`;
  renderHangmanWord();
  renderHangmanWrong();
  renderHangmanKeyboard();
}

function renderHangmanWord() {
  const letters = hangmanWord.split('');
  document.getElementById('hangman-word').innerHTML = letters.map(l => {
    if (l === ' ') return `<span class="hangman-letter space"></span>`;
    const shown = hangmanGuessed.includes(l) ? l : '';
    return `<span class="hangman-letter">${shown}</span>`;
  }).join('');
}

function renderHangmanWrong() {
  const wrongThisWord = hangmanGuessed.filter(l => !hangmanWord.includes(l));
  document.getElementById('hangman-wrong-letters').textContent = wrongThisWord.length ? '✗ ' + wrongThisWord.join('  ') : '';
  document.getElementById('hangman-wrong-count').textContent = `Błędy: ${hangmanWrong} / ${MAX_WRONG}`;
}

function renderHangmanKeyboard() {
  const letters = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const plLetters = ['ą','ć','ę','ł','ń','ó','ś','ź','ż'];
  const allLetters = [...letters, ...plLetters];
  document.getElementById('hangman-keyboard').innerHTML =
    letters.map(l => {
      const used    = hangmanGuessed.includes(l);
      const correct = used && hangmanWord.includes(l);
      const wrong   = used && !hangmanWord.includes(l);
      return `<button class="hangman-key ${correct?'correct':''} ${wrong?'wrong':''}"
        onclick="guessLetter('${l}')" ${used?'disabled':''}>${l}</button>`;
    }).join('') +
    `<div class="hangman-pl-row">` +
    plLetters.map(l => {
      const used    = hangmanGuessed.includes(l);
      const correct = used && hangmanWord.includes(l);
      const wrong   = used && !hangmanWord.includes(l);
      return `<button class="hangman-key ${correct?'correct':''} ${wrong?'wrong':''}"
        onclick="guessLetter('${l}')" ${used?'disabled':''}>${l}</button>`;
    }).join('') +
    `</div>`;
}

function guessLetter(l) {
  if (hangmanGuessed.includes(l)) return;
  hangmanGuessed.push(l);

  if (!hangmanWord.includes(l)) {
    hangmanWrong++;
    const part = document.getElementById(HANGMAN_PARTS[hangmanWrong - 1]);
    if (part) part.style.display = '';
  }

  renderHangmanWord();
  renderHangmanWrong();
  renderHangmanKeyboard();

  // Check win (this word)
  const allGuessed = hangmanWord.split('').every(l => l === ' ' || hangmanGuessed.includes(l));
  if (allGuessed) {
    hangmanCorrect++;
    showHangmanResult(true);
    return;
  }
  // Check game over (6 błędów łącznie)
  if (hangmanWrong >= MAX_WRONG) {
    showHangmanResult(false);
  }
}

function showHangmanResult(won) {
  document.getElementById('hangman-keyboard').style.display = 'none';
  document.getElementById('hangman-result').style.display = '';
  // Reveal word
  document.getElementById('hangman-word').innerHTML = hangmanWord.split('').map(l =>
    l === ' ' ? `<span class="hangman-letter space"></span>`
              : `<span class="hangman-letter" style="color:${won?'var(--green)':'var(--red)'}">${l}</span>`
  ).join('');

  if (won) {
    document.getElementById('hangman-result-icon').textContent = '🎉';
    document.getElementById('hangman-result-text').innerHTML =
      `<span style="color:var(--green);font-size:1.3rem">Brawo! Odgadłaś!</span>`;
    // Przycisk: następne słówko (lub koniec jeśli kolejka pusta)
    document.querySelector('#hangman-result button').textContent =
      hangmanQueue.length ? 'Następne słówko →' : '🏁 Zakończ grę';
    document.querySelector('#hangman-result button').onclick = hangmanQueue.length
      ? nextHangmanWord : showHangmanGameOver;
  } else {
    // Koniec gry — 6 błędów
    document.getElementById('hangman-result-icon').textContent = '💀';
    document.getElementById('hangman-result-text').innerHTML =
      `Słówko to: <span style="color:var(--purple);font-size:1.3rem;font-weight:900">${hangmanWord}</span><br>` +
      `<span style="font-size:1.1rem">Odgadłaś <b>${hangmanCorrect}</b> z <b>${hangmanTotal}</b> słówek</span>`;
    document.querySelector('#hangman-result button').textContent = '← Wróć do zestawu';
    document.querySelector('#hangman-result button').onclick = exitHangman;
  }
}

function showHangmanGameOver() {
  document.getElementById('hangman-keyboard').style.display = 'none';
  document.getElementById('hangman-result').style.display = '';
  document.getElementById('hangman-result-icon').textContent = '🏆';
  document.getElementById('hangman-result-text').innerHTML =
    `<span style="color:var(--green);font-size:1.2rem">Wszystkie słówka zaliczone!</span><br>` +
    `Odgadłaś <b>${hangmanCorrect}</b> z <b>${hangmanTotal}</b> słówek bez straty życia!`;
  document.querySelector('#hangman-result button').textContent = '← Wróć do zestawu';
  document.querySelector('#hangman-result button').onclick = exitHangman;
}

document.addEventListener('keydown', e => {
  const view = document.getElementById('view-hangman');
  if (!view || view.style.display === 'none') return;
  if (document.getElementById('hangman-result').style.display !== 'none') return;
  const l = e.key.toLowerCase();
  if (/^[a-z]$/.test(l)) guessLetter(l);
});

function exitHangman() { showView('set-detail', { id: hangmanSetId }); }

// ===== MATCH PAIRS =====
let matchSetId     = null;
let matchSelected  = null;
let matchMoves     = 0;
let matchMatched   = 0;
let matchPairs     = 0;
let matchStartTime = 0;

function startMatch() {
  const set = getSets().find(s => s.id === currentSetId);
  if (!set || set.words.length < 2) { showToast('Potrzebujesz minimum 2 słówka!'); return; }
  matchSetId    = currentSetId;
  matchSelected = null;
  matchMoves    = 0;
  matchMatched  = 0;
  matchStartTime = Date.now();

  // Take up to 6 pairs
  const words = shuffle([...set.words]).slice(0, 6);
  matchPairs = words.length;

  document.getElementById('match-title').textContent = `🃏 ${set.name}`;
  document.getElementById('match-complete').style.display = 'none';
  document.getElementById('match-grid').style.display = '';
  updateMatchInfo();

  // Build shuffled grid: EN cards + PL cards
  const cards = shuffle([
    ...words.map((w, i) => ({ id: i, lang: 'en', text: w.en })),
    ...words.map((w, i) => ({ id: i, lang: 'pl', text: w.pl.split('/')[0].trim() })),
  ]);

  document.getElementById('match-grid').innerHTML = cards.map((c, ci) => `
    <div class="match-card ${c.lang}" id="mc-${ci}" data-id="${c.id}" data-lang="${c.lang}" data-idx="${ci}"
      onclick="selectMatchCard(${ci}, ${c.id}, '${c.lang}')">
      ${esc(c.text)}
    </div>`).join('');

  showView('match');
}

function selectMatchCard(idx, id, lang) {
  const el = document.getElementById('mc-' + idx);
  if (!el || el.classList.contains('matched') || el.classList.contains('selected')) return;

  if (!matchSelected) {
    matchSelected = { idx, id, lang };
    el.classList.add('selected');
    return;
  }

  // Second card selected
  const first = document.getElementById('mc-' + matchSelected.idx);
  matchMoves++;
  updateMatchInfo();

  if (matchSelected.id === id && matchSelected.lang !== lang) {
    // Match!
    el.classList.add('matched');
    first.classList.remove('selected');
    first.classList.add('matched');
    matchMatched++;
    matchSelected = null;
    updateMatchInfo();
    if (matchMatched === matchPairs) {
      setTimeout(showMatchComplete, 400);
    }
  } else {
    // Wrong
    el.classList.add('wrong');
    first.classList.remove('selected');
    first.classList.add('wrong');
    matchSelected = null;
    setTimeout(() => {
      el.classList.remove('wrong');
      first.classList.remove('wrong');
    }, 600);
  }
}

function updateMatchInfo() {
  document.getElementById('match-pairs-left').textContent = `✅ Dopasowane: ${matchMatched} / ${matchPairs}`;
  document.getElementById('match-moves').textContent      = `🎯 Próby: ${matchMoves}`;
  document.getElementById('match-score-badge').textContent = `${matchMatched}/${matchPairs}`;
}

function showMatchComplete() {
  const secs    = Math.round((Date.now() - matchStartTime) / 1000);
  const mins    = Math.floor(secs / 60);
  const timeStr = mins > 0 ? `${mins} min ${secs % 60} sek` : `${secs} sek`;
  const perfect = matchMoves === matchPairs;

  document.getElementById('match-grid').style.display = 'none';
  document.getElementById('match-complete').style.display = '';
  document.getElementById('match-result-emoji').textContent  = perfect ? '🏆' : matchMoves <= matchPairs * 1.5 ? '🌟' : '😄';
  document.getElementById('match-result-title').textContent  = perfect ? 'Perfekcyjnie!' : 'Wszystkie pary!';
  document.getElementById('match-result-stats').textContent  = `${matchMoves} prób · ${timeStr}`;
}

function exitMatch() { showView('set-detail', { id: matchSetId }); }

// ===== SAVE / LOAD ALL =====
function saveAll() {
  const data = {
    version: 1,
    savedAt: new Date().toISOString(),
    sets: getSets(),
    songs: getSongs(),
    progress: getProgress(),
  };
  downloadJSON(data, `angielski_ala_backup_${today()}.json`);
  showToast('💾 Zapisano wszystko! Plik pobrany.');
}

function loadAll() { document.getElementById('load-all-file').click(); }

function handleLoadAll(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const data = JSON.parse(ev.target.result);
      if (!data.sets || !data.songs) throw new Error();
      showModal('Wczytaj zapisany stan', 'To zastąpi wszystkie obecne dane (słówka, piosenki, postępy). Na pewno?', [
        { label: 'Tak, wczytaj', cls: 'btn-primary', action: () => {
          if (data.sets)     saveSets(data.sets);
          if (data.songs)    saveSongs(data.songs);
          if (data.progress) saveProgress(data.progress);
          closeModal();
          showToast('✅ Dane wczytane!');
          showView('home');
        }},
        { label: 'Anuluj', cls: 'btn-secondary', action: closeModal },
      ]);
    } catch { showToast('❌ Błędny plik kopii zapasowej!'); }
  };
  reader.readAsText(file);
  e.target.value = '';
}

// ===== KEYBOARD SHORTCUTS =====
document.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const learnView     = document.getElementById('view-learn');
    const testView      = document.getElementById('view-test');
    const learnFeedback = document.getElementById('learn-feedback');
    const testFeedback  = document.getElementById('test-feedback');
    if (learnView && learnView.style.display !== 'none') {
      if (learnFeedback && learnFeedback.style.display !== 'none') nextLearnWord();
      else checkLearnAnswer();
      return;
    }
    if (testView && testView.style.display !== 'none') {
      if (testFeedback && testFeedback.style.display !== 'none') nextTestWord();
      else checkTestAnswer();
      return;
    }
    const chatView = document.getElementById('view-chat');
    if (chatView && chatView.style.display !== 'none' && document.activeElement === document.getElementById('chat-input')) {
      sendChatMessage();
      return;
    }
  }
});

// ===== SELECTION TRANSLATE BUTTON =====
(function() {
  const btn = document.getElementById('selection-translate-btn');
  let hideTimer = null;

  document.addEventListener('mouseup', e => {
    if (e.target === btn) return;
    clearTimeout(hideTimer);
    setTimeout(() => {
      const sel = window.getSelection();
      const text = sel ? sel.toString().trim() : '';
      // Show only when translate view is visible
      const translateView = document.getElementById('view-song-translate');
      const viewVisible = translateView && translateView.style.display !== 'none';
      if (text.length >= 2 && viewVisible) {
        const rect = sel.getRangeAt(0).getBoundingClientRect();
        // position: fixed — use viewport coords directly, no scrollY
        let top  = rect.top - 40;
        let left = rect.left + rect.width / 2 - 60;
        left = Math.max(8, Math.min(left, window.innerWidth - 140));
        btn.style.top  = top + 'px';
        btn.style.left = left + 'px';
        btn.style.display = 'block';
        btn._text = text;
      } else {
        btn.style.display = 'none';
      }
    }, 10);
  });

  btn.addEventListener('mousedown', e => {
    e.preventDefault(); // prevent losing selection
  });

  btn.addEventListener('click', () => {
    if (!btn._text) return;
    const url = `https://translate.google.com/?sl=en&tl=pl&text=${encodeURIComponent(btn._text)}&op=translate`;
    window.open(url, '_blank');
    btn.style.display = 'none';
    window.getSelection()?.removeAllRanges();
  });

  document.addEventListener('mousedown', e => {
    if (e.target !== btn) {
      hideTimer = setTimeout(() => btn.style.display = 'none', 200);
    }
  });

  document.addEventListener('scroll', () => { btn.style.display = 'none'; }, true);
})();

// ===== DEFAULT SETS =====
const DEFAULT_SETS_VERSION = 2;
const DEFAULT_SETS_DATA = [
  { name: 'Dom', icon: '🏠', words: [
    {en:'house',pl:'dom'},{en:'apartment',pl:'mieszkanie'},{en:'room',pl:'pokój'},
    {en:'kitchen',pl:'kuchnia'},{en:'bathroom',pl:'łazienka'},{en:'bedroom',pl:'sypialnia'},
    {en:'living room',pl:'salon'},{en:'garden',pl:'ogród'},{en:'window',pl:'okno'},
    {en:'door',pl:'drzwi'},{en:'floor',pl:'podłoga'},{en:'ceiling',pl:'sufit'},
    {en:'wall',pl:'ściana'},{en:'table',pl:'stół'},{en:'chair',pl:'krzesło'},
    {en:'sofa',pl:'sofa/kanapa'},{en:'bed',pl:'łóżko'},{en:'lamp',pl:'lampa'},
    {en:'mirror',pl:'lustro'},{en:'shelf',pl:'półka'},{en:'wardrobe',pl:'szafa'},
    {en:'fridge',pl:'lodówka'},{en:'stove',pl:'kuchenka'},{en:'oven',pl:'piekarnik'},
    {en:'sink',pl:'zlew'},{en:'toilet',pl:'toaleta'},{en:'shower',pl:'prysznic'},
    {en:'bath',pl:'wanna'},{en:'stairs',pl:'schody'},{en:'garage',pl:'garaż'},
    {en:'balcony',pl:'balkon'},{en:'basement',pl:'piwnica'},{en:'attic',pl:'strych'},
    {en:'roof',pl:'dach'},{en:'fence',pl:'płot/ogrodzenie'},{en:'gate',pl:'brama'},
    {en:'key',pl:'klucz'},{en:'lock',pl:'zamek'},{en:'curtain',pl:'zasłona/firanka'},
    {en:'carpet',pl:'dywan'},
  ]},
  { name: 'Rodzina', icon: '👨‍👩‍👧', words: [
    {en:'mother',pl:'mama/matka'},{en:'father',pl:'tata/ojciec'},{en:'sister',pl:'siostra'},
    {en:'brother',pl:'brat'},{en:'grandmother',pl:'babcia'},{en:'grandfather',pl:'dziadek'},
    {en:'aunt',pl:'ciocia'},{en:'uncle',pl:'wujek'},{en:'cousin',pl:'kuzyn/kuzynka'},
    {en:'daughter',pl:'córka'},{en:'son',pl:'syn'},{en:'wife',pl:'żona'},
    {en:'husband',pl:'mąż'},{en:'parents',pl:'rodzice'},{en:'children',pl:'dzieci'},
    {en:'baby',pl:'niemowlę'},{en:'family',pl:'rodzina'},{en:'grandparents',pl:'dziadkowie'},
    {en:'niece',pl:'siostrzenica'},{en:'nephew',pl:'siostrzeniec'},{en:'stepmother',pl:'macocha'},
    {en:'stepfather',pl:'ojczym'},{en:'mother-in-law',pl:'teściowa'},{en:'father-in-law',pl:'teść'},
    {en:'sister-in-law',pl:'szwagierka'},{en:'brother-in-law',pl:'szwagier'},
    {en:'great-grandmother',pl:'prababcia'},{en:'great-grandfather',pl:'pradziadek'},
    {en:'twin',pl:'bliźniak'},{en:'relative',pl:'krewny'},{en:'godmother',pl:'matka chrzestna'},
    {en:'godfather',pl:'ojciec chrzestny'},{en:'newborn',pl:'noworodek'},
    {en:'toddler',pl:'maluch'},{en:'teenager',pl:'nastolatek'},{en:'adult',pl:'dorosły'},
    {en:'elderly',pl:'starszy'},{en:'only child',pl:'jedynak'},{en:'generation',pl:'pokolenie'},
    {en:'orphan',pl:'sierota'},
  ]},
  { name: 'Popularne czasowniki', icon: '⚡', words: [
    {en:'to be',pl:'być'},{en:'to have',pl:'mieć'},{en:'to do',pl:'robić'},
    {en:'to say',pl:'mówić/powiedzieć'},{en:'to go',pl:'iść/jechać'},{en:'to get',pl:'dostać'},
    {en:'to make',pl:'robić/tworzyć'},{en:'to know',pl:'wiedzieć/znać'},{en:'to think',pl:'myśleć'},
    {en:'to take',pl:'brać/wziąć'},{en:'to see',pl:'widzieć'},{en:'to come',pl:'przychodzić'},
    {en:'to want',pl:'chcieć'},{en:'to look',pl:'patrzeć/wyglądać'},{en:'to use',pl:'używać'},
    {en:'to find',pl:'znajdować'},{en:'to give',pl:'dawać'},{en:'to tell',pl:'mówić/opowiadać'},
    {en:'to work',pl:'pracować'},{en:'to call',pl:'dzwonić/nazywać'},{en:'to try',pl:'próbować'},
    {en:'to ask',pl:'pytać'},{en:'to need',pl:'potrzebować'},{en:'to feel',pl:'czuć'},
    {en:'to become',pl:'stawać się'},{en:'to leave',pl:'wychodzić/zostawiać'},
    {en:'to put',pl:'kłaść/stawiać'},{en:'to mean',pl:'znaczyć'},{en:'to keep',pl:'trzymać'},
    {en:'to let',pl:'pozwalać'},{en:'to begin',pl:'zaczynać'},{en:'to show',pl:'pokazywać'},
    {en:'to hear',pl:'słyszeć'},{en:'to play',pl:'bawić się/grać'},{en:'to run',pl:'biec/biegać'},
    {en:'to move',pl:'ruszać się/poruszać'},{en:'to live',pl:'mieszkać/żyć'},
    {en:'to believe',pl:'wierzyć'},{en:'to hold',pl:'trzymać'},{en:'to bring',pl:'przynosić'},
  ]},
  { name: 'Popularne przymiotniki', icon: '🌈', words: [
    {en:'big',pl:'duży'},{en:'small',pl:'mały'},{en:'good',pl:'dobry'},
    {en:'bad',pl:'zły'},{en:'happy',pl:'szczęśliwy'},{en:'sad',pl:'smutny'},
    {en:'fast',pl:'szybki'},{en:'slow',pl:'wolny/powolny'},{en:'hot',pl:'gorący'},
    {en:'cold',pl:'zimny'},{en:'new',pl:'nowy'},{en:'old',pl:'stary'},
    {en:'beautiful',pl:'piękny'},{en:'ugly',pl:'brzydki'},{en:'strong',pl:'silny'},
    {en:'weak',pl:'słaby'},{en:'tall',pl:'wysoki'},{en:'short',pl:'niski/krótki'},
    {en:'long',pl:'długi'},{en:'wide',pl:'szeroki'},{en:'narrow',pl:'wąski'},
    {en:'heavy',pl:'ciężki'},{en:'light',pl:'lekki/jasny'},{en:'dark',pl:'ciemny'},
    {en:'clean',pl:'czysty'},{en:'dirty',pl:'brudny'},{en:'easy',pl:'łatwy'},
    {en:'difficult',pl:'trudny'},{en:'funny',pl:'zabawny/śmieszny'},{en:'boring',pl:'nudny'},
    {en:'interesting',pl:'interesujący/ciekawy'},{en:'important',pl:'ważny'},
    {en:'different',pl:'inny/różny'},{en:'same',pl:'taki sam'},{en:'right',pl:'prawy/poprawny'},
    {en:'wrong',pl:'zły/błędny'},{en:'open',pl:'otwarty'},{en:'closed',pl:'zamknięty'},
    {en:'full',pl:'pełny'},{en:'empty',pl:'pusty'},
  ]},
  { name: 'Szkoła', icon: '🎒', words: [
    {en:'school',pl:'szkoła'},{en:'classroom',pl:'sala lekcyjna/klasa'},{en:'teacher',pl:'nauczyciel/nauczycielka'},
    {en:'student',pl:'uczeń/uczennica'},{en:'lesson',pl:'lekcja'},{en:'homework',pl:'zadanie domowe'},
    {en:'test',pl:'test/sprawdzian'},{en:'grade',pl:'ocena/stopień'},{en:'book',pl:'książka'},
    {en:'notebook',pl:'zeszyt'},{en:'pencil',pl:'ołówek'},{en:'pen',pl:'długopis'},
    {en:'ruler',pl:'linijka'},{en:'eraser',pl:'gumka'},{en:'backpack',pl:'plecak'},
    {en:'desk',pl:'ławka'},{en:'blackboard',pl:'tablica'},{en:'chalk',pl:'kreda'},
    {en:'library',pl:'biblioteka'},{en:'subject',pl:'przedmiot'},{en:'mathematics',pl:'matematyka'},
    {en:'English',pl:'angielski'},{en:'history',pl:'historia'},{en:'science',pl:'przyroda'},
    {en:'art',pl:'plastyka/sztuka'},{en:'music',pl:'muzyka'},{en:'sport',pl:'wychowanie fizyczne'},
    {en:'break',pl:'przerwa'},{en:'timetable',pl:'plan lekcji'},{en:'uniform',pl:'mundurek szkolny'},
    {en:'principal',pl:'dyrektor'},{en:'report card',pl:'świadectwo'},{en:'exam',pl:'egzamin'},
    {en:'question',pl:'pytanie'},{en:'answer',pl:'odpowiedź'},{en:'exercise',pl:'ćwiczenie'},
    {en:'project',pl:'projekt'},{en:'presentation',pl:'prezentacja'},
    {en:'group work',pl:'praca w grupie'},{en:'canteen',pl:'stołówka/bufet'},
  ]},
  { name: 'Ubrania', icon: '👗', words: [
    {en:'shirt',pl:'koszula'},{en:'T-shirt',pl:'koszulka'},{en:'trousers',pl:'spodnie'},
    {en:'jeans',pl:'dżinsy'},{en:'dress',pl:'sukienka'},{en:'skirt',pl:'spódnica'},
    {en:'jacket',pl:'kurtka/marynarka'},{en:'coat',pl:'płaszcz'},{en:'jumper',pl:'sweter'},
    {en:'hoodie',pl:'bluza z kapturem'},{en:'socks',pl:'skarpetki'},{en:'shoes',pl:'buty'},
    {en:'boots',pl:'kozaki/buty z cholewką'},{en:'trainers',pl:'adidasy/trampki'},
    {en:'slippers',pl:'kapcie'},{en:'sandals',pl:'sandały'},{en:'hat',pl:'czapka/kapelusz'},
    {en:'scarf',pl:'szalik'},{en:'gloves',pl:'rękawiczki'},{en:'belt',pl:'pasek'},
    {en:'tie',pl:'krawat'},{en:'suit',pl:'garnitur'},{en:'pyjamas',pl:'piżama'},
    {en:'underwear',pl:'bielizna'},{en:'shorts',pl:'szorty/krótkie spodenki'},
    {en:'swimsuit',pl:'kostium kąpielowy'},{en:'tights',pl:'rajstopy'},{en:'leggings',pl:'legginsy'},
    {en:'blouse',pl:'bluzka'},{en:'cardigan',pl:'sweter zapinany/kardigan'},
    {en:'vest',pl:'kamizelka/podkoszulek'},{en:'cap',pl:'czapka z daszkiem'},
    {en:'beanie',pl:'czapka'},{en:'raincoat',pl:'płaszcz przeciwdeszczowy'},
    {en:'apron',pl:'fartuch'},{en:'zipper',pl:'zamek błyskawiczny'},{en:'button',pl:'guzik'},
    {en:'pocket',pl:'kieszeń'},{en:'sleeve',pl:'rękaw'},{en:'collar',pl:'kołnierz'},
  ]},
  { name: 'Jedzenie', icon: '🍎', words: [
    {en:'bread',pl:'chleb'},{en:'butter',pl:'masło'},{en:'milk',pl:'mleko'},
    {en:'egg',pl:'jajko'},{en:'cheese',pl:'ser'},{en:'meat',pl:'mięso'},
    {en:'chicken',pl:'kurczak'},{en:'fish',pl:'ryba'},{en:'apple',pl:'jabłko'},
    {en:'banana',pl:'banan'},{en:'orange',pl:'pomarańcza'},{en:'strawberry',pl:'truskawka'},
    {en:'tomato',pl:'pomidor'},{en:'potato',pl:'ziemniak'},{en:'carrot',pl:'marchewka'},
    {en:'onion',pl:'cebula'},{en:'garlic',pl:'czosnek'},{en:'rice',pl:'ryż'},
    {en:'pasta',pl:'makaron'},{en:'soup',pl:'zupa'},{en:'salad',pl:'sałatka'},
    {en:'pizza',pl:'pizza'},{en:'sandwich',pl:'kanapka'},{en:'cake',pl:'ciasto'},
    {en:'chocolate',pl:'czekolada'},{en:'ice cream',pl:'lody'},{en:'cookie',pl:'ciasteczko'},
    {en:'water',pl:'woda'},{en:'juice',pl:'sok'},{en:'coffee',pl:'kawa'},
    {en:'tea',pl:'herbata'},{en:'sugar',pl:'cukier'},{en:'salt',pl:'sól'},
    {en:'pepper',pl:'pieprz'},{en:'oil',pl:'olej/oliwa'},{en:'jam',pl:'dżem'},
    {en:'honey',pl:'miód'},{en:'yogurt',pl:'jogurt'},{en:'cream',pl:'śmietana/krem'},
    {en:'mushroom',pl:'grzyb/pieczarka'},
  ]},
  { name: 'Czas', icon: '⏰', words: [
    {en:'time',pl:'czas'},{en:'hour',pl:'godzina'},{en:'minute',pl:'minuta'},
    {en:'second',pl:'sekunda'},{en:'day',pl:'dzień'},{en:'week',pl:'tydzień'},
    {en:'month',pl:'miesiąc'},{en:'year',pl:'rok'},{en:'morning',pl:'rano/poranek'},
    {en:'afternoon',pl:'popołudnie'},{en:'evening',pl:'wieczór'},{en:'night',pl:'noc'},
    {en:'today',pl:'dzisiaj/dziś'},{en:'tomorrow',pl:'jutro'},{en:'yesterday',pl:'wczoraj'},
    {en:'now',pl:'teraz'},{en:'soon',pl:'wkrótce/niedługo'},{en:'later',pl:'później'},
    {en:'early',pl:'wcześnie'},{en:'late',pl:'późno'},{en:'Monday',pl:'poniedziałek'},
    {en:'Tuesday',pl:'wtorek'},{en:'Wednesday',pl:'środa'},{en:'Thursday',pl:'czwartek'},
    {en:'Friday',pl:'piątek'},{en:'Saturday',pl:'sobota'},{en:'Sunday',pl:'niedziela'},
    {en:'January',pl:'styczeń'},{en:'February',pl:'luty'},{en:'March',pl:'marzec'},
    {en:'April',pl:'kwiecień'},{en:'May',pl:'maj'},{en:'June',pl:'czerwiec'},
    {en:'July',pl:'lipiec'},{en:'August',pl:'sierpień'},{en:'September',pl:'wrzesień'},
    {en:'October',pl:'październik'},{en:'November',pl:'listopad'},{en:'December',pl:'grudzień'},
    {en:'clock',pl:'zegar'},
  ]},
  { name: 'Części ciała', icon: '🫀', words: [
    {en:'head',pl:'głowa'},{en:'hair',pl:'włosy'},{en:'eye',pl:'oko'},
    {en:'ear',pl:'ucho'},{en:'nose',pl:'nos'},{en:'mouth',pl:'usta'},
    {en:'tooth',pl:'ząb'},{en:'tongue',pl:'język'},{en:'lip',pl:'warga'},
    {en:'chin',pl:'broda'},{en:'cheek',pl:'policzek'},{en:'forehead',pl:'czoło'},
    {en:'neck',pl:'szyja/kark'},{en:'shoulder',pl:'ramię/bark'},{en:'arm',pl:'ramię/ręka'},
    {en:'elbow',pl:'łokieć'},{en:'wrist',pl:'nadgarstek'},{en:'hand',pl:'dłoń/ręka'},
    {en:'finger',pl:'palec'},{en:'thumb',pl:'kciuk'},{en:'chest',pl:'klatka piersiowa'},
    {en:'back',pl:'plecy'},{en:'stomach',pl:'brzuch/żołądek'},{en:'waist',pl:'talia/pas'},
    {en:'hip',pl:'biodro'},{en:'leg',pl:'noga'},{en:'knee',pl:'kolano'},
    {en:'ankle',pl:'kostka'},{en:'foot',pl:'stopa'},{en:'toe',pl:'palec u nogi'},
    {en:'heel',pl:'pięta'},{en:'skin',pl:'skóra'},{en:'bone',pl:'kość'},
    {en:'muscle',pl:'mięsień'},{en:'heart',pl:'serce'},{en:'lung',pl:'płuco'},
    {en:'brain',pl:'mózg'},{en:'blood',pl:'krew'},{en:'nail',pl:'paznokieć'},
    {en:'eyebrow',pl:'brew'},
  ]},
  { name: 'Emocje', icon: '😊', words: [
    {en:'happy',pl:'szczęśliwy'},{en:'sad',pl:'smutny'},{en:'angry',pl:'zły/wściekły'},
    {en:'scared',pl:'przestraszony'},{en:'surprised',pl:'zaskoczony'},{en:'excited',pl:'podekscytowany'},
    {en:'bored',pl:'znudzony'},{en:'tired',pl:'zmęczony'},{en:'nervous',pl:'zdenerwowany'},
    {en:'calm',pl:'spokojny'},{en:'proud',pl:'dumny'},{en:'ashamed',pl:'zawstydzony'},
    {en:'jealous',pl:'zazdrosny'},{en:'love',pl:'miłość/kochać'},{en:'hate',pl:'nienawiść/nienawidzić'},
    {en:'hope',pl:'nadzieja/mieć nadzieję'},{en:'fear',pl:'strach/bać się'},{en:'joy',pl:'radość'},
    {en:'grief',pl:'smutek/żal'},{en:'loneliness',pl:'samotność'},{en:'confidence',pl:'pewność siebie'},
    {en:'anxiety',pl:'niepokój/lęk'},{en:'relief',pl:'ulga'},{en:'disgust',pl:'wstręt/obrzydzenie'},
    {en:'envy',pl:'zazdrość'},{en:'guilt',pl:'wina/poczucie winy'},{en:'shame',pl:'wstyd'},
    {en:'curiosity',pl:'ciekawość'},{en:'disappointment',pl:'rozczarowanie'},
    {en:'frustration',pl:'frustracja'},{en:'gratitude',pl:'wdzięczność'},
    {en:'confusion',pl:'dezorientacja/zagubienie'},{en:'embarrassment',pl:'zakłopotanie'},
    {en:'lonely',pl:'samotny'},{en:'cheerful',pl:'radosny/wesoły'},{en:'grumpy',pl:'zrzędliwy'},
    {en:'shy',pl:'nieśmiały'},{en:'brave',pl:'odważny'},{en:'thoughtful',pl:'zamyślony/troskliwy'},
    {en:'surprise',pl:'zaskoczenie'},
  ]},
  { name: 'Zakupy', icon: '🛍️', words: [
    {en:'shop',pl:'sklep'},{en:'market',pl:'rynek/targ'},{en:'supermarket',pl:'supermarket'},
    {en:'shopping centre',pl:'centrum handlowe'},{en:'cashier',pl:'kasjer/kasjerka'},
    {en:'price',pl:'cena'},{en:'discount',pl:'rabat/zniżka'},{en:'sale',pl:'wyprzedaż'},
    {en:'receipt',pl:'paragon'},{en:'change',pl:'reszta'},{en:'cash',pl:'gotówka'},
    {en:'credit card',pl:'karta kredytowa'},{en:'queue',pl:'kolejka'},{en:'basket',pl:'koszyk'},
    {en:'trolley',pl:'wózek sklepowy'},{en:'bag',pl:'torba'},{en:'buy',pl:'kupować'},
    {en:'sell',pl:'sprzedawać'},{en:'pay',pl:'płacić'},{en:'spend',pl:'wydawać pieniądze'},
    {en:'save',pl:'oszczędzać'},{en:'afford',pl:'móc sobie pozwolić'},
    {en:'expensive',pl:'drogi'},{en:'cheap',pl:'tani'},{en:'free',pl:'darmowy/bezpłatny'},
    {en:'size',pl:'rozmiar'},{en:'colour',pl:'kolor'},{en:'brand',pl:'marka'},
    {en:'quality',pl:'jakość'},{en:'exchange',pl:'wymienić/wymiana'},{en:'refund',pl:'zwrot pieniędzy'},
    {en:'fitting room',pl:'przymierzalnia'},{en:'shelf',pl:'półka'},{en:'product',pl:'produkt'},
    {en:'offer',pl:'oferta'},{en:'voucher',pl:'kupon/bon'},{en:'delivery',pl:'dostawa'},
    {en:'online shopping',pl:'zakupy online'},{en:'checkout',pl:'kasa/finalizacja zakupu'},
    {en:'loyalty card',pl:'karta stałego klienta'},
  ]},
  { name: 'Zwierzęta domowe', icon: '🐾', words: [
    {en:'dog',pl:'pies'},{en:'cat',pl:'kot'},{en:'rabbit',pl:'królik'},
    {en:'hamster',pl:'chomik'},{en:'guinea pig',pl:'świnka morska'},{en:'parrot',pl:'papuga'},
    {en:'goldfish',pl:'złota rybka'},{en:'turtle',pl:'żółw'},{en:'lizard',pl:'jaszczurka'},
    {en:'snake',pl:'wąż'},{en:'mouse',pl:'mysz'},{en:'rat',pl:'szczur'},
    {en:'canary',pl:'kanarek'},{en:'budgerigar',pl:'papużka falista'},{en:'horse',pl:'koń'},
    {en:'pony',pl:'kucyk'},{en:'ferret',pl:'fretka'},{en:'hedgehog',pl:'jeż'},
    {en:'chinchilla',pl:'szynszyla'},{en:'gecko',pl:'gekon'},{en:'puppy',pl:'szczeniak'},
    {en:'kitten',pl:'kociak'},{en:'paw',pl:'łapa'},{en:'tail',pl:'ogon'},
    {en:'fur',pl:'sierść/futro'},{en:'feather',pl:'pióro'},{en:'beak',pl:'dziób'},
    {en:'cage',pl:'klatka'},{en:'lead',pl:'smycz'},{en:'collar',pl:'obroża'},
    {en:'bowl',pl:'miska'},{en:'vet',pl:'weterynarz'},{en:'vaccination',pl:'szczepienie'},
    {en:'walk',pl:'spacer'},{en:'cuddle',pl:'przytulać/pieszczoty'},{en:'bark',pl:'szczekać/szczekanie'},
    {en:'meow',pl:'miauczeć/miauczenie'},{en:'purr',pl:'mruczeć/mruczenie'},
    {en:'breed',pl:'rasa'},{en:'litter',pl:'miot/ściółka'},
  ]},

  { name: 'Dzikie zwierzęta', icon: '🦁', words: [
    {en:'lion',pl:'lew'},{en:'tiger',pl:'tygrys'},
    {en:'elephant',pl:'słoń'},{en:'giraffe',pl:'żyrafa'},
    {en:'zebra',pl:'zebra'},{en:'hippo',pl:'hipopotam'},
    {en:'rhino',pl:'nosorożec'},{en:'gorilla',pl:'goryla'},
    {en:'monkey',pl:'małpa'},{en:'snake',pl:'wąż'},
    {en:'crocodile',pl:'krokodyl'},{en:'dolphin',pl:'delfin'},
    {en:'whale',pl:'wieloryb'},{en:'shark',pl:'rekin'},
    {en:'penguin',pl:'pingwin'},{en:'polar bear',pl:'niedźwiedź polarny'},
    {en:'panda',pl:'panda'},{en:'wolf',pl:'wilk'},
    {en:'fox',pl:'lis'},{en:'deer',pl:'jeleń'},
    {en:'eagle',pl:'orzeł'},{en:'owl',pl:'sowa'},
    {en:'parrot',pl:'papuga'},{en:'flamingo',pl:'flaming'},
    {en:'kangaroo',pl:'kangur'},{en:'koala',pl:'koala'},
    {en:'cheetah',pl:'gepard'},{en:'leopard',pl:'lampart'},
    {en:'peacock',pl:'paw'},{en:'octopus',pl:'ośmiornica'},
    {en:'jellyfish',pl:'meduza'},{en:'turtle',pl:'żółw'},
    {en:'bat',pl:'nietoperz'},{en:'hedgehog',pl:'jeż'},
    {en:'squirrel',pl:'wiewiórka'},{en:'butterfly',pl:'motyl'},
    {en:'bee',pl:'pszczoła'},{en:'ant',pl:'mrówka'},
    {en:'spider',pl:'pająk'},{en:'dinosaur',pl:'dinozaur'},
  ]},

  { name: 'Technologia i internet', icon: '📱', words: [
    {en:'phone',pl:'telefon'},{en:'laptop',pl:'laptop'},
    {en:'tablet',pl:'tablet'},{en:'screen',pl:'ekran'},
    {en:'keyboard',pl:'klawiatura'},{en:'app',pl:'aplikacja'},
    {en:'internet',pl:'internet'},{en:'website',pl:'strona internetowa'},
    {en:'download',pl:'pobierać'},{en:'upload',pl:'przesyłać'},
    {en:'search',pl:'szukać'},{en:'password',pl:'hasło'},
    {en:'username',pl:'nazwa użytkownika'},{en:'email',pl:'e-mail'},
    {en:'message',pl:'wiadomość'},{en:'photo',pl:'zdjęcie'},
    {en:'video',pl:'wideo'},{en:'game',pl:'gra'},
    {en:'player',pl:'gracz'},{en:'level',pl:'poziom'},
    {en:'score',pl:'wynik / punkty'},{en:'charge',pl:'ładować (baterię)'},
    {en:'battery',pl:'bateria'},{en:'wifi',pl:'wifi'},
    {en:'post',pl:'publikować / post'},{en:'follow',pl:'obserwować'},
    {en:'like',pl:'lubić / polubić'},{en:'share',pl:'udostępniać'},
    {en:'comment',pl:'komentarz / komentować'},{en:'stream',pl:'streamować'},
    {en:'headphones',pl:'słuchawki'},{en:'speaker',pl:'głośnik'},
    {en:'camera',pl:'kamera / aparat'},{en:'selfie',pl:'selfie'},
    {en:'screenshot',pl:'zrzut ekranu'},{en:'emoji',pl:'emoji'},
    {en:'notification',pl:'powiadomienie'},{en:'social media',pl:'media społecznościowe'},
    {en:'channel',pl:'kanał'},{en:'subscribe',pl:'subskrybować'},
  ]},

  { name: 'Sport i aktywność', icon: '⚽', words: [
    {en:'football',pl:'piłka nożna'},{en:'basketball',pl:'koszykówka'},
    {en:'volleyball',pl:'siatkówka'},{en:'tennis',pl:'tenis'},
    {en:'swimming',pl:'pływanie'},{en:'running',pl:'bieganie'},
    {en:'cycling',pl:'jazda na rowerze'},{en:'gymnastics',pl:'gimnastyka'},
    {en:'skating',pl:'łyżwiarstwo / jazda na rolkach'},{en:'skiing',pl:'narciarstwo'},
    {en:'dancing',pl:'taniec'},{en:'team',pl:'drużyna'},
    {en:'player',pl:'gracz / zawodnik'},{en:'coach',pl:'trener'},
    {en:'match',pl:'mecz'},{en:'tournament',pl:'turniej'},
    {en:'champion',pl:'mistrz'},{en:'win',pl:'wygrywać'},
    {en:'lose',pl:'przegrywać'},{en:'draw',pl:'remis / remisować'},
    {en:'score',pl:'strzelać gola / wynik'},{en:'goal',pl:'gol / bramka'},
    {en:'referee',pl:'sędzia'},{en:'stadium',pl:'stadion'},
    {en:'gym',pl:'siłownia / sala gimnastyczna'},{en:'training',pl:'trening'},
    {en:'warm up',pl:'rozgrzewać się'},{en:'competition',pl:'zawody / rywalizacja'},
    {en:'medal',pl:'medal'},{en:'trophy',pl:'trofeum / puchar'},
    {en:'record',pl:'rekord'},{en:'speed',pl:'szybkość / prędkość'},
    {en:'strength',pl:'siła'},{en:'fitness',pl:'kondycja / sprawność'},
    {en:'injury',pl:'kontuzja / uraz'},{en:'foul',pl:'faul'},
    {en:'penalty',pl:'rzut karny / kara'},{en:'athletics',pl:'lekkoatletyka'},
    {en:'yoga',pl:'joga'},{en:'martial arts',pl:'sztuki walki'},
  ]},

  { name: 'Przyroda i pogoda', icon: '🌿', words: [
    {en:'weather',pl:'pogoda'},{en:'sunny',pl:'słoneczny'},
    {en:'cloudy',pl:'pochmurny'},{en:'rainy',pl:'deszczowy'},
    {en:'windy',pl:'wietrzny'},{en:'snowy',pl:'śnieżny'},
    {en:'storm',pl:'burza'},{en:'rainbow',pl:'tęcza'},
    {en:'temperature',pl:'temperatura'},{en:'hot',pl:'gorący'},
    {en:'cold',pl:'zimno'},{en:'warm',pl:'ciepły'},
    {en:'cool',pl:'chłodny'},{en:'spring',pl:'wiosna'},
    {en:'summer',pl:'lato'},{en:'autumn',pl:'jesień'},
    {en:'winter',pl:'zima'},{en:'forest',pl:'las'},
    {en:'mountain',pl:'góra'},{en:'river',pl:'rzeka'},
    {en:'lake',pl:'jezioro'},{en:'sea',pl:'morze'},
    {en:'beach',pl:'plaża'},{en:'island',pl:'wyspa'},
    {en:'desert',pl:'pustynia'},{en:'jungle',pl:'dżungla'},
    {en:'tree',pl:'drzewo'},{en:'flower',pl:'kwiat'},
    {en:'rock',pl:'skała'},{en:'waterfall',pl:'wodospad'},
    {en:'cave',pl:'jaskinia'},{en:'volcano',pl:'wulkan'},
    {en:'earthquake',pl:'trzęsienie ziemi'},{en:'flood',pl:'powódź'},
    {en:'environment',pl:'środowisko'},{en:'pollution',pl:'zanieczyszczenie'},
    {en:'recycle',pl:'recyklować'},{en:'nature',pl:'przyroda / natura'},
    {en:'planet',pl:'planeta'},{en:'grass',pl:'trawa'},
  ]},

  { name: 'Miasto i miejsca', icon: '🏙️', words: [
    {en:'city',pl:'miasto'},{en:'town',pl:'miasteczko'},
    {en:'village',pl:'wioska / wieś'},{en:'street',pl:'ulica'},
    {en:'road',pl:'droga'},{en:'bridge',pl:'most'},
    {en:'park',pl:'park'},{en:'hospital',pl:'szpital'},
    {en:'pharmacy',pl:'apteka'},{en:'library',pl:'biblioteka'},
    {en:'cinema',pl:'kino'},{en:'theatre',pl:'teatr'},
    {en:'museum',pl:'muzeum'},{en:'restaurant',pl:'restauracja'},
    {en:'cafe',pl:'kawiarnia'},{en:'supermarket',pl:'supermarket'},
    {en:'bank',pl:'bank'},{en:'post office',pl:'poczta'},
    {en:'police station',pl:'posterunek policji'},{en:'fire station',pl:'straż pożarna'},
    {en:'airport',pl:'lotnisko'},{en:'train station',pl:'dworzec kolejowy'},
    {en:'bus stop',pl:'przystanek autobusowy'},{en:'hotel',pl:'hotel'},
    {en:'market',pl:'targ / rynek'},{en:'church',pl:'kościół'},
    {en:'castle',pl:'zamek'},{en:'tower',pl:'wieża'},
    {en:'square',pl:'plac'},{en:'fountain',pl:'fontanna'},
    {en:'statue',pl:'posąg / rzeźba'},{en:'monument',pl:'pomnik'},
    {en:'zoo',pl:'zoo'},{en:'swimming pool',pl:'basen'},
    {en:'playground',pl:'plac zabaw'},{en:'car park',pl:'parking'},
    {en:'neighbourhood',pl:'okolica / dzielnica'},{en:'suburbs',pl:'przedmieścia'},
    {en:'centre',pl:'centrum'},{en:'skyscraper',pl:'wieżowiec'},
  ]},

  { name: 'Wygląd i charakter', icon: '💭', words: [
    {en:'tall',pl:'wysoki'},{en:'short',pl:'niski / mały'},
    {en:'thin',pl:'chudy / szczupły'},{en:'curly hair',pl:'kręcone włosy'},
    {en:'straight hair',pl:'proste włosy'},{en:'blonde',pl:'blondyn / blondynka'},
    {en:'brunette',pl:'brunetka / brunet'},{en:'red-haired',pl:'rudy / ruda'},
    {en:'bald',pl:'łysy'},{en:'beard',pl:'broda'},
    {en:'glasses',pl:'okulary'},{en:'funny',pl:'śmieszny / dowcipny'},
    {en:'kind',pl:'miły / uprzejmy'},{en:'mean',pl:'złośliwy / nieprzyjemny'},
    {en:'brave',pl:'odważny'},{en:'shy',pl:'nieśmiały'},
    {en:'clever',pl:'mądry / bystry'},{en:'lazy',pl:'leniwy'},
    {en:'hardworking',pl:'pracowity'},{en:'honest',pl:'uczciwy'},
    {en:'selfish',pl:'samolubny'},{en:'generous',pl:'hojny / szczodry'},
    {en:'patient',pl:'cierpliwy'},{en:'impatient',pl:'niecierpliwy'},
    {en:'polite',pl:'grzeczny / uprzejmy'},{en:'rude',pl:'niegrzeczny'},
    {en:'cheerful',pl:'wesoły / radosny'},{en:'serious',pl:'poważny'},
    {en:'creative',pl:'kreatywny'},{en:'sporty',pl:'sportowy'},
    {en:'friendly',pl:'przyjazny / miły'},{en:'popular',pl:'popularny'},
    {en:'quiet',pl:'cichy / spokojny'},{en:'noisy',pl:'hałaśliwy / głośny'},
    {en:'beautiful',pl:'piękny / piękna'},{en:'handsome',pl:'przystojny'},
    {en:'young',pl:'młody'},{en:'old',pl:'stary'},
    {en:'confident',pl:'pewny siebie'},{en:'talented',pl:'utalentowany'},
  ]},

  { name: 'Rozrywka i kultura', icon: '🎬', words: [
    {en:'movie',pl:'film'},{en:'cartoon',pl:'kreskówka / animacja'},
    {en:'series',pl:'serial'},{en:'episode',pl:'odcinek'},
    {en:'actor',pl:'aktor'},{en:'actress',pl:'aktorka'},
    {en:'director',pl:'reżyser'},{en:'character',pl:'postać / charakter'},
    {en:'hero',pl:'bohater'},{en:'villain',pl:'złoczyńca'},
    {en:'plot',pl:'fabuła'},{en:'scene',pl:'scena'},
    {en:'music',pl:'muzyka'},{en:'song',pl:'piosenka'},
    {en:'singer',pl:'piosenkarz / piosenkarka'},{en:'band',pl:'zespół / kapela'},
    {en:'concert',pl:'koncert'},{en:'album',pl:'album'},
    {en:'hit',pl:'przebój'},{en:'guitar',pl:'gitara'},
    {en:'drums',pl:'perkusja / bębny'},{en:'piano',pl:'pianino / fortepian'},
    {en:'book',pl:'książka'},{en:'novel',pl:'powieść'},
    {en:'comic',pl:'komiks'},{en:'magazine',pl:'magazyn / czasopismo'},
    {en:'festival',pl:'festiwal'},{en:'audience',pl:'publiczność / widownia'},
    {en:'talent',pl:'talent'},{en:'celebrity',pl:'celebryta / sławna osoba'},
    {en:'fan',pl:'fan / kibic'},{en:'channel',pl:'kanał'},
    {en:'review',pl:'recenzja / opinia'},{en:'entertainment',pl:'rozrywka'},
    {en:'animation',pl:'animacja'},{en:'stage',pl:'scena (teatr)'},
    {en:'performance',pl:'występ / przedstawienie'},{en:'ticket',pl:'bilet'},
    {en:'poster',pl:'plakat'},{en:'trailer',pl:'zwiastun'},
  ]},

  { name: 'Kraje i języki', icon: '🌍', words: [
    {en:'country',pl:'kraj'},{en:'capital',pl:'stolica'},
    {en:'continent',pl:'kontynent'},{en:'Europe',pl:'Europa'},
    {en:'Asia',pl:'Azja'},{en:'Africa',pl:'Afryka'},
    {en:'America',pl:'Ameryka'},{en:'Australia',pl:'Australia'},
    {en:'Poland',pl:'Polska'},{en:'England',pl:'Anglia'},
    {en:'Germany',pl:'Niemcy'},{en:'France',pl:'Francja'},
    {en:'Spain',pl:'Hiszpania'},{en:'Italy',pl:'Włochy'},
    {en:'USA',pl:'USA / Stany Zjednoczone'},{en:'Russia',pl:'Rosja'},
    {en:'China',pl:'Chiny'},{en:'Japan',pl:'Japonia'},
    {en:'Brazil',pl:'Brazylia'},{en:'Mexico',pl:'Meksyk'},
    {en:'language',pl:'język'},{en:'English',pl:'angielski'},
    {en:'Spanish',pl:'hiszpański'},{en:'French',pl:'francuski'},
    {en:'German',pl:'niemiecki'},{en:'Italian',pl:'włoski'},
    {en:'passport',pl:'paszport'},{en:'border',pl:'granica'},
    {en:'tourist',pl:'turysta'},{en:'nationality',pl:'narodowość'},
    {en:'flag',pl:'flaga'},{en:'map',pl:'mapa'},
    {en:'culture',pl:'kultura'},{en:'tradition',pl:'tradycja'},
    {en:'celebrate',pl:'świętować'},{en:'currency',pl:'waluta'},
    {en:'population',pl:'ludność / populacja'},{en:'north',pl:'północ'},
    {en:'south',pl:'południe'},{en:'east',pl:'wschód'},
  ]},

  { name: 'Restauracja i jedzenie na mieście', icon: '🍕', words: [
    {en:'hungry',pl:'głodny'},{en:'thirsty',pl:'spragniony'},
    {en:'menu',pl:'menu / jadłospis'},{en:'order',pl:'zamawiać / zamówienie'},
    {en:'waiter',pl:'kelner'},{en:'bill',pl:'rachunek'},
    {en:'tip',pl:'napiwek'},{en:'reservation',pl:'rezerwacja'},
    {en:'starter',pl:'przystawka'},{en:'main course',pl:'danie główne'},
    {en:'dessert',pl:'deser'},{en:'portion',pl:'porcja'},
    {en:'spicy',pl:'pikantny / ostry'},{en:'sweet',pl:'słodki'},
    {en:'sour',pl:'kwaśny'},{en:'salty',pl:'słony'},
    {en:'bitter',pl:'gorzki'},{en:'delicious',pl:'pyszny'},
    {en:'disgusting',pl:'obrzydliwy'},{en:'vegetarian',pl:'wegetariański'},
    {en:'pizza',pl:'pizza'},{en:'burger',pl:'burger'},
    {en:'sandwich',pl:'kanapka / sandwich'},{en:'chips',pl:'frytki'},
    {en:'salad',pl:'sałatka'},{en:'soup',pl:'zupa'},
    {en:'pasta',pl:'makaron / pasta'},{en:'sushi',pl:'sushi'},
    {en:'ice cream',pl:'lody'},{en:'cake',pl:'ciasto / tort'},
    {en:'chocolate',pl:'czekolada'},{en:'juice',pl:'sok'},
    {en:'smoothie',pl:'koktajl / smoothie'},{en:'takeaway',pl:'na wynos'},
    {en:'delivery',pl:'dostawa'},{en:'recipe',pl:'przepis'},
    {en:'ingredients',pl:'składniki'},{en:'cook',pl:'gotować / kucharz'},
    {en:'chef',pl:'szef kuchni'},{en:'taste',pl:'smak / próbować'},
  ]},

  { name: 'Czas wolny i hobby', icon: '🎯', words: [
    {en:'read',pl:'czytać'},{en:'draw',pl:'rysować'},
    {en:'paint',pl:'malować'},{en:'sing',pl:'śpiewać'},
    {en:'dance',pl:'tańczyć'},{en:'climb',pl:'wspinać się'},
    {en:'ride',pl:'jeździć (na rowerze/koniu)'},{en:'travel',pl:'podróżować'},
    {en:'explore',pl:'odkrywać / eksplorować'},{en:'collect',pl:'zbierać / kolekcjonować'},
    {en:'build',pl:'budować'},{en:'create',pl:'tworzyć'},
    {en:'design',pl:'projektować'},{en:'photograph',pl:'fotografować'},
    {en:'film',pl:'kręcić film / filmować'},{en:'bake',pl:'piec'},
    {en:'garden',pl:'uprawiać ogród'},{en:'volunteer',pl:'wolontariusz / pomagać'},
    {en:'help',pl:'pomagać'},{en:'practice',pl:'ćwiczyć / praktykować'},
    {en:'compete',pl:'rywalizować'},{en:'perform',pl:'występować'},
    {en:'invent',pl:'wynajdywać / wymyślać'},{en:'visit',pl:'odwiedzać'},
    {en:'meet',pl:'spotykać'},{en:'chat',pl:'rozmawiać / czatować'},
    {en:'hang out',pl:'spędzać czas ze znajomymi'},{en:'relax',pl:'relaksować się'},
    {en:'dream',pl:'marzyć / śnić'},{en:'imagine',pl:'wyobrażać sobie'},
    {en:'wonder',pl:'zastanawiać się / ciekawić'},{en:'experience',pl:'doświadczać'},
    {en:'adventure',pl:'przygoda'},{en:'challenge',pl:'wyzwanie'},
    {en:'achievement',pl:'osiągnięcie'},{en:'goal',pl:'cel'},
    {en:'plan',pl:'planować / plan'},{en:'enjoy',pl:'lubić / cieszyć się'},
    {en:'inspire',pl:'inspirować'},{en:'discover',pl:'odkrywać'},
  ]},
];

function seedDefaultSets() {
  if ((DB.get('defaultSetsVersion') || 0) >= DEFAULT_SETS_VERSION) return;
  const existing = getSets();
  const existingNames = new Set(existing.map(s => s.name));
  const toAdd = DEFAULT_SETS_DATA
    .filter(s => !existingNames.has(s.name))
    .map(s => ({
      id: uid(),
      name: s.name,
      icon: s.icon,
      words: s.words.map(w => ({ id: uid(), en: w.en, pl: w.pl })),
      results: [],
      createdAt: today(),
      lastUsed: 0,
    }));
  if (toAdd.length) saveSets([...toAdd, ...existing]);
  DB.set('defaultSetsVersion', DEFAULT_SETS_VERSION);
}

// ===== INIT =====
seedDefaultSets();
showView('home');
