import requests 
from bs4 import BeautifulSoup as bs

def corona(link, k):
    news = []
    r = requests.get(link)
    soup = bs(r.content, 'html5lib')
    for i in soup.find_all('a'):
        t = i.text
        if len(t) > 50:
            if k in t.lower():
                news.append(t)
    return news
def covid():
    k = input('Keyword -  ')
    links = [
        'https://www.theprint.in/',
        'https://www.thequint.com/',
        'https://www.indiatoday.in/',
        'https://www.indianexpress.com/',
        'https://www.hindustantimes.com/',
        'https://www.news18.com/'
    ]
    for i in links:
        print('▶️ ',i.split('.')[1])
        v = corona(i, k)
        if v:
            for j in v:
                print('👉 ',j)
        else:
            print('No News Found ...')
            
covid()

input('Completed..')