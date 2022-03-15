import {Component} from 'react'

import UserProfile from './components/UserProfile'

import './App.css'

const initialUserDetailsList = [
  {
    uniqueNo: 1,
    imageUrl:
      'https://res.cloudinary.com/djzj8lr4d/image/upload/v1647309793/69257289_yaxchq.jpg',
    name: 'Rohit Sharma',
    role: 'Captain',
  },
  {
    uniqueNo: 2,
    imageUrl:
      'https://res.cloudinary.com/djzj8lr4d/image/upload/v1647309910/331165_bg9ysw.png',
    name: 'Ishan Kishan',
    role: 'Batsman.',
  },
  {
    uniqueNo: 3,
    imageUrl:
      'https://res.cloudinary.com/djzj8lr4d/image/upload/v1647309975/Virat-Kohli-Biography_dwasfs.jpg',
    name: 'Virat Kohli',
    role: 'Batsman.',
  },
  {
    uniqueNo: 4,
    imageUrl:
      'https://res.cloudinary.com/djzj8lr4d/image/upload/v1647310033/shreyas-iyer-main_fm17re.webp',
    name: 'Shreyas Iyer',
    role: 'Batsman',
  },
  {
    uniqueNo: 5,
    imageUrl:
      'https://res.cloudinary.com/djzj8lr4d/image/upload/v1647310727/Suryakumar_Yadav_Twitter_oi0hvq.jpg',
    name: 'Surya Kumar Yadav',
    role: ' Batsman',
  },
  {
    uniqueNo: 6,
    imageUrl:
      'https://res.cloudinary.com/djzj8lr4d/image/upload/v1647310801/323036.square_utprwn.png',
    name: 'Rishabh Pant',
    role: 'Wicket Keeper',
  },
  {
    uniqueNo: 7,
    imageUrl:
      'https://res.cloudinary.com/djzj8lr4d/image/upload/v1647310894/hardik-pandya_dj6y1k.jpg',
    name: 'Hardhik Pandya',
    role: 'All Rounder.',
  },
  {
    uniqueNo: 8,
    imageUrl:
      'https://res.cloudinary.com/djzj8lr4d/image/upload/v1647310992/ravindra-jadeja_puja9h.jpg',
    name: 'Ravindra Jadeja',
    role: 'All Rounder',
  },
  {
    uniqueNo: 9,
    imageUrl:
      'https://res.cloudinary.com/djzj8lr4d/image/upload/v1647311126/bumrahheadshot-min_gdi0zr.jpg',
    name: 'Jasprit Bumrah',
    role: 'Bowler',
  },
  {
    uniqueNo: 10,
    imageUrl:
      'https://res.cloudinary.com/djzj8lr4d/image/upload/v1647311223/87255167_bzoaeq.jpg',
    name: 'Md.Shami',
    role: 'Bowler',
  },
  {
    uniqueNo: 11,
    imageUrl:
      'https://res.cloudinary.com/djzj8lr4d/image/upload/v1647311272/319955_hxwuz9.png',
    name: 'Y.Chahal',
    role: 'Spin Bowler',
  },
]

class App extends Component {
  state = {
    searchInput: '',
    userList: initialUserDetailsList,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteUser = userId => {
    const {userList} = this.state
    const filteredUserList = userList.filter(
      eachItem => eachItem.uniqueNo !== userId,
    )
    this.setState({userList: filteredUserList})
  }

  render() {
    const {searchInput, userList} = this.state
    const filteredUserList = userList.filter(eachItem =>
      eachItem.name.toLowerCase().includes(searchInput),
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Team India</h1>
        <input
          type="search"
          placeholder="Search the player.."
          className="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        {filteredUserList.map(eachItem => (
          <UserProfile userList={eachItem} deleteUser={this.deleteUser} />
        ))}
      </div>
    )
  }
}

export default App
