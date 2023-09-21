# TTC-Alerts-Website
A website which publishes TTC alerts 

A bot to scrape the TTC's most latest tweets (Xs?)

Every 20 seconds, the bot will scrape the TTCnotice twitter account for their latest Tweet and prints out whatever it finds. There should be multiple channels of data feeding into the website itself. They are: the bot, crowd size heatmap, any any other data scraping/collecting programs. 

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
