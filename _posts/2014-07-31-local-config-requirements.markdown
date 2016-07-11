---
layout: post
title: "Local Config Requirements"
date: 2014-04-25 10:12:27 -0500
published: false
comments: true
categories: 
---


Documentation to setup a new machine:

Much of the documentation below taken from <a href="http://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac/">http://www.moncefbelyamani.com/how-to-install-xcode-homebrew-git-rvm-ruby-on-mac/</a>.

* Install XCode and Command Line Tools
* Verify OSX Ruby install

<code>ruby --version</code>

* Install Homebrew

<code>ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go/install)"</code>

<a href="https://github.com/mxcl/homebrew/wiki/installation">https://github.com/mxcl/homebrew/wiki/installation</a>

Once installed, run <code>brew doctor</code>

If error on Command Line Tools, reinstall them.

If <code>Error: No such file or directory - /usr/local/Cellar</code>,
run:

<code>sudo mkdir /usr/local/Cellar</code>

If <code>Cannot write...</code> errors occur then:

<code>sudo chown -R `whoami` /usr/local</code>

Run <code>brew doctor</code> again.

If PATH error occurs, then:

<code>echo 'export PATH="/usr/local/bin:/usr/local/sbin:~/bin:$PATH"' >> ~/.bash_profile</code>

Quit and relaunch Terminal, run <code>brew doctor</brew>. System should
be ready to brew.

* Install Git

<pre>
  <code>
   <span class="line">brew update</span>
   <span class="line">brew install git</span>
   <span class="line">...</span>
   <span class="line">brew doctor</span>
  </code>
</pre>

If PATH error, <code>Warning: /usr/bin occurs before
/usr/local/bin</code> occurs, then:

<code>echo 'export PATH="/usr/local/bin:/usr/local/sbin:~/bin:$PATH"' >> ~/.bash_profile</code>

Quit and relaunch Terminal, then <code>brew doctor</code>

Verify Git install:

<code>which git</code>

* Configure Git with Name and Email

<pre>
  <code>
   <span class="line">git config --global user.name "Full Name"</span>
   <span class="line">git config --global user.email "email addy"</span>
  </code>
</pre>

* Install rbenv
* Install ZSH

<code>curl -L https://github.com/robbyrussell/oh-my-zsh/raw/master/tools/install.sh | sh</code>

* Generate Github .ssh key

<a href="https://help.github.com/articles/generating-ssh-keys">https://help.github.com/articles/generating-ssh-keys</a>

* Install Node.js

<code>brew install node</code>

Verify node.js install:

<code>npm</code>

* Install Bower

<code>npm install -g bower</code>

Verify install:

<code>bower</code>

* Install Chrome
* Install SizeUp
* Install Macvim/Janus
* Install Dropbox, Box, Google Drive, BitCasa
* Install Evernote
* Install GeekTool
* Install Octopress
* Install todo.txt-cli
* Install yEd
* Install reveal.js
* Install VirtualBox
* Install Keynote
* Install Skitch
* Install SourceTree
* Install Spotify
* Install TextMate

Other plugins:

* bash-trash - <a href="https://github.com/bahamas10/bash-trash">bahamas10/bash-trash · GitHub</a>
* emmet-vim - <a href="https://github.com/mattn/emmet-vim">mattn/emmet-vim · GitHub</a>



