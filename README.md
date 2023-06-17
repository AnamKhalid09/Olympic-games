## What measurable factors contribute to the success of countries in the Olympic games?

![image](https://statathlon.com/wp-content/uploads/2018/01/rio-de-janeiro-2016-summer-olympics-e1467812135773.png)


# Project Overview

## Background

According to nbc sports, United States of America has always been on the top and have won maximum medals in the history of Olympic games. Then Russia, Germany, Great Britain and France are among the top performers in the descending order. (See Reference 1)

We decided to conduct our own analysis and to test some of the measurable factors contributing to the success of a countrys' performance in Olympic games. Does GDP or/and population of a country contributes to their success in the Olympic games? Let's find out!

### Getting Started

1: Clone this repository using git clone 

```
git clone https://github.com/AnamKhalid09/Project-3.git

```

2: Install the following libraries in your local using terminal/Gitbash. You'll use these libraries later in your code for the data analysis purpose.

- Pandas 
```
pip install pandas
```
- requests 
```
python -m pip install requests
```
- BeautifulSoup 
```
pip3 install beautifulsoup4
```
- os 
```
standard library of python so no need to download it
```
- sqlalchemy 
```
conda install -c anaconda sqlalchemy
```
- config 
```
pip install config
```
- Flask 
```
pip install flask
```
- psycopg2
```
pip install psycopg2
```

**Note:** The installation instructions are for windows users only. Please check your python environment and install the libraries accordingly.

3: Processes involved:

- ETL pipeline (SQL database)
- A combination of Webscraping and plotly
- Python Flask-powered API
- HTML/CSS
- JS library (High Chart)


## Extracting, Transforming and Loading process (ETL)

Raw data exists in multiple places and forms. In order to perform any kind of data analysis, this data needs to be cleaned and structured. Data pipeline process ETL – Extract, Transform, and Load is a core concept in data engineering, ensuring that data is consistent, maintains its integrity, and nontheless strives for automatization of data wrangling. Without a consistent and robust data structure, it’s nearly impossible to perform any meaningful analysis.

### Extract

Extracting includes reading the data from multiple sources. we are using two datasets (CSV files) which you can find in 'Resources' folder as described above. If you're looking for datasets of your choice, keep in mind that they don't have to be CSV files necessarily. They could be any of the following:
- CSV files
- JSON files
- HTML tables
- SQL databases
- Spreadsheets

Apart from this, following are a few suggestions where you can find data from in case you want to choose a new dataset:
- https://www.data.world/
- https://www.kaggle.com/
- https://www.data.gov.au/
- https://github.com/awesomedata/awesome-public-datasets
- https://github.com/n0shake/Public-APIs
- https://github.com/Kikobeats/awesome-api

Before extraction using python and pandas, create a new database called 'olympics' in pgAdmin. In the newly created database, create two tables and inner join them using query tools. This joined table (currently empty) will later hold the data that we're interested in at the end of the ETL process. You'll use python and pandas for ETL process in Jupiter notebook. And at the end of the process, you'll load the DataFrames into the postgreSQL table that we created in the beginning. Note that the names of the columns in postgreSQL ad Pandas should be same to save yourself falling in troubles during the loading process.

![image](https://user-images.githubusercontent.com/109832565/203726064-bb9f884b-3d06-4b94-8628-a50322ee3d83.png)


#### Extraction in steps:

- Import dependencies (pandas, create_engine and inspect from sqlalchemy, config) in Jupiter notebook.
- Store CSV files into a DataFrame. For this set the path to the CSV files and read and display the dataframes using pandas.

![image](https://user-images.githubusercontent.com/109832565/203726248-14604436-1d75-4c24-9a94-ee1e01c0f122.png)


### Transform

Transformation includes cleaning and structuring the data in desired form. Structuring includes summarization, selection, joining, filtering and aggregating the data depending on the business needs. Transformation can be done using SQL or specialized ETL tools but here you'll be using Python and Pandas.

- For transformation, clean the dataframe by keeping the copy of the columns that you're interested in. Using a copy and not the original data will save us from troubles.

![image](https://user-images.githubusercontent.com/109832565/203726390-cc0d0064-c50b-4aec-9dc0-e1f984def0dc.png)



### Load

Loading includes writing the data into a relational (sql) or non-relational (mongodb) database for storage. This data could be used for business applications or analysis purposes in future.


**Note:** Add a .gitignore file as a good practice in case you want to keep any confidential files in it like your API keys, your password or username. .gitignore file will keep all the files hidden from being published publicly even if your repository is public. For username and password, open your .gitignore file and in the first line type the following:

```python
# Adding config.py file.
config.py
```

#### Loading in steps:

- Connect to the local database. Here create a config.py file and keep your username and password in it and save the config.py file in .gitignore file to keep your username and password confidential. If it's not confidential, you can put it straight away in the code and you won't have to create config.py or .gitignore file then.

![image](https://user-images.githubusercontent.com/109832565/203727150-b88da613-8196-408b-a884-2468286fa2e4.png)

- Inspect the tables to see if you have connected to the sql database

![image](https://user-images.githubusercontent.com/109832565/203727269-512e2c84-556d-44f7-8266-463d7f85708c.png)

- Use pandas to load csv converted DataFrames into database 

![image](https://user-images.githubusercontent.com/109832565/203727432-941b1d88-89b3-435e-bcc1-33f8b38f358e.png)

- Confirm data has been added by querying the tables in both pandas and postgreSQL

![image](https://user-images.githubusercontent.com/109832565/203727609-815e946f-58c4-426a-a95d-944abac87006.png)

![image](https://user-images.githubusercontent.com/109832565/203727730-1c637190-cf07-4740-86ff-b17d89aaed30.png)

- Join the two tables in pgAdmin or join the two tables in with Pandas and SQLAlchemy.

![image](https://user-images.githubusercontent.com/109832565/203727778-dd4c6eda-05dd-42a0-bd2b-4333d82f92a2.png)

![image](https://user-images.githubusercontent.com/109832565/203727919-6ef58be1-d66d-49f2-96eb-f648bef61f28.png)


## Webscraping

The Olympics data is web scraped from [wikipedia](https://en.wikipedia.org/wiki/All-time_Olympic_Games_medal_table) on the 27/11/2022. To perform the web scrape process yourself simply run all cells within the webscrape.ipynb file, ensuring all dependencies are installed (pandas
, requests, bs4). 
Initially webscrape.ipynb will when check the [wikipedia](https://en.wikipedia.org/wiki/All-time_Olympic_Games_medal_table) link and receive a response from the webpage. When the response has been filled bs4 is used to then to load the table from [wikipedia](https://en.wikipedia.org/wiki/All-time_Olympic_Games_medal_table) then it will parse this object to pandas allowing it to be cleaned before outputting the olympics_medals_country_wise.csv file. The cleaning that is performed is the removal of the unnecessary columns for this project, removing the original 2 headers and replacing them with a simplified header and removing the country codes from the ‘country’ column so it can be paired to the country_profile_variables.csv. 

Or in short:

- Import pandas, requests, BeautifulSoup and os libraries
- Get the response in the form of html
- Parse data from the html into a beautifulsoup object
- Convert into a dataframe
- Create a copy of the dataframe, to save yourself from troubles later on, and rename the columns.
- Clean the data
- Save the data in the form of csv files into Resources folder so that later on you can use this data for the ETL pipeline.

## Flask and web aplications

To load the visualisations and web portion of this project run the flask_app.py, ensuring you have the dependencies (psycopg2, flask, json) and have set up a local SQL database (this is done by running: queries.sql and data_etl.ipynb). The flask_app.py creates a locally hosted web directory on your machine, simply loading the local ip will bring you to the home page (index.html). From there you can follow the ‘nav-bar’ at the top of the web page to direct to each page within the locally hosted site. When flask_app.py is first loaded it will use the psycopg2 library to connect to the SQL database and pull the data from it. It then performs a json dump which is then output in the ‘/api’ directory which is called by other visualisations within the dataset. The directories within the flask server are as follows:

- ’/’ Which load the index.html and is the ‘home page’ for the flask server.
 
- ’/api’ Which loads the json file and is called when building the web visualisations.
 
- ’/visualisation1’ which loads vis_1.html that runs vis_1.js. Which creates an interactive plotly chart that allows the user to zoom in and displays the Total wins vs Participation. That shows the relation between participation and total wins.
 
- ’/visualisation2’ which loads vis_2.html that runs vis_2.js. Which creates an interactive plotly chart that allows the user to zoom in and displays the Total wins vs GDP. That shows the relation between gdp and total wins.
 
- ’/visualisation3’ which loads vis_3.html that runs vis_3.js. Which creates an interactive plotly chart that allows the user to zoom in and displays the Total wins vs Population. That shows the relation between population and total wins.
 
- ’/HighChartStacked’ which loads high_chart_stack.html that runs high_chart_stack.js. Which creates a highcharts stacked bar chart that provides a visualisation of each the breakdown of each countries total wins in both summer and winter olympic games.
 
- ’/scatterplot_gdp’ which loads scatter_plot_gdp.html that runs scatter_plot_gdp.js. Which creates an interactive plotly scatter plot that allows the user to zoom in and displays the relationship between gdp and total medals.
 
 
- ’/scatterplot_pop’ which loads scatter_plot_gdp.html that runs scatter_plot_gdp.js. Which creates an interactive plotly scatter plot that allows the user to zoom in and displays the relationship between population and total medals.
 
- ’/pie_region_wins’ which loads pie_region_wins.html that runs pie_region_wins.js. Which creates an interactive plotly pie chart that allows the user to select which regions are displayed within the pie chart showing the percentage of each United Nations defined region’s total wins.
 
- ’/pie_region_gdp’ which loads pie_region_gdp.html that runs pie_region_gdp.js. Which creates an interactive plotly pie chart that allows the user to select which regions are displayed within the pie chart showing the percentage of each United Nations defined region’s GDP.
 
- ’/pie_region_population’ which loads pie_region_population.html that runs pie_region_population.js. Which creates an interactive plotly pie chart that allows the user to select which regions are displayed within the pie chart showing the percentage of each United Nations defined region’s populaiton.


## Findings

 
## References:
1: https://www.nbcsports.com/bayarea/beijing-2022-winter-olympics/which-countries-have-won-most-olympic-medals

2: https://www.kaggle.com/datasets/sudalairajkumar/undata-country-profiles

3: https://en.wikipedia.org/wiki/All-time_Olympic_Games_medal_table

4: https://www.athleteassessments.com/factors-and-obstacles-influencing-olympic-performance/
