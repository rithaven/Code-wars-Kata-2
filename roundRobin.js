// Scheduling is how the processor decides which jobs (processes) get to use the processor and for how long. This can cause a lot of problems. Like a really long process taking the entire CPU and freezing all the other processes. One solution is Round-Robin, which today you will be implementing.
// Round-Robin works by queuing jobs in a First In First Out fashion, but the processes are only given a short slice of time. If a processes is not finished in that time slice, it yields the proccessor and goes to the back of the queue.

function roundRobin(jobs, slice, index) {
  let totalExecutionTime = 0;
  const queue = [...jobs];

  while (queue[index] > 0) {
    const currentJob = queue.shift();

    const executedTime = Math.min(currentJob, slice);

    queue.push(currentJob - executedTime);

    totalExecutionTime += executedTime;

    if (index === 0) index = queue.length - 1;
    else index--;
  }
  return totalExecutionTime;
}
