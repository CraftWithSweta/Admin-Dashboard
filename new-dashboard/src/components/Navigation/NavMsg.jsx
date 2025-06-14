import React from 'react'

function NavMsg() {
  return (
    <li className='nav-item dropdown'>
      <a className='nav-link nav-icon' href="#" data-bs-toggle="dropdown">
        <i className='bi bi-chat-left-text'></i>
          <span className='badge bg-success badge-number'>3</span>
        
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications'>
        <li className='dropdown-header'>
          You have 4 new notifications
          <a href="#">
            <span className='badge-rounded-pill bg-primary p-2 ms-2'>
              View all
            </span>
          </a>
        </li>
        <li>
          <hr className='dropdown-divider' />
        </li>
        <li className='notification-item'>
          <i className='bi bi-exclamation-circle text-warning'></i>
          <div>
            <h4>Lorem Ipsum</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>30 min,ago</p>
          </div>
        </li>

        <li>
          <hr className='dropdown-divider' />
        </li>
        <li className='notification-item'>
          <i className='bi bi-exclamation-circle text-warning'></i>
          <div>
            <h4>Lorem Ipsum</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>2 hr,ago</p>
          </div>
        </li>


         <li>
          <hr className='dropdown-divider' />
        </li>
        <li className='notification-item'>
          <i className='bi bi-exclamation-circle text-warning'></i>
          <div>
            <h4>Dolar</h4>
            <p>Quae dolorem earum veritatis oditseno</p>
            <p>4 hr,ago</p>
          </div>
        </li>

      

      </ul>

    </li>
  )
}

export default NavMsg