import random

classroomAverage = [0, 0, 0, 0, 0, 0, 100, 500, 1000, 2000, 5000, 7000, 4000, 3000, 5000, 7000, 9000, 11000, 8000, 
        5000, 8000, 12000, 10000, 3000]
canteenAverage = [0, 0, 0, 0, 0, 1000, 5000, 8000, 6000, 3000, 1000, 3000, 10000, 7000, 3000, 1000, 300, 3000, 9000,
        7000, 3000, 1000, 300, 0]

def getData(title, dataList, rate):
    data = []
    for dayIndex in range(4, 5):
        for index in range(0, 24):
            date = "3/" + str(dayIndex) + " " + str(index) + ":00"
            item = dataList[index] * rate
            value = random.randint(item * 0.8, item * 1.2)
            data.append({ "date": date, "value": value})
    return { "title": title, "data": data }

print([getData("教室", classroomAverage, 1), getData("食堂", canteenAverage, 1), getData("快递", canteenAverage, 0.3), getData("小月亮", canteenAverage, 0.5)])
