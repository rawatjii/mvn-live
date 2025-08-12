import { API_URL } from "../config/config";

export const otherPages = [
  { name: 'About Us', link: 'about-us' },
  { name: 'Media Centre', link: 'media-centre' },
  { name: 'Blogs', link: 'blogs' },
  { name: 'Career', link: 'career' },
  { name: 'Contact Us', link: 'contact-us' },
];

export const otherProjects = [
  { 
    location: 'Gurugram',
    projects: [
      { name: 'MVN AeroOne', link: '/aeroone-gurgaon', status: 'New Launch', target_blank: false  },
      { name: 'MVN Mall', link: '/mvn-mall', target_blank: false, status: 'New Launch' },
    ]
  }, 
  { 
    location: 'Bangalore',
    projects: [
      { name: 'MVN', link: 'https://www.mvnaeroone.com/', status: '', target_blank: true }
    ]
  },
  { 
    location: 'Sohna', projects: [
      { name: 'MVN Athens', link: '/mvn-athens-gurgaon-phase-1', status: '', target_blank: false },
      { name: 'MVN Athens PH-2', link: '/mvn-athens-gurgaon-phase-2', status: '', target_blank: false },
      { name: 'MVN Athens PH-3', link: '/mvn-athens-gurgaon-phase-3', status: '', target_blank: false }
    ]
  },
  {
    location: 'Faridabad',
    projects: [
      // { name: 'MVN Athens', link: 'https://www.mvn.in/athens-faridabad/', status: '' },
      { name: 'MVN Athens', link: '/mvn-athens-faridabad', status: '', target_blank: false },
      // { name: 'MVN Athens Phase 1', link: '/mvn-athens-gurgaon-phase-1', status: '', target_blank: false },
      // { name: 'MVN Athens Phase 2', link: '/mvn-athens-gurgaon-phase-2', status: '', target_blank: false }
    ] 
  },
];

export const otherDetails = {
  contact: '(+91) 799 6000 196',
  email: 'info@mvngroup.in',
  address: 'GS 301A–GS 301F, Third Floor, DLF Grand Mall, M.G. Road, Gurgaon, Haryana – 122002',
};

export const socialMedia = [
  { imgUrl: `${API_URL}assets/icons/social/fb.png`, alt: 'Follow MVN on facebook', link: 'https://www.facebook.com/officialmvninfra/', className: 'fb_icon' },
  { imgUrl: `${API_URL}assets/icons/social/instagram.png`, alt: 'Follow MVN on instagram', link: 'https://www.instagram.com/mvn_infrastructure/', className: 'insta_icon' },
  { imgUrl: `${API_URL}assets/icons/social/linkedin.png`, alt: 'Follow MVN on linkedin', link: 'https://www.linkedin.com/company/mvn-infrastructure/', className: 'linkedin_icon' },
  { imgUrl: `${API_URL}assets/icons/social/youtube.png`, alt: 'Follow MVN on youtube', link: 'https://www.youtube.com/@MVNInfrastructures', className: 'yt_icon' },
];