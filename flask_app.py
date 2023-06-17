import psycopg2
from psycopg2.extras import RealDictCursor
from flask import Flask, render_template, jsonify
import config
import json
import matplotlib.pyplot as plt


app = Flask(__name__)


def get_db_connection():
    conn = psycopg2.connect(host='localhost',
                            database='olympics',
                            user=config.Username,
                            password=config.Password)
    return conn


conn = get_db_connection()
cur = conn.cursor(cursor_factory=RealDictCursor)
cur.execute(r"""SELECT cs.country, cs.region, cs.population, cs.gdp, co.summer_total, co.winter_total, co.total_participation, co.total_won
            FROM country_socioeconomic as cs
            INNER JOIN country_olympics as co
            ON cs.country=co.country;""")
country_olympics = cur.fetchall()

country_olympics_json = json.dumps(country_olympics)
# cur.close()
# conn.close()


@app.route('/api')
def API():

    return country_olympics_json


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/visualisation1', methods=['GET', 'POST'])
def vis_1():
    return render_template('vis_1.html', jsonfile=country_olympics_json)


@app.route('/visualisation2', methods=['GET', 'POST'])
def vis_2():
    return render_template('vis_2.html', jsonfile=country_olympics_json)


@app.route('/visualisation3', methods=['GET', 'POST'])
def vis_3():
    return render_template('vis_3.html', jsonfile=country_olympics_json)


@app.route('/HighChartStacked', methods=['GET', 'POST'])
def high_chart_stack():
    return render_template('high_chart_stack.html')


@app.route('/scatterplot_gdp', methods=['GET', 'POST'])
def scatter_plot_gdp():

    x_data = [row['gdp'] for row in country_olympics]
    y_data = [row['total_won'] for row in country_olympics]

    fig, ax = plt.subplots()
    ax.scatter(x_data, y_data)

    ax.set_xlim(0, 3000000)
    ax.set_ylim(0, 1400)

    plt.xlabel('GDP')
    plt.ylabel('Total Medals Won')
    plt.title('Scatter Plot: GDP vs Total Medals Won')

    plt.savefig('static/scatter_plot_gdp.png')
    plt.close()

    return render_template('scatter_plot_gdp.html')


@app.route('/scatterplot_pop', methods=['GET', 'POST'])
def scatter_plot_pop():

    x_data = [row['population'] for row in country_olympics]
    y_data = [row['total_won'] for row in country_olympics]

    fig, ax = plt.subplots()
    ax.scatter(x_data, y_data)

    ax.set_xlim(0, 200000)
    ax.set_ylim(0, 1400)

    plt.xlabel('Population')
    plt.ylabel('Total Medals Won')
    plt.title('Scatter Plot: Population vs Total Medals Won')

    plt.savefig('static/scatter_plot_pop.png')
    plt.close()

    return render_template('scatter_plot_pop.html')


@app.route('/pie_region_wins', methods=['GET', 'POST'])
def pie_region_wins():
    return render_template('pie_region_wins.html')


@app.route('/pie_region_gdp', methods=['GET', 'POST'])
def pie_region_gdp():
    return render_template('pie_region_gdp.html')


@app.route('/pie_region_population', methods=['GET', 'POST'])
def pie_region_population():
    return render_template('pie_region_population.html')


@app.route('/total_participation_10', methods=['GET', 'POST'])
def total_participation_10():
    return render_template('total_participation_10.html')


@app.route('/total_gdp', methods=['GET', 'POST'])
def total_gdp():
    return render_template('total_gdp.html')


@app.route('/total_pop', methods=['GET', 'POST'])
def total_pop():
    return render_template('total_pop.html')


@app.route('/total_medals', methods=['GET', 'POST'])
def total_medals():
    return render_template('total_medals.html')


@app.route('/top_medals', methods=['GET', 'POST'])
def top_medals():
    return render_template('top_medals.html')


if __name__ == "__main__":
    app.run(debug=True)
