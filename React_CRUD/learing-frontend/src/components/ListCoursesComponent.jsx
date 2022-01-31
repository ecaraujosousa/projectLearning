import React, { Component } from 'react';
import CoursesService from '../services/CoursesService';

class ListCoursesComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            course: []
        }
        this.addCourse = this.addCourse.bind(this);
        this.editCourse = this.editCourse.bind(this);
        this.deleteCourse = this.deleteCourse.bind(this);
    }

    deleteCourse(id){
        CoursesService.deleteCourse(id).then( res => {
            this.setState({course: this.state.course.filter(course => course.courseid !== id)});
        })
    }
    
    editCourse(id){
        this.props.history.push(`/update-course/${id}`);
    }
    componentDidMount(){
        CoursesService.getCourse().then((res) => {
            this.setState({course: res.data});
        });
    }

    addCourse(){
        this.props.history.push('/add-course');
    }

    render() {
    return <div>
        <h2 className="text-center"> Courses List</h2>
        <div>
            <button className="btn btn-primary" onClick={this.addCourse}> Add Course</button>
        </div>
        <div className = "row">
            <table className= "table table-striped table-bordered">
                <thead>
                    <tr>
                        <th> Id</th>
                        <th> Name</th>
                        <th> Description</th>
                        <th> Fee</th>
                        <th> Resource</th>
                        <th> Actions</th>
                    </tr>
                </thead>
            

            <tbody>
                {
                    this.state.course.map(
                        course =>
                        <tr key = {course.courseid}>
                            <td> {course.courseid}</td>
                            <td> {course.name}</td>
                            <td> {course.description}</td>
                            <td> {course.fee}</td>
                            <td> {course.resources}</td>
                            <td> 
                                <button onClick = {() => this.editCourse(course.courseid)} 
                                className="btn btn-info">Update</button>
                                <button style={{marginLeft: "10px"}}onClick = {() => this.deleteCourse(course.courseid)} 
                                className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
            </table>
        </div>
    </div>;
  }
}
export default ListCoursesComponent