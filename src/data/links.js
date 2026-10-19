import emailIcon from '../assets/icons/email.svg'
import githubIcon from '../assets/icons/github.svg'
import linkedinIcon from '../assets/icons/linkedin.svg'
import portfolioIcon from '../assets/icons/portfolio.svg'
import resumeUrl from '../assets/julian-mendoza-resume.pdf'
import resumeIcon from '../assets/icons/resume.svg'

const links = [
  {
    id: 'linkedin',
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/julian-mendoza-8980b2344',
    icon: linkedinIcon,
  },
  {
    id: 'github',
    label: 'GitHub',
    url: 'https://github.com/julian-men',
    icon: githubIcon,
  },
  {
    id: 'portfolio',
    label: 'Featured Work',
    url: 'https://multimedia-collage-maker.vercel.app',
    icon: portfolioIcon,
  },
  {
    id: 'resume',
    label: 'Resume',
    url: resumeUrl,
    icon: resumeIcon,
  },
  {
    id: 'email',
    label: 'Email',
    url: 'mailto:ianmenjones@gmail.com',
    icon: emailIcon,
  },
]

export default links
