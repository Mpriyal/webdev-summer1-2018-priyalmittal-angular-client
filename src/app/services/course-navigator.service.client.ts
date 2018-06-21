export class CourseNavigatorServiceClient {
  findAllCourses() {
    return fetch('http://priyal-webdev-summer1-2018.herokuapp.com/api/course')
      .then(response => response.json());
  }
  findAllModulesForCourses(courseId) {
    return fetch('http://priyal-webdev-summer1-2018.herokuapp.com/api/course/' + courseId + '/module')
      .then(response => response.json());
  }
  findAllLessonsForModule(courseId, moduleId) {
    return fetch('http://priyal-webdev-summer1-2018.herokuapp.com/api/course/' + courseId + '/module/' + moduleId + '/lesson')
      .then(response => response.json());
  }
  findAllWidgetsForLesson(lessonId) {
    return fetch('http://priyal-webdev-summer1-2018.herokuapp.com/api/lesson/' + lessonId + '/widget')
      .then(response => response.json());
  }
  findAllSectionsForCourse(courseId) {
    console.log(courseId)
    return fetch('http://webdev-priyal-angular-server.herokuapp.com/api/course/' + courseId + '/section')
      .then(response => response.json());
  }
}
