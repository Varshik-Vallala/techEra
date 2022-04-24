import {Component} from 'react'

import './index.css'

import Loader from 'react-loader-spinner'

class CourseDetails extends Component {
  state = {
    courseData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getCourseDetails()
  }

  getCourseDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/te/courses/${id}`)
    const data = await response.json()

    // console.log(data.course_details)

    const upDatedData = {
      id: data.course_details.id,
      name: data.course_details.name,
      imageUrl: data.course_details.image_url,
      description: data.course_details.description,
    }

    // console.log(upDatedData)

    this.setState({courseData: upDatedData, isLoading: false})
  }

  render() {
    const {courseData, isLoading} = this.state
    const {name, imageUrl, description} = courseData

    // console.log(courseData)

    return (
      <div className="details-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          <div className="course-details">
            <img className="course-image" src={imageUrl} alt={name} />
            <div className="course-text">
              <h1>{name}</h1>
              <p className="description">{description}</p>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CourseDetails
