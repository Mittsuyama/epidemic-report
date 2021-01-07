import json
import datetime
# import pymysql
import time
from flask_sqlalchemy import SQLAlchemy
from flask import Flask, request, jsonify

app = Flask(__name__)


user = 'root'
password = 'mysql'
database = 'ESS'
app.config['SQLALCHEMY_DATABASE_URI'] = (
    'mysql://%s:%s@127.0.0.1:3306/%s' % (user, password, database))
SQLALCHEMY_TRACK_MODIFICATIONS = True
app.config['SQLALCHEMY_ECHO'] = True
app.config['SQLALCHEMY_COMMIT_ON_TEARDOWN'] = False
app.config['JSON_AS_ASCII'] = False


db = SQLAlchemy(app)


class Info(db.Model):
    __tablename__ = 'info'
    name = db.Column(db.String(30), nullable=False)
    gender = db.Column(db.String(30), nullable=False)
    id = db.Column(db.String(30), primary_key=True, nullable=False)
    academy = db.Column(db.String(30), nullable=False)
    phone = db.Column(db.String(30), nullable=False)
    arrive_time = db.Column(db.String(30), nullable=False)
    transportation = db.Column(db.String(30), nullable=False)
    dom = db.Column(db.String(30), nullable=False)
    classes = db.Column(db.String(30), nullable=False)
    infect = db.Column(db.String(30), nullable=False)
    ok = db.Column(db.String(30), nullable=False)
    contact = db.Column(db.String(30), nullable=False)
    symptom = db.Column(db.String(30), nullable=False)


class Personal(db.Model):
    __tablename__ = 'personal'
    id = db.Column(db.String(30), primary_key=True, nullable=False)
    update_time = db.Column(db.String(30), primary_key=True, nullable=False)
    degree = db.Column(db.String(30), nullable=False)
    symptom = db.Column(db.String(30), nullable=False)
    if_out = db.Column(db.String(30))
    contact = db.Column(db.String(30))
    doctor = db.Column(db.String(30))
    infect = db.Column(db.String(30))


class Room(db.Model):
    __tablename__ = 'room'
    dom = db.Column(db.String(30), primary_key=True, nullable=False)
    id = db.Column(db.String(30), primary_key=True, nullable=False)
    update_time = db.Column(db.String(30), primary_key=True, nullable=False)
    refresh = db.Column(db.String(30), nullable=False)
    symptom = db.Column(db.String(30), nullable=False)
    if_out = db.Column(db.String(30))
    contact = db.Column(db.String(30))
    doctor = db.Column(db.String(30))
    infect = db.Column(db.String(30))


class Classroom(db.Model):
    __tablename__ = 'classroom'
    name = db.Column(db.String(30), nullable=False)
    id = db.Column(db.String(30), primary_key=True, nullable=False)
    building = db.Column(db.String(30), primary_key=True, nullable=False)
    classroom = db.Column(db.String(30), primary_key=True, nullable=False)
    start_time = db.Column(db.String(30), primary_key=True, nullable=False)
    end_time = db.Column(db.String(30), primary_key=True, nullable=False)


class Canteen(db.Model):
    __tablename__ = 'canteen'
    name = db.Column(db.String(30), nullable=False)
    id = db.Column(db.String(30), primary_key=True, nullable=False)
    building = db.Column(db.String(30), primary_key=True, nullable=False)
    start_time = db.Column(db.String(30), primary_key=True, nullable=False)
    end_time = db.Column(db.String(30), primary_key=True, nullable=False)


class Express(db.Model):
    __tablename__ = 'express'
    name = db.Column(db.String(30), nullable=False)
    id = db.Column(db.String(30), primary_key=True, nullable=False)
    start_time = db.Column(db.String(30), primary_key=True, nullable=False)
    end_time = db.Column(db.String(30), primary_key=True, nullable=False)


class Supermarket(db.Model):
    __tablename__ = 'supermarket'
    name = db.Column(db.String(30), nullable=False)
    id = db.Column(db.String(30), primary_key=True, nullable=False)
    start_time = db.Column(db.String(30), primary_key=True, nullable=False)
    end_time = db.Column(db.String(30), primary_key=True, nullable=False)


def searchBooking(table):
    booking = [0 for index in range(80)]
    sql = 'select * from ' + table
    date = db.session.execute(sql)
    date = [dict(row) for row in date]
    nowDate = datetime.datetime.now()
    nowDate = nowDate.replace(day=2, hour=0, minute=0, second=0)
    nowDate = str(nowDate)
    nowDate = time.strptime(nowDate, '%Y-%m-%d %H:%M:%S.%f')
    nowDate1 = int(time.mktime(nowDate))
    for row in date:
        start_time = row['start_time']
        end_time = row['end_time']
        startTime = time.strptime(start_time, '%Y-%m-%dT%H:%M:%S.%fZ')
        startTime1 = int(time.mktime(startTime))
        endTime = time.strptime(end_time, '%Y-%m-%dT%H:%M:%S.%fZ')
        endTime1 = int(time.mktime(endTime))
        hour1 = int((startTime1 - nowDate1) / 3600) + 24
        hour2 = int((endTime1 - nowDate1) / 3600) + 25
        if hour1 >= 0 and hour1 < 72:
            booking[hour1] += 1
        if hour2 >= 0 and hour2 < 72:
            booking[hour2] -= 1
    for index in range(1, 72):
        booking[index] += booking[index - 1]
    dateValue = [[0 for i in range(2)]for i in range(72)]
    for row in range(72):
        dateValue[row][0] = row
        dateValue[row][1] = booking[row]
    ans = [{'date': x[0], 'value': x[1]} for x in dateValue]
    return ans


@app.route('/api/info', methods=['GET', 'POST'])
def getInfo():
    data = json.loads(request.get_data())
    role = Info(name=data['name'], gender=data['gender'], id=data['id'],
                academy=data['academy'], phone=data['phone'],
                arrive_time=data['arrive_time'],
                transportation=data['transportation'], dom=data['dom'],
                classes=data['class'], infect=data['infect'], ok=data['ok'],
                contact=data['contact'], symptom=data['symptom'])
    db.session.add(role)
    db.session.commit()


@app.route('/api/personal', methods=['GET', 'POST'])
def getPersonal():
    data = json.loads(request.get_data())
    role = Personal(id=data['id'], update_time=datetime.datetime.now(),
                    degree=data['degree'], symptom=data['symptom'],
                    if_out=data['out'], contact=data['contact'],
                    doctor=data['doctor'], infect=data['infect'])
    db.session.add(role)
    db.session.commit()


@app.route('/api/room', methods=['GET', 'POST'])
def getRoom():
    data = json.loads(request.get_data())
    role = Room(dom=data['dom'], id=data['id'],
                update_time=datetime.datetime.now(),
                refresh=data['refresh'], symptom=data['symptom'],
                if_out=data['out'], contact=data['contact'],
                doctor=data['doctor'], infect=data['infect'])
    db.session.add(role)
    db.session.commit()


@app.route('/api/booking/classroom', methods=['GET', 'POST'])
def getClassroom():
    data = json.loads(request.get_data())
    role = Classroom(name=data['name'], id=data['id'],
                     building=data['building'], classroom=data['classroom'],
                     start_time=data['start_time'], end_time=data['end_time'])
    db.session.add(role)
    db.session.commit()


@app.route('/api/booking/canteen', methods=['GET', 'POST'])
def getCanteen():
    data = json.loads(request.get_data())
    role = Canteen(name=data['name'], id=data['id'],
                   building=data['building'],
                   start_time=data['start_time'], end_time=data['end_time'])
    db.session.add(role)
    db.session.commit()


@app.route('/api/booking/express', methods=['GET', 'POST'])
def getExpress():
    data = json.loads(request.get_data())
    role = Express(name=data['name'], id=data['id'],
                   start_time=data['start_time'], end_time=data['end_time'])
    db.session.add(role)
    db.session.commit()


@app.route('/api/booking/supermarket', methods=['GET', 'POST'])
def getSupermarket():
    data = json.loads(request.get_data())
    role = Supermarket(name=data['name'], id=data['id'],
                       start_time=data['start_time'],
                       end_time=data['end_time'])
    db.session.add(role)
    db.session.commit()


@app.route('/api/booking/data', methods=['GET', 'POST'])
def search():
    classroom = searchBooking('classroom')
    canteen = searchBooking('canteen')
    express = searchBooking('express')
    supermarket = searchBooking('supermarket')
    return json.dumps({
        'status': 200,
        'data': [
            {
                'title': '教室',
                'data': classroom,
            },
            {
                'title': '食堂',
                'data': canteen,
            },
            {
                'title': '快递',
                'data': express,
            },
            {
                'title': '超市',
                'data': supermarket,
            },
        ]
    })


if __name__ == '__main__':
    app.debug = True
    app.run()
