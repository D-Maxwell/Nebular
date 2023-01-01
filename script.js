
class WindowManager {
  constructor() {
    this.instance = document.createElement("div");
    this.instance.setAttribute("id","windowManager");

    document.body.appendChild(this.instance);
  }
}

WM = new WindowManager();



class Window {

  constructor(name, size) {
    this.name = name;
    this.size = size;
    console.log(size == null);
    this.size != null ? this.width = parseInt(size[0]) + "px" : this.width = Math.ceil(parseInt(getComputedStyle(WM.instance).width) * 0.6666) + "px";
    this.size != null ? this.height = parseInt(size[1]) + "px" : this.height = Math.ceil(parseInt(getComputedStyle(WM.instance).height) * 0.6666) + "px";
    this.isLoading = true;

    this.initWin();
    this.buildWin();
    this.displayWin();
  }



  initWin(){
    this.win = document.createElement("div");
    this.win.setAttribute("class","window");
    this.win.setAttribute("id",this.name);

    // if this.width !
    // autosizeWin();
    this.win.style.width = this.width;
    this.win.style.height = this.height;

    this.centerWin();
  }

  centerWin(){
    this.win.style.top = ((parseInt(getComputedStyle(WM.instance).height) / 2) - parseInt(this.height) / 2) + "px";
    this.win.style.left = ((parseInt(getComputedStyle(WM.instance).width) / 2) - parseInt(this.width) / 2) + "px";
  }



  buildWin(){
    this.isLoading = true;
    this.loadScreen();
    this.loadTransition();
    this.isLoading = false;
  }

  loadScreen(){
    this.win.bg = document.createElement("div");
    this.win.bg.setAttribute("class","bg");
    this.win.appendChild(this.win.bg);



    this.win.bg.icon = document.createElement("img");
    this.win.bg.icon.setAttribute("class","icon");
    this.win.bg.icon.setAttribute("src","assets/console.png");

    this.win.bg.appendChild(this.win.bg.icon);
  }

  loadTransition(){

  }



  displayWin(){
    WM.instance.appendChild(this.win);
  }


}

function launchApp(app) {
  var WM = document.getElementById("windowManager");

  var win = document.createElement("div");
  win.setAttribute("class","window");

  // win.style.width = "1280px";
  // win.style.height = "720px";
  win.style.width = Math.ceil(parseInt(getComputedStyle(WM).width) * 0.6666) + "px";
  win.style.height = Math.ceil(parseInt(getComputedStyle(WM).height) * 0.6666) + "px";

  win.style.top = ((parseInt(getComputedStyle(WM).height) / 2) - parseInt(win.style.height) / 2) + "px";
  win.style.left = ((parseInt(getComputedStyle(WM).width) / 2) - parseInt(win.style.width) / 2) + "px";

  // console.log(parseInt(getComputedStyle(WM).height));

  WM.appendChild(win);



  var bg = document.createElement("div");
  bg.setAttribute("class","bg");
  win.appendChild(bg);



  var icon = document.createElement("img");
  icon.setAttribute("class","icon");
  icon.setAttribute("src","assets/console.png");

  bg.appendChild(icon);
}
