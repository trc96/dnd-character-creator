import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import RaceSelection from './Components/RaceSelection'
import ClassSelection from './Components/ClassSelection'
import FeatSelection from './Components/FeatSelection'
import SavedCharacter from './Components/SavedCharacter'
import ItemSelection from './Components/ItemSelection'
import RaceDetails from './Components/RaceDetails'

export default (
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/RaceSelection' element={<RaceSelection />} />
        <Route path='/ClassSelection' element={<ClassSelection />} />
        <Route path='/FeatSelection' element={<FeatSelection />} />
        <Route path='/SavedCharacter' element={<SavedCharacter />} />
        <Route path='/ItemSelection' element={<ItemSelection />} />
        {/* <Route path='/RaceSelection/:name' element={<RaceDetails />} /> */}
    </Routes>
)