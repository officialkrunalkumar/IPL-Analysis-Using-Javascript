import json
from csv import DictReader as d
from collections import defaultdict as dd


def generate_json1():
    """
    This function will calculate the total runs scored by teams.
    and will dump the data in json form in problem_1.json file.
    """
    with open("./deliveries.csv",) as file:
        data = d(file)
        information = dd(int)
        for data1 in data:
            information[data1["batting_team"]] += int(data1["total_runs"])
        with open("./assets/JSON/problem_1.json", "w") as outfile:
            json.dump(information, outfile)


def generate_json2():
    """
    This function will calculate top 10 bats man from RCB.
    then it will dump it in the form of json in problem_2.json.
    """
    with open("./deliveries.csv") as file:
        data = d(file)
        information = dd(int)
        for data1 in data:
            if data1["batting_team"] == "Royal Challengers Bangalore":
                information[data1["batsman"]] += int(data1["total_runs"])
        scoring = sorted(list(information.values()), reverse=True)[:10]
        information2 = dd(int)
        for number in range(0, 10):
            for data2 in information.keys():
                if information[data2] == scoring[number]:
                    information2[data2] = scoring[number]
        with open("./assets/JSON/problem_2.json", "w") as outfile:
            json.dump(information2, outfile)


def generate_json3():
    """
    It will read the matches.csv and umpires.csv.
    Then will made analysis of foreign umpires.
    and will dump the data in the json form in problem_3.json.
    """
    with open("./matches.csv") as file:
        matches = d(file)
        information = dd(int)
        with open("./umpires.csv") as file1:
            ucd = d(file1)
            umpire_country = dd(int)
            for data in ucd:
                umpire_country[data["umpire"]] = data[" country"]
        for data1 in matches:
            if data1["umpire1"]:
                if umpire_country[data1["umpire1"]] != "India":
                    information[umpire_country[data1["umpire1"]]] += 1
                if umpire_country[data1["umpire2"]] != "India":
                    information[umpire_country[data1["umpire2"]]] += 1
        information.pop(" India", None)
        with open("./assets/JSON/problem_3.json", "w") as output:
            json.dump(information, output)


def generate_json4():
    """
    This function will calculate the total scores by team by season.
    and it also dumps that data in problem_4.json
    """
    with open("./matches.csv") as file:
        m = d(file)
        teams = dd(int)
        for row in m:
            if row['season'] not in teams:
                teams[row['season']] = dd(int)
                teams[row['season']][row['team1']] = 1
                teams[row['season']][row['team2']] = 1
            else:
                teams[row['season']][row['team1']] += 1
                teams[row['season']][row['team2']] += 1
        seasons = sorted(list(teams.keys()))
        team_names = [
            'Royal Challengers Bangalore',
            'Rising Pune Supergiant',
            'Deccan Chargers',
            'Mumbai Indians',
            'Kochi Tuskers Kerala',
            'Delhi Daredevils',
            'Gujarat Lions',
            'Sunrisers Hyderabad',
            'Rajasthan Royals',
            'Pune Warriors',
            'Kolkata Knight Riders',
            'Chennai Super Kings',
            'Kings XI Punjab',
        ]
        played_matches = []
        for team in team_names:
            match_played = []
            for season in seasons:
                if season in teams and team in teams[season]:
                    match_played.append(teams[season][team])
                else:
                    match_played.append(0)
            played_matches.append(match_played)
        information = []
        for iteration in range(len(team_names)):
            information.append({"name": team_names[iteration],
                                "data": played_matches[iteration]})
        with open("./assets/JSON/problem_4.json", "w") as output:
            json.dump(information, output)


if __name__ == "__main__":
    generate_json1()
    generate_json2()
    generate_json3()
    generate_json4()
