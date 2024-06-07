import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav class="navbar navbar-expand-lg bg-warning">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">STUDENT APP</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/">Add Student</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/SearchStudent">Search</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/DeleteStudent">Delete</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/ViewStudent">View Students</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar