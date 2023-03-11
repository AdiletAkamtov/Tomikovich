import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ROUTES } from '../../utils/routes.js'
import Home from '../Home/Home'
import SingleProduct from '../Products/SingleProduct.jsx'

const AppRoutes = () => (
	<Routes>
		<Route index element={<Home />} />
		<Route path={ROUTES.PRODUCTS} element={<SingleProduct />} />
	</Routes>
)

export default AppRoutes
