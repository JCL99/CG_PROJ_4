#!/bin/bash
#Replace USER and PATH if you need

echo "PLEASE CLOSE ALL YOUR CHROME TABS BEFORE INVOKING ME"

USER="sw"
google-chrome --allow-file-access-from-files file:///home/$USER/Desktop/CG_PROJ_4/src/main.html
