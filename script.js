    const totalchar = document.getElementById("total")
    const remaining = document.getElementById("remaining")
    const textarea = document.querySelector('textarea');

    textarea.addEventListener('input', (event) => {
        totalchar.innerHTML= event.target.value.length;
        if( parseInt(totalchar.innerHTML)>=50){
            textarea.value = event.target.value.substring(0, 50);
            totalchar.innerHTML=50
            remaining.innerHTML=0
            textarea.disable =true
            alert("Character limit reached. You can no longer edit")
            return
        }
    remaining.innerHTML=50 - parseInt(totalchar.innerHTML)
    });
