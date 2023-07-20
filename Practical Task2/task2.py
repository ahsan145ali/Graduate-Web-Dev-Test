#!/usr/bin/env python
# coding: utf-8

# In[1]:


from flask import Flask, render_template
import pandas as pd

app = Flask(__name__)

@app.route('/')
def index():
    data = pd.read_csv('students-and-subjects.csv')
    students = data.to_dict(orient='records')
    return render_template('task2.html', students=students)

if __name__ == '__main__':
    app.run()


# In[ ]:




