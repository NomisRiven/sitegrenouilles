import zipapp
from riotwatcher import LolWatcher, ApiError
import csv
import time
from tkinter import *

#CREATION DE LA LISTE

api_key = 'RGAPI-a9474894-4fb3-496f-89ff-0cc7f40b489a'
watcher = LolWatcher(api_key)
my_region = 'euw1'

with open(r"C:\Users\Simon\Desktop\code\Site grenouilles\caca.csv", newline='') as csvfile:
    doc = csv.reader(csvfile)
    data = [tuple(row) for row in doc]

num_rows = 0

for row in open(r"C:\Users\Simon\Desktop\code\Site grenouilles\caca.csv", newline=''):
    num_rows += 1

summoner=[]
ranked_data=[]
roles=[]
names=[]
tiers=[]
ranks=[]
line=[]
scoreboard=[]

for x in range (1,num_rows):
    time.sleep(0.1)
    summoner.append(watcher.summoner.by_account(my_region, data[x][2]))
    ranked_data.append(watcher.league.by_summoner(my_region, summoner[x-1]['id']))
    roles.append(data[x][0])
    names.append(data[x][1])
    if ranked_data[x-1][0]['queueType']=='RANKED_SOLO_5x5':
        tiers.append(ranked_data[x-1][0]['tier'])
        ranks.append(ranked_data[x-1][0]['leaguePoints'])
        line=(roles[x-1],names[x-1],tiers[x-1],ranks[x-1])
        if ranked_data[x-1][0]['tier']!='DIAMOND':
            scoreboard.append(line)
    elif ranked_data[x-1][1]['queueType']=='RANKED_SOLO_5x5':
        tiers.append(ranked_data[x-1][1]['tier'])
        ranks.append(ranked_data[x-1][1]['leaguePoints'])
        line=(roles[x-1],names[x-1],tiers[x-1],ranks[x-1])
        if ranked_data[x-1][1]['tier']!='DIAMOND':
            scoreboard.append(line)
    elif ranked_data[x-1][2]['queueType']=='RANKED_SOLO_5x5':
        tiers.append(ranked_data[x-1][2]['tier'])
        ranks.append(ranked_data[x-1][2]['leaguePoints'])
        line=(roles[x-1],names[x-1],tiers[x-1],ranks[x-1])
        if ranked_data[x-1][2]['tier']!='DIAMOND':
            scoreboard.append(line)
    elif ranked_data[x-1][3]['queueType']=='RANKED_SOLO_5x5':
        tiers.append(ranked_data[x-1][3]['tier'])
        ranks.append(ranked_data[x-1][3]['leaguePoints'])
        line=(roles[x-1],names[x-1],tiers[x-1],ranks[x-1])
        if ranked_data[x-1][3]['tier']!='DIAMOND':
            scoreboard.append(line)


#CREATION DU TABLEAU ET DE L'INTERFACE

class Table:
    
    def __init__(self,root):
        totalLP = 0
        # code for creating table
        for i in range(40):
            for j in range(total_columns+1):
                self.e = Entry(root, width=20, fg='black',
                               font=('Arial',12,'bold'))
                self.e.grid(row=i, column=j+1)
                newline=[newcol[i],lst[i][0],lst[i][1],lst[i][2],lst[i][3]]
                self.e.insert(END, newline[j])
            totalLP = totalLP+lst[i][3]
        print("Total de LPs des grenouilles Master + : "+str(totalLP))
        print("Moyenne de LPs des grenouilles Master + : "+str(round(totalLP/total_rows)))

# take the data
lst = sorted(scoreboard, key=lambda lp: lp[3], reverse=True)

newcol=[]
newlst=[]

# find total number of rows and
# columns in list
# total_rows = len(lst)
# total_columns = len(lst[0])
# for k in range(total_rows):
#     newcol.append(k+1)

# create root window
# root = Tk()
# t = Table(root)
# root.mainloop()