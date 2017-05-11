Requirement
====

```
rvm install `cat .ruby-version`
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
middleman
```

stop:

`Ctrl + C` to stop.

Build dist files
======

```
middleman build
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
