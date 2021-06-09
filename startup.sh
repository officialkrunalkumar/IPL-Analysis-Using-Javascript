echo "Activating Virtual Environment..."
if test -f ../global_venv_javascript_dataproject/bin/activate;
then 
source ../global_venv_javascript_dataproject/bin/activate
echo "Virtual Environment Activation Succeed!"
else
virtualenv ../global_venv_javascript_dataproject
source ../global_venv_javascript_dataproject/bin/activate
fi
pip3 install -r requirements.txt
echo "Starting the system..."
python3 generate_json.py
python3 -m http.server
deactivate
echo "Exiting..."