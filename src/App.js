import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';
import CountUp from 'react-countup';
import Tabletop from 'tabletop';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }

    this.picItems = '/items.png';
    this.picVolume = '/scale.png';
  }

  componentDidMount() {
    Tabletop.init({
      key: '1JbcDajSt8oUasAbnaWkzGOzX8BhpOXB8Og5_-9Dk71k',
      callback: googleData => {
        this.setState({
          data: googleData
        })
        console.log(googleData)
      },
      simpleSheet: true });
  }

  itemsCount() {
    return this.state.data.length;
  }

  totalWeigth() {
    return this.state.data.reduce((total, item) => total + parseInt(item.totalVolume), 0);
  }

  render() {
    return (
      <AppBody>
        <Container>
          <StatWrapper>
            <Pic image={this.picItems}/>
            <Text>
              I have
            </Text>
            <Number>
              <CountUp end={this.itemsCount()} suffix=" items" duration={2}/>
            </Number>
          </StatWrapper>
          <StatWrapper>
            <Pic image={this.picVolume} />
            <Text>
              And their total volume is
            </Text>
            <Number>
              <CountUp end={this.totalWeigth()} suffix=" ml" duration={2}/>
            </Number>
          </StatWrapper>
        </Container>
      </AppBody>
    );
  }
}

const Flex = styled.div`
  display: flex;
`
const AppBody = styled(Flex)`
  background-image: url('/flatlay.jpg');
  background-size: cover;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Container = styled(Flex)`
  height: 100%;
  width: 500px;
  flex-direction: column;
  padding-top: 50px;
`
const StatWrapper = styled(Flex)`
  height: 45%;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const Pic = styled(Flex)`
  width: 150px;
  height: 150px;
  background-image: url(${props => props.image});
  background-size: contain;
  background-repeat: no-repeat;
`
const Text = styled(Flex)`
  justify-content: center;
  font-size: 34px;
  padding-top: 30px;
`
const Number = styled(Flex)`
  justify-content: center;
  font-size: 34px;
`

export default App;
