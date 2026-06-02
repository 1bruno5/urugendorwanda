import { ref, computed, watch } from 'vue'

export const activeLang = ref(localStorage.getItem('lang') || 'EN')

export const languages = [
  { code: 'EN', label: 'English',     native: 'English',      flag: '🇬🇧' },
  { code: 'RW', label: 'Kinyarwanda', native: 'Ikinyarwanda', flag: '🇷🇼' },
  { code: 'FR', label: 'French',      native: 'Français',     flag: '🇫🇷' },
]

export const currentLang = computed(() => languages.find(l => l.code === activeLang.value) || languages[0])

export function setLang(code) {
  activeLang.value = code
  localStorage.setItem('lang', code)
}

// Centralized translations used across the app
export const translations = {
  EN: {
    // Nav
    home: 'Home', about: 'About Us', services: 'Services', gallery: 'Gallery', photos: 'Photos', videos: 'Videos', destinations: 'Destinations', contact: 'Contact', login: 'Login', register: 'Register',
    northern: 'Northern Province', southern: 'Southern Province', kigali: 'Kigali City', eastern: 'Eastern Province', western: 'Western Province',

    // Home
    discover: 'Discover', rwanda: 'Rwanda', hero_sub: 'Where pristine gorilla habitats meet vibrant culture, rolling green hills, and breathtaking landscapes. Your African adventure starts here.',
    explore_services: 'Explore Services', about_rwanda: 'About Rwanda', why_visit_label: 'Why Visit', rwanda_awaits: 'Rwanda Awaits You',
    cta_title: 'Ready for Your', cta_highlight: 'Rwanda Adventure?', cta_sub: "From mountain gorillas to vibrant city life — Rwanda offers unforgettable experiences for every traveler.", plan_trip: 'Plan My Trip',
    feature_1_title: 'Gorilla Trekking', feature_1_desc: 'One of the world\'s most extraordinary wildlife encounters — meet mountain gorillas in their natural volcanic forest habitat.',
    feature_2_title: 'Eco-Tourism', feature_2_desc: 'Rwanda is Africa\'s leading eco-tourism destination, committed to sustainable travel and preserving its natural wonders.',
    feature_3_title: 'Rich Culture', feature_3_desc: 'Explore vibrant traditions, Intore dance, art, and a resilient people whose warmth and hospitality are world-renowned.',
    feature_4_title: 'Stunning Scenery', feature_4_desc: 'Rolling emerald hills, shimmering lakes, and volcanic peaks — Rwanda\'s landscapes are endlessly photogenic.',
    feature_5_title: 'Wildlife Safaris', feature_5_desc: 'From Akagera\'s Big Five to Nyungwe\'s chimpanzees, Rwanda offers thrilling safari experiences across diverse ecosystems.',
    feature_6_title: 'Kigali City', feature_6_desc: 'Africa\'s cleanest and safest capital city, with world-class restaurants, museums, and a buzzing nightlife scene.',
    footer_tagline: 'Discover the beauty of the land of thousand hills', footer_quick_links: 'Quick Links', footer_destinations: 'Destinations',

    // About Page
    about_hero_label: 'Our Story', about_hero_title: 'About Rwanda', about_hero_desc: 'The land of a thousand hills and warm hospitality — discover why Rwanda is one of Africa\'s most inspiring tourism destinations.',
    about_who_we_are_label: 'Who We Are', about_brand_title: 'Tembera Urwanda', about_para_1: '"Tembera Urwanda" means "Visit Rwanda" in Kinyarwanda. We are a tourism platform dedicated to showcasing the best of Rwanda — its wildlife, culture, landscapes, and people.',
    about_para_2: 'From the misty mountain jungles of Volcanoes National Park to the sun-drenched shores of Lake Kivu, we guide travelers through authentic Rwandan experiences that leave lasting memories.',
    about_para_3: 'We believe in responsible, sustainable tourism that benefits local communities and preserves Rwanda\'s natural heritage for generations to come.',
    mission_title: 'Our Mission', mission_desc: 'To promote responsible tourism across Rwanda, connecting travelers with authentic experiences while supporting local communities and protecting the environment.',
    about_value_sustainability: 'Sustainability', about_value_sustainability_desc: 'We promote eco-friendly travel that protects Rwanda\'s natural resources.',
    about_value_community: 'Community', about_value_community_desc: 'Supporting local guides, artisans, and businesses in every province.',
    about_value_authenticity: 'Authenticity', about_value_authenticity_desc: 'Genuine experiences that connect you with Rwanda\'s true spirit.',

    province_about_label: 'About the Region', province_signature_label: 'Signature Experience', province_top_attractions_label: 'Top Attractions', province_what_to_see_title: 'What to See & Do', province_must_visit_label: 'Must Visit', province_culture_label: 'Culture & Heritage', province_cta_button_plan_visit: 'Plan My Trip', province_label_capital_city: 'Capital City', province_label_total_area: 'Total Area', province_label_population: 'Population', province_label_highest_peak: 'Highest Peak', province_label_from_kigali: 'From Kigali',

    north_about_title: 'Where Giants Roam', north_about_desc_1: 'The Northern Province is home to Volcanoes National Park — one of the most extraordinary wildlife sanctuaries on earth and the only place in Rwanda where you can trek to see mountain gorillas in their natural habitat.', north_about_desc_2: 'The park sits within the Virunga Massif, a chain of eight towering volcanoes straddling Rwanda, Uganda, and the DRC. The dramatic landscape is a hiker\'s paradise, with trails to volcano summits, golden monkey habitats, and the famous Dian Fossey grave site.', north_about_desc_3: 'Beyond the park, the charming town of Musanze offers lava tube caves, the serene twin lakes of Burera and Ruhondo, and a thriving local culture.', north_tag_1: 'Gorilla Trekking', north_tag_2: 'Volcanoes Park', north_tag_3: 'Hiking & Trekking', north_tag_4: 'Twin Lakes',
    south_about_title: 'Africa\'s Ancient Rainforest', south_about_desc_1: 'The Southern Province is anchored by Nyungwe Forest National Park — one of Africa\'s oldest and most biodiverse montane rainforests, covering over 1,000 km² of ancient trees, misty valleys, and cascading waterfalls.', south_about_desc_2: 'Track chimpanzees and 13 other primate species, walk the thrilling suspension canopy walkway 50 metres above the forest floor, or hike to the source of the Nile near Nyungwe\'s watershed.', south_about_desc_3: 'The province is also home to Rwanda\'s tea country — rolling hills blanketed with emerald tea estates around Huye, Nyamagabe, and Nyaruguru districts.', south_tag_1: 'Nyungwe Forest', south_tag_2: 'Chimpanzee Tracking', south_tag_3: 'Canopy Walkway', south_tag_4: 'Tea Plantations', south_feature_desc: 'Walk 160 metres across a suspension bridge suspended 50 metres above the forest floor — one of the most thrilling experiences in all of Africa.',
    east_about_title: 'Rwanda\'s Wild East', east_about_desc_1: 'The Eastern Province is the largest province in Rwanda, stretching across vast savannahs, papyrus-lined wetlands, and a chain of beautiful lakes along the Tanzanian border.', east_about_desc_2: 'It is home to Akagera National Park — Rwanda\'s only savannah park and the only place in the country where you can encounter all of the Big Five: lion, leopard, elephant, buffalo, and the critically endangered black rhino.', east_about_desc_3: 'Beyond wildlife, the province offers serene lakes for kayaking and fishing, vibrant local communities, and a relaxed pace of life.', east_tag_1: 'Big Five Safari', east_tag_2: 'Boat Safaris', east_tag_3: '525+ Bird Species', east_tag_4: 'Scenic Lakes',
    west_about_title: 'Rwanda\'s Lake Shore Paradise', west_about_desc_1: 'The Western Province is defined by the magnificent Lake Kivu — one of Africa\'s Great Lakes, stretching 90 km along Rwanda\'s western border with the Democratic Republic of Congo.', west_about_desc_2: 'The lakeside towns of Rubavu (Gisenyi) and Rusizi (Cyangugu) are beloved resort destinations, offering white sand beaches, boat cruises to jungle-clad islands, fresh fish restaurants, and spectacular sunsets over the Congo mountains.', west_about_desc_3: 'Inland lies Gishwati-Mukura National Park — Rwanda\'s fourth national park, home to chimpanzees, golden monkeys, and a recovering forest ecosystem on the Albertine Rift.', west_tag_1: 'Lake Kivu', west_tag_2: 'Island Hopping', west_tag_3: 'Gishwati Forest', west_tag_4: 'Beach Resorts',
    kigali_about_title: 'Africa\'s Gem Capital', kigali_about_desc_1: 'Kigali is consistently ranked Africa\'s cleanest and safest capital city — a remarkable achievement that reflects Rwanda\'s extraordinary transformation since 1994.', kigali_about_desc_2: 'Spread across a series of scenic hills, the city blends sleek modern architecture with vibrant markets, world-class restaurants, and a thriving arts scene. The Kigali Convention Centre has made Rwanda a leading destination for international conferences and events.', kigali_about_desc_3: 'A visit to the Kigali Genocide Memorial is both powerful and essential — a profound tribute to Rwanda\'s history and an inspiring testament to the nation\'s spirit of reconciliation.', kigali_tag_1: 'Genocide Memorial', kigali_tag_2: 'Art & Culture', kigali_tag_3: 'World-Class Dining', kigali_tag_4: 'Intore Dance',

    // Services Page
    services_hero_label: 'What We Offer', services_hero_title: 'Our Services', services_hero_desc: 'Expertly crafted tours and experiences for every traveler. From gorilla trekking to city tours, we have Rwanda covered.',
    services_process_label: 'How It Works', services_process_title: 'Plan Your Trip in 3 Steps',
    services_step_1_title: 'Choose Your Experience', services_step_1_desc: 'Browse our services and pick the experiences that excite you most.',
    services_step_2_title: 'Contact Our Team', services_step_2_desc: 'We\'ll design a custom itinerary tailored to your dates and interests.',
    services_step_3_title: 'Explore Rwanda', services_step_3_desc: 'Arrive and let our expert local guides take you on an unforgettable journey.',
    service_card_1_title: 'Gorilla Trekking', service_card_1_desc: 'Track mountain gorillas in Volcanoes National Park with expert guides and meaningful encounters.',
    service_card_2_title: 'City Culture Tour', service_card_2_desc: 'Explore Kigali\'s art, markets, and dining scene with a local guide.',
    service_card_3_title: 'Tea Plantation Retreat', service_card_3_desc: 'Visit lush tea hills, learn from farmers, and stay in charming highland accommodations.',
    service_card_4_title: 'Canopy Walk Experience', service_card_4_desc: 'Walk through Nyungwe Forest canopy for a birds-eye perspective on Rwanda\'s biodiversity.',
    service_card_5_title: 'Lake Kivu Escape', service_card_5_desc: 'Relax along Lake Kivu\'s shores, island-hop, and enjoy peaceful lakeside sunsets.',
    service_card_6_title: 'Wildlife Safari', service_card_6_desc: 'Spot elephants, lions, hippos, and birds on guided safaris in Akagera National Park.',

    // Contact Page
    contact_hero_label: 'Get In Touch', contact_hero_title: 'Contact Us', contact_hero_desc: 'Ready to start your Rwanda adventure? Our team of local experts is here to help you plan the perfect trip.',
    contact_info_address: 'Address', contact_info_email: 'Email', contact_info_phone: 'Phone', contact_info_website: 'Website',
    contact_first_name: 'First Name', contact_last_name: 'Last Name', contact_email_address: 'Email Address', contact_interested_in: 'I\'m Interested In', contact_message: 'Your Message',
    contact_placeholder_first_name: 'Jean', contact_placeholder_last_name: 'Kagabo', contact_placeholder_email: 'you@example.com', contact_placeholder_service: 'Select a service...', contact_placeholder_message: 'Tell us about your dream Rwanda trip...',
    contact_send_button: 'Send Message', contact_sent_confirmation: '✅ Message Sent!',

    // Auth Pages
    login_title: 'Login', login_button: 'Login', login_no_account: 'Don\'t have an account?', login_register: 'Register',
    register_title: 'Register', register_button: 'Register', register_have_account: 'Already have an account?', register_login: 'Login',
    register_placeholder_full_name: 'Full name', register_placeholder_email: 'Email address', register_placeholder_phone: 'Phone number', register_placeholder_age: 'Age', register_placeholder_gender: 'Select gender',
    register_gender_male: 'Male', register_gender_female: 'Female', register_gender_other: 'Other',

    // Destinations Pages
    destinations_label: 'Destinations', destinations_intro: 'Choose a province to explore the highlights of Rwanda.',
    north_hero_title: 'Northern Province', north_hero_desc: 'Land of volcanic peaks, mountain gorillas, and twin crater lakes — Rwanda\'s most dramatic and iconic region.',
    north_feature_label: 'Signature Experience', north_feature_title: 'Gorilla Trekking', north_cta_title: 'Ready to Meet the Gorillas?', north_cta_desc: 'Gorilla permits sell out fast. Contact us today to secure your unforgettable encounter.', north_cta_button: 'Book Gorilla Trek',
    south_hero_title: 'Southern Province', south_hero_desc: 'Ancient rainforests, chimpanzees, tea-covered hills, and the iconic canopy walkway — Rwanda\'s green southern heart.',
    south_feature_label: 'Signature Experience', south_feature_title: 'The Canopy Walkway', south_cta_title: 'Explore the Ancient Forest', south_cta_desc: 'From chimpanzee tracking to the canopy walkway — Nyungwe offers experiences unlike anywhere else on earth.', south_cta_button: 'Plan My Visit',
    east_hero_title: 'Eastern Province', east_hero_desc: 'Rwanda\'s safari heartland — home to Akagera National Park, the Big Five, shimmering lakes, and wide open savannahs.',
    east_feature_title: 'Akagera National Park', east_cta_title: 'Ready to Explore the Eastern Province?', east_cta_desc: 'Let our local experts plan your perfect safari and lake adventure in Rwanda\'s wild east.', east_cta_button: 'Plan My Trip',
    west_hero_title: 'Western Province', west_hero_desc: 'Stunning Lake Kivu, island retreats, Gishwati-Mukura forest, and some of Rwanda\'s most breathtaking sunsets.',
    west_feature_title: 'Life on Lake Kivu', west_cta_title: 'Escape to Lake Kivu', west_cta_desc: 'Beach days, island hops, and sunset cruises — the Western Province is Rwanda\'s ultimate lakeside getaway.', west_cta_button: 'Plan My Trip',
    kigali_hero_title: 'Kigali City', kigali_hero_desc: 'Africa\'s cleanest, safest, and most dynamic capital — where modernity meets rich culture on the beautiful hills of Rwanda.',
    kigali_feature_label: 'Culture & Heritage', kigali_feature_title: 'Kigali\'s Living Culture', kigali_cta_title: 'Discover Kigali', kigali_cta_desc: 'From the memorial to the markets — Kigali is a city that will move, inspire, and energise you.', kigali_cta_button: 'Plan My Kigali Trip',

    // Gallery
    gallery_heading: 'Gallery', photo_gallery_title: 'Photo Gallery', gallery_description: 'A visual journey through Rwanda\'s breathtaking landscapes, wildlife, and culture.', gallery_category_all: 'All', gallery_category_wildlife: 'Wildlife', gallery_category_landscapes: 'Landscapes', gallery_category_culture: 'Culture', gallery_category_cities: 'Cities', gallery_category_lakes: 'Lakes', gallery_no_results: 'No photos found for this category.',

    // Videos
    videos_heading: 'Watch & Explore', videos_description: 'Immerse yourself in the Land of a Thousand Hills through breathtaking visuals and stories.', videos_featured: 'Featured', videos_all_videos: 'All Videos', videos_category_all: 'All', videos_category_wildlife: 'Wildlife', videos_category_culture: 'Culture', videos_category_adventure: 'Adventure', videos_category_city_life: 'City Life', videos_category_nature: 'Nature', videos_watch_on_youtube: 'Watch on YouTube', videos_no_results: 'No videos found for this category.',

    // Dashboard
    dashboard_title: 'Dashboard', dashboard_overview: 'Overview', dashboard_booking: 'Booking', dashboard_user: 'User', dashboard_logout: 'Logout',
  },
  RW: {
    home: 'Ahabanza', about: 'Abo Turi Bo', services: 'Serivisi', gallery: 'Amafoto', photos: 'Amafoto', videos: 'Amavideo', destinations: 'Aho Ugiye', contact: 'Twandikire', login: 'Injira', register: 'Iyandikishe',
    northern: "Intara y'Amajyaruguru", southern: "Intara y'Amajyepfo", kigali: 'Umujyi wa Kigali', eastern: 'Intara y\'Iburasirazuba', western: 'Intara y\'Iburengerazuba',

    discover: 'Tangira', rwanda: 'Rwanda', hero_sub: 'Aho ingagi zitwikiriye ahantu heza, umuco ugaragara, imigabane y\'ibyoroshye n\'ibyiza bitatse. Urugendo rwawe rutangiriye hano.',
    explore_services: 'Kurikirana Serivisi', about_rwanda: 'Ibyerekeye Rwanda', why_visit_label: 'Impamvu zo Gusura', rwanda_awaits: 'Rwanda Itegereje',
    cta_title: 'Witeguye', cta_highlight: 'Urugendo rwawe muri Rwanda?', cta_sub: 'Uhereye ku ngagi kugeza ku buzima bw\'umujyi — Rwanda itanga ibyibutsa ku mwuka w\'urugendo.', plan_trip: 'Tegura Urugendo Rwanjye',
    feature_1_title: 'Gusura Ingagi', feature_1_desc: 'Kimwe mu bikorwa byihariye ku isi — uhure n\'ingagi z\'umuturirwa mu ishyamba ryazo kavukire.',
    feature_2_title: 'Ubukerarugendo Bushingiye ku Bidukikije', feature_2_desc: 'Rwanda ni kimwe mu bihugu bya Afurika byiyemeje ubukerarugendo buramba no kubungabunga ibidukikije.',
    feature_3_title: 'Umurage Uhambaye', feature_3_desc: 'Sura imigenzo y\'uburanga, imbyino za Intore, ubuhanzi n\'abantu b\'umutima w\'ubuntu.',
    feature_4_title: 'Imiterere Yiza', feature_4_desc: 'Imisozi y\'ibara ry\'icyatsi, ibiyaga by\'umutuzo n\'imisozi ya volcano — ubwiza bwa Rwanda ntibuhagaze.',
    feature_5_title: 'Safari y\'inyamaswa', feature_5_desc: 'Uhereye ku Big Five muri Akagera kugeza ku nkingi za chimpanzees muri Nyungwe, Rwanda itanga safari zidasanzwe.',
    feature_6_title: 'Umujyi wa Kigali', feature_6_desc: 'Umujyi utekanye kandi usukuye, ufite resitora nziza, inzu ndangamurage n\'ubuzima bw\'ijoro buteye akanyamuneza.',
    footer_tagline: 'Sobanukirwa ubwiza bw\'igihugu cy\'imisozi ibihumbi', footer_quick_links: 'Amakuru yihuta', footer_destinations: 'Aho ugiye',

    about_hero_label: 'Inkuru Yacu', about_hero_title: 'Ibyerekeye Rwanda', about_hero_desc: 'Igihugu cy\'imisozi ibihumbi n\'ubugwaneza — menya impamvu Rwanda ari kimwe mu bihugu bya Afurika bishimishije.',
    about_who_we_are_label: 'Turi Bande', about_brand_title: 'Tembera Urwanda', about_para_1: '"Tembera Urwanda" bisobanura "Sura Rwanda" mu Kinyarwanda. Turi urubuga rw\'ubukerarugendo rwerekana ibyiza bya Rwanda — inyamaswa, umuco, imisozi, n\'abantu.',
    about_para_2: 'Uhereye mu mashyamba y\'ibirunga bya Volcanoes kugeza ku nkengero z\'ikiyaga cya Kivu, tuyobora ba mukerarugendo mu bikorwa nyakuri by\'u Rwanda bituma bibagirana.',
    about_para_3: 'Twizera ubukerarugendo burambye bushyigikira abaturage b\'aho kandi bubungabunga umutungo kamere wa Rwanda ku bazadukomokaho.',
    mission_title: 'Intego yacu', mission_desc: 'Guteza imbere ubukerarugendo burambye mu Rwanda, duhuza ba mukerarugendo n\'ibikorwa nyakuri kandi dushyigikira imiryango y\'aho.',
    about_value_sustainability: 'Kuramba', about_value_sustainability_desc: 'Dushyigikira ingendo z\'ibidukikije zibungabunga umutungo kamere wa Rwanda.',
    about_value_community: 'Umuryango', about_value_community_desc: 'Gushyigikira abayobozi b\'aho, abahanzi, n\'ibigo mu ntara zose.', about_value_authenticity: 'Ukuri', about_value_authenticity_desc: 'Ubumenyi nyakuri buguhuza n\'umutima w\'ukuri wa Rwanda.',

    province_about_label: 'Ibyerekeye Intara', province_signature_label: 'Ubunararibonye bwihariye', province_top_attractions_label: 'Ibikorwa by\'ingenzi', province_what_to_see_title: 'Ibyo gusura & gukora', province_must_visit_label: 'Aho ugomba gusura', province_culture_label: 'Umuco n\'Umurage', province_cta_button_plan_visit: 'Tegura Urugendo Rwanjye', province_label_capital_city: 'Umujyi w\'intara', province_label_total_area: 'Urusobe rw\'ubutaka', province_label_population: 'Abaturage', province_label_highest_peak: 'Umusozi muremure', province_label_from_kigali: 'Uvuye Kigali',

    north_about_title: 'Aho ibiremwa binini biguruka', north_about_desc_1: 'Intara y\'Amajyaruguru ni yo ibamo Pariki ya Volcanoes — imwe mu masambu y\'inyamaswa asumba ayandi ku isi kandi ari yo honyine mu Rwanda ushobora gusura ingagi zo mu misozi mu buryo bw\'ubwiza bw\'ibidukikije.', north_about_desc_2: 'Pariki iri mu misozi ya Virunga, uruzitiro rw\'imirwano umunani muremure hagati ya Rwanda, Uganda, na DRC. Icyatsi cy\'ahitwa, ni paradizo y\'umuhisi, ifite inzira zigana ku misozi ya volcano, ahabera ingagi za zahabu, n\'ahazwi n\'umusigiti wa Dian Fossey.', north_about_desc_3: 'Beyond the park, the charming town of Musanze offers lava tube caves, the serene twin lakes of Burera and Ruhondo, and a thriving local culture.', north_tag_1: 'Gusura Ingagi', north_tag_2: 'Pariki ya Volcanoes', north_tag_3: 'Gusura & Gutembera', north_tag_4: 'Ibiyaga bibiri',
    south_about_title: 'Ishyamba rya Nyungwe rya Afurika y\'Amajyepfo', south_about_desc_1: 'Intara y\'Amajyepfo ishingiye kuri Pariki ya Nyungwe Forest — imwe mu mashyamba ya kera kandi yuzuye amoko menshi y\'ibinyabuzima, ikwirakwizwa henshi ku buso bwa km² 1,000.', south_about_desc_2: 'Kurikirana ingagi n\'andi moko 13 y\'inyamaswa, ugende ku nkengero za canopy, cyangwa ukine ku isoko y\'uruzi rwa Nil hafi na Nyungwe.', south_about_desc_3: 'Intara kandi ikurura abashaka icyayi — imisozi ihishije y\'ibyatsi by\'icyayi iherereye muri Huye, Nyamagabe, na Nyaruguru.', south_tag_1: 'Ishyamba rya Nyungwe', south_tag_2: 'Kugenzura Injangwe z\'inama', south_tag_3: 'Inzira ya Canopy', south_tag_4: 'Imirima y\'icyayi', south_feature_desc: 'Tembera metero 160 mu muyoboro w\'inkingi uri metero 50 hejuru y\'ubutaka bw\'ishyamba — ni kimwe mu byiyumvo bikurura cyane muri Afurika.',
    east_about_title: 'Uburasirazuba bwa Rwanda', east_about_desc_1: 'Intara y\'Iburasirazuba ni yo ntara nini muri Rwanda, ifite ibibaya binini, ibibaya by\'ifumbire bya papyrus, n\'ibiyaga byiza ku mupaka wa Tanzaniya.', east_about_desc_2: 'Iri hantu ni cyo honyine Rwanda ifite Pariki ya Akagera — ishyamba rya savanna rya Rwanda aho ushobora guhura n\'inyamaswa z\'ubwoko bwa Big Five: intare, umugabo, inzovu, inka, n\'inzoga y\'umutwe w\'akataraboneka.', east_about_desc_3: 'Hagati y\'inyamaswa, intara itanga ibiyaga by\'ituze byo gusiganwa, imiryango y\'abantu bakomeye, n\'ubuzima buciriritse.', east_tag_1: 'Safari ya Big Five', east_tag_2: 'Safari y\'imiturire', east_tag_3: 'Ibisiga 525+', east_tag_4: 'Ibiyaga by\'ubwiza',
    west_about_title: 'Amahoro ku nkengero za Kivu', west_about_desc_1: 'Intara y\'Iburengerazuba isobanurwa n\'ikiyaga cya Kivu — kimwe mu biyaga binini bya Afurika, kigaragara ku mupaka wa Rwanda na Repubulika Iharanira Demokarasi ya Kongo.', west_about_desc_2: 'Imijyi yo ku nkengero nka Rubavu na Rusizi ni ibice by\'akarere karuhije, byujuje uburaro bwa rivage, ingendo ku biyaga, amaresitora y\'ifunguro ry\'icyayi, n\'izuba ry\'ijoro rifite uburanga bwo hejuru.', west_about_desc_3: 'Muri imbere hari Pariki ya Gishwati-Mukura — pariki ya kane ya Rwanda, ikaba ariyo ibamo ingagi, inkende za zahabu, ndetse n\'ishyamba rikiri kuryoha mu buryo buteye imbere.', west_tag_1: 'Ikiyaga cya Kivu', west_tag_2: 'Gusura ibirwa', west_tag_3: 'Ishyamba rya Gishwati', west_tag_4: 'Amaresitora y\'inkengero',
    kigali_about_title: 'Umujyi w\'icyubahiro cya Afurika', kigali_about_desc_1: 'Kigali ihora ku isonga mu mijyi isukuye kandi itekanye muri Afurika — intambwe idasanzwe yerekana impinduka z\'igihugu kuva mu 1994.', kigali_about_desc_2: 'Kigali itwikiriye ku misozi itandukanye, umujyi usanganira ibishya n\'amasoko afite amabara, amaresitora y\'icyiciro cya mbere, ndetse n\'umuco w\'abahanzi. Ikicaro cya Kigali Convention Centre cyatumye Rwanda iba ahantu h\'amahuriro mpuzamahanga.', kigali_about_desc_3: 'Gusura Kigali Genocide Memorial ni urugendo rukomeye kandi rw\'ingenzi — icyubahiro gikomeye ku mateka ya Rwanda kandi gishyigikira umwuka w\'ubwiyunge bw\'igihugu.', kigali_tag_1: 'Urwibutso rw\'Ubwicanyi', kigali_tag_2: 'Umuco & Ubuhanzi', kigali_tag_3: 'Ibiribwa by\'Isi', kigali_tag_4: 'Imbyino za Intore',

    services_hero_label: 'Ibyo Dutanga', services_hero_title: 'Serivisi zacu', services_hero_desc: 'Amahugurwa n\'ubuzima bw\'abagenzi byateguwe neza kuri buri mukerarugendo. Guhera ku gusura ingagi kugeza mu mijyi, Rwanda turayifite.',
    services_process_label: 'Uko Bikorwa', services_process_title: 'Tegura urugendo rwawe mu byiciro 3',
    services_step_1_title: 'Hitamo Uko Uzagenda', services_step_1_desc: 'Soma serivisi zacu uhitemo ibikorwa bikurura cyane.',
    services_step_2_title: 'Vugana n\'Itsinda Ryacu', services_step_2_desc: 'Tuzagukorerera gahunda yihariye ku matariki yawe n\'ibyo ukunda.',
    services_step_3_title: 'Sura Rwanda', services_step_3_desc: 'Ugera hano, ubone abayobozi b\'ahacu bagutware mu rugendo rutazibagirana.',
    service_card_1_title: 'Gutembera Ingagi', service_card_1_desc: 'Kurikirana ingagi zo mu misozi muri Pariki ya Volcanoes n\'abayobozi b\'inararibonye.',
    service_card_2_title: 'Urugendo rw\'umuco wa Kigali', service_card_2_desc: 'Sura ubuhanzi, amasoko, n\'ahantu ho kurira i Kigali hamwe n\'umuyobozi w\'aho.',
    service_card_3_title: 'Irindi Joro ku Kibanza cy\'Icyayi', service_card_3_desc: 'Sura imisozi y\'icyayi, wige ku bahinzi, unyurwe n\'ibibanza byiza byo mu misozi.',
    service_card_4_title: 'Uburambe bwo ku Musozi wa Nyungwe', service_card_4_desc: 'Utembere mu ruhande rwo hejuru rwa Nyungwe kugirango urebe ubuzima nyaburanga bwa Rwanda.',
    service_card_5_title: 'Kuruhukira kuri Kivu', service_card_5_desc: 'Ruhukira ku nkengero za Kivu, usure ibirwa, unyurwe n\'izuba ry\'ijoro.',
    service_card_6_title: 'Safari y\'Inyamaswa', service_card_6_desc: 'Reba inzovu, intare, hippo, n\'inyoni mu mashyamba ya Akagera.',

    contact_hero_label: 'Twandikire', contact_hero_title: 'Twandikire', contact_hero_desc: 'Witeguye gutangira urugendo rwawe muri Rwanda? Itsinda ry\'abahanga b\'ahacu riri hano kugufasha gutegura urugendo rwiza.',
    contact_info_address: 'Aderesi', contact_info_email: 'Imeyili', contact_info_phone: 'Telefoni', contact_info_website: 'Urubuga',
    contact_first_name: 'Izina rya Mbere', contact_last_name: 'Izina rya Nyuma', contact_email_address: 'Imeyili', contact_interested_in: 'Mfite ubushake kuri', contact_message: 'Ubutumwa bwawe',
    contact_placeholder_first_name: 'Jean', contact_placeholder_last_name: 'Kagabo', contact_placeholder_email: 'wowe@example.com', contact_placeholder_service: 'Hitamo serivisi...', contact_placeholder_message: 'Tangira kutubwira urugendo rw\'inzozi zawe muri Rwanda...',
    contact_send_button: 'Ohereza Ubutumwa', contact_sent_confirmation: '✅ Ubutumwa bwoherejwe!',

    login_title: 'Injira', login_button: 'Injira', login_no_account: 'Nta konti ufite?', login_register: 'Iyandikishe',
    register_title: 'Iyandikishe', register_button: 'Iyandikishe', register_have_account: 'Usanzwe ufite konti?', register_login: 'Injira',
    register_placeholder_full_name: 'Izina ryose', register_placeholder_email: 'Aderesi imeyili', register_placeholder_phone: 'Numero ya telefoni', register_placeholder_age: 'Imyaka', register_placeholder_gender: 'Hitamo igitsina',
    register_gender_male: 'Gabo', register_gender_female: 'Gore', register_gender_other: 'Ikindi',

    destinations_label: 'Aho Ugiye', destinations_intro: 'Hitamo intara usure ibyiza bya Rwanda.',
    north_hero_title: 'Intara y\'Amajyaruguru', north_hero_desc: 'Aho imisozi y\'ibirunga, ingagi, n\'ibiyaga bibiri by\'ibiziga — intara ikomeye kandi ikomeye ya Rwanda.',
    north_feature_label: 'Ubunararibonye bwihariye', north_feature_title: 'Gusura Ingagi', north_cta_title: 'Witeguye guhura n\'ingagi?', north_cta_desc: 'Ububasha bwo gusura ingagi burihuta. Twandikire uyu munsi kugira ngo ubone umwanya wawe.', north_cta_button: 'Bika Urugendo rw\'Ingagi',
    south_hero_title: 'Intara y\'Amajyepfo', south_hero_desc: 'Amashyamba y\'akera, ingagi z\'ifaranga, imisozi y\'icyayi, n\'ikiyaga cy\'igiti — umutima w\'ibara ry\'icyatsi cya Rwanda.',
    south_feature_label: 'Ubunararibonye bwihariye', south_feature_title: 'Inzira y\'Umuhuza', south_cta_title: 'Sura igisobanuro cy\'ishyamba ry\'akera', south_cta_desc: 'Uhereye mu gusura ingagi kugeza ku nzira y\'umuhuza — Nyungwe itanga ubunararibonye budasanzwe.', south_cta_button: 'Tegura Urugendo Rwanjye',
    east_hero_title: 'Intara y\'Iburasirazuba', east_hero_desc: 'Umuvuduko w\'igishanga cya safari muri Rwanda — Akagera, Big Five, ibiyaga by\'ubururu, n\'ibisagara by\'uburabyo.',
    east_feature_title: 'Pariki ya Akagera', east_cta_title: 'Witeguye gusura iburasirazuba?', east_cta_desc: 'Dutegure safari yawe n\'ibiruhukiro by\'ibiyaga mu burasirazuba bwa Rwanda.', east_cta_button: 'Tegura Urugendo Rwanjye',
    west_hero_title: 'Intara y\'Iburengerazuba', west_hero_desc: 'Ikinyuranyo cy\'ikiyaga cya Kivu, uturere tugari, n\'ibitekerezo by\'imurikagurisha — ibyiza by\'ijoro rya Rwanda.',
    west_feature_title: 'Ubuzima kuri Kivu', west_cta_title: 'Sohoka kuri Kivu', west_cta_desc: 'Iminsi yo ku kiyaga, ingendo ku kirwa, n\'ibisubizo by\'izuba — ibiruhuko bya Kivu ni byo byiza muri Rwanda.', west_cta_button: 'Tegura Urugendo Rwanjye',
    kigali_hero_title: 'Umujyi wa Kigali', kigali_hero_desc: 'Umujyi usukuye, utekanye, kandi w\'iterambere — aho ubukorikori buhuza umuco n\'iterambere ku misozi myiza ya Rwanda.',
    kigali_feature_label: 'Umuco n\'Umurage', kigali_feature_title: 'Umuco wa Kigali', kigali_cta_title: 'Sura Kigali', kigali_cta_desc: 'Uhereye ku kinyenzi gukura kugeza ku masoko — Kigali ni umujyi uzagukora ku mutima.', kigali_cta_button: 'Tegura Urugendo Rwanjye',

    gallery_heading: 'Amafoto', photo_gallery_title: 'Gallery y\'Amafoto', gallery_description: 'Urugendo rw\'amafoto muri Rwanda rwerekana imisozi, inyamaswa n\'umuco bitangaje.', gallery_category_all: 'Zose', gallery_category_wildlife: 'Inyamaswa', gallery_category_landscapes: 'Imiterere', gallery_category_culture: 'Umuco', gallery_category_cities: 'Imijyi', gallery_category_lakes: 'Ibiyaga', gallery_no_results: 'Nta mafoto yabonetse kuri iyi category.',

    videos_heading: 'Reba & Sobanukirwa', videos_description: 'Wiyumvemo igihugu cy\'imisozi ibihumbi binyuze mu mashusho ashimishije n\'inkuru.', videos_featured: 'Byahiswemo', videos_all_videos: 'Amavideo yose', videos_category_all: 'Zose', videos_category_wildlife: 'Inyamaswa', videos_category_culture: 'Umuco', videos_category_adventure: 'Ubushakashatsi', videos_category_city_life: 'Ubuzima bw\'umujyi', videos_category_nature: 'Ubuzima bw\'urusobe', videos_watch_on_youtube: 'Reba kuri YouTube', videos_no_results: 'Nta mavideo yabonetse kuri iyi category.',

    dashboard_title: 'Dashboard', dashboard_overview: 'Incamake', dashboard_booking: 'Kubika', dashboard_user: 'Umukoresha', dashboard_logout: 'Sohoka',
  },
  FR: {
    home: 'Accueil', about: 'À Propos', services: 'Services', gallery: 'Galerie', photos: 'Photos', videos: 'Vidéos', destinations: 'Destinations', contact: 'Contact', login: 'Connexion', register: 'Inscription',
    northern: 'Province du Nord', southern: 'Province du Sud', kigali: 'Ville de Kigali', eastern: "Province de l'Est", western: 'Province de l\'Ouest',

    discover: 'Découvrir', rwanda: 'le Rwanda', hero_sub: "Où les habitats intacts des gorilles rencontrent une culture vibrante, des collines verdoyantes et des paysages à couper le souffle. Votre aventure africaine commence ici.",
    explore_services: 'Explorer les services', about_rwanda: 'À propos du Rwanda', why_visit_label: 'Pourquoi Visiter', rwanda_awaits: 'Le Rwanda Vous Attend',
    cta_title: 'Prêt pour votre', cta_highlight: 'Aventure au Rwanda?', cta_sub: 'Des gorilles de montagne à la vie urbaine dynamique — le Rwanda offre des expériences inoubliables.', plan_trip: 'Planifier mon voyage',
    feature_1_title: 'Randonnée des gorilles', feature_1_desc: 'L\'une des rencontres fauniques les plus extraordinaires au monde — rencontrez les gorilles des montagnes dans leur habitat volcanique naturel.',
    feature_2_title: 'Éco-tourisme', feature_2_desc: 'Le Rwanda est une destination éco-touristique de premier plan en Afrique, engagée dans un voyage durable et la préservation de ses merveilles naturelles.',
    feature_3_title: 'Culture riche', feature_3_desc: 'Explorez des traditions vibrantes, la danse Intore, l\'art et un peuple résilient dont la chaleur et l\'hospitalité sont mondialement reconnues.',
    feature_4_title: 'Paysages à couper le souffle', feature_4_desc: 'Collines émeraude ondulantes, lacs scintillants et sommets volcaniques — les paysages du Rwanda sont infiniment photogéniques.',
    feature_5_title: 'Safaris animaliers', feature_5_desc: 'De l\'Akagera aux Big Five aux chimpanzés de Nyungwe, le Rwanda offre des safaris palpitants à travers des écosystèmes diversifiés.',
    feature_6_title: 'Kigali', feature_6_desc: 'La capitale la plus propre et la plus sûre d\'Afrique, avec des restaurants de classe mondiale, des musées et une vie nocturne animée.',
    footer_tagline: 'Découvrez la beauté du pays aux mille collines', footer_quick_links: 'Liens rapides', footer_destinations: 'Destinations',

    about_hero_label: 'Notre histoire', about_hero_title: 'À propos du Rwanda', about_hero_desc: 'Le pays aux mille collines et une hospitalité chaleureuse — découvrez pourquoi le Rwanda est l\'une des destinations touristiques les plus inspirantes d\'Afrique.',
    about_who_we_are_label: 'Qui nous sommes', about_brand_title: 'Tembera Urwanda', about_para_1: '"Tembera Urwanda" signifie "Visitez le Rwanda" en kinyarwanda. Nous sommes une plateforme touristique dédiée à présenter le meilleur du Rwanda — sa faune, sa culture, ses paysages et son peuple.',
    about_para_2: 'Des jungles embrumées du parc national des Volcans aux rivages baignés de soleil du lac Kivu, nous guidons les voyageurs à travers des expériences authentiques qui laissent des souvenirs durables.',
    about_para_3: 'Nous croyons en un tourisme responsable et durable qui profite aux communautés locales et préserve le patrimoine naturel du Rwanda pour les générations à venir.',
    mission_title: 'Notre mission', mission_desc: 'Promouvoir un tourisme responsable au Rwanda, connectant les voyageurs à des expériences authentiques tout en soutenant les communautés locales et en protégeant l\'environnement.',
    about_value_sustainability: 'Durabilité', about_value_sustainability_desc: 'Nous encourageons les voyages éco-responsables qui protègent les ressources naturelles du Rwanda.',
    about_value_community: 'Communauté', about_value_community_desc: 'Soutenir les guides locaux, les artisans et les entreprises dans chaque province.',
    about_value_authenticity: 'Authenticité', about_value_authenticity_desc: 'Des expériences authentiques qui vous connectent à l\'âme véritable du Rwanda.',

    province_about_label: 'À propos de la région', province_signature_label: 'Expérience Signature', province_top_attractions_label: 'Attractions Principales', province_what_to_see_title: 'À Voir & Faire', province_must_visit_label: 'À visiter absolument', province_culture_label: 'Culture & Patrimoine', province_cta_button_plan_visit: 'Planifier mon voyage', province_label_capital_city: 'Capitale', province_label_total_area: 'Superficie totale', province_label_population: 'Population', province_label_highest_peak: 'Sommet le plus élevé', province_label_from_kigali: 'Depuis Kigali',

    north_about_title: 'Où les géants vivent', north_about_desc_1: 'La province du Nord abrite le parc national des Volcans — l\'un des sanctuaires fauniques les plus extraordinaires au monde et le seul endroit au Rwanda où vous pouvez randonner pour voir les gorilles des montagnes dans leur habitat naturel.', north_about_desc_2: 'Le parc se trouve dans le massif des Virunga, une chaîne de huit volcans imposants reliant le Rwanda, l\'Ouganda et la RDC. Le paysage dramatique est un paradis pour les randonneurs, avec des sentiers menant aux sommets des volcans, aux habitats des singes dorés et au célèbre site de la tombe de Dian Fossey.', north_about_desc_3: 'Au-delà du parc, la charmante ville de Musanze offre des grottes de tubes de lave, les lacs jumeaux sereins de Burera et Ruhondo, et une culture locale prospère.', north_tag_1: 'Randonnée des gorilles', north_tag_2: 'Parc des volcans', north_tag_3: 'Randonnée & Trekking', north_tag_4: 'Lacs jumeaux',
    south_about_title: 'La forêt ancienne de l\'Afrique', south_about_desc_1: 'La province du Sud est ancrée par le parc national de la forêt de Nyungwe — l\'une des forêts montagneuses les plus anciennes et les plus riches en biodiversité d\'Afrique.', south_about_desc_2: 'Suivez les chimpanzés et 13 autres espèces de primates, marchez sur la passerelle suspendue palpitante à 50 mètres au-dessus du sol de la forêt, ou randonnez jusqu\'à la source du Nil près du bassin versant de Nyungwe.', south_about_desc_3: 'La province est également la terre du thé au Rwanda — des collines couvertes de plantations d\'un vert émeraude autour de Huye, Nyamagabe et Nyaruguru.', south_tag_1: 'Forêt de Nyungwe', south_tag_2: 'Suivi des chimpanzés', south_tag_3: 'Passerelle canopée', south_tag_4: 'Plantations de thé', south_feature_desc: 'Marchez 160 mètres sur un pont suspendu à 50 mètres au-dessus du sol de la forêt — l\'une des expériences les plus excitantes d\'Afrique.',
    east_about_title: 'L\'Est sauvage du Rwanda', east_about_desc_1: 'La province de l\'Est est la plus grande province du Rwanda, s\'étendant sur de vastes savanes, des zones humides bordées de papyrus et une chaîne de magnifiques lacs le long de la frontière tanzanienne.', east_about_desc_2: 'Elle abrite le parc national d\'Akagera — le seul parc de savane du Rwanda et le seul endroit du pays où vous pouvez rencontrer les Big Five : lion, léopard, éléphant, buffle et le rhinocéros noir en danger critique.', east_about_desc_3: 'Au-delà de la faune, la province offre des lacs sereins pour le kayak et la pêche, des communautés locales dynamiques et un rythme de vie détendu.', east_tag_1: 'Safari du Big Five', east_tag_2: 'Safaris en bateau', east_tag_3: '525+ espèces d\'oiseaux', east_tag_4: 'Lacs pittoresques',
    west_about_title: 'Le paradis des rives du lac', west_about_desc_1: 'La province de l\'Ouest est définie par le magnifique lac Kivu — l\'un des grands lacs d\'Afrique, s\'étendant sur 90 km le long de la frontière ouest du Rwanda avec la RDC.', west_about_desc_2: 'Les villes lacustres de Rubavu (Gisenyi) et Rusizi (Cyangugu) sont des destinations balnéaires prisées, offrant des plages de sable blanc, des croisières en bateau vers des îles jungle, des restaurants de poissons frais et des couchers de soleil spectaculaires sur les montagnes du Congo.', west_about_desc_3: 'À l\'intérieur des terres se trouve le parc national de Gishwati-Mukura — le quatrième parc national du Rwanda, abritant des chimpanzés, des singes dorés et un écosystème forestier en restauration sur le Rift Albertin.', west_tag_1: 'Lac Kivu', west_tag_2: 'Visite des îles', west_tag_3: 'Forêt de Gishwati', west_tag_4: 'Stations balnéaires',
    kigali_about_title: 'La capitale gemme de l\'Afrique', kigali_about_desc_1: 'Kigali est régulièrement classée comme la capitale la plus propre et la plus sûre d\'Afrique — un accomplissement remarquable qui reflète la transformation extraordinaire du Rwanda depuis 1994.', kigali_about_desc_2: 'Étendue sur une série de collines pittoresques, la ville mélange une architecture moderne élégante avec des marchés vibrants, des restaurants de classe mondiale et une scène artistique florissante. Le Kigali Convention Centre a fait du Rwanda une destination de premier plan pour les conférences internationales.', kigali_about_desc_3: 'Une visite au Mémorial du génocide de Kigali est à la fois puissante et essentielle — un hommage profond à l\'histoire du Rwanda et un témoignage inspirant de l\'esprit de réconciliation de la nation.', kigali_tag_1: 'Mémorial du génocide', kigali_tag_2: 'Art & Culture', kigali_tag_3: 'Restauration de classe mondiale', kigali_tag_4: 'Danse Intore',

    services_hero_label: 'Ce que nous offrons', services_hero_title: 'Nos Services', services_hero_desc: 'Des circuits et expériences conçus pour chaque voyageur. De la randonnée des gorilles aux visites de la ville, le Rwanda est à votre portée.',
    services_process_label: 'Comment ça marche', services_process_title: 'Planifiez votre voyage en 3 étapes',
    services_step_1_title: 'Choisissez votre expérience', services_step_1_desc: 'Parcourez nos services et choisissez les activités qui vous enthousiasment le plus.',
    services_step_2_title: 'Contactez notre équipe', services_step_2_desc: 'Nous concevrons un itinéraire personnalisé adapté à vos dates et intérêts.',
    services_step_3_title: 'Explorez le Rwanda', services_step_3_desc: 'Arrivez et laissez nos guides locaux experts vous emmener pour une aventure inoubliable.',
    service_card_1_title: 'Randonnée des gorilles', service_card_1_desc: 'Parcourez le parc national des Volcans avec des guides experts pour une rencontre authentique avec les gorilles.',
    service_card_2_title: 'Tour culturel de Kigali', service_card_2_desc: 'Découvrez l\'art, les marchés et la gastronomie de Kigali avec un guide local.',
    service_card_3_title: 'Retraite des plantations de thé', service_card_3_desc: 'Visitez les collines de thé luxuriantes, apprenez des agriculteurs et séjournez dans des lieux pittoresques.',
    service_card_4_title: 'Expérience de la passerelle', service_card_4_desc: 'Marchez dans la canopée de la forêt de Nyungwe pour une vue unique sur la biodiversité du Rwanda.',
    service_card_5_title: 'Escapade au lac Kivu', service_card_5_desc: 'Détendez-vous sur les rives du lac Kivu, visitez des îles et profitez des couchers de soleil paisibles.',
    service_card_6_title: 'Safari animalier', service_card_6_desc: 'Observez éléphants, lions, hippopotames et oiseaux dans le parc national d\'Akagera.',

    contact_hero_label: 'Contactez-nous', contact_hero_title: 'Contactez-nous', contact_hero_desc: 'Prêt à commencer votre aventure au Rwanda ? Notre équipe d\'experts locaux est là pour vous aider à planifier le voyage parfait.',
    contact_info_address: 'Adresse', contact_info_email: 'Email', contact_info_phone: 'Téléphone', contact_info_website: 'Site Web',
    contact_first_name: 'Prénom', contact_last_name: 'Nom', contact_email_address: 'Adresse e-mail', contact_interested_in: 'Je suis intéressé par', contact_message: 'Votre message',
    contact_placeholder_first_name: 'Jean', contact_placeholder_last_name: 'Kagabo', contact_placeholder_email: 'vous@exemple.com', contact_placeholder_service: 'Choisissez un service...', contact_placeholder_message: 'Parlez-nous de votre voyage de rêve au Rwanda...',
    contact_send_button: 'Envoyer le message', contact_sent_confirmation: '✅ Message envoyé !',

    login_title: 'Connexion', login_button: 'Connexion', login_no_account: 'Vous n\'avez pas de compte ?', login_register: 'Inscription',
    register_title: 'Inscription', register_button: 'Inscription', register_have_account: 'Vous avez déjà un compte ?', register_login: 'Connexion',
    register_placeholder_full_name: 'Nom complet', register_placeholder_email: 'Adresse e-mail', register_placeholder_phone: 'Numéro de téléphone', register_placeholder_age: 'Âge', register_placeholder_gender: 'Choisir le sexe',
    register_gender_male: 'Homme', register_gender_female: 'Femme', register_gender_other: 'Autre',

    destinations_label: 'Destinations', destinations_intro: 'Choisissez une province pour explorer le meilleur du Rwanda.',
    north_hero_title: 'Province du Nord', north_hero_desc: 'Terre de sommets volcaniques, de gorilles de montagne et de lacs jumeaux — la région la plus spectaculaire du Rwanda.',
    north_feature_label: 'Expérience Signature', north_feature_title: 'Randonnée des gorilles', north_cta_title: 'Prêt à rencontrer les gorilles ?', north_cta_desc: 'Les permis de gorille se vendent vite. Contactez-nous dès aujourd\'hui pour sécuriser votre rencontre inoubliable.', north_cta_button: 'Réserver la randonnée',
    south_hero_title: 'Province du Sud', south_hero_desc: 'Forêts anciennes, chimpanzés, collines de thé et la célèbre passerelle canopée — le cœur verdoyant du Rwanda.',
    south_feature_label: 'Expérience Signature', south_feature_title: 'La Passerelle Canopée', south_cta_title: 'Explorez la forêt ancienne', south_cta_desc: 'De la randonnée des chimpanzés à la passerelle canopée — Nyungwe offre des expériences uniques au monde.', south_cta_button: 'Planifier ma visite',
    east_hero_title: 'Province de l\'Est', east_hero_desc: 'Le cœur safari du Rwanda — Akagera, le Big Five, des lacs scintillants et des savanes ouvertes.',
    east_feature_title: 'Parc national d\'Akagera', east_cta_title: 'Prêt à explorer l\'Est ?', east_cta_desc: 'Laissez nos experts locaux planifier votre safari et votre aventure lacustre dans l\'Est sauvage du Rwanda.', east_cta_button: 'Planifier mon voyage',
    west_hero_title: 'Province de l\'Ouest', west_hero_desc: 'Le magnifique lac Kivu, des retraites insulaires, la forêt Gishwati-Mukura et des couchers de soleil époustouflants.',
    west_feature_title: 'Vie sur le lac Kivu', west_cta_title: 'Évadez-vous au Kivu', west_cta_desc: 'Journées au lac, excursions insulaires et couchers de soleil — le Kivu est la destination ultime du Rwanda.', west_cta_button: 'Planifier mon voyage',
    kigali_hero_title: 'Ville de Kigali', kigali_hero_desc: 'La capitale la plus propre, la plus sûre et la plus dynamique d\'Afrique — où la modernité rencontre la culture dans les collines du Rwanda.',
    kigali_feature_label: 'Culture & Patrimoine', kigali_feature_title: 'La culture de Kigali', kigali_cta_title: 'Découvrez Kigali', kigali_cta_desc: 'Du mémorial aux marchés — Kigali est une ville qui vous émouvra, vous inspirera et vous dynamisera.', kigali_cta_button: 'Planifier mon voyage à Kigali',

    gallery_heading: 'Galerie', photo_gallery_title: 'Galerie Photo', gallery_description: 'Un voyage visuel à travers les paysages, la faune et la culture époustouflants du Rwanda.', gallery_category_all: 'Tout', gallery_category_wildlife: 'Faune', gallery_category_landscapes: 'Paysages', gallery_category_culture: 'Culture', gallery_category_cities: 'Villes', gallery_category_lakes: 'Lacs', gallery_no_results: 'Aucune photo trouvée pour cette catégorie.',

    videos_heading: 'Regarder & Explorer', videos_description: 'Plongez dans le pays aux mille collines à travers des images époustouflantes et des histoires.', videos_featured: 'En vedette', videos_all_videos: 'Toutes les vidéos', videos_category_all: 'Tout', videos_category_wildlife: 'Faune', videos_category_culture: 'Culture', videos_category_adventure: 'Aventure', videos_category_city_life: 'Vie urbaine', videos_category_nature: 'Nature', videos_watch_on_youtube: 'Regarder sur YouTube', videos_no_results: 'Aucune vidéo trouvée pour cette catégorie.',

    dashboard_title: 'Dashboard', dashboard_overview: 'Aperçu', dashboard_booking: 'Réservation', dashboard_user: 'Utilisateur', dashboard_logout: 'Se Déconnecter',
  }
}

export function t(key) {
  const lang = activeLang.value || 'EN'
  return translations[lang]?.[key] || translations['EN']?.[key] || key
}

// keep localStorage in sync
watch(activeLang, (v) => {
  localStorage.setItem('lang', v)
})
