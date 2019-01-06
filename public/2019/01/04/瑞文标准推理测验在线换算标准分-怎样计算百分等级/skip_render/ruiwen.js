// age,score,std
NORM = [
    [5.5, 9, 5],
    [5.5, 12, 10],
    [5.5, 13, 25],
    [5.5, 16, 50],
    [5.5, 25, 75],
    [5.5, 34, 95],
    [6, 9, 5],
    [6, 12, 10],
    [6, 13, 25],
    [6, 17, 50],
    [6, 25, 75],
    [6, 36, 95],
    [6.5, 10, 5],
    [6.5, 12, 10],
    [6.5, 13, 25],
    [6.5, 18, 50],
    [6.5, 25, 75],
    [6.5, 37, 95],
    [7, 10, 5],
    [7, 12, 10],
    [7, 13, 25],
    [7, 19, 50],
    [7, 25, 75],
    [7, 43, 95],
    [7.5, 10, 5],
    [7.5, 12, 10],
    [7.5, 13, 25],
    [7.5, 21, 50],
    [7.5, 31, 75],
    [7.5, 44, 95],
    [8, 10, 5],
    [8, 13, 10],
    [8, 15, 25],
    [8, 23, 50],
    [8, 31, 75],
    [8, 44, 95],
    [8.5, 12, 5],
    [8.5, 14, 10],
    [8.5, 20, 25],
    [8.5, 29, 50],
    [8.5, 33, 75],
    [8.5, 45, 95],
    [9, 12, 5],
    [9, 14, 10],
    [9, 25, 25],
    [9, 33, 50],
    [9, 37, 75],
    [9, 47, 95],
    [9.5, 13, 5],
    [9.5, 17, 10],
    [9.5, 27, 25],
    [9.5, 35, 50],
    [9.5, 39, 75],
    [9.5, 50, 95],
    [10, 13, 5],
    [10, 17, 10],
    [10, 27, 25],
    [10, 35, 50],
    [10, 42, 75],
    [10, 50, 95],
    [10.5, 18, 5],
    [10.5, 25, 10],
    [10.5, 32, 25],
    [10.5, 39, 50],
    [10.5, 42, 75],
    [10.5, 50, 95],
    [11, 19, 5],
    [11, 25, 10],
    [11, 33, 25],
    [11, 39, 50],
    [11, 43, 75],
    [11, 52, 95],
    [11.5, 19, 5],
    [11.5, 25, 10],
    [11.5, 35, 25],
    [11.5, 42, 50],
    [11.5, 45, 75],
    [11.5, 53, 95],
    [12, 21, 5],
    [12, 27, 10],
    [12, 37, 25],
    [12, 42, 50],
    [12, 46, 75],
    [12, 53, 95],
    [12.5, 28, 5],
    [12.5, 33, 10],
    [12.5, 40, 25],
    [12.5, 45, 50],
    [12.5, 50, 75],
    [12.5, 53, 95],
    [13, 30, 5],
    [13, 35, 10],
    [13, 40, 25],
    [13, 45, 50],
    [13, 50, 75],
    [13, 53, 95],
    [13.5, 32, 5],
    [13.5, 35, 10],
    [13.5, 42, 25],
    [13.5, 46, 50],
    [13.5, 50, 75],
    [13.5, 54, 95],
    [14, 34, 5],
    [14, 36, 10],
    [14, 43, 25],
    [14, 48, 50],
    [14, 50, 75],
    [14, 55, 95],
    [14.5, 34, 5],
    [14.5, 36, 10],
    [14.5, 43, 25],
    [14.5, 48, 50],
    [14.5, 51, 75],
    [14.5, 55, 95],
    [15, 34, 5],
    [15, 36, 10],
    [15, 43, 25],
    [15, 48, 50],
    [15, 51, 75],
    [15, 57, 95],
    [15.5, 34, 5],
    [15.5, 41, 10],
    [15.5, 43, 25],
    [15.5, 49, 50],
    [15.5, 52, 75],
    [15.5, 57, 95],
    [16, 36, 5],
    [16, 41, 10],
    [16, 44, 25],
    [16, 49, 50],
    [16, 53, 75],
    [16, 57, 95],
    [16.5, 37, 5],
    [16.5, 41, 10],
    [16.5, 45, 25],
    [16.5, 49, 50],
    [16.5, 53, 75],
    [16.5, 57, 95],
    [17, 37, 5],
    [17, 40, 10],
    [17, 47, 25],
    [17, 52, 50],
    [17, 55, 75],
    [17, 58, 95],
    [20, 33, 5],
    [20, 38, 10],
    [20, 44, 25],
    [20, 50, 50],
    [20, 54, 75],
    [20, 57, 95],
    [30, 28, 5],
    [30, 34, 25],
    [30, 37, 10],
    [30, 48, 50],
    [30, 52, 75],
    [30, 57, 95],
    [40, 28, 5],
    [40, 31, 10],
    [40, 41, 25],
    [40, 47, 50],
    [40, 50, 75],
    [40, 57, 95],
    [50, 21, 5],
    [50, 24, 10],
    [50, 34, 25],
    [50, 42, 50],
    [50, 48, 75],
    [50, 54, 95],
    [60, 19, 5],
    [60, 22, 10],
    [60, 30, 25],
    [60, 37, 50],
    [60, 46, 75],
    [60, 54, 95],
    [70, 17, 5],
    [70, 18, 10],
    [70, 26, 25],
    [70, 33, 50],
    [70, 44, 75],
    [70, 52, 95],

]


_AGES = []
function age_range(age) {
    if (_AGES.length == 0) {
        NORM.forEach(row => {
            age_0 = row[0]
            if (!_AGES.includes(age_0)) {
                _AGES.push(age_0)
            }
        });
        _AGES = _AGES.sort(function (x, y) {
            x - y
        })
        console.log(_AGES)
    }
    rtn = null
    for (let i = 0; i < _AGES.length; i++) {
        if (age <= _AGES[i]) {
            rtn = _AGES[i]
            return rtn
        }
    }
    if (rtn == null) {
        rtn = _AGES[-1]
    }
    return rtn
}


function score_range(age, score) {
    scores = []
    NORM.forEach(row => {
        if (row[0] == age) {
            if (!scores.includes(row[1])) {
                scores.push(row[1])
            }
        }
    });
    scores.sort(function (x, y) {
        y - x
    })
    console.log(scores)
    rtn = null
    scores.forEach(s => {
        if (score >= s) {
            rtn = s
            return rtn
        }
    });
    if (rtn == null) {
        rtn = scores[-1]
    }
    return rtn
}


function std_score(age, score) {
    std = null
    scores = []
    age = age_range(age)
    score = score_range(age, score)
    console.log(['age', age, 'score', score])
    rtn = null
    NORM.forEach(row => {
        if (row[0] == age & row[1] == score) {
            rtn = row[2]
            return rtn
        }
    });
    return rtn
}


function calculate() {
    age = $('#age').val()
    score = $('#score').val()
    std_score_input = $('#std_score')
    std_score_input.val(std_score(age, score))
}

function read_and_calculate() {
    str_data = $('#data').val()
    if (!str_data) {
        str_data = $('#data').attr('placeholder')
    }
    console.log('str_data: \n' + str_data)
    data = str_data.split('\n')
    console.log(data)
    rtn2 = []
    data.forEach(row => {
        row = row.split('\t')
        console.log(row)
        age = parseFloat(row[0])
        score = parseFloat(row[row.length - 1])
        console.log('rtn:')
        console.log(rtn2)
        if (age & score) {
            rtn2.push([age, score, std_score(age, score)])
        }
    });
    return rtn2

}

function str_result(results) {
    rtn3 = ''
    results.forEach(row => {
        rtn3 += row.join('\t')
        rtn3 += '\n'
    });
    return rtn3
}

function download_content(results) {
    rtn4 = ''
    results.forEach(row => {
        rtn4 += row.join('%2C')
        rtn4 += '%0A'
    });
    return rtn4
}

function scale_cal() {
    data = read_and_calculate()
    console.log(data)
    str_data = str_result(data)
    console.log(str_data)
    $('#data').val(str_data)
    content = download_content(data)
    header = 'Age%2CScore%2CPercentile%0A'
    $('#download').attr('href', 'data:application/octet-stream,' + header + content)
}

function clear() {
    $('#data').val('')
}