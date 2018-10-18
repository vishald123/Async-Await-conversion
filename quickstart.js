const {Resource} = require('@google-cloud/resource')
const projectId = 'YOUR_PROJECT_ID'
const resourceClient = new Resource({
  projectId: projectId,
})

const run = async () => {
  try {
    const results = await resourceClient.getProjects()
    const projects = results[0]
    console.log('Projects:')
    projects.forEach(project => console.log(project.id))
  }
  catch(err) {
    console.error('ERROR:', err)
  }
}