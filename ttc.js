class station 
{
    constructor(Name,X,Y) 
    {
        this.Name = Name;
        this.X = X;
        this.Y = Y;
    }

    get name() 
    {
        return this.Name;
    }

    get x()
    {
        return this.X;
    }

    get y()
    {
        return this.Y;
    }
}

class line 
{
    constructor(Name,X,Y)
    {
        this.Name = Name;
        this.X = X;
        this.Y = Y;
    }

    get name() 
    {
        return this.Name;
    }

    get x()
    {
        return this.X;
    }

    get y()
    {
        return this.Y;
    }
}

const stations = [];
const lines = [];

const Finch = new station('Finch', 10,40);
stations.push(Finch);

const NorthYorkCentre = new station('North York Centre', 15,40);
stations.push(NorthYorkCentre);

const SheppardYonge = new station('Sheppard-Yonge', 16,40);
stations.push(SheppardYonge);

const YorkMills = new station('York Mills', 21,40);
stations.push(YorkMills);

const Lawrence = new station('Lawrence', 27,40);
stations.push(Lawrence);

const Eglinton = new station('Eglinton', 33,40);
stations.push(Eglinton);

const Davisville = new station('Davisville', 38,40);
stations.push(Davisville);

const StClair = new station('St Clair', 42,40);
stations.push(StClair);

const Summerhill = new station('Summerhill', 45,40);
stations.push(Summerhill);

const Rosedale = new station('Rosedale', 48,40);
stations.push(Rosedale);

const BloorYonge = new station('Bloor-Yonge', 51,40);
stations.push(BloorYonge);

const Wellesley = new station('Wellesley', 54,40);
stations.push(Wellesley);

const College = new station('College', 57,40);
stations.push(College);

const Dundas = new station('Dundas', 60,40);
stations.push(Dundas);

const Queen = new station('Queen', 63,40);
stations.push(Queen);

const King = new station('King', 66,40);
stations.push(King);

const Union = new station('Union', 69, 38);
stations.push(Union);

const StAndrew = new station('St Andrew', 66,35.6);
stations.push(StAndrew);

const Osgoode = new station('Osgoode', 63, 35.6);
stations.push(Osgoode);

const StPatrick = new station('St Patrick', 60, 35.6);
stations.push(StPatrick);

const QueensPark = new station("Queen's Park", 57, 35.6);
stations.push(QueensPark);

const Museum = new station("Museum", 54,35.6);
stations.push(Museum);

const StGeorge = new station("St George", 51, 35.6);
stations.push(StGeorge);

const Spadina = new station("Spadina", 51, 33.4);
stations.push(Spadina);

const Dupont = new station("Dupont", 45, 33.4);
stations.push(Dupont);

const StClairWest = new station("St Clair West", 42,31.9);
stations.push(StClairWest);

const EglintonWest = new station("Eglinton West", 33.5,27.7);
stations.push(EglintonWest);

const Glencairn = new station("Glencairn", 30.5,27.7);
stations.push(Glencairn);

const LawrenceWest = new station("Lawrence West", 27.5,27.7);
stations.push(LawrenceWest);

const Yorkdale = new station("Yorkdale", 24.5,27.7);
stations.push(Yorkdale);

const Wilson = new station("Wilson", 21.7,27.6);
stations.push(Wilson);

const SheppardWest = new station("Sheppard West", 16.3,24.7);
stations.push(SheppardWest);

const DownsviewPark = new station("Downsview Park", 14.2,20.6);
stations.push(DownsviewPark);

const FinchWest = new station("Finch West", 10,17.9);
stations.push(FinchWest);

const YorkUniversity = new station("York University", 6,16.6);
stations.push(YorkUniversity);

const PioneerVillage = new station("Pioneer Village", 4,14,6);
stations.push(PioneerVillage);

const Highway407 = new station("Highway 407", 0.4,11.7);
stations.push(Highway407);

const VaughnMetropolitanCentre = new station("Vaughan Metropolitan Centre", -2,11.7);
stations.push(VaughnMetropolitanCentre);

const Kipling = new station("Kipling", 52.5,2.6);
stations.push(Kipling);

const Islington = new station("Islington", 50.8,4.9);
stations.push(Islington);

const RoyalYork = new station("Royal York", 50.8,7.1);
stations.push(RoyalYork);

const OldMill = new station("Old Mill", 50.8,9.3);
stations.push(OldMill);

const Jane = new station("Jane", 50.8,11.5);
stations.push(Jane);

const Runnymede = new station("Runnymede", 50.8,13.7);
stations.push(Runnymede);

const HighPark = new station("High Park", 50.8,15.8);
stations.push(HighPark);

const Keele = new station("Keele", 50.8,18);
stations.push(Keele);

const DundasWest = new station("Dundas West", 50.8,20.2);
stations.push(DundasWest);

const Lansdowne = new station("Lansdowne", 50.8,22.4);
stations.push(Lansdowne);

const Dufferin = new station("Dufferin", 50.8,24.6);
stations.push(Dufferin);

const Ossington = new station("Ossington", 50.8,26.8);
stations.push(Ossington);

const Christie = new station("Christie", 50.8,29);
stations.push(Christie);

const Bathurst = new station("Bathurst", 50.8,31.2);
stations.push(Bathurst);

const Bay = new station("Bay", 50.8, 37.8);
stations.push(Bay);

const Sherbourne = new station("Sherbourne", 50.8, 42.2);
stations.push(Sherbourne);

const CastleFrank = new station("Castle Frank", 50.8, 44.4);
stations.push(CastleFrank);

const Broadview = new station("Broadview", 50.8,46.6);
stations.push(Broadview);

const Chester = new station("Chester", 50.8,48.8);
stations.push(Chester);

const Pape = new station("Pape", 50.8, 51);
stations.push(Pape);

const Donlands = new station("Donlands", 50.8, 53.8);
stations.push(Donlands);

const Greenwood = new station("Greenwood", 50.8, 56.7);
stations.push(Greenwood);

const Coxwell = new station("Coxwell", 55,59.5);
stations.push(Coxwell);

const Woodbine = new station("Woodbine", 50.8,62.3);
stations.push(Woodbine);

const MainStreet = new station("Main Street", 50.8, 65.3);
stations.push(MainStreet);

const VictoriaPark = new station("Victoria Park", 49, 69.8);
stations.push(VictoriaPark);

const Warden = new station("Warden", 42, 76);
stations.push(Warden);

const Kennedy = new station("Kennedy", 33.6,82.7);
stations.push(Kennedy);

const Bayview = new station("Bayview", 15.6,46.6);
stations.push(Bayview);

const Bessarion = new station("Bessarion", 15.6,49.86);
stations.push(Bessarion);

const Leslie = new station("Leslie", 15.6, 53.9);
stations.push(Leslie);

const DonMills = new station("Don Mills", 15.6, 56.5);
stations.push(DonMills);



const line1 = new line("Line 1", 63.5, 55.5);
lines.push(line1)

const line2 = new line("Line 2", 66, 55.5);
lines.push(line2)

const line4 = new line("Line 4", 71.5, 55.5);
lines.push(line4)



//alert obtained from the spreadsheet
const ttcMessage = "Line 1 Yonge-University: Trains are not stopping at Bloor-Yonge due to a security incident."; 


let tempLine = "";


if (ttcMessage.includes("line"))
{
    for (let i = 0; i < lines.length; i++)
    {
        tempLine = lines[i].Name;
        if (ttcMessage.includes(tempLine))
        {
            //change the location of the pin to be on the line
        }
    }
}

else if (!ttcMessage.includes("line"))
{
    //obtain the substring from the first 3 words of the tweet when it is a station. 
    const newMessage = ttcMessage.substring(0,4) // change this to get the first 4 words NOT letters

    for (let i = 0; i < stations.length; i++)
    {
        tempLine = stations[i].Name;
        if (newMessage.includes(tempLine))
        {
            //change the location of the pin to be on the station with the alert message
        }
    }
}