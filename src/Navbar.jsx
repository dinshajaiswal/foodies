import React from "react";
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.5.0/css/all.css" integrity="sha384-B4dIYHKNBt8Bc12p+WXckhzcICo0wtJAoU8YZTY5qE0Id1GSseTk6S+L3BlXeVIU" crossorigin="anonymous"></link>

const Navbar = () => {
  return(
  <>
  <section id="nav-bar">

  <nav class="navbar navbar-expand-lg navbar-light bg-dark  shadow">
  <div class="container-fluid">
    <a class="navbar-brand" href="#"><i class="fas fa-mobile-alt"></i>  Get the App</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
       
          <a class="nav-link" href="#">LogIn</a><span><a class="nav-link" href="#">SignUp</a></span>
          
       
     
      </ul>
     
    </div>
  </div>
</nav>

  </section>

  <section id="banner">
    <div class="container">
      
        <h1>foodiesss</h1>
        <p>Discover the best food & drinks in India</p>
        <div class="input-group mb-3">
  <span class="input-group-text" id="basic-addon1">Search </span>
  <input type="text"  class="form-control input-sm" placeholder=" " aria-label="Username" aria-describedby="basic-addon1" />
</div>
    </div>
  </section>

  </>
  );
};
export default Navbar;
