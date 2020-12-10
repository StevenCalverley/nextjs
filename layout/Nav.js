import ActiveLink from '../components/ActiveLink'

const Nav = () => (
  <nav>
    <ul className="flex space-x-2">
      <li>
        <ActiveLink activeClassName="text-blue-800" href="/">
          <a className="font-medium text-gray-700">Home</a>
        </ActiveLink>
      </li>
      <li>
        <ActiveLink activeClassName="text-blue-800" href="/about">
          <a className="font-medium text-gray-700">About</a>
        </ActiveLink>
      </li>
    </ul>
  </nav>
)

export default Nav