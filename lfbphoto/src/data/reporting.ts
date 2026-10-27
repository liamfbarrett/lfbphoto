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
      { title: 'ETHS community reacts to Halloween ICE arrests, campus lockdown with fear, anger', url: 'https://dailynorthwestern.com/2025/11/05/city/eths-community-reacts-to-halloween-ice-arrests-campus-lockdown-with-fear-anger/' },
      { title: '‘A caring, warm presence’: Sorority house directors make students feel at home, manage behind-the-scenes', url: 'https://dailynorthwestern.com/2026/05/27/campus/a-caring-warm-presence-sorority-house-directors-make-students-feel-at-home-manage-behind-the-scenes/' },
      { title: 'Putting the ‘cat’ in Wildcat: the furries and therians of WJ', url: 'https://wjpitch.com/feature/wj-feature/2025/03/07/putting-the-cat-in-wildcat-the-furries-and-therians-of-wj/' },
      { title: 'WJ community mourns student, supports family', url: 'https://wjpitch.com/news/wj-news/2024/12/13/wj-community-mourns-student-supports-family/' },
      { title: 'STAGE salvages ‘Grimm’ choice of play', url: 'https://wjpitch.com/arts-and-entertainment/wj-arts-and-entertainment/2024/11/15/stage-salvages-grimm-choice-of-play-2/' },
    ],
  },
  {
    heading: 'Video',
    items: [
      { title: 'Billiards Club grows membership, welcomes players of all skill levels', url: 'https://dailynorthwestern.com/2026/05/06/lateststories/billiards-club-grows-membership-welcomes-players-of-all-skill-levels/' },
      { title: '‘Keepers of the faith’: Evanston community nonprofit maintains, improves Harley Clarke grounds', url: 'https://dailynorthwestern.com/2026/05/28/lateststories/keepers-of-the-faith-evanston-community-nonprofit-maintains-improves-harley-clarke-grounds/' },
      { title: 'Hot Ones with Mr. Joy', url: 'https://wjpitch.com/multimedia/videos/2024/10/26/hot-ones-with-mr-joy/' },
      { title: 'Becca’s Closet returns to WJ', url: 'https://wjpitch.com/top-stories/2024/10/07/beccas-closet-returns-to-wj/' },
    ],
  },
  {
    heading: 'Audio',
    items: [
      { title: 'Rapid Recap: City Council votes to table Housing4All', url: 'https://dailynorthwestern.com/2026/04/14/city/rapid-recap-city-council-votes-to-table-housing4all/' },
      { title: 'The Weekly: Faculty and staff react to UnitedHealthcare switch, NU alum on MasterChef and Evanston’s newest TIF district', url: 'https://dailynorthwestern.com/2026/04/27/audio/the-weekly-faculty-and-staff-react-to-unitedhealthcare-switch-nu-alum-on-masterchef-and-evanstons-newest-tif-district/' },
      { title: 'The Change-Up: State of the School', url: 'https://wjpitch.com/multimedia/2024/02/02/the-change-up-state-of-the-school/' },
      { title: 'The Change-Up: The Landon Death Lawsuit', url: 'https://wjpitch.com/multimedia/2024/03/01/the-change-up-landon-death-lawsuit/' },
    ],
  },
];

// Links shown at the bottom of the page. Only entries with a url are shown.
export const profiles: { label: string; url: string }[] = [
  { label: 'The Daily Northwestern profile', url: 'https://dailynorthwestern.com/staff_name/liam-barrett/' },
  { label: 'The Pitch profile', url: 'https://wjpitch.com/staff_name/liam-barrett/' },
];
