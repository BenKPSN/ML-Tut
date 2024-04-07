interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'An Introduction to Machine Learning with Python',
    description: `The basics of using the machine learning packages SKLearn and PyTorch.`,
    imgSrc: '/static/images/time-machine.jpg',
    href: '/blog/ML-Tutorial',
  },
]

export default projectsData
