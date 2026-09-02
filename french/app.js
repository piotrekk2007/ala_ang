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
    id: 'alien', icon: '👽', title: 'Rozmowa z kosmitą uczącym się francuskiego',
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
    { title: 'Ma famille', minWords: 40, requirements: [
      'Napisz minimum 40 słów.',
      'Powiedz, ile osób jest w Twojej rodzinie.',
      'Opisz, kim są (maman, papa, frère, sœur...) i ile mają lat.',
      'Napisz, co lubią robić.',
    ]},
    { title: 'Mon animal préféré', minWords: 40, requirements: [
      'Napisz minimum 40 słów.',
      'Napisz, jakie to zwierzę i jak wygląda.',
      'Opisz, gdzie mieszka.',
      'Napisz, co je i dlaczego je lubisz.',
    ]},
    { title: 'Ma journée', minWords: 40, requirements: [
      'Napisz minimum 40 słów.',
      'Opisz swój typowy dzień od rana do wieczora.',
      'Użyj czasu teraźniejszego (présent).',
    ]},
    { title: 'Ma chambre', minWords: 40, requirements: [
      'Napisz minimum 40 słów.',
      'Opisz, jakie meble i przedmioty są w Twoim pokoju.',
      'Napisz, gdzie się znajdują (użyj słów typu "à côté de", "sur", "sous").',
    ]},
    { title: 'Mon plat préféré', minWords: 40, requirements: [
      'Napisz minimum 40 słów.',
      'Napisz, jakie jedzenie lubisz najbardziej i dlaczego.',
      'Opisz, kiedy je jesz.',
    ]},
  ],
  A2: [
    { title: 'Mes dernières vacances', minWords: 70, requirements: [
      'Napisz minimum 70 słów.',
      'Opisz, gdzie byłeś na ostatnich wakacjach i z kim.',
      'Napisz, co robiłeś każdego dnia.',
      'Użyj czasu przeszłego (passé composé).',
    ]},
    { title: 'Mon meilleur ami / Ma meilleure amie', minWords: 70, requirements: [
      'Napisz minimum 70 słów.',
      'Opisz wygląd i charakter swojego najlepszego przyjaciela.',
      'Napisz, co razem lubicie robić.',
    ]},
    { title: 'Mon passe-temps', minWords: 70, requirements: [
      'Napisz minimum 70 słów.',
      'Napisz, jakie masz hobby i od kiedy je uprawiasz.',
      'Wyjaśnij, dlaczego je lubisz.',
    ]},
    { title: "Un jour que je n'oublierai jamais", minWords: 70, requirements: [
      'Napisz minimum 70 słów.',
      'Opisz konkretny dzień, który dobrze zapamiętałeś.',
      'Wyjaśnij, dlaczego był wyjątkowy.',
      'Użyj czasu przeszłego (passé composé).',
    ]},
    { title: 'Ma maison de rêve', minWords: 70, requirements: [
      'Napisz minimum 70 słów.',
      'Opisz, jak wyglądałby Twój wymarzony dom.',
      'Napisz, gdzie by stał i co by w nim było.',
    ]},
  ],
  B1: [
    { title: 'Les avantages et les inconvénients des réseaux sociaux', minWords: 120, requirements: [
      'Napisz minimum 120 słów.',
      'Podaj przynajmniej dwie zalety i dwie wady mediów społecznościowych.',
      'Zakończ własną opinią.',
    ]},
    { title: "Mes projets d'avenir", minWords: 120, requirements: [
      'Napisz minimum 120 słów.',
      'Opisz swoje plany dotyczące szkoły, pracy i marzeń.',
      'Użyj konstrukcji czasu przyszłego (futur simple).',
    ]},
    { title: 'Un livre ou un film qui a changé ma façon de penser', minWords: 120, requirements: [
      'Napisz minimum 120 słów.',
      'Opisz krótko, o czym była książka/film.',
      'Wyjaśnij, jak wpłynęła na Twoje myślenie.',
    ]},
    { title: 'Les élèves devraient-ils avoir des devoirs ?', minWords: 120, requirements: [
      'Napisz minimum 120 słów.',
      'Przedstaw argumenty za i przeciw.',
      'Zakończ własną opinią.',
    ]},
    { title: "L'endroit le plus intéressant que j'ai visité", minWords: 120, requirements: [
      'Napisz minimum 120 słów.',
      'Opisz miejsce i to, co widziałeś/robiłeś.',
      'Wyjaśnij, dlaczego było interesujące.',
    ]},
  ],
  B2: [
    { title: 'La technologie nous rend-elle moins sociables ?', minWords: 180, requirements: [
      'Napisz minimum 180 słów.',
      'Przedstaw argumenty za i przeciw tej tezie.',
      "Użyj słów łączących (cependant, de plus, d'autre part).",
      'Zakończ jasnym wnioskiem.',
    ]},
    { title: "L'importance d'apprendre des langues étrangères", minWords: 180, requirements: [
      'Napisz minimum 180 słów.',
      'Wyjaśnij, dlaczego nauka języków obcych jest ważna.',
      'Podaj konkretne przykłady/argumenty.',
    ]},
    { title: 'Faut-il interdire les téléphones portables à l’école ?', minWords: 180, requirements: [
      'Napisz minimum 180 słów.',
      'Przedstaw argumenty obu stron.',
      'Zakończ własnym, uzasadnionym stanowiskiem.',
    ]},
    { title: 'Mon modèle', minWords: 180, requirements: [
      'Napisz minimum 180 słów.',
      'Opisz osobę, która Cię inspiruje.',
      'Podaj konkretne przykłady jej osiągnięć lub cech.',
    ]},
    { title: 'Vivre dans une grande ville ou dans une petite ville', minWords: 180, requirements: [
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
    { emoji: '🔴', en: 'rouge', pl: 'czerwony' },
    { emoji: '🟠', en: 'orange', pl: 'pomarańczowy' },
    { emoji: '🟡', en: 'jaune', pl: 'żółty' },
    { emoji: '🟢', en: 'vert', pl: 'zielony' },
    { emoji: '🔵', en: 'bleu', pl: 'niebieski' },
    { emoji: '🟣', en: 'violet', pl: 'fioletowy' },
    { emoji: '⚫', en: 'noir', pl: 'czarny' },
    { emoji: '⚪', en: 'blanc', pl: 'biały' },
    { emoji: '🟤', en: 'marron', pl: 'brązowy' },
    { emoji: '🩷', en: 'rose', pl: 'różowy' },
  ]},
  { id: 'animals', icon: '🐾', title: 'Zwierzątka', words: [
    { emoji: '🐶', en: 'chien', pl: 'pies' },
    { emoji: '🐱', en: 'chat', pl: 'kot' },
    { emoji: '🐰', en: 'lapin', pl: 'królik' },
    { emoji: '🐻', en: 'ours', pl: 'miś' },
    { emoji: '🦁', en: 'lion', pl: 'lew' },
    { emoji: '🐘', en: 'éléphant', pl: 'słoń' },
    { emoji: '🐸', en: 'grenouille', pl: 'żaba' },
    { emoji: '🐦', en: 'oiseau', pl: 'ptak' },
    { emoji: '🐟', en: 'poisson', pl: 'ryba' },
    { emoji: '🐴', en: 'cheval', pl: 'koń' },
  ]},
  { id: 'numbers', icon: '🔢', title: 'Liczby', words: [
    { emoji: '1️⃣', en: 'un', pl: 'jeden' },
    { emoji: '2️⃣', en: 'deux', pl: 'dwa' },
    { emoji: '3️⃣', en: 'trois', pl: 'trzy' },
    { emoji: '4️⃣', en: 'quatre', pl: 'cztery' },
    { emoji: '5️⃣', en: 'cinq', pl: 'pięć' },
    { emoji: '6️⃣', en: 'six', pl: 'sześć' },
    { emoji: '7️⃣', en: 'sept', pl: 'siedem' },
    { emoji: '8️⃣', en: 'huit', pl: 'osiem' },
    { emoji: '9️⃣', en: 'neuf', pl: 'dziewięć' },
    { emoji: '🔟', en: 'dix', pl: 'dziesięć' },
  ]},
  { id: 'family', icon: '👪', title: 'Rodzina', words: [
    { emoji: '👩', en: 'maman', pl: 'mama' },
    { emoji: '👨', en: 'papa', pl: 'tata' },
    { emoji: '👧', en: 'sœur', pl: 'siostra' },
    { emoji: '👦', en: 'frère', pl: 'brat' },
    { emoji: '👵', en: 'mamie', pl: 'babcia' },
    { emoji: '👴', en: 'papi', pl: 'dziadek' },
    { emoji: '👶', en: 'bébé', pl: 'dziecko' },
    { emoji: '👪', en: 'famille', pl: 'rodzina' },
  ]},
  { id: 'food', icon: '🍎', title: 'Jedzenie', words: [
    { emoji: '🍎', en: 'pomme', pl: 'jabłko' },
    { emoji: '🍌', en: 'banane', pl: 'banan' },
    { emoji: '🍕', en: 'pizza', pl: 'pizza' },
    { emoji: '🍦', en: 'glace', pl: 'lody' },
    { emoji: '🍪', en: 'biscuit', pl: 'ciasteczko' },
    { emoji: '🥛', en: 'lait', pl: 'mleko' },
    { emoji: '🍞', en: 'pain', pl: 'chleb' },
    { emoji: '🧀', en: 'fromage', pl: 'ser' },
    { emoji: '🍇', en: 'raisin', pl: 'winogrona' },
    { emoji: '🍓', en: 'fraise', pl: 'truskawka' },
  ]},
  { id: 'clothes', icon: '👕', title: 'Ubrania', words: [
    { emoji: '👕', en: 't-shirt', pl: 'koszulka' },
    { emoji: '👖', en: 'pantalon', pl: 'spodnie' },
    { emoji: '👗', en: 'robe', pl: 'sukienka' },
    { emoji: '🧦', en: 'chaussettes', pl: 'skarpetki' },
    { emoji: '👟', en: 'chaussures', pl: 'buty' },
    { emoji: '🧢', en: 'casquette', pl: 'czapka' },
    { emoji: '🧥', en: 'veste', pl: 'kurtka' },
    { emoji: '🧤', en: 'gants', pl: 'rękawiczki' },
  ]},
  { id: 'toys', icon: '🧸', title: 'Zabawki', words: [
    { emoji: '⚽', en: 'balle', pl: 'piłka' },
    { emoji: '🧸', en: 'ours en peluche', pl: 'miś' },
    { emoji: '🪁', en: 'cerf-volant', pl: 'latawiec' },
    { emoji: '🎈', en: 'ballon', pl: 'balon' },
    { emoji: '🧩', en: 'puzzle', pl: 'puzzle' },
    { emoji: '🧱', en: 'cubes', pl: 'klocki' },
    { emoji: '🥁', en: 'tambour', pl: 'bębenek' },
    { emoji: '🤖', en: 'robot', pl: 'robot' },
  ]},
  { id: 'vehicles', icon: '🚗', title: 'Pojazdy', words: [
    { emoji: '🚗', en: 'voiture', pl: 'samochód' },
    { emoji: '🚌', en: 'bus', pl: 'autobus' },
    { emoji: '🚂', en: 'train', pl: 'pociąg' },
    { emoji: '✈️', en: 'avion', pl: 'samolot' },
    { emoji: '🚲', en: 'vélo', pl: 'rower' },
    { emoji: '🚁', en: 'hélicoptère', pl: 'helikopter' },
    { emoji: '🚤', en: 'bateau', pl: 'łódka' },
    { emoji: '🚚', en: 'camion', pl: 'ciężarówka' },
  ]},
  { id: 'emotions', icon: '😀', title: 'Emocje', words: [
    { emoji: '😀', en: 'content', pl: 'wesoły' },
    { emoji: '😢', en: 'triste', pl: 'smutny' },
    { emoji: '😠', en: 'fâché', pl: 'zły' },
    { emoji: '😴', en: 'fatigué', pl: 'śpiący' },
    { emoji: '😲', en: 'surpris', pl: 'zaskoczony' },
    { emoji: '😨', en: 'effrayé', pl: 'przestraszony' },
    { emoji: '🤩', en: 'excité', pl: 'podekscytowany' },
    { emoji: '😳', en: 'timide', pl: 'nieśmiały' },
  ]},
];

const KIDS_SENTENCE_CATEGORIES = [
  { id: 'general', icon: '👋', title: 'Ogólne', sentences: [
    { emoji: '👋', en: 'Bonjour !', pl: 'Cześć!' },
    { emoji: '🚪', en: 'Au revoir !', pl: 'Do widzenia!' },
    { emoji: '🤲', en: "S'il te plaît.", pl: 'Proszę.' },
    { emoji: '🙏', en: 'Merci !', pl: 'Dziękuję!' },
    { emoji: '🙋', en: "Je m'appelle Ala.", pl: 'Mam na imię Ala.' },
    { emoji: '❓', en: 'Comment ça va ?', pl: 'Jak się masz?' },
    { emoji: '😊', en: 'Je vais bien.', pl: 'Czuję się dobrze.' },
    { emoji: '✅', en: 'Oui.', pl: 'Tak.' },
    { emoji: '❌', en: 'Non.', pl: 'Nie.' },
    { emoji: '👍', en: 'Bravo !', pl: 'Dobra robota!' },
  ]},
  { id: 'home', icon: '🏠', title: 'W domu', sentences: [
    { emoji: '🛏️', en: 'C\'est ma chambre.', pl: 'To jest mój pokój.' },
    { emoji: '🍽️', en: "J'ai faim.", pl: 'Jestem głodny.' },
    { emoji: '💧', en: "Je veux de l'eau.", pl: 'Chcę wodę.' },
    { emoji: '👩', en: 'Où est maman ?', pl: 'Gdzie jest mama?' },
    { emoji: '😴', en: 'Je suis fatigué.', pl: 'Jestem zmęczony.' },
    { emoji: '🧸', en: 'Jouons !', pl: 'Pobawmy się!' },
    { emoji: '🌙', en: 'Bonne nuit.', pl: 'Dobranoc.' },
    { emoji: '❤️', en: "Je t'aime.", pl: 'Kocham cię.' },
    { emoji: '🧼', en: 'Lave-toi les mains.', pl: 'Umyj ręce.' },
    { emoji: '🚗', en: "C'est mon jouet.", pl: 'To jest moja zabawka.' },
  ]},
  { id: 'school', icon: '🎒', title: 'W szkole', sentences: [
    { emoji: '👩‍🏫', en: "C'est ma maîtresse.", pl: 'To jest moja pani.' },
    { emoji: '✏️', en: "J'ai un crayon.", pl: 'Mam ołówek.' },
    { emoji: '🚻', en: 'Puis-je aller aux toilettes ?', pl: 'Czy mogę iść do toalety?' },
    { emoji: '🎨', en: "J'aime dessiner.", pl: 'Lubię rysować.' },
    { emoji: '🧑‍🤝‍🧑', en: "C'est mon ami.", pl: 'To jest mój przyjaciel.' },
    { emoji: '🪑', en: "Assieds-toi, s'il te plaît.", pl: 'Usiądź, proszę.' },
    { emoji: '🧍', en: "Lève-toi, s'il te plaît.", pl: 'Wstań, proszę.' },
    { emoji: '🤔', en: 'Je ne comprends pas.', pl: 'Nie rozumiem.' },
    { emoji: '📋', en: 'Regarde le tableau.', pl: 'Popatrz na tablicę.' },
    { emoji: '🔔', en: "C'est l'heure de la récréation.", pl: 'Czas na przerwę.' },
  ]},
  { id: 'trip', icon: '🚌', title: 'Na wycieczce', sentences: [
    { emoji: '🗺️', en: 'Où allons-nous ?', pl: 'Dokąd jedziemy?' },
    { emoji: '🌳', en: 'Je vois un arbre.', pl: 'Widzę drzewo.' },
    { emoji: '🐦', en: "Regarde l'oiseau !", pl: 'Popatrz na ptaka!' },
    { emoji: '😴', en: 'Je suis fatigué.', pl: 'Jestem zmęczony.' },
    { emoji: '🛑', en: 'Pouvons-nous nous arrêter ?', pl: 'Czy możemy się zatrzymać?' },
    { emoji: '😍', en: "C'est beau !", pl: 'Jest piękne!' },
    { emoji: '📸', en: 'Prenons une photo.', pl: 'Zróbmy zdjęcie.' },
    { emoji: '🌊', en: 'Je vois la mer.', pl: 'Widzę morze.' },
    { emoji: '📍', en: 'Nous sommes arrivés !', pl: 'Jesteśmy na miejscu!' },
    { emoji: '⛰️', en: "J'aime les montagnes.", pl: 'Lubię góry.' },
  ]},
  { id: 'restaurant', icon: '🍽️', title: 'W restauracji', sentences: [
    { emoji: '🍽️', en: "J'ai faim.", pl: 'Jestem głodny.' },
    { emoji: '🍕', en: 'Je veux une pizza.', pl: 'Chcę pizzę.' },
    { emoji: '💧', en: "Puis-je avoir de l'eau ?", pl: 'Czy mogę prosić o wodę?' },
    { emoji: '😋', en: "C'est délicieux !", pl: 'To jest pyszne!' },
    { emoji: '🙅', en: 'Non, merci.', pl: 'Nie, dziękuję.' },
    { emoji: '🍦', en: 'Je veux une glace.', pl: 'Chcę lody.' },
    { emoji: '🤤', en: 'Miam !', pl: 'Pycha!' },
    { emoji: '🙂', en: "Je n'ai plus faim.", pl: 'Jestem najedzony.' },
    { emoji: '🙏', en: 'Merci pour le repas.', pl: 'Dziękuję za jedzenie.' },
    { emoji: '🍴', en: 'Puis-je avoir une fourchette ?', pl: 'Czy mogę prosić widelec?' },
  ]},
  { id: 'playground', icon: '🛝', title: 'Na placu zabaw', sentences: [
    { emoji: '🎉', en: 'Jouons !', pl: 'Pobawmy się!' },
    { emoji: '🙋', en: 'Puis-je jouer aussi ?', pl: 'Czy mogę się bawić?' },
    { emoji: '🛝', en: "J'aime le toboggan.", pl: 'Lubię zjeżdżalnię.' },
    { emoji: '👀', en: 'Regarde-moi !', pl: 'Popatrz na mnie!' },
    { emoji: '⚠️', en: 'Fais attention !', pl: 'Uważaj!' },
    { emoji: '☝️', en: "C'est mon tour.", pl: 'Teraz moja kolej.' },
    { emoji: '🥇', en: 'Je suis premier !', pl: 'Jestem pierwszy!' },
    { emoji: '🏃', en: 'Courons !', pl: 'Pobiegnijmy!' },
    { emoji: '😀', en: 'Je suis content.', pl: 'Jestem szczęśliwy.' },
    { emoji: '😄', en: "C'était amusant !", pl: 'To było fajne!' },
  ]},
  { id: 'weather', icon: '☀️', title: 'Pogoda', sentences: [
    { emoji: '☀️', en: 'Il fait soleil.', pl: 'Jest słonecznie.' },
    { emoji: '🌧️', en: 'Il pleut.', pl: 'Pada deszcz.' },
    { emoji: '❄️', en: 'Il fait froid.', pl: 'Jest zimno.' },
    { emoji: '🥵', en: 'Il fait chaud.', pl: 'Jest gorąco.' },
    { emoji: '🧥', en: "J'ai besoin d'une veste.", pl: 'Potrzebuję kurtki.' },
    { emoji: '⛄', en: "J'aime la neige.", pl: 'Lubię śnieg.' },
    { emoji: '💨', en: 'Il y a du vent.', pl: 'Jest wietrznie.' },
    { emoji: '🚪', en: 'Allons dehors !', pl: 'Chodźmy na dwór!' },
    { emoji: '😊', en: 'C\'est une belle journée.', pl: 'Jest ładny dzień.' },
    { emoji: '🌈', en: 'Je vois un arc-en-ciel.', pl: 'Widzę tęczę.' },
  ]},
  { id: 'birthday', icon: '🎂', title: 'Urodziny', sentences: [
    { emoji: '🎂', en: 'Joyeux anniversaire !', pl: 'Wszystkiego najlepszego!' },
    { emoji: '🎁', en: "J'ai un cadeau.", pl: 'Mam prezent.' },
    { emoji: '🎵', en: 'Chantons !', pl: 'Zaśpiewajmy!' },
    { emoji: '🍰', en: 'Je veux du gâteau.', pl: 'Chcę tort.' },
    { emoji: '🎉', en: "C'est amusant !", pl: 'To jest fajne!' },
    { emoji: '🙏', en: "Merci d'être venue.", pl: 'Dziękuję, że przyszłaś.' },
    { emoji: '🕯️', en: 'Soufflons les bougies.', pl: 'Zdmuchnijmy świeczki.' },
    { emoji: '🎈', en: "J'aime les ballons.", pl: 'Lubię balony.' },
    { emoji: '👋', en: 'À bientôt !', pl: 'Do zobaczenia wkrótce!' },
    { emoji: '🥳', en: 'Je suis tellement content !', pl: 'Jestem taki szczęśliwy!' },
  ]},
];

let kidsCategoryId  = null;
let kidsFlashIndex  = 0;
let kidsQuizWord    = null;
let kidsTFCurrent   = null;
let kidsSentenceCategoryId = null;
let kidsSentenceIndex = 0;
let kidsSentenceQuizItem = null;
let kidsStars       = parseInt(localStorage.getItem('fr_kids_stars') || '0', 10);

// ---- Ubierz misia ----
const KIDS_BEAR_CATEGORIES = [
  { id: 'top',       label: 'Góra' },
  { id: 'bottom',    label: 'Dół' },
  { id: 'feet',      label: 'Buty' },
  { id: 'accessory', label: 'Dodatki' },
  { id: 'weather',   label: 'Na pogodę' },
];
const KIDS_BEAR_SLOTS = KIDS_BEAR_CATEGORIES.map(c => c.id);
const KIDS_BEAR_ITEMS = [
  { id: 'tshirt',     emoji: '👕',  en: 't-shirt',              pl: 'koszulka',                  category: 'top' },
  { id: 'jacket',     emoji: '🧥',  en: 'veste',                pl: 'kurtka',                    category: 'top' },
  { id: 'dress',      emoji: '👗',  en: 'robe',                 pl: 'sukienka',                  category: 'top' },
  { id: 'trousers',   emoji: '👖',  en: 'pantalon',             pl: 'spodnie',                   category: 'bottom' },
  { id: 'shorts',     emoji: '🩳',  en: 'short',                pl: 'szorty',                    category: 'bottom' },
  { id: 'shoes',      emoji: '👟',  en: 'chaussures',           pl: 'buty',                      category: 'feet' },
  { id: 'boots',      emoji: '🥾',  en: 'bottes',               pl: 'kozaki',                    category: 'feet' },
  { id: 'sandals',    emoji: '👡',  en: 'sandales',             pl: 'sandałki',                  category: 'feet' },
  { id: 'cap',        emoji: '🧢',  en: 'casquette',            pl: 'czapka',                    category: 'accessory' },
  { id: 'bow',        emoji: '🎀',  en: 'nœud',                 pl: 'kokardka',                  category: 'accessory' },
  { id: 'backpack',   emoji: '🎒',  en: 'sac à dos',            pl: 'plecak',                    category: 'accessory' },
  { id: 'sunglasses', emoji: '🕶️', en: 'lunettes de soleil',   pl: 'okulary przeciwsłoneczne', category: 'weather', weather: 'sunny' },
  { id: 'umbrella',   emoji: '☂️',  en: 'parapluie',            pl: 'parasol',                   category: 'weather', weather: 'rainy' },
  { id: 'scarf',      emoji: '🧣',  en: 'écharpe',              pl: 'szalik',                    category: 'weather', weather: 'snowy' },
];
const KIDS_WEATHER_DATA = {
  sunny: { icon: '☀️', label: 'Słonecznie', en: 'Il fait soleil ! Mets mes lunettes de soleil !', pl: 'Jest słonecznie! Załóż mi okulary!', itemId: 'sunglasses', bg: '#fff7d6' },
  rainy: { icon: '🌧️', label: 'Deszczowo',  en: 'Il pleut ! Donne-moi mon parapluie !',            pl: 'Pada deszcz! Podaj mi parasol!',    itemId: 'umbrella',   bg: '#dbeefb' },
  snowy: { icon: '❄️', label: 'Śnieżnie',   en: 'Il neige ! Mets mon écharpe !',                   pl: 'Pada śnieg! Załóż mi szalik!',      itemId: 'scarf',      bg: '#eef3f7' },
};

let kidsBearOutfit = { top: null, bottom: null, feet: null, accessory: null, weather: null };
let kidsBearMode = 'free'; // 'free' | 'challenge'
let kidsWeather  = null;
let kidsBearDrag = null;

// ---- Znajdź parę ----
let kidsMemoryCards   = [];
let kidsMemoryFirst   = null;
let kidsMemoryMatched = 0;

// ---- Kolorowanka ----
const KIDS_PALETTE = [
  { hex: '#e53935', en: 'rouge', pl: 'czerwony' },
  { hex: '#fb8c00', en: 'orange', pl: 'pomarańczowy' },
  { hex: '#fdd835', en: 'jaune', pl: 'żółty' },
  { hex: '#43a047', en: 'vert', pl: 'zielony' },
  { hex: '#1e88e5', en: 'bleu', pl: 'niebieski' },
  { hex: '#8e24aa', en: 'violet', pl: 'fioletowy' },
  { hex: '#000000', en: 'noir', pl: 'czarny' },
  { hex: '#6d4c41', en: 'marron', pl: 'brązowy' },
  { hex: '#f06292', en: 'rose', pl: 'różowy' },
];
const KIDS_COLORING_REGIONS = {
  apple:  ['apple-body', 'apple-stem', 'apple-leaf-left', 'apple-leaf-right'],
  house:  ['house-roof', 'house-walls', 'house-window-left', 'house-window-right', 'house-door', 'house-chimney'],
  sun:    ['sun-rays-a', 'sun-rays-b', 'sun-face'],
  flower: ['flower-stem', 'flower-leaf-left', 'flower-leaf-right', 'flower-petals', 'flower-center'],
};
const KIDS_COLORING_TITLES = { apple: '🍎 Jabłko', house: '🏠 Domek', sun: '☀️ Słoneczko', flower: '🌼 Kwiatek' };
let kidsSelectedColor   = null;
let kidsColoringPicture = null;
let kidsColoringWasComplete = false;

// ===== STORAGE =====
const DB = {
  get: (key) => { try { return JSON.parse(localStorage.getItem(key)) || null; } catch { return null; } },
  set: (key, val) => localStorage.setItem(key, JSON.stringify(val)),
};

function getSets()     { return DB.get('fr_sets') || []; }
function saveSets(s)   { DB.set('fr_sets', s); }
function getSongs()    { return DB.get('fr_songs') || []; }
function saveSongs(s)  { DB.set('fr_songs', s); }
function getProgress() { return DB.get('fr_progress') || { streak: { lastDate: null, count: 0 }, badges: [], history: [] }; }
function saveProgress(p) { DB.set('fr_progress', p); }

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
  if (name === 'kids-sentence-categories') renderKidsSentenceCategories();
  if (name === 'kids-sentence-mode')  {} // initialized by pickKidsSentenceCategory()
  if (name === 'kids-sentences')  {} // initialized by startKidsSentences()
  if (name === 'kids-sentence-quiz') {} // initialized by startKidsSentenceQuiz()
  if (name === 'kids-dressbear') {} // initialized by startKidsDressBear()
  if (name === 'kids-memory')    {} // initialized by startKidsMemory()
  if (name === 'kids-coloring-pick') {}
  if (name === 'kids-coloring')  {} // initialized by startKidsColoring()
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
  if (!words.length) { showToast('Nie znaleziono słówek. Użyj formatu: francuski = polski'); return; }
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
  document.getElementById('learn-hint').textContent = learnReverse ? 'Jak to jest po francusku?' : 'Jak to jest po polsku?';
  document.getElementById('learn-input').placeholder = learnReverse ? 'Wpisz po francusku...' : 'Wpisz po polsku...';
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
  document.getElementById('test-input').placeholder = testReverse ? 'Wpisz po francusku...' : 'Wpisz po polsku...';
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
  if (!enRaw) { showToast('Dodaj tekst piosenki po francusku!'); return; }

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
    const clean = token.replace(/[^a-zA-ZàâäéèêëïîôöùûüÿçœÀÂÄÉÈÊËÏÎÔÖÙÛÜŸÇŒ'-]/g, '');
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
  const words    = fullText.split(/[\s\n\r]+/).map(w => w.replace(/[^a-zA-ZàâäéèêëïîôöùûüÿçœÀÂÄÉÈÊËÏÎÔÖÙÛÜŸÇŒ'-]/g, '').toLowerCase()).filter(Boolean);
  const unique   = [...new Set(words)];

  const extractEl = document.getElementById('extract-text');
  extractEl.innerHTML = song.verses.map((v, vi) =>
    '<p>' + v.en.split(/\s+/).map(raw => {
      const clean = raw.replace(/[^a-zA-ZàâäéèêëïîôöùûüÿçœÀÂÄÉÈÊËÏÎÔÖÙÛÜŸÇŒ'-]/g, '').toLowerCase();
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
        contents: [{ parts: [{ text: `Przetłumacz poniższe francuskie słowo lub zwrot na język polski. Podaj TYLKO tłumaczenie, nic więcej. Jeśli jest kilka znaczeń, rozdziel je ukośnikiem. Słowo/zwrot: "${phrase}"` }] }]
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
    const res = await fetch(`https://api.mymemory.translated.net/get?q=${encodeURIComponent(word)}&langpair=fr|pl`);
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
  let prompt = `Uczymy się języka francuskiego. Rozmówcą jest nastolatek (10-15 lat), więc bądź cierpliwy, przyjazny i wyrozumiały. ` +
    `Ćwiczymy dialog w scenariuszu: "${scenario.title}". Poziom językowy ucznia: ${level}. Odpowiadaj WYŁĄCZNIE po francusku, dostosowując słownictwo i długość zdań do poziomu ${level}. ` +
    `Ty wcielasz się w rolę: ${aiRole}. Uczeń gra rolę: ${userRole}. ` +
    `To jest dialog ćwiczebny — jeśli widzisz, że uczeń nie radzi sobie, ma problem ze sformułowaniem zdania, pisze po polsku albo utknął, ` +
    `delikatnie podpowiedz mu po francusku (możesz dodać krótką podpowiedź po polsku w nawiasie) i zachęć go ciepłym tonem do kontynuowania w roli. ` +
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
    'co mógłby teraz odpowiedzieć po francusku w tej sytuacji, dopasowaną do jego roli i poziomu. Możesz podać przykładowe zdanie po francusku w cudzysłowie.';
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
    'po polsku i po francusku. Podaj też listę wszystkich nowych/ważnych francuskich słówek i zwrotów, które pojawiły się w rozmowie, wraz z tłumaczeniem na polski. ' +
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
    '<p class="hint" style="margin-top:6px">Kliknij na francuskie słowo, żeby dodać je do listy słówek poniżej.</p>';
}

function makeChatWordsClickable(text) {
  return text.split(/(\s+)/).map(token => {
    const clean = token.replace(/[^a-zA-ZàâäéèêëïîôöùûüÿçœÀÂÄÉÈÊËÏÎÔÖÙÛÜŸÇŒ'-]/g, '');
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
    `${currentChat.level}. Dla każdego istotnego błędu podaj: co uczeń napisał, poprawną wersję po francusku, i krótkie, ciepłe wyjaśnienie po polsku, ` +
    'dlaczego to był błąd (pisz życzliwie, to nastolatek uczący się języka). Jeśli uczeń nie popełnił błędów, zwróć pustą listę mistakes. Na koniec przygotuj też "improved_dialogue" — ' +
    'całą rozmowę zapisaną od nowa, w której wypowiedzi ucznia są poprawione na w pełni poprawny, bardziej naturalny francuski ' +
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
  return `Jesteś nauczycielem języka francuskiego oceniającym wypracowanie ucznia (nastolatka 10-15 lat) na poziomie ${level}. ` +
    `Bądź życzliwy i wspierający, dostosuj surowość oceny do poziomu ${level}. ` +
    `Temat wypracowania: "${topic.title}". Wymagania zadania: ${topic.requirements.join(' ')} ` +
    `Uczeń przyśle swoje wypracowanie jako wiadomość. Oceń je pod kątem poprawności językowej (gramatyka, słownictwo, szyk zdania) ` +
    `odpowiedniej dla poziomu ${level} oraz sprawdź, czy spełnia wymagania zadania. ` +
    `Odpowiedz WYŁĄCZNIE w formacie JSON, bez znaczników markdown, dokładnie w takiej strukturze: ` +
    `{"overall_pl":"...","mistakes":[{"original":"...","corrected":"...","explanation":"..."}],"vocabulary":[{"en":"...","pl":"..."}]}. ` +
    `Pole "overall_pl" to krótkie (2-3 zdania), ciepłe podsumowanie PO POLSKU — co wyszło dobrze i co warto poprawić, oraz czy wymagania zadania zostały spełnione. ` +
    `Pole "mistakes" to lista istotnych błędów językowych z krótkim wyjaśnieniem po polsku (jeśli nie ma błędów, zwróć pustą listę). ` +
    `Pole "vocabulary" to 5-8 przydatnych francuskich słówek lub zwrotów związanych z tematem, których uczeń mógłby się nauczyć, żeby wzbogacić wypracowanie (nie muszą pochodzić z jego tekstu).`;
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
  localStorage.setItem('fr_kids_stars', kidsStars);
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
  speakKids(word.en, 'fr-FR');
}

function replayKidsFlashAudio() {
  const cat  = KIDS_CATEGORIES.find(c => c.id === kidsCategoryId);
  speakKids(cat.words[kidsFlashIndex].en, 'fr-FR');
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
  setTimeout(() => speakKids(kidsQuizWord.en, 'fr-FR'), 300);
}

function replayKidsQuizAudio() {
  if (kidsQuizWord) speakKids(kidsQuizWord.en, 'fr-FR');
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
  setTimeout(() => speakKids(shownWord, 'fr-FR'), 300);
}

function replayKidsTrueFalseAudio() {
  if (kidsTFCurrent) speakKids(kidsTFCurrent.shownWord, 'fr-FR');
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

function renderKidsSentenceCategories() {
  document.getElementById('kids-sentence-category-grid').innerHTML = KIDS_SENTENCE_CATEGORIES.map(c => `
    <div class="kids-category-card" onclick="pickKidsSentenceCategory('${c.id}')">
      <div class="kids-category-icon">${c.icon}</div>
      <div class="kids-category-title">${esc(c.title)}</div>
    </div>`).join('');
}

function pickKidsSentenceCategory(id) {
  kidsSentenceCategoryId = id;
  const cat = KIDS_SENTENCE_CATEGORIES.find(c => c.id === id);
  document.getElementById('kids-sentence-mode-title').textContent = `${cat.icon} ${cat.title}`;
  showView('kids-sentence-mode');
}

function startKidsSentences() {
  kidsSentenceIndex = 0;
  showView('kids-sentences');
  renderKidsSentence();
}

function renderKidsSentence() {
  const cat = KIDS_SENTENCE_CATEGORIES.find(c => c.id === kidsSentenceCategoryId);
  const s   = cat.sentences[kidsSentenceIndex];
  document.getElementById('kids-sentence-emoji').textContent = s.emoji;
  document.getElementById('kids-sentence-en').textContent = s.en;
  document.getElementById('kids-sentence-counter').textContent = `${kidsSentenceIndex + 1} / ${cat.sentences.length}`;
  document.getElementById('kids-sentence-pl').style.display = 'none';
  speakKids(s.en, 'fr-FR');
}

function replayKidsSentenceAudio() {
  const cat = KIDS_SENTENCE_CATEGORIES.find(c => c.id === kidsSentenceCategoryId);
  speakKids(cat.sentences[kidsSentenceIndex].en, 'fr-FR');
}

function revealKidsSentenceTranslation() {
  const cat = KIDS_SENTENCE_CATEGORIES.find(c => c.id === kidsSentenceCategoryId);
  const s   = cat.sentences[kidsSentenceIndex];
  document.getElementById('kids-sentence-pl').textContent = s.pl;
  document.getElementById('kids-sentence-pl').style.display = '';
  speakKids(s.pl, 'pl-PL');
}

function nextKidsSentence() {
  const cat = KIDS_SENTENCE_CATEGORIES.find(c => c.id === kidsSentenceCategoryId);
  kidsSentenceIndex = (kidsSentenceIndex + 1) % cat.sentences.length;
  renderKidsSentence();
}

function prevKidsSentence() {
  const cat = KIDS_SENTENCE_CATEGORIES.find(c => c.id === kidsSentenceCategoryId);
  kidsSentenceIndex = (kidsSentenceIndex - 1 + cat.sentences.length) % cat.sentences.length;
  renderKidsSentence();
}

function startKidsSentenceQuiz() {
  showView('kids-sentence-quiz');
  updateKidsStarsDisplay();
  document.getElementById('kids-sentence-quiz-feedback').style.display = 'none';
  nextKidsSentenceQuizRound();
}

function nextKidsSentenceQuizRound() {
  const cat      = KIDS_SENTENCE_CATEGORIES.find(c => c.id === kidsSentenceCategoryId);
  const shuffled = shuffle([...cat.sentences]);
  kidsSentenceQuizItem = shuffled[0];
  const options  = shuffle(shuffled.slice(0, 3));
  document.getElementById('kids-sentence-quiz-options').innerHTML = options.map(s => `
    <div class="kids-option" onclick="checkKidsSentenceQuizAnswer('${s.emoji}', this)">${s.emoji}</div>`).join('');
  document.getElementById('kids-sentence-quiz-feedback').style.display = 'none';
  setTimeout(() => speakKids(kidsSentenceQuizItem.en, 'fr-FR'), 300);
}

function replayKidsSentenceQuizAudio() {
  if (kidsSentenceQuizItem) speakKids(kidsSentenceQuizItem.en, 'fr-FR');
}

function checkKidsSentenceQuizAnswer(emoji, el) {
  const feedback = document.getElementById('kids-sentence-quiz-feedback');
  if (emoji === kidsSentenceQuizItem.emoji) {
    el.classList.add('correct');
    addKidsStar();
    feedback.textContent = '🎉 Brawo, rozumiesz!';
    feedback.className = 'kids-quiz-feedback good';
    feedback.style.display = '';
    setTimeout(nextKidsSentenceQuizRound, 1400);
  } else {
    el.classList.add('wrong');
    setTimeout(() => el.classList.remove('wrong'), 500);
    feedback.textContent = '🙂 Posłuchaj jeszcze raz!';
    feedback.className = 'kids-quiz-feedback retry';
    feedback.style.display = '';
  }
}

// ---- Ubierz misia ----
function isKidsBearComplete() {
  return KIDS_BEAR_SLOTS.every(slot => kidsBearOutfit[slot]);
}

function startKidsDressBear() {
  kidsBearOutfit = { top: null, bottom: null, feet: null, accessory: null, weather: null };
  kidsBearMode   = 'free';
  showView('kids-dressbear');
  updateKidsStarsDisplay();
  document.getElementById('kids-bear-celebration').style.display = 'none';
  document.getElementById('kids-challenge-feedback').style.display = 'none';
  document.getElementById('kids-bear-mode-free').classList.add('active');
  document.getElementById('kids-bear-mode-challenge').classList.remove('active');
  document.getElementById('kids-weather-banner').style.display = 'none';
  document.getElementById('view-kids-dressbear').style.background = '';
  renderKidsBearSlots();
  renderKidsBearWardrobe();
}

function exitKidsBear() {
  if (kidsBearDrag) endKidsBearDrag(null);
  exitKids('kids-home');
}

function renderKidsBearSlots() {
  KIDS_BEAR_SLOTS.forEach(slot => {
    const el   = document.getElementById('kids-bear-slot-' + slot);
    const item = kidsBearOutfit[slot];
    el.textContent = item ? item.emoji : '➕';
    el.classList.toggle('filled', !!item);
  });
}

function renderKidsBearWardrobe() {
  const el = document.getElementById('kids-bear-wardrobe');
  if (kidsBearMode === 'challenge') {
    const items = KIDS_BEAR_ITEMS.filter(i => i.category === 'weather');
    el.innerHTML = `<div class="kids-wardrobe-row">${items.map(renderKidsWardrobeItemHtml).join('')}</div>`;
    return;
  }
  el.innerHTML = KIDS_BEAR_CATEGORIES.map(cat => `
    <div class="kids-wardrobe-cat">
      <div class="kids-wardrobe-cat-label">${esc(cat.label)}</div>
      <div class="kids-wardrobe-row">
        ${KIDS_BEAR_ITEMS.filter(i => i.category === cat.id).map(renderKidsWardrobeItemHtml).join('')}
      </div>
    </div>`).join('');
}

function renderKidsWardrobeItemHtml(item) {
  return `<div class="kids-wardrobe-item" data-item-id="${item.id}" onpointerdown="startKidsBearDrag(event, '${item.id}')">${item.emoji}</div>`;
}

// -- Tryb / pogoda --
function setKidsBearMode(mode) {
  kidsBearMode = mode;
  document.getElementById('kids-bear-mode-free').classList.toggle('active', mode === 'free');
  document.getElementById('kids-bear-mode-challenge').classList.toggle('active', mode === 'challenge');
  document.getElementById('kids-challenge-feedback').style.display = 'none';
  if (mode === 'challenge') {
    document.getElementById('kids-weather-banner').style.display = '';
    pickKidsWeatherRound();
  } else {
    document.getElementById('kids-weather-banner').style.display = 'none';
    document.getElementById('view-kids-dressbear').style.background = '';
    renderKidsBearWardrobe();
  }
}

function pickKidsWeatherRound() {
  const keys = Object.keys(KIDS_WEATHER_DATA).filter(k => k !== kidsWeather);
  kidsWeather = keys[Math.floor(Math.random() * keys.length)];
  const w = KIDS_WEATHER_DATA[kidsWeather];
  document.getElementById('kids-weather-icon').textContent = w.icon;
  document.getElementById('kids-weather-label').textContent = w.label;
  document.getElementById('kids-weather-prompt-pl').textContent = w.pl;
  document.getElementById('view-kids-dressbear').style.background = w.bg;
  renderKidsBearWardrobe();
  setTimeout(() => speakKids(w.en, 'fr-FR'), 300);
}

function replayKidsWeatherPrompt() {
  if (kidsWeather) speakKids(KIDS_WEATHER_DATA[kidsWeather].en, 'fr-FR');
}

// -- Przeciąganie (mysz + dotyk przez Pointer Events) --
function startKidsBearDrag(e, itemId) {
  if (e.button !== undefined && e.button !== 0) return;
  e.preventDefault();
  const item = KIDS_BEAR_ITEMS.find(i => i.id === itemId);
  const ghost = document.createElement('div');
  ghost.className = 'kids-drag-ghost';
  ghost.textContent = item.emoji;
  document.body.appendChild(ghost);
  kidsBearDrag = { item, ghost, startX: e.clientX, startY: e.clientY, moved: false };
  moveKidsBearGhost(e.clientX, e.clientY);
  document.addEventListener('pointermove', onKidsBearDragMove);
  document.addEventListener('pointerup', onKidsBearDragUp);
}

function moveKidsBearGhost(x, y) {
  kidsBearDrag.ghost.style.left = x + 'px';
  kidsBearDrag.ghost.style.top  = y + 'px';
}

function onKidsBearDragMove(e) {
  if (!kidsBearDrag) return;
  if (Math.abs(e.clientX - kidsBearDrag.startX) > 8 || Math.abs(e.clientY - kidsBearDrag.startY) > 8) {
    kidsBearDrag.moved = true;
  }
  moveKidsBearGhost(e.clientX, e.clientY);
  const target = document.elementFromPoint(e.clientX, e.clientY);
  const stage  = document.getElementById('kids-bear-stage');
  stage.classList.toggle('drag-over', !!(target && target.closest('#kids-bear-stage')));
}

function onKidsBearDragUp(e) {
  if (!kidsBearDrag) return;
  endKidsBearDrag(e);
}

function endKidsBearDrag(e) {
  const drag = kidsBearDrag;
  document.removeEventListener('pointermove', onKidsBearDragMove);
  document.removeEventListener('pointerup', onKidsBearDragUp);
  document.getElementById('kids-bear-stage').classList.remove('drag-over');
  drag.ghost.remove();
  kidsBearDrag = null;
  if (!e) return;

  const target  = document.elementFromPoint(e.clientX, e.clientY);
  const onStage = !!(target && target.closest('#kids-bear-stage'));
  if (drag.moved && !onStage) return; // puszczone poza misiem podczas przeciągania - nic się nie dzieje
  handleKidsBearItemDrop(drag.item);
}

function handleKidsBearItemDrop(item) {
  if (kidsBearMode === 'challenge') {
    handleKidsChallengeAttempt(item);
  } else {
    equipKidsBearItem(item);
  }
}

function equipKidsBearItem(item) {
  const wasComplete = isKidsBearComplete();
  kidsBearOutfit[item.category] = item;
  speakKids(item.en, 'fr-FR');
  renderKidsBearSlots();
  showKidsBearWordOverlay(item);
  if (!wasComplete && isKidsBearComplete()) {
    setTimeout(showKidsBearCelebration, 400);
  }
}

function showKidsBearWordOverlay(item) {
  const el = document.getElementById('kids-bear-word-overlay');
  el.textContent = item.en.charAt(0).toUpperCase() + item.en.slice(1);
  el.classList.remove('show');
  void el.offsetWidth;
  el.classList.add('show');
}

function handleKidsChallengeAttempt(item) {
  const w = KIDS_WEATHER_DATA[kidsWeather];
  const feedback = document.getElementById('kids-challenge-feedback');
  if (item.id === w.itemId) {
    kidsBearOutfit.weather = item;
    renderKidsBearSlots();
    speakKids(item.en, 'fr-FR');
    addKidsStar();
    feedback.textContent = '🎉 Brawo, dobrze dobrane!';
    feedback.className = 'kids-quiz-feedback good';
    feedback.style.display = '';
    setTimeout(pickKidsWeatherRound, 1600);
  } else {
    feedback.textContent = `🙈 Ups! To nie pasuje, gdy jest ${w.label.toLowerCase()}. Spróbuj jeszcze raz!`;
    feedback.className = 'kids-quiz-feedback retry';
    feedback.style.display = '';
    const wardrobeEl = document.querySelector(`.kids-wardrobe-item[data-item-id="${item.id}"]`);
    if (wardrobeEl) {
      wardrobeEl.classList.add('bounce-back');
      setTimeout(() => wardrobeEl.classList.remove('bounce-back'), 500);
    }
  }
}

function resetKidsDressBear() {
  kidsBearOutfit = { top: null, bottom: null, feet: null, accessory: null, weather: null };
  document.getElementById('kids-bear-celebration').style.display = 'none';
  document.getElementById('kids-challenge-feedback').style.display = 'none';
  renderKidsBearSlots();
  if (kidsBearMode === 'challenge') pickKidsWeatherRound();
}

// -- Celebracja --
function showKidsBearCelebration() {
  document.getElementById('kids-bear-celebration').style.display = '';
  addKidsStar();
  spawnKidsConfetti();
}

function spawnKidsConfetti() {
  const layer = document.getElementById('kids-confetti-layer');
  layer.innerHTML = '';
  const emojis = ['🎉', '⭐', '🎈', '✨', '🌟'];
  for (let i = 0; i < 24; i++) {
    const piece = document.createElement('div');
    piece.className = 'kids-confetti-piece';
    piece.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    piece.style.left = Math.random() * 100 + '%';
    piece.style.animationDelay = (Math.random() * 0.5) + 's';
    piece.style.animationDuration = (1.8 + Math.random() * 1.2) + 's';
    layer.appendChild(piece);
  }
  setTimeout(() => { layer.innerHTML = ''; }, 3200);
}

function downloadKidsBearPhoto() {
  const canvas = document.createElement('canvas');
  canvas.width = 500;
  canvas.height = 500;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#fff7ec';
  ctx.fillRect(0, 0, 500, 500);
  ctx.textAlign = 'center';
  ctx.font = '180px sans-serif';
  ctx.fillText('🐻', 250, 260);
  ctx.font = '58px sans-serif';
  KIDS_BEAR_SLOTS.forEach((slot, i) => {
    const item = kidsBearOutfit[slot];
    if (item) ctx.fillText(item.emoji, 70 + i * 90, 420);
  });
  ctx.font = 'bold 28px sans-serif';
  ctx.fillStyle = '#7c3aed';
  ctx.fillText('Mój miś! 🐻', 250, 470);
  canvas.toBlob(blob => {
    const a = document.createElement('a');
    a.href = URL.createObjectURL(blob);
    a.download = 'moj_mis.png';
    a.click();
    URL.revokeObjectURL(a.href);
  });
}

// ---- Znajdź parę ----
function startKidsMemory() {
  const cat   = KIDS_CATEGORIES.find(c => c.id === kidsCategoryId);
  const words = shuffle([...cat.words]).slice(0, 6);
  kidsMemoryCards   = shuffle([...words, ...words]).map(w => ({ ...w, flipped: false, matched: false }));
  kidsMemoryFirst   = null;
  kidsMemoryMatched = 0;
  showView('kids-memory');
  updateKidsStarsDisplay();
  document.getElementById('kids-memory-complete').style.display = 'none';
  renderKidsMemory();
}

function renderKidsMemory() {
  document.getElementById('kids-memory-grid').innerHTML = kidsMemoryCards.map((c, i) => `
    <div class="kids-memory-card" id="kids-memory-card-${i}" onclick="flipKidsMemoryCard(${i})">
      <div class="kids-memory-back">❓</div>
    </div>`).join('');
  document.getElementById('kids-memory-progress').textContent = `${kidsMemoryMatched} / ${kidsMemoryCards.length / 2}`;
}

function flipKidsMemoryCard(i) {
  const card = kidsMemoryCards[i];
  if (card.matched || card.flipped || kidsMemoryFirst === i) return;

  card.flipped = true;
  const el = document.getElementById('kids-memory-card-' + i);
  el.innerHTML = `<div class="kids-memory-front">${card.emoji}</div>`;
  el.classList.add('flipped');
  speakKids(card.en, 'fr-FR');

  if (kidsMemoryFirst === null) {
    kidsMemoryFirst = i;
    return;
  }

  const firstIdx  = kidsMemoryFirst;
  const firstCard = kidsMemoryCards[firstIdx];
  kidsMemoryFirst = null;

  if (firstCard.en === card.en) {
    firstCard.matched = true;
    card.matched = true;
    kidsMemoryMatched++;
    document.getElementById('kids-memory-progress').textContent = `${kidsMemoryMatched} / ${kidsMemoryCards.length / 2}`;
    document.getElementById('kids-memory-card-' + firstIdx).classList.add('matched');
    document.getElementById('kids-memory-card-' + i).classList.add('matched');
    addKidsStar();
    if (kidsMemoryMatched === kidsMemoryCards.length / 2) {
      setTimeout(() => { document.getElementById('kids-memory-complete').style.display = ''; }, 400);
    }
  } else {
    setTimeout(() => {
      firstCard.flipped = false;
      card.flipped = false;
      const elF = document.getElementById('kids-memory-card-' + firstIdx);
      const elS = document.getElementById('kids-memory-card-' + i);
      if (elF) { elF.innerHTML = '<div class="kids-memory-back">❓</div>'; elF.classList.remove('flipped'); }
      if (elS) { elS.innerHTML = '<div class="kids-memory-back">❓</div>'; elS.classList.remove('flipped'); }
    }, 900);
  }
}

// ---- Kolorowanka ----
function startKidsColoring(pic) {
  kidsColoringPicture = pic;
  kidsColoringWasComplete = false;
  showView('kids-coloring');
  document.querySelectorAll('.kids-coloring-svg').forEach(svg => svg.style.display = 'none');
  document.getElementById('kids-svg-' + pic).style.display = '';
  document.getElementById('kids-coloring-title').textContent = KIDS_COLORING_TITLES[pic];
  resetKidsColoring();
  renderKidsPalette();
  pickKidsColor(0);
}

function renderKidsPalette() {
  document.getElementById('kids-palette').innerHTML = KIDS_PALETTE.map((c, i) => `
    <div class="kids-swatch" style="background:${c.hex}" onclick="pickKidsColor(${i})"></div>`).join('');
}

function pickKidsColor(i) {
  kidsSelectedColor = KIDS_PALETTE[i];
  document.querySelectorAll('.kids-swatch').forEach((el, idx) => el.classList.toggle('selected', idx === i));
  speakKids(kidsSelectedColor.en, 'fr-FR');
}

function setKidsRegionFill(regionId, hex) {
  const region = document.getElementById(regionId);
  if (!region) return;
  if (region.tagName.toLowerCase() === 'g') {
    Array.from(region.children).forEach(child => child.setAttribute('fill', hex));
  } else {
    region.setAttribute('fill', hex);
  }
}

function colorKidsRegion(regionId) {
  if (!kidsSelectedColor) return;
  setKidsRegionFill(regionId, kidsSelectedColor.hex);
  speakKids(kidsSelectedColor.en, 'fr-FR');
  checkKidsColoringComplete();
}

function resetKidsColoring() {
  const regions = KIDS_COLORING_REGIONS[kidsColoringPicture] || [];
  regions.forEach(id => setKidsRegionFill(id, '#ffffff'));
  kidsColoringWasComplete = false;
  const complete = document.getElementById('kids-coloring-complete');
  if (complete) complete.style.display = 'none';
}

function isKidsRegionColored(regionId) {
  const region = document.getElementById(regionId);
  if (!region) return false;
  if (region.tagName.toLowerCase() === 'g') {
    return Array.from(region.children).every(c => c.getAttribute('fill') !== '#ffffff');
  }
  return region.getAttribute('fill') !== '#ffffff';
}

function checkKidsColoringComplete() {
  const regions = KIDS_COLORING_REGIONS[kidsColoringPicture] || [];
  const allColored = regions.every(isKidsRegionColored);
  if (allColored && !kidsColoringWasComplete) {
    kidsColoringWasComplete = true;
    addKidsStar();
    document.getElementById('kids-coloring-complete').style.display = '';
  }
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
  a = a.trim().toLowerCase().replace(/[^a-ząćęłńóśźżàâäéèêëïîôöùûüÿçœ\s]/gi, '');
  b = b.trim().toLowerCase().replace(/[^a-ząćęłńóśźżàâäéèêëïîôöùûüÿçœ\s]/gi, '');
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
    if (l === ' ' || l === '-' || l === "'") return `<span class="hangman-letter space">${l === ' ' ? '' : l}</span>`;
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
  const frLetters = ['é','è','ê','à','â','ç','ù','î','ô'];
  document.getElementById('hangman-keyboard').innerHTML =
    letters.map(l => {
      const used    = hangmanGuessed.includes(l);
      const correct = used && hangmanWord.includes(l);
      const wrong   = used && !hangmanWord.includes(l);
      return `<button class="hangman-key ${correct?'correct':''} ${wrong?'wrong':''}"
        onclick="guessLetter('${l}')" ${used?'disabled':''}>${l}</button>`;
    }).join('') +
    `<div class="hangman-fr-row">` +
    frLetters.map(l => {
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
  const allGuessed = hangmanWord.split('').every(l => l === ' ' || l === '-' || l === "'" || hangmanGuessed.includes(l));
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
  downloadJSON(data, `francuski_ala_backup_${today()}.json`);
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
  { name: 'Kolory', icon: '🎨', words: [
    {en:'rouge',pl:'czerwony'},{en:'bleu',pl:'niebieski'},{en:'vert',pl:'zielony'},
    {en:'jaune',pl:'żółty'},{en:'noir',pl:'czarny'},{en:'blanc',pl:'biały'},
    {en:'orange',pl:'pomarańczowy'},{en:'violet',pl:'fioletowy'},{en:'rose',pl:'różowy'},
    {en:'marron',pl:'brązowy'},{en:'gris',pl:'szary'},{en:'beige',pl:'beżowy'},
    {en:'turquoise',pl:'turkusowy'},{en:'doré',pl:'złoty'},{en:'argenté',pl:'srebrny'},
    {en:'clair',pl:'jasny'},{en:'foncé',pl:'ciemny'},{en:'multicolore',pl:'wielobarwny'},
    {en:'pourpre',pl:'purpurowy'},{en:'bordeaux',pl:'bordowy'},
  ]},
  { name: 'Liczby', icon: '🔢', words: [
    {en:'un',pl:'jeden'},{en:'deux',pl:'dwa'},{en:'trois',pl:'trzy'},
    {en:'quatre',pl:'cztery'},{en:'cinq',pl:'pięć'},{en:'six',pl:'sześć'},
    {en:'sept',pl:'siedem'},{en:'huit',pl:'osiem'},{en:'neuf',pl:'dziewięć'},
    {en:'dix',pl:'dziesięć'},{en:'onze',pl:'jedenaście'},{en:'douze',pl:'dwanaście'},
    {en:'treize',pl:'trzynaście'},{en:'quatorze',pl:'czternaście'},{en:'quinze',pl:'piętnaście'},
    {en:'seize',pl:'szesnaście'},{en:'dix-sept',pl:'siedemnaście'},{en:'dix-huit',pl:'osiemnaście'},
    {en:'dix-neuf',pl:'dziewiętnaście'},{en:'vingt',pl:'dwadzieścia'},{en:'trente',pl:'trzydzieści'},
    {en:'cent',pl:'sto'},
  ]},
  { name: 'Rodzina', icon: '👨‍👩‍👧', words: [
    {en:'la mère',pl:'mama / matka'},{en:'le père',pl:'tata / ojciec'},{en:'la sœur',pl:'siostra'},
    {en:'le frère',pl:'brat'},{en:'la grand-mère',pl:'babcia'},{en:'le grand-père',pl:'dziadek'},
    {en:'la tante',pl:'ciocia'},{en:"l'oncle",pl:'wujek'},{en:'le cousin / la cousine',pl:'kuzyn / kuzynka'},
    {en:'la fille',pl:'córka'},{en:'le fils',pl:'syn'},{en:'la femme',pl:'żona'},
    {en:'le mari',pl:'mąż'},{en:'les parents',pl:'rodzice'},{en:'les enfants',pl:'dzieci'},
    {en:'le bébé',pl:'niemowlę'},{en:'la famille',pl:'rodzina'},{en:'les grands-parents',pl:'dziadkowie'},
    {en:'la nièce',pl:'siostrzenica'},{en:'le neveu',pl:'siostrzeniec'},{en:'le beau-père',pl:'teść / ojczym'},
    {en:'la belle-mère',pl:'teściowa / macocha'},
  ]},
  { name: 'Jedzenie', icon: '🍎', words: [
    {en:'le pain',pl:'chleb'},{en:'le fromage',pl:'ser'},{en:'le lait',pl:'mleko'},
    {en:"l'eau",pl:'woda'},{en:'le café',pl:'kawa'},{en:'le thé',pl:'herbata'},
    {en:'la viande',pl:'mięso'},{en:'le poisson',pl:'ryba'},{en:'le poulet',pl:'kurczak'},
    {en:'les légumes',pl:'warzywa'},{en:'les fruits',pl:'owoce'},{en:'la pomme',pl:'jabłko'},
    {en:'la banane',pl:'banan'},{en:"l'orange",pl:'pomarańcza'},{en:'la fraise',pl:'truskawka'},
    {en:'le riz',pl:'ryż'},{en:'les pâtes',pl:'makaron'},{en:'la soupe',pl:'zupa'},
    {en:'le gâteau',pl:'ciasto'},{en:'le chocolat',pl:'czekolada'},{en:'le sucre',pl:'cukier'},
    {en:'le sel',pl:'sól'},{en:"l'œuf",pl:'jajko'},{en:'le beurre',pl:'masło'},
  ]},
  { name: 'Zwierzęta', icon: '🐾', words: [
    {en:'le chien',pl:'pies'},{en:'le chat',pl:'kot'},{en:'le cheval',pl:'koń'},
    {en:'la vache',pl:'krowa'},{en:'le cochon',pl:'świnia'},{en:'le mouton',pl:'owca'},
    {en:'la poule',pl:'kura'},{en:'le canard',pl:'kaczka'},{en:"l'oiseau",pl:'ptak'},
    {en:'la souris',pl:'mysz'},{en:'le lapin',pl:'królik'},{en:"l'ours",pl:'niedźwiedź'},
    {en:'le loup',pl:'wilk'},{en:'le renard',pl:'lis'},{en:'le lion',pl:'lew'},
    {en:'le tigre',pl:'tygrys'},{en:"l'éléphant",pl:'słoń'},{en:'la girafe',pl:'żyrafa'},
    {en:'le singe',pl:'małpa'},{en:'le serpent',pl:'wąż'},{en:'la grenouille',pl:'żaba'},
    {en:"l'abeille",pl:'pszczoła'},{en:'le papillon',pl:'motyl'},
  ]},
];

function seedDefaultSets() {
  if ((DB.get('fr_defaultSetsVersion') || 0) >= DEFAULT_SETS_VERSION) return;
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
  DB.set('fr_defaultSetsVersion', DEFAULT_SETS_VERSION);
}

// ===== INIT =====
seedDefaultSets();
showView('home');
