(function (root) {
  var TTT = root.TTT = (root.TTT || {});
  var turn = "ned"
  function toggleTurn() {
    turn === "ned" ? turn = "kush" : turn = "ned";
  }

  var game = new TTT.Game();


  $(document).ready(function () {
    $('.tile').on('click', function () {
      var tile = this;
      console.log('click');
      console.log($(tile).data('coords'));
      game.turn($(tile).data('coords'), function () {
        $(tile).toggleClass(turn);
        if (game.winner())
        {
          toggleTurn();
          $('.tile').removeClass(turn);
          toggleTurn();
          $('.tile').addClass(turn);
          alert(turn + " wins!");
        }
        toggleTurn();
      })
    })
  })

})(this);