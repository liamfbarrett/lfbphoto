// Reporting page content. To add a link, paste the article address into `url`.
// To add a new piece, copy one { title, url } line and edit it.
// Items with an empty url show as plain text until you add one.
// Optional: add note: 'The Daily Northwestern, Oct 2026' for a small gray line under the title.

export interface ReportingItem {
  title: string;
  url?: string;
  note?: string;
}

export const reporting: { heading: string; items: ReportingItem[] }[] = [
  {
    heading: 'Writing',
    items: [
      { title: 'ETHS community reacts to Halloween ICE arrests, campus lockdown with fear, anger', url: '' },
      { title: '‘A caring, warm presence’: Sorority house directors make students feel at home, manage behind-the-scenes', url: '' },
      { title: 'Putting the ‘cat’ in Wildcat: the furries and therians of WJ', url: '' },
      { title: 'WJ community mourns student, supports family', url: '' },
      { title: 'STAGE salvages ‘Grimm’ choice of play', url: '' },
    ],
  },
  {
    heading: 'Video',
    items: [
      { title: 'Billiards Club grows membership, welcomes players of all skill levels', url: '' },
      { title: '‘Keepers of the faith’: Evanston community nonprofit maintains, improves Harley Clarke grounds', url: '' },
      { title: 'Hot Ones with Mr. Joy', url: '' },
      { title: 'Becca’s Closet returns to WJ', url: '' },
    ],
  },
  {
    heading: 'Audio',
    items: [
      { title: 'Rapid Recap: City Council votes to table Housing4All', url: '' },
      { title: 'The Weekly: Faculty and staff react to UnitedHealthcare switch, NU alum on MasterChef and Evanston’s newest TIF district', url: '' },
      { title: 'The Change-Up: State of the School', url: '' },
      { title: 'The Change-Up: The Landon Death Lawsuit', url: '' },
    ],
  },
];

// Links shown at the bottom of the page. Only entries with a url are shown.
export const profiles: { label: string; url: string }[] = [
  { label: 'The Daily Northwestern profile', url: '' },
  { label: 'The Pitch profile', url: '' },
];
