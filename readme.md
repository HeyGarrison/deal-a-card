# BOA Card Practice

if the app was smart it would only deal one card at a time

#### Flow Of App

1.) Generate JSON w/ Cards

  {
    cards: 'A,2,3,4,5,6,7,8,9,10,J,Q,K',
    suits: 'spades,hearts,clubs,diamonds'
  }

2.) Load json form factory
  get the json

3.) get the factory and thus json

4.) in controller assign cards to a suit

5.) when button is clicked deal a card at random, but can't duplicate

6.) when shuffle is selected start over, nothing more. Shuffle really happens when card is duplicated.

#### Design

* Use characters for ease of design and b/c they're cool

