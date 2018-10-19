// [START resource_quickstart]
// Imports the Google Cloud client library
const Resource = require('@google-cloud/resource')

// Your Google Cloud Platform project ID
const projectId = 'YOUR_PROJECT_ID'

//Creates the Client			
const resourceClient = new Resource({
  projectId: projectId,
})


// Lists current projects. This code was changed from promise to async and await on 10/19/2018 - Vishal Deshmukh
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

run();
// [END resource_quickstart]