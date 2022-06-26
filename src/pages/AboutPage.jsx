import AppCard from '../components/shared/AppCard'
import { Link } from 'react-router-dom'

const AboutPage = () => {
  return <AppCard>
    <h1>About page</h1>
    <p>This is a feedback ui for our services</p>
    <Link to="/">Back home</Link>
  </AppCard>
}

export default AboutPage
