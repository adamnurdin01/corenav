# Corenav

coreNavigation (v.1.0.0) is a multi purpose navigation menu for javascript library based on jquery, come with more style and easy to combination.

  - 9 Default Menu
  - 2 Responsive Navigation
  - 6 Event Menu
  - 6 Attributes Header
  - 3 Mode Menu Position
  - 9 Layout Navigation
  - More Themes & Custom

Demo : http://corenav.com

#### Browser Support
![](https://www.fellowshipproductions.co.uk/wp-content/uploads/2016/09/6-browser-icons2.jpg)


### Instalations
Include coreNavigation assets CSS & Javascript
```sh
<link rel="stylesheet" href="./css/coreNavigation.css" />
<script type="text/javascript" src="./js/coreNavigation.js"></script>
```
Create coreNavigation code & options
```sh
<nav>
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

### Options
| Setting | Default |Description|
| ------ | ------ |------|
| layout | default | String value for layout coreNavigation : default, brand-center, fullscreen, sidebar, sidebar-toggle, section, side-icon|
| menuFullWidth | false | 	true or false |
| menuPosition | left | String value for menu position: left, right, center, bottom |
| container | true | 	true or false |
| toggleHoverSidebar | false | 	true or false (Only for "side-icon" layout mode) |
| responsideSlide | false | 	true or false |
| dropdownEvent	 | hover | 	String value for dropdown event : click, hover, accordion |
| mode | default | String value for dropdown event : default, fixed, sticky |
| onInit || Initial function on init |
| onOpenDropdown || Callback event open dropdown |
| onCloseDropdown || Callback event close dropdown |
| onOpenMegaMenu || Callback event open megamenu |
| onCloseMegaMenu || Callback event close megamenu |
| onStartSticky || Callback event start sticky mode |
| onEndSticky || Callback event end sticky mode |

### Logs
    - 25 Juni 2018
        - Initilize release
