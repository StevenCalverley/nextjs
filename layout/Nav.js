import ActiveLink from '../components/ActiveLink'

const Nav = () => (
  <nav className="flex space-x-2">
    <ActiveLink activeClassName="text-blue-800" href="/">
      <a className="font-medium text-gray-700">Home</a>
    </ActiveLink>

    <ActiveLink activeClassName="text-blue-800" href="/about">
      <a className="font-medium text-gray-700">About</a>
    </ActiveLink>
  </nav>
)

export default Nav