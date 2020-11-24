# Corenav

**coreNavigation** is a multi purpose navigation menu for javascript library based on jquery, come with more style and easy to combination.

  - 11 Default Menu
  - 2 Responsive Navigation
  - 7 Event Menu
  - 6 Attributes Header
  - 3 Mode Menu Position
  - 9 Layout Navigation
  - More Themes & Custom

Demo : http://corenav.anurdin.net

#### Browser Support
![](https://www.fellowshipproductions.co.uk/wp-content/uploads/2016/09/6-browser-icons2.jpg)


### Instalations
**Install from NPM**
Make sure to install [jQuery NPM](https://www.npmjs.com/package/jquery "jQuery NPM") & [css-loader](https://github.com/webpack-contrib/css-loader "css-loader") for import 'corenav/coreNavigation.css'
```sh
npm i corenav --save
```
```sh
import 'corenav/coreNavigation.css';
import 'corenav';
```

**Install from static**
Include coreNavigation assets CSS & Javascript
```sh
<link rel="stylesheet" href="./css/coreNavigation.css" />
<script type="text/javascript" src="./js/coreNavigation.js"></script>
```
Create coreNavigation code & options
```sh
<nav hidden>
    <div class="nav-header">
        <a href="#" class="brand">
            <img src="./assets/img/brand.png" />
        </a>
        <button class="toggle-bar">
            <span class="fa fa-bars"></span>
        </button>	
    </div>								
    <ul class="menu">
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">Contact Us</a></li>
    </ul>
</nav>
```
```sh
<script type="text/javascript"> 
$('nav').coreNavigation({
    onInit: function(){
        console.log('Init coreNav');
    }
});
</script>
```