import { ThemeProvider } from '../../context/ThemeContext'

import InfoMe from './InfoMe'

const SectionInfoMe = ({ children }) => {
  return (
    <>
      <ThemeProvider>
        <InfoMe buttons={children} />
      </ThemeProvider>
    </>
  )
}

export default SectionInfoMe
