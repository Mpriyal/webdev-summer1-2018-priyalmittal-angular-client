export class WidgetServiceClient {
  findWidgetsForLesson(lessonId) {
    return fetch('http://priyal-webdev-summer1-2018.herokuapp.com/api/lesson/' + lessonId + '/widget')
      .then(response => response.json());
  }
}
