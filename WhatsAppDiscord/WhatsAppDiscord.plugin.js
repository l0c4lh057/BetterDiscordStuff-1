//META{"name":"whatsAppDiscord"}*//
class whatsAppDiscord {
  initConstructor() { }
  getName() { return "WhatsApp Discord"; }
  getAuthor() { return "Strencher"; }
  getDescription() { return "Adds a WhatsApp window to Discord."; }
  getVersion() { return "0.0.3"; }
  load() {
        ZLibrary.PluginUpdater.checkForUpdate(this.getName(), this.getVersion(), "https://raw.githubusercontent.com/Strencher/BetterDiscordStuff/master/WhatsAppDiscord/WhatsAppDiscord.plugin.js")
  }
  start() {
      if(document.getElementById("whatsAppButton")){
          return;
        } else {
            this.tryAddButton()
        }
    }
  onSwitch() {
    if(document.getElementById("whatsAppButton")){
        return;
    } else {
        this.tryAddButton()
    }
}
tryAddButton() {
  try {
    this.Button()
  }
  catch(err) {
    console.error(`[${this.getName()}] ${err.message}`);
  }
  
}
  stop() {}
  Button() {
    let inner = document.getElementsByClassName("toolbar-1t6TWx")[0];
    let button = document.createElement("button");
    let Icon = document.createElement("img");
    let buttonInner = document.createElement("div");
    Icon.setAttribute("src", "https://image.flaticon.com/icons/svg/220/220236.svg");
    Icon.height = "25";
    Icon.width = "25";
    button.id = "whatsAppButton";
    button.style = "background-color: transparent !important;";
    buttonInner.style = "background-color: transparent !important;";
    inner.appendChild(buttonInner);
    buttonInner.appendChild(button);
    button.appendChild(Icon);
    Icon.onmouseover = () => {
      Icon.setAttribute("style", "transform: scale(1.2);")
    }
    Icon.onmouseout = () => {
      Icon.setAttribute("style", "transform: scale(1);")
    }
    button.onclick = () => {
      window.open("whatsapp://");
    }
  }

}
