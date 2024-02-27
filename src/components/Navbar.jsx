import Menu from "/src/assets/menu.svg";

const Navbar = () => {
  return (
    <div className='navbar bg-cyan-950 shadow text-base-200'>
      <div className='flex-1'>
        <a className='btn btn-ghost text-xl'>Where In the World?🌎</a>
      </div>
      <div className='dropdown dropdown-end'>
        <img
          tabIndex={0}
          role='button'
          className='btn m-1 w-[60px] h-[30px] bg-transparent border-none'
          src={Menu}
        />
        <ul
          tabIndex={0}
          className='dropdown-content z-[1] menu p-2 shadow bg-transparent rounded-box w-52'
        >
          <li>
            <a>Flash Card</a>
          </li>
          <li>
            <a>Trip</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
