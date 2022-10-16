import * as React from 'react'
import routes from './routes'
import { Route, Routes } from 'react-router-dom'

export default function App () {
  return (
    <div className='container'>
    <Routes>
        {routes.map(({ path, component: C }) => (
        <Route
            key={path}
            path={path}
            element={<C />}
        />
        ))}
    </Routes>
    </div>
  )
}