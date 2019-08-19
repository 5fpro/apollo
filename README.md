Requirement
====

- install ruby.

```
rvm install `cat .ruby-version`
```

- install bower

```
brew install nvm
echo "export NVM_DIR=~/.nvm" >> ~/.zshrc
echo ". $(brew --prefix nvm)/nvm.sh" >> ~/.zshrc
source ~/.zshrc
nvm install `cat .nvmrc`
npm install -g bower
```

Build project
====

```
bundle install
```

```
bower install
```

Start / Stop
=====

start:

```
bundle exec middleman
```

stop:

`Ctrl + C` to stop.

Build dist files
======

```
bundle exec middleman build
```

Deploy to staging
=========

First setup.

```
bin/setup-staging-deploy
```

Deploy staging

```
bin/deploy-staging
```
