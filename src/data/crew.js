// Fictional Botcore crew. Used by the /team page and the home TeamSection.
// `hue` drives the avatar gradient colour (0-360).

export const crew = [
  { id: '01', name: 'Kai Asher', role: 'Founder & Commander', dept: 'Leadership', hue: 140 },
  { id: '02', name: 'Mori Okada', role: 'Strategy Director', dept: 'Leadership', hue: 280 },
  { id: '03', name: 'Sena Luna', role: 'Creative Director', dept: 'Leadership', hue: 40 },
  { id: '04', name: 'Ren Vex', role: 'Engineering Director', dept: 'Leadership', hue: 190 },
  { id: '05', name: 'Quinn Nova', role: 'Senior Strategist', dept: 'Strategy', hue: 220 },
  { id: '06', name: 'Atlas Reyes', role: 'Research Lead', dept: 'Strategy', hue: 340 },
  { id: '07', name: 'Juno Park', role: 'Brand Strategist', dept: 'Strategy', hue: 160 },
  { id: '08', name: 'Sol Marin', role: 'Art Director', dept: 'Design', hue: 20 },
  { id: '09', name: 'Iris Beck', role: 'Senior Designer', dept: 'Design', hue: 310 },
  { id: '10', name: 'Tomas Aoki', role: 'Motion Designer', dept: 'Design', hue: 250 },
  { id: '11', name: 'Mara Vega', role: 'UX Designer', dept: 'Design', hue: 180 },
  { id: '12', name: 'Liam Frost', role: 'Visual Designer', dept: 'Design', hue: 90 },
  { id: '13', name: 'Dax Rune', role: 'Senior Engineer', dept: 'Engineering', hue: 200 },
  { id: '14', name: 'Esme Kiro', role: 'Frontend Engineer', dept: 'Engineering', hue: 330 },
  { id: '15', name: 'Noa Drake', role: 'Backend Engineer', dept: 'Engineering', hue: 110 },
  { id: '16', name: 'Caspar Yuki', role: 'Platform Engineer', dept: 'Engineering', hue: 260 },
  { id: '17', name: 'Olin Marsh', role: 'AI Engineer', dept: 'Engineering', hue: 150 },
  { id: '18', name: 'Zara Koda', role: 'Executive Producer', dept: 'Production', hue: 10 },
  { id: '19', name: 'Theo Ansel', role: 'Director of Photography', dept: 'Production', hue: 70 },
  { id: '20', name: 'Vale Orion', role: 'Lead Editor', dept: 'Production', hue: 240 },
  { id: '21', name: 'Arlo Pine', role: 'Audio Engineer', dept: 'Production', hue: 300 },
  { id: '22', name: 'Thea Wilder', role: 'Copy Lead', dept: 'Creative', hue: 50 },
  { id: '23', name: 'Finn Oro', role: 'Senior Copywriter', dept: 'Creative', hue: 30 },
  { id: '24', name: 'Rhea Cole', role: 'Social Lead', dept: 'Creative', hue: 350 },
];

export const DEPARTMENTS = [
  'All',
  'Leadership',
  'Strategy',
  'Design',
  'Engineering',
  'Production',
  'Creative',
];

export function initials(name) {
  return name
    .split(' ')
    .map((w) => w[0])
    .slice(0, 2)
    .join('')
    .toUpperCase();
}
