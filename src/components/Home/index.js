import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CourseItem from '../CourseItem'

import './index.css'

class Home extends Component {
  state = {coursesList: [], isLoading: true}

  componentDidMount() {
    this.getCourseList()
  }

  getCourseList = async () => {
    const response = await fetch('https://apis.ccbp.in/te/courses')
    if (response.ok === true) {
      const data = await response.json()

      // console.log(response.ok)

      const modifiedData = data.courses.map(eachCourse => ({
        id: eachCourse.id,
        logoUrl: eachCourse.logo_url,
        name: eachCourse.name,
      }))

      this.setState({coursesList: modifiedData, isLoading: false})
    }
  }

  render() {
    const {coursesList, isLoading} = this.state

    return (
      <div className="list-container">
        <h1>Courses</h1>

        {isLoading ? (
          <div data-testid="loader" className="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <ul className="course-list">
            {coursesList.map(eachCourse => (
              <CourseItem details={eachCourse} key={eachCourse.id} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default Home
