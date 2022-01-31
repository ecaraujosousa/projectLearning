import React, { Component } from 'react';
import CoursesService from '../services/CoursesService';

class PutCourseComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            courseid: this.props.match.params.courseid,
            name: '',
            description:  '',
            fee: '',
            resources: ''
        }

        this.changeNameHandler = this.changeNameHandler.bind(this);
        this.changeDescriptionHandler = this.changeDescriptionHandler.bind(this);
        this.changeFeeHandler = this.changeFeeHandler.bind(this);
        this.changeResourcesHandler = this.changeResourcesHandler.bind(this);
        this.updateCourse = this.updateCourse.bind(this);

       
    }

    componentDidMount(){
        CoursesService.getCourseById(this.state.courseid).then((res) => {
            let course = res.data;
            this.setState({name: course.name, 
                description: course.description, 
                fee: course.fee,
                resources: course.resources
            });
        });
    }

    updateCourse =(e) => {
        e.preventDefault();
        let course = {courseid: this.state.courseid, name: this.state.name, description: this.state.description,
        fee: this.state.fee, resources: this.state.resources};
        console.log('course => ' +JSON.stringify(course));

        CoursesService.updateCourse(course, this.state.courseid).then( res => {
            this.props.history.push('/course');
        })
    }

 

    changeNameHandler = (event) => {
        this.setState({name: event.target.value});
    }

    changeDescriptionHandler = (event) => {
        this.setState({description: event.target.value});
    }

    changeFeeHandler = (event) => {
        this.setState({fee: event.target.value});
    }

    changeResourcesHandler = (event) => {
        this.setState({resources: event.target.value});
    }

    cancel(){
        this.props.history.push('/course');
    }

  render() {
    return (
    <div>
        <h1> Course form</h1>
        <div className="container">
            <div className="row">
                <div className="card col-md-6 offset-md-3 offset-md-3">
                    <h3 className="test-center"> Update Course</h3>
                    <div className="card-body">
                      <form>
                          <div className = "form-group">
                              <label> Name:</label>
                              <input placeholder="Name" name="name" className="form-control"
                                value={this.state.name} onChange={this.changeNameHandler}/>
                          </div>
                          <div className = "form-group">
                              <label> Description:</label>
                              <input placeholder="Description" name="description" className="form-control"
                                value={this.state.description} onChange={this.changeDescriptionHandler}/>
                          </div>
                          <div className = "form-group">
                              <label> Fee:</label>
                              <input placeholder="Fee" name="fee" className="form-control"
                                value={this.state.fee} onChange={this.changeFeeHandler}/>
                          </div>
                          <div className = "form-group">
                              <label> Resources:</label>
                              <input placeholder="Resources" name="resources" className="form-control"
                                value={this.state.resources} onChange={this.changeResourcesHandler}/>
                          </div>
                          <div>  
                          <button className="btn btn-success" onClick={this.updateCourse}>Save</button>
                          <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                          </div>
                      </form>  
                    </div>

                </div>

            </div>
        </div>
    </div>
    )
  }
}
export default PutCourseComponent