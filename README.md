# My Yellow Duck

Welcome to My Yellow Duck project! 🦆🌼

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://www.buymeacoffee.com/jaroslawzielinski)

Have you ever found yourself in need of someone to talk to about a problem or bug you're facing while coding? Introducing My Yellow Duck, your trusty companion for rubber duck debugging sessions!

Simply type anything you'd like to ask or discuss, just like you would on Slack, Rocket.Chat, or any other messaging platform. When you're ready to copy your message and share it with someone, the Duck will ask you, "Are you sure?" It's your chance to validate your thoughts and make sure you're ready to take the next step.

But beware! The mysterious "Yellow Duck Effect" may take hold before you even copy your message. Who knows what insights and solutions might come to you while interacting with your duck companion? Embrace the unexpected!

![Yellow Duck](docs/yellowduck.png)

And guess what? You can even attach a shortcut to My Yellow Duck on your system toolbar for quick access! 🚀

## How to Install

To get started with My Yellow Duck, follow these simple steps:

in [packagist](https://packagist.org/packages/jaroslawzielinski/my-yellow-duck)

1. Clone the repository:
```shell
git clone https://github.com/JaroslawZielinski/my-yellow-duck.git
```
2. Navigate to the project directory:
```shell
cd my-yellow-duck
````
3. Copy .env.dist to .env (you may edit .env configuration file):
```shell
cp .env.dist .env
````
4. Install the dependencies:
```shell
npm install
````
5. Launch My Yellow Duck:
```shell
npm start
````
That's it! Your Yellow Duck is ready to assist you in your coding adventures. Happy rubber duck debugging!

## It may be useful for Ubuntu users:

* You may add this application to system toolbar in Ubuntu (using _alacarte_ f.e) with duck icon ![Yellow Duck](yellow-duck.png).

* If you would like to open window only once ignoring multiple clicking,
you may create running script like this:
```shell
#!/bin/bash

if pgrep "electron" >/dev/null; then
    echo ""
else
    cd ~/my-yellow-duck && npm install && npm start
fi
```

## See Also
To learn more about the concept of rubber duck debugging, check out the following link:

[Rubber duck debugging](https://en.wikipedia.org/wiki/Rubber_duck_debugging)
