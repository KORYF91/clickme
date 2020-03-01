import React from 'react';


function Navigation(props) {

    return (
      <div>
        <nav class="navbar navbar-light bg-light">
  <span class="navbar-brand mb-0 h1">Click ME if your feeling luckly</span>

    <span> Score : {props.score} | Top Score : {props.topscore}</span>
</nav>
<div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h1 class="display-4">Numbers Memeber</h1>
    <p class="lead">This is a memorey Game. If you click the same image more than once you lose. If you are able to keep clicking a new image every time you win. My the odds ever be in your favor</p>
  </div>
</div>

</div>
    )
}

export default Navigation;