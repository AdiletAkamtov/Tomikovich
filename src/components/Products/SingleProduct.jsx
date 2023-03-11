import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useGetProductQuery } from '../../features/api/apiSlice.js'
import { ROUTES } from '../../utils/routes.js'

const SingleProduct = () => {
	const { id } = useParams()
	const navigate = useNavigate()

	const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id })

	useEffect(() => {
		if ((!isFetching && !isLoading, !isSuccess)) {
			navigate.push(ROUTES.HOME)
		}
	}, [isLoading, isFetching, isSuccess])

	return <div>SingleProducts</div>
}

export default SingleProduct
