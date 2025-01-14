const API_URL = process.env.REACT_APP_API_URL


const TeacherService = {
  createTeacher(teacher) {
    const request = {
      method: 'POST',
      body: JSON.stringify({ teacher: teacher }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}teachers`, request)
      .then(response => response.json())
      .catch(error => {
        console.log('[TeacherService][createTeacher] ERROR: ', error)
      })
  },
  fetchTeachers() {
    console.log('API_URL: ', API_URL)
    return fetch(`${API_URL}teachers`)
      .then(response => response.json())
      .catch(error => {
        console.log('[TeacherService][fetchTeachers] ERROR: ', error)
      })
  },
  updateTeacher(data) {
    const request = {
      method: 'PATCH',
      body: JSON.stringify({ teacher: data }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}teachers/${data.id}`, request)
      .then(response => response.json())
      .catch(error => {
        console.log('[TeacherService][updateTeacher] ERROR: ', error)
      })
  },
  deleteTeacher(id) {
    const request = {
      method: 'DELETE',
      body: JSON.stringify({ id: id }),
      headers: { 'Content-Type': 'application/json' }
    }
    return fetch(`${API_URL}teachers/${id}`, request)
      .then(response => response.json())
      .catch(error => {
        console.log('[TeacherService][deleteTeacher] ERROR: ', error)
      })
  }
}

export default TeacherService;
