var i;
for (i = 0; i < 81; i++) {
      setTimeout(function() {
            var box = document.createElement('div');
            box.className = 'box';
            document.getElementById('container').appendChild(box);
      }, 500*i)
}