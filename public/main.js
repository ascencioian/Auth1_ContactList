const star = document.getElementsByClassName("fa-star");
var trash = document.getElementsByClassName("fa-trash");

//star
Array.from(star).forEach(function(element) {
  element.addEventListener('click', function(){
    const firstName = this.parentNode.parentNode.childNodes[1].innerText
    const lastName = this.parentNode.parentNode.childNodes[3].innerText
    const star = parseFloat(this.parentNode.parentNode.childNodes[13].innerText)

    //node tool
    const parent = this.parentNode.parentNode.childNodes
    for(let i=0; i<parent.length; i++){
      console.log(parent[i])
    }

    fetch('color', {
      method: 'put',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        'firstName': firstName,
        'lastName': lastName,
        'star': star,
      })
    })
    .then(response => {
      if (response.ok) return response.json()
    })
    .then(data => {
      console.log(data)
      window.location.reload(true) // promise request is resolved from server. reload page to update
    })
  });
});

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const firstName = this.parentNode.parentNode.childNodes[1].innerText
        const lastName = this.parentNode.parentNode.childNodes[3].innerText

        //node tool
        const parent = this.parentNode.parentNode.childNodes
        for(let i=0; i<parent.length; i++){
          console.log(parent[i])
        }
       
        fetch('messages', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'firstName': firstName,
            'lastName': lastName
          })
        }).then(function (response) {
         window.location.reload()
        })
      });
});
