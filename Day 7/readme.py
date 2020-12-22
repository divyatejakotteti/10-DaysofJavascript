print(" ***  README Generator  ***")
import os
files = []
ignore = ['readme.py','README.md']
for name in os.listdir('.'):
    files.append(name)
x= input("Enter the day :")
n = input("How many problems did you solved today ? ")
with open("README.md", "w") as f:
    f.write("""# #10DaysofJavascript Challenge
## Day """+ str(x) +""": Quick Overview
Solved """+ str(n) + """ problems from Hackerrank  \n""")
    for i in range(len(files)):
        if files[i] not in ignore :
            f.writelines('{}. [{}](https://github.com/divyatejakotteti/100DaysOfCode/blob/master/Day%20{}/{})\n'.format(i+1,files[i],x,files[i]))
    f.write("### \nRead more about Hackerrank problems here : https://www.hackerrank.com/challenges")
    f.close()
