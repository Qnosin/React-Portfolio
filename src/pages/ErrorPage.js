import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
function ErrorPage() {
    let navigate = useNavigate()
    useEffect(()=>{
        navigate('/')
    },[navigate])
  return (
    <>
    </>
  )
}

export default ErrorPage