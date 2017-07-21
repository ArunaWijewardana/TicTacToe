import React from 'react';

class Icon extends React.Component {

  constructor() {
    super();

    this.state = {
      box1:'',
      box2:'',
      box3:'',
      box4:'',
      box5:'',
      box6:'',
      box7:'',
      box8:'',
      box9:'',
      symbol:'',
      clickCount: 0,
      test: 0,
      dashState: 'Submit Player 1',
    }
  }

  checkStatus() {

      if(
        this.state.box1 === 'X' && this.state.box2 === 'X' && this.state.box3 === 'X' ||
        this.state.box4 === 'X' && this.state.box5 === 'X' && this.state.box6 === 'X' ||
        this.state.box7 === 'X' && this.state.box8 === 'X' && this.state.box9 === 'X' ||
        this.state.box1 === 'X' && this.state.box4 === 'X' && this.state.box7 === 'X' ||
        this.state.box2 === 'X' && this.state.box5 === 'X' && this.state.box8 === 'X' ||
        this.state.box3 === 'X' && this.state.box6 === 'X' && this.state.box9 === 'X' ||
        this.state.box1 === 'X' && this.state.box5 === 'X' && this.state.box9 === 'X' ||
        this.state.box8 === 'X' && this.state.box8 === 'X' && this.state.box3 === 'X' ||
        this.state.box3 === 'X' && this.state.box5 === 'X' && this.state.box7 === 'X'
      ) {
        this.setState({dashState: 'Player 1 Won'});
      } else if (
        this.state.box1 === 'O' && this.state.box2 === 'O' && this.state.box3 === 'O' ||
        this.state.box4 === 'O' && this.state.box5 === 'O' && this.state.box6 === 'O' ||
        this.state.box7 === 'O' && this.state.box8 === 'O' && this.state.box9 === 'O' ||
        this.state.box1 === 'O' && this.state.box4 === 'O' && this.state.box7 === 'O' ||
        this.state.box2 === 'O' && this.state.box5 === 'O' && this.state.box8 === 'O' ||
        this.state.box3 === 'O' && this.state.box6 === 'O' && this.state.box9 === 'O' ||
        this.state.box1 === 'O' && this.state.box5 === 'O' && this.state.box9 === 'O' ||
        this.state.box8 === 'O' && this.state.box8 === 'O' && this.state.box3 === 'O' ||
        this.state.box3 === 'O' && this.state.box5 === 'O' && this.state.box7 === 'O'
      ) {
        this.setState({dashState: 'Player 2 Won'});
      }
  }

  render() {
    return (
      <div className="container">
        <div
          className="dashboard"
          id="dashboard"
          onClick={ (event) => {
            this.setState({
              dashState:this.state.clickCount & 1 ? 'Submit Player 1' : 'Submit Player 2',
            });
            {this.checkStatus()};
          }}
        >
          {this.state.dashState}
        </div>
        <div className="firstRow" id="firstRow">
          <div
            className="box1"
            id="box1"
            onClick={ (event) => {
              this.setState({
                dashState:this.state.clickCount & 1 ? 'Submit Player 1' : 'Submit Player 2',
                box1:this.state.clickCount & 1 ? 'O' : 'X',
                clickCount:this.state.clickCount + 1,
              });
              {this.checkStatus()};
            }
            }
          >
            {this.state.box1}
          </div>
          <div
            className="box2"
            id="box2"
            onClick={ () => { this.setState({
              dashState:this.state.clickCount & 1 ? 'Submit Player 1' : 'Submit Player 2',
                box2:this.state.clickCount & 1 ? 'O' : 'X',
                clickCount:this.state.clickCount + 1,
            });
            {this.checkStatus()};
          }}
          >
            {this.state.box2}
          </div>
          <div
            className="box3"
            id="box3"
            onClick={ () => { this.setState({
              dashState:this.state.clickCount & 1 ? 'Submit Player 1' : 'Submit Player 2',
                box3:this.state.clickCount & 1 ? 'O' : 'X',
                clickCount:this.state.clickCount + 1,
            });
            {this.checkStatus()};
          }}
          >
            {this.state.box3}
          </div>

        </div>
        <div className="secondRow" id="secondRow">
          <div
            className="box4"
            id="box4"
            onClick={ () => { this.setState({
              dashState:this.state.clickCount & 1 ? 'Submit Player 1' : 'Submit Player 2',
                box4:this.state.clickCount & 1 ? 'O' : 'X',
                clickCount:this.state.clickCount + 1,
            });
            {this.checkStatus()};
          }}
          >
            {this.state.box4}
          </div>
          <div
            className="box5"
            id="box5"
            onClick={ () => { this.setState({
              dashState:this.state.clickCount & 1 ? 'Submit Player 1' : 'Submit Player 2',
                box5:this.state.clickCount & 1 ? 'O' : 'X',
                clickCount:this.state.clickCount + 1,
            });
            {this.checkStatus()};
          }}
          >
            {this.state.box5}
          </div>
          <div
            className="box6"
            id="box6"
            onClick={ () => { this.setState({
              dashState:this.state.clickCount & 1 ? 'Submit Player 1' : 'Submit Player 2',
                box6:this.state.clickCount & 1 ? 'O' : 'X',
                clickCount:this.state.clickCount + 1,
            });
            {this.checkStatus()};
          }}
          >
            {this.state.box6}
          </div>

        </div>
        <div className="thirdRow" id="thirdRow">
          <div
            className="box7"
            id="box7"
            onClick={ () => { this.setState({
              dashState:this.state.clickCount & 1 ? 'Submit Player 1' : 'Submit Player 2',
                box7:this.state.clickCount & 1 ? 'O' : 'X',
                clickCount:this.state.clickCount + 1,
            });
            {this.checkStatus()};
          }}
          >
            {this.state.box7}
          </div>
          <div
            className="box8"
            id="box8"
            onClick={ () => { this.setState({
              dashState:this.state.clickCount & 1 ? 'Submit Player 1' : 'Submit Player 2',
                box8:this.state.clickCount & 1 ? 'O' : 'X',
                clickCount:this.state.clickCount + 1,
            });
            {this.checkStatus()};
          }}
          >
            {this.state.box8}
          </div>
          <div
            className="box9"
            id="box9"
            onClick={ () => { this.setState({
              dashState:this.state.clickCount & 1 ? 'Submit Player 1' : 'Submit Player 2',
                box9:this.state.clickCount & 1 ? 'O' : 'X',
                clickCount:this.state.clickCount + 1,
            });
            {this.checkStatus()};
          }}
          >
            {this.state.box9}
          </div>
        </div>
      </div>
    );
  }
}

export default Icon;
