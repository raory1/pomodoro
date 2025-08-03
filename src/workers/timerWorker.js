let isRunning = false;

self.onmessage = function (e) {
  if (isRunning) {
    return;
  }

  isRunning = true;

  const state = e.data;
  const { activeTask, secondsRemaining } = state;

  const endTimeInMilliseconds = activeTask.startDate + secondsRemaining * 1000;

  console.log(new Date(endTimeInMilliseconds));

  function runTimer() {
    const now = Date.now();
    const remainingTime = Math.ceil((endTimeInMilliseconds - now) / 1000);

    self.postMessage(remainingTime);

    // if (remainingTime <= 0) {
    //   self.postMessage(remainingTime);
    //   isRunning = false;
    //   return;
    // }

    setTimeout(runTimer, 1000);
  }
  runTimer();
};
