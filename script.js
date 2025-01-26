let main = document.getElementById('mainDiv')
document.getElementById('btn').addEventListener('click', function () {
    main.innerHTML = `<input type="text" id="inp" placeholder="Enter Title"> 
                      <textarea id="text" placeholder="Enter Description"></textarea>  
                      <input type="file" id="file">
                      <button id="btn2">Post</button>`
    document.getElementById('btn2').addEventListener('click', function () {
        let inp = document.getElementById('inp')
        let text = document.getElementById('text')
        let box = document.getElementById('add')
        let time = new Date().toLocaleTimeString()
        let date = new Date().toLocaleDateString()
        let file = document.getElementById('file')
        let fill = file.files[0]
        if (fill) {
            let url = URL.createObjectURL(fill)
            box.innerHTML = `<span>${time} ${date}</span> 
                             <div id="abc"><h1>${inp.value}</h1> <p>${text.value}</p></div> 
                             <img src="${url}" alt="Uploaded Image">
                             <div class="icon-container">
                                <i class="fas fa-heart"></i>
                                <i class="fas fa-comment"></i>
                                <i class="fas fa-share"></i>
                                <i class="fas fa-bookmark"></i>
                             </div>`
        } else {
            alert('Please upload an image!');
        }
        main.innerHTML = ''
    })
})