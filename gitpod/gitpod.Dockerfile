FROM gitpod/workspace-full-vnc

USER root

## JEKYLL ##

RUN apt update && apt install -y ruby ruby-dev firefox
