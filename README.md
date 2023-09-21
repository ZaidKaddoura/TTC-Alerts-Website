# TTC-Alerts-Website
A website which publishes TTC alerts 

There should be multiple channels of data feeding into the website itself. They are: the bot, crowd size heatmap, any any other data scraping/collecting programs. 

Keywords to watch for when data mining:

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
