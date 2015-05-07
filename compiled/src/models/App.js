// Generated by CoffeeScript 1.9.2
(function() {
  var extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    hasProp = {}.hasOwnProperty;

  window.App = (function(superClass) {
    extend(App, superClass);

    function App() {
      return App.__super__.constructor.apply(this, arguments);
    }

    App.prototype.initialize = function() {
      return this.newGame();
    };

    App.prototype.hit = function() {
      var pScore;
      pScore = this.get('playerHand').scores()[0];
      if (pScore < 21) {
        this.get('playerHand').hit();
        pScore = this.get('playerHand').scores()[0];
        if (pScore > 21) {
          return this.playAgain('Player Busts! Play Again?');
        }
      } else {
        return this.playAgain('Can\'t deal because you busted! Play Again?');
      }
    };

    App.prototype.stand = function() {
      var dScore, pScore, temp;
      this.get('dealerHand').models[0].flip();
      pScore = this.get('playerHand').scores()[0];
      dScore = this.get('dealerHand').scores()[0];
      temp = this.get('dealerHand').maxScore();
      console.log(temp);
      if (pScore > 21) {
        this.playAgain('Player Busts - Can\'t Stand. Play Again?');
      } else {
        while (dScore < 17) {
          this.get('dealerHand').hit();
          dScore = this.get('dealerHand').scores()[0];
          temp = this.get('dealerHand').maxScore();
          console.log("<17 " + temp);
        }
        if (dScore > 21) {
          this.playAgain('player wins');
        } else if (dScore === pScore) {
          this.playAgain('tie');
        } else {
          while (dScore < pScore) {
            this.get('dealerHand').hit();
            dScore = this.get('dealerHand').scores()[0];
            temp = this.get('dealerHand').maxScore();
            console.log("less player " + temp);
          }
          if (dScore > 21) {
            this.playAgain('player wins');
          } else if (dScore === pScore) {
            this.playAgain('tie');
          } else {
            this.playAgain('dealer wins');
          }
        }
      }
      return '';
    };

    App.prototype.playAgain = function(message) {
      var ans;
      ans = confirm(message);
      if (ans) {
        return this.newGame();
      } else {
        return '';
      }
    };

    App.prototype.newGame = function() {
      var deck;
      this.set('deck', deck = new Deck());
      this.set('playerHand', deck.dealPlayer());
      this.set('dealerHand', deck.dealDealer());
      return '';
    };

    return App;

  })(Backbone.Model);

}).call(this);

//# sourceMappingURL=App.js.map
