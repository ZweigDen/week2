var uuid = 'e36c04b7-caa5-4a11-ab85-cd3ab214a719';
var token = 'Cw81dB0hyYgmiXU480aaUWxrzLUxDE07A2JTiKNzcFInK56KemJiRPyGXyXY';
var apiPath = 'https://course-ec-api.hexschool.io/';
var api = `${apiPath}api/${uuid}/admin/ec/products`;
// console.log(api);
axios.defaults.headers['Authorization'] = `Bearer ${token}`;

axios.get(api)
  .then(function(response){
  products = response.data.data;
  console.log(products);
  render();
})

function render(){
  var app = document.getElementById('app');
  var str = '';
  products.forEach(function(item){
    var content = `
    <div class="col-4 mt-3">
      <div class="boardGame">
        <img src="${item.imageUrl}" class="card-img-top" alt="${item.title}">
        <div class="card-body">
          <h5>${item.title}</h5>
          <p class="card-text">${item.content}</p>
          <button class="btn btn-purple btn-block">價格：${item.price} 元</>
        </div>
      </div>
    </div>`
    str+=content;
    console.log(item.title);
  })
  app.innerHTML = str;
}


