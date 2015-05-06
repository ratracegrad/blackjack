class window.CardView extends Backbone.View
  className: 'card'
  template: _.template ''

  initialize: -> @render()

  render: ->
    @$el.children().detach()
    @$el.html @template @model.attributes
    @$el.addClass 'covered' unless @model.get 'revealed'

    rankLower = @model.get('rankName').toLowerCase()
    suitLower = @model.get('suitName').toLowerCase()

    bgUrl = "url('img/cards/#{rankLower}-#{suitLower}.png')"
    @$el.css({
      'background' : bgUrl,
      'background-size' : '120px, 167px'
    })

    if not @model.get 'revealed'
      @$el.css({
        'background' : "url('img/card-back.png')",
        'background-size' : '120px, 167px'
      })