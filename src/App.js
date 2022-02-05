
import './App.css';

import { Route, Routes, Navigate } from 'react-router-dom'
import React, { lazy, Suspense, useEffect } from 'react';
import ShopPage from './pages/shop';
import Header from './components/header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions'

import SignInAndSignUp from './pages/sign-in-sign-up';
import CheckoutPage from './pages/checkout';
import CollectionPage from './pages/collections';
import Css from './pages/css';

const HomePage = lazy(() => import('./pages/home-page/homepage.component'))

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: null
    }
  }
  unsubscribeFromAuth = null
  componentDidMount() {
    const { setCurrentUser } = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            currentUser: {
              id: snapshot?.id,
              ...snapshot?.data()
            }
          })
        })
      }
      setCurrentUser({ currentUser: userAuth })
    })

  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {


    return (
      <div className="">
        <Header />
        <main>

          <Routes>
            <Route path="/" element={<Suspense fallback={<>...</>}><HomePage /></Suspense>} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/shop/:id" element={<CollectionPage />} />
            <Route path="/css" element={<Css />} />
            <Route path="/signIn" element={this.props.currentUser ? <Navigate to="/" /> : <SignInAndSignUp />} />
          </Routes>
        </main>
      </div>
    )
  }
}
const mapDispatchToProp = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
const mapStateToProps = ({ user }) => ({
  currentUser: user?.currentUser
})
export default connect(mapStateToProps, mapDispatchToProp)(App);
