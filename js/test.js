var add_the_handlers = function(nodes){
  var helper = function(i){
    return function(e){
      alert(i);
    }
  }
  var i;
  for(i = 0; i < nodes.length; i+=1){
    ndoes[i].onclick = helper(i);
  }
}
