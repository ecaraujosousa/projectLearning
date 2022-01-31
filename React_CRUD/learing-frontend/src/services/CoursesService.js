import axios from 'axios';

const COURSE_APP_BASE_URL = "http://localhost:8090/api/v1/course/";

class CoursesService{

    getCourse(){
        return axios.get(COURSE_APP_BASE_URL);
    }

    createCourse(course){
        return axios.post(COURSE_APP_BASE_URL, course);
    }

    getCourseById(courseid){

        return axios.get(COURSE_APP_BASE_URL + courseid);
    }

    updateCourse(course, courseid){
        return axios.put(COURSE_APP_BASE_URL + courseid, course);
    }

    deleteCourse(courseid){
        return axios.delete(COURSE_APP_BASE_URL + courseid);
    }
}

export default new CoursesService()

