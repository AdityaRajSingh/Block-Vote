    setInterval(()=>{
        axios.get('http://localhost:4000/votes')
    .then(function (response) {
        console.log(response);
        var parties=response.data.map((res)=>{return {name:res.name,votes:res.votes}});
        for(let x in parties){
            $("#"+parties[x].name).html(parties[x].votes);
        }
    })
    .catch(function (error) {
      console.log(error);
    });
},2000);