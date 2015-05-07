# Blackjack

Classic Blackjack game implemented using Backbone.JS, NodeJS, Express, CoffeScript and Twitter
Bootstrap. The entire game was written in CoffeeScript.

The Blackjack game is hosted on a Node Express server.

## Operation
Open the game in your browser. Decide whether you want to hit or stand based on the cards you have
been dealt. Once the player stands, the dealer plays. The winner is the player closest to 21 without
going over.

If you want to stand, just click the `stand` button.

To be dealt a new card, click the `hit` button.

After playing a hand, you can click the `New Game` button to try your luck again.

## Screenshot
![alt tag](http://jenniferbland.com/blackjack/screenshot.png)

## Live Preview
[You can see this repo live here](http://jb-blackjack.herokuapp.com/).  The demo is hosted on Heroku.

## Installation
1. Download the repository
2. If you don't have CoffeeScript already installed, you'll need to do that, here's how:
`npm install -g coffee-script`
3. Install client dependencies with `npm install`
4. Launch Express server with `node server.js`
5. Enjoy the game!
