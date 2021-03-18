import React, { Component, createContext } from 'react';
import Header from './components/header/Header';
import Main from './components/main/Main';
import CssBaseline from '@material-ui/core/CssBaseline';
import light from './themes/lightTheme';
import dark from './themes/darkTheme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './themes/globalStyles';

// const themes = {
//   light: "public/light.css",
//   dark: "public/dark.css",
// };

export const {
  Provider: ThemeSwitcherProvider,
  Consumer: ThemeSwitcherConsumer,
} = createContext();

class App extends Component {
  state = {
    theme: light,
    // cart: [
    //   {
    //     name: "Tomato",
    //     quantity: 1,
    //     id: "fgsad234234",
    //   },
    // ],
  };

  toggleTheme = () => {
    this.setState(prevState =>
      prevState.theme.title === 'light' ? { theme: dark } : { theme: light },
    );
  };

  addToCart = product => {
    console.log(product);
    if (this.state.cart.some(item => item.id === product.id)) {
      this.setState(prevState => ({
        cart: [
          ...prevState.cart.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        ],
      }));
      return;
    }
    this.setState(prevState => ({
      cart: [...prevState.cart, { ...product, quantity: 1 }],
    }));
  };

  deleteFromCart = productId => {
    if (
      this.state.cart.some(item => item.id === productId && item.quantity > 1)
    ) {
      this.setState(prevState => ({
        cart: [
          ...prevState.cart.map(item =>
            item.id === productId
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        ],
      }));
      return;
    }
    this.setState(prevState => ({
      cart: [...prevState.cart.filter(({ id }) => id !== productId)],
    }));
  };

  sendOrder = () => {
    console.log('Order sent!');
    this.setState({
      cart: [],
    });
  };

  render() {
    const { cart } = this.state;
    return (
      <ThemeSwitcherProvider value={this.toggleTheme}>
        <ThemeProvider theme={this.state.theme}>
          <GlobalStyle />
          <div>
            <CssBaseline />
            <Header toggleTheme={this.toggleTheme} />
            <Main
              cart={cart}
              addToCart={this.addToCart}
              deleteFromCart={this.deleteFromCart}
              sendOrder={this.sendOrder}
            />
          </div>
        </ThemeProvider>
      </ThemeSwitcherProvider>
    );
  }
}

export default App;
