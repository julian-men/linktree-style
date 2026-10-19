import profileImage from '../assets/julian-mendoza-profile.png'

function Profile() {
  return (
    <header id="profile">
      <img
        src={profileImage}
        alt="Portrait of Julian Mendoza"
        width="240"
        height="240"
      />
      <h1>Julian Mendoza</h1>
      <p>CS Student @ CSUMB</p>
      <p>
        First-generation computer science student building creative, expressive
        applications for the web.
      </p>
      <address>Monterey, California</address>
    </header>
  )
}

export default Profile
