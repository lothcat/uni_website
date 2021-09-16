function randomNum(minWaitTime, maxWaitTime) {
    return Math.floor(Math.random() * (maxWaitTime - minWaitTime + 1) ) + minWaitTime;
}

document.getElementById("time").innerText = randomNum(2, 15);
