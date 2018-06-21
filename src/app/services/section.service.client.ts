export class SectionServiceClient {

  SECTION_URL = 'http://webdev-priyal-angular-server.herokuapp.com/api/course/COURSEID/section';

  findSectionsForStudent() {
    const url = 'http://webdev-priyal-angular-server.herokuapp.com/api/student/section';
    return fetch(url, {
      credentials: 'include'
    })
      .then(response => response.json());
  }
  findSectionById(sectionId) {
    return fetch('http://webdev-priyal-angular-server.herokuapp.com/api/section/' + sectionId)
      .then(response => response.json());
  }

  enrollStudentInSection(sectionId) {
    const url = 'http://webdev-priyal-angular-server.herokuapp.com/api/section/' + sectionId + '/enrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  unEnrollStudentInSection(sectionId) {
    const url = 'http://webdev-priyal-angular-server.herokuapp.com/api/section/' + sectionId + '/unenrollment';
    return fetch(url, {
      method: 'post',
      credentials: 'include'
    });
  }

  findSectionsForCourse(courseId) {
    return fetch(this.SECTION_URL.replace('COURSEID', courseId))
      .then(response => response.json());
  }

  createSection(courseId, name, seats) {
    const section = {courseId, name, seats};
    return fetch(this.SECTION_URL.replace('COURSEID', courseId), {
      method: 'post',
      body: JSON.stringify(section),
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      }
    });
  }

  deleteSection(sectionId) {
    const sectionUrl = 'http://webdev-priyal-angular-server.herokuapp.com/api/section/' + sectionId;
    return fetch(sectionUrl, {
      method: 'delete',
      credentials: 'include'
    });
  }
  updateSection(section, sectionId) {
    return fetch('http://webdev-priyal-angular-server.herokuapp.com/api/section/' + sectionId, {
      body: JSON.stringify(section),
      credentials: 'include', // include, same-origin, *omit
      method: 'put',
      headers: {
        'content-type': 'application/json'
      }
    });
  }
}
