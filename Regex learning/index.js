const handleClick = (e)=>{
    let username = document.getElementById("username").value;
    username=username.toString();
    let username_span = document.querySelector('.username-span');
    username_span.innerHTML=""
    let submit_span = document.querySelector('.submit-span');
    let username_regex = /^[0-9]|_$|\W/
    let username_regex1 = /\W/
    let username_regex2 = /_$/
    let username_regex3 = /^[0-9]/

    let username_result = username_regex.test(username)
    let username_result1 = username.match(username_regex1)
    let username_result2 = username_regex2.test(username)
    let username_result3 = username_regex3.test(username)
    if(username_result){
        var ul = document.createElement('ul');
        
        let list =["No Special Character is Allowed except underscore","First character cannot be a Number or underscore","Last character cannot be a underscore"]
        for(let i of list){
            var li = document.createElement('li');
            li.innerHTML = i
            ul.appendChild(li);
        }
        username_span.appendChild(ul)
        submit_span.innerHTML = ""
    }else if(username?.length){
        username_span.innerHTML = ""
        submit_span.innerHTML = "Submitted sucessfully"
    }else{
        username_span.innerHTML="Please enter username"
    }
}