# poll-system

Real time polling system for task estimation

local setup:
Pre-requisites

- ruby 2.7.0
- Rails 6.1.3.2
- node v14.17.1
- npm 6.14.13

Steps to run on local:

- start a server

  - git clone git@github.com:mayuriardad/poll-system.git
  - rake db:create
  - rake db:migrate
  - rake db:seed
  - rails s

- run frontend application
  - npm install
  - npm start

Note: please ensure that you have rails server running on 3000 port and APP running on port 3001
