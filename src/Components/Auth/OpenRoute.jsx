import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

function OpenRoute({ children }) {
  const token= true;

  if (token === null) {
    return children
  } else {
    return <Navigate to="/" />
  }
}

export default OpenRoute