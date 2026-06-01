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
    home: 'Home', about: 'About Us', services: 'Services', gallery: 'Gallery', photos: 'Photos', videos: 'Videos', destinations: 'Destinations', contact: 'Contact',
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
  },
  RW: {
    home: 'Ahabanza', about: 'Abo Turi Bo', services: 'Serivisi', gallery: 'Amafoto', photos: 'Amafoto', videos: 'Amavideo', destinations: 'Aho Ugiye', contact: 'Twandikire',
    northern: "Intara y'Amajyaruguru", southern: "Intara y'Amajyepfo", kigali: 'Umujyi wa Kigali', eastern: "Intara y'Iburasirazuba", western: "Intara y'Iburengerazuba",

    discover: 'Tangira', rwanda: 'Rwanda', hero_sub: 'Aho ingagi zitwikiriye ahantu heza, umuco ugaragara, imigabane y0 amashyamba n0 ibyiza by0 ubwiza. Urugendo rwawe rutangiriye hano.',
    explore_services: 'Kurikirana Serivisi', about_rwanda: 'Ibyerekeye Rwanda', why_visit_label: 'Impamvu zo Gusura', rwanda_awaits: 'Rwanda Itegereje',
    cta_title: 'Witeguye', cta_highlight: 'Urugendo rwawe muri Rwanda?', cta_sub: "Uhereye ku ngagi kugeza ku buzima bw'umujyi — Rwanda itanga ibyibutsa ku mwuka w'urugendo.", plan_trip: 'Tegura Urugendo Rwanjye',
    feature_1_title: 'Gusura Ingagi', feature_1_desc: 'Kimwe mu bikorwa byihariye ku isi — uhure n\'ingagi z\'umuturirwa mu ishyamba ryazo kavukire.',
    feature_2_title: 'Ubukerarugendo Bushingiye ku Bidukikije', feature_2_desc: 'Rwanda ni kimwe mu bihugu bya Afurika byiyemeje ubukerarugendo buramba no kubungabunga ibidukikije.',
    feature_3_title: 'Umurage Uhambaye', feature_3_desc: 'Sura imigenzo y\'uburanga, imbyino za Intore, ubuhanzi n\'abantu b\'umutima w\'ubuntu.',
    feature_4_title: 'Imiterere Yiza', feature_4_desc: 'Imisozi y\'ibara ry\'icyatsi, ibiyaga by\'umutuzo n\'imisozi ya volcano — ubwiza bwa Rwanda ntibuhagaze.',
    feature_5_title: 'Safari y\'inyamaswa', feature_5_desc: 'Uhereye ku Big Five muri Akagera kugeza ku nkingi za chimpanzees muri Nyungwe, Rwanda itanga safari zidasanzwe.',
    feature_6_title: 'Umujyi wa Kigali', feature_6_desc: 'Umujyi utekanye kandi usukuye, ufite resitora nziza, inzu ndangamurage n\'ubuzima bw\'ijoro buteye akanyamuneza.',
    footer_tagline: 'Sobanukirwa ubwiza bw\'igihugu cy\'imisozi ibihumbi', footer_quick_links: 'Amakuru yihuta', footer_destinations: 'Aho ugiye',
  },
  FR: {
    home: 'Accueil', about: 'À Propos', services: 'Services', gallery: 'Galerie', photos: 'Photos', videos: 'Vidéos', destinations: 'Destinations', contact: 'Contact',
    northern: 'Province du Nord', southern: 'Province du Sud', kigali: 'Ville de Kigali', eastern: "Province de l'Est", western: "Province de l'Ouest",

    discover: 'Découvrir', rwanda: 'le Rwanda', hero_sub: "Où les habitats intacts des gorilles rencontrent une culture vibrante, des collines verdoyantes et des paysages à couper le souffle. Votre aventure africaine commence ici.",
    explore_services: 'Explorer les services', about_rwanda: 'À propos du Rwanda', why_visit_label: 'Pourquoi Visiter', rwanda_awaits: "Le Rwanda Vous Attend",
    cta_title: "Prêt pour votre", cta_highlight: "Aventure au Rwanda?", cta_sub: "Des gorilles de montagne à la vie urbaine dynamique — le Rwanda offre des expériences inoubliables.", plan_trip: 'Planifier mon voyage',
    our_story_label: 'Notre histoire', about_rwanda_heading: 'À propos du Rwanda', about_para_1: 'Le pays aux mille collines — une nation d\'une résilience extraordinaire, d\'une beauté époustouflante et d\'une chaleureuse hospitalité nichée au cœur de l\'Afrique.',
    about_who_we_are_label: 'Qui nous sommes', about_brand_title: 'Tembera Urwanda', about_para_2: '"Tembera Urwanda" signifie "Visitez le Rwanda" en kinyarwanda. Nous sommes une plateforme touristique dédiée à présenter le meilleur du Rwanda — sa faune, sa culture, ses paysages et son peuple.',
    about_para_3: 'Des jungles embrumées du parc national des Volcans aux rivages baignés de soleil du lac Kivu, nous guidons les voyageurs à travers des expériences rwandaises authentiques qui laissent des souvenirs durables.',
    about_para_4: 'Nous croyons en un tourisme responsable et durable qui profite aux communautés locales et préserve le précieux patrimoine naturel du Rwanda pour les générations à venir.',
    about_card_wildlife: 'Faune', about_card_wildlife_sub: 'Gorilles & Big Five',
    about_card_eco: 'Éco-tourisme', about_card_eco_sub: 'Voyage durable',
    about_card_culture: 'Culture', about_card_culture_sub: 'Traditions riches',
    about_card_adventure: 'Aventure', about_card_adventure_sub: 'Randonnée & Trekking',
    mission_title: 'Notre mission', mission_desc: 'Promouvoir un tourisme responsable au Rwanda, connectant les voyageurs à des expériences authentiques tout en soutenant les communautés locales et en protégeant l\'environnement qui rend le Rwanda si extraordinaire.',
    about_value_sustainability: 'Durabilité', about_value_sustainability_desc: 'Nous encourageons les voyages éco-responsables qui protègent les ressources naturelles du Rwanda.',
    about_value_community: 'Communauté', about_value_community_desc: 'Soutenir les guides locaux, les artisans et les entreprises dans chaque province.',
    about_value_authenticity: 'Authenticité', about_value_authenticity_desc: 'Des expériences authentiques qui vous connectent à l\'âme véritable du Rwanda.',
    feature_1_title: 'Randonnée des gorilles', feature_1_desc: 'L\'une des rencontres fauniques les plus extraordinaires au monde — rencontrez les gorilles des montagnes dans leur habitat volcanique naturel.',
    feature_2_title: 'Éco-tourisme', feature_2_desc: 'Le Rwanda est une destination éco-touristique de premier plan en Afrique, engagée dans un voyage durable et la préservation de ses merveilles naturelles.',
    feature_3_title: 'Culture riche', feature_3_desc: 'Explorez des traditions vibrantes, la danse Intore, l\'art et un peuple résilient dont la chaleur et l\'hospitalité sont mondialement reconnues.',
    feature_4_title: 'Paysages à couper le souffle', feature_4_desc: 'Collines émeraude ondulantes, lacs scintillants et sommets volcaniques — les paysages du Rwanda sont infiniment photogéniques.',
    feature_5_title: 'Safaris animaliers', feature_5_desc: 'De l\'Akagera aux Big Five aux chimpanzés de Nyungwe, le Rwanda offre des safaris palpitants à travers des écosystèmes diversifiés.',
    feature_6_title: 'Kigali', feature_6_desc: 'La capitale la plus propre et la plus sûre d\'Afrique, avec des restaurants de classe mondiale, des musées et une vie nocturne animée.',
    footer_tagline: 'Découvrez la beauté du pays aux mille collines', footer_quick_links: 'Liens rapides', footer_destinations: 'Destinations',
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
