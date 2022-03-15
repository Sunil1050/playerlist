import './index.css'

const UserProfile = props => {
  const {userList, deleteUser} = props
  const {uniqueNo, imageUrl, name, role} = userList
  const onClickDeleteIcon = () => {
    deleteUser(uniqueNo)
  }

  return (
    <div className="d-flex justify-content-between mt-3">
      <img src={imageUrl} alt="user profile" className="user-profile" />
      <div className="text-container">
        <h1 className="name">{name}</h1>
        <p className="role">{role}</p>
      </div>
      <button type="button" className="button" onClick={onClickDeleteIcon}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cross-img.png"
          className="delete-img"
          alt="cross"
        />
      </button>
    </div>
  )
}
export default UserProfile
