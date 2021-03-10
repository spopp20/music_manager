## This Directory

The config directory contains scripts to query original MySql music database for data conversion into Mongo DB. Opensource DBeaver us used to run the queries and export the cleaner data results into JSON files. The load\_... js files are used to run the JSON files into collections on the Localhost or Remote Database.

## Currently

The scores collection currently contains only song text without MIME Types, and all records are associated to Congregation. I will need to convert also the various instrument score image files and record their MIME types so the browser knows how to render them properly.

## Plans

I have found that the existing music database fields are being used for 1, 2, 3 and 4 purposes to make up for the lack of features in the existing application. Song titles are prepended with special characters to place songs into groups that are availbale under less frequently used letters. Titles are also postfixed with (Group Name), and (Following Song Name). Song words contain English text, English text and Spanish text in parentheses and instructions in parentheses. Song words are cut to length in the database to fit onto a screen. These things need to change in an upgraded schema.

## Jupyter Notebook with

### Mysql Connection String

```bash
cp .env.example .env
```

Edit the .env file to contain the real MongoDB connection string

### Python3 package installs

```bash
python3 -m pip install pymysql
python3 -m pip install mysql-connector-python
python3 -m pip install sqlalchemy
python3 -m pip install pymongo
puthon3 -m pip install python-dotenv
```

### Install then Start jupyter notebook

```bash
jupyter notebook Convert_data.ipynb
```

Open the Jupyter Notebook in a browser

http://127.0.0.1:8888/

## Custom VM

Source: https://github.com/paulovn/ml-vm-notebook/
