import { Route, Routes, Link } from 'react-router-dom'
import Home from './Components/Home'
import RaceSelection from './Components/RaceSelection'
import ClassSelection from './Components/ClassSelection'
import FeatSelection from './Components/FeatSelection'
import SavedCharacter from './Components/SavedCharacter'

export default (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/RaceSelection' element={<RaceSelection />} />
        <Route path='/ClassSelection' element={<ClassSelection />} />
        <Route path='/FeatSelection' element={<FeatSelection />} />
        <Route path='/SavedCharacter' element={<SavedCharacter />} />
    </Routes>
)