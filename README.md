# IPL Analysis using Javascript

Charts are plotted on web browser using the javascript. Initially, from python, we generate JSON data, and using that JSON data, we will plot graphs.

## Download the required csv file 

Download csv files from below given link :

[https://www.kaggle.com/manasgarg/ipl/version/5](https://www.kaggle.com/manasgarg/ipl/version/5)

### Mountblue's second project using JavaScript

Run `Setup.sh` file to make the project RUN.

setup shell script will first try to check whether virtual environment exists or not.

if it is already exists, then it will activate it.
otherwise, it will create virtual environment first and then initialize it.

Once, virtual environment is created, it will try to install the requirements.

then, if all goes well, it will call the `generate_json.py` python script which will generate JSON data.

Ultimately, it will use the following command to start server
`python3 -m http.server`

## Live site :-
clicking [here](https://krunalkumar-ipl-analysis.herokuapp.com/), to see the live site.