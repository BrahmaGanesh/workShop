import mysql.connector
from mysql.connector import Error
from dotenv import load_dotenv
import os
load_dotenv()

def myConnection():
  try :
    conn=  mysql.connector.connect(
    host=os.getenv("DB_host"),
    user=os.getenv("DB_user"),
    password=os.getenv("DB_password"),
    database=os.getenv("DB_database")
    )
    print("Database connection successfully")
    return conn
  except Error as err:
    print(f"Error{err}")
    print("Check your .env file and Mysql server status.")
    return None