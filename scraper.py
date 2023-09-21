'''
A bot to scrape the TTC's most latest tweets (Xs?)

Every 20 seconds, the bot will scrape the TTCnotice twitter account for their latest Tweet and prints out whatever it finds.

Some caveats:
This will have to keep running, which poses two problems. First, we have to find a system to keep this running on. This isn't
too draining because it does not create any files. However, it does keep Google Chrome on perepetually, which is in and of itself
a RAM-drainer (fuck Chrome). Secondly, we must take precautions to ensure Twitter doesn't notice we're a bot, lest either my IP
or whoever's IP we use for this project be banned. I've found a few ways to bypass their bot protection, but our biggest asset
today would be to find a way to switch IPs with every iteration. Intersting... https://thepythoncode.com/article/manipulate-ip-addresses-using-ipaddress-module-in-python

Some resources for periodic IP-updating:
	https://forums.raspberrypi.com/viewtopic.php?t=71293
	

Ideas: 
Get VPN! Honestly, best possible option. 
Proxies (but most publicly available ones are blacklisted, and paid ones are, well, paid.)


Keywords to watch for:

Trains not stopping at SPECIFIC STATION:
	"Trains are not stopping"

Trains cotinuing:
	"Regular service has resumed"
	
Detour
	"Detour"

Trains not in service for a SECTION OF THE LINE (multiple stations):
	"No service between"

Trains resume service for a SECTION OF THE LINE (multiple stations):
	"Regular service has resumed"

Elevator out of order at a station:
	"Elevator Out of service"
	
This parsing system is likely best integrated into the JS portions of the site. Simply, the bot sends a message to the site, which then filters and breaks the message down.
We can use a JS function to search for these keywords. 

Message breakdown system:
	TTC uses the same alert format: LOCATION: ISSUE: WHY. Honestly, a function that breaks the string down into a dict. 
	relating each term in the sentence to each format in the category is likely the most effective way to go about this.
	
'''




import requests 
from bs4 import BeautifulSoup
from selenium import webdriver
from tweety import Twitter
import webbrowser
from selenium import webdriver 
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
import time

# Functions

def newest_tweet_IDretrieval(username):
	all_tweets = app.get_tweets(username)
	for tweet in all_tweets:
		tweet=tweet
		break
	return tweet["id"]

# Create a tweet URL based on ID 
def generate_tweet_URL(username, tweetID):
	string = "https://twitter.com/"+username+"/status/"+str(tweetID)
	return string


	
# Log into Twitter
app = Twitter("session")
app.sign_in("kafkaesquefi", "1sTH!SGOODENOUGH")

# Who we scraping, ayyyy.
user = "TTCnotices"

while True: 
	ID = newest_tweet_IDretrieval(user)
	
	#print(ID) # For debugging purposes 
	
	URL = generate_tweet_URL(user, ID)
	
	#print(URL) # For debugging purposes
	
	
	DRIVER_PATH = '/Users/zaid/Downloads/chromedriver-mac-arm64/chromedriver'
	options = Options()
	options.headless = False # For debugging purposes, set to false. But usually True.
	options.add_argument("--window-size=1920,1200")
	
	'''
	
	For extra protection from anti-bot features. Unecessary for the time being. 
	
	options.add_argument("--disable-blink-features=AutomationControlled") 
	options.add_experimental_option("excludeSwitches", ["enable-automation"]) 
	options.add_experimental_option("useAutomationExtension", False) 
	
	'''
	
	driver = webdriver.Chrome(options=options, executable_path=DRIVER_PATH)
	driver.execute_script("Object.defineProperty(navigator, 'webdriver', {get: () => undefined})") 
	driver.get(URL)
	
	# Wait for webpage to load properly
	time.sleep(2)
	source_code = driver.page_source
	#print(source_code) Unecessary unless debugging. 
	
	# Use soup to parse HTML
	soup = BeautifulSoup(source_code, features="html.parser")
	alert = soup.find('title')
	
	alert = str(alert)
	
	# Format alert
	alert = alert.removeprefix('<title>')
	alert = alert.removeprefix(' ')
	alert = alert.removesuffix(' / X</title>')
	alert = alert.removesuffix(' ')
	
	# Print alert
	print(alert)
		
	# Sleepy time gal (Zzzzz.....). Wait five minutes before scrubbing again
	'''
	You're turning Tweets into code
	Sleepy time script
	You'll dance the scraper away
	'''
	time.sleep(10)

'''
JS if statement to determine if tweet is new or not from last parsing:

if(old_message != new_message){
	post_message(new_message) 
}
'''