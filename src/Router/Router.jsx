import { Navigate, Route, Routes } from "react-router-dom"
import { Categories, Header, Recipes, Detail, Ingredients, Area } from "../components"
import { Home } from "../Pages"

export const Router = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route exact  path="/" element={<Home />}  />
        <Route exact  path="/recipes" element={<Recipes />}  />
        <Route exact  path="/recipes/categories" element={<Categories />}  />
        <Route exact  path="/recipes/area" element={<Area />}  />
        <Route exact  path="/recipes/ingredients" element={<Ingredients />}  />
        
        <Route extact path='/recipes/:id' element={<Detail />} />
        <Route extact path='/recipes/categories/:id' element={<Detail />} />
        <Route extact path='/recipes/area/:id' element={<Detail />} />
        <Route extact path='/recipes/ingredients/:id' element={<Detail />} />
      
        <Route path="/*" element={ <Navigate to="/" /> } />
      
      </Routes>
    </>
  )
}
