import './App.css'
import { TwitterfollowCart } from './TwitterfollowCart';

const users = [
  {
    name: 'miguelcampodiaz',
    nameUser: 'miguelcampodiaz',
    isFollowing: false
  },
  {
    name: 'elonmusk',
    nameUser: 'elonmusk',
    isFollowing: false
  },
  {
    name: 'midudev',
    nameUser: 'midudev',
    isFollowing: true
  },
]


export function App() {


  return (
    <section className="App">
      {
        users.map(user => {
          const { nameUser, name, isFollowing } = user

          return <TwitterfollowCart
            key={nameUser}
            userName={nameUser}
            inicialIsFollowing={isFollowing}>
            {name}
          </TwitterfollowCart>

        })
      }
    </section>
  );
}