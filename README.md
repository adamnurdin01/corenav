# Corenav

**coreNavigation** is a multi purpose navigation menu for javascript library based on jquery, come with more style and easy to combination.

  - 11 Default Menu
  - 2 Responsive Navigation
  - 7 Event Menu
  - 6 Attributes Header
  - 3 Mode Menu Position
  - 9 Layout Navigation
  - More Themes & Custom

Demo : http://corenav.com

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
| animated | false | 	true or false |
| animatedIn | bounceIn | Visit for more animates: https://daneden.github.io/animate.css/ |
| animatedOut | bounceOut | Visit for more animates: https://daneden.github.io/animate.css/ |
| onInit || Initial function on init |
| onResize || On Resize windows Callback function |
| onOpenDropdown || Callback event open dropdown |
| onCloseDropdown || Callback event close dropdown |
| onOpenMegaMenu || Callback event open megamenu |
| onCloseMegaMenu || Callback event close megamenu |
| onStartSticky || Callback event start sticky mode |
| onEndSticky || Callback event end sticky mode |

### Logs

- **13 August 2018 V.1.1.2**
1. Fix bug event onresize

- **08 August 2018 V.1.1.2**
1. Fix bug attributes fullwidth & container

- **05 August 2018 V.1.1.1**
1. Fix bug attributes on sidebar mode

- **04 August 2018 V.1.1.0**
1. On Resize Callback
2. Default bottom left icon attributes
3. Default bottom left icon attributes & content

- **14 July 2018 V.1.0.2**
1. Animation style for dropdown & megamenu

- **12 July 2018 V.1.0.1**
1. Attributes feature on sidebar menu

- **25 Juni 2018 V.1.0.0**
1. Initilize release
