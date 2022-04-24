import {Link} from 'react-router-dom'

import './index.css'

const CourseItem = props => {
  const {details} = props
  const {id, name, logoUrl} = details

  return (
    <Link to={`courses/${id}`} className="course-link">
      <li className="course-item">
        <img className="logo" src={logoUrl} alt={name} />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}

export default CourseItem
