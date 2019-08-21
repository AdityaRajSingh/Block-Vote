var parties={'Congress':0,'BJP':0,'Other':0};





  $('#btn').one('click', function() {
    console.log("voteForCandidate called");
  candidateName = $("#candidate").val();
  console.log(candidateName);
  
  parties[candidateName]++;
  axios.put('http://localhost:4000/'+candidateName);
      
      $("#" + candidateName).html(parties[candidateName]);
      
    $(this).removeAttr('href');
  });