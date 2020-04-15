
function testFunc() {

  var x = document.getElementById("myText").value;
  var y = document.getElementById("myText2").value;
  var z = document.getElementById("cars").value;

  axios.post('https://api.imgflip.com/caption_image?template_id='+z+'&username=memeapi&password=workflowmeme&text0='+x+'&text1='+y)
  .then(res => showOutputImg(res))
  .catch(err => console.error(err));
}

// GET REQUEST
function getTodos() {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
  .then(res => showOutput(res))
  .catch(err => console.error(err));
}

// POST REQUEST
function addTodo() {
  console.log('POST Request');
}

// INTERCEPTING REQUESTS & RESPONSES

// CUSTOM HEADERS
function customHeaders() {
  const config = {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }}
  };

// AXIOS INSTANCES

function showOutputImg(res) {
  //https://http.cat/
  document.getElementById('res').innerHTML = `
  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <img class="fit-picture"
      src=${JSON.stringify(res.data.data.url, null, 2)}
      alt="Meme goes here">
     </div>
     <div class="card-footer">
     <p> Share this MEME:
     <pre>${JSON.stringify(res.data.data.url, null, 2)}</pre>
    </div>
  </div>
  <br/>

  <div class="card card-body mb-4">
  <h5>Status: ${res.status}</h5>
  <img class="fit-picture"
    src="https://http.cat/${res.status}"
    alt="CatStatusGoesHere" height="160" width="180">
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}

// Show output in browser
function showOutput(res) {
  document.getElementById('res').innerHTML = `
  <div class="card card-body mb-4">
    <h5>Status: ${res.status}</h5>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Headers
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.headers, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Data
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>

  <div class="card mt-3">
    <div class="card-header">
      Config
    </div>
    <div class="card-body">
      <pre>${JSON.stringify(res.config, null, 2)}</pre>
    </div>
  </div>
`;
}
// Event listeners


//document.getElementById('test').addEventListener('click', testFunc);
document.getElementById('test').addEventListener('click',testFunc);